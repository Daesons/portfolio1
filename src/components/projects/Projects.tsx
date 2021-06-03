import React from "react";
import styles from './Projects.module.scss'
import {Project} from "./project/Project";
import {Title} from "../Common/Title/Title";
import {Separator} from "../Common/Separator/Separator";
import {lorem} from "../../App";

import cardsProjectImg from '../../assets/CardsProject.jpg'
import ToDoImg from '../../assets/ToDo.jpg'
import SocialNetworkImg from '../../assets/socialNetwork.jpg'

const cardsProjectDescription = 'Cards project. There are many card packs with different themes. Every card pack have answer and question. When you run learn mode you will see question, then you will need to answer and set a mark. Using AntDesign, Redux, TypeScript, Axios, React, CSS.'
const SocialNetworkDescription = 'TypeScript, CSS, React, Hooks, class components, HOC, Thunk, Redux, Axios. Unfinished training project.'
const ToDoListDescription = 'TypeScript, MaterialUI, React, Redux. Training project'
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
                    <Project ghPagesUrl={'https://github.com/Daesons/react-samurai'}
                             style={SocialNetwork}
                             description={SocialNetworkDescription}
                             title={'Social-network'}/>
                    <Project ghPagesUrl={'https://daesons.github.io/ProjectFriday/#/Login'}
                             style={cardsProject}
                             description={cardsProjectDescription}
                             title={'Cards project'}/>
                    <Project ghPagesUrl={'https://github.com/Daesons/todolist'}
                             style={ToDo}
                             description={ToDoListDescription}
                             title={'ToDoList'}/>
                </div>
            </div>
        </div>
    )
}