import React from "react";
import styles from './Skills.module.css'
import {Skill} from "./skill/Skill";
import {Separator} from "../Common/Separator/Separator";
import {Title} from "../Common/Title/Title";



export const Skills = ()=>{
    return(
        <div className={styles.skillsBlock}>
            <Separator/>
            <div className={styles.container}>
               <Title title={'Skills'}/>
                <div className={styles.skills}>
                    <Skill title={"React"} discription={'asdfads asd asdf asdf asdf asdf asd'}/>
                    <Skill title={"ne React"} discription={' asdf asdf asd fasdf asdf asdf asd'}/>
                    <Skill title={"ne React"} discription={'a asdf asdf asdf asdf asdf asdf asd fsadf sadf asdf sadf asd fas'}/>
                </div>
            </div>

        </div>
    )
}