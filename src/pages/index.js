import React from 'react'
import Link from 'gatsby-link'

const BlogPost = ({node}) => {
    return (
        <div style={{
            marginBottom: '1.5rem',
            padding: '1.5rem',
            border: '1px solid #ccc'
        }}>
            <h3><Link to={node.slug}>{node.title}</Link></h3>
            <div>
                <div>
                    <Link to={node.slug}><img src={node.featuredImage.responsiveResolution.src} /></Link>
                </div>
                <div>{node.content.childMarkdownRemark.excerpt}</div>
            </div>
        </div>
    )
}

const IndexPage = (props) => {

    console.log(props)
    return (
        <div>
            {props.data.allContentfulBlog.edges.map((edge) => <BlogPost key={edge.node.id} node={edge.node} />)}
        </div>
    )
}

export default IndexPage

export const pageQuery = graphql`
    query pageQuery {
        allContentfulBlog(filter: {
            node_locale: {eq: "en-US"}
        }) {
            edges {
                node {
                    id
                    title
                    slug
                    featuredImage {
                        responsiveResolution(width:300, height:300) {
                            src
                        }
                    }
                    content {
                        childMarkdownRemark {
                            excerpt
                        }
                    }
                }
            }
        }
    }
`