import React from 'react'
import { putTheme, getTheme } from './styles/theme/themePersisted'
import { light, dark } from './styles/theme/themeColors'
import ThemeOptions from './styles/theme/themeOptions'
import { createMuiTheme, ThemeProvider, CssBaseline} from '@material-ui/core'
import { ThemeContext } from './components/ThemeContext';
import Home from './pages/Home'
import './styles/global.css'

function App() {
  const [theme, setTheme] = React.useState(getTheme)

  // Cria a função que altera o tema e salva na variavel 'theme'.
  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }
  
  // Cria uma paleta de cores, baseado na variavel 'theme'.
  const palette = theme === 'light' ? light : dark
  // Salva o tema alterado, no localStorage.
  putTheme(theme)
  
  // Cria um tema com as opções e a paleta de cores.
  const currentTheme = React.useMemo(
    () => createMuiTheme(ThemeOptions, palette), [palette]
  )

  // Criando variavel com o tema e disparador que alterna o tema
  const state = {
    theme,
    toggleTheme
  }

  return (
    // Atualizando valores do contexto
    <ThemeContext.Provider value={state}>
      {/* Passando tema criado para o ThemeProvider */}
      <ThemeProvider theme={currentTheme}>
        <CssBaseline />
        <Home />
      </ThemeProvider>
    </ThemeContext.Provider>
  )
}

export default App;
