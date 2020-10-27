import React, { useEffect } from 'react';
import * as data from '../utils/portfolio-contents.json'


function Portfolio(props) {

    useEffect(() => {

    }, []);
    return (
        <div className="App-Portfolio">
           
            <div>
               <h2> Roles and responsibilities</h2>
            </div>
            <div>
                {data.Projects.map((item) => {
                    return (
                        <div>
                            <h4>{item.title} as {item.Roles} </h4>
                            <div>
                            {item.Description}
                            </div>
                        </div>
                    )

                })
                }
            </div>
        </div>);

}
export default Portfolio;