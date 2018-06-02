import React from 'react'
import { string, arrayOf, objectOf } from 'prop-types'

import { Wrapper, Slider } from './'
import { SectionHeader } from '../moleculs'
import { Image } from '../atoms'

const TestimonialsSection = ({title, subtitle, testimonials}) => (
  <section className="TestimonialsSection">
    <Wrapper>
      <SectionHeader title={title}
                     subtitle={subtitle}/>
      <Slider slidesCount="3"
              slideMargin="120"
              animationDuration="500"
              timingFunction="ease-out">
        {testimonials.map(el => (
          <div key={el.id} className="Testimonial">
            <p className="Testimonial-text">{el.text}</p>
            <div className="Testimonial-author-wrapper">
              <div className="Testimonial-author-avatar">
                <Image src={el.img} alt={el.author}/>
              </div>
              <div className="Testimonial-author-info">
                <span className="Testimonial-author-name">{el.author}</span>
                <span
                  className="Testimonial-author-position">{el.position}</span>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </Wrapper>
  </section>
)

TestimonialsSection.propTypes = {
  title: string,
  subtitle: string,
  testimonials: arrayOf(objectOf(string))
}

export default TestimonialsSection