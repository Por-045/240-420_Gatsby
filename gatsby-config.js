module.exports = {
  pathPrefix: "/240-420_Gatsby",
  siteMetadata: {
    title: `Student Information`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-transformer-sharp`,
     `gatsby-plugin-sharp`,
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
