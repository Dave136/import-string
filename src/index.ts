import { transformSync } from 'esbuild';

export async function importModule(srcCode: string) {
  const { code } = transformSync(srcCode, {
    loader: 'ts',
    target: 'es2015',
  });

  const toBase64 = (str: string) => `data:text/javascript;base64,${btoa(str)}`;
  const module = await import(toBase64(code));

  return module;
}
