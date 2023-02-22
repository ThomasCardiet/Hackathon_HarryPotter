import Head from "next/head";
import React from "react";
import { useRef } from "react";
import useSound from "use-sound";
import Image from "next/image";
import Sparkles from "@/components/sparkles/sparkles";
import { SplitChars, Tween } from "react-gsap";
import Link from "next/link";

export default function Success() {
  const dropBlockRef = useRef(null);
  const WinnerfakeData = "Serpentard";
  const fakeData = [
    {
      rang: 1,
      name: "Serpentard",
      score: 15,
    },
    {
      rang: 2,
      name: "Griffondor",
      score: 10,
    },
    {
      rang: 3,
      name: "POUPOUSOUFLARD",
      score: 5,
    },
  ];
  const soundUrl = "test.mp3";

  const [play, { stop }] = useSound(soundUrl, { volume: 0.2 });
  if (soundUrl) {
    //play()
  }

  return (
    <>
      <Head>
        <title>Hckaton Harry Potter - Potion Game</title>
        <meta name="description" content="Harry Potter potion maker game" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main>
        <section
          className={
            WinnerfakeData == "Serpentard"
              ? "Serpentard success"
              : WinnerfakeData == "Griffondor"
              ? "Griffondor success"
              : WinnerfakeData == "Poulsoufle"
              ? "Poulsoufle success"
              : "Serdaigle success"
          }
        >
          <aside>
            <div className={"home-container-title"}>
              <h1 className={"text-75 text-Harry text-yellow"}>Success</h1>
            </div>
            <div className={"success-container-description"}>
              <div className={"text-center"}>
                <Image
                  src={
                    WinnerfakeData == "Serpentard"
                      ? "/images/SerpentardLogo.png"
                      : WinnerfakeData == "Griffondor"
                      ? "/images/GriffondorLogo.png"
                      : WinnerfakeData == "Poulsoufle"
                      ? "/images/PoussoufleLogo.png"
                      : "/images/SerdaigleLogo.png"
                  }
                  alt="Picture of the author"
                  width={128} //width: 180px;
                  //height: 135px;
                  height={100}
                />
              </div>
              <div
                className={
                  "home-container-description adjust-description text-ProzaLibre-Regular"
                }
              >
                <table>
                  <thead>
                    <tr>
                      <th>Rang</th>
                      <th>Maison</th>
                      <th>Score</th>
                    </tr>
                  </thead>
                  <tbody>
                  {fakeData.map((item) => {
                    return (
                      <>
                        <tr>
                          <td>{item.rang}</td>
                          <td>{item.name}</td>
                          <td>{item.score}</td>
                        </tr>
                      </>
                    );
                  })}
                  </tbody>
                </table>
              </div>
              <div className={"home-container-button"}>
                {/* <button className={"btn-reset btn-yellow"}>Rejouer</button> */}
                <Link href={"/"} className={"btn-reset btn-yellow"}>
                  Accueil
                </Link>
              </div>
            </div>
          </aside>
        </section>
      </main>
    </>
  );
}
