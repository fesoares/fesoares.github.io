import 'bootstrap/dist/css/bootstrap.css'
import 'devicon/devicon.min.css'
import '../public/scss/resume.scss'
import '@fortawesome/fontawesome-free/css/all.min.css'
import withFBQ from "next-fbq";
import Router from "next/router";

function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default withFBQ("729006757893746", Router)(App);
