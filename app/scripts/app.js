/*
Copyright (c) 2015 LanguageQUIZ. All rights reserved.
*/
;( function( global, document ) {
  'use strict';

  /**
   * Defining a global namespace containing all the application's main elements
   * to reuse across the app
   *
   */
  global.addEventListener( 'WebComponentsReady', function() {

    /**
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

    global.LQ = {};

    modules.forEach( function ( module_name ) {
      global.LQ[module_name] = document.querySelector( '#' + module_name );
    });

    // Dispatch the AppReady event.
    var event = new Event( 'AppReady' );
    global.dispatchEvent( event );

    console.log( 'LanguageQUIZ is ready!' );
  });

}(typeof window === 'undefined' ? this : window, document));
