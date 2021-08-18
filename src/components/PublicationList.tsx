import React, { useMemo } from 'react';
import PublicationItem from './PublicationItem';

export interface PublicationListType {
  node: {
    id: string;
    frontmatter: {
      publication: string;
      title: string;
      author: string;
      year: string;
      date: string;
      institution: string;
      url: string;
    };
  };
}

interface PublicationListProps{
  publication: string;
  year: string;
  publicationlist: PublicationListType[];
}

const PublicationList: React.FC<PublicationListProps> = ({ publication, year, publicationlist }) => {
  const mypublication = publication;
  const myyear = year;
  const publications = useMemo(
    () =>
      publicationlist.filter(
        ({
          node: {
            frontmatter: { publication, year },
          },
        }: PublicationListType) => publication.includes(mypublication) && year.includes(myyear),
      ),
    [mypublication, myyear, publicationlist],
  );
  return (
    <>
      {publications.map(({ node: { id, frontmatter } }: PublicationListType) => (
        <PublicationItem
          key={id}
          {...frontmatter}/>
      ))}
    </>
  );
};

export default PublicationList;
