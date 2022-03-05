import React from 'react'
import './Banner.css';

function Banner () {

    function truncate(string, number) {
        return string?.length > number ? string.substring(0, number -1) +'...' : string
    }
    return (
        <header className = "banner" style={{
            backgroundsize: "cover",
            backgroundImage: `url("http://images6.fanpop.com/image/photos/43400000/Cursed-Season-1-Banner-cursed-netflix-43412956-2500-938.png")`,
            backgroundPosition: "center center",
        }}>
            
            <div className="banner__contents">
                <h1 className="banner__title">Movie Name</h1>
                <div className="banner__buttons">
                    <button className="banner__button">Play</button>
                    <button className="banner__button">My List</button>
                </div>
                <h1 className="banner__description">{truncate(`This is a test description`, 150)}</h1>
            </div>

            <div className="banner--fadeBottom"/>


        </header>
    )
}

export default Banner