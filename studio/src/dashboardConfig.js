export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "60c4f0469e716b4790257249",
                  title: "Sanity Studio",
                  name: "blog-studio-kbrtr5vs",
                  apiId: "0a4b2cc6-0c42-4538-9cc6-01feed9dc995",
                },
                {
                  buildHookId: "60c4f046ceffa8628493baf7",
                  title: "Blog Website",
                  name: "blog-web-xm9qx33e",
                  apiId: "0a016e72-bd03-49f3-857d-a1477df5b74b",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/evinaik/blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://blog-web-xm9qx33e.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
