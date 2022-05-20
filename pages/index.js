import Head from 'next/head'
import Image from 'next/image'
import Slider from "../components/Slider";
import PizzaList from "../components/PizzaList";


export default function Home() {
  return (
    <div>
      <Head>
        <title>Pizza</title>
        <meta name="description" content="Pizza" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Slider/>
      <PizzaList/>
    </div>
  )
}
