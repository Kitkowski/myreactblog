import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/header'
import './index.css'
import Link from "gatsby-link";

const ListLink = props =>
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>
      {props.children}
    </Link>
  </li>


const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Header siteTitle={data.site.siteMetadata.title} />
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '0px 1.0875rem 1.45rem',
        paddingTop: 0,
      }}
    >
      {children()}
    </div>
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}


export default ({ children }) =>
  <div >
    <header className="pa3 pa4-ns">
      <Link className="link dim black b f6 f5-ns dib mr3" to="/">
        <h3>MyReactBlog</h3>
      </Link>
      <ul className="link f6 f5-ns dib mr3">
        <ListLink to="/">Home</ListLink>
        <ListLink to="/page-2/">About</ListLink>
        <ListLink to="/page-3/">Contact</ListLink>
        <ListLink to="/counter/">Contact</ListLink>
      </ul>
    </header>
    {children()}
    <footer>
         <Link to="/">
        <p className="tc ma2">2018 © All Rights Reserved </p>
      </Link>
    </footer>
  </div>

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
