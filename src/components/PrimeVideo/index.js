import MovieSlider from '../MoviesSlider'
import './index.css'

const PrimeVideo = props => {
  const {moviesList} = props
  return (
    <div className="bg-container">
      <img
        className="image"
        alt="prime video"
        src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
      />
      <div className="movie-container">
        <h1 className="movie-title">Action Movies</h1>
        <MovieSlider
          moviesList={moviesList.filter(
            eachItem => eachItem.categoryId === 'ACTION',
          )}
        />
      </div>
      <div className="movie-container">
        <h1 className="movie-title">Comedy Movies</h1>
        <MovieSlider
          moviesList={moviesList.filter(
            eachItem => eachItem.categoryId === 'COMEDY',
          )}
        />
      </div>
    </div>
  )
}

export default PrimeVideo
