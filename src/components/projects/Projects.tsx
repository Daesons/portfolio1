import React from "react";
import styles from './Projects.module.scss'
import {Project} from "./project/Project";
import {Title} from "../Common/Title/Title";
import {Separator} from "../Common/Separator/Separator";
import {lorem} from "../../App";

import cardsProjectImg from '../../assets/CardsProject.jpg'
import ToDoImg from '../../assets/ToDo.jpg'
import SocialNetworkImg from '../../assets/socialNetwork.jpg'


export const Projects = () => {
    const cardsProject = {
        backgroundImage : `url(${cardsProjectImg})`
    }
    const ToDo = {
        backgroundImage : `url(${ToDoImg})`
    }
    const SocialNetwork = {
        backgroundImage: `url(${SocialNetworkImg})`
    }
    return (
        <div className={styles.projectsBlock}>
           <Separator/>
            <div className={styles.container}>
               <Title title={'Projects'}/>
                <div className={styles.projects}>
                    <Project style={SocialNetwork} description={lorem} title={'Social-network'}/>
                    <Project style={cardsProject} description={lorem} title={'ne Social-network'}/>
                    <Project style={ToDo} description={lorem} title={'ne Social-network'}/>
                </div>
            </div>
        </div>
    )
}