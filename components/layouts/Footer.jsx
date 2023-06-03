/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import React, { useState } from 'react'

const Footer = () => {
  const [activeTab, setActiveTab] = useState('Head Office')
  return (
    <footer className='bg--silver pt--30 pb--30' id='footer'>
      <div className="container--responsive">
        <div className="footer--tabs-container">
          <ul className="footer--tabs bg--white flex flex--align-items-center flex--justify-content-center mb--30">
            {
              tabs.map((tab, index) => (
                <li className={` mr--10`} key={`tabs--${index}`}>
                  <button className={`fs--18 font--family font--medium ${activeTab == tab ? 'color--white bg--primary' : ''}`} onClick={() => setActiveTab(tab)}>
                    {tab}
                  </button>
                </li>
              ))
            }
          </ul>
          {
            activeTab == "Head Office" &&
            <div className='font--center'>
              <address className='fs--16 font--family'>
                Fucen Sewing Machine Co. Pte. Ltd.
                #68, Circular Road, #02-01, Singapore - 049422
              </address>
              <span className="fs--16 font--family block mt--5 font--medium">
                Tel : <Link href="tel:+86-576-88220283">+86-576-88220283</Link>
              </span>
              <span className="fs--16 font--family block mt--5 font--medium">
                Fax : <Link href="fax:+86-576-88220287">+86-576-88220287</Link>
              </span>
              <span className="fs--16 font--family block mt--5 font--medium">
                Email : <Link href="mailto:info@fucen-sewing.com" >info@fucen-sewing.com</Link>
              </span>
            </div>
          }
          {
            activeTab == "India" &&
            <address className="font--center fs--16 font--family">
              STI Apparel Automation Pvt Ltd.
              B-42, Phase-I, Okhla Industrial Area,
              New Delhi - 110020, India
            </address>
          }
          {
            activeTab == "Hong-Kong" &&
            <div className="font--center">
              <address className="fs--16 font--family">
                Fucen Sewing Machine Co. Ltd.
                414, 4/F, International Plaza, 20 Sheung Yuet Road,
                Kowloon Bay, Kowloon, Hong Kong,
              </address>
              <span className="fs--16 font--family block mt--5 font--medium">
                Email : <Link href="mailto:info@fucen-sewing.com" >info@fucen-sewing.com</Link>
              </span>
            </div>
          }
          {
            activeTab == "Contact" &&
            <div className="font--center">
              <span className="fs--16 font--family block mt--5 font--medium">
                Tel : <Link href="tel:+919999909007">+91 9999 909 007</Link>
              </span>
              <span className="fs--16 font--family block mt--5 font--medium">
                Email : <Link href="mailto:leads@stiaapl.com" >leads@stiaapl.com</Link>
              </span>
              <span className="fs--16 font--family block mt--5 font--medium">
                <Link href="https://goo.gl/maps/Y9FhbmRA3zo18zMD7">Open in Google Maps</Link>
              </span>
            </div>
          }
        </div>
        <div className="footer--container flex flex--align-items-center flex--justify-content-between">
          <div className="">
            <Link href="/">
              <img src="https://fucen-sewing.com/wp-content/uploads/2021/02/90logo.png" alt="fucen" />
            </Link>
            <span className="fs--14 font--family block">
              © 2015 All rights reserved. Buy <Link href="/" className='font--medium'>Fucen </Link>
            </span>
          </div>
          <ul className="footer--list flex flex--align-items-end flex--justify-content-between">
          <li className='mr--20'>
              <h5 className="fs--16 font--family font--medium">
                Get Social
              </h5>
              <ul className="footer--list-social flex flex--align-items-center flex--justify-content-between mt--10">
              <a href='https://www.facebook.com/fucenindustrialsewing/' target="_blank" rel="noreferrer">
                <li className='mr--20'>
                  <Link href="">
                    <img src="/assets/images/facebook-svgrepo-com.svg" alt="fucen" />
                  </Link>
                </li>
                </a>
                <a href="https://twitter.com/FucenSewing?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" target="_blank" rel="noreferrer">
                <li className='mr--20'>
                  <Link href="#">
                    <img src="/assets/images/twitter-154-svgrepo-com.svg" alt="fucen" />
                  </Link>
                </li>
                </a>
                <a href="https://in.pinterest.com/fucensewingmachine/" target="_blank" rel="noreferrer">
                <li className='mr--20'>
                  <Link href="#">
                    <img src="/assets/images/pinterest-svgrepo-com.svg" alt="fucen" />
                  </Link>
                </li>
                </a>
                <a href="https://www.linkedin.com/company/fucen-sewing-machine/" target='_blank' rel="noreferrer">
                <li>
                  <Link href="#">
                    <img src="/assets/images/linkedin-161-svgrepo-com.svg" alt="fucen" />
                  </Link>
                </li>
                </a>
              </ul>
            </li>
            <li className='mr--20'>
              <Link href="#">
                <span className="fs--14 font--family font--medium">
                  Disclaimer
                </span>
              </Link>
            </li>
            <li className='mr--20'>
              <Link href="#">
                <span className="fs--14 font--family font--medium">
                  FAQs
                </span>
              </Link>
            </li>
            <li>
              <Link href="#">
                <span className="fs--14 font--family font--medium">
                  Privacy Policy
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer

const tabs = ['Head Office', 'India', 'Hong-Kong', 'Contact']