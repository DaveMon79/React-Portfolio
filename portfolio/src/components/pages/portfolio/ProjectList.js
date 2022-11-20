import React from 'react';
import { useState } from "react"
import Portfolio from "./Portfolio"
import tradr from  "../../../Assets/Images/tradr.png";
import GeekBlog from "../../../Assets/Images/geek-blog.png"
import Weather from "../../../Assets/Images/weather.png"
import Movie from "../../../Assets/Images/movie-madness.png"
import Mongo from "../../../Assets/Images/mongo.png"
import GeekQuiz from "../../../Assets/Images/geekquiz.png"



const ProjectList = () => {
    const [projectList, setProjectList] = useState([
        {
            name: "Tradr Marketplace", 
            image: tradr, 
            description: "Inspired by eBay & Amazon, this is an ecommerce application which enables a user to create an account to buy and sell products",
            liveURL: "https://calm-gorge-52770.herokuapp.com",
            github: "https://github.com/DaveMon79/tradr-marketplace"
        },
        {
            name: "Geek blog", 
            image: GeekBlog, 
            description: "This appliocation allows use to create an account to view, make and comment on tech blogs",
            liveURL: "https://immense-dusk-95671.herokuapp.com/",
            github: "https://github.com/DaveMon79/Geek-Blog"
        },
        {
            name: "What's the weather like", 
            image: Weather, 
            description: "A weather app which will you give you the current and five day weather forecast for any city you choose",
            liveURL: "https://davemon79.github.io/What-s-the-weather-like-/",
            github: "https://github.com/DaveMon79/What-s-the-weather-like-"
        },
        {
            name: "Movie Madness", 
            image: Movie, 
            description: "This application enables a user to input the name of a film or series and be presented with a YouTube trailer, plot, summary and ratings",
            liveURL: "https://nenebeji.github.io/Movie-Madness/",
            github: "https://github.com/DaveMon79/Movie-Madness"
        },
        {
            name: "Mongo Social", 
            image: Mongo, 
            description: "Back end socail media application which allows users to comment and react to comments, add and delete friends ",
            liveURL: "https://drive.google.com/file/d/1kuXyjPEOWaSgrzXvCI7yjEmGg_bI6Mud/view",
            github: "https://github.com/DaveMon79/Mongo-Social"
        },
        {
            name: "Javascript Geek Quiz", 
            image: GeekQuiz, 
            description: "A short quiz app which gives the user multiple choice questions. Ot scores them and deletes from the timer for an incorrect answer",
            liveURL: "https://davemon79.github.io/Javascript-Geek-Quiz/",
            github: "https://github.com/DaveMon79/Javascript-Geek-Quiz"
        },
    ])

    return (
 
            <Portfolio projectList={projectList} />
     
    )
}

export default ProjectList