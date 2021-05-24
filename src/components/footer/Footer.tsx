import React from "react";
import s from './Footer.module.css'
import {Title} from "../Common/Title/Title";
import {Separator} from "../Common/Separator/Separator";

export const Footer =()=>{
    return(
        <div className={s.footerBlock}>
            <Separator/>
            <div className={s.container}>
                <Title title={'pewpew'}/>
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