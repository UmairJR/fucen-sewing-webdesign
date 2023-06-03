/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import React, { useState } from 'react';
import Button from '../core/Button';
// import QuickView from './PLP/QuickView';

const ProductCard = ({ cardInfo }) => {
  const [showModal, setShowModal] = useState(false)
  return (
    <>
      <div className="card--product font--center mr--40">
        <div className="image--container">
          <img src={cardInfo?.sku?.sku_img_url} alt="mercentile" />
          <Button className="bg--white color--primary btn" onClick={() => setShowModal(true)}> Quick Look </Button>
        </div>
        <h4 className="fs--20 font--bold font--family mt--30 name mb--15">{cardInfo?.name}</h4>
        <p className="fs--16 font--family">{cardInfo.desc}</p>
        <Link href={`/p/${cardInfo?.slug}`}>
          <a className="btn--background btn detail-btn mt--20">
            View Details
          </a>
        </Link>
      </div>
      {/* <QuickView show={showModal} setShow={setShowModal} modalList={cardInfo} /> */}


    </>
  )
}

export default ProductCard
