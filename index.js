const readline = require('readline');
const fs = require('fs');
let input = fs.readFileSync('input.txt', 'utf8');;
let patterns = fs.readFileSync('patterns.txt', 'utf8');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Выбери вариант режима? ", function(answer) {
  
    if(answer == 1){
        stringPoisk1(input,patterns);
    } else if ( answer == 2) {
        stringPoisk2(input,patterns);
    } else if (answer == 3){
        stringPoisk3(input,patterns);
    }else {
        console.log("error");
    }

  rl.close();
});




function stringPoisk1(str1,str2) {
    let string1 = str1.split('\n').join(' ').split(' ').filter(function (el) {
        return el != "";
    });
    let string2 = str2.split('\n').join(' ').split(' ').filter(function (el) {
        return el != "";
    });;
    console.log(string1);
    console.log(string2);
    for(let i = 0; i<string1.length;i++){
    for(let j = 0; j<string2.length;j++){
      if(string1[i].toLowerCase().replace(/\s+/g, '') == string2[j].toLowerCase().replace(/\s+/g, '')) {
        console.log(string1[i]);
      }
    }
  }
}
function stringPoisk2(str1,str2) {
  let string1 = str1.split('\n').filter(function (el) {
    return el != "";
});;
  let string2 = str2.split('\n').filter(function (el) {
    return el != "";
});;
  console.log(string1);
  console.log(string2);
  for(let i = 0; i<string1.length;i++){
  for(let j = 0; j<string2.length;j++){
    if(string1[i].toLowerCase().replace(/\s+/g, '') == string2[j].toLowerCase().replace(/\s+/g, '')) {
    console.log(string1[i]);
    }
  }
  }
}
function stringPoisk3(str1,str2) {
let count = 0;
let string1 = str1.split('\n').join(' ').split(' ').filter(function (el) {
  return el != "";
});
let string2 = str2.split('\n').join(' ').split(' ').filter(function (el) {
  return el != "";
});;
console.log(string1);
console.log(string2);
for(let i = 0; i<string1.length;i++){
  for(let j = 0; j<string2.length;j++){
    if(string1[i].length == string2[j].length) {
      for(let q = 0; q<string1[i].length;q++){
        if(string1[i][q] == string2[j][q]) {
          count++;
          if(count/5==1){
            console.log(string1[i]);
            console.log(string2[i]);
          }
        }
      }
    }
  }
}}