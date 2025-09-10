import React, { StrictMode } from "react"
import { Retool } from "@tryretool/custom-component-support"
import App from "./App"
import { Button } from "@chakra-ui/react"

export function richTextEditor() {
  const [message, _setMessage] = Retool.useStateString({
    name: "message",
    initialValue: "My message"
  })

  return (
    <StrictMode>
      <App setMessage={_setMessage} />
    </StrictMode>
  )
}
