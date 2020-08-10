const colors = {
  primary: {
    light: '#9fffe0',
    main: '#69f0ae',
    dark: '#2bbd7e',
    contrastText: '#34314c',
  },
  secondary: {
    light: '#8f85f2',
    main: '#7467EF',
    dark: '#5148a7',
    contrastText: '#fafafa',
  },
  background: {
    paper: '#1E1E1E',
    default: '#121212'
  }
}

export const light = {
  palette: {
    type: 'light',
    primary: colors.primary,
    secondary: colors.secondary,
    action: {
      active: colors.primary.contrastText
    }
  },
  overrides: {
    MuiTypography: {
      root: {
        color: colors.primary.contrastText
      }
    },
  }
}

export const dark = {
  palette: {
    type: 'dark',
    primary: {
      main: '#1e1e1e'
    },
    secondary: colors.secondary,
    action: {
      active: colors.secondary.contrastText
    },
    background: colors.background
  },
  overrides: {
    MuiTypography: {
      root: {
        color: 'rgba(255,255,255,0.9)'
      }
    },
  },
}
