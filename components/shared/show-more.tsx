'use client';
import React, { useState } from 'react';

import { truncateString } from '@/lib/utils';

import { Text } from '../typography/text';

const ShowMore = ({
  text,
  wordsDisplay,
}: {
  text: string;
  wordsDisplay: number;
}) => {
  const [showMore, setShowMore] = useState(false);

  const ShowMoreButton = () => (
    <button
      className='ml-1 text-sm font-medium text-muted-foreground'
      onClick={() => setShowMore(!showMore)}
    >
      {showMore ? 'Show less' : 'Show more'}
    </button>
  );

  return (
    <React.Fragment>
      <Text>{showMore ? text : truncateString(text, wordsDisplay)}</Text>
      {text.length > wordsDisplay && <ShowMoreButton />}
    </React.Fragment>
  );
};

ShowMore.displayName = 'ShowMore';
export default ShowMore;
