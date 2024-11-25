import { importFromStringSync } from 'module-from-string';
import { JscTarget, transformSync } from '@swc/wasm';

const isBun = () => 'Bun' in globalThis;
const isDeno = () => 'Deno' in globalThis;
const isNode = () => !isBun() && !isDeno();

export interface ImportModuleOptions {
  target?: JscTarget;
  loader?: 'ts' | 'js';
}

export async function importModule(
  src: string,
  { target = 'es2018', loader = 'ts' }: ImportModuleOptions,
) {
  if (isDeno()) {
    const { code } = transformSync(src, {
      jsc: {
        target,
        parser: {
          syntax: loader === 'ts' ? 'typescript' : 'ecmascript',
        },
      },
    });

    const toBase64 = (str: string) =>
      `data:text/javascript;base64,${btoa(str)}`;
    const module = await import(toBase64(code));

    return module;
  }

  if (isNode() || isBun()) {
    const mod = importFromStringSync(src, {
      transformOptions: {
        target,
        loader,
      },
    });

    return mod;
  }
}
