import React from 'react'
import PropTypes from 'prop-types'
import { FeaturedPostTemplate } from '../../templates/feature-page'

const FeaturedPostPreview = ({ entry, widgetFor }) => (
  <FeaturedPostTemplate
    title={entry.getIn(['data', 'title'])}
  />
)

FeaturedPostPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default FeaturedPostPreview
