import * as React from "react"
import type { NextPage } from "next"
import Head from "next/head"

const Home: NextPage = () => {
  return (
    <React.Fragment>
      <Head>
        <title>TV | Web Developer</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <main className="font-bold text-3xl">Hello!</main>
    </React.Fragment>
  )
}

export default Home
