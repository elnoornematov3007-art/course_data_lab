/* 	Напишите функцию findMostPopularTag, которая находит самый часто встречающийся тег в массиве постов и количество его повторений. Функция не должна использовать циклы.
*/

type Post = { tags: string[] };

export function findMostPopularTag(posts: Post[]): Record<string, number> {
    const tags = posts.flatMap(post => post.tags);

    return tags.reduce((result, tag) => {
        result[tag] = (result[tag] || 0) + 1;

        return result;
    }, {} as Record<string, number>);
}
