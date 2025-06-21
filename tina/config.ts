import { defineConfig, TinaField } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

const headerField: TinaField = {
  type: "object",
  name: "header",
  label: "Header",
  fields: [
    {
      type: "image",
      name: "overlay_image",
      label: "Overlay Image",
    },
    {
      type: "string",
      name: "overlay_position",
      label: "Overlay Position",
    },
    {
      type: "number",
      name: "overlay_filter",
      label: "Overlay Filter",
    },
    {
      type: "string",
      name: "caption",
      label: "Caption",
    },
  ],
};


export default defineConfig({
  branch,

  // Get this from tina.io
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  // Get this from tina.io
  token: process.env.TINA_TOKEN,

  build: {
    outputFolder: "admin",
    publicFolder: "./",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "./",
    },
  },
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
  schema: {
    collections: [
      {
        name: "publications",
        label: "Publications",
        path: "_publications",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "permalink",
            label: "Permalink",
            required: true,
          },
          {
            type: "string",
            name: "excerpt",
            label: "Excerpt"
          },
          {
            type: "datetime",
            name: "date",
            label: "Date",
            required: true,
          },
          {
            type: "string",
            name: "venue",
            label: "Venue"
          },
          {
            type: "string",
            name: "paperurl",
            label: "URL"
          },
          {
            type: "string",
            name: "citation",
            label: "Citation"
          },
          {
            type: "string",
            name: "type",
            label: "Type",
            options: [
              {
                value: "article",
                label: "Article",
              }
            ]
          },
         headerField,
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
        ],
      },
      // {
      //   name: "projects",
      //   label: "Projects",
      //   path: "_projects",
      //   fields: [],
      // },
      // {
      //   name: "student-work",
      //   label: "Student Work",
      //   path: "_student-work",
      //   fields: [],
      // },
      // {
      //   name: "talks",
      //   label: "Talks",
      //   path: "_talks",
      //   fields: [],
      // },
      // {
      //   name: "teaching-materials",
      //   label: "Teaching Materials",
      //   path: "_teaching-materials",
      //   fields: [],
      // },
      // {
      //   name: "courses",
      //   label: "Courses",
      //   path: "_courses",
      //   fields: [],
      // },
    ],
  },
});
