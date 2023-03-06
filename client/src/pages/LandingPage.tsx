import React from "react";
export default function LandingPage() {
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Find your next home here!</h1>
            <p className="py-6">100 acres provides a platform for you to view some of the hottest properties in the market</p>
            <button className="btn btn-outline btn-primary">Register</button>
            <button className="mx-4 btn btn-outline btn-primary">Login</button>
          </div>
        </div>
      </div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">Card title!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Register</button>
            <button className="btn btn-primary">Login</button>
          </div>
        </div>
      </div>
    </div>

  )
}

