# videojs-chrome-pip

This poorly named videojs plugin implements both the Picture in Picture API for Google Chrome and Safari

## Table of Contents

<!-- START doctoc -->
<!-- END doctoc -->
## Installation

```sh
npm install --save @bnnvara/videojs-chrome-pip
```

## Usage

To include videojs-chrome-pip on your website or web application, use any of the following methods.

### `<script>` Tag

This is the simplest case. Get the script in whatever way you prefer and include the plugin _after_ you include [video.js][videojs], so that the `videojs` global is available.

```html
<script src="//path/to/video.min.js"></script>
<script src="//path/to/videojs-chrome-pip.min.js"></script>
<script>
  var player = videojs('my-video');

  player.chromePip();
</script>
```

### Browserify/CommonJS

When using with Browserify, install videojs-chrome-pip via npm and `require` the plugin as you would any other module.

```js
var videojs = require('video.js');

// The actual plugin function is exported by this module, but it is also
// attached to the `Player.prototype`; so, there is no need to assign it
// to a variable.
require('@bnnvara/videojs-chrome-pip');

var player = videojs('my-video');

player.chromePip();
```

### RequireJS/AMD

When using with RequireJS (or another AMD library), get the script in whatever way you prefer and `require` the plugin as you normally would:

```js
require(['video.js', '@bnnvara/videojs-chrome-pip'], function(videojs) {
  var player = videojs('my-video');

  player.chromePip();
});
```

### CSS
The plugin relies on some css classes being available, easiest way is to load it in the HEAD of the document:
```html
<head>
  <link href="//path/to/videojs-chrome-pip.css" rel="stylesheet">
</head>

```
## License

ISC. Copyright 2018 BNNVARA
     
     Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted,
     provided that the above copyright notice and this permission notice appear in all copies.
     
     THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS.
     IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS,
     WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.


[videojs]: http://videojs.com/
