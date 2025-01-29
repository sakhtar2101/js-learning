const name = "Akhtar"
const repoCount = 50

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('AkhtarS_shah')
console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toLocaleUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-6, 2)
console.log(anotherString);

const newStringOne = "  akhtar  "
console.log(newStringOne.trim());

const url = "https://akhtar.com/shah%20akhtar"

console.log(url.replace('%20', '_'))

console.log(url.includes('nabeel'))

console.log(gameName.split('_'));