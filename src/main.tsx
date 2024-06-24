import ReactDOM from 'react-dom/client'
import theme from './theme'
import router from './router'
import { ChakraProvider } from '@chakra-ui/react'
import { RouterProvider } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('app')!).render(
  <ChakraProvider theme={theme}>
    <RouterProvider router={router} />
  </ChakraProvider>
)
