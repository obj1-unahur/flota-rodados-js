const {Corsa, Kwid} = require('../src/autos');

describe('Corsa', () => {
  var cachito;

  beforeEach(() => {
    cachito = new Corsa();
    cachito._color = 'rojo';
  });

  test('capacidad', () => {
    expect(cachito.capacidad()).toBe(4);
  });

  test('color', () => {
    expect(cachito.color()).toBe('rojo');
  });

  test('velocidad máxima', () => {
    expect(cachito.velocidadMaxima()).toBe(150);
  });

  test('peso', () => {
    expect(cachito.peso()).toBe(1300);
  });
});