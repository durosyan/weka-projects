/* https://www.gatsbyjs.com/docs/gatsby-config/ */
module.exports = {
  siteMetadata: {
    title: "weka projects",
    siteUrl: "https://www.wekaprojects.co.nz",
    description: "online store for weka projects",
  },
  plugins: [
    "gatsby-theme-material-ui",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-layout",
      options: {
        component: require.resolve("./src/components/Layout.js"),
      }
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Weka Projects",
        short_name: "Weka",
        icon: "src/assets/logo-feathers.svg",
        start_url: "/",
        background_color: "#262626",
        theme_color: "#e5e5e5",
        display: "standalone",
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/
        }
      }
    },
    {
      resolve: "gatsby-theme-material-ui",
      options: {
        webFontsConfig: {
          fonts: {
            google: [
              {
                family: "Amatic SC",
                variants: ["400", "700"],
              },
              {
                family: "Permanent Marker",
                variants: ["400"],
              }
            ],
          },
        },
      },
    },
  ],
};
