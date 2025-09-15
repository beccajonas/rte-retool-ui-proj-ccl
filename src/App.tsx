import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ChakraProvider, extendTheme } from "@chakra-ui/react"
import Form from "./Form"

type ChildProps = {
  setMessage: (newValue: string) => void // ✅ expects a string
  message: string
  macro: string
}

const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: "#E9EBDF"
      }
    }
  }
})

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
      retry: 0
    }
  }
})

export default function App({ setMessage, message, macro }: ChildProps) {
  return (
    <ChakraProvider theme={theme}>
      <Form setMessage={setMessage} message={message} macro={macro} />
    </ChakraProvider>
  )
}
