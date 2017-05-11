var APIService = {

    processEvents: function processEventService(options, done){

        console.log("Entre al servicio: ");
        for (i=0; i<options.length; i++) {
            var event = options[i];
            console.log(event);
            Events.create({
                EventType: event.TipoEvento,
                Priority: 'Critical',
                Source: event.origin
            })
            .exec( function (err, finn) {
                if (err) { console.log( err) ;}
                console.log("Evento actualizado");
            })
        }
    },
    processMeasures: function processMeasures(options, done) {
        console.log("Inicia servicio processMeasures");
        console.log(options);

        for (i=0; i<options.measures.length; i++) {
            var measure = options.measures[i];
            console.log(measure);
            Measure.create({
                device: options.device,
                sensor: measure.id,
                value: measure.current_value
            })
            .exec( function (err, finn){
                if (err) { console.log (err);}
                console.log("Medida actualizada");
            })
        }
    },

    updateSensor: function updateSensor(options, done) {

        console.log("Inicia servicio updateSensor");
        for (i=0; i<options.measures.length; i++ ) {
            var measure = options.measures[i];
            Sensor.update({id: measure.id}, {current_value: measure.current_value})
            .exec(function (err, finn) {
                if(err) { console.log(err);}
                console.log("Sensor actualizado");
            })
        }

    }

};
module.exports = APIService
