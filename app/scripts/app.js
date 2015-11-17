/*
Copyright (c) 2015 LanguageQUIZ. All rights reserved.
*/
;( function( document ) {
  'use strict';

  window.addEventListener( 'WebComponentsReady', function() {
    /**
     * Defining a global namespace containing all the application's main elements
     * to reuse across the app
     *
     * @type {Object}
     */
    var modules = [
      'lqApp',
      'lqMain',
      'lqLogin',
      'lqHome',
      'lqUserProfile',
      'lqUserCollection',
      'lqCollectionEdit'
    ];

    window.LQ = {};

    modules.forEach( function ( module_name ) {
      window.LQ[module_name] = document.querySelector( '#' + module_name );
    });

    // Dispatch the AppReady event.
    var event = new Event( 'AppReady' );
    window.dispatchEvent( event );

    console.log( 'LanguageQUIZ is ready!' );
  });
}(document));
