// Import Font Awesome CSS
import '@fortawesome/fontawesome-svg-core/styles.css';
// Import Font Awesome config
import './utils/fontawesome';

// Prevent Font Awesome from dynamically adding its CSS since we did it manually above
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false;

export function onClientEntry() {
  // Any client-side initialization can go here
  console.log('Font Awesome initialized');
}
