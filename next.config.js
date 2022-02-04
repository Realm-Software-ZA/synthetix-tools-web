module.exports = {
  images: {
    domains: ["cdn.sanity.io"],
  },
  async rewrites() {
    return [
      {
        source: "/:any*",
        destination: "/",
      },
    ];
  },
};
