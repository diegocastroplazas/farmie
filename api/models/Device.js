/**
 * Device.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
     deviceTag: {
        type: 'string',
        unique: true,
        required: true
     },
     serial: {
        type: 'string',
        required: true
     },
     model: {
        type: 'string',
        required: true
     },
     ip_address: {
        type: 'string',
        required: true
     },
     firmware: {
        type: 'string'
     },
     online: {
        type: 'boolean'
     },
     lastContact: {
        type:'datetime'
        //TODO Crear una funcion que retorne el ultimo contacto del dispotivo
     }

  }
};
