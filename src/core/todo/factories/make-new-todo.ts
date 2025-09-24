import { Todo } from '../schemas/todo.contract.ts'

export const makeNewTodo = (description: string): Todo => {
  return {
    id: crypto.randomUUID(),
    description,
    createdAt: new Date().toISOString()
  };
}
