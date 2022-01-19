import { faFigma } from "@fortawesome/free-brands-svg-icons"
import {
  faCode,
  faDesktop,
  faFlask,
  faHandHolding,
  faHandshakeAltSlash,
  faMobile,
  faPaintBrush,
  faRocket,
  faHandshake,
  faFileCode,
  faBrain,
  faMicrochip,
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react"

const Services = () => {
  return (
    <div className="bg-indigo-600 text-white p-32 flex flex-col">
      <div className="capitalize text-6xl mb-16">
        <h2>services i</h2>
        <h2>offer</h2>
      </div>
      <div className="grid grid-cols-3 gap-12">
        <div className="w-80">
          <FontAwesomeIcon size="2x" className="mb-3" icon={faHandshake} />
          <h3 className="font-medium mb-3 capitalize">consulting</h3>
          <p className="font-light">
            Anxious about your next steps in enhancing the digital presence? We
            analyse the current state of things, your goals and needs and
            suggest the solution that suits you best
          </p>
        </div>
        <div className="w-80">
          <FontAwesomeIcon size="2x" className="mb-3" icon={faFlask} />
          <h3 className="font-medium mb-3 capitalize">
            UX <span className="mx-1">/</span>UI design
          </h3>
          <p className="font-light">
            Creativity. Uniqueness. Friendliness. That's what we always keep in
            mind while building interfaces and drawing mock-ups. We want you to
            stand out from the crowd
          </p>
        </div>
        <div className="w-80">
          <FontAwesomeIcon size="2x" className="mb-3" icon={faCode} />
          <h3 className="font-medium mb-3 capitalize">web development</h3>
          <p className="font-light">
            Technical solutions of different complexity are applied in all
            stages of the web development process. As a result, you get a highly
            competent digital product ready to use
          </p>
        </div>
        <div className="w-80">
          <FontAwesomeIcon size="2x" className="mb-3" icon={faMicrochip} />
          <h3 className="font-medium mb-3 uppercase">ai</h3>
          <p className="font-light">
            The future is now. We follow the rapid growth of technical industry
            and encourage you to do the same. Bring your boldest ideas to us and
            let's transform the unbelievable to reality together
          </p>
        </div>
        <div className="w-80">
          <FontAwesomeIcon size="2x" className="mb-3" icon={faFileCode} />
          <h3 className="font-medium mb-3 capitalize">smart contracts</h3>
          <p className="font-light">
            Enjoy the benefits of the blockchain network. Smart contracts are
            ideal for financial applications ensuring the security of online
            transactions
          </p>
        </div>
      </div>
    </div>
  )
}

export default Services
