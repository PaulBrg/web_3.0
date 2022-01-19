import React from "react"

const Navigation = () => {
  return (
    <div className="flex mx-32 mt-12 absolute inset-0">
      <div>
        <button type="button" className="capitalize text-4xl font-medium ">
          Paul
        </button>
        <span className=" capitalize text-gray-400 font-medium">
          The web developer
        </span>
      </div>
      <div className="ml-auto flex">
        <div className="ml-48">
          <p className="font-medium uppercase">
            CALL ME (+356 99610037){" "}
            <span className="text-gray-400 mx-4">/</span>{" "}
            paulthewebdev@gmail.com
          </p>
        </div>
      </div>
    </div>
  )
}

export default Navigation
