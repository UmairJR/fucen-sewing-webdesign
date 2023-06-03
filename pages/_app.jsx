import { useEffect, useState } from 'react';
import { useRouter } from 'next/router'
import '../styles/styles.scss';
import Header from "../components/layouts/Header";
import Footer from "../components/layouts/Footer";
import Head from 'next/head';
import VisionCard from '../components/layouts/VisionCard';
import ExploreCard from '../components/layouts/ExploreCard';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [panZoomApplied, setpanZoomApplied] = useState(false)

  useEffect(() => {
    setpanZoomApplied(true);
    document.addEventListener('touchmove', e => {
      if (e.touches.length > 1) {
        e.preventDefault();
      }
    }, { passive: false })
  }, [])
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0" />
        <meta charSet="utf-8" />
        <title>Fucen Sewing</title>
      </Head>
      <Header />
      {panZoomApplied && <Component {...pageProps} key={router.asPath} />}
      <ExploreCard />
      <VisionCard />
      
      <Footer />
      <div className="landscape_mobile">
        <div className="landscape_view">
          <div>
            <div className="rotating_image">
              <img className="logoimg" src='/assets/images/rotate.svg' alt="asf" />
            </div>
            <div className="landscape_text">
              <p>We do not support landscape mode, <br />please use the website in the portrait mode for best experience.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MyApp

