import LoginForm from "../components/LoginForm"
import Navbar from "../components/Navbar"
export default function SignUpPage() {
    return (
        <div>
            <Navbar />
            <div className="my-5 flex flex-col items-center">
                <LoginForm />
            </div>
        </div>

    )
}