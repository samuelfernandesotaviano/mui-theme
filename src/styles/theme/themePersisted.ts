export const putTheme = (theme: string) => {
  localStorage.setItem('theme-app', theme)
}

export const getTheme = () => {
  const theme = localStorage.getItem('theme-app')

  return theme ? theme : 'light'
}