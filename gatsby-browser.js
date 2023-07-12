import "./src/styles/global.css"

import Layout from "./src/components/Layout"

const isAlredyLoaded = (url) => {
    if (!url) url = "http://xxx.co.uk/xxx/script.js";
    var scripts = document.getElementsByTagName('script');
    for (var i = scripts.length; i--;) {
        if (scripts[i].src == url) return true;
    }
    return false;
}

const addExternalScript = (urls, idx = 0, cb) => {
    if(idx < urls.length){
      if(!isAlredyLoaded(urls[idx])){
        console.log("loading : ", urls[idx])
        let i = idx
        const script = document.createElement('script');
        script.src = urls[idx];
        script.async=true;
        script.onload = ()=> addExternalScript(urls, i+1);
        script.onerror = () => console.log("failed to load : ", urls[idx])
        document.body.appendChild(script);
      }
      else{
        addExternalScript(urls, idx+1)
      }
    }
    else if(cb) {
      cb()
    }
}
  
const scrtpts = [
    "https://tgibfnov2022.click/wp-includes/js/jquery/jquery.min.js?ver=3.6.4",
    "https://tgibfnov2022.click/wp-includes/js/jquery/jquery-migrate.min.js?ver=3.4.0",
    "https://tgibfnov2022.click/wp-content/plugins/unlimited-elementor-inner-sections-by-boomdevs/public/js/euis-public.js?ver=1.0.0",
    "https://tgibfnov2022.click/wp-content/plugins/elementor-pro/assets/js/elements-handlers.min.js?ver=3.14.1",
    "./inline-scripts/local.js",
    "https://tgibfnov2022.click/wp-content/themes/oceanwp-child-theme-master/js/owl.carousel.min.js",
    "./inline-scripts/owl.js",
    // "https://tgibfnov2022.click/wp-includes/js/imagesloaded.min.js?ver=4.1.4",
    // "./inline-scripts/oceanwp-main-js-extra.js",
    // "https://tgibfnov2022.click/wp-content/themes/oceanwp/assets/js/theme.min.js?ver=1.0",
    // "https://tgibfnov2022.click/wp-content/themes/oceanwp/assets/js/drop-down-mobile-menu.min.js?ver=1.0",
    // "https://tgibfnov2022.click/wp-content/themes/oceanwp/assets/js/vendors/magnific-popup.min.js?ver=1.0",
    // "https://tgibfnov2022.click/wp-content/themes/oceanwp/assets/js/ow-lightbox.min.js?ver=1.0",
    // "https://tgibfnov2022.click/wp-content/themes/oceanwp/assets/js/ow-slider.min.js?ver=1.0",
    // "https://tgibfnov2022.click/wp-content/themes/oceanwp/assets/js/scroll-effect.min.js?ver=1.0",
    // "https://tgibfnov2022.click/wp-content/themes/oceanwp/assets/js/scroll-top.min.js?ver=1.0",
    // "https://tgibfnov2022.click/wp-content/themes/oceanwp/assets/js/select.min.js?ver=1.0",
    // "./inline-scripts/ivory-search-scripts-js-extra.js",
    // "https://tgibfnov2022.click/wp-content/plugins/add-search-to-menu/public/js/ivory-search.min.js?ver=5.5.2",
    // "https://tgibfnov2022.click/wp-content/plugins/elementor-pro/assets/js/frontend.min.js?ver=3.14.1",
    // "https://tgibfnov2022.click/wp-content/plugins/elementor/assets/lib/waypoints/waypoints.min.js?ver=4.0.2"
]
  
addExternalScript(scrtpts)

export const wrapPageElement =  Layout;