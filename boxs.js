"use strict";
let conterFirst = 0,
  conterChange = 0;

const JnerateRandom = function () {
  return Math.floor(Math.random() * 3);
};

const myfunc = function () {
  const Boxs = new Array(3).fill(false);
  const Prize = JnerateRandom();
  Boxs[Prize] = true;
  const SelectFirstUser = JnerateRandom();
  let delet = JnerateRandom();
  for (let i = 0; i < Boxs.length; i++) 
    if(i!==Prize && i!==SelectFirstUser){
      delet = i;
      break;
    }
  Boxs.splice(delet, 1);
  Boxs[SelectFirstUser] ? (conterFirst += 1) : (conterChange += 1);
};
for (let i = 0; i <1000; i++) {
  myfunc();
}
console.log(`تغییر ندهد :  ${conterFirst}`);
console.log(`تغییر بدهد :  ${conterChange}`);

