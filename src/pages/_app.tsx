import { NextRouter } from 'next/router';
import RouterLoader from '../../components/RouterLoader';
import { useEffect, useState } from 'react';

function MyApp({ Component, pageProps }: any) {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const startLoading = () => setLoading(true);
    const endLoading = () => setLoading(false);

    const router: NextRouter = require('next/router');
    router.events.on('routeChangeStart', startLoading);
    router.events.on('routeChangeComplete', endLoading);
    router.events.on('routeChangeError', endLoading);

    return () => {
      router.events.off('routeChangeStart', startLoading);
      router.events.off('routeChangeComplete', endLoading);
      router.events.off('routeChangeError', endLoading);
    };
  }, []);

  return (
    <>
      {loading && <RouterLoader />}
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
