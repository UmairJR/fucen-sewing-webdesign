/* eslint-disable @next/next/no-img-element */
import React from 'react'
import HomeSlider from '../components/core/HomeSlider'
import Link from 'next/link'
import ProductCard from '../components/layouts/ProductCard'

const Home = () => {
  return (
    <>
      <HomeSlider autoPlay={true} isInfinite={true}>
        <li>
          <Link href="#">
            <a>
              <img src="https://fucen-sewing.com/wp-content/uploads/2022/09/WhatsApp-Image-2022-09-09-at-18.02.25.jpeg" alt="sewing" className='block' />
            </a>
          </Link>
        </li>
        <li>
          <Link href="#">
            <a>
              <img src="https://fucen-sewing.com/wp-content/uploads/2022/09/WhatsApp-Image-2022-09-09-at-18.02.31.jpeg" alt="sewing" className='block' />
            </a>
          </Link>
        </li>
        <li>
          <Link href="#">
            <a>
              <img src="https://fucen-sewing.com/wp-content/uploads/2022/09/WhatsApp-Image-2022-09-09-at-18.02.27.jpeg" alt="sewing" className='block' />
            </a>
          </Link>
        </li>
        <li>
          <Link href="#">
            <a>
              <img src="https://fucen-sewing.com/wp-content/uploads/2022/09/WhatsApp-Image-2022-09-09-at-18.02.25.jpeg" alt="sewing" className='block' />
            </a>
          </Link>
        </li>
      </HomeSlider>
      <section className='container--responsive pt--80 pb--100'>
        <h2 className="fs--30 font--family font--bold color--primary font--center mb--20">LATEST PRODUCTS</h2>
        <HomeSlider autoPlay={true} isInfinite={true} slides={3}>
          {
            cardArray.map((data, index) => (
              <ProductCard cardInfo={data} key={`products--${index}`} />
            ))
          }
        </HomeSlider>
      </section>
    </>
  )
}

export default Home

const cardArray = [
  {
    sku: {
      sku_img_url: 'https://fucen-sewing.com/wp-content/uploads/2022/08/FT-01-300x185_c.jpg'
    },
    name: 'Best Overlock Sewing Machine FC-837F-504M2-04',
    desc: 'Super high speed 3 thread Overlock Sewing Machine (general plain seaming)'
  },
  {
    sku: {
      sku_img_url: 'https://fucen-sewing.com/wp-content/uploads/2022/08/FT-01-300x185_c.jpg'
    },
    name: 'Best Overlock Sewing Machine FC-837F-504M2-04',
    desc: 'Super high speed 3 thread Overlock Sewing Machine (general plain seaming)'
  },
  {
    sku: {
      sku_img_url: 'https://fucen-sewing.com/wp-content/uploads/2022/08/FT-01-300x185_c.jpg'
    },
    name: 'Best Overlock Sewing Machine FC-837F-504M2-04',
    desc: 'Super high speed 3 thread Overlock Sewing Machine (general plain seaming)'
  },
  {
    sku: {
      sku_img_url: 'https://fucen-sewing.com/wp-content/uploads/2022/08/FT-01-300x185_c.jpg'
    },
    name: 'Best Overlock Sewing Machine FC-837F-504M2-04',
    desc: 'Super high speed 3 thread Overlock Sewing Machine (general plain seaming)'
  },
]
