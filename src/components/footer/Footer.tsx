import React from "react";
import s from './Footer.module.scss'
import {Title} from "../Common/Title/Title";
import {Separator} from "../Common/Separator/Separator";
import {faCss3, faGithub, faJs, faLinkedin, faReact} from "@fortawesome/free-brands-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";

export const Footer =()=>{
    return(
        <div className={s.footerBlock}>
            <Separator/>
            <div className={s.container}>
                <Title title={'Links'}/>
                <div className={s.icons}>
                    <a href={'mailto:damned766@gmail.com'} className={s.item}><FontAwesomeIcon icon={faEnvelope} color={'#ffb400'} size={"4x"}/></a>
                    <a href={'https://www.linkedin.com/in/vladislav-yarmaliuk-8b9711208/'} className={s.item}><FontAwesomeIcon icon={faLinkedin} color={'#ffb400'} size={"4x"}/></a>
                    <a href={'https://github.com/Daesons'} className={s.item}><FontAwesomeIcon icon={faGithub} color={'#ffb400'} size={"4x"}/></a>
                </div>
                <p>© 2021 All rights reserved</p>
            </div>
        </div>
    )
}