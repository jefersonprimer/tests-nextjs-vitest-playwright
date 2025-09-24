import { sanitizeStr } from './sanitize-str.ts';

describe('sanitizeStr (unit)', () => {

  it('deve retornar uma string vazia quando recebe um valor false', () => {
    // @ts-expect-error testando a funcao sem parametros
    expect(sanitizeStr()).toBe(''); 
  });

  it('deve retornar uma string vazia quando recebe um valor que nao e uma string', () => {
    // @ts-expect-error testando uma funcao com a tipagem incorreta
    expect(sanitizeStr(123)).toBe('');
  });

  it('deve garantir o trim da string enviada', () => {
    expect(sanitizeStr('   test  ')).toBe('test');
  });

  it('deve garantir que a string seja normalizada com o padrao NFC', () => {
    const original = 'e\u0301';
    const expected= 'é';
    expect(expected).toBe(sanitizeStr(original));
  });
});
