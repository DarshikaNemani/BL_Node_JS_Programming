console.log(true, typeof(true),String('true'), typeof(String('true')));
console.log(123, typeof(123),String(123), typeof(String(123)));
console.log([], typeof([]),String([]), typeof(String([])));

console.log('123', typeof('123'),Number('123'), typeof(Number('123')));
console.log('abc', typeof('abc'),Number('abc'), typeof(Number('abc')));
console.log(true, typeof(true),Number(true), typeof(Number(true)));
console.log(123, typeof(123),Number(123), typeof(Number(123)));

console.log('123', typeof('123'),Boolean('123'), typeof(Boolean('123')));
console.log('abc', typeof('abc'),Boolean(Number('abc')), typeof(Number(Boolean('abc'))));
console.log('abc', typeof('abc'),Boolean('abc'), typeof(Boolean('abc')));
console.log('', typeof(''),Boolean(''), typeof(Boolean('')));
console.log([], typeof([]),Boolean([]), typeof(Boolean([])));