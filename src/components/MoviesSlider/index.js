import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import MoviesItem from '../MovieItem'

const MoviesSlider = props => {
  const {moviesList} = props

  const setting = {
    dots: false,
    slidesToShow: 4,
    slidesToScroll: 1,
  }

  return (
    <div className="slide-container">
      <Slider {...setting}>
        {moviesList.map(eachItem => (
          <MoviesItem key={eachItem.id} movieItem={eachItem} />
        ))}
      </Slider>
    </div>
  )
}

export default MoviesSlider
