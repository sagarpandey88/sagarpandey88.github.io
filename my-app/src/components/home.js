import React from 'react'


function HomePage()
{

    return (<div>
        <div className="App-HomePage-Name" >
            Hi I am Sagar
         </div>
        <div className="App-HomePage-Desc" >
            a software engineer specialized in front-end and back-end development
           </div>
        <div className="App-HomePage-logos" >
            <img src={require("../images/Azure-logo.png")}  ></img>
            <img src={require("../images/cosmos-logo.svg")}  ></img>
            <img src={require("../images/react-logo.svg")}  ></img>
            <img src={require("../images/sharepoint-logo.svg")}  ></img>
        </div>
    </div>);

}


export default HomePage;