import { importFromStringSync } from 'module-from-string';
import { transformSync } from '@swc/wasm';

const isBun = () => 'Bun' in globalThis;
const isDeno = () => 'Deno' in globalThis;
const isNode = () => !isBun() && !isDeno();

export async function importModule(srcCode: string) {
  if (isDeno()) {
    const { code } = transformSync(srcCode, {
      jsc: {
        target: 'es2018',
        parser: {
          syntax: 'typescript',
        }
      },
    });
  
    const toBase64 = (str: string) => `data:text/javascript;base64,${btoa(str)}`;
    const module = await import(toBase64(code));

    return module;
  }

  if (isNode() || isBun()) {
    const mod = importFromStringSync(srcCode, {
      transformOptions: {
        loader: 'ts',
        target: 'es2018',
      }
    });

    return mod;
  }
}
