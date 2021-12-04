import type { NextPage } from "next"
import Head from "next/head"
import Image from "next/image"
import me from "../public/img/me.jpg"
import React from "react"
import LinkedIn from "../components/icons/LinkedIn"
import Github from "../components/icons/Github"
import Twitter from "../components/icons/Twitter"

const Home: NextPage = () => {
  return (
    <React.Fragment>
      <Head>
        <title>TV | Web Developer</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="container mx-auto font-quicksand text-gray-900">
        <div className="w-4/6 mx-auto pt-24">
          <div className="grid grid-cols-12">
            <aside className="col-span-3 pr-10">
              <div className="rounded-full overflow-hidden">
                <Image
                  width={200}
                  height={200}
                  layout="responsive"
                  src={me}
                  alt="Picture of me"
                  placeholder="blur"
                />
              </div>
            </aside>
            <main className="col-span-9">
              <h1 className="text-6xl font-bold mb-10">
                Hi there <span>👋</span>
              </h1>
              <p className="text-lg mb-4">
                Welcome to my website! I&apos;m{" "}
                <span className="font-bold">Tom</span> and I make cool stuff on
                the internet.
              </p>
              <h2 className="uppercase text-lg font-bold mb-2">
                Get in touch:
              </h2>
              <div className="flex">
                <LinkedIn />
                <Github />
                <Twitter />
              </div>
              <section className="border-t-4 border-gray-200 mt-10 pt-16">
                <h2 className="font-bold text-5xl mb-8">About me</h2>
                <p className="text-lg">
                  As mentioned above my name is Tom and I&apos;m a frontend
                  engineer currently working at{" "}
                  <span className="font-bold">Kontent by Kentico</span> in Brno,
                  Czech republic.
                </p>

                <p className="text-lg mt-4">
                  I specialize in developing custom, high performant websites
                  that scale using the latest and greatest of what the web
                  platform has to offer.
                </p>

                <h3 className="uppercase font-bold text-2xl mt-8 mb-6">
                  🛠 Primary Tools
                </h3>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-yellow-300 text-gray-90 px-2 py-1 font-bold inline-block rounded-lg uppercase">
                    Javascript
                  </span>
                  <span className="bg-blue-600 text-gray-50 px-2 py-1 font-bold inline-block rounded-lg uppercase">
                    Typescript
                  </span>
                  <span className="bg-green-800 text-gray-50 px-2 py-1 font-bold inline-block rounded-lg uppercase">
                    Node.js
                  </span>
                  <span className="bg-indigo-700 text-gray-50 px-2 py-1 font-bold inline-block rounded-lg uppercase">
                    Gatsby.js
                  </span>
                  <span className="bg-gray-900 text-gray-50 px-2 py-1 font-bold inline-block rounded-lg uppercase">
                    Next.js
                  </span>
                  <span className="bg-green-500 bg-opacity-80 text-gray-50 px-2 py-1 font-bold inline-block rounded-lg uppercase">
                    Tailwind
                  </span>
                  <span className="bg-pink-400 text-gray-50 px-2 py-1 font-bold inline-block rounded-lg uppercase">
                    SCSS
                  </span>
                  <span className="bg-red-500 text-gray-50 px-2 py-1 font-bold inline-block rounded-lg uppercase">
                    Kontent by Kentico
                  </span>
                  <span className="bg-yellow-400 text-gray-900 px-2 py-1 font-bold inline-block rounded-lg uppercase">
                    Firebase
                  </span>
                  <span className="bg-pink-700 text-gray-50 px-2 py-1 font-bold inline-block rounded-lg uppercase">
                    GraphQL
                  </span>
                </div>
              </section>
            </main>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Home
