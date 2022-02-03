import React, { useState } from "react";

import { getAllPostsForHome } from "../lib/api";
import Head from "next/head";
import Image from "next/image";
import dynamic from "next/dynamic";

import { SectionType } from "../components/Section/ISection";

import SynthetixFooter from "../components/SynthetixFooter";
import Body from "../components/Body/Body";

const filters = ["All", "Tools", "Bridges", "Guides", "News"];
const layoutSections = Array.from({ length: 4 }, (v, i) => i);

const StarfieldAnimation = dynamic(() => import("react-starfield-animation"), {
  ssr: false,
});

export default function Index({ allPosts, preview }) {
  const heroPost = allPosts[0];
  const morePosts = allPosts.slice(1);

  const [activeSection, setActiveSection] = useState<SectionType>("All");

  const items = [
    {
      grid: 2,
      element: 12,
      title: "Teleportr",
      description:
        "We all know the pains of high Ethereum gas fees, that’s why Layer 2 exists in the first place. So we know how much it hurts when the gas fees for trying to escape… Layer 1 are outrageous. This is why we built Teleportr. It is a cheaper yet more centralized alternative to the Optimism Gateway.",
      link: { text: "Link to Teleportr", url: "http://localhost:8080" },
      sections: ["Bridges"],
    },
    {
      grid: 1,
      element: 11,
      title: "Spartan Ratio Fixer",
      description:
        "With expected periods of high volatility of the bull market, stakers must more actively manage their collateralization ratio through mints. Buying more SNX and minting more… sUSD. If your C-Ratio is below the Target Collateralization Ratio, you will be blocked and unable to claim your fee rewards. This tool helps you fix that.",
      link: {
        text: "Link to Spartan Ratio Fixer",
        url: "http://localhost:8080",
      },
      sections: ["Tools"],
    },
    {
      grid: 10,
      element: 8,
      title: "FlashBurn App",
      description:
        "We all know the pains of high Ethereum gas fees, that’s why Layer 2 exists in the first place. So we know how much it hurts when the gas fees for trying to escape… Layer 1 are outrageous. This is why we built Teleportr. It is a cheaper yet more centralized alternative to the Optimism Gateway.",
      link: { text: "Link to FlashBurn App", url: "http://localhost:8080" },
      sections: ["News"],
    },
    {
      grid: 4,
      element: 1,
      title: "CEX Hedging Bot",
      description:
        "A tool that allows SNX stakers to burn debt by selling staked SNX by utilizing an sUSD Flash Loan dApp to allow users to fix their c-ratio (or unstake completely) by selling… staked SNX. This tool is a benefit to the health of the Synthetix Protocol. It allows stakers in trouble to fix their c-ratio or exit instead of putting the system at risk.",
      link: { text: "Link to CEX Hedging Bot", url: "http://localhost:8080" },
      sections: ["News"],
    },
  ];

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
          items={items}
          activeSection={activeSection}
          setActiveSection={setActiveSection}
        />

        <SynthetixFooter />
      </div>
    </>
  );
}

export async function getStaticProps({ preview = false }) {
  const allPosts = await getAllPostsForHome(preview);
  return {
    props: { allPosts, preview },
    revalidate: 1,
  };
}
