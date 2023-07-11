import React from "react";
import { Helmet } from "react-helmet"
import { Script } from "gatsby"
// import jQuery from 'jquery'

const Layout = ({children, element, ...props}) => {
    return (
        <>
            <Helmet>
            {/* <script async src="https://tgibfnov2022.click/wp-content/themes/oceanwp-child-theme-master/js/owl.carousel.min.js"></script> */}

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
                <link rel='stylesheet' id='ivory-search-styles-css' href='https://tgibfnov2022.click/wp-content/plugins/add-search-to-menu/public/css/ivory-search.min.css?ver=5.5.1' media='all' />
                <link rel='stylesheet' id='oceanwp-style-css' href='https://tgibfnov2022.click/wp-content/themes/oceanwp/assets/css/style.min.css?ver=1.0' media='all' />
                <link rel='stylesheet' id='content-css' href='https://tgibfnov2022.click/wp-content/themes/oceanwp-child-theme-master/css/content.css?ver=6.2.2' media='all' />
                <link rel='stylesheet' id='header-style-css' href='https://tgibfnov2022.click/wp-content/themes/oceanwp-child-theme-master/css/header-style.css?ver=6.2.2' media='all' />
                <link rel='stylesheet' id='elementor-frontend-css' href='https://tgibfnov2022.click/wp-content/uploads/elementor/css/custom-frontend-lite.min.css?ver=1688107746' media='all' />
                <link rel='stylesheet' id='elementor-post-38303-css' href='https://tgibfnov2022.click/wp-content/uploads/elementor/css/post-38303.css?ver=1688107746' media='all' />
                <link rel='stylesheet' id='font-awesome-css' href='https://tgibfnov2022.click/wp-content/themes/oceanwp/assets/fonts/fontawesome/css/all.min.css?ver=5.15.1' media='all' />
                <link rel='stylesheet' id='oceanwp-google-font-poppins-css' href='https://tgibfnov2022.click/wp-content/uploads/oceanwp-webfonts-css/c60a07be40ef8f258a248a492dd87245.css?ver=6.2.2' media='all' />
                <link rel='stylesheet' id='elementor-icons-css' href='https://tgibfnov2022.click/wp-content/plugins/elementor/assets/lib/eicons/css/elementor-icons.min.css?ver=5.20.0' media='all' />
                <link rel='stylesheet' id='elementor-post-38164-css' href='https://tgibfnov2022.click/wp-content/uploads/elementor/css/post-38164.css?ver=1688107746' media='all' />
                <link rel='stylesheet' id='elementor-pro-css' href='https://tgibfnov2022.click/wp-content/uploads/elementor/css/custom-pro-frontend-lite.min.css?ver=1688107746' media='all' />
                <link rel='stylesheet' id='elementor-global-css' href='https://tgibfnov2022.click/wp-content/uploads/elementor/css/global.css?ver=1688107746' media='all' />
                <link rel='stylesheet' id='elementor-post-38836-css' href='https://tgibfnov2022.click/wp-content/uploads/elementor/css/post-38836.css?ver=1688109514' media='all' />
                <link rel='stylesheet' id='oe-widgets-style-css' href='https://tgibfnov2022.click/wp-content/plugins/ocean-extra/assets/css/widgets.css?ver=6.2.2' media='all' />
                <link rel='stylesheet' id='google-fonts-1-css' href='https://fonts.googleapis.com/css?family=Poppins%3A100%2C100italic%2C200%2C200italic%2C300%2C300italic%2C400%2C400italic%2C500%2C500italic%2C600%2C600italic%2C700%2C700italic%2C800%2C800italic%2C900%2C900italic%7CRoboto%3A100%2C100italic%2C200%2C200italic%2C300%2C300italic%2C400%2C400italic%2C500%2C500italic%2C600%2C600italic%2C700%2C700italic%2C800%2C800italic%2C900%2C900italic%7CRoboto+Slab%3A100%2C100italic%2C200%2C200italic%2C300%2C300italic%2C400%2C400italic%2C500%2C500italic%2C600%2C600italic%2C700%2C700italic%2C800%2C800italic%2C900%2C900italic&#038;display=swap&#038;ver=6.2.2' media='all' />
                <link rel="preconnect" href="https://fonts.gstatic.com/" crossorigin />
                <link rel='stylesheet' id='google-fonts-1-css' href='https://tgibfnov2022.click/wp-content/uploads/elementor/css/post-38.css?ver=1688470537' media='all' />

                
                
                {/* <Script src='https://tgibfnov2022.click/wp-includes/js/jquery/jquery.min.js?ver=3.6.4' id='jquery-core-js'></Script> */}
                {/* <script src='https://tgibfnov2022.click/wp-includes/js/jquery/jquery-migrate.min.js?ver=3.4.0' id='jquery-migrate-js'></script>

                <script type="text/javascript">
                    {
                        jQuery(document).ready(function ($) {
                            var loader = '<div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>';
                            jQuery(".blog_listing").append('<a data-glm-button-selector=".blog_listing"  href="#" class="btn loadMoreBtn" id="loadMore"><span class="loadMoreBtn-label">Load More</span></a>');
                            jQuery(".blog_list").slice(0, 12).show();
                            jQuery(document).find(".blog_listing .ald-count").text(jQuery(".blog_list:hidden").length);
                            jQuery(".blog_listing")
                                .find("#loadMore")
                                .on("click", function (e) {
                                    e.preventDefault();
                                    jQuery(".blog_list:hidden").slice(0, 6).slideDown();
                                    if (jQuery(".blog_list:hidden").length == 0) {
                                        jQuery(this).fadeOut("slow");
                                    }
                                    jQuery(document).find(".blog_listing .ald-count").text(jQuery(".blog_list:hidden").length);
                                });
                            if (jQuery(".blog_list:hidden").length == 0) {
                                jQuery(".blog_listing").find("#loadMore").fadeOut("slow");
                            }
                            var flag = false;
                            var main_xhr;
                            var LoadMorePushAjax = function (url, args) {
                                jQuery(".ald_loader_progress").css({ "-webkit-transform": "translate3d(-100%, 0px, 0px)", "-ms-transform": "translate3d(-100%, 0px, 0px)", transform: "translate3d(-100%, 0px, 0px)" });
                                if (args.data_implement_selectors) {
                                    var dis = JSON.parse(args.data_implement_selectors);
                                }
                                if (main_xhr && main_xhr.readyState != 4) {
                                    main_xhr.abort();
                                }
                                main_xhr = jQuery.ajax({
                                    url: url,
                                    asynch: true,
                                    beforeSend: function () {
                                        jQuery(".ald_laser_loader").addClass("show");
                                        jQuery(".ald_loader_progress").css({ "transition-duration": "2000ms", "-webkit-transform": "translate3d(-20%, 0px, 0px)", "-ms-transform": "translate3d(-20%, 0px, 0px)", transform: "translate3d(-20%, 0px, 0px)" });
                                        flag = true;
                                    },
                                    success: function (data) {
                                        jQuery(document).trigger("ald_ajax_content_ready", [data, args]);
                                        if (dis) {
                                            for (var key in dis) {
                                                var selector = dis[key].data_selector;
                                                var type = dis[key].implement_type;
                                                if (selector) {
                                                    var newData = jQuery(selector, data).html();
                                                    if (type == "insert_before") {
                                                        jQuery(selector).prepend(newData);
                                                    } else if (type == "insert_after") {
                                                        jQuery(selector).append(newData);
                                                    } else {
                                                        jQuery(selector).html(newData);
                                                    }
                                                }
                                            }
                                        }
                                        jQuery(document).find(".tf_posts_navigation").removeClass("loading");
                                        jQuery(".ald-ajax-btn[data-alm-click-selector]").each(function () {
                                            if (jQuery(this).data("alm-click-selector") == args.click_selector) {
                                                jQuery(this).removeClass("loading");
                                            }
                                        });
                                        jQuery(".ald_loader_progress").css({ "transition-duration": "500ms", "-webkit-transform": "translate3d(0%, 0px, 0px)", "-ms-transform": "translate3d(0%, 0px, 0px)", transform: "translate3d(0%, 0px, 0px)" });
                                        setTimeout(function () {
                                            jQuery(".ald_laser_loader").removeClass("show");
                                            jQuery(".ald_loader_progress").css({ "transition-duration": "0ms", "-webkit-transform": "translate3d(-100%, 0px, 0px)", "-ms-transform": "translate3d(-100%, 0px, 0px)", transform: "translate3d(-100%, 0px, 0px)" });
                                        }, 300);
                                        jQuery(document).trigger("ald_ajax_content_loaded", data);
                                        jQuery(document).trigger("ald_ajax_content_success", [args]);
                                        flag = false;
                                    },
                                });
                            };
                        })
                        
                    }
                </script>
                <script>
                    {
                        (function myFunc() { // Beginning of function
                            jQuery('.hero_block > .elementor-widget-wrap').addClass('hero_slider owl-carousel owl-theme');	
                            jQuery('.hero_slider').owlCarousel({
                                items:1,
                                loop:true,
                                autoplay:true,
                                autoplayTimeout:3000,
                                mouseDrag: false,
                                singleItem: true,
                                animateIn: 'fadeIn',
                                animateOut: 'fadeOut',
                                autoplayHoverPause:true,
                                nav: false,
                                dots:false,
                                smartSpeed: 500,
                                responsive: {
                                    0:{
                                        items: 1,
                                    },
                                    768:{
                                        items: 1,
                                    },
                                    1025:{
                                        items: 1,
                                    }
                                }
                            });
                            jQuery('.number .wpcf7-form-control-wrap input').on('keypress', function(e) {
                                //if the letter is not digit then display error and don't type anything
                                if (e.which != 8 && e.which != 0 && (e.which < 43 || e.which > 57)) {
                                    return false;
                                }
                            });


                            jQuery(document).ready(function() {
                                // Smooth scrolling to section on click
                                jQuery(".res_caregory a").on("click", function(event) {
                                    event.preventDefault();
                                    var target = jQuery(this).attr("href");
                                    jQuery("html, body").animate({
                                        scrollTop: jQuery(target).offset().top
                                    }, 800); // Adjust the animation speed if desired
                                });
                            });
                        }) // End of function
                        ()
                        
                    }
                </script> */}






                <Script src='https://tgibfnov2022.click/wp-content/plugins/ajax-load-more-anything/assets/js/scripts.js?ver=3.3.1' id='ald-scripts-js'></Script>
                <Script src='https://tgibfnov2022.click/wp-content/plugins/unlimited-elementor-inner-sections-by-boomdevs/public/js/euis-public.js?ver=1.0.0' id='euis-js'></Script>
                
            </Helmet>
            <div>
            {element}
            </div>
        </>
        
    )
};

export default Layout;
