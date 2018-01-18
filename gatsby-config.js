module.exports = {
    siteMetadata: {
        title: 'Gatsby Default Starter',
    },
    plugins: [
        {
            resolve: `gatsby-source-contentful`,
            options: {
                spaceId: `3cqqtds2aala`,
                accessToken: `411d3516481eb0c406901300aa47a635febc86eb9bfc81f452f13abee0116fed`,
            },
        },
        'gatsby-plugin-react-helmet',
        'gatsby-transformer-remark'
    ],
};
