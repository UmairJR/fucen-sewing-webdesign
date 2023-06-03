import React, { Children } from 'react'
import Slider from "react-slick";

const BANNERTIMER = 4000
const HomeSlider = ({children, isInfinite, mobileOnly, customeSetting, className,isArrow,isArrowMobile, slides, slidesScroll, iPadSlides, autoPlay, mobileSlides}) => {
  const mobileOnlySlider = {
    breakpoint: 99999,
    settings: "unslick"
  };

  const settings = customeSetting ? customeSetting :{
    autoplaySpeed: BANNERTIMER,
    dots: true,
    infinite: isInfinite ? true : false,
    speed: 500,
    slidesToShow: slides ? slides : 1,
    slidesToScroll: slidesScroll ? slidesScroll : 1,
    autoplay: autoPlay,
    autoplaySpeed: 5000,
    arrows: isArrow ? true:false,
    responsive: [
      mobileOnly ? mobileOnlySlider : '',
      {
        breakpoint: 768,
        settings: {
          slidesToShow: iPadSlides ? iPadSlides : 1,
          slidesToScroll: iPadSlides ? iPadSlides : 1,
          arrows : false
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: mobileSlides ? mobileSlides : 1,
          slidesToScroll: mobileSlides ? mobileSlides : 1,
          arrows : false
        },
      },
    ],
  };
  return (
    <>
      <Slider {...settings} className={className}>
        {children}
      </Slider>
      </>
  )
}

export default HomeSlider