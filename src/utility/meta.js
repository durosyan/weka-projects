import React from "react"
import { Helmet } from "react-helmet"

export default () => {
  return (
    <Helmet defer={false} defaultTitle={'wekaprojects'}>
      <meta name="docsearch:version" content="2.0" />
      <meta
        name="viewport"
        content="width=device-width,initial-scale=1,shrink-to-fit=no,viewport-fit=cover"
      />

      <meta property="og:type" content="website" />
      <meta property="og:url" content="wekaprojects.co.nz" />
      <meta property="og:site_name" content="weka projects" />
      <meta property="og:image:alt" content="feathers from a weka bird" />
      <meta property="og:image:width" content="512" />
      <meta property="og:image:height" content="512" />
      <meta property="og:image:" content="https://wekaprojects.co.nz/icons/icon-512x512.png" />
    </Helmet>
  )
}