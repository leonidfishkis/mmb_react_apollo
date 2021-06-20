import React, { useState } from 'react';
import { useMutation, gql } from '@apollo/client';

const CREATE_RAID_MUTATION = gql`
  mutation createRaidMutation($name: String!, $timeFrame: String!, $filePrefix: String) {
    createRaid(name: $name, timeFrame: $timeFrame, filePrefix: $filePrefix) {
      id
      name
      timeFrame
      filePrefix
    }
  }
`;


const CreateRaid = () => {

  const [formState, setFormState] = useState({
    name: '',
    timeFrame: '',
    filePrefix: '',
  });

  const [createRaid] = useMutation(CREATE_RAID_MUTATION, {
    variables: {
      name: formState.name,
      timeFrame: formState.timeFrame,
      filePrefix: formState.filePrefix,
    }
  });

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          createRaid();
        }}
      >
        <div className="flex flex-column mt3">
          <input
            className="mb2"
            value={formState.name}
            onChange={(e) =>
              setFormState({
                ...formState,
                name: e.target.value
              })
            }
            type="text"
            placeholder="A name for new raid"
          />
          <input
            className="mb2"
            value={formState.timeFrame}
            onChange={(e) =>
              setFormState({
                ...formState,
                timeFrame: e.target.value
              })
            }
            type="text"
            placeholder="The raid dates"
          />
          <input
            className="mb2"
            value={formState.filePrefix}
            onChange={(e) =>
              setFormState({
                ...formState,
                filePrefix: e.target.value
              })
            }
            type="text"
            placeholder="The prefix for all raid files"
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CreateRaid;