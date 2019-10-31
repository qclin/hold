import React from "react";
import path from "path";
import axios from "axios";

export default {
  basePath: "/",
  getRoutes: async () => {
    const { data: tags } = require("./public/doc/tags.json");
    const { data: projects } = require("./public/doc/projects.json");
    // const tagComponents = tags.map(tag => ({
    //   path: `/#${tag.value}`,
    //   template: "src/components/tags/TagResult",
    //   getData: () => ({
    //     // return relevant projects
    //   })
    // }));

    const projectComponents = projects.map(project => ({
      path: `/projects/${project.id}`,
      template: "src/components/project/Project",
      getData: () => ({
        project
      })
    }));
    return [
      {
        path: "/",
        getData: () => ({
          tags,
          projects
        }),
        children: projectComponents
      }
    ];
  },
  Document: ({
    Html,
    Head,
    Body,
    children,
    state: { siteData, renderMeta }
  }) => (
    <Html lang="en-US">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="stylesheet"
          href="https://unpkg.com/tachyons@4.10.0/css/tachyons.min.css"
        />
      </Head>
      <Body>{children}</Body>
    </Html>
  ),

  plugins: [
    [
      require.resolve("react-static-plugin-source-filesystem"),
      {
        location: path.resolve("./src/pages")
      }
    ],
    require.resolve("react-static-plugin-reach-router"),
    [
      require.resolve("react-static-plugin-sass"),
      {
        includePaths: ["./src/styles/"]
      }
    ],
    require.resolve("react-static-plugin-sitemap")
  ]
};
