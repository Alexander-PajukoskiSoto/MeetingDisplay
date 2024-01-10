import React from "react";
import bond from '../images/bond.png'

export default function Header(){
    return(
        <div className="header">
            <div>
                <img src={bond} className="headerImg" alt="bond"/>
            </div>
            <div>
                <ul className="headerUl">
                    <li>Bondhon Shariar Alam</li>
                    <li>Biträdande Rektor</li>
                    <li>Mob: +46 76 108 78 89</li>
                    <li>Mejl: bondhon.shariaralam@ntig.se</li>
                </ul>
            </div>
        </div>
    )
}