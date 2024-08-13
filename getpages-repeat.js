const fs = require("fs");
const path = require("path");

const urls = [];

async function getPage(id) {
  const url = `https://37.brightexchange.pages.dev/uk/details/${id}`;
  const res = await fetch(url);
  const text = await res.text();
  const status = text.includes('<body class="__variable_7cad01 font-sans">429')
    ? "Fail"
    : "Pass";
  urls.push([status, url]);
  return text;
}

async function getPages(idsId) {
  // get new result id
  const id = fs.readFileSync(
    path.join(__dirname, "getpages-repeat-results", "id.txt")
  );
  const newId = parseInt(id) + 1;

  // get all the pages and their errors
  const resultsFile = fs.readFileSync(
    path.join(__dirname, "getids-results", `${idsId}.json`)
  );
  const { ids } = JSON.parse(resultsFile);
  const slicedIds = ids.slice(0,90);

  // run repeated tests
  const start = new Date().toISOString();
  await Promise.all(
    Array.from({ length: 6000 }).map((_, i) => getPage(slicedIds[i % 90]))
  );
  const end = new Date().toISOString();

  // save results
  const results = {
    id: newId,
    idResultsId: idsId,
    start,
    end,
    total: urls.length,
    fail: urls.filter(([status]) => status === "Fail").length,
    pass: urls.filter(([status]) => status === "Pass").length,
    urls,
  };
  fs.writeFileSync(
    path.join(__dirname, "getpages-repeat-results", `${newId}.json`),
    JSON.stringify(results, null, 2)
  );

  // update ID of results
  fs.writeFileSync(
    path.join(__dirname, "getpages-repeat-results", "id.txt"),
    String(newId)
  );
}

getPages(1);
