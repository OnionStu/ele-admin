import Vue from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import * as solidIcons from '@fortawesome/free-solid-svg-icons';
// import * as brandsIcons from '@fortawesome/free-brands-svg-icons';
// import * as regularIcons from '@fortawesome/free-regular-svg-icons';
import FaIcon from '../components/FaIcon';

function installIcons(svgIcons) {
  for (let key in svgIcons) {
    if ({}.hasOwnProperty.call(svgIcons, key)) {
      const icon = svgIcons[key];
      if (typeof icon === 'string') break;
      library.add(icon);
    }
  }
}

installIcons(solidIcons);
// installIcons(brandsIcons);
// installIcons(regularIcons);

Vue.component('fa-icon', FaIcon);
