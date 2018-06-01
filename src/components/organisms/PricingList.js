import React from 'react'
import { arrayOf, shape, string, bool } from 'prop-types'

const PricingList = ({prices}) => (
  <ul className="PricingList">
    {prices.map(el => (
      <li key={el.id} className="PricingList-item">
        <h3 className="PricingList-item-title">{el.title}</h3>
        <p className="PricingList-item-price">
          <span className="PricingList-item-currency">{el.currency}</span>
          <span>{el.price}</span>
        </p>
        <p className={el.mostPopular ? 'PricingList-item-desc' : 'PricingList-item-desc -border'}>{el.desc}</p>
        {el.mostPopular ?
          <p className="PricingList-item-popular">our most popular</p> :
          null
        }
        <ul className="PricingList-item-advantage">
          {el.advantage.map(el => (
            <li key={el}>{el}</li>
          ))}
        </ul>
      </li>
    ))}
  </ul>
)

PricingList.propTypes = {
  prices: arrayOf(
    shape({
      id: string,
      title: string,
      currency: string,
      price: string,
      desc: string,
      mostPopular: bool,
      advantage: arrayOf(string)
    })
  )
}

export default PricingList