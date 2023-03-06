export default function LoginForm() {

    return (
        <div className="form-control w-full min-w-xs max-w-xs border-4 flex flex-col align-center rounded-lg">
            <form action="/" method="GET">
            <div className="mx-3" >
                <label className="label">
                    <span className="label-text text-md">Enter name</span>
                </label>
                <input type="text" className="input input-bordered w-auto" />
            </div>
            <div className="mx-3">
                <label className="label">
                    <span className="label-text text-md">Enter email</span>
                </label>
                <input type="text" className="input input-bordered w-auto max-w-xs" />
            </div>
            <div className="mx-3">
                <label className="label">
                    <span className="label-text text-md">Password</span>
                </label>
                <input type="text" className="input input-bordered w-auto max-w-xs" />
            </div>
            <div className="my-5 ml-[25%] w-3/4">
                <button className="btn btn-success btn-outline w-[50%]" type="submit">Register!</button>
            </div>
            </form>
        </div>
    )
}

