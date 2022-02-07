import React from 'react';

export default function Project({ image, title, description, github, deployed }) {
    return (
        
        <div class="card col-md-3 justify-content-evenly">
            <img class="card-img-top d-flex" src={image} alt="Animal Palace Website" />
            <div class="card-body">
                <h5 class="card-title">{title}</h5>
                <p class="card-text text-center">{description}</p>
            </div>
            <div class="card-body">
                <a href={github} target="_blank" class="card-link">Repo link</a>
                <a href={deployed} target="_blank" class="card-link">Deployed link</a>
            </div>
        </div>
    )
}
