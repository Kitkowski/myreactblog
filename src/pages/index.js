import React from 'react'
import Link from 'gatsby-link'
import 'tachyons';

import PostLink from "../components/post-link";

const IndexPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const Posts = edges
    .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
    .map(edge => <PostLink key={edge.node.id} post={edge.node} />);

  return <div className='tc bg-light-green pa3 shadow-5'>{Posts}</div>;
};

export default IndexPage;
         
export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            path
            title
          }
        }
      }
    }
  }
`;


//export default () => (
 // <div className='tc bg-light-green pa3 shadow-5'>
   // <h1>Hi people</h1>
   // <p>Welcome to your new Gatsby site.</p>
   // <p>Now go build something great.</p>
   
   // <Link to="/page-2/">Go to page 2</Link><br />
   //  <Link to="/page-3/">Go to page 3</Link><br />
 //   <Link to="/counter/">Counter</Link>
    // <p><img src="https://source.unsplash.com/random/400x200" alt="" /></p>
//  </div>
//);


