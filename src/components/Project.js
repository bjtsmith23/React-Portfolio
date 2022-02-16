import React from 'react';

export default function Project({ image, title, description, github, deployed }) {
    return (

        <div class="cont">
            <div class="ccc">
                <div class="wor col-md-3">
                    <img class="card-img-top" src={image} alt="Animal Palace Website" />
                    <div class="body-card">
                        <h5 class="card-title">{title}</h5>
                        <p class="card-text">{description}</p>
                    </div>
                    <div class="buttongroup">
                        <a href={github} class="btn btn-success" target="_blank" rel="noreferrer" role="button">Repo Link</a>
                        <a href={deployed} class="btn btn-success" target="_blank" rel="noreferrer" role="button">Deployed link</a>
                    </div>
                </div>
            </div>

        </div>
    )
}
