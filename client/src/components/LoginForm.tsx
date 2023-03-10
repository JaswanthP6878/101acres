import React, { useState } from "react"
import axios from 'axios';
interface LoginFormInterface {
    addAlert : (alert : boolean) => void
}
export default function LoginForm({addAlert}: LoginFormInterface) {
    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const handleSubmit = async (e: React.FormEvent)=> {
        e.preventDefault();
        if (name === "" || email === "" || password === ""){
            addAlert(true);
            return;
        } else {
           //testing data passing
           const { data } = await axios.get('http://localhost:8000/user')
           console.log(data);
           return
        }
    }
    return (
        <div className="form-control w-full min-w-xs max-w-xs border-4 flex flex-col align-center rounded-lg">
            <form onSubmit={handleSubmit} action="/" method="GET">
            <div className="mx-3" >
                <label className="label">
                    <span className="label-text text-md">Enter name</span>
                </label>
                <input onChange = {(e) => {setName(e.target.value)}} value={name} type="text" className="input input-bordered w-auto" />
            </div>
            <div className="mx-3">
                <label className="label">
                    <span className="label-text text-md">Enter email</span>
                </label>
                <input onChange = {(e) => {setEmail(e.target.value)}} value={email} type="text" className="input input-bordered w-auto max-w-xs" />
            </div>
            <div className="mx-3">
                <label className="label">
                    <span className="label-text text-md">Password</span>
                </label>
                <input onChange = {(e) => {setPassword(e.target.value)}} value={password} type="password" className="input input-bordered w-auto max-w-xs" />
            </div>
            <div className="my-5 ml-[25%] w-3/4">
                <button className="btn btn-success btn-outline w-[50%]" type="submit">Register!</button>
            </div>
            </form>
        </div>
    )
}

