import '@cagov/ds-accordion';
import '@cagov/ds-feedback';
import '@cagov/ds-minus';
import '@cagov/ds-pagination';
import '@cagov/ds-plus';
import '@cagov/ds-dropdown-menu';

// import '../components/menu/index.js';
import '../components/content-navigation/index.js';
import '../components/post-list/index.js';
import '../components/page-alert/index.js';
import '../components/drought-map/index.js';

import setupAnalytics from './gatracker/index.js';

window.onload = (event) => {
    setupAnalytics();
};