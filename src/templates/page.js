import * as React from "react";
import { Helmet } from "react-helmet"
import { Script, link } from "gatsby";


export default function Page({ pageContext }) {
  const { title, html, pageId, guid, id } = pageContext

  
  return (
  <>
  <Helmet>
      <title>{title}</title>

      <link rel="preload" as="style" onload="this.rel='stylesheet'"  id="sbi_styles-css"
        href={`https://tgibfnov2022.click/wp-content/uploads/elementor/css/post-${pageId}.css?ver=1688736518`}
        media="all"
      />

    </Helmet>
      
    <div id="outer-wrap" className="site clr">
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

