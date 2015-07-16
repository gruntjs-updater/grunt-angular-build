# grunt-angular-build v1.0.5 [![Build Status: Windows](https://ci.appveyor.com/api/projects/status/8167g52uosfrdom1/branch/master?svg=true)](https://ci.appveyor.com/project/gruntjs/grunt-angular-build/branch/master)
[![NPM Version][npm-image]][npm-url]
[![NPM Downloads][downloads-image]][downloads-url]

> Packages JavaScript files written in AngularJS

## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-angular-build --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-angular-build');
```

## The "build" task

### Overview
In your project's Gruntfile, add a section named `build` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  build: {
    options: {
        filename: 'sw-social',
        prefix: 'sw',
        modulePrefix: 'sw',
        moduleName: 'sw.social'
    }  
  }
});
```

### Options

#### options.filename
Type: `String`
Default value: `''`


#### options.prefix
Type: `String`
Default value: `''`


#### options.modulePrefix
Type: `String`
Default value: `'sw'`

#### options.moduleName
Type: `String`
Default value: `''`

### Usage Examples

#### Custom Options
In this example, custom options are used

```js
grunt.initConfig({
  build: {
    options: {
        filename: 'sw-social',
        moduleName: 'sw.social'
    }     
  },
});
```

[npm-image]: https://img.shields.io/npm/v/grunt-angular-build.svg
[npm-url]: https://npmjs.org/package/grunt-angular-build
[downloads-image]: https://img.shields.io/npm/dm/grunt-angular-build.svg
[downloads-url]: https://npmjs.org/package/grunt-angular-build