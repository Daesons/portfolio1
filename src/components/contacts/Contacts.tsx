import React from "react";
import s from './Contacts.module.scss'
import {Title} from "../Common/Title/Title";
import {Separator} from "../Common/Separator/Separator";

export const Contacts = () => {
    return (
        <div className={s.contactsBlock}>
            <Separator/>
            <div className={s.container}>
                <Title title={'Contacts'}/>
                <div className={s.formContainer}>
                    <form className={s.form}>
                        <input/>
                        <input/>
                        <textarea className={s.textarea}/>
                    </form>
                </div>
                <p><input type="submit"/></p>
            </div>
        </div>
    )
}