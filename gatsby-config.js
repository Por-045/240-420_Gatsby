module.exports = {
  siteMetadata: {
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    // ... some gatsby plugins

    // You can take advantage of the following plugins with gatsby-source-directus

    // `gatsby-plugin-image`,
    // `gatsby-transformer-sharp`,
    // `gatsby-plugin-sharp`,

    // Finally our plugin
    {
        resolve: '@directus/gatsby-source-directus',
        options: {
            url: `https://a1aen8jt.directus.app/`, // Fill with your Directus instance address
            auth: {
                token: 'GbsvT8VxIV6K5ugZOY8EKvyEO-gJHIQ0', // You can use a static token from an user

                // Or you can use the credentials of an user
                // email: "johndoe@directus.cloud",
                // password: "mysecretpassword",
            },
        },
    },
],

}
