import { useState } from "react";
import Porfolio from "./Portfolio";


const ProjectList = () => {
    const [projectList, setProjectList] = useState([
        {
            name: "Tradr Marketplace", 
            image: "./images.tradr.png", 
            liveURL: "https://calm-gorge-52770.herokuapp.com",
            github: "https://github.com/DaveMon79/tradr-marketplace"
        },
        {
            name: "Geek blog", 
            image: "./images/geek-blog.png", 
            liveURL: "https://immense-dusk-95671.herokuapp.com/",
            github: "https://github.com/DaveMon79/Geek-Blog"
        },
        {
            name: "What's the weather like", 
            image: "./images/weather.png", 
            liveURL: "https://davemon79.github.io/What-s-the-weather-like-/",
            github: "https://github.com/DaveMon79/What-s-the-weather-like-"
        },
        {
            name: "Movie Madness", 
            image: "./images/movie-madness.png", 
            liveURL: "https://nenebeji.github.io/Movie-Madness/",
            github: "https://github.com/DaveMon79/Movie-Madness"
        },
        {
            name: "Mongo Social", 
            image: "./images/mongo.png", 
            liveURL: "https://drive.google.com/file/d/1kuXyjPEOWaSgrzXvCI7yjEmGg_bI6Mud/view",
            github: "https://github.com/DaveMon79/Mongo-Social"
        },
        {
            name: "Javascript Geek Quiz", 
            image: "./images/geekquiz.png", 
            liveURL: "https://davemon79.github.io/Javascript-Geek-Quiz/",
            github: "https://github.com/DaveMon79/Javascript-Geek-Quiz"
        },
    ])

    return (
        <div>
            <Porfolio projectList={projectList} />
        </div>
    )
}

export default ProjectList