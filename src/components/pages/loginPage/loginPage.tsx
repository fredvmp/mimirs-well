import SignUpPanel from "../../panels/SignUpPanel/SignUpPanel";
import { Rain } from "../../rain/Rain";
import styles from "./LoginPage.module.css";

function LoginPage() {

    return (
        <>
            <div className={styles.pageContainer}>
                
                <Rain />
                <SignUpPanel />

            </div>

            
        
        </>
    )

}

export default LoginPage;
