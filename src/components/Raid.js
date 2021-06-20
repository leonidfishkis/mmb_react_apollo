import React from 'react';

const Raid = (props) => {
  const { raid } = props;
  return (
    <div>
      <div>
        {raid.name} {raid.timeFrame} {raid.filePrefix} ({raid.id})
      </div>
    </div>
  );
};

export default Raid;