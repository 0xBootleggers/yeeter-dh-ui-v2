import { useQuery } from "react-query";
import { GraphQLClient } from "graphql-request";

import { LIST_YEETS } from "../utils/graphQueries";
import { GRAPH_URL } from "../utils/constants";

export const useYeets = ({
  chainId,
  shamanAddress,
}: {
  chainId?: string;
  shamanAddress?: string;
}) => {
  const graphQLClient = new GraphQLClient(GRAPH_URL[chainId || "0x5"]);

  const { data, ...rest } = useQuery(
    ["get-yeeter", { shamanAddress }],
    async () => {
      const res = await graphQLClient.request(LIST_YEETS, {
        shamanAddress: shamanAddress?.toLowerCase(),
      });
    },
    { enabled: !!shamanAddress && !!chainId }
  );

  console.log("data", data);

  return {
    yeets: data,
    ...rest,
  };
};
