import {
  faInstagram,
  faLinkedin,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react"

faInstagram

const Footer = () => {
  return (
    <div className="p-32 flex text-slate-900">
      <div className=" w-9/12">
        <h2 className="capitalize text-6xl font-semibold mb-12">
          let's create something amazing together.
        </h2>
        <h3 className="text-6xl font-semibold">
          <span className="capitalize">come</span>{" "}
          <span className="underline-offset-2 text-indigo-600 hover:text-indigo-400 hover:underline cursor-pointer">
            say hi
          </span>
        </h3>
      </div>
      <div>
        <div className=" space-y-2 text-center mb-6">
          <h3 className=" text-slate-800 text-3xl capitalize mb-8">
            get in touch
          </h3>
          <h3 className=" text-gray-400 text-2xl capitalize">Qormi, Malta</h3>
          <h3 className=" text-slate-900 text-2xl ">paulthewebdev@gmail.com</h3>
          <h3 className=" text-gray-400 text-2xl capitalize">
            (+356) 99610037
          </h3>
        </div>
        <div className="flex space-x-6 justify-center">
          <div className="bg-indigo-300 h-16 w-16 rounded-full flex justify-center items-center text-indigo-700">
            <FontAwesomeIcon size="2x" icon={faInstagram} />
          </div>
          <div className=" bg-blue-300 h-16 w-16 rounded-full flex justify-center items-center text-sky-700">
            <FontAwesomeIcon size="2x" icon={faLinkedinIn} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
