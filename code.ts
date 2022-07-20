// @ts-nocheck

import { ds_pages, marketing_pages, product } from "./src/pageLists.ts";
import { buildPages } from "./src/figmaUtils.ts";
import buildFrames from "./src/buildFrames.ts";
import buildStatusComponents from "./src/statusComponent.ts";

figma.showUI(__html__);
figma.ui.resize(350, 350);

const loadFonts = async () => {
  await figma.loadFontAsync({ family: "Inter", style: "Regular" });
  await figma.loadFontAsync({ family: "Inter", style: "Bold" });
};

figma.ui.onmessage = ({ type }) => {
  loadFonts()
    .then(() => {
      if (type === "ds") {
        buildPages(ds_pages);
        const pages = figma.root.children;
        buildFrames(pages);
        buildStatusComponents();
      }
      if (type === "marketing") {
        buildPages(marketing_pages);
      }
      if (type === "product") {
        buildPages(product);
      }
      if (type === "internal-tools") {
        const internalToolsPage = figma.createPage();
        internalToolsPage.name = "🧨 .DO NOT TOUCH!!! - internal tools";
        buildFrames([internalToolsPage]);
        buildStatusComponents();
      }
    })
    .finally(() => figma.closePlugin());
};
