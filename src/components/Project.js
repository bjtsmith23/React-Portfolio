import React from 'react';

export default function Project({ image, title, description, github, deployed }) {
    return (
        <React.Fragment>
            <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                <div className="img-wrap">
                    <div className="image-box">
                        <div>
                            <img src={image} alt="Screenshot of BTS Quiz" />
                        </div>
                    </div>
                    <div className="img-description">
                        <a href={deployed} target="_blank" rel="noreferrer">
                            <div className="portfolio-title">{title}</div>
                        </a>
                        <a href={github} target="_blank" rel="noreferrer">
                            <i className="fab fa-github fa-3x">
                            </i>
                        </a>
                    </div>
                </div>
                <p>{description}</p>
            </div>
        </React.Fragment>
    )
}
