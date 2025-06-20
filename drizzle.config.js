/** @type {import("drizzle-kit").Config} */
const { defineConfig } = require("drizzle-kit");
const dotenv = require("dotenv");
const path = require("path");

// Load variables from .env.local
dotenv.config({ path: path.resolve(__dirname, ".env.local") });
console.log("Loaded DB URL:", process.env.NEXT_PUBLIC_DB_CONNECTION_STRING);


// Safety check for DB URL
if (!process.env.NEXT_PUBLIC_DB_CONNECTION_STRING) {
  throw new Error("❌ Missing DB connection string in .env.local");
}

module.exports = defineConfig({
  dialect: "postgresql",
  schema: "./configs/schema.jsx", // adjust if using .ts or .js
  dbCredentials: {
    url: process.env.NEXT_PUBLIC_DB_CONNECTION_STRING,
  },
});
