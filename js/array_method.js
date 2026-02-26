const companies = [
  { name: "company one", category: "finance", start: 1999, end: 2004 },
  { name: "company two", category: "retails", start: 1982, end: 2005 },
  { name: "company three", category: "shipping", start: 1983, end: 2014 },
  { name: "company four", category: "retail", start: 2020, end: 2024 },
  { name: "company five", category: "finance", start: 1985, end: 2005 },
  { name: "company six", category: "shipping", start: 1986, end: 2006 },
  { name: "company seven", category: "catering", start: 1987, end: 2009 },
  { name: "company eight", category: "finance", start: 2012, end: 2013 },
  { name: "company nine", category: "catering", start: 1989, end: 2017 },
  { name: "company ten", category: "finance", start: 2020, end: 2021 },
];
const ages = [14, 45, 79, 2, 57, 31, 90, 13, 10, 42];
//normal for loop//
// for (let i = 0; i < companies.length; i++){
//     console.log(companies[i].start);
// }
//for each method//
// companies.forEach(company=>(console.log(company.start)));
let total = 0;
ages.forEach((age, index, ages) => (ages[index] = ++age));
// console.log(ages);
//filter//
let adult = [];
for (let i = 0; i < ages.length; i++) {
  if (ages[i] >= 18) {
    adult.push(ages[i]);
  }
}
// console.log(adult);
//array filter//
// let adults= ages.filter(age=>{
//     if(age>18){
//         return true;
//     }
// });
adults = ages.filter((age) => age > 18);
// console.log(adults);
// const retailCompanies = companies.filter(company=>company.category=="retails");
// console.log(retailCompanies);
// const tenYears = companies.filter(company=>company.end - company.start >=10);
// console.log(tenYears);
const eighty = companies.filter(
  (company) => company.start >= 1980 && company.start < 1990,
);
// console.log(eighty);
//map//
const testMap = companies.map(
  (company) => `${company.name} [${company.start} - ${company.end}]`,
);
// console.log(testMap);
const ageMap = ages.map((age) => Math.sqrt(age)).map((age) => age * 2);
// console.log(ageMap, ages);
//reduce//
const maxValue = (a, b) => (a > b ? a : b);
function maxSequence(a) {
  let result = a[0];
  for (let e of a) result = maxValue(result, e);
  return result;
}
// console.log(maxSequence(ages));
const minValue = (a, b) => (a < b ? a : b);
function minSequence(a) {
  let result = a[0];
  for (let e of a) result = minValue(result, e);
  return result;
}
// console.log(minSequence(ages));
//extracting common sequence//
function reduce(array, func) {
  let result = array[0];
  for (let element of array) result = func(result, element);
  return result;
}
// console.log(reduce(ages,maxValue));
// console.log(reduce(ages,minValue));
function reduce1(array, func, init) {
  let result = init;
  for (let element of array) result = func(result, element);
  return result;
}
// console.log(reduce1(ages,minValue,1));
//js array reduce//
const ageSum = ages.reduce((total, age) => {
  return total + age;
}, 0);
// console.log(ageSum);
const totalCompany = companies.reduce((acc, company) => {
  return acc + company.end - company.start;
}, 0);
console.log(totalCompany);
