import React from "react";
import styles from './Projects.module.css'
import {Project} from "./project/Project";
import {Title} from "../Common/Title/Title";
import {Separator} from "../Common/Separator/Separator";

export const Projects = () => {
    return (
        <div className={styles.projectsBlock}>
           <Separator/>
            <div className={styles.container}>
               <Title title={'Projects'}/>
                <div className={styles.projects}>
                    <Project discription={'ssssss ss ssssssss sssss sssssssss'} title={'Social-network'}/>
                    <Project discription={'aa aaa aa afadsgDF SAD asdf adwf asdf '} title={'ne Social-network'}/>
                    <Project discription={'aa aaa aa afadsgssdg as aASDASD ASDF  '} title={'ne Social-network'}/>
                </div>
            </div>
        </div>
    )
}