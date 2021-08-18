import React from 'react';
import styled from '@emotion/styled';
import Img, { FluidObject } from 'gatsby-image';

interface FieldItemProps{
  title: string;
  excerpt: string;
  image: {
    childImageSharp: {
      fluid: FluidObject;
    };
  };
}

export const Title = styled.span`
  display: block;
  text-align: center;
  font-size: 2rem;
  font-weight: 500;
  margin: 2rem 1rem 1rem;
`;

export const Excerpt = styled.p`
  color: #757575;
  margin: 0 2rem 2rem;
`;

const FieldItem: React.FC<FieldItemProps> = ({
  title, excerpt,
  image: {
    childImageSharp: { fluid },
  } }) => {
  return (
    <figure>
      <Img fluid={fluid} alt={title} />
      <figcaption>
        <Title>{title}</Title>
        <Excerpt>{excerpt}</Excerpt>
      </figcaption>
    </figure>
  );
};

export default FieldItem;
