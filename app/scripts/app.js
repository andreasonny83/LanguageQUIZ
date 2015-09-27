/*
Copyright (c) 2015 LanguageQUIZ. All rights reserved.
*/

(function(document) {
	'use strict';

	window.addEventListener( 'WebComponentsReady', function() {
		// imports are loaded and elements have been registered
		window.toast            = document.querySelector( '#toast' );
		window.lqMain           = document.querySelector( '#lqMain' );
		window.lqLogin          = document.querySelector( '#lqLogin' );
		window.lqHome           = document.querySelector( '#lqHome' );
		window.lqUserProfile    = document.querySelector( '#lqUserProfile' );
		window.lqUserCollection = document.querySelector( '#lqUserCollection' );
		window.lqCollectionEdit = document.querySelector( '#lqCollectionEdit' );

		console.log( 'LanguageQUIZ is ready!' );
	});
})(document);
