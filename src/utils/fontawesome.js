// fontawesome.js
import { library } from '@fortawesome/fontawesome-svg-core';
// Import your icons
import { 
  faSearch, 
  faUser, 
  faCheckCircle,
  faChevronRight,
  faChevronLeft,
  faAngleDoubleRight,
  faAngleDoubleLeft,
  // Add more solid icons as needed
} from '@fortawesome/free-solid-svg-icons';

import {
  faCalendar,
  // Add more regular icons as needed
} from '@fortawesome/free-regular-svg-icons';

import {
  faGithub,
  faTwitter,
  // Add more brand icons as needed
} from '@fortawesome/free-brands-svg-icons';

// Add all icons to the library
library.add(
  faSearch,
  faUser,
  faCheckCircle,
  faChevronRight,
  faChevronLeft,
  faAngleDoubleRight,
  faAngleDoubleLeft,
  faCalendar,
  faGithub,
  faTwitter
);
