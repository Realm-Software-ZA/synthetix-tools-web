import React from "react";
import Image from "next/image";

const SynthetixFooter = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full relative z-10">
      {/*  Our Philosophy */}
      <div className="mx-auto text-center md:px-72 mb-44 relative z-10">
        <div className="text-primary sm:text-2xl md:text-3xl font-bold text-center explore-our-tools mb-4">
          OUR PHILOSOPHY
        </div>
        <div className="text-white heading text-base text-center text-lg md:text-2xl uppercase leading-6 md:leading-9 intro max-w-xl mx-auto px-10 md:px-0 ">
          SYNTHETIX GRANTS COUNCIL PLEDGES TO THE COMMUNITY TO UPHOLD ITS VALUES
          BY PRODUCING TOOLS WHICH
          <span className="text-primary">&nbsp;PROMOTES</span> THE
          <span className="text-secondary">
            &nbsp;GROWTH AND SUSTAINABILITY&nbsp;
          </span>
          OF AN ECOSYSTEM OF PUBLIC GOODS.
        </div>
      </div>

      <div className="m-auto max-w-[200px]  md:max-w-[500px] mb-96 z-20">
        <Image
          src="/img/synthetix-gdao-logo.png"
          alt="Synthetix DAO"
          width={526}
          height={118}
        />
      </div>

      <div className="absolute bottom-0 w-full h-full pointer-events-none z-0 footer-bg" />

      <div className="absolute bottom-0 w-full h-full pointer-events-none z-1">
        <Image
          src="/img/mountains.png"
          layout="fill"
          objectFit="fill"
          quality={100}
          alt="footer mountains"
        />
      </div>

      <div className="text-white max-w-xl z-20 mb-28 px-10 md:px-0">
        Synthetix is a derivatives liquidity protocol providing the backbone for
        derivatives trading in DeFi, allowing anyone, anywhere to gain on-chain
        exposure to real-world assets.
        <div className="font-bold mt-2">
          © 2022 Synthetix. All rights reserved. Decentralised Autonomous
          Organisation
        </div>
        <div className="w-48 grid grid-cols-4 mx-auto mt-10">
          <Image
            className="cursor-pointer"
            src="/svg/home-icon.svg"
            width={25}
            height={25}
          />
          <Image
            className="cursor-pointer"
            src="/svg/discord-icon.svg"
            width={25}
            height={25}
          />
          <Image
            className="cursor-pointer"
            src="/svg/twitter-icon.svg"
            width={25}
            height={25}
          />
          <Image
            className="cursor-pointer"
            src="/svg/github-icon.svg"
            width={25}
            height={25}
          />
        </div>
      </div>
    </div>
  );
};

export default SynthetixFooter;
