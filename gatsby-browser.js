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
  "./inline-scripts/jquery.min.js",
  "./inline-scripts/webpack.runtime.min.js",
  "./inline-scripts/frontend-modules.min.js",
  "./inline-scripts/elementor-frontend-js-before.js",
  "./inline-scripts/frontend.min.js",
  "./inline-scripts/owl.min.js",
  "./inline-scripts/owl.js",
]
  
addExternalScript(scrtpts)

export const wrapPageElement =  Layout;