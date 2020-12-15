import '../styles/globals.css'
import {ChakraProvider} from "@chakra-ui/react"
import './../node_modules/bulma/css/bulma.css'
function MyApp({ Component, pageProps }) {
  return(
  <ChakraProvider>
    <Component {...pageProps} />
  </ChakraProvider>)
}

export default MyApp
