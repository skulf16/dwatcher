import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Das Repo-Root (Datadiorama) hat eine eigene package-lock.json –
  // Turbopack soll dieses Unterprojekt als Root behandeln.
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
