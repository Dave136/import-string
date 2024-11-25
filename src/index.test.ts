import { expect, test, describe } from 'bun:test';
import { importModule } from './index';

describe('importModule', () => {
  test('should import typescript module correctly', async () => {
    const src = `
      export const hello = (): string => 'Hello World';
    `;

    const mod = await importModule(src, {
      loader: 'ts',
      target: 'es2018',
    });

    expect(mod.hello()).toBe('Hello World');
  });

  test('should import javascript module correctly', async () => {
    const src = `
      export const data = {
        name: 'test',
        value: 42
      };
    `;

    const mod = await importModule(src, {
      loader: 'js',
      target: 'es2018',
    });

    expect(mod.data.name).toBe('test');
    expect(mod.data.value).toBe(42);
  });

  test('should use default options if none provided', async () => {
    const src = `
      export const defaultTest = true;
    `;

    const mod = await importModule(src, {});
    expect(mod.defaultTest).toBe(true);
  });
});
