// ModRating.tsx

import React, { useState } from 'react';
import { Rating, Button } from '@mui/material';

const ModRating = () => {
  const [rating, setRating] = useState<number | null>(3); // Default rating

  const handleRatingChange = (event: React.ChangeEvent<{}>, newValue: number | null) => {
    if (newValue !== null) {
      setRating(newValue);
    }
  };

  return (
    <div>
      <Rating
        value={rating || 0}
        onChange={handleRatingChange}
        precision={0.5}
        size="large"
      />
      <Button onClick={() => alert(`Rating set to: ${rating}`)}>Save Rating</Button>
    </div>
  );
};

export default ModRating;
