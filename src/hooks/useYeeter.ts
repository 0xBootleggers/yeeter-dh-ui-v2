import { useQuery } from "react-query";
import { GraphQLClient } from "graphql-request";

import { GET_YEETER } from "../utils/graphQueries";
import { GRAPH_URL, getValidChainId } from "../utils/constants";

export const useYeeter = ({
  chainId,
  shamanAddress,
}: {
  chainId?: string;
  shamanAddress?: string;
}) => {
  const chain = getValidChainId(chainId);
  const graphQLClient = new GraphQLClient(chain);

  const { data, ...rest } = useQuery(
    ["get-yeeter", { shamanAddress }],
    async () => {
      const res = await graphQLClient.request(GET_YEETER, {
        shamanAddress: shamanAddress?.toLowerCase(),
      });
    },
    { enabled: !!shamanAddress && !!chainId }
  );

  console.log("data", data);

  return {
    yeeter: data,
    ...rest,
  };
};
