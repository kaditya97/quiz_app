import React from 'react'
// import Navbar from '../components/common/navbar'

export default function Help() {
    const synth = window.speechSynthesis;
    const voices = synth.getVoices();
    console.log(voices)

    return (
        <div>
            {/* <div className='topbar'><Navbar /></div> */}
            <div>Help</div>
        </div>
    )
}