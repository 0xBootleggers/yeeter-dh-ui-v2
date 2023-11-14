import { H1, ParLg, SingleColumnLayout } from "@daohaus/ui";
import styled from "styled-components";

const Contain = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
`;

const StyledH1 = styled(H1)`
  font-weight: 900;
  font-size: 10rem;
  line-height: 1;
`;

export const Wtf = () => {
  return (
    <SingleColumnLayout>
      <Contain>
        <StyledH1>WHAT THE ACTUAL FUCK?</StyledH1>
        <ParLg>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nisi
          lacus, dictum at ultricies et, varius ut lacus. Vestibulum ante ipsum
          primis in faucibus orci luctus et ultrices posuere cubilia curae;
          Nulla interdum lobortis nisi, a placerat leo auctor sed. Vestibulum
          ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia
          curae; Nam venenatis convallis est.{" "}
        </ParLg>
        <ParLg>
          {" "}
          Nullam et interdum felis, non scelerisque mi. Nunc blandit elementum
          venenatis. Donec vehicula ultrices lacus, mollis sollicitudin dui
          mollis sed. Quisque vitae ante non nunc consectetur ultricies ut
          efficitur tortor. Sed condimentum auctor mattis. Quisque venenatis,
          purus sit amet semper lacinia, nunc magna placerat est, nec faucibus
          ligula felis ut orci. Aliquam urna orci, sodales id elit quis,
          tristique tincidunt elit. Aliquam mollis eros non elementum finibus.
        </ParLg>
        <ParLg>
          Praesent id lectus sed erat convallis egestas vitae at metus. Etiam
          finibus elit nisl, vitae aliquam turpis viverra sit amet. Proin
          viverra risus posuere dui sodales, sed consectetur quam viverra.
          Vestibulum tempor vulputate magna, non lacinia erat consequat sed.
          Praesent convallis diam ultrices dictum pretium. Cras laoreet metus ac
          sapien ullamcorper, eget porta dolor varius. Donec elit quam,
          ultricies id commodo quis, aliquam ut nunc.
        </ParLg>
      </Contain>
    </SingleColumnLayout>
  );
};
