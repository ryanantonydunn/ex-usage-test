const fs = require("fs");
const path = require("path");
const apiKey = require("apikey");

const limit = 100;

async function getAdIds(page) {
  const query = `
      query adListUk(
        $skip: IntType = 0
        $first: IntType = 0
      ) {
        ads: allUkAdverts(orderBy: _publishedAt_DESC, first: $first, skip: $skip) {
          id
        }
      }
    `;

  const variables = {
    skip: page * limit,
    first: limit,
  };

  const res = await fetch("https://graphql.datocms.com/", {
    method: "POST",
    headers: {
      Authorization: apiKey,
      // "X-Environment": "develop",
    },
    body: JSON.stringify({ query, variables }),
  });
  const json = await res.json();

  return json.data.ads.map(({ id }) => id);
}

async function getIds(start, limit) {
  // get new id for this job
  const id = fs.readFileSync(path.join(__dirname, "getids-results", "id.txt"));
  const newId = parseInt(id) + 1;

  // get all ids for these pages
  const res = await Promise.all(
    Array.from({ length: limit }).map((_, i) => getAdIds(start + i))
  );
  const ids = res.flat();

  // save results
  const results = {
    id: newId,
    date: new Date().toISOString(),
    totalIds: ids.length,
    start,
    limit,
    ids,
  };
  fs.writeFileSync(
    path.join(__dirname, "getids-results", `${newId}.json`),
    JSON.stringify(results, null, 2)
  );

  // update ID of results
  fs.writeFileSync(
    path.join(__dirname, "getids-results", "id.txt"),
    String(newId)
  );
}

getIds(4, 1);
