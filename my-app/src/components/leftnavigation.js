import React from 'react';
import * as data from '../utils/portfolio-contents.json'

function LeftNavigation(props) {

    return (<aside className="App-site-sidebar">
        <div className="App-site-sidebar-inner h-card">
            <a href="/" rel="me" >               
                <div className="person-content">
                    <h1 >{data.FullName}</h1>
                    <h2 >Full-stack Software Engineer</h2>
                </div>
            </a>

            <nav className="block main-navigation">

                <div className="navigation-extendable">
                    <ul>
                        <li className=""><a onClick={() => { props.showSections("Home") }} >Home</a></li>
                        <li className=""><a onClick={() => { props.showSections("Portfolio") }} >Portfolio</a></li>
                        <li className=""><a onClick={() => { props.showSections("Offer") }}>My offer</a></li>
                        <li className=""><a onClick={() => { props.showSections("Contact") }}>Contact me</a></li>
                    </ul>

                </div>

            </nav>
            <div>
                <img alt="github" src={require("../images/github.svg")} style={{"height":"20px"}}  onClick={()=> alert("w")}  ></img>
                <img alt="github" src={require("../images/blogger.svg")} style={{"height":"20px","background-color":"orange"}}  onClick={()=> alert("w")}  ></img>
            </div>
        </div>

    </aside>);

}

export default LeftNavigation;