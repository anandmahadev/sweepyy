import { ROUTES } from './routes';

/**
 * @typedef {Object} NavLinkItem
 * @property {string} name - The display label of the link
 * @property {string} path - The internal route target path
 */

/**
 * Main application navigation links.
 * @type {NavLinkItem[]}
 */
export const NAV_LINKS = [
  { name: 'Home', path: ROUTES.HOME },
  { name: 'About', path: ROUTES.ABOUT },
  { name: 'Solutions', path: ROUTES.SOLUTIONS },
  { name: 'Service Areas', path: ROUTES.SERVICE_AREAS },
  { name: 'News', path: ROUTES.NEWS },
  { name: 'Careers', path: ROUTES.CAREERS },
  { name: 'Contact', path: ROUTES.CONTACT },
];

/**
 * Quick solution links displayed inside the global footer panel.
 * @type {NavLinkItem[]}
 */
export const FOOTER_SOLUTIONS = [
  { name: 'Street Sweeping', path: ROUTES.SOLUTIONS },
  { name: 'Highway Sweeping', path: ROUTES.SOLUTIONS },
  { name: 'JetVac Services', path: ROUTES.SOLUTIONS },
  { name: 'Parking Lot Sweeping', path: ROUTES.SOLUTIONS },
  { name: 'Construction Sweeping', path: ROUTES.SOLUTIONS },
  { name: 'Industrial Sweeping', path: ROUTES.SOLUTIONS },
];
