import { DocumentIcon } from "@sanity/icons";

export default {
  name: "post",
  title: "Post",
  icon: DocumentIcon,
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "emblemImage",
      title: "Emblem",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "gridImage",
      title: "Grid",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "categories",
      title: "Categories",
      type: "array",
      of: [{ type: "reference", to: { type: "category" } }],
    },
    {
      name: "link",
      title: "Link",
      type: "string",
    },
    {
      name: "body",
      title: "Body",
      type: "blockContent",
    },
  ],

  preview: {
    select: {
      title: "title",
      media: "mainImage",
    },
    prepare(selection) {
      const { author } = selection;
      return Object.assign({}, selection, {
        subtitle: author && `by ${author}`,
      });
    },
  },
};
