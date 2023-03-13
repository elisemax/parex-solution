import Head from 'next/head'
import { useRouter } from 'next/router'
import Navbar from 'components/Navbar'
import { useEffect } from 'react';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.push('/ru');
  }, []);
  
  return (
    <>
    </>
  )
}
