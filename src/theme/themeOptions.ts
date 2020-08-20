import { ThemeOptions } from '@material-ui/core/styles'

const themeOptions:ThemeOptions = {
  typography: {
    body1: {
      fontSize: "1rem",
    },
    button: {
      fontSize: "0.850rem"
    }
  },
  overrides: {
    MuiCssBaseline: {
      "@global": {
        html: {
          fontSize: "100%",
          "@media (max-width: 600px)": {
            fontSize: "89%"
          }
        }
      }
    },
    MuiTable: {
      root: {
        tableLayout: 'fixed'
      }
    },
    MuiCard: {
      root: {
        borderRadius: '15px'
      }
    },
    MuiTooltip: {
      tooltip: {
        fontSize: '11px'
      }
    },
    MuiButton: {
      root: {
        textTransform: 'none',
      }
    }
  }
}

export default themeOptions
