# import-string

This package allow us to import code from simple string, with support to:

- [node](https://nodejs.org)
- [deno](https://deno.land)
- [bun](https://bun.sh)

### Getting started

This is a lightweight and simple package, you can install it using your favorite node package manager:

```bash
npm i import-string
```

```bash
pnpm add import-string
```

```bash
yarn add import-string
```

```bash
bun aa import-string
```


### Usage

In your file you can declare the module, functionality or variable in a string like the following example:

```typescript
const stringSrc = `export const example = (): string => {
  return {
    foo: 'baz'
  }
}`
```

From the package you can import the `importModule` function that receive string and returns the module:

```typescript
import { importModule } from 'import-string'

async function main() {
  const mod = await importModule(stringSrc)

  console.log(mod.example().foo) // output -> baz
}
```

### Development

1. Clone this repository
2. Install dependencies using `pnpm install`

Send a PR with the `feat|fix|refactor` etc

### Support

- BTC: `1Bwo1Htd47rLRM4PZhydWtoC5ZAR4Fv9KZ`
- USDT: [binance-qr](https://github.com/Dave136/vue-email/blob/main/docs/public/binance-qr.png?raw=true)

### Author

[David Arenas](https://github.com/Dave136)

### License

This project is licensed under [MIT](./LICENSE)