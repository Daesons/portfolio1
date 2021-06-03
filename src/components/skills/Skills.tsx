import React from "react";
import styles from './Skills.module.scss'
import {Skill} from "./skill/Skill";
import {Separator} from "../Common/Separator/Separator";
import {Title} from "../Common/Title/Title";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCss3, faJs, faReact} from "@fortawesome/free-brands-svg-icons";
const reactDescription = '' +
    'Using next libraries : React-router-dom, Redux, Axios, Redux-Form, Redux-Thunk, Formik, TypeScript. ' +
    'Work with Hooks, Hoc, connect. Experience: refactoring, bug fixing, migrating to TypeScript, registration,login ' +
    'form creation, restore password form.'
const CSSDescription = 'I really enjoy CSS’s ability to alter website layouts to match different screen sizes. ' +
    'I use CSS and HTML to create the general layout and aesthetic for a website’s pages. Have experience with SASS'
const JsDescription = '' +
    'I really love JS. My free time I prefer to spend with Codewars. Have knowledge about event loop, promises, classes and typescript.'


export const Skills = ()=>{
    return(
        <div className={styles.skillsBlock}>
            <Separator/>
            <div className={styles.container}>
               <Title title={'Skills'}/>
                <div className={styles.skills}>
                    <Skill title={"React"} description={reactDescription}><FontAwesomeIcon icon={faReact} color={'#ffb400'} size={"4x"}/></Skill>
                    <Skill title={"CSS"} description={CSSDescription}><FontAwesomeIcon icon={faCss3} color={'#ffb400'} size={"4x"}/></Skill>
                    <Skill title={"JavaScript"} description={JsDescription}><FontAwesomeIcon icon={faJs} color={'#ffb400'} size={"4x"}/></Skill>
                </div>
            </div>

        </div>
    )
}