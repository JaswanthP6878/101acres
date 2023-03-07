import LoginForm from "../components/LoginForm"
import Navbar from "../components/Navbar"
import {useState} from 'react'
import Alert from "../components/Alert"
export default function SignUpPage() {
 const [alert, setAlert] = useState<boolean>(false); 
    return (
        <div>
            <Navbar />
            {alert && <Alert type="info" content="testing alert comp" /> }
            <div className="my-5 flex flex-col items-center">
                <LoginForm addAlert = {setAlert} />
            </div>
        </div>

    )
}