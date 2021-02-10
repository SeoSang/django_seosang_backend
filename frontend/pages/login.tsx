import React, { useState, useContext, useEffect } from "react"
import { useRouter } from "next/dist/client/router"
import { useForm } from "react-hook-form"
// material-ui
import Avatar from "@material-ui/core/Avatar"
import Button from "@material-ui/core/Button"
import CssBaseline from "@material-ui/core/CssBaseline"
import TextField from "@material-ui/core/TextField"
import FormControlLabel from "@material-ui/core/FormControlLabel"
import Checkbox from "@material-ui/core/Checkbox"
import Link from "@material-ui/core/Link"
import Grid from "@material-ui/core/Grid"
import LockOutlinedIcon from "@material-ui/icons/LockOutlined"
import Typography from "@material-ui/core/Typography"
import { makeStyles } from "@material-ui/core/styles"
import Container from "@material-ui/core/Container"
import { PageLink } from "util/PageLink"

export interface LoginFormValues {
  email: string
  password: string
}

const LoginFormValidator = (errors: any) => {
  if (errors.email) {
    return "Invalid Email!"
  }
  if (errors.password) {
    return "Invalid Password!"
  }
  return ""
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}))

const Login = () => {
  const classes = useStyles()
  const router = useRouter()
  const { register, handleSubmit, errors } = useForm<LoginFormValues>()
  const [validateText, setValidateText] = useState<string>()

  // useEffect(() => {
  //   if (me) {
  //     alert("로그인이 됐으므로 홈으로 이동합니다!")
  //     router.push("/")
  //   }
  // }, [me])

  const onSubmit = async (data: LoginFormValues) => {
    for (const [key, value] of Object.entries(data)) {
      if (value == "") {
        setValidateText(`Invalid ${key}!`)
        return
      }
    }
    return
  }

  return (
    <Container component='main' maxWidth='sm'>
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component='h1' variant='h5'>
          Login
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
          <TextField
            variant='outlined'
            margin='normal'
            required
            fullWidth
            id='email'
            label='Email Address'
            name='email'
            autoComplete='email'
            autoFocus
            inputRef={register({
              pattern: /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
            })}
          />
          <TextField
            variant='outlined'
            margin='normal'
            required
            fullWidth
            name='password'
            label='Password'
            type='password'
            id='password'
            autoComplete='current-password'
            inputRef={register}
          />
          <FormControlLabel
            control={<Checkbox value='remember' color='primary' />}
            label='Remember me'
          />
          <Button
            type='submit'
            fullWidth
            variant='contained'
            color='primary'
            className={classes.submit}>
            Login
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href='#' variant='body2'>
                Did you forget the password?
              </Link>
            </Grid>
            <Grid item>
              <PageLink href='/register'>
                <Typography color='primary' variant='body2'>
                  Don't you have an account? Register!
                </Typography>
              </PageLink>
            </Grid>
          </Grid>
          <Grid container justify='center'>
            <Typography color='error' variant='body1'>
              {LoginFormValidator(errors)}
            </Typography>
          </Grid>
        </form>
      </div>
    </Container>
  )
}

export default Login
