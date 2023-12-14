import React from "react";
import { Link } from "react-router-dom";
import { arrow } from "../assets/icons";


const InfoBox = ({ text, link, btnText }) => (
    <div className="info-box">
        <p className="font-medium sm: text-m text-center">{text}</p>
        <Link to={link} className="neo-brutalism-white neo-btn">
            {btnText}
            <img src ={arrow} className="w-4 h-4 object-contain"/>
        </Link>
    </div>
)

const renderContent = {
    1: (
        <h1 className="sm-text-xl sm:leading-snug text-center neo-brutalism-blue
        py-2 px-8 text-white mx-3 my-6"> Hi I am <span className="font-semibold">Pooja Thalur</span>
        👋
        <br />
        An experienced Software Engineer from India. <br/>A Grad student in Information Technology from ASU (2023 - 2025)
        </h1>
    ),
    2: (
       <InfoBox 
            text = {<span> Worked with UrbanPro.com and Yugasys.<br />  I picked up a lot of backend engineering skills along the way.</span>}
            link ="/about"
            btnText={"Know More About Me"}
       />
    ),
    3: (
        <InfoBox 
            text ={<span>Worked on a lot of projects including backend using <br/>JAVA, Python, AWS, Data Analytics. etc. , some of which are detailed here</span>  }
            link ="/projects"
            btnText={"Visit Projects"}
       />
    ),
    4: (
        <InfoBox 
            text ={<span>I am just a message away. <br/>Connect and talk about anything under the sun. </span>  }
            link ="/contact"
            btnText={"Do Get in Touch"}
       />
    )
}

const HomeInfo = ({ currentStage }) => {
    return renderContent[currentStage] || null;
}

export default HomeInfo;