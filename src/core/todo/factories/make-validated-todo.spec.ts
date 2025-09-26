import { makeValidatedTodo } from './make-validated-todo.ts';
import * as sanitizeStrMod from '@/utils/sanitize-str.ts';

describe('makeValidatedTodo (unit)', () => {

  it('deve chamar a funcao sanitizeStr com o valor correto', () => {
    // Mockar (mock, stub, dumy, fake, spy) -> Substituir alguma coisa temporariamente 
    /*
      vi.mock; -> mockar um modulo inteiro
      const mock = vi.mocked(format); -> 
      vi.spyOn; -> interceptar coisas e verificar o que esta acontecendo
      vi.stubGlobal; -> faco a mesma coisa que no spyOn so que com coisas globais
      vi.stubEnv; -> mudar o valor de uma variavel de ambiente
      vi.unstubAllEnvs; -> desfaz o que foi feito no vi.stubEnv
      
      -> pode restar lixos de mocks, e ao chamar algo testado com mocks anteriormente pode ir com esses lixos, ai nos limpa
      vi.resetAllMocks();
      vi.restoreAllMocks();
    */

    // AAA
    // Arrange
    const description = 'abcd';
    const sanitizeStrSpy = vi.spyOn(sanitizeStrMod, 'sanitizeStr').mockReturnValue(description);

    // Action
    makeValidatedTodo(description);

    
    // Assert
    // toHaveCalled() -> checka se foi chamado pelo menos uma vez
    expect(sanitizeStrSpy).toHaveBeenCalledExactlyOnceWith(description);
    expect(sanitizeStrSpy).toHaveBeenCalledTimes(1);
    expect(sanitizeStrSpy).toHaveBeenCalledWith(description);
  });

  /*
  it('deve chamar a validateTodoDescription com o retorno de sanitizeStr', () => {

  });

  it('deve chamar makeValidatedTodo se validatedDescription retornou sucesso', () => {

  });

  it('deve chamar retornar validatedDescription.error se a validacao falhou', () => {

  });
  */
});
