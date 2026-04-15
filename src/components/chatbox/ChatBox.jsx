import { Image } from 'lucide-react';
import { Send } from 'lucide-react';
import styled from 'styled-components';
import assets from '../../assets/assets';
import { CircleQuestionMark } from 'lucide-react';

const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

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

const OnlineDot = styled.div`
  width: 15px;
  height: 15px;
  background-color: var(--color-green-700);
  border-radius: 50%;
  position: absolute;
  bottom: 2px;
  right: 2px;
  border: 2px solid white;
`;

const AvatarWrapper = styled.div`
  position: relative;
  width: 42px;
  height: 42px;

  img {
    border-radius: 50%;
    width: 42px;
    height: 42px;
    aspect-ratio: 1/1;
  }
`;

const StyledChatBox = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ChatUser = styled.div`
  background-color: var(--color-brand-200);
  border-bottom: 1px solid var(--color-grey-400);
  padding: 10px 15px;
  display: flex;
  align-items: center;
  gap: 10px;

  p {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    font-weight: 600;
    font-size: 20px;
    color: var(--color-grey-800);
  }
`;

const ChatInput = styled.div`
  background-color: var(--color-brand-200);
  border-bottom: 1px solid var(--color-grey-400);
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px 15px;

  input {
    flex: 1;
    border: none;
    outline: none;
    padding: 10px;
    font-size: 16px;
    color: var(--color-grey-700);
    border: 1px solid var(--color-grey-400);
    border-radius: var(--border-radius-sm);

    &:focus {
      outline: 2px solid var(--color-brand-600);
      outline-offset: -1px;
    }
  }
`;

const ChatMessage = styled.div`
  height: calc(100%-70px);
  padding-bottom: 50px;
  overflow-y: scroll;
  
`;

function ChatBox() {
  return (
    <StyledChatBox>
      <ChatUser>
        <AvatarWrapper>
          <img src={assets.user_01} alt="user" />
          <OnlineDot />
        </AvatarWrapper>
        <p>
          Kaira Joshini
          <CircleQuestionMark />
        </p>
      </ChatUser>
      <ChatMessage>
        <S-MSG>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            doloremque tempora animi ipsam dolor nesciunt at repudiandae
            consectetur vitae, illum debitis earum ab rerum reiciendis modi,
            obcaecati sapiente ad asperiores.
          </p>
          <div>
            <img src={assets.user_01} alt="sender-image" />
            <p>2:33 PM</p>
          </div>
        </S-MSG>
        <R-MSG>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            doloremque tempora animi ipsam dolor nesciunt at repudiandae
            consectetur vitae, illum debitis earum ab rerum reiciendis modi,
            obcaecati sapiente ad asperiores.
          </p>
          <div>
            <img src={assets.user_01} alt="sender-image" />
            <p>2:33 PM</p>
          </div>
        </R-MSG>
      </ChatMessage>
      <ChatInput>
        <input type="text" placeholder="Send a message" />
        <input type="file" id="image" accept="image/png, image/jpg" hidden />
        <label htmlFor="image">
          <Icon>
            <Image />
          </Icon>
        </label>
        <Icon>
          <Send />
        </Icon>
      </ChatInput>
    </StyledChatBox>
  );
}

export default ChatBox;
