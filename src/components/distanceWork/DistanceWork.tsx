import React from "react";
import s from './DistanceWork.module.css'
import {Title} from "../Common/Title/Title";
import {Separator} from "../Common/Separator/Separator";

export const DistanceWork = () => {
    return (
        <div className={s.distanceWorkBlock}>
            <Separator/>
            <div className={s.container}>
                <Title title={'Distance work'}/>
                <button>yfyznm vtyz</button>
            </div>
        </div>
    )
}