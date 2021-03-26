const projects = require('./data/projects');

const baseTitle = 'BAND Corporation';
module.exports.titles = {
  '/projects': `Projects | ${baseTitle}`,
  '/': baseTitle,
};

module.exports.googleAnalytics = 'UA-X';

module.exports.projects = projects;

module.exports.default = {};
