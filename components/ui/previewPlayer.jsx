"use client"

import * as React from "react";
import {useRef} from "react"

export default function PreviewPlayer({s, className}) {
    const player = useRef(null);

    //onMouseOver event to play the video
    const hover = () => {
      player.current.play()
    }
    //onMouseOut event to pause the video
    const over = () => {
        player.current.pause()
    }
    return (
      <video ref={player} className={className} src={s} onMouseOver={hover} onMouseOut={over} controls={false} loop muted>
        Your browser does not support the video tag.
      </video>
    )
  };