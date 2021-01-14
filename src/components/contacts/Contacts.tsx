import React from "react";
import s from './Contacts.module.css'

export const Contacts = () => {
    return (
        <div className={s.contactsBlock}>
            <div className={s.container}>
                <h3 className={s.title}>Contacts</h3>
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