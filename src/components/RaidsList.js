import React from 'react';
import Raid from './Raid';
import { useQuery, gql } from '@apollo/client';

const RAIDS_QUERY = gql`
  query {
    raids {
      name
      id
      timeFrame
      filePrefix
    }
  }
`;

const RaidsList = () => {
  const { data, error, loading } = useQuery(RAIDS_QUERY);
  //console.log(loading)
  //console.log(error)
  //console.log(data)

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  return (
    <div>
      {data && (
        <>
          {data.raids.map((raid) => (
            <Raid key={raid.id} raid={raid} />
          ))}
        </>
      )}
    </div>
  );
};

export default RaidsList;