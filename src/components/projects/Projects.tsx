import React from "react";
import styles from './Projects.module.css'
import {Project} from "./project/Project";

export const Projects = () => {
    return (
        <div className={styles.projectsBlock}>
            <div className={styles.container}>
                <h2 className={styles.title}>Projects</h2>
                <div className={styles.projects}>
                    <Project discription={'ssssss ss ssssssss sssss sssssssss'} title={'Social-network'}/>
                    <Project discription={'aa aaa aa afadsgDF SAD asdf adwf asdf '} title={'ne Social-network'}/>
                    <Project discription={'aa aaa aa afadsgssdg as aASDASD ASDF  '} title={'ne Social-network'}/>
                </div>
            </div>
        </div>
    )
}