import React from 'react';
import styled from '@emotion/styled';

interface PublicationItemProps{
  title: string;
  author: string;
  date: string;
  institution: string;
  url: string;
}

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-item: center;
  //padding: 2rem 3rem;
  margin: 0 2rem 0.5rem;
`;

export const Information = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 1.7rem;
  margin: 1rem 1rem 0;
`;

export const SubInformation = styled.div`
  font-size: 1.6rem;
  color: #757575;
`;

const Publication: React.FC<PublicationItemProps> = ({ title, author, date, institution, url }) => {
  return (
    <Container>
      <Information>
        <SubInformation>
          {author}
        </SubInformation>
        <a href={url}>
          {title}
        </a>
        <SubInformation>
          {date}{', '}{institution}
        </SubInformation>
      </Information>
    </Container>
  );
};

export default Publication;
