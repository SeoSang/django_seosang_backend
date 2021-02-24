import { useRouter } from "next/dist/client/router"
import React, { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { PageLink } from "util/PageLink"

import Avatar from "@material-ui/core/Avatar"
import Button from "@material-ui/core/Button"
import Container from "@material-ui/core/Container"
import CssBaseline from "@material-ui/core/CssBaseline"
import Grid from "@material-ui/core/Grid"
import { makeStyles } from "@material-ui/core/styles"
import TextField from "@material-ui/core/TextField"
import Typography from "@material-ui/core/Typography"
import LockOutlinedIcon from "@material-ui/icons/LockOutlined"
import { RegisterFormData } from "api/user"

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
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  doubleCheckButton: {
    height: "100%",
    color: "white",
  },
}))

const FormValidator = (errors: any) => {
  if (errors.first_name) {
    return "Invalid First Name!"
  }
  if (errors.last_name) {
    return "Invalid Last Name!"
  }
  if (errors.email) {
    return "Invalid Eamil!"
  }
  if (errors.password) {
    return "Invalid Password!"
  }
  return ""
}

export default function Register() {
  const classes = useStyles()
  const { register: formRegister, handleSubmit, watch, getValues, errors } = useForm<
    RegisterFormData
  >()
  const router = useRouter()
  const [validateText, setValidateText] = useState<string>("")

  // useEffect(() => {
  //   if (me) {
  //     alert("이미 로그인이 되어있습니다.")
  //     router.push("/")
  //   }
  // }, [me])

  const onSubmit = async (data: RegisterFormData) => {
    // if (!isDoubleCheckOK) {
    //   alert("이메일 중복확인을 해주세요!")
    //   return
    // }
    for (const [key, value] of Object.entries(data)) {
      if (value == "") {
        setValidateText(`Invalid ${key}!`)
        alert(validateText)
        return
      }
    }
  }

  const onSubmitDoubleCheck = () => {
    const email = getValues("email")
    if (!email) {
      alert("Invalid Email!")
      return
    }
  }

  return (
    <Container component='main' maxWidth='sm'>
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component='h1' variant='h5'>
          Register
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)} className={classes.form}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete='first_name'
                name='first_name'
                variant='outlined'
                required
                fullWidth
                id='first_name'
                label='First_name'
                autoFocus
                inputRef={formRegister({
                  maxLength: 10,
                })}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant='outlined'
                required
                fullWidth
                id='last_name'
                label='Last_name'
                name='last_name'
                autoComplete='last_name'
                inputRef={formRegister({
                  maxLength: 20,
                })}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete='sex'
                name='sex'
                variant='outlined'
                required
                fullWidth
                id='sex'
                label='Sex'
                autoFocus
                inputRef={formRegister({
                  maxLength: 10,
                })}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant='outlined'
                required
                fullWidth
                id='nick_name'
                label='Nick_name'
                name='nick_name'
                autoComplete='nick_name'
                inputRef={formRegister({
                  maxLength: 20,
                })}
              />
            </Grid>
            <Grid item xs={9}>
              <TextField
                variant='outlined'
                required
                fullWidth
                id='email'
                label='Email Address'
                name='email'
                autoComplete='email'
                inputRef={formRegister({
                  pattern: /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
                })}
              />
            </Grid>
            <Grid item xs={3}>
              <Button
                className={classes.doubleCheckButton}
                fullWidth
                color='primary'
                variant='contained'
                onClick={onSubmitDoubleCheck}
              >
                Check
              </Button>
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant='outlined'
                required
                fullWidth
                name='password'
                label='Password'
                type='password'
                id='password'
                autoComplete='current-password'
                inputRef={formRegister}
              />
            </Grid>
          </Grid>
          <Button
            type='submit'
            fullWidth
            variant='contained'
            color='primary'
            className={classes.submit}
          >
            Register
          </Button>
          <Grid container justify='flex-end'>
            <Grid item>
              <PageLink href='/login'>
                <Typography color='primary' variant='body2'>
                  Have you already signed up? Login!
                </Typography>
              </PageLink>
            </Grid>
          </Grid>
          <Grid container justify='center'>
            <Typography color='error' variant='body1'>
              {FormValidator(errors)}
            </Typography>
          </Grid>
        </form>
      </div>
    </Container>
  )
}
