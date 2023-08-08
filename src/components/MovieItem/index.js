import Popup from 'reactjs-popup'
import ReactPlayer from 'react-player'
import {IoMdClose} from 'react-icons/io'

import 'reactjs-popup/dist/index.css'
import './index.css'

const MovieItem = props => {
  const {movieItem} = props
  const {thumbnailUrl, videoUrl} = movieItem

  return (
    <div className="thumbnail-container">
      <Popup
        modal
        trigger={
          <img className="thumbnail" alt="thumbnail" src={thumbnailUrl} />
        }
        className="popup-content"
      >
        {close => (
          <div className="video-content-container">
            <button
              className="button"
              data-testid="closeButton"
              type="button"
              onClick={() => close()}
            >
              <IoMdClose size="30" />
            </button>
            <div className="responsive-container">
              <ReactPlayer className="video" url={videoUrl} />
            </div>
          </div>
        )}
      </Popup>
    </div>
  )
}

export default MovieItem
