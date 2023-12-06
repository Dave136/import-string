const src = `export const mod = (): string => {
  return {
    foo: 'baz'
  }
}`


async function main() {
  const { importModule } = await import('./dist/index.js')
  const x = await importModule(src)

  console.log(x.mod().foo)
}

main()