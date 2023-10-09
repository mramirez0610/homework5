//models
const homeRoute = `
<main class="home">
<div class="homeHero">
  <div class="quote">
    <h1>A place is</h1>
    <h1>Not a place</h1>
    <span>until it has a book</span>
  </div>
</div>

<div class="featured">
  <div class="featureBook">
    <div class="cover one"></div>
    <p>
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua." Urna
      nunc id cursus metus aliquam eleifend mi. Massa vitae tortor
      condimentum lacinia quis vel eros.
    </p>
    <h3>$15.99</h3>
    <button>Add To Cart</button>
  </div>
  <div class="featureBook">
    <div class="cover two"></div>
    <p>
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua." Urna
      nunc id cursus metus aliquam eleifend mi. Massa vitae tortor
      condimentum lacinia quis vel eros.
    </p>
    <h3>$15.99</h3>
    <button>Add To Cart</button>
  </div>
  <div class="featureBook">
    <div class="cover three"></div>
    <p>
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua." Urna
      nunc id cursus metus aliquam eleifend mi. Massa vitae tortor
      condimentum lacinia quis vel eros.
    </p>
    <h3>$15.99</h3>
    <button>Add To Cart</button>
  </div>
</div>
</main>
`;
const aboutRoute = `
<main class="about">
  <div class="aboutContainer">
    <div class="photo one"></div>
    <div class="info">
      <h2>About the booknook</h2>
      <h3>Founded in 2008</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Facilisi
        nullam vehicula ipsum a arcu cursus vitae congue mauris. Turpis nunc
        eget lorem dolor. Sed viverra tellus in hac habitasse. Id aliquet
        risus feugiat in ante metus. Orci nulla pellentesque dignissim enim
        sit amet. Maecenas pharetra convallis posuere morbi leo urna
        molestie at elementum. Tortor at risus viverra adipiscing at in.
        Odio ut enim blandit volutpat maecenas volutpat blandit aliquam
        etiam. Justo donec enim diam vulputate ut. Aliquam ut porttitor leo
        a diam. Sed id semper risus in hendrerit gravida rutrum quisque non.
        Pellentesque habitant morbi tristique senectus et netus et
        malesuada. In ornare quam viverra orci. Condimentum id venenatis a
        condimentum vitae sapien pellentesque habitant morbi. Sed vulputate
        mi sit amet mauris commodo quis imperdiet.
      </p>
    </div>
  </div>
  
  <div class="aboutContainer">
    <div class="photo two"></div>
    <div class="info">
      <h2>Find the perfect book</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Facilisi
        nullam vehicula ipsum a arcu cursus vitae congue mauris. Turpis nunc
        eget lorem dolor. Sed viverra tellus in hac habitasse. Id aliquet
        risus feugiat in ante metus. Orci nulla pellentesque dignissim enim
        sit amet. Maecenas pharetra convallis posuere morbi leo urna
        molestie at elementum. Tortor at risus viverra adipiscing at in.
        Odio ut enim blandit volutpat maecenas volutpat blandit aliquam
        etiam. Justo donec enim diam vulputate ut. Aliquam ut porttitor leo
        a diam. Sed id semper risus in hendrerit gravida rutrum quisque non.
        Pellentesque habitant morbi tristique senectus et netus et
        malesuada. In ornare quam viverra orci. Condimentum id venenatis a
        condimentum vitae sapien pellentesque habitant morbi. Sed vulputate
        mi sit amet mauris commodo quis imperdiet.
      </p>
    </div>
  </div>
</main>
`;
const booksRoute = `
<main class="books">
<section>
  <h2>Booksets</h2>
  <div class="row">
    <div class="item">
      <div class="photo one"></div>
      <div class="info">
        <div class="desc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Netus et malesuada fames ac.
        </div>
        <h3>$99.99</h3>
        <button>add to cart</button>
      </div>
    </div>

    <div class="item">
      <div class="photo two"></div>
      <div class="info">
        <div class="desc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Netus et malesuada fames ac.
        </div>
        <h3>$100</h3>
        <button>add to cart</button>
      </div>
    </div>

    <div class="item">
      <div class="photo three"></div>
      <div class="info">
        <div class="desc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Netus et malesuada fames ac.
        </div>
        <h3>$100</h3>
        <button>add to cart</button>
      </div>
    </div>
  </div>
</section>

<section>
  <h2>Black history month</h2>
  <div class="row">
    <div class="item">
      <div class="photo four"></div>
      <div class="info">
        <div class="desc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Netus et malesuada fames ac.
        </div>
        <h3>$27.99</h3>
        <button>add to cart</button>
      </div>
    </div>

    <div class="item">
      <div class="photo five"></div>
      <div class="info">
        <div class="desc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Netus et malesuada fames ac.
        </div>
        <h3>$19.99</h3>
        <button>add to cart</button>
      </div>
    </div>

    <div class="item">
      <div class="photo six"></div>
      <div class="info">
        <div class="desc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Netus et malesuada fames ac.
        </div>
        <h3>$17.99</h3>
        <button>add to cart</button>
      </div>
    </div>
  </div>
</section>

<section>
  <h2>Horror books</h2>
  <div class="row">
    <div class="item">
      <div class="photo seven"></div>
      <div class="info">
        <div class="desc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Netus et malesuada fames ac.
        </div>
        <h3>$19.99</h3>
        <button>add to cart</button>
      </div>
    </div>

    <div class="item">
      <div class="photo eight"></div>
      <div class="info">
        <div class="desc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Netus et malesuada fames ac.
        </div>
        <h3>$15.99</h3>
        <button>add to cart</button>
      </div>
    </div>

    <div class="item">
      <div class="photo nine"></div>
      <div class="info">
        <div class="desc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Netus et malesuada fames ac.
        </div>
        <h3>$19.99</h3>
        <button>add to cart</button>
      </div>
    </div>
  </div>
</section>

<section>
  <h2>Children's books</h2>
  <div class="row">
    <div class="item">
      <div class="photo ten"></div>
      <div class="info">
        <div class="desc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Netus et malesuada fames ac.
        </div>
        <h3>$19.99</h3>
        <button>add to cart</button>
      </div>
    </div>

    <div class="item">
      <div class="photo eleven"></div>
      <div class="info">
        <div class="desc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Netus et malesuada fames ac.
        </div>
        <h3>$15.99</h3>
        <button>add to cart</button>
      </div>
    </div>

    <div class="item">
      <div class="photo twelve"></div>
      <div class="info">
        <div class="desc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Netus et malesuada fames ac.
        </div>
        <h3>$7.99</h3>
        <button>add to cart</button>
      </div>
    </div>
  </div>
</section>
</main>
`;
const blogRoute = `
<main class="blog">
  <div class="blogPost">
    <div class="books">
      <div class="one cover"></div>
      <div class="two cover"></div>
    </div>
    <div class="info large">
      <h1>February favorites</h1>
      <p>
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua." Urna
        nunc id cursus metus aliquam eleifend mi. Massa vitae tortor
        condimentum lacinia quis vel eros.
      </p>
      <button><a id="blog1" href="#">Read more</a></button>
    </div>
  </div>
  <div class="blogPost">
    <div class="photo three"></div>
    <div class="info">
      <h1>all about book clubs</h1>
      <p>
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua." Urna
        nunc id cursus metus aliquam eleifend mi. Massa vitae tortor
        condimentum lacinia quis vel eros.
      </p>
      <button><a id="blog2" href="#">Read more</a></button>
    </div>
  </div>
  <div class="blogPost">
    <div class="photo four"></div>
    <div class="info">
      <h1>switch to e-reading?</h1>
      <p>
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua." Urna
        nunc id cursus metus aliquam eleifend mi. Massa vitae tortor
        condimentum lacinia quis vel eros.
      </p>
      <button><a id="blog3" href="#">Read more</a></button>
    </div>
  </div>
</main>
`;
//account is finished
const accountRoute = `
<div class="acco">
  <div class="login-sign">
<h2 id="banner">Login Here!</h2>
<h3>email: admin | password: admin</h3>
<input id="email" type="text" placeholder="Email Adress:" />
<input id="password" type="password" placeholder="Password:" />
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
//cart is finished
const cartRoute = `
<div class="cart">
<div class="item">
<div class="bookc1"></div>
<div class="infor">
<h3>Misery By Stephen King</h3>
<h3>$19.99</h3>
<p>In Stock</p>
<div>

<div class="tex">
<p>Qty:1</p>
<div class="decor">
<p>change</p> 
<p>|</p>
<p>delete</p>
</div>
</div>
</div>
</div>

</div>
<div class="line"></div>
<div class="ite2">
<div class="bookc2"></div>
<div class="infor">
<h3>The Autobiography of Martin Luther King Jr. Edited By Clayborne Carson</h3>
<h3>$19.99</h3>
<p>In Stock</p>
<div>

<div class="tex">
<p>Qty:1</p>
<div class="decor">
<p>change</p> 
<p>|</p>
<p>delete</p>
</div>
</div>
</div>
</div>

</div>

<div class="line2"></div>

</div>

`;
//blog1 is finished
const blog1Route = `
<div class="feb">
<div class="hero">
<div class="callout">
<h1>FEBRUARY FAVORITES</h1>
<h2>In Honor of Black History Month</h2>
<p>"Success is only meaningful and enjoyable if it feels like your own" - Michelle Obama</p>
</div>
</div>

<div class="books">

<div class="bookuno">
<div class="b1"></div>
<div class="inf">
<h1>Becoming By Michelle Obama</h1>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non arcu risus quis varius. Non consectetur a erat nam at lectus urna duis. Gravida arcu ac tortor dignissim. Diam phasellus vestibulum lorem sed risus ultricies. Tortor condimentum lacinia quis vel eros donec ac odio tempor. Lorem ipsum dolor sit amet consectetur adipiscing elit duis. Vulputate sapien nec sagittis aliquam malesuada bibendum arcu vitae. Arcu risus quis varius quam quisque id diam vel quam. Amet cursus sit amet dictum sit.
</p>
<p>Ultricies integer quis auctor elit sed vulputate mi sit amet. Elementum integer enim neque volutpat ac. Id neque aliquam vestibulum morbi blandit cursus risus. Diam phasellus vestibulum lorem sed risus ultricies tristique nulla aliquet. Elementum nibh tellus molestie nunc non. Eleifend mi in nulla posuere sollicitudin aliquam. Euismod lacinia at quis risus sed vulputate. Tellus molestie nunc non blandit massa enim nec dui nunc. Vulputate eu scelerisque felis imperdiet proin fermentum leo. Tellus mauris a diam maecenas sed. Aenean et tortor at risus viverra adipiscing at in. Ipsum suspendisse ultrices gravida dictum fusce. Arcu odio ut sem nulla.</p>
</div>
</div>

<div class="bookuno">
<div class="b2"></div>
<div class="inf">
<h1>Finding Me By Viola Davis</h1>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non arcu risus quis varius. Non consectetur a erat nam at lectus urna duis. Gravida arcu ac tortor dignissim. Diam phasellus vestibulum lorem sed risus ultricies. Tortor condimentum lacinia quis vel eros donec ac odio tempor. Lorem ipsum dolor sit amet consectetur adipiscing elit duis. Vulputate sapien nec sagittis aliquam malesuada bibendum arcu vitae. Arcu risus quis varius quam quisque id diam vel quam. Amet cursus sit amet dictum sit.
</p>
<p>Ultricies integer quis auctor elit sed vulputate mi sit amet. Elementum integer enim neque volutpat ac. Id neque aliquam vestibulum morbi blandit cursus risus. Diam phasellus vestibulum lorem sed risus ultricies tristique nulla aliquet. Elementum nibh tellus molestie nunc non. Eleifend mi in nulla posuere sollicitudin aliquam. Euismod lacinia at quis risus sed vulputate. Tellus molestie nunc non blandit massa enim nec dui nunc. Vulputate eu scelerisque felis imperdiet proin fermentum leo. Tellus mauris a diam maecenas sed. Aenean et tortor at risus viverra adipiscing at in. Ipsum suspendisse ultrices gravida dictum fusce. Arcu odio ut sem nulla.</p>
</div>
</div>

</div>


</div>
`;
//blog2 is finishied
const blog2Route = `
<div class="bookc">
<div class="hero">
<div class="callout">
<h1>ALL ABOUT BOOKCLUBS</h1>
<p>What books are best for book club?  Everything you need to know about hosting your own!</p>
</div>
</div>

<div class="bookclub">
<div class="img"></div>
<div class="info">
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Turpis in eu mi bibendum neque egestas. Nunc lobortis mattis aliquam faucibus purus in massa tempor. Diam in arcu cursus euismod quis viverra nibh. Massa sed elementum tempus egestas sed sed risus pretium. Aliquet eget sit amet tellus cras adipiscing enim eu. Viverra nibh cras pulvinar mattis nunc sed blandit libero. Auctor urna nunc id cursus metus. Mauris a diam maecenas sed enim ut. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus. Etiam non quam lacus suspendisse. Pulvinar elementum integer enim neque volutpat ac tincidunt. Dolor morbi non arcu risus. Maecenas volutpat blandit aliquam etiam erat velit scelerisque. Ipsum nunc aliquet bibendum enim facilisis gravida neque convallis a. Scelerisque purus semper eget duis at tellus at.
</p>

<p>Ornare arcu dui vivamus arcu felis. Risus at ultrices mi tempus imperdiet. In cursus turpis massa tincidunt dui. Vitae suscipit tellus mauris a diam maecenas. Dictumst quisque sagittis purus sit amet volutpat. Varius morbi enim nunc faucibus a pellentesque. Volutpat sed cras ornare arcu. Dictum varius duis at consectetur lorem donec. In nibh mauris cursus mattis molestie a iaculis at. Sit amet commodo nulla facilisi. Quam adipiscing vitae proin sagittis. Egestas sed tempus urna et pharetra. Auctor elit sed vulputate mi sit.
</p>

<p>Elit scelerisque mauris pellentesque pulvinar pellentesque. Vel orci porta non pulvinar neque laoreet suspendisse interdum. Accumsan in nisl nisi scelerisque eu ultrices. Ligula ullamcorper malesuada proin libero nunc consequat interdum varius. At ultrices mi tempus imperdiet nulla malesuada pellentesque. Enim ut sem viverra aliquet. Feugiat vivamus at augue eget arcu dictum. Leo vel orci porta non pulvinar. Enim blandit volutpat maecenas volutpat. Egestas maecenas pharetra convallis posuere morbi leo.
</p>

<p>Sed tempus urna et pharetra pharetra massa massa ultricies. In nibh mauris cursus mattis molestie a iaculis. Eu non diam phasellus vestibulum lorem. Quis lectus nulla at volutpat diam ut. Mattis rhoncus urna neque viverra justo. Morbi tincidunt augue interdum velit euismod in. Habitasse platea dictumst quisque sagittis. Malesuada fames ac turpis egestas maecenas pharetra convallis posuere morbi. Placerat in egestas erat imperdiet sed. A condimentum vitae sapien pellentesque. Pretium viverra suspendisse potenti nullam ac tortor vitae. Ut diam quam nulla porttitor massa id neque. Sodales ut etiam sit amet nisl purus in. Nulla facilisi morbi tempus iaculis urna id volutpat lacus laoreet.</p>
</div>
</div>
</div>
`;
//blog3 is finishied
const blog3Route = `
<div class="bookc">
<div class="hero2">
<div class="callout">
<h1>SWITCHING TO E-READING?</h1>
<p>What e-readers are best for you? everything you need to know about electronic reading!</p>
</div>
</div>

<div class="ereading">
<div class="img2"></div>
<div class="info">
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Turpis in eu mi bibendum neque egestas. Nunc lobortis mattis aliquam faucibus purus in massa tempor. Diam in arcu cursus euismod quis viverra nibh. Massa sed elementum tempus egestas sed sed risus pretium. Aliquet eget sit amet tellus cras adipiscing enim eu. Viverra nibh cras pulvinar mattis nunc sed blandit libero. Auctor urna nunc id cursus metus. Mauris a diam maecenas sed enim ut. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus. Etiam non quam lacus suspendisse. Pulvinar elementum integer enim neque volutpat ac tincidunt. Dolor morbi non arcu risus. Maecenas volutpat blandit aliquam etiam erat velit scelerisque. Ipsum nunc aliquet bibendum enim facilisis gravida neque convallis a. Scelerisque purus semper eget duis at tellus at.
</p>

<p>Ornare arcu dui vivamus arcu felis. Risus at ultrices mi tempus imperdiet. In cursus turpis massa tincidunt dui. Vitae suscipit tellus mauris a diam maecenas. Dictumst quisque sagittis purus sit amet volutpat. Varius morbi enim nunc faucibus a pellentesque. Volutpat sed cras ornare arcu. Dictum varius duis at consectetur lorem donec. In nibh mauris cursus mattis molestie a iaculis at. Sit amet commodo nulla facilisi. Quam adipiscing vitae proin sagittis. Egestas sed tempus urna et pharetra. Auctor elit sed vulputate mi sit.
</p>

<p>Elit scelerisque mauris pellentesque pulvinar pellentesque. Vel orci porta non pulvinar neque laoreet suspendisse interdum. Accumsan in nisl nisi scelerisque eu ultrices. Ligula ullamcorper malesuada proin libero nunc consequat interdum varius. At ultrices mi tempus imperdiet nulla malesuada pellentesque. Enim ut sem viverra aliquet. Feugiat vivamus at augue eget arcu dictum. Leo vel orci porta non pulvinar. Enim blandit volutpat maecenas volutpat. Egestas maecenas pharetra convallis posuere morbi leo.
</p>

<p>Sed tempus urna et pharetra pharetra massa massa ultricies. In nibh mauris cursus mattis molestie a iaculis. Eu non diam phasellus vestibulum lorem. Quis lectus nulla at volutpat diam ut. Mattis rhoncus urna neque viverra justo. Morbi tincidunt augue interdum velit euismod in. Habitasse platea dictumst quisque sagittis. Malesuada fames ac turpis egestas maecenas pharetra convallis posuere morbi. Placerat in egestas erat imperdiet sed. A condimentum vitae sapien pellentesque. Pretium viverra suspendisse potenti nullam ac tortor vitae. Ut diam quam nulla porttitor massa id neque. Sodales ut etiam sit amet nisl purus in. Nulla facilisi morbi tempus iaculis urna id volutpat lacus laoreet.</p>
</div>
</div>
</div>
`;

export function changePageContent(pageContentVarName) {
  $("#app").html(eval(pageContentVarName));
}
