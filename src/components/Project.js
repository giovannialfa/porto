import ProjectCard from "./ProjectCard.js"

import hr from "../assets/curve-hr.svg"
import basemipa from "../assets/project/basemipa.png"
import guest from "../assets/project/guest.png"

// import 

export default function Projects(){
    return (
        <div id="certs" className="mt-4 text-white">
            <h1 className="text-2xl font-bold">Projects</h1>
            <p className="font-light text-gray-400">Here are some of my Projects</p>

            {/* <div className="flex flex-col md:flex-row flex-wrap mt-4 gap-5"> */}
            <div className="grid grid-cols-1 md:grid-cols-3 justify-center mt-4 gap-5">
                <ProjectCard name="Basemipa" img={basemipa} desc="Website that stores all records about all students in the Faculty of Mathematics and Natural Sciences, Padjadjaran University"/>
                <ProjectCard name="Imeet" img={guest} desc="Website that helps when guests who come to a building are not properly recorded so that the building does not have data when needed. iMeet is needed so that guest data can be recorded properly."/>
            </div>
            <img src={hr} className="w-full mt-8 md:h-2" alt="hr" />
        </div>
    )
}
