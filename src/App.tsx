"use client";
import { useState, useRef } from "react";
import becky_and_robbie from './assets/becky_and_robbie.jpeg'
import { Fireworks } from '@fireworks-js/react'
import type { FireworksHandlers } from "@fireworks-js/react";

export default function Page() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  const ref = useRef<FireworksHandlers>(null);

  const toggle = () => {
    if (!ref.current) return
    if (ref.current.isRunning) {
      ref.current.stop()
    } else {
      ref.current.start()
    }
  }

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const getNoButtonText = () => {
    const phrases = [
      "No",
      "Are you sure?",
      "What if I asked really nicely?",
      "Pretty please",
      "With some yummy chocolate on top",
      "What about some coffee on top?",
      "PLEASE BABY",
      "But :*(",
      "I am going to be so sad",
      "and honestly Frankie would be dissapointed",
      "ok you have to deal with him then",
      "please babe",
      ":((((",
      "PRETTY PLEASE",
      "No :(",
    ];

    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  return (
    <div className="-mt-16 flex h-screen flex-col items-center justify-center">
      {yesPressed ? (
        <>
          <Fireworks
        ref={ref}
        options={{ opacity: 0.5 }}
        style={{
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          position: 'fixed',
          background: '#CCC',
          zIndex: -1,
        }}
        />
          <img src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif" />
          <div className="my-4 text-4xl font-bold">WOOOOOO!!!))</div>
        </>
      ) : (
        <>
          <img
            className="h-[200px]"
            src= {becky_and_robbie}
          />
          <h1 className="my-4 text-4xl">Will you be my girlfriend Becky?</h1>
          <div className="flex items-center">
            <button
              className={`mr-4 rounded bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-700`}
              style={{ fontSize: yesButtonSize }}
              onClick={() => {
                setYesPressed(true);
                console.log('then this');
                toggle();
                toggle();
              }}
            >
              Yes
            </button>
            <button
              onClick={handleNoClick}
              className=" rounded bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-700"
            >
              {noCount === 0 ? "No" : getNoButtonText()}
            </button>
          </div>
        </>
      )}
    </div>
    
  );
}
