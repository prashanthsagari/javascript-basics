// Create a list of fruits with their properties (name, color, pricePerKg)
// retrieval of its color and pricePerKg value is fast
// and convert it into a format so that for a given fruit name
// Write your code here
let fruits = [{
  name: 'Apple',
  color: 'Red',
  pricePerKg: 150
}, {
  name: 'Banana',
  color: 'Yellow',
  pricePerKg: 50
}, {
  name: 'Orange',
  color: 'Green',
  pricePerKg: 60
}, {
  name: 'Pomogranate',
  color: 'Orange',
  pricePerKg: 120
}];


let findFruitsByName = (name) => {
  return fruits.find(fruit => fruit.name === name);
};
findFruitsByName('Apple');
findFruitsByName('Banana');

let findFruitsByColorAndPricePerKg = (color, pricePerKg) => {
  return fruits.find(fruit => fruit.color === color && fruit.pricePerKg === pricePerKg);
};
findFruitsByColorAndPricePerKg('Orange', 120);

