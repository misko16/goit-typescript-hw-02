/* 
  Як ви визначите змінну в TypeScript, яка може приймати рядок або число (union type)? 
  І так само визначте змінну, яка може приймати тільки одне з двох рядкових значень: 'enable' або 'disable' (literal type)?
*/

let union: string | number;
union = 'hi';
console.log(union);

union = 55;
console.log(union);

let literal: 'enable'| 'disable';
literal = 'enable';
console.log(literal);

literal = "disable";
console.log(literal);