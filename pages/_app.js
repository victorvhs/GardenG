import '../styles/globals.css'
import '../styles/Card.css'
import '../styles/PlantsCards.css'
import {ChakraProvider} from "@chakra-ui/react"
function MyApp({ Component, pageProps }) {
  return(
  <ChakraProvider>
    <Component {...pageProps} />
  </ChakraProvider>)
}

export default MyApp
