import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import Img from 'gatsby-image';

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

const Item = ({ title, image, excerpt }: { title: any; image: any; excerpt: any }) => (
  <figure>
    <Img fluid={image ? image.childImageSharp.fluid : {}} alt={title} />
    <figcaption>
      <Title>{title}</Title>
      <Excerpt>{excerpt}</Excerpt>
    </figcaption>
  </figure>
);

Item.propTypes = {
  title: PropTypes.string,
  excerpt: PropTypes.string,
  image: PropTypes.object.isRequired,
};

export default Item;
