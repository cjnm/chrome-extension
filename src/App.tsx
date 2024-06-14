import './App.css'
import { productDetailSelectors } from './config/selectors';

function App() {

  const scrapeProduct = async () => {
    let [tab] = await chrome.tabs.query({ active: true });
    chrome.scripting.executeScript<any[], void>({
      target: { tabId: tab.id! },
      args: [productDetailSelectors],
      func: getProductDeatil
    });
  }

  const getProductDeatil = (productDetailSelectors: any) => {
    const product_details = {
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
      delivery_type: document.querySelector(productDetailSelectors.delivery_type)?.innerHTML || null,
      delivery_charge: document.querySelector(productDetailSelectors.delivery_charge)?.innerHTML || null,
      delivery_time: document.querySelector(productDetailSelectors.delivery_time)?.innerHTML || null,
      product_url: window.location.href
    }

    chrome.runtime.sendMessage({...product_details})
  }

  //message listner
  chrome.runtime.onMessage.addListener((request) => {
    const {
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

    console.log( {
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

  return (
    <>
      <h1>Daraz Web Scraping</h1>
      <div className="card">
        <button onClick={scrapeProduct}>
          Check Page
        </button>
        <p>Product name: {'x'}</p>
      </div>
    </>
  )
}

export default App
