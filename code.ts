figma.showUI(__html__);

figma.ui.resize(500, 280);

function buildPages(pages) {
  for (let page of pages) {
    let newPage = figma.createPage();
    newPage.name = page;
  }
}

// set of pages for design system project
const ds_pages = [
  "⋯⋯⋯⋯⋯⋯⋯⋯⋯⋯⋯⋯⋯⋯⋯",
  "🟣 ---> Start Here",
  "🕐 Waiting Room",
  "⎯⎯⎯⎯ 🛠 Foundation ⎯⎯⎯⎯",
  "     ↪ 🟣 Colors",
  "     ↪ 🟣 Elevation & Shadow",
  "     ↪ 🟣 Icons",
  "     ↪ 🟣 Illustrations",
  "     ↪ 🟣 Naming",
  "     ↪ 🟣 Rounded corners",
  "     ↪ 🟣 Spacing",
  "     ↪ 🟣 Typography",
  "⎯⎯⎯⎯ 🧰 Components ⎯⎯⎯⎯",
  "🟣 Alert",
  "🟣 Action Bar",
  "🟣 Avatar",
  "🟣 Background",
  "🟣 Border",
  "🟣 Buttons",
  "🟣 Checkbox",
  "🟣 Cards",
  "🟣 Charts",
  "🟣 Date Picker",
  "🟣 Drop-down",
  "🟣 Filter bar",
  "🟣 Header",
  "🟣 Input",
  "🟣 KPI",
  "🟣 List",
  "🟣 Menu",
  "🟣 Modal (Dialogue)",
  "🟣 Operator",
  "🟣 OTP",
  "🟣 Pannels",
  "🟣 Pagination",
  "🟣 Pop-up",
  "🟣 Radio Button",
  "🟣 Scroll Bar",
  "🟣 Search",
  "🟣 Select Menu",
  "🟣 Side Menu (Nav)",
  "🟣 Slider",
  "🟣 Slot",
  "🟣 Snackbar",
  "🟣 Status",
  "🟣 Steps",
  "🟣 Table",
  "🟣 Tabs",
  "🟣 Tags (Chip)",
  "🟣 Text editor",
  "🟣 Toast",
  "🟣 Toggle",
  "🟣 Toolbar",
  "🟣 Tooltips",
  "🟣 Trigger",
  "🟣 Upload Area",
  "🟣 Workflow path",
  "⎯⎯⎯⎯ 🖥 Patterns / sections ⎯⎯⎯⎯",
  "🟣 Templates",
  "⋯⋯⋯⋯⋯⋯⋯⋯⋯⋯⋯⋯⋯⋯⋯",
  "❖ .Admin components",
  ".Archive",
  "🗺 Mapping",
  "🟣 Cover",
  "⋯⋯⋯⋯⋯⋯⋯⋯⋯⋯⋯⋯⋯⋯⋯",
];

// set of pages for marketing project
const marketing_pages = [
  "⋯⋯⋯⋯⋯⋯⋯⋯⋯⋯⋯⋯⋯⋯⋯",
  "🟣 ---> Start Here",
  "⛑ MARKETING",
  "⛑ MARKETING",
  "⛑ MARKETING",
  "⛑ MARKETING",
  "⛑ MARKETING",
  "⛑ MARKETING",
  "⛑ MARKETING",
  "⛑ MARKETING",
  "⛑ MARKETING",
  "⋯⋯⋯⋯⋯⋯⋯⋯⋯⋯⋯⋯⋯⋯⋯",
];

// set of pages for other project
const product = [
  "Cover",
  "⋯⋯⋯⋯⋯⋯⋯⋯⋯⋯⋯⋯⋯⋯⋯",
  "🎥  Prototype",
  "   ↪ <NAME> V 0.1  👀 ",
  "⋯⋯⋯⋯⋯⋯⋯⋯⋯⋯⋯⋯⋯⋯⋯",
  "🎬  Production",
  "   ↪ <NAME> V 0.1 ",
  "   ↪ <NAME> V 0.2",
  "⋯⋯⋯⋯⋯⋯⋯⋯⋯⋯⋯⋯⋯⋯⋯",
  "🎨  Design review",
  "   ↪ <NAME> V 0.1",
  "   ↪ <NAME> V 0.2",
  "⋯⋯⋯⋯⋯⋯⋯⋯⋯⋯⋯⋯⋯⋯⋯",
  "🕹 Playground",
  "   ↪ Planning - ux",
  "   ↪ <NAME> V 0.1 ",
  "   ↪ <NAME> V 0.2",
  "⋯⋯⋯⋯⋯⋯⋯⋯⋯⋯⋯⋯⋯⋯⋯",
  "📝  Notes",
  "💡 Insparation",
  "🔍  Research",
  "🗺️  Mapping",
  "⋯⋯⋯⋯⋯⋯⋯⋯⋯⋯⋯⋯⋯⋯⋯",
  "Design Systems",
  "⋯⋯⋯⋯⋯⋯⋯⋯⋯⋯⋯⋯⋯⋯⋯",
];

figma.ui.onmessage = ({ documentType }) => {
  if (documentType === "ds") {
    buildPages(ds_pages);
  }
  if (documentType === "marketing") {
    buildPages(marketing_pages);
  }
  if (documentType === "other") {
    buildPages(product);
  }

  // remove empty page 'Page 1' -- later
  // const current = figma.currentPage
  //  = figma.root.findOne(n => n.name === "🟣 ---> Start Here")
  // const emptyPage = figma.root.findOne(n => n.name === "Page 1")
  // emptyPage.remove()

  figma.closePlugin();
};
