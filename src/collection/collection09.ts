/* 
	Напишите функцию findIntersection, которая принимает два массива и возвращает массив их общих элементов, используя Set.
*/

export function findIntersection(arr1: number[], arr2: number[]): number[] {
  const intersection = new Set<number>();
  const set2 = new Set(arr2);

  for (const num of arr1) {
    if (set2.has(num)) {
      intersection.add(num);
    }
  }

  return [...intersection];
}
