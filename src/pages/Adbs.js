import React from 'react'
import { ad2bs, bs2ad } from "ad-bs-converter";

export default function Adbs() {
    console.log(ad2bs("1990/8/10"))
    console.log(bs2ad("2054/12/10"))
  return (
    <div>adbs</div>
  )
}
