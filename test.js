// first of all - select frame
const select = figma.currentPage.selection;

// find all vector objects with wrong names of vectors
const wrongVectorNames = select[0].findAll(
  (node) => node.name !== "ic" && node.type === "VECTOR"
);
wrongVectorNames.forEach((node) => {
  node.name = "ic";
});

select[0].children.forEach((node) => {
  node.name = node.name.toLowerCase();
  node.resize(16, 16);
});
