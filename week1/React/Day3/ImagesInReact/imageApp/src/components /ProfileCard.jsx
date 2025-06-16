
import React from "react";
//import 'bulma/css/bulma.css'

export default function ProfileCard(props){

    const {title, handle, image } = props;

    return <div className="card">
        <div className="card-image">
            <figure className="image is-1by1">
                <img src={image} alt="pda logo" />
            </figure>
        </div>
        <div className="card-content">
            <div className="media-content">
                <p className="title is-4">{title}</p>
                <p className="subtitle is-6">{handle}</p>
            </div>
        </div>
        
    </div>

}