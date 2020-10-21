import React from 'react';

function LeftNavigation(props) {

    return (<aside className="App-site-sidebar">
        <div className="App-site-sidebar-inner h-card">
            <a href="/" rel="me" className="person u-url">
                <div className="person-avatar u-photo">
                    <img src="/images/avatar.ad31e6ce.png" alt="" className="avatar" />
                </div>
                <div className="person-content">
                    <h1 className="person-title p-name">Sagar Pandey</h1>
                    <h2 className="person-subtitle p-job-title p-note">Full-stack Software Engineer</h2>
                </div>
            </a>

            <nav className="block main-navigation">

                <div className="navigation-extendable">
                    <ul>
                        <li className=""><a onClick={() => { props.showSections("Portfolio") }} >Portfolio</a></li>
                        <li className=""><a onClick={() => { props.showSections("Offer") }}>My offer</a></li>
                        <li className=""><a onClick={() => { props.showSections("Contact") }}>Contact me</a></li>
                    </ul>

                </div>

            </nav>

        </div>

    </aside>);

}

export default LeftNavigation;