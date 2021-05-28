import React from 'react';
import styles from './App.module.css';
import {Header} from "./components/header/Header";
import {Main} from "./components/main/Main";
import {Skills} from "./components/skills/Skills";
import {Projects} from "./components/projects/Projects";
import {DistanceWork} from "./components/distanceWork/DistanceWork";
import {Contacts} from "./components/contacts/Contacts";
import {Footer} from "./components/footer/Footer";
export const lorem = 'Lorem ipsum dolor sit amet,' +
    ' consectetur adipisicing elit. Beatae dicta eius et eum exercitationem, harum ipsum nam nemo nostrum' +
    'possimus praesentium provident, quae repudiandae sed sequi tempora tempore tenetur! Quasi!'
function App() {
  return <div className={styles.app}>
    <Header/>
    <Main/>
    <Skills/>
    <Projects/>
    {/*<DistanceWork/>*/}
    <Contacts/>
    <Footer/>
  </div>
}

export default App;
