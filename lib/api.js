import client, { previewClient } from "./sanity";

const getUniquePosts = (posts) => {
  const slugs = new Set();
  return posts.filter((post) => {
    if (slugs.has(post.slug)) {
      return false;
    } else {
      slugs.add(post.slug);
      return true;
    }
  });
};

const postFields = `
  _id,
  name,
  title,
  body,
  categories,
  link,
  parent,
  "emblemImage": emblemImage.asset->url,
  "gridImage": gridImage.asset->url,
`;

const getClient = (preview) => (preview ? previewClient : client);

export async function getAllCategories() {
  const data = await client.fetch(`*[_type == "category"]`);
  return data;
}

export async function getAllPostsForHome() {
  return await getClient().fetch(`*[_type == "post"] {
      ${postFields}
    }`);
}
