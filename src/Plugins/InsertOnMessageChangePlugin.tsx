import React, { useEffect, useRef } from "react"
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext"
import {
  $getSelection,
  $isRangeSelection,
  $getRoot,
  $createParagraphNode,
  $createTextNode
} from "lexical"
import { $generateNodesFromDOM } from "@lexical/html"

type Props = {
  macro: string
}

export default function InsertOnMessageChangePlugin({ macro }: Props) {
  const [editor] = useLexicalComposerContext()
  const lastProcessedRef = useRef<string>("")

  useEffect(() => {
    if (!macro) return
    if (macro === lastProcessedRef.current) return

    editor.update(() => {
      let selection = $getSelection()
      if (!$isRangeSelection(selection)) {
        const root = $getRoot()
        if (root.getChildrenSize() === 0) {
          root.append($createParagraphNode())
        }
        root.selectEnd()
        selection = $getSelection()
      }
      if ($isRangeSelection(selection)) {
        // Prefer HTML import path to preserve links and formatting
        try {
          const parser = new DOMParser()
          const dom = parser.parseFromString(macro, "text/html")
          const nodes = $generateNodesFromDOM(editor, dom)
          if (nodes.length > 0) {
            selection.insertNodes(nodes)
          } else {
            selection.insertText(macro)
          }
        } catch {
          selection.insertText(macro)
        }
        lastProcessedRef.current = macro
      }
    })
  }, [editor, macro])

  return null
}
