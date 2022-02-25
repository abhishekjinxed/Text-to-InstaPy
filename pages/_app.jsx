import 'styles/normalize.css'
import 'styles/globals.css'
import useVH from 'hooks/useVH'

function MyApp ({ Component, pageProps }) {
  useVH()
  return <Component {...pageProps} />
}

export default MyApp
