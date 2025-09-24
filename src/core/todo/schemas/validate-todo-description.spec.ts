import { validateTodoDescription } from './validate-todo-description.ts'

describe('validateTodoDescription (unit)', () => {

  test('deve retornar erro quando a descricao for menor que quatro caracteres', () => {
    const description = 'abc';
    const result = validateTodoDescription(description);

    expect(result.errors).toStrictEqual([
      'Descrição precisa ter mais do que 3 caracteres'
    ]);

    expect(result.sucess).toBe(false);
  });

  test('deve retornar sucesso quando a descricao for maior que tres caracteres', () => {
    const description = 'abcd';
    const result = validateTodoDescription(description);

    expect(result.errors).toStrictEqual([]);
    expect(result.sucess).toBe(true);
  });

})
