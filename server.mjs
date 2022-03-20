import { createServer } from "http";

let server = createServer((request, response) => {
  switch (request.url) {
    case "/": {
      let html = createPage("Home");
      response.end(html);
      break;
    }      
    case "/about": {
      let html = createPage("About");
      response.end(html);
      break;
    }
    //default:
    //  break;
  }
});
server.listen(3000);

function createPage(title) {
  return (
`<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>${title}</title>
  </head>
  <body>
    <ul>
      <li><a href="/">Home</a></li>
      <li><a href="/about">About</a></li>
    </ul>
    <h1>${title}</h1>
    <hr/>
    ${Array.from({ length: 1000})
      .map(() => "    <div>I am junk!</div>")
      .join("\n")
    }
  </body>
</html>
`);
};
