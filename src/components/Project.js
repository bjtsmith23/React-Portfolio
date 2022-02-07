import React from 'react';

export default function Project({ image, title, description, github, deployed }) {
    return (

        
            <div class="card col-md-4 justify-content-around">
                <img class="card-img-top" src={image} alt="Animal Palace Website" />
                <div class="body-card">
                    <h5 class="card-title">{title}</h5>
                    <p class="card-text">{description}</p>
                </div>
                <div class="card-body d-flex justify-content-evenly">
                <button type="button" class="btn btn-success"><a href={github} target="_blank" class="card-link"></a>Repo Link</button>

                <button type="button" class="btn btn-success"><a href={deployed} target="_blank" class="card-link"></a>Deployed link</button>
                    
                    
                </div>
            </div>
        
    )
}
