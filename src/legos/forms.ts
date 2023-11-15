import { APP_TX } from "./tx";
import { CustomFormLego } from "./legoConfig";

export const APP_FORM: Record<string, CustomFormLego> = {
  YEET_FORM: {
    id: "YEET",
    title: "YEET",
    requiredFields: {
      amount: true,
    },
    log: true,
    tx: APP_TX.YEET,
    fields: [
      {
        id: "amount",
        type: "toWeiInput",
        label: "Yeet Amount",
        placeholder: "Yeet Yeet",
        expectType: "number",
      },
      {
        id: "message",
        type: "markdownField",
        label: "Message",
        placeholder: "yeet yeet yeet",
      },
    ],
  },
  SUMMON_YEETER: {
    id: "SUMMON_YEETER",
    title: "NEW YEET",
    requiredFields: {
      daoName: true,
      maxTarget: true,
      startTime: true,
      endTime: true,
      minTribute: true,
      multiplier: true,
      members: true,
    },
    log: true,
    tx: APP_TX.YEETER_SUMMON,
    fields: [
      {
        id: "daoName",
        type: "input",
        label: "Name",
        placeholder: "Yeet Yeet",
      },
      {
        id: "members",
        type: "membersInput",
        label: "Team Members",
        placeholder: "Yeet Yeet",
        info: "Input member list with member address on each line.",
      },

      {
        id: "times",
        type: "splitColumn",
        rows: [
          {
            rowId: "row1",
            left: {
              id: "startTime",
              type: "epochDatePicker",
              label: "Start Time",
              expectType: "number",
            },
            right: {
              id: "endTime",
              type: "epochDatePicker",
              label: "End Time",
              expectType: "number",
            },
          },
        ],
      },
      {
        id: "maxTarget",
        type: "toWeiInput",
        label: "Fundraising Goal (ETH)",
        placeholder: "69,420",
        expectType: "number",
      },
      {
        id: "tribute",
        type: "splitColumn",
        rows: [
          {
            rowId: "row1",
            left: {
              id: "minTribute",
              type: "toWeiInput",
              label: "Minimum Tribute (ETH)",
              placeholder: "0.01",
              expectType: "number",
            },
            right: {
              id: "multiplier",
              type: "lootPerYeet",
              label: "Loot per Minimum Tribute",
            },
          },
        ],
      },
    ],
  },
};
