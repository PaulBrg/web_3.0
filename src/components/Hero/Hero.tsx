import { faPaperPlane } from "@fortawesome/free-regular-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react"
import dev from "../../assets/images/web_dev.svg"

const Hero = () => {
  return (
    <div className="flex h-screen p-32 text-slate-900">
      <div className="grid grid-cols-2">
        <div className="my-auto">
          <h1 className="text-7xl font-semibold">Paul</h1>
          <h1 className="text-7xl font-semibold mb-10">Borg</h1>
          <h2 className=" text-xl uppercase font-medium">web developer and</h2>
          <h2 className="text-xl uppercase font-medium mb-5">
            crypto aficionado
          </h2>
          <p className=" text-xl text-gray-400 mb-16">Let's work together!</p>
          <button
            type="button"
            className="p-3 w-36 uppercase bg-indigo-600 hover:bg-indigo-500 shadow-md text-white rounded-lg font-medium"
          >
            let's talk! <FontAwesomeIcon className="ml-2" icon={faPaperPlane} />
          </button>
        </div>
        <div className="flex self-center">
          <img src={dev} className="mx-auto" alt="rocket_man" />
        </div>
      </div>
    </div>
  )
}

export default Hero
