(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,function(e,a,t){},,function(e,a,t){e.exports=t.p+"static/media/profile-pic.12746e25.png"},function(e,a,t){e.exports=t.p+"static/media/tradr.c3a4d813.png"},function(e,a,t){e.exports=t.p+"static/media/geek-blog.e02e02ef.png"},function(e,a,t){e.exports=t.p+"static/media/weather.676201e4.png"},function(e,a,t){e.exports=t.p+"static/media/movie-madness.44e45f47.png"},function(e,a,t){e.exports=t.p+"static/media/mongo.8c81c254.png"},function(e,a,t){e.exports=t.p+"static/media/geekquiz.304ec737.png"},function(e,a,t){e.exports=t(27)},,,,,,,,,,function(e,a,t){},,function(e,a,t){},,function(e,a,t){e.exports=t.p+"static/media/cv.c8e75707.pdf"},function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),c=t(4),r=t.n(c),i=(t(3),t(1));var o=function(e){e.currentPage;var a=e.handlePageChange;return l.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light"},l.a.createElement("div",{className:"container-fluid"},l.a.createElement("div",{id:"navbarNavAltMarkup"},l.a.createElement("div",{className:"navbar-nav"},l.a.createElement("a",{className:"nav-link active","aria-current":"page",href:"#About",onClick:function(){return a("About")}},"About"),l.a.createElement("a",{className:"nav-link",href:"#Project",onClick:function(){return a("Project")}},"Projects"),l.a.createElement("a",{className:"nav-link",href:"#Contact",onClick:function(){return a("Contact")}},"Contact"),l.a.createElement("a",{className:"nav-link",href:"#CV",onClick:function(){return a("CV")}},"CV")))))};t(22);var m=function(){var e=Object(n.useState)({name:"",email:"",message:""}),a=Object(i.a)(e,2),t=a[0],c=(a[1],Object(n.useState)("")),r=Object(i.a)(c,2),o=r[0],m=r[1],s=t.name,u=t.email,h=t.message,d=function(e){""===e.target.value&&m("Please input a valid ".concat(e.target.id))};return l.a.createElement("div",{className:"container"},l.a.createElement("div",null,l.a.createElement("h1",null,"Contact Page")),l.a.createElement("form",null,l.a.createElement("h6",null,"Name:"),l.a.createElement("input",{datatype:s,id:"name",type:"name",onBlur:d}),l.a.createElement("h6",null,"Email:"),l.a.createElement("input",{datatype:u,id:"email",type:"email",onBlur:function(e){if("email"===e.target.type){var a=!!e.target.value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);a?a&&m(""):m("Is not a valid email. Please enter a vaild email. ")}}}),l.a.createElement("h6",null,"Message:"),l.a.createElement("textarea",{datatype:h,id:"message",type:"message",onBlur:d})),l.a.createElement("div",{className:"err"},l.a.createElement("p",{style:{color:"red"}},o)),l.a.createElement("div",{className:"submitBtn"},l.a.createElement("a",{href:"/"},l.a.createElement("button",null,"Submit"))))},s=(t(24),t(5)),u=t.n(s);function h(){return l.a.createElement("div",{className:"container col-sm-6 col-xs-10"},l.a.createElement("div",null,l.a.createElement("img",{className:"profilePic",src:u.a,alt:"Me"})),l.a.createElement("div",{className:"bio"},l.a.createElement("h3",null,"Bio"),l.a.createElement("p",null,"I'm a highly skilled Customer Service Agent who's worked in the industry for the past 26 years. I\u2019m ready and determined to pursue my passion in Web Development."),l.a.createElement("p",null,"I thrive in any working environment, whether it be on my own or part of a team. I\u2019m comfortable delegating or following instructions. I\u2019m highly motivated with an excellent work ethic and willing to make personal sacrifices required to achieve my goals."),l.a.createElement("p",null,"I chose web development because I thoroughly enjoy designing and developing and thrive on improving existing projects. I already have an excellent knowledge of Excel which I learnt in my current role and I see HTML, CSS and Javascript as the next step in my computing career."),l.a.createElement("h3",null,"Personal life"),l.a.createElement("p",null,"I\u2019m 43 years old and live in Manchester. I\u2019m fun, outgoing, sociable, I love to live life to full and laugh as much as possible. My interests include comedy clubs, pubs, holidays, gym, cooking, music, gigs, movies & boxsets and sports.")))}var d=function(e){console.log(e);var a=e.projectList;return l.a.createElement("div",{className:"cardContainer p-5 mb-5"},a.map(function(e){return l.a.createElement("div",{className:"card col-md-3 p-2 m-5 col-3  col-sm-6 d-inline-flex"},l.a.createElement("img",{src:e.image,class:"card-img-top",alt:e.name}),l.a.createElement("div",{style:{height:"35vh"},className:"card-body text-center "},l.a.createElement("div",{className:"d-inline-flex "},l.a.createElement("a",{href:e.github,className:"btn btn-primary me-4 mt-2"},"Git Hub"),l.a.createElement("a",{href:e.liveURL,className:"btn btn-primary mt-2"},"Live URL")),l.a.createElement("h5",{className:"card-title text-center mt-3"},e.name),l.a.createElement("p",{className:"card-text"},e.description)))}))},p=t(6),g=t.n(p),v=t(7),E=t.n(v),b=t(8),f=t.n(b),w=t(9),y=t.n(w),N=t(10),k=t.n(N),x=t(11),M=t.n(x),C=function(){var e=Object(n.useState)([{name:"Tradr Marketplace",image:g.a,description:"Inspired by eBay & Amazon, this is an ecommerce application which enables a user to create an account to buy and sell products",liveURL:"https://calm-gorge-52770.herokuapp.com",github:"https://github.com/DaveMon79/tradr-marketplace"},{name:"Geek blog",image:E.a,description:"This appliocation allows use to create an account to view, make and comment on tech blogs",liveURL:"https://immense-dusk-95671.herokuapp.com/",github:"https://github.com/DaveMon79/Geek-Blog"},{name:"What's the weather like",image:f.a,description:"A weather app which will you give you the current and five day weather forecast for any city you choose",liveURL:"https://davemon79.github.io/What-s-the-weather-like-/",github:"https://github.com/DaveMon79/What-s-the-weather-like-"},{name:"Movie Madness",image:y.a,description:"This application enables a user to input the name of a film or series and be presented with a YouTube trailer, plot, summary and ratings",liveURL:"https://nenebeji.github.io/Movie-Madness/",github:"https://github.com/DaveMon79/Movie-Madness"},{name:"Mongo Social",image:k.a,description:"Back end socail media application which allows users to comment and react to comments, add and delete friends ",liveURL:"https://drive.google.com/file/d/1kuXyjPEOWaSgrzXvCI7yjEmGg_bI6Mud/view",github:"https://github.com/DaveMon79/Mongo-Social"},{name:"Javascript Geek Quiz",image:M.a,description:"A short quiz app which gives the user multiple choice questions. Ot scores them and deletes from the timer for an incorrect answer",liveURL:"https://davemon79.github.io/Javascript-Geek-Quiz/",github:"https://github.com/DaveMon79/Javascript-Geek-Quiz"}]),a=Object(i.a)(e,2),t=a[0];a[1];return l.a.createElement(d,{projectList:t})};function j(){return l.a.createElement("div",{className:"cvContainer mt-5 text-center"},l.a.createElement("div",{className:"download"},l.a.createElement("button",null,l.a.createElement("a",{style:{color:"white"},href:t(26),download:!0},"Click to download CV"))),l.a.createElement("div",null,l.a.createElement("h3",null,"Proficiencies")),l.a.createElement("div",null,l.a.createElement("div",{className:"mb-6"},l.a.createElement("h4",null,"Front End"),l.a.createElement("h6",{className:"mt-3"},"HTML"),l.a.createElement("h6",null,"CSS"),l.a.createElement("h6",null,"JavaScript"),l.a.createElement("h6",null,"Bootstrap"),l.a.createElement("h6",null,"React"),l.a.createElement("h6",null,"Responsive design")),l.a.createElement("div",{className:"mb-6"},l.a.createElement("h4",null,"Back End"),l.a.createElement("h6",{className:"mt-3"},"NodeJS"),l.a.createElement("h6",null,"Express"),l.a.createElement("h6",null,"Model View Controller - MVC"),l.a.createElement("h6",null,"Progressive Web Applications - PWA"),l.a.createElement("h6",null,"API's")),l.a.createElement("div",{className:"mb-6"},l.a.createElement("h4",null,"Database"),l.a.createElement("h6",{className:"mt-3"},"MySQL"),l.a.createElement("h6",null,"Sequelize"),l.a.createElement("h6",null,"NoSQL"),l.a.createElement("h6",null,"GraphQL"),l.a.createElement("h6",null,"MongoDB"),l.a.createElement("h6",null,"Mongoose")),l.a.createElement("div",null,l.a.createElement("h4",null,"Dev Tools"),l.a.createElement("h6",{className:"mt-3"},"Git"),l.a.createElement("h6",null,"npm"),l.a.createElement("h6",null,"Jest"),l.a.createElement("h6",null,"Webpack"))))}function I(){var e=Object(n.useState)("About"),a=Object(i.a)(e,2),t=a[0],c=a[1];return l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement(o,{currentPage:t,handlePageChange:function(e){return c(e)}})),l.a.createElement("header",null,l.a.createElement("div",{className:"p-5 text-center bg-image",style:{backgroundImage:'url("https://cdn.pixabay.com/photo/2017/11/03/17/04/computer-2914933_960_720.jpg")',height:"290px"}},l.a.createElement("div",{className:"mask",style:{backgroundColor:"rgba(0, 0, 0, 0.6)"}},l.a.createElement("div",{className:"d-flex justify-content-center align-items-center h-100"},l.a.createElement("div",{className:"text-white"},l.a.createElement("h1",{className:"mb-3"},"Dave Monaghan"),l.a.createElement("h4",{className:"mb-3"},"React Portfolio"),l.a.createElement("h4",null,"Tel: 07540321620"),l.a.createElement("a",{className:"btn btn-outline-light btn-lg text-lowercase mt-2",href:"mailto:davemonaghan@gmx.com",role:"button"},"davemonaghan@gmx.com")))))),l.a.createElement("main",null,"About"===t?l.a.createElement(h,null):"Project"===t?l.a.createElement(C,null):"Contact"===t?l.a.createElement(m,null):"CV"===t?l.a.createElement(j,null):void 0))}function P(){return l.a.createElement("footer",{className:"bg-light text-center text-white"},l.a.createElement("div",{className:"container p-4 pb-0"},l.a.createElement("section",{className:"mb-4"},l.a.createElement("a",{className:"btn text-white btn-floating m-1",style:{backgroundColor:"#3b5998"},href:"https://www.linkedin.com/in/david-monaghan-a1850b238/",role:"button"},l.a.createElement("i",{class:"fab fa-facebook-f"})),l.a.createElement("a",{className:"btn text-white btn-floating m-1",style:{backgroundColor:"#0082ca"},href:"https://www.linkedin.com/in/david-monaghan-a1850b238/",role:"button"},l.a.createElement("i",{className:"fab fa-linkedin-in"})),l.a.createElement("a",{className:"btn text-white btn-floating m-1",style:{backgroundColor:"#333333"},href:"https://github.com/DaveMon79",role:"button"},l.a.createElement("i",{className:"fab fa-github"})))),l.a.createElement("div",{className:"text-center p-3",style:{backgroundColor:"rgba(0, 0, 0, 0.2)"}},"\xa9 2022 Copyright:",l.a.createElement("a",{className:"text-white",href:""},"  Dave Monaghan - Web Developer")))}var S=function(){return l.a.createElement("div",null,l.a.createElement(I,null),l.a.createElement("div",null,l.a.createElement(P,null)))};r.a.createRoot(document.getElementById("root")).render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(S,null)))}],[[12,2,1]]]);
//# sourceMappingURL=main.4603c6bc.chunk.js.map