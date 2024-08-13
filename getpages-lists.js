// TODO this is unused, maybe do something with it

// const fs = require("fs");
// const path = require("path");

// const urlBase = "https://37.brightexchange.pages.dev/uk";

// const pages = [
//   "/list/44014185/all/all/1",
//   "/list/44014185/all/all/2",
//   "/list/44014185/all/all/3",
//   "/list/44014185/all/all/4",
//   "/list/44014185/all/all/5",
//   "/list/44014185/all/all/6",
//   "/list/44014185/all/all/7",
//   "/list/44014185/all/all/8",
//   "/list/44014185/all/all/9",
//   "/list/44014185/all/all/10",
//   "/list/44014185/all/all/11",
//   "/list/44014185/all/all/12",
//   "/list/44014185/all/all/13",
//   "/list/44014185/all/all/14",
//   "/list/44014185/all/all/15",
//   "/list/44014185/all/all/16",
//   "/list/48232042/all/all/1",
//   "/list/48232042/all/all/2",
//   "/list/48232042/all/all/3",
//   "/list/48232042/all/all/4",
//   "/list/48232042/all/all/5",
//   "/list/48232042/all/all/6",
//   "/list/48232042/all/all/7",

//   "/list/48232006/all/all/1",
//   "/list/48232006/all/all/2",
//   "/list/48232006/all/all/3",
//   "/list/48232006/all/all/4",
//   "/list/48232006/all/all/5",
//   "/list/48232006/all/all/6",
//   "/list/48232006/all/all/7",
//   "/list/48232006/all/all/8",
//   "/list/48232006/all/all/9",
//   "/list/48232006/all/all/10",

//   "/list/56521628/all/all/1",
//   "/list/56521628/all/all/2",
//   "/list/56521628/all/all/3",
//   "/list/56521628/all/all/4",
//   "/list/56521628/all/all/5",
//   "/list/56521628/all/all/6",

//   "/list/48055725/all/all/1",
//   "/list/48055725/all/all/2",
//   "/list/48055725/all/all/3",
//   "/list/48055725/all/all/4",
//   "/list/48055725/all/all/5",
//   "/list/48055725/all/all/6",
//   "/list/48055725/all/all/7",
// ];

// const urls = [];

// async function getPage(url) {
//   const completeUrl = `${urlBase}${url}`;
//   const res = await fetch(completeUrl);
//   console.log(res.headers);
//   const text = await res.text();

//   const outcome = text
//     .split('<h3 class="truncate text-xl font-bold">')[1]
//     .split("</h3>")[0];

//   urls.push([outcome, url]);
//   return text;
// }


// getListPage();
