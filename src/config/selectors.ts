interface ProductDetailSelectors {
    name: string;
    price: string;
    image: string;
    rating: string;
    product_highlight: string;
    alt_product_highlight: string;
    seller: string;
    alt_seller: string;
    return_policy: string;
    alt_return_policy: string;
    delivery_type: string;
    alt_delivery_type: string;
    delivery_charge: string;
    alt_delivery_charge: string;
    delivery_time: string;
    alt_delivery_time: string;
}

// Defining the selectors for various product details
const productDetailSelectors: ProductDetailSelectors = {
    name: 'body.pdp-layout-column-2:nth-child(2) div.pdp-block div.pdp-block.pdp-block__main-information:nth-child(3) div.pdp-block.pdp-block__main-information-detail:nth-child(2) div.pdp-block div.pdp-block.pdp-block__product-detail:nth-child(1) div.pdp-block.module:nth-child(3) div.pdp-product-title div.pdp-mod-product-badge-wrapper > span.pdp-mod-product-badge-title',

    price: 'body.pdp-layout-column-2:nth-child(2) div.pdp-block div.pdp-block.pdp-block__main-information:nth-child(3) div.pdp-block.pdp-block__main-information-detail:nth-child(2) div.pdp-block div.pdp-block.pdp-block__product-detail:nth-child(1) div.pdp-block.module:nth-child(7) div.pdp-mod-product-price div.pdp-product-price > span.pdp-price.pdp-price_type_normal.pdp-price_color_orange.pdp-price_size_xl',

    image: 'body.pdp-layout-column-2:nth-child(2) div.pdp-block div.pdp-block.pdp-block__main-information:nth-child(3) div.pdp-block.pdp-block__gallery:nth-child(1) div.pdp-block.module div.item-gallery div.gallery-preview-panel div.gallery-preview-panel__content > img.gallery-preview-panel__image',

    rating: 'body.pdp-layout-column-2:nth-child(2) div.pdp-block div.pdp-block.pdp-block__additional-information:nth-child(9) div.pdp-block.pdp-block__product-description:nth-child(1) div.pdp-block.fixed-width-full.background-2:nth-child(1) div.pdp-block.module div.lazyload-wrapper div.review-new-wrapper div:nth-child(2) div.review-info:nth-child(1) div.review-info-left div.review-info-rate > span.score',

    product_highlight: 'body.pdp-layout-column-2:nth-child(2) div.pdp-block div.pdp-block.pdp-block__additional-information:nth-child(9) div.pdp-block.pdp-block__product-description:nth-child(1) div.pdp-block.fixed-width-full.block-margin-top.background-2:nth-child(2) div.pdp-block.module div.pdp-product-detail div.pdp-product-desc > div.html-content.pdp-product-highlights:nth-child(1)',

    alt_product_highlight: 'body.pdp-layout-column-2:nth-child(2) div.pdp-block div.pdp-block.pdp-block__additional-information:nth-child(9) div.pdp-block.pdp-block__product-description:nth-child(1) div.pdp-block.fixed-width-full.block-margin-top.background-2:nth-child(2) div.pdp-block.module div.pdp-product-detail div.pdp-product-desc.height-limit > div.html-content.pdp-product-highlights:nth-child(1)',

    seller: 'body.pdp-layout-column-2:nth-child(2) div.pdp-block div.pdp-block.pdp-block__main-information:nth-child(3) div.pdp-block.pdp-block__main-information-detail:nth-child(2) div.pdp-block div.pdp-block.pdp-block__delivery-seller:nth-child(2) div.pdp-block.module:nth-child(5) div.seller-container div.seller-name div.seller-name__wrapper div.seller-name__detail > a.pdp-link.pdp-link_size_l.pdp-link_theme_black.seller-name__detail-name:nth-child(1)',
    
    alt_seller: 'body.pdp-layout-column-2:nth-child(2) div.pdp-block div.pdp-block.pdp-block__main-information:nth-child(3) div.pdp-block.pdp-block__main-information-detail:nth-child(2) div.pdp-block div.pdp-block.pdp-block__delivery-seller:nth-child(2) div.pdp-block.module:nth-child(5) div.seller-container div.seller-name-retail div.seller-name__wrapper div.seller-name__detail > a.pdp-link.pdp-link_size_l.pdp-link_theme_black.seller-name__detail-name:nth-child(1)',

    return_policy: 'body.pdp-layout-column-2:nth-child(2) div.pdp-block div.pdp-block.pdp-block__main-information:nth-child(3) div.pdp-block.pdp-block__main-information-detail:nth-child(2) div.pdp-block div.pdp-block.pdp-block__delivery-seller:nth-child(2) div.pdp-block.module:nth-child(3) div.warranty div.warranty__options div.warranty__option-item:nth-child(1) div.delivery-option-item.delivery-option-item_type_returnPolicy14 div.delivery-option-item__body div.delivery-option-item__info div.delivery-option-item__title > span:nth-child(1)',

    alt_return_policy: 'body.pdp-layout-column-2:nth-child(2) div.pdp-block div.pdp-block.pdp-block__main-information:nth-child(3) div.pdp-block.pdp-block__main-information-detail:nth-child(2) div.pdp-block div.pdp-block.pdp-block__delivery-seller:nth-child(2) div.pdp-block.module:nth-child(3) div.warranty div.warranty__options div.warranty__option-item:nth-child(2) div.delivery-option-item.delivery-option-item_type_returnPolicy14 div.delivery-option-item__body div.delivery-option-item__info div.delivery-option-item__title > span:nth-child(1)',

    delivery_type: 'body.pdp-layout-column-2:nth-child(2) div.pdp-block div.pdp-block.pdp-block__main-information:nth-child(3) div.pdp-block.pdp-block__main-information-detail:nth-child(2) div.pdp-block div.pdp-block.pdp-block__delivery-seller:nth-child(2) div.pdp-block.module:nth-child(1) div.delivery div.delivery__content div.delivery__options div.delivery__option:nth-child(1) div.delivery-option-item.delivery-option-item_type_standard div.delivery-option-item__body div.delivery-option-item__info div.delivery-option-item__title > span:nth-child(1)',

    alt_delivery_type: 'body.pdp-layout-column-2:nth-child(2) div.pdp-block div.pdp-block.pdp-block__main-information:nth-child(3) div.pdp-block.pdp-block__main-information-detail:nth-child(2) div.pdp-block div.pdp-block.pdp-block__delivery-seller:nth-child(2) div.pdp-block.module:nth-child(1) div.delivery div.delivery__content div.delivery__options div.delivery__option:nth-child(1) div.delivery-option-item.delivery-option-item_type_express div.delivery-option-item__body div.delivery-option-item__info div.delivery-option-item__title > span:nth-child(1)',

    delivery_charge: 'body.pdp-layout-column-2:nth-child(2) div.pdp-block div.pdp-block.pdp-block__main-information:nth-child(3) div.pdp-block.pdp-block__main-information-detail:nth-child(2) div.pdp-block div.pdp-block.pdp-block__delivery-seller:nth-child(2) div.pdp-block.module:nth-child(1) div.delivery div.delivery__content div.delivery__options div.delivery__option:nth-child(1) div.delivery-option-item.delivery-option-item_type_standard div.delivery-option-item__body > div.delivery-option-item__shipping-fee',

    alt_delivery_charge: 'body.pdp-layout-column-2:nth-child(2) div.pdp-block div.pdp-block.pdp-block__main-information:nth-child(3) div.pdp-block.pdp-block__main-information-detail:nth-child(2) div.pdp-block div.pdp-block.pdp-block__delivery-seller:nth-child(2) div.pdp-block.module:nth-child(1) div.delivery div.delivery__content div.delivery__options div.delivery__option:nth-child(1) div.delivery-option-item.delivery-option-item_type_express div.delivery-option-item__body > div.delivery-option-item__shipping-fee',

    delivery_time: 'body.pdp-layout-column-2:nth-child(2) div.pdp-block div.pdp-block.pdp-block__main-information:nth-child(3) div.pdp-block.pdp-block__main-information-detail:nth-child(2) div.pdp-block div.pdp-block.pdp-block__delivery-seller:nth-child(2) div.pdp-block.module:nth-child(1) div.delivery div.delivery__content div.delivery__options div.delivery__option:nth-child(1) div.delivery-option-item.delivery-option-item_type_standard div.delivery-option-item__body div.delivery-option-item__info > div.delivery-option-item__time',

    alt_delivery_time: 'body.pdp-layout-column-2:nth-child(2) div.pdp-block div.pdp-block.pdp-block__main-information:nth-child(3) div.pdp-block.pdp-block__main-information-detail:nth-child(2) div.pdp-block div.pdp-block.pdp-block__delivery-seller:nth-child(2) div.pdp-block.module:nth-child(1) div.delivery div.delivery__content div.delivery__options div.delivery__option:nth-child(1) div.delivery-option-item.delivery-option-item_type_express div.delivery-option-item__body div.delivery-option-item__info > div.delivery-option-item__time'
};

export { productDetailSelectors };
