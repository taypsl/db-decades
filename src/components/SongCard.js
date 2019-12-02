import React from 'react'
import PropTypes from 'prop-types'

const SongCard = ({ gridItems }) => (
  <div className="columns">
    {gridItems.map(song=> (
      <div key={song.rank} className="column">{ song.artist }</div>
    ))}
  </div>
)

SongCard.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      songTitle: PropTypes.string,
      artist: PropTypes.string,
      year: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      rank: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      blurb: PropTypes.string,
      genres: PropTypes.array,
    })
  ),
}

export default SongCard