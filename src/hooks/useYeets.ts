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
  const chain = getValidChainId(chainId);
  const graphQLClient = new GraphQLClient(chain);

  const { data, ...rest } = useQuery(
    ["list-yeetes", { shamanAddress }],
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
