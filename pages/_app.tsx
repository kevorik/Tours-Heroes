import "../styles/globals.css";
import type {AppProps} from "next/app";
import { useRouter } from "next/router";

export default function App({Component, pageProps, router}: AppProps) {
    
    
    console.log('ffff', process.env.API_URL)
    // const {domainLocales} = useRouter();





    // console.log('asPath', domainLocales)
    // console.log('qweqwe',process.env.API_URL)
    // console.log('url',baseUrl);
    
    // console.log('api_url', process.env.API_URL)

    
    // console.log('here')
    return (
            <Component {...pageProps} key={router.route} />)
}