import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useLocation,
} from "react-router-dom";

import { getAllPostsForHome, getAllCategories } from "../lib/api";
import Head from "next/head";
import Image from "next/image";
import dynamic from "next/dynamic";

import SynthetixFooter from "../components/SynthetixFooter";
import Body from "../components/Body/Body";
import { CategoryEntity } from "../components/CategorySelector/ICategorySelector";

const StarfieldAnimation = dynamic(() => import("react-starfield-animation"), {
  ssr: false,
});

const Starfield = React.memo(() => {
  let width = 400;
  let height = 400;
  if (typeof window !== "undefined") {
    width = window?.innerWidth;
    height = window?.innerHeight;
  }

  return typeof window !== "undefined" ? (
    <StarfieldAnimation
      // @ts-ignore
      numParticles={200}
      style={{
        position: "absolute",
        zIndex: 0,
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        width: width,
        height: height,
      }}
    />
  ) : null;
});

export default function Index({ allPosts, categories }) {
  return typeof window !== "undefined" ? (
    <Router>
      <Head>
        <title>Synthetix Tools</title>
      </Head>
      <div className="App">
        <div className="absolute w-[100%] h-[100%]">
          <Image
            src={"/img/background.jpg"}
            layout="fill"
            objectFit="cover"
            quality={100}
          />
        </div>

        <Starfield />
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
    props: { allPosts, categories },
    revalidate: 1,
  };
}
