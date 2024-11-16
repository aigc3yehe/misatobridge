"use client";
import {
  WormholeConnectConfig,
  WormholeConnectTheme,
} from "@wormhole-foundation/wormhole-connect";
import dynamic from "next/dynamic";

const WormholeConnect = dynamic(
  () => import("@wormhole-foundation/wormhole-connect"),
  { ssr: false }
);

export default function Home() {
  const wormholeConfig: WormholeConnectConfig = {
    chains: ["Base", "Solana"],
    rpcs: {
      Base: `https://base-mainnet.g.alchemy.com/v2/${process.env.NEXT_PUBLIC_ALCHEMY_API_KEY}`,
      Solana: `https://rpc.ankr.com/solana/${process.env.NEXT_PUBLIC_ANKR_API_KEY}`,
    },
    tokens: ["MISATO"],
    tokensConfig: {
      MISATO: {
        key: "MISATO",
        symbol: "MISATO",
        nativeChain: "Base",
        icon: "/misato.png",
        tokenId: {
          chain: "Base",
          address: "0x98f4779FcCb177A6D856dd1DfD78cd15B7cd2af5",
        },
        coinGeckoId: "misato",
        decimals: 18,
      },
    },
    wrappedTokens: {
      MISATO: {
        Base: "0x98f4779FcCb177A6D856dd1DfD78cd15B7cd2af5",
        Solana: "47Gp1rcEvB6k9HPF7pq2JrBMVzdHZCyuhbLPVug3d1Ac",
      },
    },
    ui: {
      title: "MISATO BRIDGE",
      showHamburgerMenu: false,
      defaultInputs: {
        fromChain: "Base",
        toChain: "Solana",
        tokenKey: "MISATO",
        toTokenKey: "MISATO",
      },
      // walletConnectProjectId: process.env.NEXT_PUBLIC_PROJECT_ID,
    },
  };

  const theme: WormholeConnectTheme = {
    mode: "dark",
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <WormholeConnect config={wormholeConfig} theme={theme} />
    </main>
  );
}
