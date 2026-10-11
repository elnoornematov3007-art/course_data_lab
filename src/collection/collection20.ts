/* 	
	Напишите функцию groupUnfinishedHighPriorityTasks, которая группирует задачи по категориям, фильтруя только незавершенные высокоприоритетные задачи.
*/

export type Task = { category: string; priority: string; completed: boolean };

export function groupUnfinishedHighPriorityTasks(tasks: Task[]): Map<string, Task[]> {
  const result = new Map<string, Task[]>();

  const filteredTasks = tasks.filter(
    task => task.priority === 'high' && !task.completed
  );

  for (const task of filteredTasks) {
    if (!result.has(task.category)) {
      result.set(task.category, []);
    }

    result.get(task.category)!.push(task);
  }

  return result;
}


