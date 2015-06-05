'use strict';

var rssPlugin = require('antwar-rss-plugin');
var prevnextPlugin = require('antwar-prevnext-plugin');
var highlightPlugin = require('antwar-highlight-plugin');

module.exports = {
  assets: [
    {
      from: './CNAME',
      to: './',
    },
    {
      from: 'images',
      to: 'images',
    },
  ],
  output: 'build',
  name: 'Koodilehto',
  author: 'Koodilehto',
  deploy: {
    branch: 'master',
  },
  plugins: [
    rssPlugin(),
    prevnextPlugin(),
    highlightPlugin({
      style: function() {
        require('highlight.js/styles/github.css');
      },
      languages: ['javascript'],
    })
  ],
  paths: {
    '/': {
      path: function() {
        return require.context('./pages');
      }
    },
    /*blog: {
      path: function() {
        return require.context('./posts', true, /^\.\/.*\.md$/);
      },
      draft: function() {
        return require.context('./drafts', true, /^\.\/.*\.md$/);
      },
      processItem: {
        url: function(o) {
          if(o.file.url) {
            return o.file.url;
          }

          var page = o.fileName.split('.')[0].split('-').slice(1).join('-');

          return o.sectionName + '/' + page;
        }
      },
      layout: 'blog',
      title: 'Blog posts',
    },*/
  },
  theme: {
    name: 'antwar-default-theme',
    navigation: [
      //{title: 'Home', url: '/'},
      //{title: 'Blog', url: '/blog'}
    ],
    analyticsId: 'UA-XXX',
    customStyles: 'specific.scss'
  }
};

