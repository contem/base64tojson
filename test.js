const base64tojson = require("base64tojson");

(async () => {
  const base64 = Buffer.from(JSON.stringify({ name: "contem", age: 99 })).toString("base64");

  try {
    const json = await base64tojson(base64);
    console.log(json); // { name: 'contem', age: 99 }
  } catch (err) {
    console.error("Invalid data", err);
  }
})();
