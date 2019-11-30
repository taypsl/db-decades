import React from 'react'
import PropTypes from 'prop-types'

const SongCard = ({ data }) => (
  <div className="columns"
    {data.map(song=> (
      <div key={song.rank} className="column"></div>
    ))}
  </div>
)

Songs.propTypes = {
  data: PropTypes.arrayOf(
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