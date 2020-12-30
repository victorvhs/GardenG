import '../styles/globals.css'
import '../styles/Card.css'
import '../styles/PlantsCards.css'
import 'tailwindcss/tailwind.css'
import {ChakraProvider} from "@chakra-ui/react"
function MyApp({ Component, pageProps }) {
  return(
  <div>
    <Component {...pageProps} />
  </div>)
}

export default MyApp
