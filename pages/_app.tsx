import type { AppProps } from "next/app"
import "tailwindcss/tailwind.css"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="bg-gray-50 h-screen w-full">
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
