/* eslint-disable @next/next/no-img-element */

import Link from 'next/link'
import React, { useEffect, useRef } from 'react'

const Header = () => {
  const headerHeight = useRef()

  useEffect(() => {
    if(headerHeight) {
    }
  }, [])
  
  return (
    <>
      <div style={{height: headerHeight?.current?.clientHeight}}></div>
      <header ref={headerHeight}>
        <div className="container--responsive flex flex--align-items-center flex--justify-content-between">
          <Link href="#" >
            <img src="http://fucen-sewing.com/wp-content/uploads/2021/02/logofucen1.png" alt="fucen" />
          </Link>
          <nav>
            <ul className="header--links flex flex--align-items-center flex--justify-content-center">
              <li className='mr--20'>
                <Link href="">
                  <a>
                    <span className="fs--16 font--family color--white">About</span>
                  </a>
                </Link>
              </li>
              <li className='mr--20 moreLinks'>
                <Link href="">
                  <a>
                    <span className="fs--16 font--family color--white">Segment</span>
                  </a>
                </Link>
                <ul className="header--links-sub flex flex--align-items-center flex--justify-content-center block--center bg--white" style={{top : headerHeight?.current?.clientHeight - 10}}>
                  <li>
                    <Link href="#">
                      <a className='block font--center'>
                        <img src="http://fucen-sewing.com/wp-content/uploads/2021/04/auto.png" alt="fucen" className='block--inline' />
                        <span className="fs--18 font--family font--bold color--primary block--inline mt--20">Automobile</span>
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <a className='block font--center'>
                        <img src="http://fucen-sewing.com/wp-content/uploads/2021/03/garment2.png" alt="fucen" className='block--inline' />
                        <span className="fs--18 font--family font--bold color--primary block--inline mt--20">Healthcare</span>
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <a className='block font--center'>
                        <img src="http://fucen-sewing.com/wp-content/uploads/2021/04/Leather.png" alt="fucen" className='block--inline' />
                        <span className="fs--18 font--family font--bold color--primary block--inline mt--20">Hospitality</span>
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <a className='block font--center'>
                        <img src="http://fucen-sewing.com/wp-content/uploads/2021/04/home.png" alt="fucen" className='block--inline' />
                        <span className="fs--18 font--family font--bold color--primary block--inline mt--20">Garment</span>
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <a className='block font--center'>
                        <img src="http://fucen-sewing.com/wp-content/uploads/2021/04/medical.png" alt="fucen" className='block--inline' />
                        <span className="fs--18 font--family font--bold color--primary block--inline mt--20">Leather</span>
                      </a>
                    </Link>
                  </li>
                </ul>
              </li>
              <li className='mr--20 moreLinks'>
                <Link href="">
                  <a>
                    <span className="fs--16 font--family color--white">Collection</span>
                  </a>
                </Link>
                <ul className="header--links-sub flex flex--align-items-center  block--center bg--white" style={{top : headerHeight?.current?.clientHeight - 10}}>
                  <li>
                    <Link href="#">
                      <a className='block font--center'>
                        <img src="https://fucen-sewing.com/wp-content/uploads/2022/08/FC-1591-1-300x185_c.jpg" alt="fucen" className='block--inline rounded--img' />
                        <span className="fs--18 font--family font--bold color--primary block--inline mt--20">Single Needle</span>
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <a className='block font--center'>
                        <img src="	https://fucen-sewing.com/wp-content/uploads/2022/08/FC-1342-300x185_c.jpg" alt="fucen" className='block--inline rounded--img' />
                        <span className="fs--18 font--family font--bold color--primary block--inline mt--20">Twin Needle</span>
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <a className='block font--center'>
                        <img src="https://fucen-sewing.com/wp-content/uploads/2021/03/FC-3830D-P-300x165_c.png" alt="fucen" className='block--inline rounded--img'/>
                        <span className="fs--18 font--family font--bold color--primary block--inline mt--20">Triple Needle</span>
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <a className='block font--center'>
                        <img src="https://fucen-sewing.com/wp-content/uploads/2022/08/FX-4D-300x185_c.jpg" alt="fucen" className='block--inline rounded--img' />
                        <span className="fs--18 font--family font--bold color--primary block--inline mt--20">Overlook</span>
                      </a>
                    </Link>
                  </li>
                </ul>
              </li>
              <li className='mr--20 moreLinks'>
                <Link href="">
                  <a>
                    <span className="fs--16 font--family color--white">Gallery</span>
                  </a>
                </Link>
                <ul className="header--links-sub flex flex--align-items-center block--center bg--white" style={{top : headerHeight?.current?.clientHeight - 10}}>
                  
                  <a className='title block--center'>
                    Gallery
                  </a>
                  <li className="block--center">
                    <Link href="#">
                      <a className='block font--center'>
                        <span className="fs--18 font--family font--bold color--primary block--inline boxShadow">Images</span>
                      </a>
                    </Link>
                  </li>
                  <li className="block--center">
                    <Link href="#">
                      <a className='block font--center'>
                        
                        <span className="fs--18 font--family font--bold color--primary block--inline">Videos</span>
                      </a>
                    </Link>
                  </li>
                  <li className="block--center">
                    <Link href="#">
                      <a className='block font--center'>
                        
                        <span className="fs--18 font--family font--bold color--primary block--inline">E-catalogue</span>
                      </a>
                    </Link>
                  </li>
                  <li className="block--center">
                    <Link href="#">
                      <a className='block font--center'>
                      
                        <span className="fs--18 font--family font--bold color--primary block--inline">Documents</span>
                      </a>
                    </Link>
                  </li>
                </ul>
              </li>
              <li className='mr--20'>
                <Link href="">
                  <a>
                    <span className="fs--16 font--family color--white">Contacts</span>
                  </a>
                </Link>
              </li>
            </ul>
          </nav>
          <button className="header--quote font--uppercase fs--16 font--family font--bold color--black bg--white block">
            <span className='fs--18 font--bolder'>Get</span> <br /> quote
          </button>
        </div>
      </header>
    </>
  )
}

export default Header