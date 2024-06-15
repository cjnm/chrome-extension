import { useState } from 'react';
import { productDetailSelectors } from './config/selectors';
import { saveProductToDashboard } from './utils/product';
import { logout as _logout } from './utils/auth';

function App({setLoggedin}: any) {
  const [productScraped, setProductScraped] = useState(false);
  const [productSaved, setProductSaved] = useState(false);
  const [invalidURL, setInvalidURL] = useState(false);
  const [productSaveFailed, setProductSaveFailed] = useState(false);
  const [product, setProduct] = useState({
    name: '',
    price: '',
    image: '',
    rating: '',
    product_highlight: '',
    seller: '',
    seller_url: '',
    return_policy: '',
    delivery_type: '',
    delivery_charge: '',
    delivery_time: '',
    product_url: ''
  });

  const isValidDarazUrl = (url: string) => {
    try {
      const _url = new URL(url);
      return _url.hostname === 'www.daraz.com.np';
    } catch (e) {
      return false;
    }
  }

  const scrapeProduct = async () => {
    const [tab] = await chrome.tabs.query({ active: true });
    chrome.scripting.executeScript<any[], void>({
      target: { tabId: tab.id! },
      args: [productDetailSelectors],
      func: getProductDeatil
    });
  }

  const openDaraz = async () => {
    chrome.tabs.create({ url: 'https://daraz.com.np' });
  }

  const getProductDeatil = (productDetailSelectors: any) => {
    const product_details = {
      name: document.querySelector(productDetailSelectors.name)?.innerHTML || null,
      price: document.querySelector(productDetailSelectors.price)?.innerHTML || null,
      image: document.querySelector(productDetailSelectors.image)?.getAttribute('src') || null,
      rating: document.querySelector(productDetailSelectors.rating)?.innerHTML || null,
      product_highlight: document.querySelector(productDetailSelectors.product_highlight)?.innerHTML
        || document.querySelector(productDetailSelectors.alt_product_highlight)?.innerHTML
        || null,
      seller: document.querySelector(productDetailSelectors.seller)?.innerHTML
        || document.querySelector(productDetailSelectors.alt_seller)?.innerHTML
        || null,
      seller_url: document.querySelector(productDetailSelectors.seller)?.getAttribute('href')
        || document.querySelector(productDetailSelectors.alt_seller)?.getAttribute('href')
        || null,
      return_policy: document.querySelector(productDetailSelectors.return_policy)?.innerHTML
        || document.querySelector(productDetailSelectors.alt_return_policy)?.innerHTML
        || null,
      delivery_type: document.querySelector(productDetailSelectors.delivery_type)?.innerHTML
        || document.querySelector(productDetailSelectors.alt_delivery_type)?.innerHTML
        || null,
      delivery_charge: document.querySelector(productDetailSelectors.delivery_charge)?.innerHTML
        || document.querySelector(productDetailSelectors.alt_delivery_charge)?.innerHTML
        || null,
      delivery_time: document.querySelector(productDetailSelectors.delivery_time)?.innerHTML
        || document.querySelector(productDetailSelectors.alt_delivery_time)?.innerHTML
        || null,
      product_url: window.location.href
    }

    chrome.runtime.sendMessage({ ...product_details })
  }

  //message listner
  chrome.runtime.onMessage.addListener((request) => {
    const {
      name,
      price,
      image,
      rating,
      product_highlight,
      seller,
      seller_url,
      return_policy,
      delivery_type,
      delivery_charge,
      delivery_time,
      product_url
    } = request;

    if(!isValidDarazUrl(product_url)) {
      setInvalidURL(true);
      return;
    }

    setProductScraped(true);
    setProduct({
      name,
      price,
      image,
      rating,
      product_highlight,
      seller,
      seller_url,
      return_policy,
      delivery_type,
      delivery_charge,
      delivery_time,
      product_url
    });
  })

  const clear = () => {
    setProduct({
      name: '',
      price: '',
      image: '',
      rating: '',
      product_highlight: '',
      seller: '',
      seller_url: '',
      return_policy: '',
      delivery_type: '',
      delivery_charge: '',
      delivery_time: '',
      product_url: ''
    });
    setProductScraped(false);
    setProductSaved(false);
    setProductSaveFailed(false);
  }

  const logout = () => {
    _logout();
    setLoggedin(false);
  }

  const save = () => {
    saveProductToDashboard(product).then(response => {
      if(response) {
        setProductSaved(true);
      } else {
        setProductSaved(true);
        setProductSaveFailed(true);
      }
    });
  }

  return (
    <>
      <span onClick={logout} className='logout'>logout</span>
      <h2>Daraz Web Scraping</h2>
      {!invalidURL
        ? <div className="card">
        {!productScraped ? <button onClick={scrapeProduct}>Grab Product</button> : ''}
        {productScraped ? <>
          <p>The details for the product</p>
          <kbd>{product?.name}</kbd>
          <p>has been captutured.</p>
        </> : ''}
          {productScraped ? <>
            {!productSaved ? <button onClick={save}>Save</button> : <p style={{color: `${productSaveFailed ? 'red' : 'greenyellow'}`, font: '11px'}}>{productSaveFailed ? 'Failed to save product.' : 'Product Saved.'}</p>}
            {(productSaved && !productSaveFailed) ? <button onClick={clear}>View Saved</button> : ''}
            <button onClick={clear}>{productSaved ? 'Back' : 'Clear'}</button>
          </> :''}
      </div>
      :<div className='card'>
        <p>The extension can not get product data from the current page.</p>
        <p>Please visit <a onClick={openDaraz}>daraz.com.np</a>, open a product and try again.</p>
      </div>}
    </>
  )
}

export default App
