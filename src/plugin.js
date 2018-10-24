import videojs from 'video.js';
import document from 'global/document';
import {version as VERSION} from '../package.json';

const Button = videojs.getComponent('Button');

class ChromePip extends Button {

  constructor(player, options) {
    super(player, options);
    this.controlText = options.text;
    this.on(player, 'enterpictureinpicture', this.handlePipEvent);

    if (!document.pictureInPictureEnabled) {
      this.disable();
    }
  }

  buildCSSClass() {
    return `vjs-chrome-pip ${super.buildCSSClass()}`;
  }

  handlePipEvent() {
    videojs.log('Entered PiP mode');
  }

  handleClick() {
    if (!document.pictureInPictureElement) {
      this.player_.tech_.el_.requestPictureInPicture()
        .catch(error => {
          videojs.log(error);
        });
    } else {
      document.exitPictureInPicture()
        .catch(error => {
          videojs.log(error);
        });
    }
  }
}

ChromePip.prototype.controlText_ = 'PiP';

// Include the version number.
ChromePip.VERSION = VERSION;

// Register the button with video.js.
videojs.registerComponent('pip', ChromePip);

const plugin = function(options) {
  this.on('ready', () => {
    const cb = this.controlBar;

    if (document.pictureInPictureEnabled && !cb.childNameIndex_.Pip) {
      const Toggle = cb.addChild('pip', options);

      cb.el().insertBefore(Toggle.el(), cb.fullscreenToggle.el());
    }
  });
};

videojs.registerPlugin('chromePip', plugin);

export default plugin;
