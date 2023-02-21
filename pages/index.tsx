import Head from 'next/head'
import { getIngredients } from '@/entities/Ingredient'
import React, { useRef } from 'react';
import useSound from "use-sound";
import Sparkles from "@/components/sparkles/sparkles";
import {SplitChars, Tween, Controls, PlayState,} from "react-gsap";
import Link from "next/link";


export default function Home() {
  const dropBlockRef = useRef(null)
  const ingredients = getIngredients();


    const soundUrl = 'test.mp3';

    const [play, { stop }] = useSound(
        soundUrl,
        { volume: 0.2 }
    );
    if (soundUrl){
        play()
    }


  return (
    <>
      <Head>
        <title>Hckaton Harry Potter - Potion Game</title>
        <meta name="description" content="Harry Potter potion maker game" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main>
          <section className={"home"}>
              <aside className={"home-container"}>
                  <Sparkles/>
                  <div className={"home-container-title"}>
                      <h1 className={"text-100 text-Harry text-yellow"}>
                          <Tween from={{opacity: "0", scale : "0.4"}} to={{opacity: "100%",  scale :"1"}}
                                 ease="expo.out()"
                                 duration={6} stagger={0.1}>
                              <SplitChars
                                  wrapper={<span style={{ display: 'inline-block'}} />}
                              >
                                Harry potion
                              </SplitChars>
                          </Tween>
                      </h1>
                      <h1 className={"text-100 text-Harry text-yellow text-blur"}>
                          <Tween from={{opacity: "0", scale: "0.4"}} to={{opacity: "100%", scale: "1"}}
                                 ease="expo.out()"
                                 duration={6} stagger={0.1}>
                              <SplitChars
                                  wrapper={<span style={{display: 'inline-block'}}/>}
                              >
                                  Harry potion
                              </SplitChars>
                          </Tween>
                      </h1>
                  </div>
                  <div className={"home-container-description"}>
                      <p className={"text-15 text-white text-ProzaLibre-Regular"}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae consectetur deleniti ea enim, eos in inventore molestiae nihil officia perferendis.</p>
                  </div>
                  <div className={"home-container-button"}>
                      <Link href={"/login"} className={"btn-reset btn-yellow"}>Commencer</Link>
                  </div>
              </aside>
          </section>
      </main>
    </>
  )
}
