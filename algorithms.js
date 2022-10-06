const isPalidrome = (str) => str === str.split('').reverse().join('');


console.log(isPalidrome("deified"));
console.log(isPalidrome("kayak"));
console.log(isPalidrome("boroda"));

const findShort = (str) => ( str
       .split(' ')
       .sort((a,b) => a.length - b.length)[0])

 // (if more then one word is the smallest) let b      = a.filter( word => word.length ===         a[0].length);

//   return b;

console.log(findShort("Going places together"));
console.log(findShort("There were no we"));
console.log(findShort("Never being alone moving forward from you"));

const toInitials = (str) => {
  let finalArr = [];
  finalArr.push(`${str.split(' ')[0][0].toUpperCase()}.`);
  finalArr.push(`${str.split(' ')[1][0].toUpperCase()}.`);
  return finalArr.join('');
}


console.log(toInitials("Bill Gates"));
console.log(toInitials("marry poppins"));


const sumDigits = (number) => {
  return Math.abs(number)
    .toString()
    .split('')
    .reduce((a,b) => Number(a) + Number(b))
  
};

console.log(sumDigits(36));
console.log(sumDigits(-14));
console.log(sumDigits(-115));


const findMinMax = (arr) => {
  let sorted = arr.sort((a,b) => a - b);
  newArr = [];
  newArr.push(sorted[0],sorted[sorted.length-1]);
  return newArr;
}

console.log(findMinMax([11,12,8,5,32,765,4323,33,54,105,77]));
console.log(findMinMax([11,0,2,5,32,765,323,33,44,54,77]));
console.log(findMinMax([3]))


const findMinMaxSecond = (arr) => ([Math.min(...arr), Math.max(...arr)])

console.log(findMinMaxSecond([11,12,8,5,32,765,4323,33,54,105,77]));
console.log(findMinMaxSecond([11,0,2,5,32,765,323,33,44,54,77]));
console.log(findMinMaxSecond([3]))

const accum = (str) => (str.split('').map((letter, index) => letter.toUpperCase() + letter.repeat(index)).join('-'))

console.log(accum('abcd'));
console.log(accum('asdffes'));



const accumSecond = (str) => (str.split('').map((letter, index) => letter.toUpperCase() + letter.repeat(index)).join('-'));
console.log(accumSecond('abcfrdd'));
console.log(accumSecond('asdffesffg'));

const capitals = (str) => {
  let arr = str.split('');
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].toUpperCase() === arr[i]) {
        newArr.push(arr[i])
    }
  }
 return newArr;
}

console.log(capitals("fgPkrjfUrhvJJhefJjvJ"));
console.log(capitals("JoeTribuAnni"));


const fooBar = (number) => {
  let a = [];
  for (let i = 1; i <= number; i++) {
    if (i % 3 === 0 && i % 5 === 0 ) {
      a.push("foobar")
   } else if (i % 3 === 0) {
     a.push("foo")
   } else if (i % 5 === 0) {
     a.push("bar")
   } else {
     a.push(i)
   }
  }
  return a;
}

console.log(fooBar(100));

const fooBarSecond = (number) => {
  for (let i = 1; i <= number; i++) {
    if (i % 3 === 0 && i % 5 === 0 ) {
      console.log("foobar");
   } else if (i % 3 === 0) {
     console.log("foo")
   } else if (i % 5 === 0) {
     console.log("bar")
   } else {
    console.log(i)
   }
  }
}
fooBarSecond(100);

function uniteUnique () {
  // let arr1 = [...arguments];
  // let arr2 = arr1.flat()
  // let newArr = [...new Set(arr2)];
  // return newArr;
  //  or 
  return [...new Set([...arguments].flat())]
}

console.log(uniteUnique([1,4,7,5,5,5,4,3,2],[3,2,2,2,4,4,3,2,6,7,6,5], [45,64,3,4,3,2,32]));


const phoneNumber = (number) => {
  // (654) 567-532
  let arr = number.toString().split('');
  arr.splice(0,0,"(");
  arr.splice(4,0,")");
  arr.splice(5,0," ");
  arr.splice(9,0,"-");
  return arr.join('');
  
}

console.log(phoneNumber(123543234));

const phoneNumberSecond = (number) => {
  // (654) 567-532
  let str = number.toString();
  return `(${str.slice(0,3)}) ${str.slice(3,6)}-${str.slice(6,9)}`;
  
}

console.log(phoneNumberSecond(123543234));



const findVowels = (str) => {
  let vowels = "aeiouy";
  // let arr = str.split('');
  // let filtered = str1.filter(letter => vowels.includes(letter));
  // return filtered.length;
  
  return str.split('').filter(letter => vowels.includes(letter)).length;
}

console.log(findVowels("Be always nice"));
console.log(findVowels("hello"));
console.log(findVowels("hello world"));


const toCapitalCase = (str) => {
  return str.split(' ').map(word => `${word.slice(0, 1).toUpperCase()}${word.slice(1)}`).join(' ');
}

console.log(toCapitalCase("we are gonna live forever"));