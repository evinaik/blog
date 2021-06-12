import React from "react";

const coloredLinkRender = (props) => {
  return <span style={{ backgroundColor: props.color }}>{props.children}</span>;
};

export default {
  name: "aboutMePortableText",
  type: "array",
  title: "Excerpt",
  of: [
    {
      type: "block",
      title: "Block",
      styles: [{ title: "Normal", value: "normal" }],
      lists: [],
      marks: {
        annotations: [
          {
            name: "link",
            type: "object",
            title: "External link",
            blockEditor: {
              render: coloredLinkRender,
            },
            fields: [
              {
                name: "href",
                type: "url",
                title: "URL",
              },
              {
                title: "Open in new tab",
                name: "blank",
                description: "Read https://css-tricks.com/use-target_blank/",
                type: "boolean",
              },
              {
                title: "Color",
                name: "color",
                type: "string",
              },
            ],
          },
        ],
        decorators: [
          { title: "Strong", value: "strong" },
          { title: "Emphasis", value: "em" },
          { title: "Code", value: "code" },
        ],
      },
    },
  ],
};
