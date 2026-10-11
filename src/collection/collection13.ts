/* 
	Создайте функцию countByRanges, которая принимает массив чисел и массив диапазонов, возвращает Map, где ключи - строковые представления диапазонов, а значения - количество чисел, попадающих в каждый диапазон.
*/

export function countByRanges(numbers: number[], ranges: [number, number][]): Map<string, number> {
	const result = new Map<string, number>();

  	for (const [min, max] of ranges) {
    	let count = 0;

    	for (const num of numbers) {
      		if (num >= min && num <= max) {
        	count++;
      		}
    	}

    	result.set(`${min}-${max}`, count);
  	}

	return result;
}
