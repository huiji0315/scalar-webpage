import React from 'react';
import styled from '@emotion/styled';
import Img, { FluidObject } from 'gatsby-image';
import { FaBook } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

interface ProfileItemProps{
  name: string;
  email: string;
  field: string;
  image: {
    childImageSharp: {
      fluid: FluidObject;
    };
  };
}

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-item: center;
  margin: 0 2rem 0.5rem;
`;

export const Information = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 1.7rem;
  margin: 1rem 1rem 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,
              Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`;

const Image = styled(Img)`
  width: 100px;
  height: 140px;

  @media (max-width: 450px) {
    display: none;
  }
`;

export const Name = styled.div`
  font-size: 1.8rem;
  font-weight: 600;
`;

const Profile: React.FC<ProfileItemProps> = ({
  name, email, field,
  image: {
    childImageSharp: { fluid },
  },
}) => {
  return (
    <Container>
      <Image fluid={fluid} alt={name} />
      <Information>
        <Name>
          {name}
        </Name>
        <div>
          <MdEmail/>{' '}{email}
        </div>
        <div>
          <FaBook/>{' '}{field}
        </div>
      </Information>
    </Container>
  );
};

export default Profile;
