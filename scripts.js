const provinces = ['Western Cape', 'Gauteng', 'Northern Cape', 'Eastern Cape', 'KwaZulu-Natal', 'Free State'];
const names = ['Ashwin', 'Sibongile', 'Jan-Hendrik', 'Sifso', 'Shailen', 'Frikkie'];


// forEach Basics
provinces.forEach(province => console.log(province));
names.forEach(name => console.log(name));
names.forEach((name, index) => console.log(`${name} (${provinces[index]})`) );

// Uppercase Transformation
const uppercaseProvinces = provinces.map(province => province.toUpperCase());
console.log(uppercaseProvinces);

// Name Length
const nameLength = names.map((name) => name.length)
console.log(nameLength)

//Sorting
const sortedProvinces = provinces.slice().sort(); // Slice to avoid mutating the original
console.log(sortedProvinces);

//  Filtering Cape
const noCapeProvinces = provinces.filter(province => !province.includes('Cape'));
console.log(`noCapeProvinces: ${noCapeProvinces.length}`);


// Finding 'S'
const namesWithS = names.map(name => name.toLowerCase().includes('s'));
console.log(namesWithS);

const products = [
  { product: 'banana', price: "2" },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: "8" },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
];

// Log each product name
products.forEach(product => {
  console.log(product.name);
});

// Filter by Name Length
