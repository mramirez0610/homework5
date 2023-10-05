//models
const homeRoute = `
<h1>Home</h1>
`;
const aboutRoute = `
<h1>About</h1>
`;
const booksRoute = `
<h1>Books</h1>
`;
const blogRoute = `
<h1>Blog</h1>
`;
const accountRoute = `
<h1>Account</h1>
`;
const cartRoute = `
<h1>Cart</h1>
`;
const blog1Route = `
<h1>Blog1</h1>
`;
const blog2Route = `
<h1>Blog2</h1>
`;
const blog3Route = `
<h1>Blog3</h1>
`;

export function changePageContent(pageContentVarName) {
  $("#app").html(eval(pageContentVarName));
}
