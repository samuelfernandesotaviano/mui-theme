import React from 'react'
import { ThemeContext } from './ThemeContext'
import { IconButton, Tooltip } from '@material-ui/core'
import { Brightness4, Brightness7 } from '@material-ui/icons'

function ToggleThemeButton() {
  return (
    <ThemeContext.Consumer>
      {
        ({theme, toggleTheme}) => (
          <Tooltip title='Alternar tema light/dark'>
            <IconButton onClick={toggleTheme}>
              {theme === 'light' ? <Brightness4 /> : <Brightness7 />}
            </IconButton>
          </Tooltip>
        )
      }
    </ThemeContext.Consumer>
  )
}

export default ToggleThemeButton
