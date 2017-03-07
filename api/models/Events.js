/**
 * Events.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
     EventType: {
        type: 'string',
        required: true
     },
     Active: {
        type: 'boolean',
        required: true,
        defaultsTo: true
     },
     Priority: {
        type: 'string',
        enum: ['Critical', 'Warning']
     },
     Source: {
        model: 'sensor'
     }
  }
};
