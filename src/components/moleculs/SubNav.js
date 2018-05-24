import React from 'react'

import { PopularLinks, SubLinks } from './'

import './SubNav.css'

const SubNav = ({popularLinks, subLinks}) => (
  <div className="SubNav-wrapper">
    <div className="SubNav">
      <div className="SubNav-item">
        <PopularLinks popularLinks={popularLinks}/>
      </div>
      <div className="SubNav-item">
        <SubLinks subLinks={subLinks}/>
      </div>
    </div>
  </div>
)

export default SubNav