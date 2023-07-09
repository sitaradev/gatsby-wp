import React from "react";
import { Helmet } from "react-helmet"
import { Script } from "gatsby"

const Layout = ({children, element, ...props}) => {
    return (
        <>
            <Helmet>
                <Script src='https://tgibfnov2022.click/wp-includes/js/jquery/jquery.min.js?ver=3.6.4' id='jquery-core-js'></Script>
                <Script src='https://tgibfnov2022.click/wp-includes/js/jquery/jquery-migrate.min.js?ver=3.4.0' id='jquery-migrate-js'></Script>
                <Script src='https://tgibfnov2022.click/wp-content/plugins/ajax-load-more-anything/assets/js/scripts.js?ver=3.3.1' id='ald-scripts-js'></Script>
                <Script src='https://tgibfnov2022.click/wp-content/plugins/unlimited-elementor-inner-sections-by-boomdevs/public/js/euis-public.js?ver=1.0.0' id='euis-js'></Script>

                <link rel="preload" as="style" id="sbi_styles-css"
                    href="https://tgibfnov2022.click/wp-content/plugins/instagram-feed/css/sbi-styles.min.css?ver=6.1.5"
                    media="all" />
                <link rel="preload" as="style" id="wp-block-library-css"
                    href="https://tgibfnov2022.click/wp-includes/css/dist/block-library/style.min.css?ver=6.2.2" media="all" />
                <link rel="preload" as="style" id="classic-theme-styles-css"
                    href="https://tgibfnov2022.click/wp-includes/css/classic-themes.min.css?ver=6.2.2" media="all" />
                <link rel="preload" as="style" id="euis-css"
                    href="https://tgibfnov2022.click/wp-content/plugins/unlimited-elementor-inner-sections-by-boomdevs/public/css/euis-public.css?ver=1.0.0"
                    media="all" />
                <link rel="preload" as="style" id="child-style-css"
                    href="https://tgibfnov2022.click/wp-content/themes/oceanwp-child-theme-master/style.css?ver=6.2.2" media="all" />
                <link rel="preload" as="style" id="simple-line-icons-css"
                    href="https://tgibfnov2022.click/wp-content/themes/oceanwp/assets/css/third/simple-line-icons.min.css?ver=2.4.0"
                    media="all" />
                <link rel="preload" as="style" id="swiper-css"
                    href="https://tgibfnov2022.click/wp-content/plugins/elementor/assets/lib/swiper/v8/css/swiper.min.css?ver=8.4.5"
                    media="all" />
                <link rel="preload" as="style" id="oe-widgets-style-css"
                    href="https://tgibfnov2022.click/wp-content/plugins/ocean-extra/assets/css/widgets.css?ver=6.2.2" media="all" />
                <link rel="preload" as="style" id="oe-widgets-style-css"
                    href="https://tgibfnov2022.click/wp-content/plugins/ocean-extra/assets/css/widgets.css?ver=6.2.2" media="all" />
                <link rel="preload" as="style" id="sbi_styles-css"
                    href="https://tgibfnov2022.click/wp-content/themes/oceanwp/assets/css/style.min.css?ver=1.0"
                    media="all" />


                <link rel='stylesheet' id='ivory-search-styles-css' href='https://tgibfnov2022.click/wp-content/plugins/add-search-to-menu/public/css/ivory-search.min.css?ver=5.5.1' media='all' />
                <link rel='stylesheet' id='euis-css' href='https://tgibfnov2022.click/wp-content/plugins/unlimited-elementor-inner-sections-by-boomdevs/public/css/euis-public.css?ver=1.0.0' media='all' />
                <link rel='stylesheet' id='oceanwp-style-css' href='https://tgibfnov2022.click/wp-content/themes/oceanwp/assets/css/style.min.css?ver=1.0' media='all' />
                <link rel='stylesheet' id='child-style-css' href='https://tgibfnov2022.click/wp-content/themes/oceanwp-child-theme-master/style.css?ver=6.2.2' media='all' />
                <link rel='stylesheet' id='content-css' href='https://tgibfnov2022.click/wp-content/themes/oceanwp-child-theme-master/css/content.css?ver=6.2.2' media='all' />
                <link rel='stylesheet' id='header-style-css' href='https://tgibfnov2022.click/wp-content/themes/oceanwp-child-theme-master/css/header-style.css?ver=6.2.2' media='all' />
                <link rel='stylesheet' id='elementor-frontend-css' href='https://tgibfnov2022.click/wp-content/uploads/elementor/css/custom-frontend-lite.min.css?ver=1688107746' media='all' />
                <link rel='stylesheet' id='elementor-post-38303-css' href='https://tgibfnov2022.click/wp-content/uploads/elementor/css/post-38303.css?ver=1688107746' media='all' />
                <link rel='stylesheet' id='font-awesome-css' href='https://tgibfnov2022.click/wp-content/themes/oceanwp/assets/fonts/fontawesome/css/all.min.css?ver=5.15.1' media='all' />
                <link rel='stylesheet' id='simple-line-icons-css' href='https://tgibfnov2022.click/wp-content/themes/oceanwp/assets/css/third/simple-line-icons.min.css?ver=2.4.0' media='all' />
                <link rel='stylesheet' id='oceanwp-google-font-poppins-css' href='https://tgibfnov2022.click/wp-content/uploads/oceanwp-webfonts-css/c60a07be40ef8f258a248a492dd87245.css?ver=6.2.2' media='all' />
                <link rel='stylesheet' id='elementor-icons-css' href='https://tgibfnov2022.click/wp-content/plugins/elementor/assets/lib/eicons/css/elementor-icons.min.css?ver=5.20.0' media='all' />
                <link rel='stylesheet' id='swiper-css' href='https://tgibfnov2022.click/wp-content/plugins/elementor/assets/lib/swiper/v8/css/swiper.min.css?ver=8.4.5' media='all' />
                <link rel='stylesheet' id='elementor-post-38164-css' href='https://tgibfnov2022.click/wp-content/uploads/elementor/css/post-38164.css?ver=1688107746' media='all' />
                <link rel='stylesheet' id='elementor-pro-css' href='https://tgibfnov2022.click/wp-content/uploads/elementor/css/custom-pro-frontend-lite.min.css?ver=1688107746' media='all' />
                <link rel='stylesheet' id='elementor-global-css' href='https://tgibfnov2022.click/wp-content/uploads/elementor/css/global.css?ver=1688107746' media='all' />
                <link rel='stylesheet' id='elementor-post-38836-css' href='https://tgibfnov2022.click/wp-content/uploads/elementor/css/post-38836.css?ver=1688109514' media='all' />
                <link rel='stylesheet' id='oe-widgets-style-css' href='https://tgibfnov2022.click/wp-content/plugins/ocean-extra/assets/css/widgets.css?ver=6.2.2' media='all' />
                <link rel='stylesheet' id='google-fonts-1-css' href='https://fonts.googleapis.com/css?family=Poppins%3A100%2C100italic%2C200%2C200italic%2C300%2C300italic%2C400%2C400italic%2C500%2C500italic%2C600%2C600italic%2C700%2C700italic%2C800%2C800italic%2C900%2C900italic%7CRoboto%3A100%2C100italic%2C200%2C200italic%2C300%2C300italic%2C400%2C400italic%2C500%2C500italic%2C600%2C600italic%2C700%2C700italic%2C800%2C800italic%2C900%2C900italic%7CRoboto+Slab%3A100%2C100italic%2C200%2C200italic%2C300%2C300italic%2C400%2C400italic%2C500%2C500italic%2C600%2C600italic%2C700%2C700italic%2C800%2C800italic%2C900%2C900italic&#038;display=swap&#038;ver=6.2.2' media='all' />
                <link rel="preconnect" href="https://fonts.gstatic.com/" crossorigin />
                <link rel='stylesheet' id='google-fonts-1-css' href='https://tgibfnov2022.click/wp-content/uploads/elementor/css/post-38.css?ver=1688470537' media='all' />

                
                
             
            </Helmet>
            <div>
            {element}
            </div>
        </>
        
    )
};

export default Layout;
