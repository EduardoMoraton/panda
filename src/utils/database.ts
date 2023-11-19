import AtlasClient from "@gmmurray/mongodb-atlas-data-api";
import { User } from "~/types/mongo";

const options = {
  apiKey: process.env.ATLAS_TOKEN!,
  dataApiUrlEndpoint: process.env.ATLAS_URL!,
  defaultDataSource: "ExodoCluster",
  defaultDatabase: "pandadb",
};

const client = new AtlasClient(options);

export const getUser = async (email: string) => {
  const response = await client.findOneDocument<User>({
    filter: {
      email,
    },
    collection: "pandadb",
  });

  return response;
};

export const saveUser = async (user: User) => {
  const response = await client.insertOneDocument<User>({
    document: user,
    collection: "pandadb",
  });

  return response;
};
