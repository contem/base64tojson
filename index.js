/**
 * Decodes a Base64-encoded JSON string into a JavaScript object.
 *
 * @param {string} base64Data - The Base64-encoded string representing a JSON object.
 * @returns {Promise<any>} A promise that resolves with the parsed JSON object.
 * @throws {Error} If decoding or parsing fails.
 */
async function base64tojson(base64Data) {
    try {
      const buffer = Buffer.from(base64Data, 'base64');
      const jsonString = buffer.toString('utf-8');
      return JSON.parse(jsonString);
    } catch (err) {
      throw new Error("Invalid Base64 or JSON format.");
    }
  }
  
  module.exports = base64tojson;
  