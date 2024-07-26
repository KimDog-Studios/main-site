// components/ModRating.tsx

import React, { useState, useEffect } from 'react';
import { Rating, Box } from '@mui/material';
import { db, doc, setDoc, getDoc, updateDoc } from '../firebaseConfig';

interface ModRatingProps {
  modId: string; // Unique identifier for the mod
  initialRating: number | null;
}

const ModRating: React.FC<ModRatingProps> = ({ modId, initialRating }) => {
  const [rating, setRating] = useState<number | null>(initialRating);

  useEffect(() => {
    const fetchRating = async () => {
      const docRef = doc(db, 'modRatings', modId);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setRating(docSnap.data()?.rating || null);
      }
    };
    fetchRating();
  }, [modId]);

  const handleRatingChange = async (event: React.ChangeEvent<unknown>, newValue: number | null) => {
    setRating(newValue);

    const docRef = doc(db, 'modRatings', modId);
    if (rating === null) {
      await setDoc(docRef, { rating: newValue });
    } else {
      await updateDoc(docRef, { rating: newValue });
    }
  };

  return (
    <Box sx={{ mt: 2, mb: 2 }}>
      <Rating
        name={`rating-${modId}`}
        value={rating}
        onChange={handleRatingChange}
        precision={0.5}
        sx={{
          '& .MuiRating-iconFilled': {
            color: '#ffb400', // Customize color for filled stars
          },
          '& .MuiRating-iconHover': {
            color: '#ffb400', // Customize color for hovered stars
          },
          '& .MuiRating-iconEmpty': {
            color: '#e4e5e9', // Customize color for empty stars
          },
          fontSize: '2rem', // Adjust size of stars
          display: 'flex',
          alignItems: 'center',
        }}
      />
    </Box>
  );
};

export default ModRating;
