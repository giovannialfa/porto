import CertCard from "./CertCard.js"

import hr from "../assets/curve-hr.svg"
import fcc_BEAPI from "../assets/certs/fcc_BEAPI.png"

// import 

export default function Certs(){
    return (
        <div id="certs" className="mt-4 text-white">
            <h1 className="text-2xl font-bold">Certifications</h1>
            <p className="font-light text-gray-400">Here are some of my Certifications</p>

            {/* <div className="flex flex-col md:flex-row flex-wrap mt-4 gap-5"> */}
            <div className="grid grid-cols-1 md:grid-cols-3 justify-center mt-4 gap-5">
                <CertCard name="Back End Developments and APIs" img={fcc_BEAPI} issued="FreeCodeCamp" date="Feb 23" />

            </div>
            <img src={hr} className="w-full mt-8 md:h-2" alt="hr" />
        </div>
    )
}
