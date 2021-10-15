import type { NextPage } from "next"
import Head from "next/head"
import Image from "next/image"
import me from "../public/img/me.jpg"
import linkedin from "../public/img/icons/linkedin.svg"
import github from "../public/img/icons/github.svg"
import twitter from "../public/img/icons/twitter.svg"
import React from "react"

const Home: NextPage = () => {
  return (
    <React.Fragment>
      <Head>
        <title>TV | Web Developer</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <main>
        <div className="content">
          <div className="content__photo">
            <Image src={me} alt="Picture of me" placeholder="blur" />
          </div>
          <h1>
            Welcome to my site <span className="wave">👋</span>
          </h1>
          <p>I&apos;m Tom and I make websites</p>
          <h2>Get in touch:</h2>
          <div className="content__icons">
            <a
              href="https://www.linkedin.com/in/tomvorel/"
              target="_blank"
              className="content__icon"
              rel="noreferrer"
            >
              <Image src={linkedin} alt="LinkedIn icon" />
            </a>
            <a
              target="_blank"
              href="https://github.com/tomvorel13"
              className="content__icon"
              rel="noreferrer"
            >
              <Image src={github} alt="GitHub icon" />
            </a>
            <a
              target="_blank"
              href="https://twitter.com/TomasVorel"
              className="content__icon"
              rel="noreferrer"
            >
              <Image src={twitter} alt="Twitter icon" />
            </a>
          </div>
        </div>
      </main>
    </React.Fragment>
  )
}

export default Home
