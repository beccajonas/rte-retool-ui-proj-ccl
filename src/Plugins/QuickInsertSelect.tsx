import React, { useState } from "react"
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext"
import { $getSelection, $isRangeSelection } from "lexical"
import { Select } from "@chakra-ui/react"

export default function QuickInsertSelect() {
  const [editor] = useLexicalComposerContext()
  const [selected, setSelected] = useState("")

  return (
    <Select
      size="sm"
      mt={2}
      placeholder="Insert preset text..."
      value={selected}
      onChange={(e) => {
        const value = e.target.value
        setSelected("")
        if (!value) return
        editor.update(() => {
          const selection = $getSelection()
          if ($isRangeSelection(selection)) {
            selection.insertText(value)
          }
        })
      }}
    >
      <option value="Option 1">Option 1</option>
      <option value="Option 2">Option 2</option>
      <option value="Option 3">Option 3</option>
    </Select>
  )
}
