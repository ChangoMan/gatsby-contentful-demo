import React, { Component } from 'react'
import PropTypes from 'prop-types'

class BlogPost extends Component {
    render() {
        console.log(this.props)
        const { title, content } = this.props.data.contentfulBlog
        return (
            <div>
                <h1 style={{
                    borderBottom: '1px solid #ccc',
                    paddingBottom: '0.5rem'
                }}>
                    {title}
                </h1>
                <div dangerouslySetInnerHTML={{__html:content.childMarkdownRemark.html}} />
            </div>
        )
    }
}

BlogPost.PropTypes = {
    data: PropTypes.object.isRequired
}

export default BlogPost

export const pageQuery = graphql`
    query blogPostQuery($slug: String!){
        contentfulBlog(slug: {eq: $slug}) {
            title
            slug
            createdAt
            featuredImage {
                file {
                    url
                    fileName
                    contentType
                }
            }
            content {
                childMarkdownRemark {
                    html
                }
            }
        }
    }
`