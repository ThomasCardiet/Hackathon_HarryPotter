import '../styles/global.css'
import type { AppProps } from 'next/app'
import {AnimatePresence,motion} from "framer-motion";
import { useRouter } from "next/router";
import {ToastContainer} from "react-toastify";
import React from "react";
import 'react-toastify/dist/ReactToastify.css';
import Sparkles from "@/components/sparkles/sparkles";




export default function App({ Component, pageProps }: AppProps) {
    const router = useRouter();




    return (
      <AnimatePresence exitBeforeEnter>
          <Sparkles/>
          <motion.div
              key={router.route}
              initial="initialState"
              animate="animateState"
              exit="exitState"
              transition={{
                  duration: 0.75,
              }}
              variants={{
                  initialState: {
                      opacity: 0,
                  },
                  animateState: {
                      opacity: 1,
                  },
                  exitState: {
                      opacity: 0,
                  },
              }}>

      <main style={{zIndex:99}}>
          <Component {...pageProps} />
      </main>
          </motion.div>
          <ToastContainer
          />
      </AnimatePresence>
  )
}
