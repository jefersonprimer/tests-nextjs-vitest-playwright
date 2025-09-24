type validateTodoDescription = {
  sucess: boolean;
  errors: string[];
}

export const validateTodoDescription = (description: string): validateTodoDescription => {
  const errors = [];

  if(description.length <= 3) {
    errors.push('Descrição precisa ter mais do que 3 caracteres')
  }

  return {
    sucess: errors.length === 0,
    errors
  }
}
