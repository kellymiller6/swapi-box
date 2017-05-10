

const vehicleCleaner = (data) => {
    const array = data.results;
    const vehicles =  array.reduce((acc, vehicle) => {
      if(!acc[vehicle.name]) {
        acc[vehicle.name] = {model: vehicle.model, class: vehicle.vehicle_class, passengers: vehicle.passengers}
      }
      return acc;
    }, {})
    return vehicles;
}

export default vehicleCleaner;
