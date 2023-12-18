import { DataIndicator, widthQuery } from "@daohaus/ui";
import styled from "styled-components";
import { ProgressBar } from "./ProgressBar";
import {
  formatDistanceToNowFromSeconds,
  formatShortDateTimeFromSeconds,
} from "@daohaus/utils";
import { YeeterItem } from "../utils/types";
import { calcDurationPerc } from "../utils/yeetDataHelpers";

const SectionContainer = styled.div`
  margin-top: 2rem;
`;

const ProgressRow = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-between;
  .bar {
    width: 100%;
  }

  @media ${widthQuery.xs} {
    flex-direction: column;
    .bar {
      width: 100%;
    }
  }
`;

export const YeetTimeBlock = ({ yeeter }: { yeeter: YeeterItem }) => {
  if (yeeter.isEnded) {
    return (
      <SectionContainer>
        <DataIndicator
          label="Yeet Ended at"
          data={formatShortDateTimeFromSeconds(yeeter?.endTime)}
        />
      </SectionContainer>
    );
  }

  if (yeeter.isComingSoon) {
    return (
      <SectionContainer>
        <DataIndicator
          label="Yeet Start"
          data={formatShortDateTimeFromSeconds(yeeter?.startTime)}
        />
      </SectionContainer>
    );
  }

  const percentageComplete = yeeter
    ? `${calcDurationPerc(yeeter.startTime, yeeter.endTime)}%`
    : "0%";

  return (
    <SectionContainer>
      <ProgressRow>
        <DataIndicator
          label="Yeet Ends"
          data={formatDistanceToNowFromSeconds(yeeter?.endTime)}
        />
        <div className="bar">
          <ProgressBar
            progressSection={[
              { percentage: percentageComplete, color: "pink" },
            ]}
            backgroundColor="black"
          />
        </div>
      </ProgressRow>
    </SectionContainer>
  );
};
