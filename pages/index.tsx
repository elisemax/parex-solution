import Head from 'next/head'
import { useRouter } from 'next/router'
import Navbar from 'components/Navbar'
import { useEffect } from 'react';

export default function Home() {
  const router = useRouter();


  useEffect(() => {
    const lang = router.locale === 'ru' ? 'ru' : 
    router.locale === 'ua' ? 'ua' : 
    router.locale === 'pl' ? 'pl' : 'ru'; 
    router.push(`/${lang}`);
  }, []);
  
  return (
    <>
    </>
  )
}
