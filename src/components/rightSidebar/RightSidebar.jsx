import styled from "styled-components";
import assets from "../../assets/assets";
import Button from "./../../ui/Button";

/* ONLINE DOT */
const OnlineDot = styled.div`
  width: 12px;
  height: 12px;
  background-color: var(--color-green-700);
  border-radius: 50%;
  position: absolute;
  bottom: 2px;
  right: 2px;
  border: 2px solid white;
`;

/* AVATAR */
const AvatarWrapper = styled.div`
  position: relative;
  width: 80px;
  height: 80px;

  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
  }
`;

/* MAIN */
const StyledRightSidebar = styled.div`
  background-color: var(--color-brand-100);
  height: 100vh;
  width: 100%;
  max-width: 320px;
  border-left: 1px solid var(--color-grey-200);

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

/* PROFILE SECTION */
const RSProfile = styled.div`
  padding: 25px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  h3 {
    margin-top: 12px;
    font-size: 18px;
    color: var(--color-grey-800);
  }

  p {
    font-size: 13px;
    color: var(--color-grey-500);
    margin-top: 4px;
  }
`;

/* DIVIDER */
const Divider = styled.hr`
  border: none;
  border-top: 1px solid var(--color-grey-200);
  margin: 0;
`;

/* MEDIA SECTION */
const RSMedia = styled.div`
  padding: 20px;
  overflow-y: scroll;

  /* Custom Scrollbar */
  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-thumb {
    background: var(--color-brand-200);
    border-radius: 10px;
  }

  > p {
    font-size: 14px;
    font-weight: 600;
    color: var(--color-grey-700);
    margin-bottom: 10px;
  }

  div {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 8px;

    img {
      width: 100%;
      aspect-ratio: 1/1;
      border-radius: 8px;
      object-fit: cover;
      cursor: pointer;
      transition: 0.2s;

      &:hover {
        transform: scale(1.05);
      }
    }
  }
`;

/* LOGOUT SECTION */
const LogoutWrapper = styled.div`
  text-align: center;
  padding: 15px;
  border-top: 1px solid var(--color-grey-200);
`;

function RightSidebar() {
  return (
    <StyledRightSidebar>
      {/* PROFILE */}
      <RSProfile>
        <AvatarWrapper>
          <img src={assets.user_01} alt="profile-image" />
          <OnlineDot />
        </AvatarWrapper>
        <h3>Kaira Joshini</h3>
        <p>Hello there, I am using LinkSky.</p>
      </RSProfile>

      <Divider />

      {/* MEDIA */}
      <RSMedia>
        <p>Media</p>
        <div>
          {Array(120)
            .fill("")
            .map((_, i) => (
              <img key={i} src={assets.user_01} alt="media" />
            ))}
        </div>
      </RSMedia>

      {/* LOGOUT */}
      <LogoutWrapper>
        <Button $variation="danger" $size="small">
          Logout
        </Button>
      </LogoutWrapper>
    </StyledRightSidebar>
  );
}

export default RightSidebar;