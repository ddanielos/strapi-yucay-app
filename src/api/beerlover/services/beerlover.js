'use strict';

/**
 * beerlover service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::beerlover.beerlover');
