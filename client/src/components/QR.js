import React from "react";
import qr from '../images/meetingQRFixed.png'

export default function QR(){
    return(
        <div className='QRContainer'>
            <div>
                <img src={qr} className="QRImage" alt="qr"/>
            </div>
            <div>
                <p> Scanna QR KODEN för att boka tid med Bond</p>
            </div>
        </div>
    )
}