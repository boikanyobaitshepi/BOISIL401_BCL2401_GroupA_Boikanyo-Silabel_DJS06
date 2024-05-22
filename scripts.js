// A list of provinces:
const provinces = ['Western Cape', 'Gauteng', 'Northern Cape', 'Eastern Cape', 'KwaZulu-Natal', 'Free State']

//create a new array with province names in all uppercase
const upperCaseProvinces = provinces.map (province.toUpperCase());

// Log the new array to the console
console.log(upperCaseProvinces);

//create a new array with province names in all uppercase
const namelengths = names.map(name => name.length);
console.log(namelengths);

// A list of names:
const names = ['Ashwin', 'Sibongile', 'Jan-Hendrik', 'Sifso', 'Shailen', 'Frikkie']

//log each name
names.forEach(
  (name) => {
    console.log(name);
});

//Log each province 
provinces.forEach(
  (province) => {
    console.log(province);
});

//log each name with matching province
names.forEach((name , index) => {
  console.log(`${name} lives in ${provinces[index]}`);
})


// A list of products with prices:
const products = [
  { product: 'banana', price: "2" },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: "8" },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]