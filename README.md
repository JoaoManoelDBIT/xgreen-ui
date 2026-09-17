# XGreen UI

Tipografia, cores e componentes do Design System em TypeScript. O pacote npm exporta só os componentes (`Button`). React e Vite servem a amostra (`/tipografia`, `/cores`, `/componentes/botao`).

No app que instalar o pacote:

```tsx
import { Button } from '@x-green/components'

<Button className="w-full">
    Continuar
</Button>
```

O CSS do `Button` entra junto com o import: variáveis `--xg-*` e classes `.xg-button`, `.xg-button--primary`. Não depende de Tailwind. Os estilos ficam em `@layer components`, então `className="bg-ember-500"` (Tailwind) sobrepõe a variante.

Para só os tokens, sem o JS:

```css
@import "@x-green/components/styles.css";
```

Para recolorir sem lutar com especificidade:

```css
:root {
  --xg-color-primary: #111111;
}
```

## Executar e validar

```sh
npm install
npm run dev
npm run typecheck
npm run lint
npm run build
npm run preview
npm run build:lib
```

`typecheck` executa `tsc -b`. `build` gera a amostra em `site/`. `build:lib` gera o pacote em `dist/` (JS, CSS puro dos componentes e tipos). `tailwindcss` e `@tailwindcss/vite` são só da amostra neste repo; `react` e `react-dom` são peer dependencies.

## Deploy na Vercel

A configuração versionada em `vercel.json` usa `npm run build` e publica a pasta `site/`. O rewrite para `index.html` permite abrir diretamente as rotas da amostra, como `/tipografia` e `/componentes/botao`.

## Publicar no npm

```sh
npm login
npm publish
```

`prepublishOnly` já roda typecheck, lint e `build:lib`. Só sobe a pasta `dist/`. A amostra não entra no pacote. O pacote é `@x-green/components` (org `x-green`).

## Estrutura

```text
src/
├── tokens/
│   ├── primitives/typography.ts
│   ├── primitives/colors.ts
│   ├── semantic/typography.ts
│   ├── semantic/colors.ts   # Primary e estados do botão
│   └── index.ts             # Tokens da amostra (não saem no pacote JS)
├── components/
│   └── button.tsx           # Button em CSS puro
├── styles/
│   ├── tokens.css           # Variáveis --xg-* (contrato do pacote)
│   ├── button.css           # .xg-button e variantes
│   └── index.css            # Entrada CSS do npm
├── screens/
│   ├── layout/              # Header, sidebar e chrome da demonstração
│   ├── tipografia/
│   ├── cores/
│   └── componentes/
├── routes/                  # Páginas da demonstração (TanStack Router)
├── index.ts                 # Reexporta só os componentes (entrada do npm)
├── index.lib.ts             # Entrada do build da lib (importa o CSS)
├── theme.css                # Tema Tailwind da amostra (não sai no pacote)
├── index.css                # Tailwind e estilos da amostra
└── main.tsx                 # RouterProvider
```

Os primitivos são a origem dos valores. Os tokens semânticos de tipografia reutilizam `fontFamily`, `fontWeight`, `fontSize` e `lineHeight`. Tokens semânticos de cor ainda não existem: o Figma definiu só as famílias primitivas. Todos usam `as const`; os tipos são derivados dos valores. Tokens ficam em `src/tokens/` para a amostra e para o CSS do `Button`; o pacote não os exporta.

## Primitivos de tipografia

- `fontFamily.sans`: `"var(--xg-font-sans)"`.
- `fontWeight.regular`: `400`; `fontWeight.semibold`: `600`.
- `fontSize`: `xs: 12px`, `sm: 14px`, `md: 16px`, `lg: 20px`, `xl: 24px`, `2xl: 32px`, `3xl: 40px`, `4xl: 48px`, `5xl: 60px`.
- `lineHeight`: chaves numéricas `16`, `20`, `24`, `28`, `40`, `48`, `56` e `72`, com os respectivos valores em `px`. Reutiliza `fontSize` quando os valores coincidem.

## Tokens semânticos de tipografia

Todos os tokens usam `--xg-font-sans`. Tamanhos e alturas de linha são valores absolutos em pixels.

| Token | Peso | Tamanho | Altura de linha |
| --- | ---: | ---: | ---: |
| `xg-heading-h1` | 600 | 60px | 72px |
| `xg-heading-h2` | 600 | 48px | 56px |
| `xg-heading-h3` | 600 | 40px | 48px |
| `xg-heading-h4` | 600 | 32px | 40px |
| `xg-heading-h5` | 600 | 24px | 28px |
| `xg-heading-h6` | 600 | 20px | 24px |
| `xg-body-sm` | 400 | 14px | 16px |
| `xg-body-sm-semibold` | 600 | 14px | 16px |
| `xg-body-sm-link` | 400 | 14px | 16px |
| `xg-body-md` | 400 | 16px | 20px |
| `xg-body-md-link` | 400 | 16px | 20px |
| `xg-body-md-semibold` | 600 | 16px | 20px |
| `xg-body-lg` | 400 | 20px | 24px |
| `xg-body-lg-link` | 400 | 20px | 24px |
| `xg-body-lg-semibold` | 600 | 20px | 24px |
| `xg-caption` | 400 | 12px | 16px |

Os tokens de link definem apenas tipografia; cor e sublinhado pertencem ao contexto de uso. A demonstração aplica `underline` aos links.

## Cores

`colors` reúne as famílias primitivas do Figma: `neutral`, `green`, `blue`, `purple`, `red`, `orange`, `yellow` e `cyan`. Os HEX são os valores oficiais do token, sem conversão. O degrau `25` só existe em `neutral`.

Na amostra, o `theme.css` mapeia os tokens `--xg-*` para utilitários Tailwind prefixados (`bg-xg-green-500`, `text-xg-neutral-900`, `xg-heading-h1`). `colorCssVars.green[500]` devolve `var(--xg-color-green-500)` para uso em estilo inline.

No pacote as cores saem como variáveis `--xg-color-green-500`, `--xg-color-primary`, etc. Os papéis semânticos atuais são `primary` (`#008149`), `primary-hover` (`#006137`), `outline` (`#F0F5FB`), `error` (`#BB3030`) e `error-hover` (`#8C2424`), usados pelo `Button`.

## Botão

`Button` usa classes estáveis (`.xg-button`, `.xg-button--primary`, …) e tokens `--xg-*`. As variantes `primary`, `outline`, `transparent`, `error`, `outline-error`, `transparent-error`, `neutral`, `outline-neutral` e `transparent-neutral` cobrem default, hover, focus e disabled.

```tsx
import { Button } from '@x-green/components'

<Button>
    Continuar
</Button>
<Button variant="outline">
    Continuar
</Button>
<Button variant="transparent">
    Continuar
</Button>
<Button variant="error">
    Excluir
</Button>
<Button variant="outline-error">
    Excluir
</Button>
<Button variant="transparent-error">
    Excluir
</Button>
<Button variant="neutral">
    Continuar
</Button>
<Button variant="outline-neutral">
    Continuar
</Button>
<Button variant="transparent-neutral">
    Continuar
</Button>
<Button disabled>
    Continuar
</Button>
```

As paletas primitivas e os papéis semânticos ficam em `src/tokens/` para a amostra e para o CSS do `Button`. Não são exportados pelo pacote nesta versão.

## Consumir em React

```tsx
import { Button } from '@x-green/components'

<Button className="w-full">
    Continuar
</Button>
```

O pacote exporta `Button`, `ButtonProps` e `ButtonVariant`. O CSS entra com o JS (também em `@x-green/components/styles.css`). Apps com ou sem Tailwind podem passar `className` para layout ou para sobrescrever o visual.

## Fonte padrão

Por enquanto, o projeto usa a fonte padrão do sistema via `--xg-font-sans` (que aponta para `--default-font-family` do Tailwind), sem arquivos de fontes personalizados, imports adicionais ou downloads de fontes.
