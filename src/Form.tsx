import { useState } from "react"
import { Box } from "@chakra-ui/react"
import { RichTextEditor } from "./RichTextEditor"

type ChildProps = {
  setMessage: (newValue: string) => void
}

export default function Form({ setMessage }: ChildProps) {
  const [value, setValue] = useState("")

  return (
    <Box p={1}>
      <RichTextEditor
        setMessage={setMessage}
        placeholder="Type here"
        name="text"
        value={value}
        onChange={(newValue) => setValue(newValue)}
      />
    </Box>
  )
}
