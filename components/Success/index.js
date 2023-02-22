import Head from 'next/head';
import React, {useRef, useEffect, useState} from 'react';
import Link from 'next/link';
import {SplitChars, Tween} from "react-gsap";

const Choice = () => {
  
  const [winnerHouse, setWinnerHouse] = useState("Serdaigle");
  const [winnerHouseImg, setWinnerHouseImg] = useState(<img src={"/images/" + winnerHouse + ".png"}/>);
    
    
    const [users, setUsers] = useState([{name : "Axel", house :"Serpentard",  potionDone: 3},{name : "Sofiane", house :"Griffondor",  potionDone: 2},{name : "Thomas", house :"Serdaigle",  potionDone: 1},{name : "Thomas", house :"Poufsouffle",  potionDone: 2}]);
    
    return (
    <>
      <Head>
        <title>Hackaton Harry Potter - Potion Game</title>
        <meta name="description" content="Harry Potter potion maker game" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      
      <main>
        <section className={'success ' + (winnerHouse)}>
          <aside className={'success-container'}>
              <div className={'success-container-title'}>
                  <h1 className={'text-50 text-Harry text-yellow'}>
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
                              Victoire de la maison
                          </SplitChars>
                      </Tween>
                  </h1>
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
                              {winnerHouse}
                          </SplitChars>
                      </Tween>
                  </h1>
              </div>
              <div className={"success-container-logo"}>
                  {winnerHouseImg}
              </div>
              <ul className={"success-container-content"}>
                  {users.map((item,index)=>{return(
                         <li key={index} className={"text-30 text-white text-ProzaLibre-Regular"}><img src={"/images/" + (item.house)+ ".png"}/>{item.name} - {item.potionDone} / 3</li>
                      )
                  })}
              </ul>
          </aside>
        </section>
      </main>
    </>
  );
};

export default Choice;
