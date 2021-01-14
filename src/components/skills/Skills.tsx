import React from "react";
import styles from './Skills.module.css'
import {Skill} from "./skill/Skill";



export const Skills = ()=>{
    return(
        <div className={styles.skillsBlock}>
            <div className={styles.container}>
                <h2 className={styles.title}>Skills</h2>
                <div className={styles.skills}>
                    <Skill title={"React"} discription={'ыыыыыыыыыыыыыыыыыы sssss ыыыыыы ыыыыыыыыыыы'}/>
                    <Skill title={"ne React"} discription={'аааааааааааааааа аааааааааааааааааааааааа'}/>
                    <Skill title={"ne React"} discription={'ууууууууууууууууу ууууууууууууууууууууууууу'}/>
                </div>

            </div>
        </div>
    )
}