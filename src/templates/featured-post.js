import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import SongCard from '../components/SongCard'
import Content, { HTML } from '../components/Content'

export const FeaturePageTemplate ({
  featuredImage,
  title,
  description,
  body,
  songs,
}) => (
  <div className="content">
    <div
      className="full-width-image-container margin-top-0"
      style={{
        backgroundImage: `url(${
          !!featuredImage.childImageSharp ? featuredImage.childImageSharp.fluid.src : featuredImage
        })`,
      }}
    >
      <h2
        className="has-text-weight-bold is-size-1"
        style={{
          boxShadow: '0.5rem 0 0 #f40, -0.5rem 0 0 #f40',
          backgroundColor: '#f40',
          color: 'white',
          padding: '1rem',
        }}
      >
        {title}
      </h2>
    </div>
    <section className="section section--gradient">
      <div className="container">
        <div className="section">
          <div className="columns">
            <div className="column is-7 is-offset-1">
            <h3>{description}</h3>
              <p>{body}</p>
            </div>
          </div>
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <SongCard gridItems={songs} />
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
)

FeaturePageTemplate.propTypes = {
  featuredImage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  description: PropTypes.string,
  body: PropTypes.string,
  songs: PropTypes.array,
}

// songs: PropTypes.shape({
//     songTitle: PropTypes.string,
//     artist: PropTypes.string,
//     songImage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
//     imageAttribute: PropTypes.string,
//     rank: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
//     year: PropTypes.string,
//   }),

const FeaturePage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <FeaturePageTemplate
        featuredImage={frontmatter.featuredImage}
        title={frontmatter.title}
        description={frontmatter.description}
        body={frontmatter.body}
        songs={frontmatter.songs}
      />
    </Layout>
  )
}

FeaturePage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default FeaturePage

export const featurePageQuery = graphql`
  query FeaturePage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        body
        description
        songs {
          songImage {
            childImageSharp {
              fluid(maxWidth: 240, quality: 64) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          songTitle
          artist
          album
          imageAttribute
          rank
          year
          blurb
          videoUrl
          genres
          misc
        }
        heading
        description
        body
        tags
      }
    }
  }
`