import * as React from "react";
import { Helmet } from "react-helmet"
import { Script, link } from "gatsby";

export default function Page({ pageContext }) {
  const { title, html } = pageContext


  return (
  <>
  <Helmet>
    <title>{title}</title>
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

