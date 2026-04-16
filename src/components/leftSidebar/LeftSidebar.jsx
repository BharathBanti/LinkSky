import { Search, MoreVertical } from 'lucide-react';
import styled from 'styled-components';
import assets from '../../assets/assets';

/* Sidebar */
const StyledLeftSidebar = styled.div`
  background-color: var(--color-brand-100);
  height: 100vh;
  width: 100%;
  max-width: 320px;
  border-right: 1px solid var(--color-grey-200);

  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

/* Top Section */
const LSTop = styled.div`
  padding: 16px;
  border-bottom: 1px solid var(--color-grey-200);
`;

const LSNav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
  }

  span {
    font-size: 35px;
    font-weight: bolder;
    color: var(--color-brand-600);
  }

  svg {
    width: 22px;
    height: 22px;
    color: var(--color-brand-600);
    cursor: pointer;
    transition: 0.2s;

    &:hover {
      color: var(--color-brand-800);
      transform: scale(1.1);
    }
  }
`;

const LinkSkyLogo = styled.img`
  max-width: 50px;
  animation:
    slideIn 0.8s ease,
    float 3s ease-in-out infinite 0.8s;

  @keyframes slideIn {
    from {
      opacity: 0;
      transform: translateX(-50px) scale(0.9);
    }
    to {
      opacity: 1;
      transform: translateX(0) scale(1);
    }
  }

  @keyframes float {
    0% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-6px);
    }
    100% {
      transform: translateY(0px);
    }
  }
`;

/* Search */
const LSSearch = styled.div`
  background-color: var(--color-grey-0);
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 12px;
  margin-top: 16px;
  border-radius: 10px;
  border: 1px solid var(--color-grey-200);

  svg {
    width: 18px;
    height: 18px;
    color: var(--color-grey-500);
  }

  input {
    border: none;
    outline: none;
    width: 100%;
    font-size: 14px;
    color: var(--color-grey-700);
    background: transparent;
  }
`;

/* Chat List */
const LSList = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 10px;

  /* Custom Scrollbar */
  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-thumb {
    background: var(--color-brand-200);
    border-radius: 10px;
  }
`;

/* Friend Item */
const Friends = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 16px;
  cursor: pointer;
  transition: 0.2s;
  font-weight: 600;
  color: black;
  border-radius: var(--border-radius-lg);

  &:hover {
    background-color: var(--color-brand-500);
    color: white;

    span {
      color: #e0e7ff;
    }
  }

  img {
    width: 42px;
    height: 42px;
    border-radius: 50%;
    object-fit: cover;
  }

  div {
    display: flex;
    flex-direction: column;
    overflow: hidden;

    p {
      font-size: 16px;
      font-weight: 500;
    }

    span {
      font-size: 14px;
      color: var(--color-grey-500);
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      max-width: 180px;
    }
  }
`;

function LeftSidebar() {
  return (
    <StyledLeftSidebar>
      <LSTop>
        <LSNav>
          <div>
            <LinkSkyLogo src={assets.logo} alt="LinkSky-logo" />
            <span>LinkSky</span>
          </div>
          <MoreVertical />
        </LSNav>

        <LSSearch>
          <Search />
          <input type="text" placeholder="Search users..." />
        </LSSearch>
      </LSTop>

      <LSList>
        {Array(14)
          .fill('')
          .map((_, index) => (
            <Friends key={index}>
              <img src={assets.user_01} alt="user" />
              <div>
                <p>Banti</p>
                <span>Hello, how are you?</span>
              </div>
            </Friends>
          ))}
      </LSList>
    </StyledLeftSidebar>
  );
}

export default LeftSidebar;
