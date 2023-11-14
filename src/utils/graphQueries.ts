import { gql } from "graphql-request";

const yeeterFields = `
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
balance
`;

export const GET_YEETER = gql`
  query yeeter($shamanAddress: String!) {
    yeeter(id: $shamanAddress) {
      ${yeeterFields}
    }
  }
`;

export const GET_YEETERS = gql`
  {
    yeeters(first: 1000) {
      ${yeeterFields}

    }
  }
`;

export const LIST_YEETS = gql`
  query yeets($shamanAddress: String!) {
    yeets(
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