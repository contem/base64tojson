# 📄 base64tojson

Decode a Base64-encoded JSON string into a JavaScript object.

Perfect for decoding API payloads, tokens, or embedded data.

---

## 📦 Installation

### Using npm

```bash
npm install base64tojson
```

### Using yarn

```bash
yarn add base64tojson
```

---

## 🚀 Usage

```js
const base64tojson = require("base64tojson");

(async () => {
  const jsonData = { name: "Yunus", age: 28 };

  const base64 = Buffer.from(JSON.stringify(jsonData)).toString("base64");

  try {
    const result = await base64tojson(base64);
    console.log(result); // { name: 'Yunus', age: 28 }
  } catch (err) {
    console.error("Invalid base64 or JSON:", err);
  }
})();
```

---

## ⚙️ Options

This function takes **a single Base64-encoded string**. No options object required.

| Parameter     | Type     | Required | Description                             |
|---------------|----------|----------|-----------------------------------------|
| `base64Data`  | `string` | ✅       | A Base64-encoded string of a JSON blob  |

---

## 🧾 Output

If successful, it returns a **JavaScript object** parsed from the JSON content.

If invalid Base64 or JSON, it throws an error.

---

## 🧪 Run Test

```bash
node test.js
```

---

## 🪪 License

```
MIT
```
