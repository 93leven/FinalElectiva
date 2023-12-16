// Ejemplo básico de prueba unitaria con Jest
function sum(a, b) {
    return a + b;
  }
  
  test('sumar 1 + 2 es igual a 3', () => {
    expect(sum(1, 2)).toBe(3);
  });
  