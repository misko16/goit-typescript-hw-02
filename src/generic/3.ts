/*
  У вас є функція merge, яка поєднує два об'єкти. 
  Використовуйте generics, щоб вказати, що ці об'єкти можуть бути будь-якого типу.
*/

function merge<T extends {}, U extends  {}>(objA: T, objB: U): T & U {
  const result = { ...objA, ...objB };
  return result as T & U;
}

export {};
