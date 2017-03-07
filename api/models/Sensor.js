/**
 * Sensor.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

     sensor_tag: {
        type: 'string',
        unique: true,
        required: true
     },
     pin_number: {
        type: 'string',
        unique: true,
        required: true
     },
     pin_config: {
        type: 'string',
        enum: ['input', 'output'],
        defaultsTo: 'input'
     },
     current_value: {
        type: 'float',
        required: true
     },
     device: {
        model: 'device'
     },
     thresold: {
        model: 'thresold',
        unique: true
     },
     variable_type: {
        type: 'string',
        required: true
     }

  }
};
