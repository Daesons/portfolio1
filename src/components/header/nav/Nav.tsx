import React from "react";
import styles from './Nav.module.scss'
import {Link} from "react-scroll/modules";


export function Nav() {
    return (
        <div className={styles.nav}>
            <Link activeClass={styles.active}
                  className={styles.title}
                  to={'Main'}
                  smooth={true}
                  spy={true}
            duration={500}
            offset={-80}>Main</Link>
            <Link activeClass={styles.active}
                  className={styles.title}
                  to={'Skills'}
                  smooth={true}
                  spy={true}
            duration={500}>Skills</Link>
            <Link activeClass={styles.active}
                  className={styles.title}
                  to={'Projects'}
                  smooth={true}
                  spy={true}
            duration={500}>Projects</Link>
            <Link activeClass={styles.active}
                  className={styles.title}
                  to={'Contacts'}
                  smooth={true}
                  spy={true}
            duration={500}>Contacts</Link>
        </div>
    )
}