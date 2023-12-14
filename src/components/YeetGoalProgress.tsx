import { DataIndicator, widthQuery } from "@daohaus/ui";
import styled from "styled-components";
import { ProgressBar } from "./ProgressBar";
import { formatValueTo, fromWei } from "@daohaus/utils";
import { YeeterItem } from "../utils/types";
import { calcProgressPerc } from "../utils/yeetDataHelpers";

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

export const YeetGoalProgress = ({ yeeter }: { yeeter: YeeterItem }) => {
  const percentageComplete = yeeter
    ? `${calcProgressPerc(yeeter.balance, yeeter.maxTarget)}%`
    : "0%";

  return (
    <>
      {!yeeter.isComingSoon && (
        <ProgressRow>
          <DataIndicator
            label="Raised"
            data={`${formatValueTo({
              value: fromWei(yeeter.balance),
              decimals: 3,
              format: "numberShort",
            })} of ${formatValueTo({
              value: fromWei(yeeter.maxTarget),
              decimals: 3,
              format: "numberShort",
            })} ETH`}
          />
          <div className="bar">
            <ProgressBar
              progressSection={[
                { percentage: percentageComplete, color: "green" },
              ]}
              backgroundColor="black"
            />
          </div>
        </ProgressRow>
      )}
    </>
  );
};
