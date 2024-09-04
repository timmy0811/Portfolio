import { defineField, defineType } from "sanity";
import { BiUser } from "react-icons/bi";
import React from "react"; // Import React to define the component

export default defineType({
  name: "author",
  title: "Author",
  type: "document",
  icon: typeof BiUser,
  fields: [
    defineField({
      name: "name",
      title: "Author Name",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "photo",
      title: "Profile Photo",
      type: "image",
      description: "Upload a profile photo. Recommended size 320 x 320",
      options: {
        hotspot: true,
        metadata: ["lqip"],
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "twitterUrl",
      title: "Twitter URL",
      type: "url",
      validation: (rule) => rule.required(),
    }),
  ],
});
