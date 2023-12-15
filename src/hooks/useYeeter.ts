import { useQuery } from "react-query";
import { GraphQLClient } from "graphql-request";

import { GET_YEETER } from "../utils/graphQueries";
import { GRAPH_URL, getValidChainId } from "../utils/constants";
import { ValidNetwork } from "@daohaus/keychain-utils";
import { YeeterItem, YeeterMetadata } from "../utils/types";
import { listRecords } from "@daohaus/moloch-v3-data";
import {
  calcYeetIsActive,
  calcYeetIsComingSoon,
  calcYeetIsEnded,
  calcYeetIsFull,
} from "../utils/yeetDataHelpers";

export const useYeeter = ({
  chainId,
  daoId,
  shamanAddress,
}: {
  chainId?: ValidNetwork;
  daoId?: string;
  shamanAddress?: string;
}) => {
  const chain = getValidChainId(chainId);
  const graphQLClient = new GraphQLClient(GRAPH_URL[chain]);

  const { data, ...rest } = useQuery(
    ["get-yeeter", { shamanAddress }],
    async () => {
      const res = (await graphQLClient.request(GET_YEETER, {
        shamanAddress: shamanAddress?.toLowerCase(),
      })) as { yeeter: YeeterItem };
      let record;
      if (chainId) {
        record = await listRecords({
          networkId: chainId,
          filter: { dao: daoId, table: "yeetDetails" },
        });
      }
      const yeeter = {
        ...res.yeeter,
        isActive:
          res.yeeter &&
          calcYeetIsActive(res.yeeter.startTime, res.yeeter.endTime),
        isEnded: res.yeeter && calcYeetIsEnded(res.yeeter.endTime),
        isComingSoon: res.yeeter && calcYeetIsComingSoon(res.yeeter.startTime),
        isFull: res.yeeter && calcYeetIsFull(res.yeeter),
      } as YeeterItem;

      console.log("yeeter", yeeter);

      console.log("record", record);

      return {
        yeeter,
        metadata: record?.items[0]
          ? (record.items[0].parsedContent as YeeterMetadata)
          : ({
              daoId: daoId,
            } as YeeterMetadata),
      };
    },
    { enabled: !!shamanAddress && !!chainId && !!daoId }
  );

  return {
    ...data,
    ...rest,
  };
};
