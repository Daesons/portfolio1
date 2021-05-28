import React from "react";
import styles from './Projects.module.scss'
import {Project} from "./project/Project";
import {Title} from "../Common/Title/Title";
import {Separator} from "../Common/Separator/Separator";
import {lorem} from "../../App";

export const Projects = () => {
    return (
        <div className={styles.projectsBlock}>
           <Separator/>
            <div className={styles.container}>
               <Title title={'Projects'}/>
                <div className={styles.projects}>
                    <Project description={lorem} title={'Social-network'}/>
                    <Project description={lorem} title={'ne Social-network'}/>
                    <Project description={lorem} title={'ne Social-network'}/>
                </div>
            </div>
        </div>
    )
}