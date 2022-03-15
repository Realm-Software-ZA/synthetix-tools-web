import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import { getAllPostsForHome, getAllCategories } from "../lib/api";
import Head from "next/head";
import Image from "next/image";
import dynamic from "next/dynamic";

import SynthetixFooter from "../components/SynthetixFooter";
import Body from "../components/Body/Body";
import StarField from "../components/StarField";

export default function Index({ allPosts, categories }) {
  return typeof window !== "undefined" ? (
    <Router>
      <Head>
        <title>Synthetix Tools</title>
      </Head>
      <div>
        <div className="fixed w-full h-full">
          <Image
            src={"/img/background.jpg"}
            layout="fill"
            objectFit="cover"
            quality={100}
          />
        </div>
        <StarField />
        <Body tools={allPosts} categories={categories} />
        <SynthetixFooter />
      </div>
    </Router>
  ) : null;
}

export async function getStaticProps() {
  const allPosts = await getAllPostsForHome();
  const categories = await getAllCategories();

  return {
    props: {
      allPosts,
      categories,
    },
  };
}
