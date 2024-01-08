import React from "react";
import { ReactDOM } from "react-dom";
import Header from '../components/Header';
import QR from '../components/QR'

export default function Home(){
    return(
        <div>
            <Header />
            <QR />
            <h1>Home Page!</h1>
        </div>
    )
}