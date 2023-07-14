import * as React from "react";
import { Helmet } from "react-helmet"

const isAlredyLoaded = (url) => {
  if (!url) return true
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
      script.src = window.location.origin + urls[idx];
      script.async=true;
      script.onload = ()=> addExternalScript(urls, i+1, cb);
      script.onerror = () => console.log("failed to load : ", urls[idx])
      document.body.appendChild(script);
    }
    else{
      addExternalScript(urls, idx+1, cb)
    }
  }
  else if(cb) {
    cb()
  }
}

const scrtpts = [
"/inline-scripts/jquery.min.js",
"/inline-scripts/webpack.runtime.min.js",
"/inline-scripts/frontend-modules.min.js",
"/inline-scripts/elementor-frontend-js-before.js",
"/inline-scripts/frontend.min.js",
"/inline-scripts/owl.min.js",
"/inline-scripts/owl.js",
]

export default function Page({ pageContext }) {
  const { title, html, pageId, guid, id } = pageContext
  const [load, setLoad] = React.useState(false)

  if(typeof window !== 'undefined'){
    addExternalScript(scrtpts, 0, () => {
      setTimeout(() => {
        setLoad(true)
      },10)
    })
  }


  return (
  <>
    <Helmet>
      <title>{title}</title>

      <link rel="preload" as="style" onload="this.rel='stylesheet'"  id="sbi_styles-css"
        href={`https://tgibfnov2022.click/wp-content/uploads/elementor/css/post-${pageId}.css?ver=1688736518`}
        media="all"
      />

    </Helmet>
      
    <div id="outer-wrap" className="site clr" style={{ opacity: load ? 1 : 0 }}>
      <div id="wrap">
        <main 
          id="main" 
          className="site-main clr" 
          role="main"
          dangerouslySetInnerHTML={{
            __html: html
          }}
        >
        </main>
      </div>
    </div>
    
   
  </>
    
  );
}

