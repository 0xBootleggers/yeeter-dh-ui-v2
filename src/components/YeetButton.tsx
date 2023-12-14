import { ButtonRouterLink } from "./ButtonRouterLink";

export const YeetButton = () => {
  const isActive = true;

  return (
    <>
      {isActive && (
        <ButtonRouterLink to="yeet" size="lg" fullWidth={true}>
          YEET!
        </ButtonRouterLink>
      )}
    </>
  );
};
