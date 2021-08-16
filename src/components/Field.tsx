import React, { useMemo } from 'react';
// import PropTypes from 'prop-types';
import Item from '../components/Item';
import styled from '@emotion/styled';
import Img, { FluidObject } from 'gatsby-image';

export interface FieldType {
  node: {
    frontmatter: {
      title: string;
      excerpt: string;
      image: {
        childImageSharp: {
          fluid: FluidObject;
        };
      };
    };
    fields: {
      layout: string;
      slug: string;
    };
  };
}

interface FieldProps{
  fields: FieldType[];
}

export const Title = styled.span`
  display: block;
  font-size: 2rem;
  font-weight: 500;
  margin: 2rem 2rem 1rem;
`;

export const Copy = styled.p`
  color: #757575;
  margin: 0 2rem 2rem;
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 4rem;
  padding: 0 4rem;
  margin: 2rem 0;
`;

const Field: React.FC<FieldProps> = ({ fields }) => {
  const field = useMemo(
    () =>
      fields.filter(
        ({
          node: {
            fields: { layout },
          },
        }: FieldType) => layout.includes('field'),
      ),
    [fields],
  );

  return (
    <Container>
      {field.map(
        ({
          node: {
            frontmatter: { title, image, excerpt },
            fields: { slug },
          },
        }: FieldType) => (
          <Item key={slug} title={title} image={image} excerpt={excerpt} />
        ),
      )}
    </Container>
  );
};

export default Field;
