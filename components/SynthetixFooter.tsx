import React from "react";
import Image from "next/image";

// import HomeIcon from "../assets/svg/home-icon.svg";
// import DiscordIcon from "../assets/svg/discord-icon.svg";
// import TwitterIcon from "../assets/svg/twitter-icon.svg";
// import GithubIcon from "../assets/svg/github-icon.svg";

const SynthetixFooter = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full relative z-10 m-h-[1400px]">
      {/*  Our Philosophy */}
      <div className="mx-auto text-center md:px-72 mb-44 relative z-10">
        <div className="text-primary text-3xl font-bold explore-our-tools mb-4 uppercase">
          Our Philosophy
        </div>
        <div className="text-white heading text-base text-2xl uppercase leading-9 intro">
          SYNTHETIX GRANTS COUNCIL PLEDGES TO THE COMMUNITY TO <br />
          UPHOLD ITS VALUES BY PRODUCING TOOLS WHICH
          <span className="text-primary">&nbsp;PROMOTES</span> THE <br />
          <span className="text-secondary">
            &nbsp;GROWTH AND SUSTAINABILITY&nbsp;
          </span>
          OF AN ECOSYSTEM OF PUBLIC GOODS.
        </div>
      </div>

      <div className="m-auto max-w-[500px] mb-44 z-20">
        <Image
          src="/img/synthetix-gdao-logo.png"
          alt="Synthetix DAO"
          width={526}
          height={118}
        />
      </div>

      <div className="absolute bottom-0 w-full h-full pointer-events-none z-0 footer-bg">
        {/*<Image*/}
        {/*  src="/img/footer-bg.png"*/}
        {/*  layout="fill"*/}
        {/*  objectFit="cover"*/}
        {/*  quality={100}*/}
        {/*  alt="footer background"*/}
        {/*/>*/}
      </div>

      <div className="absolute bottom-0 w-full h-full pointer-events-none z-1">
        <Image
          src="/img/mountains.png"
          layout="fill"
          objectFit="fill"
          quality={100}
          alt="footer mountains"
        />
      </div>

      <div className="text-white max-w-xl z-20">
        Synthetix is a derivatives liquidity protocol providing the backbone for
        derivatives trading in DeFi, allowing anyone, anywhere to gain on-chain
        exposure to real-world assets.
        <div className="font-bold mt-2">
          © 2022 Synthetix. All rights reserved. Decentralised Autonomous
          Organisation
        </div>
        <div className="flex items-center mt-7 space-x-4 h-[30px] justify-center">
          {/*<img src={HomeIcon} className="h-[34px] w-[35px]" />*/}
          {/*<img src={DiscordIcon} className="h-[33px] w-[29px]" />*/}
          {/*<img src={TwitterIcon} className="h-[27px] w-[33px]" />*/}
          {/*<img src={GithubIcon} className="h-[33px] w-[33px]" />*/}

          {/*<img src={HomeIcon} />*/}
          {/*<img src={DiscordIcon} />*/}
          {/*<img src={TwitterIcon} />*/}
          {/*<img src={GithubIcon} />*/}
        </div>
      </div>
    </div>
  );
};

export default SynthetixFooter;
