const src = `export const mod = (): string => {
  return {
    foo: 'baz'
  }
}`;

async function main() {
  const { importModule } = await import('./dist/index.js');
  const x = await importModule(src, {
    loader: 'ts',
    target: 'es2015',
  });

  console.log(x.mod().foo);
}

main();
