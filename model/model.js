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
<div class="acco">
  <div class="login-sign">
<h2>Login Here!</h2>
<input type="text" placeholder="Email Adress:" />
<input type="password" placeholder="Password:" />
 <div class="log">
    <input type="button" value="LOGIN" id="logBtn" />
  </div>
  </div>
  <div class="login-sign">
  <p>don't have an account?</p>
  <h2>Sign Up!</h2>
  <input type="text" placeholder="First Name:" />
  <input type="text" placeholder="Last Name:" />
  <input type="text" placeholder="Email Adress:" />
  <input type="password" placeholder="Password:" />
  <div class="log">
  <input type="button" value="SIGN UP" id="logBtn" />
    </div>
  </div>
</div>
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
