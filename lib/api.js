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

export async function getAllCategories() {
  return await client.fetch(`*[_type == "category"]`);
}

export async function getAllPostsForHome() {
  try {
    return await client.fetch(`*[_type == "post"] {
      ${postFields}
    }`);
  } catch (err) {
    console.log(err);
  }
}
