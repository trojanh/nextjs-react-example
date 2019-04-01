
const fs = require("fs");
const path = require("path");
const { promisify } = require("util");
const copyFile = promisify(fs.copyFile);
const filesToExport = ["404.html"];
module.exports = {
  exportPathMap: async function(
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    const defaultMap = Object.assign(
      {
        "/": { page: "/" },
        "/about": { page: "/about" },
        "/quotes-list": { page: "/quotes-list" },
        "/error": { page: "/_error" }
      },
    );

    if (dev) {
      return defaultMap;
    }

    // Copies the files from your project root into the out directory
    filesToExport.forEach(async file => {
      await copyFile(path.join(dir, file), path.join(outDir, file));
    });
    // This will copy sitemap.xml from your project root into the out directory

    return defaultMap;
  },
  webpack: config => {
    // Fixes npm packages that depend on `fs` module
    config.node = {
      fs: 'empty'
    }

    return config
  }
}
