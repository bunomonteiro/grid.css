# Grid.css
A simple, responsive, mobile first and and without dependencies 16-columns grid system. See a demo: [Grid Demo]

Don't worry about the size. Minified and gzipped is less than 3.5kb.

### Version
1.1.0

### Maintained by
[Bruno Monteiro][b'uno], also known as [b'uno]. ([linkedin] - [hashcode] - [twitter] - [facebook])

### Tech

Grid.css was created using a number of open source projects:

* [Node.js] - evented I/O for the backend
* [Gulp] - the streaming build system
* [Sass] - syntactically awesome style sheets

And of course Grid.css itself is open source with a [public repository][GitHub].

## Install
Using bower:
```sh
bower install grid.css
```

## How to use
First, include the file 'grid.min.css' located on the dist folder to your HTML’s <head> section:

```html
<link rel="stylesheet" href="YOUR_STYLE_PATH/grid.min.css">
```
or if you want to use the bundle that includes the reset.css by [Eric A. Meyer][meyerweb] (recommended).
It is also available via third-party [CDN]
```html
<link rel="stylesheet" href="YOUR_STYLE_PATH/grid.bundle.min.css">
```

> Thanks to [Ryan Grove] for [RawGit].

Now, add the following meta tag to your HTML’s <head> section to keep viewport scale:
```html
<meta name="viewport" content="width=device-width,initial-scale=1">
```

Then the markups:
```html
<div class="container">
  <div class="row">
    <div class="col xs-16">
      ...
    </div>
  </div>
</div>
```

### Development

Want to contribute? Great!

Grid.css uses Gulp + Browsersync for fast developing.
Make a change in your file and instantanously see your updates!

Open your favorite Terminal and run these commands.

You need Gulp installed globally:

```sh
$ npm i -g gulp
```

then:

```sh
$ git clone https://github.com/bunomonteiro/grid.css.git grid
$ cd grid
$ npm install
$ gulp serve
```

### Customize
16 columns is too much or too little for you? Don't worry, just change the variable at the beginning of src/styles/grid.scss file:

```scss
$total-cols: 16 //default
```

Do you want to increase or decrease the margins?

```scss
$col-margin: 2% //default
```

After that:

```sh
$ gulp clean
$ gulp
```

License
----

The **Grid.css** source code is issued under [MIT license][MIT], a permissive free license, which means you can modify it as you please, and incorporate it into your own commercial or non-commercial software.

**Free Software, oh yeah!**

   [GitHub]: <https://github.com/bunomonteiro/grid.css>
   [b'uno]: <http://buno.com.br>
   [linkedin]: <http://linkedin.com/in/bunomonteiro>
   [hashcode]: <https://hashnode.com/@bunomonteiro>
   [twitter]: <http://twitter.com/bunomonteiro>
   [facebook]: <http://fb.com/bunomonteiro>
   [node.js]: <http://nodejs.org>
   [Gulp]: <http://gulpjs.com>
   [Sass]: <http://sass-lang.com/>
   [Grid Demo]: <http://bunomonteiro.github.io/grid.css/>
   [meyerweb]: <http://meyerweb.com/eric/tools/css/reset/>
   [MIT]: <http://opensource.org/licenses/MIT>
   [Ryan Grove]: <http://wonko.com/>
   [RawGit]: <https://rawgit.com>
   [CDN]: <https://cdn.rawgit.com/bunomonteiro/grid.css/v1.1.0/dist/grid.bundle.min.css>
