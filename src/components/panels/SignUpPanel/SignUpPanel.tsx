


import { useFormState } from 'react-dom';
import styles from './SignUpPanel.module.css';
import { BasicButton } from '../../buttons/BasicButton';


export default function SignUpPanel() {

    const { } = useFormState
    /* let text1 = "Sign Up!"; */

  return (
    <div className={styles.signUpWrap}>
        <h2>Sign up!</h2>
        
        <form>
            <fieldset>
                <label htmlFor='username'>Username</label>
                <input type='text' id='username' placeholder='Enter your username'></input>
            </fieldset>

            <fieldset>
                <label htmlFor='email'>Email</label>
                <input type='text' id='Email' placeholder='Enter your email'></input>
            </fieldset>

            <fieldset>
                <label htmlFor='password1'>Password</label>
                <input type='text' id='password1' placeholder='Enter your password'></input>
            </fieldset>

            <fieldset>
                <label htmlFor='password2'>Confirm Password</label>
                <input type='text' id='password2' placeholder='Confirm your password'></input>
            </fieldset>

            <fieldset>
                <BasicButton title="Submit" />
                <BasicButton title="Reset"/>
            </fieldset>

        </form>


    </div>
  );
}

