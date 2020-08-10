import { makeStyles } from  '@material-ui/core'

const useStyles = () => makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    color: theme.palette.primary.contrastText
  },
  body: {
    display: 'flex',
    flexDirection: 'column'
  }
}))

export default useStyles()
