import React from 'react'

import { Helmet } from 'react-helmet'

import './frame1.css'

const Frame1 = (props) => {
  return (
    <div className="frame1-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="frame1-frame1">
        <img
          alt="Frame4724"
          src="/playground_assets/frame4724-arl4.svg"
          className="frame1-frame"
        />
        <img
          alt="tshirt10114736"
          src="/playground_assets/tshirt10114736-e42g-600h.png"
          className="frame1-tshirt1011"
        />
        <span className="frame1-text">
          <span>T-Shirt</span>
        </span>
        <div className="frame1-group23">
          <span className="frame1-text2">
            <span>Customize</span>
          </span>
          <img
            alt="Rectangle1054736"
            src="/playground_assets/rectangle1054736-e45-300w.png"
            className="frame1-rectangle105"
          />
        </div>
      </div>
    </div>
  )
}

export default Frame1
