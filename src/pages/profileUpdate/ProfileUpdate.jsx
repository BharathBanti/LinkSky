import React, { useState, useEffect } from 'react';
import assets from '../../assets/assets';
import styled from 'styled-components';
import Button from '../../ui/Button';

/* CONTAINER */
const ProfileContainer = styled.div`
  min-height: 100vh;
  background:
    linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)),
    url(${assets.bg_banner}) no-repeat center top;
  background-size: cover;

  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 40px;
  }
`;

/* LOGO */
const LinkSkyLogo = styled.img`
  width: max(20vw, 200px);
`;

/* FORM */
const ProfileForm = styled.form`
  min-width: 360px;
  background: var(--color-grey-50);
  padding: 25px 30px;
  border-radius: var(--border-radius-lg);
  display: flex;
  flex-direction: column;
  gap: 18px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
`;

/* HEADING */
const FormHeading = styled.h2`
  text-align: center;
  font-weight: 500;
`;

/* INPUT */
const FormInput = styled.input`
  padding: 10px 12px;
  border: 1px solid var(--color-grey-300);
  border-radius: var(--border-radius-sm);

  &:focus {
    outline: 2px solid var(--color-brand-600);
    outline-offset: -1px;
  }
`;

/* TEXTAREA */
const TextArea = styled.textarea`
  padding: 10px 12px;
  border: 1px solid var(--color-grey-300);
  border-radius: var(--border-radius-sm);
  resize: none;
  height: 80px;

  &:focus {
    outline: 2px solid var(--color-brand-600);
    outline-offset: -1px;
  }
`;

/* AVATAR WRAPPER */
const AvatarWrapper = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  cursor: pointer;
`;

/* AVATAR */
const ProfileAvatar = styled.img`
  width: 140px;
  height: 140px;
  border-radius: 50%;
  object-fit: cover;
  transition: 0.3s;

  &:hover {
    transform: scale(1.05);
  }
`;

const UploadText = styled.span`
  font-size: 13px;
  color: var(--color-grey-600);
`;

function ProfileUpdate() {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);

  useEffect(() => {
    if (!image) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setPreview(null);
      return;
    }

    const url = URL.createObjectURL(image);
    setPreview(() => url);

    return () => URL.revokeObjectURL(url);
  }, [image]);

  return (
    <ProfileContainer>
      <LinkSkyLogo src={assets.logo} alt="LinkSky-logo" />

      <ProfileForm>
        <FormHeading>Profile Details</FormHeading>

        <AvatarWrapper htmlFor="avatar">
          <FormInput
            type="file"
            id="avatar"
            accept=".png, .jpg, .jpeg"
            hidden
            required
            onChange={(e) => setImage(e.target.files[0])}
          />

          <ProfileAvatar
            src={preview || assets.empty_avatar}
            alt="profile"
          />

          <UploadText>Upload profile image</UploadText>
        </AvatarWrapper>

        <FormInput type="text" placeholder="Your name" required />
        <TextArea placeholder="Write profile bio" required />

        <Button>Save</Button>
      </ProfileForm>
    </ProfileContainer>
  );
}

export default ProfileUpdate;
