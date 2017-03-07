/**
 * Thresold.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
     val_max: {
        type: 'float',
        required: true
     },
     val_min: {
        type: 'float',
        required: true
     },
     sensor: {
        collection: 'sensor',
        via: 'thresold'
     }

  }
};
