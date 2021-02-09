import { Button } from "@material-ui/core"
import { useTheme } from "@material-ui/styles"
import React from "react"
import { useTypicalStyles } from "styles/cssStyle"

const test = () => {
  const sty = useTypicalStyles()
  const theme = useTheme()
  console.log({ theme })
  return (
    <div>
      <Button className={sty.secMainBack} variant='contained'>
        테스트
      </Button>
      <Button variant='contained' color='primary'>
        {" "}
        하이염
      </Button>
    </div>
  )
}

export default test
