
names.forEach((name) => console.log(name))

let index = 0
names.forEach((name) => {
console.log(`${name} (${provinces[index]})`)
index = index + 1
 })

const provincesUpperCase = provinces.map((province) => province.toUpperCase())
console.log(provincesUpperCase)

const nameLength = names.map((name) => name.length)
console.log(nameLength)

console.log(provinces.sort())

const filterCape = provinces.filter((province) => !province.includes('Cape'))
console.log(filterCape)

const findingS = names.map((name) => {
 return name.split('').some((s) => s.includes('S'))
})

console.log(findingS)

console.log(names[0].split(''))

const createObjectMapping = names.reduce((acc, name, index) => {
acc[name] = provinces[index]
 return acc
}, {})

console.log(createObjectMapping)