let ip = ["apple", "banana", "mango","among", "paple"];
let op = [];

for (let i of ip){
    let st = new Set(i);
    op.push([...st].sort().join(''));
}

for (let j = 0; j < op.length; j++){
    for (let k = j+1; k<op.length; k++){
        if (op[j]==op[k]){
            console.log(ip[j],ip[k]);
        }
        else{
            continue;
        }
    }
}

/*
let str = ["apple", "banana", "mango", "among"];

const groupByUniqueChars = arr =>
  Object.values(
    arr.reduce((map, word) => {
      const key = [...new Set(word)].sort().join('');
      (map[key] ||= []).push(word);
      return map;
    }, {})
  ).filter(a=>a.length>1);

const result = groupByUniqueChars(str);
console.log(result);
*/ 

/*
function groupByUniqueChars(arr) {
    const res = [];
  
    for (let word of arr) {
      const set = new Set(word);
  
      let group = res.find(g => {
        const firstSet = new Set(g[0]);
        return set.size === firstSet.size &&
          [...set].every(c => firstSet.has(c));
      });
  
      if (group) {
        group.push(word);
      } else {
        res.push([word]);
      }
    }
  
    return res;
  }
  
  let words = ["apple", "banana", "mango", "among"];
  console.log(groupByUniqueChars(words));
*/  