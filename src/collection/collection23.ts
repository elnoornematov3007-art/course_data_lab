/* 
	Напишите функцию groupByCategory, которая принимает массив объектов и имя свойства для группировки, возвращает объект, где ключи - значения свойства, а значения - массивы объектов.
*/

export function groupByCategory<T extends Record<string, any>>(arr: T[], key: keyof T): Record<T[keyof T], T[]> {
	return arr.reduce((result, item) => {
		const category = item[key];

		if (!result[category]) {
    		result[category] = [];
  		}

  		result[category].push(item);
  		return result;
	}, {} as Record<T[keyof T], T[]>);
}


