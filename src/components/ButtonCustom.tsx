import React from 'react'
import MuiButton from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core'

const useStales = makeStyles(theme => ({
  button: {
    backgroundColor: theme.palette.secondary.main,
    marginTop: '8px',
    fontWeight: 'bold',
    color: theme.palette.secondary.contrastText,
    '&:hover': {
      backgroundColor: theme.palette.secondary.dark,
   }
  }
}))

interface ButtonCustomProps {
  handleClick?: () => void
}

const Button: React.FC<ButtonCustomProps> = (props) => {
  const classes = useStales()

  return (
    <MuiButton
      className={classes.button}
      variant='contained'
      onClick={props.handleClick}
    >
      {props.children}
    </MuiButton>
  )
}

export default Button