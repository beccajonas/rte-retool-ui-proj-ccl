import { useState } from "react"
import { Box } from "@chakra-ui/react"
import { RichTextEditor } from "./RichTextEditor"

type ChildProps = {
  setMessage: (newValue: string) => void
  message: string
}

export default function Form({ setMessage, message }: ChildProps) {
  const [value, setValue] = useState("")

  return (
    <Box p={1}>
      <RichTextEditor
        setMessage={setMessage}
        placeholder={message}
        name="text"
        value={value}
        onChange={(newValue) => setValue(newValue)}
        message={message}
      />
    </Box>
  )
}
