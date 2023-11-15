import path from "path";
import { buildConfig } from "payload/config";
import Users from "./collections/Users";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import { mongooseAdapter } from "@payloadcms/db-mongodb";

export default buildConfig({
  admin: {
    user: Users.slug,
  },
  editor: lexicalEditor({}),
  collections: [
    // Your collections here
    Users,
  ],
  globals: [
    // Your globals here
  ],
  typescript: {
    outputFile: path.resolve(__dirname, "../payload-types.ts"),
  },
  db: mongooseAdapter({ url: process.env.MONGODB_URI! }),
});
