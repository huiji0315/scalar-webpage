import React, { useMemo } from 'react';
import styled from '@emotion/styled';
import ProfileItem from './ProfileItem';
import Img, { FluidObject } from 'gatsby-image';

export interface ProfileType {
  node: {
    id: string;
    frontmatter: {
      name: string;
      course: string;
      email: string;
      field: string;
      image: {
        childImageSharp: {
          fluid: FluidObject;
        };
      };
    };
  };
}

interface ProfileProps{
  course: string;
  profilelist: ProfileType[];
}

const Profile: React.FC<ProfileProps> = ({ course, profilelist }) => {
  const mycourse = course;
  const profile = useMemo(
    () =>
      profilelist.filter(
        ({
          node: {
            frontmatter: { course },
          },
        }: ProfileType) => course.includes(mycourse),
      ),
    [mycourse, profilelist],
  );
  return (
    <>
      {profile.map(({ node: { id, frontmatter } }: ProfileType) => (
        <ProfileItem
          key={id}
          {...frontmatter}/>
      ))}
    </>
  );
};

export default Profile;
