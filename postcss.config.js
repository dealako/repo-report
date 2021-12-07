'use strict';

/* eslint-disable global-require */
const purgecss = require('@fullhuman/postcss-purgecss');
const cssnano = require('cssnano');

module.exports = {
	plugins: [
		require('tailwindcss'),
		require('autoprefixer'),
		cssnano({
			preset: 'default',
		}),
		purgecss({
			content: ['./views/**/*.ejs', './src/static/index.html'],
			defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
		}),
	],
};
