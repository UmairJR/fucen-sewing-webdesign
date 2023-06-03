/* eslint-disable @next/next/no-img-element */

import React from 'react'

function ExploreCard() {
    return (
        <div>
            <section className="banner font--family">

                <img className="banner--content-image-desktop" src="https://www.eq2ventures.com/wp-content/uploads/2022/09/desktop-banner-1.jpg" alt="banner" />
                <img className="banner--content-image-mobile" src="https://www.eq2ventures.com/wp-content/uploads/2022/09/mobile-banner-1.jpg" alt="banner" />
                <h1 className="bannertxt-text1">
                    World of Surfacing            <br />
                    <span className="bannertxt-text2">
                        Possiblities         </span>
                </h1>
                
                    <button className="exbtn">
                        <a target="_blank" href="https://fucen-sewing.com/our-services/" rel="noreferrer"><span>Explore</span></a>
                    </button>
                
            </section>
        </div>
    )
}

export default ExploreCard
