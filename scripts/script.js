(($) => {
  /**
   * Copyright 2012, Digital Fusion
   * Licensed under the MIT license.
   * http://teamdf.com/jquery-plugins/license/
   *
   * @author Sam Sehnert
   * @desc A small plugin that checks whether elements are within
   *     the user visible viewport of a web browser.
   *     only accounts for vertical position, not horizontal.
   */

  $.fn.visible = function (partial) {
    const $t = $(this),
      $w = $(window),
      viewTop = $w.scrollTop(),
      viewBottom = viewTop + $w.height(),
      _top = $t.offset().top,
      _bottom = _top + $t.height(),
      compareTop = partial === true ? _bottom : _top,
      compareBottom = partial === true ? _top : _bottom;

    return ((compareBottom <= viewBottom) && (compareTop >= viewTop));
  };
})(jQuery);

$(document).ready(function () {
  
  // add smooth scrolling to all links
  $(".main-nav-link").on('click', function (event) {
    // make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // prevent default anchor click behavior
      event.preventDefault();
      // store hash
      const hash = this.hash;
      // use animate() method to add smooth page scroll
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 900, function () {
        // add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // end of if statement
  });


  
  // make the elements come in from the side
  const win = $(window);
  const allPortfolioPieces = $(".portfolio-piece");

  const pageWidth = window.innerWidth;

  if (pageWidth > 991) {
    allPortfolioPieces.each(function (i, el) {
      var el = $(el);
      if (el.visible(true)) {
        el.addClass("already-visible");
      }
    });

    win.scroll(function (event) {
      allPortfolioPieces.each(function (i, el) {
        var el = $(el);
        if (el.visible(true)) {
          el.addClass("come-in");
        }
      });
    });
  }



  // when we click on .open-hamburger,
  // it should open
  $('.open-hamburger').on('click', function () {
    // slide the menu into view from left
    $('.mobile-nav').toggle("slide", { direction: "right" });
    // Add a class to body that stops scrolling
    $('body').addClass('preventAllScrollingOnBody');
  });
  // when we click on .close-hamburger,
  // it should close
  $('.close-hamburger').on('click', function () {
    // slide the menu out of view from left
    $('.mobile-nav').toggle("slide", { direction: "right" });
    // Remove a class that stops scrolling from body
    $('body').removeClass('preventAllScrollingOnBody');
  });
  // When we click on any link in the list
  // the menu should close
  $('.mobile-nav-list a').on('click', function () {
    // Hide mobile nav menu
    $('.mobile-nav').hide();
    // Remove a class that stops scrolling from body
    $('body').removeClass('preventAllScrollingOnBody');
  });

  

});