import React from "react";
import styles from './Skills.module.scss'
import {Skill} from "./skill/Skill";
import {Separator} from "../Common/Separator/Separator";
import {Title} from "../Common/Title/Title";
import {lorem} from "../../App";



export const Skills = ()=>{
    return(
        <div className={styles.skillsBlock}>
            <Separator/>
            <div className={styles.container}>
               <Title title={'Skills'}/>
                <div className={styles.skills}>
                    <Skill title={"React"} description={lorem}/>
                    <Skill title={"JavaScript"} description={lorem}/>
                    <Skill title={"CSS"} description={lorem}/>
                    <Skill title={"TypeScript"} description={lorem}/>
                    <Skill title={"Redux"} description={lorem}/>
                    <Skill title={"Thunk"} description={lorem}/>
                </div>
            </div>

        </div>
    )
}