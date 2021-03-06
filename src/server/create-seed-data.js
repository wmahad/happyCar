const algoriasearch = require('algoliasearch');
const data = require('./data.js');

const { APP_ID, API_KEY } = process.env;
const client = algoriasearch(APP_ID, API_KEY);
const carIndex = client.initIndex('car_index');

carIndex.setSettings({
    attributesForFaceting: ['car.transmission', 'car.fuelType', 'car.doors', 'car.insurance', 'supplier.name'],
});

const products = data.products.map(p => {
    p.objectID = p.id.toString();
    p.car = data.cars.find(c => p.carId === c.id);
    p.supplier = data.suppliers.find(s => s.id === p.supplierId);
    return p;
});

const logAndEndProcess = (err) => {
    console.error(err);
    process.exit();
}

module.exports = () => {
    const objectIDs = products.map(p => p.objectID);
    carIndex.getObjects(objectIDs, (err, cars) => {
        if (err) logAndEndProcess(err);
        const { results } = cars;
        if (results.every(r => r)) {
            console.log('There exists cars, avoiding duplicates');
            return;
        }
        carIndex.addObjects(products, (err2, content) => {
            if (err2) logAndEndProcess(err2);
            console.log('Cars added...');
        });
    });
}
