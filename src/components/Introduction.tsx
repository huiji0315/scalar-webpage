import React, { useMemo } from 'react';
// import PropTypes from 'prop-types';
import Item from '../components/Item';
import styled from '@emotion/styled';
import Img, { FluidObject } from 'gatsby-image';
import Field, { FieldType } from './Field';

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
    display: flex;
  //display: grid;
  //grid-template-columns: repeat(3, 1fr);
  //grid-gap: 4rem;
  padding: 0 4rem;
  margin: 4rem 0;
`;

const Introduction: React.FC<FieldProps> = ({ fields }) => {
  const field = useMemo(
    () =>
      fields.filter(
        ({
          node: {
            fields: { layout },
          },
        }: FieldType) => layout.includes('home'),
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

export default Introduction;
