export default {
  name: "about",
  type: "document",
  title: "About Me",
  fields: [
    {
      name: "aboutMe",
      type: "aboutMePortableText",
      title: "About Me",
    },
  ],
  preview: {
    select: {
      title: "aboutMe",
    },
  },
};
