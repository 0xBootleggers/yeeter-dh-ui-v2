import { Tag } from "@daohaus/ui";
import { YeeterItem } from "../utils/types";
import {
  calcYeetIsActive,
  calcYeetIsComingSoon,
  calcYeetIsEnded,
  calcYeetIsFull,
} from "../utils/yeetDataHelpers";

export const YeeterStatusTag = ({
  yeeter,
  fontSize,
}: {
  yeeter: YeeterItem;
  fontSize: string;
}) => {
  const isEnded = calcYeetIsEnded(yeeter);
  const isFull = calcYeetIsFull(yeeter);

  if (isEnded || isFull) {
    return (
      <Tag tagColor="green" fontSize={fontSize}>
        Yeet Complete
      </Tag>
    );
  }

  const isComing = calcYeetIsComingSoon(yeeter);
  if (isComing) {
    return (
      <Tag tagColor="blue" fontSize={fontSize}>
        Coming Soon
      </Tag>
    );
  }

  const isActive = calcYeetIsActive(yeeter);
  if (isActive) {
    return (
      <Tag tagColor="yellow" fontSize={fontSize}>
        Yeeting Now!
      </Tag>
    );
  }

  return null;
};
