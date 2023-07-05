import * as React from "react";
import { Helmet } from "react-helmet"

export default function Page({ pageContext }) {
  const { title, html, pageId, guid } = pageContext
  return (
  <>
    <Helmet>
      <title>{title}</title>
      <link rel="stylesheet" id="sbi_styles-css"
          href={`https://tgibfnov2022.click/wp-content/uploads/elementor/css/post-${pageId}.css?ver=1688445856`}
          media="all" />
      </Helmet>
      <div id="outer-wrap" className="site clr">
        <div id="wrap">
          <main 
            id="main" 
            className="site-main clr" 
            role="main"
            dangerouslySetInnerHTML={{
              __html: html,
            }}
          >
          </main>
        </div>
      </div>
   
  </>
    
  );
}
