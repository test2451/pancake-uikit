🥧 Pie UIkit



Pie UIkit is a set of React components and hooks used to build pages on Pie's apps. It also contains a theme file for dark and light mode.

## Install

`yarn add @pieswap-libs/uikit`

## Setup

### Theme

Before using Pie UIkit, you need to provide the theme file to styled-component.

```
import { ThemeProvider } from 'styled-components'
import { light, dark } from '@pieswap-libs/uikit'
...
<ThemeProvider theme={isDark}>...</ThemeProvider>
```

### Reset

A reset CSS is available as a global styled component.

```
import { ResetCSS } from '@pieswap-libs/uikit'
...
<ResetCSS />
```

### Types

This project is built with Typescript and export all the relevant types.

## How to use the UIkit

If you want to use components from the UIkit, check the [Storybook documentation](https://pieswap.github.io/pie-uikit/)
