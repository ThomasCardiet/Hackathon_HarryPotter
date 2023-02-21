import { Tween, SplitChars } from 'react-gsap';
import useSound from "use-sound";
import {useEffect} from "react";
import Sparkles from "@/components/sparkles/sparkles";


export default function Home () {

    const soundUrl = 'test.mp3';

    const [play, { stop }] = useSound(
        soundUrl,
        { volume: 0.2 }
    );
    if (soundUrl){
        play()
    }

    return (
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
                               Harry Potion
                            </SplitChars>
                        </Tween>
                    </h1>
                    <h1 className={"text-100 text-Harry text-yellow text-blur"}>Harry Potion</h1>
                </div>
                <div className={"home-container-description"}>
                    <p className={"text-15 text-white text-ProzaLibre-Regular"}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae consectetur deleniti ea enim, eos in inventore molestiae nihil officia perferendis.</p>
                </div>
                <div className={"home-container-button"}>
                    <button className={"btn-reset btn-yellow"}>Commencer</button>
                </div>
            </aside>
        </section>
    )
}
