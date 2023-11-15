import { CollectionConfig } from "payload/dist/exports/types";

const Users: CollectionConfig = {
  slug: "users",
  auth: true,
  admin: { useAsTitle: "email" },
  fields: [],
};

export default Users;
