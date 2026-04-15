import styled from 'styled-components';
import LeftSidebar from '../../components/leftSidebar/LeftSidebar';
import RightSidebar from '../../components/rightSidebar/RightSidebar';
import ChatBox from './../../components/chatbox/ChatBox';

/* 🌌 Full Page Layout */
const StyledChat = styled.div`
  min-height: 100vh;

  display: grid;
  grid-template-columns: 280px 1fr 260px;

  /* 📱 Tablet */
  @media (max-width: 1024px) {
    grid-template-columns: 250px 1fr;
  }

  /* 📱 Mobile */
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

/* 📦 Left Sidebar */
const LeftWrapper = styled.div`
  background: var(--color-grey-50);
  border-right: 1px solid var(--color-grey-200);

  height: 100vh;
  overflow-y: auto;

  /* Hide on mobile */
  @media (max-width: 768px) {
    display: none;
  }
`;

/* 💬 Chat Area */
const ChatWrapper = styled.div`
  background: var(--color-grey-100);

  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;

  /* Optional premium touch */
  background-image: linear-gradient(
    to bottom,
    var(--color-grey-100),
    var(--color-brand-50)
  );
`;

/* 📦 Right Sidebar */
const RightWrapper = styled.div`
  background: var(--color-grey-50);
  border-left: 1px solid var(--color-grey-200);

  height: 100vh;
  overflow-y: auto;

  /* Hide on tablet & mobile */
  @media (max-width: 1024px) {
    display: none;
  }
`;

function Chat() {
  return (
    <StyledChat>
      <LeftWrapper>
        <LeftSidebar />
      </LeftWrapper>

      <ChatWrapper>
        <ChatBox />
      </ChatWrapper>

      <RightWrapper>
        <RightSidebar />
      </RightWrapper>
    </StyledChat>
  );
}

export default Chat;