import React from 'react';
import * as data from '../utils/portfolio-contents.json'
import '../styles/tags.css';

function Offer() {


    const offerDescription = (offerTag) => {

        return (
            <div>
                {offerTag.description}
            </div>
        );

    }


    return (
        <div className="App-Offer App-boxshadow" >

            What i can offer!
            <ul class="tags">
                {data.Offer.tags.map((item, index) => {
                    return <li><a href="#" class="tag">{item.name}</a></li>

                })
                }</ul>

            {/* <Chip avatar={<Avatar>M</Avatar>} label=".NET"  />
                <Chip avatar={<Avatar>M</Avatar>} label="React"  />
                <Chip avatar={<Avatar>M</Avatar>} label="Azure"  />
                <Chip avatar={<Avatar>M</Avatar>} label="SharePoint Online"  />
                <Chip avatar={<Avatar>M</Avatar>} label="SharePoint"  />
                <Chip avatar={<Avatar>M</Avatar>} label="Microsoft 365"  /> */}
        </div>
    );


}


export default Offer;