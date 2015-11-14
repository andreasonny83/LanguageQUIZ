/*
Copyright (c) 2015 LanguageQUIZ. All rights reserved.
*/
( function( document ) {
  'use strict';

  var lqApp = document.querySelector( '#lqApp' );

  window.addEventListener( 'WebComponentsReady', function() {
    console.log( 'LanguageQUIZ is ready!' );
  });

  // Scroll page to top and expand header
  lqApp.scrollPageToTop = function() {
    document.getElementById( 'mainContainer' ).scrollTop = 0;
  };

})(document);
