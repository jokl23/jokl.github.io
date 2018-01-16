

(function() {

    //Back to top - START ----------
    function backToTop() {
        // browser window scroll (in pixels) after which the "back to top" link is shown
        var offset = 300,
            //browser window scroll (in pixels) after which the "back to top" link opacity is reduced
            offset_opacity = 1200,
            //duration of the top scrolling animation (in ms)
            scroll_top_duration = 700,
            //grab the "back to top" link
            $back_to_top = $('.goto-top');

        //hide or show the "back to top" link
        $(window).scroll(function(){
            ( $(this).scrollTop() > offset ) ? $back_to_top.addClass('goto-is-visible') : $back_to_top.removeClass('goto-is-visible cd-fade-out');
            if( $(this).scrollTop() > offset_opacity ) {
                $back_to_top.addClass('goto-fade-out');
            }
        });

        //smooth scroll to top
        $back_to_top.on('click', function(event){
            event.preventDefault();
            $('body,html').animate({
                    scrollTop: 0
                }, scroll_top_duration
            );
        });
    }
    //Back to top - END ----------





    //Dropdown - START ----------
    function dropdown() {
        if ( $('.js-dropdown').length ) {
            (function($, window, document, undefined) {
                'use strict';
                var $html = $('html');

                $html.on('click.ui.dropdown', '.js-dropdown', function(e) {
                    e.preventDefault();
                    $('.js-dropdown').not($(this)).each(function () {
                        $(this).removeClass('is-open');
                    });
                    $(this).toggleClass('is-open');
                });
                $html.on('click.ui.dropdown', '.c-dropdown_item', function(e) {
                    e.preventDefault();
                    console.log('--');
                    setTimeout(function(){
                        $('.js-dropdown').each(function () {
                            $(this).removeClass('is-open');
                        });
                    },100);
                });
                $html.on('click.ui.dropdown', '.js-dropdown [data-dropdown-value]', function(e) {
                    e.preventDefault();
                    var $item = $(this);
                    var $dropdown = $item.parents('.js-dropdown');
                    $dropdown.find('.js-dropdown_input').val($item.data('dropdown-value'));
                    $dropdown.find('.js-dropdown_current').html($item.html());
                });
                $html.on('click.ui.dropdown', function(e) {
                    var $target = $(e.target);
                    if (!$target.parents().hasClass('js-dropdown')) {
                        $('.js-dropdown').removeClass('is-open');
                    }
                });
            })(jQuery, window, document);
        }
    }
    //Dropdown - END ----------




    //Mobile menu - START ----------
    function mobileMenu() {
        //Buttons
        var menuToggle = $('.menu-toggle');

        var userToggle = $('.user-toggle');
        //All toggles
        var allToggles = $('.menu-toggle, .user-toggle');
        //Panels
        var menuPanel = $('.menu');
        var toolbarPanel = $('.cart-panel');
        var userPanel = $('.user-panel');
        //Close panel
        var closePanel = $('.close-panel');
        //All elements
        var allElements = $('.menu-toggle, .menu, .cart-toggle, .cart-panel, .user-toggle, .user-panel, .close-panel');

        // -----

        //Class switcher
        function classSwitcher(item, extraItem, panel, otherPanel, extraPanel) {
            item.toggleClass('active');
            panel.toggleClass('active');
            closePanel.toggleClass('active');

            //Remove active class from other toggles
            if ( extraItem.hasClass('active') ) {

                extraItem.removeClass('active');
            }
            //Remove active class from other panels
            if ( panel.hasClass('active') ) {
                otherPanel.removeClass('active');
                extraPanel.removeClass('active');
            }
            //Remove active class from close panel
            if ( item.hasClass('active') || extraItem.hasClass('active') ) {
                closePanel.addClass('active');
            } else if ( !allToggles.hasClass('active') ) {
                closePanel.removeClass('active');
            } else {
                closePanel.removeClass('active');
            }
        }

        // -----

        //Menu
        menuToggle.on('click', function () {
            classSwitcher(menuToggle,userToggle, menuPanel, toolbarPanel, userPanel);
        });


        //User
        userToggle.on('click', function () {
            classSwitcher(userToggle, menuToggle, userPanel, toolbarPanel, menuPanel);
        });

        //Close panel (outside)
        closePanel.on('click', function () {
            allElements.removeClass('active');
        });
    }
    //Mobile menu - END ----------


    //Sort by - START ------------
    function sortBy() {
        var btnList = $('.btn-list');
        btnList.on('click', function () {
            btnList.removeClass('active');
            $(this).addClass('active');
        });
    }
    //Sort by - END -----------------

    //Pagination - START ----------------
    function showPage(numPage) {
        var totalNumOfPages = 3;

        for(var i=1; i <= totalNumOfPages; i++){
            if( $('#page-' + i) ){
                $('#page-' + i).css('display', 'none');
            }
        }

        if( $('#page-' + numPage) ){
            $('#page-' + numPage).css('display', 'block');
        }
    }

    function activePage() {
        var pageNum = $('.pagination').find('a');
        pageNum.on('click', function (e) {
            e.preventDefault();
            pageNum.parent().removeClass('active');
            $(this).parent().addClass('active');

            showPage( $(this).attr("href") );
        });
    }

    //Pagination - END ------------------

    //Header scroll - START ----------
    function headerStyle() {
        var offset = 50;
        var header = $('.header');

        if( $(this).scrollTop() > offset ) {
            header.addClass('on-scroll');
        } else {
            header.removeClass('on-scroll');
        }
    }
    //Header scroll - END ----------


    //ION Range slider - START ----------
    function rangeSlider(elem) {
        if ($(elem).length) {
            $(elem).ionRangeSlider({
                type: "double",
                min: 18,
                max: 50,
                from: 18,
                to: 32,
                hide_min_max: true,
                hide_from_to: false,
                grid: false
            });
        }
    }
    //ION Range slider - END ----------



    //SCRIPTS EXECUTION ------------------------------
    $(document).ready(function () {
        backToTop();
        mobileMenu();
        headerStyle();
        dropdown();
        sortBy();
        activePage();
        rangeSlider('#range1');
    });

    // -----

    $(window).on('resize', function () {

    });

    // -----

    $(window).on('scroll', function () {
        headerStyle();
    });

    // -----

    //SCRIPTS EXECUTION - end ------------------------------
})();
