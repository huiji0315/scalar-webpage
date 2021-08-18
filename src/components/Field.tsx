import React, { useMemo } from 'react';
import FieldItem from './FieldItem';
import styled from '@emotion/styled';
import { FluidObject } from 'gatsby-image';

export interface FieldType {
  node: {
    frontmatter: {
      title: string;
      type: string;
      index: number;
      excerpt: string;
      image: {
        childImageSharp: {
          fluid: FluidObject;
        };
      };
    };
    fields: {
      slug: string;
    };
  };
}

interface FieldProps{
  fields: FieldType[];
}

export const BigTitle = styled.span`
  display: flex;
  width: 100%;
  font-size: 3rem;
  font-weight: 500;
  margin: 3rem 4rem 1rem;
  padding: 1rem;

  @media (max-width: 500px) {
    font-size: 2.5rem;
  }
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 4rem;
  padding: 0 2rem;
  margin: 4rem 1rem 6rem;
  text-align: center;

  @media (max-width: 900px) {
    grid-template-rows: 1fr 1fr 1fr;
    grid-template-columns: 1fr;
    grid-row-gap: 30px;
  }
`;

const Field: React.FC<FieldProps> = ({ fields }) => {
  const field = useMemo(
    () =>
      fields.filter(
        ({
          node: {
            frontmatter: { type },
          },
        }: FieldType) => type.includes('field'),
      ),
    [fields],
  );

  return (
    <>
      <BigTitle>Research Topics</BigTitle>
      <Container>
        {field.map(
          ({
            node: {
              frontmatter: { title, image, excerpt },
              fields: { slug },
            },
          }: FieldType) => (
            <FieldItem key={slug} title={title} image={image} excerpt={excerpt} />
          ),
        )}
      </Container>
    </>
  );
};

export default Field;
