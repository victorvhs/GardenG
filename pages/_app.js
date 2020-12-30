import '../styles/globals.css'
import '../styles/Card.css'
import '../styles/PlantsCards.css'

function MyApp({ Component, pageProps }) {
  return(
  <div>
    <Component {...pageProps} />
  </div>)
}

export default MyApp
