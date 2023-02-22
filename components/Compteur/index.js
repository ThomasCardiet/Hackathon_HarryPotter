import React, {useState} from 'react';
import {SplitChars, Tween} from "react-gsap";
import { useRouter } from "next/router";
import { Router } from "@/router";

const Compteur = () => {


    const router = useRouter()

    const [apearSecond, setApearSecond] = useState(false)


    const handleChangeApearSecond = () => {
        setTimeout(function () {
            setApearSecond(true)
        }, 1000);
    }

    handleChangeApearSecond()


    const [apearOne, setApearOne] = useState(false)


    const handleChangeApearOne = () => {
        setTimeout(function () {
            setApearOne(true)
        }, 2000);
    }

    handleChangeApearOne()


    const [apearZero, setApearZero] = useState(false)


    const handleChangeApearZero = () => {
        setTimeout(function () {
            setApearZero(true)
        }, 3000);
    }

    handleChangeApearZero()


    const push = () => {
        setTimeout(function () {
            router.push(Router.getRoutes().PARTY);
        }, 4000);
    }

    push()

    return (
        <div className={"compteur"}>
            <div className={"compteur-container"}>
                <div className={"compteur-container-title"}>
                    <h1 className={'text-100 text-Harry text-yellow'}>
                        <Tween
                            from={{ opacity: '0', scale: '0.4' }}
                            to={{ opacity: '100%', scale: '1' }}
                            ease="expo.out()"
                            duration={6}
                            stagger={0.1}
                        >
                            <SplitChars
                                wrapper={<span style={{ display: 'inline-block' }} />}
                            >
                                La partie commence dans
                            </SplitChars>
                        </Tween>
                    </h1>
                    <h1 className={'text-100 text-Harry text-yellow text-blur'}>
                        <Tween
                            from={{ opacity: '0', scale: '0.4' }}
                            to={{ opacity: '100%', scale: '1' }}
                            ease="expo.out()"
                            duration={6}
                            stagger={0.1}
                        >
                            <SplitChars
                                wrapper={<span style={{ display: 'inline-block' }} />}
                            >
                               La partie commence dans
                            </SplitChars>
                        </Tween>
                    </h1>
                </div>
                <div className={"compteur-container-content"}>
                    <h1 className={'text-100 text-ProzaLibre-Bold text-yellow third'}>
                        <Tween
                            from={{ opacity: '0', scale: '0.4' }}
                            to={{ opacity: '100%', scale: '1' }}
                            ease="expo.out()"
                            duration={6}
                            stagger={0.1}
                        >
                            <SplitChars
                                wrapper={<span style={{ display: 'inline-block' }} />}
                            >
                                3
                            </SplitChars>
                        </Tween>
                    </h1>
                    {apearSecond ? <h1 className={'text-100 text-ProzaLibre-Bold text-yellow third'}>
                        <Tween
                            from={{opacity: '0', scale: '0.4'}}
                            to={{opacity: '100%', scale: '1'}}
                            ease="expo.out()"
                            duration={6}
                            stagger={0.1}
                        >
                            <SplitChars
                                wrapper={<span style={{display: 'inline-block'}}/>}
                            >
                                2
                            </SplitChars>
                        </Tween>
                    </h1> : ""}
                    {apearOne ? <h1 className={'text-100 text-ProzaLibre-Bold text-yellow third'}>
                        <Tween
                            from={{opacity: '0', scale: '0.4'}}
                            to={{opacity: '100%', scale: '1'}}
                            ease="expo.out()"
                            duration={6}
                            stagger={0.1}
                        >
                            <SplitChars
                                wrapper={<span style={{display: 'inline-block'}}/>}
                            >
                                1
                            </SplitChars>
                        </Tween>
                    </h1> : ""}

                    {apearZero ? <h1 className={'text-100 text-ProzaLibre-Bold text-yellow third'}>
                        <Tween
                            from={{opacity: '0', scale: '0.4'}}
                            to={{opacity: '100%', scale: '1'}}
                            ease="expo.out()"
                            duration={6}
                            stagger={0.1}
                        >
                            <SplitChars
                                wrapper={<span style={{display: 'inline-block'}}/>}
                            >
                                0
                            </SplitChars>
                        </Tween>
                    </h1> : ""}
                </div>
            </div>
        </div>
    );
};

export default Compteur;