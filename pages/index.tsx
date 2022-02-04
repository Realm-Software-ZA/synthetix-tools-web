import React, { useState } from "react";

import { getAllPostsForHome, getAllCategories } from "../lib/api";
import Head from "next/head";
import Image from "next/image";
import dynamic from "next/dynamic";

import SynthetixFooter from "../components/SynthetixFooter";
import Body from "../components/Body/Body";

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
      numParticles={100}
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
  const [activeSection, setActiveSection] = useState<string>("All");

  return (
    <>
      <Head>
        <title>Synthetix Tools</title>
      </Head>
      <div className="App">
        <div className="absolute w-[100%] h-[100%]">
          <Image
            src={"/img/background.jpg"}
            width="100%"
            height="100%"
            layout="fill"
            objectFit="cover"
            quality={100}
          />
        </div>

        <Starfield />
        <Body
          tools={allPosts}
          activeSection={activeSection}
          setActiveSection={setActiveSection}
          categories={categories}
        />

        <SynthetixFooter />
      </div>
    </>
  );
}

export async function getStaticProps({ preview = false }) {
  const allPosts = await getAllPostsForHome(preview);
  const allCategories = await getAllCategories();

  const categories = allCategories.map((category) => category.title);

  console.log({ allPosts, categories });

  return {
    props: { allPosts, categories, preview },
    revalidate: 1,
  };
}
