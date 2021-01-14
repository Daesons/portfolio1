import React from "react";
import s from './Footer.module.css'

export const Footer =()=>{
    return(
        <div className={s.footerBlock}>
            <div className={s.container}>
                <h3 className={s.title}>Pew Pew</h3>
                <div className={s.icons}>
                    <div className={s.item}></div>
                    <div className={s.item}></div>
                    <div className={s.item}></div>
                    <div className={s.item}></div>
                </div>
                <p>PRAVA ZAS4IS4ENbI</p>
            </div>
        </div>
    )
}