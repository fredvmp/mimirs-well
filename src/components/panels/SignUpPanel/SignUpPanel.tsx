


import { useFormState } from 'react-dom';
import styles from './SignUpPanel.module.css';
import { BasicButton } from '../../buttons/BasicButton';
import { useState, type ReactElement, type ReactEventHandler } from 'react';


export default function SignUpPanel() {

    interface FormElements extends HTMLFormControlsCollection {
        usernameInput: HTMLInputElement
        emailInput: HTMLInputElement
        passInput: HTMLInputElement
        passConfInput: HTMLInputElement
    }
    interface UsernameFormElement extends HTMLFormElement {
    readonly elements: FormElements
    }

    const { } = useFormState
    const [user, setUser] = useState({
        username: "",
        email: "",
        password: "",
        passwordConf: ""
    })
    

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {

        event.preventDefault()

        const form = event.currentTarget
        const formElements = form.elements as typeof form.elements & {
        usernameInput: HTMLInputElement
        }
        /* onSubmitUsername(formElements.usernameInput.value)*/


    }

    /* const handleUsernameInput = (event: HTMLInputElement) => {
        setUser({...user, username: event.})
    } */

    /* onChange={handleUsernameInput} */


  return (
    <div className={styles.signUpWrap}>
        <h2>Sign up!</h2>
        
        <form onSubmit={handleSubmit}>
            
            <fieldset>
                <label htmlFor='name'>Name</label>
                <input type='text' id='name' placeholder='Enter your name' ></input> 
            </fieldset>

            <fieldset>
                <label htmlFor='username'>Username</label>
                <input type='text' id='username' placeholder='Enter your username' ></input> 
            </fieldset>

            <fieldset>
                <label htmlFor='email'>Email</label>
                <input type='text' id='Email' placeholder='Enter your email'></input>
            </fieldset>

            <fieldset>
                <label htmlFor='password1'>Password</label>
                <input type='password' id='password1' placeholder='Enter your password'></input>
            </fieldset>

            <fieldset>
                <label htmlFor='password2'>Confirm Password</label>
                <input type='password' id='password2' placeholder='Confirm your password'></input>
            </fieldset>

            <fieldset>
                <BasicButton title="Submit" />
                <BasicButton title="Reset"/>
            </fieldset>

        </form>


    </div>
  );
}

