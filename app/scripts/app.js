/*
Copyright (c) 2015 LanguageQUIZ. All rights reserved.
*/

(function() {
  'use strict';

  window.addEventListener('WebComponentsReady', function() {
    // imports are loaded and elements have been registered
    window.lqMain = document.querySelector( '#lqMain' );
    window.lqLogin = document.querySelector( '#lqLogin' );
    window.lqHome = document.querySelector( '#lqHome' );
    window.lqUserProfile = document.querySelector( '#lqUserProfile' );
    window.lqUserCollection = document.querySelector( '#lqUserCollection' );
    window.toast = document.querySelector( '#toast' );

    console.log('Our app is ready to rock!');
  });

})(document);
