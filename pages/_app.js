import '../styles/globals.css'
function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   console.log(appContext)
//   //const appProps = await App.getInitialProps(appContext);

//   return { }
// }
export default MyApp
