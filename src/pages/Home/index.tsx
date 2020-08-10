import React from 'react'
import useStyles from './styles'
import {AppBar, Toolbar, Card, CardContent, Typography} from  '@material-ui/core'
import ToggleThemeButton from  '../../components/ToggleThemeButton'
import ButtonCustom from '../../components/ButtonCustom'

export default function Home () {
  const classes = useStyles()

  return (
    <div className={classes.root}>

      <AppBar>
        <Toolbar style={{justifyContent: 'space-between'}}>
          <Typography>React JS & Typescript</Typography>
          <ToggleThemeButton />
        </Toolbar>
      </AppBar>

      <div className={classes.body}>
        <Typography variant='h5'>Theme Material Ui</Typography>
        <ButtonCustom
          handleClick={() => alert('Theme Material Ui - Button custom.')}
        >
          Button custom
        </ButtonCustom>
      </div>
    </div>
  )
}