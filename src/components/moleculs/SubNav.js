import React from 'react'
import { arrayOf, object } from 'prop-types'

import { PopularLinks, SubLinks } from './'

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

SubNav.propTypes = {
  popularLinks: arrayOf(object)
}

export default SubNav