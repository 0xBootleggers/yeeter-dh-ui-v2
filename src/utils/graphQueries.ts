import { gql } from "graphql-request";

export const GET_YEETER = gql`
  query yeeter($shamanAddress: String!) {
    yeeter(id: $shamanAddress) {
      id
      createdAt
      dao {
        id
      }
      endTime
      startTime
      isShares
      multiplier
      minTribute
      maxTarget
    }
  }
`;

export const LIST_YEETS = gql`
  query yeets($shamanAddress: String!) {
    yeeter(
      where: { yeeter: $shamanAddress }
      orderBy: createdAt
      order: desc
      first: 1000
    ) {
      id
      createdAt
      contributor
      amount
      shares
      message
    }
  }
`;
