import { makeNewTodo } from './make-new-todo.ts'

describe('makeNewTodo (unit)', () => {

  describe('create', () => {

    test('deve retornar um novo todo valido', () => {
      // AAA -> Arrange, Action, Assert
      // Arrange -> criar as coisas que eu preciso para o test
      const expectedTodo = {
        id: expect.any(String),
        description: 'meu novo todo',
        createdAt: expect.any(String) 
      }

      // Action -> fazer, executar a ação que você esta testando
      const newTodo = makeNewTodo('meu novo todo');

      // Assert -> preciso checarr o que eu espero aconteceu
      // toBe === (checar tipo primitivo)
      // toEqual(pode não checar valore `underfined`) ou toStrictEqual(checar todas as chaves) (para checarr objetos)
      // chacando apenas a description
      expect(newTodo.description).toBe(expectedTodo.description);

      // checando o objeto o objeto inteiro
      expect(newTodo).toStrictEqual(expectedTodo);
    }) 

  })

});
