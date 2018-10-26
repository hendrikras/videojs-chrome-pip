import videojs from 'video.js';
import document from 'global/document';
import {version as VERSION} from '../package.json';
import en from '../lang/en.json';
import nl from '../lang/nl.json';

const Button = videojs.getComponent('Button');

const checkSafari = video => (video.webkitSupportsPresentationMode && typeof video.webkitSetPresentationMode === 'function');

videojs.addLanguage('en', en);
videojs.addLanguage('nl', nl);

class ChromePip extends Button {

  constructor(player, options) {
    super(player, options);

    this.controlText(player.localize('PiP'));
    this.on(player, 'enterpictureinpicture', this.handlePipEvent);

  }

  buildCSSClass() {
    return `vjs-chrome-pip ${super.buildCSSClass()}`;
  }

  handlePipEvent(event) {
    videojs.log('Entered PiP mode');
  }

  handleClick() {
    const video = this.player_.tech_.el_;

    // safari
    if (checkSafari(video)) {
      video.webkitSetPresentationMode(video.webkitPresentationMode === 'picture-in-picture' ? 'inline' : 'picture-in-picture');
      return;
    }
    if (!document.pictureInPictureElement) {
      video.requestPictureInPicture()
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

// Include the version number.
ChromePip.VERSION = VERSION;

// Register the button with video.js.
videojs.registerComponent('pip', ChromePip);

const plugin = function(options) {
  this.on('ready', () => {
    const cb = this.controlBar;

    if (document.pictureInPictureEnabled || checkSafari(this.tech_.el_)) {
      const Toggle = this.addChild('pip', options);

      cb.el().insertBefore(Toggle.el(), cb.fullscreenToggle.el());
    }
  });
};

videojs.registerPlugin('chromePip', plugin);

export default plugin;
