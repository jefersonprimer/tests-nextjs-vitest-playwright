import { sanitizeStr } from '@/utils/sanitize-str';
import { validateTodoDescription } from '../schemas/validate-todo-description.ts';
import { makeNewTodo } from './make-new-todo.ts';
import { Todo } from '../schemas/todo.contract.ts';

type InvalidTodo = {
  sucess: false;
  errors: string[];
}

type ValidTodo = {
  sucess: true;
  data: Todo;
}

type MakeValidatedTodo = ValidTodo | InvalidTodo

export const makeValidatedTodo = (description: string): MakeValidatedTodo => {
  const cleanDescription = sanitizeStr(description);
  const validatedDescription = validateTodoDescription(cleanDescription);

  if(validatedDescription.sucess) {
    return {
      sucess: true,
      data: makeNewTodo(cleanDescription)
    }
  }

  return {
    sucess: false,
    errors: validatedDescription.errors
  }
}
