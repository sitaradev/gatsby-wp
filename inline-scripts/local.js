jQuery(document).ready(function($){var loader='<div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>';jQuery(".blog_listing").append('<a data-glm-button-selector=".blog_listing"  href="#" class="btn loadMoreBtn" id="loadMore"><span class="loadMoreBtn-label">Load More</span></a>');jQuery(".blog_list").slice(0,12).show();jQuery(document).find(".blog_listing .ald-count").text(jQuery(".blog_list:hidden").length);jQuery(".blog_listing").find("#loadMore").on('click',function(e){e.preventDefault();jQuery(".blog_list:hidden").slice(0,6).slideDown();if(jQuery(".blog_list:hidden").length==0){jQuery(this).fadeOut('slow')}jQuery(document).find(".blog_listing .ald-count").text(jQuery(".blog_list:hidden").length)});if(jQuery(".blog_list:hidden").length==0){jQuery(".blog_listing").find("#loadMore").fadeOut('slow')}var flag=false;var main_xhr;var LoadMorePushAjax=function(url,args){jQuery('.ald_loader_progress').css({"-webkit-transform":"translate3d(-100%, 0px, 0px)","-ms-transform":"translate3d(-100%, 0px, 0px)","transform":"translate3d(-100%, 0px, 0px)",});if(args.data_implement_selectors){var dis=JSON.parse(args.data_implement_selectors)}if(main_xhr&&main_xhr.readyState!=4){main_xhr.abort()}main_xhr=jQuery.ajax({url:url,asynch:true,beforeSend:function(){jQuery('.ald_laser_loader').addClass('show');jQuery('.ald_loader_progress').css({"transition-duration":"2000ms","-webkit-transform":"translate3d(-20%, 0px, 0px)","-ms-transform":"translate3d(-20%, 0px, 0px)","transform":"translate3d(-20%, 0px, 0px)",});flag=true},success:function(data){jQuery(document).trigger('ald_ajax_content_ready',[data,args]);if(dis){for(var key in dis){var selector=dis[key].data_selector;var type=dis[key].implement_type;if(selector){var newData=jQuery(selector,data).html();if(type=="insert_before"){jQuery(selector).prepend(newData)}else if(type=="insert_after"){jQuery(selector).append(newData)}else{jQuery(selector).html(newData)}}}}jQuery(document).find('.tf_posts_navigation').removeClass('loading');jQuery('.ald-ajax-btn[data-alm-click-selector]').each(function(){if(jQuery(this).data('alm-click-selector')==args.click_selector){jQuery(this).removeClass('loading')}});jQuery('.ald_loader_progress').css({"transition-duration":"500ms","-webkit-transform":"translate3d(0%, 0px, 0px)","-ms-transform":"translate3d(0%, 0px, 0px)","transform":"translate3d(0%, 0px, 0px)",});setTimeout(function(){jQuery('.ald_laser_loader').removeClass('show');jQuery('.ald_loader_progress').css({"transition-duration":"0ms","-webkit-transform":"translate3d(-100%, 0px, 0px)","-ms-transform":"translate3d(-100%, 0px, 0px)","transform":"translate3d(-100%, 0px, 0px)",})},300);jQuery(document).trigger('ald_ajax_content_loaded',data);jQuery(document).trigger('ald_ajax_content_success',[args]);flag=false}})}});