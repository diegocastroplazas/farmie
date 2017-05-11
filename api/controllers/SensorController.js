/**
 * SensorController
 *
 * @description :: Server-side logic for managing sensors
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

	newMeasure: function(req, res) {


		var dataFromDevice = req.params.all();
		var createEvents;
		var createMeasures;
		var dataForMeasures;

		//console.log(req);
		console.log(dataFromDevice);

		if (req.method == 'POST'){
			dataForMeasures = {
				device: dataFromDevice.device.id,
				measures: dataFromDevice.senses
			}
			try{
				createEvents = APIService.processEvents(dataFromDevice.Events);
				//createMeasures = APIService.processMeasures(dataForMeasures);
			}
			catch (err) {
				console.log("Error al crear eventos");
				console.log(err);
			}
			try{
				console.log("Voy a crear medidas: ");
				createMeasures = APIService.processMeasures(dataForMeasures);
			}
			catch (err) {
				console.log("Error al crear medida");
				console.log(err);
			}
			try {
				var updatesensor = APIService.updateSensor(dataForMeasures);
			}
			catch (err) {
				console.log("Error al actualizar sensor");
				console.log(err);
			}
			res.send("OK");
		}

		else {
			console.log("BAD REQUEST");
			return res.badRequest();
		}

	}
};
