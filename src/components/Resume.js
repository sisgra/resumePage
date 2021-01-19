import React from 'react';
import PropTypes from 'prop-types';

module.exports.projects = PropTypes.shape({
    name: PropTypes.string.isRequired,
    publisher: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    releaseDate: PropTypes.string.isRequired,
    website: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    image: module.exports.image,
    keywords: module.exports.bulletPoints
});
module.exports.projectsSet = PropTypes.arrayOf(
    module.exports.projects
).isRequired;