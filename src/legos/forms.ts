import { APP_TX } from "./tx";
import { CustomFormLego } from "./legoConfig";
import { FIELD } from "@daohaus/moloch-v3-legos";

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
      goal: true,
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
        id: "goal",
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
  METADATA_SETTINGS: {
    id: "METADATA_SETTINGS",
    title: "Update Yeet Details",
    tx: APP_TX.UPDATE_METADATA_SETTINGS,
    fields: [
      {
        ...FIELD.DESCRIPTION,
        id: "projectDetails",
        label: "Project Details",
      },
      {
        ...FIELD.DESCRIPTION,
        id: "missionStatement",
        label: "Mission Statement",
      },
      { ...FIELD.LINK, id: "icon", label: "Campaign Icon" },
      {
        id: "links",
        type: "formSegment",
        title: "Add links to important content for your DAO",
        fields: [
          { ...FIELD.LINK, id: "discord", label: "Discord" },
          { ...FIELD.METADATA_LINK, id: "github", label: "Github" },
          { ...FIELD.METADATA_LINK, id: "blog", label: "Blog" },
          { ...FIELD.METADATA_LINK, id: "telegram", label: "Telegram" },
          { ...FIELD.METADATA_LINK, id: "twitter", label: "Twitter" },
          { ...FIELD.METADATA_LINK, id: "web", label: "Website" },
          { ...FIELD.METADATA_LINK, id: "custom1", label: "Custom Link 1" },
          { ...FIELD.METADATA_LINK, id: "custom2", label: "Custom Link 2" },
          { ...FIELD.METADATA_LINK, id: "custom3", label: "Custom Link 3" },
        ],
      },
    ],
  },
};
