import { useProfile } from "@daohaus/moloch-v3-hooks";
import { DataMd, ProfileAvatar } from "@daohaus/ui";
import { truncateAddress } from "@daohaus/utils";
import styled from "styled-components";

const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

type YeeterProfileProps = {
  address: string;
};
export const ContributorProfile = ({ address }: YeeterProfileProps) => {
  const { profile } = useProfile({
    address,
  });

  console.log("profile", profile);

  return (
    <ProfileContainer>
      <ProfileAvatar address={address} image={profile?.avatar} />
      <DataMd>{profile?.ens || truncateAddress(address)}</DataMd>
    </ProfileContainer>
  );
};
