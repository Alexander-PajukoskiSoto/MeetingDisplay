import React from "react";
import { ReactDOM } from "react-dom";
import qr from '../images/meetingQRFixed.png'

export default function QR(){
    return(
        <div className='QRContainer'>
            <div>
                <img src={qr} className="QRImage" />
            </div>
            <div>
                <p> Scanna QR KODEN för att boka tid med Bond</p>
            </div>
        </div>
    )
}