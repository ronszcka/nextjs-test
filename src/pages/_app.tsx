import '../../styles/globals.css'

import Layout from '../components/layout'

import CssBaseline from '@material-ui/core/CssBaseline';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <CssBaseline />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default MyApp
