import { Image, Send, CircleQuestionMark } from 'lucide-react';
import styled, { css } from 'styled-components';
import assets from '../../assets/assets';

/* ICON */
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
  width: 42px;
  height: 42px;

  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
  }
`;

/* MAIN */
const StyledChatBox = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

/* HEADER */
const ChatUser = styled.div`
  background-color: var(--color-brand-200);
  border-bottom: 1px solid var(--color-grey-300);
  padding: 10px 15px;
  display: flex;
  align-items: center;
  gap: 10px;

  p {
    flex: 1;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: 600;
    font-size: 16px;
    color: var(--color-grey-800);
  }

  svg {
    color: var(--color-brand-600);
    cursor: pointer;

    &:hover {
      color: var(--color-brand-800);
    }
  }
`;

/* MESSAGES AREA */
const ChatMessage = styled.div`
  flex: 1;
  padding: 15px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 12px;

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-thumb {
    background: var(--color-brand-200);
    border-radius: 10px;
  }
`;

/* COMMON MESSAGE STYLE */
const messageBase = css`
  max-width: 75%;
  display: flex;
  gap: 8px;
  align-items: flex-end;
`;

/* SENDER */
const Smsg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  ${messageBase};
  align-self: flex-end;
  color: white;

  > img {
    max-width: 300px;
    border-radius: 12px 12px 0 12px;
  }

  > p {
    background: var(--color-brand-600);
    padding: 10px 12px;
    border-radius: 12px 12px 0 12px;
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: -20px;

    img {
      width: 26px;
      height: 26px;
      border-radius: 50%;
    }

    p {
      font-size: 10px;
      color: var(--color-grey-600);
      white-space: nowrap;
    }
  }
`;

/* RECEIVER */
const Rmsg = styled.div`
  ${messageBase};
  align-self: flex-start;
  color: var(--color-grey-800);
  flex-direction: row-reverse;

  > img {
    max-width: 300px;
    border-radius: 12px 12px 12px 0;
  }

  > p {
    background: var(--color-brand-200);
    padding: 10px 12px;
    border-radius: 12px 12px 12px 0;
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: -20px;

    img {
      width: 26px;
      height: 26px;
      border-radius: 50%;
    }

    p {
      font-size: 10px;
      color: var(--color-grey-600);
      white-space: nowrap;
    }
  }
`;

/* INPUT */
const ChatInput = styled.div`
  background-color: var(--color-brand-200);
  border-top: 1px solid var(--color-grey-300);
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 15px;

  input[type='text'] {
    flex: 1;
    border: 1px solid var(--color-grey-300);
    border-radius: 20px;
    padding: 10px 14px;
    font-size: 14px;
    outline: none;
  }
`;

/* SEND BUTTON */
const SendButton = styled.div`
  background: var(--color-brand-600);
  padding: 10px;
  border-radius: 50%;
  display: flex;
  cursor: pointer;

  svg {
    color: white;
    width: 18px;
    height: 18px;
  }

  &:hover {
    background: var(--color-brand-700);
  }
`;

function ChatBox() {
  return (
    <StyledChatBox>
      {/* HEADER */}
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

      {/* MESSAGES */}
      <ChatMessage>
        <Smsg>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
            assumenda veniam aperiam nobis. A minima deserunt sapiente
            voluptatibus unde temporibus fugit soluta voluptatum voluptates,
            eius dolore. Aliquam, ex cum. Labore?
          </p>
          <div>
            <img src={assets.user_01} alt="sender" />
            <p>2:33 PM</p>
          </div>
        </Smsg>

        <Rmsg>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
            illum maiores aut modi recusandae minus suscipit magnam illo
            voluptatum voluptates? Voluptate ab debitis porro facilis velit id
            laborum odio cupiditate?
          </p>
          <div>
            <img src={assets.user_01} alt="receiver" />
            <p>2:33 PM</p>
          </div>
        </Rmsg>
        <Smsg>
          <img src={assets.user_01} alt="receiver" />
          <div>
            <img src={assets.user_01} alt="sender" />
            <p>2:33 PM</p>
          </div>
        </Smsg>
        <Smsg>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
            assumenda veniam aperiam nobis. A minima deserunt sapiente
            voluptatibus unde temporibus fugit soluta voluptatum voluptates,
            eius dolore. Aliquam, ex cum. Labore?
          </p>
          <div>
            <img src={assets.user_01} alt="sender" />
            <p>2:33 PM</p>
          </div>
        </Smsg>

        <Rmsg>
          <img src={assets.user_01} alt="receiver" />
          <div>
            <img src={assets.user_01} alt="receiver" />
            <p>2:33 PM</p>
          </div>
        </Rmsg>
        <Smsg>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
            assumenda veniam aperiam nobis. A minima deserunt sapiente
            voluptatibus unde temporibus fugit soluta voluptatum voluptates,
            eius dolore. Aliquam, ex cum. Labore?
          </p>
          <div>
            <img src={assets.user_01} alt="sender" />
            <p>2:33 PM</p>
          </div>
        </Smsg>

        <Rmsg>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
            illum maiores aut modi recusandae minus suscipit magnam illo
            voluptatum voluptates? Voluptate ab debitis porro facilis velit id
            laborum odio cupiditate?
          </p>
          <div>
            <img src={assets.user_01} alt="receiver" />
            <p>2:33 PM</p>
          </div>
        </Rmsg>
      </ChatMessage>

      {/* INPUT */}
      <ChatInput>
        <input type="text" placeholder="Send a message" />

        <input type="file" id="image" accept="image/png, image/jpg" hidden />

        <label htmlFor="image">
          <Icon>
            <Image />
          </Icon>
        </label>

        <SendButton>
          <Send />
        </SendButton>
      </ChatInput>
    </StyledChatBox>
  );
}

export default ChatBox;
