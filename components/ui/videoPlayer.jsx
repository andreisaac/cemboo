"use client"
import {useRef, useEffect} from "react"

export default function Video({s, className}) {
  const player = useRef(null);
    //standard video player
    return (
      <video ref={player} className={className} src={s} controls preload="none">
        <source src={s} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    )
  };