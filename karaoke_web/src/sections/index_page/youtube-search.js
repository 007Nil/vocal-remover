'use client';
import MagnifyingGlassIcon from '@heroicons/react/24/solid/MagnifyingGlassIcon';
import { Card, InputAdornment, OutlinedInput, SvgIcon } from '@mui/material';
import axiosInstance from 'src/utils/axios';
import { useState } from 'react';

export const YoutubeSearch = (props) => {
  const [inputValue, setInputValue] = useState('');
  

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };
  const handleAdornmentClick = () => {
    props.setLoadingStatus(true);
    axiosInstance.get('/api/youtube-search?query=' + inputValue)
      .then((response) => {
        props.getSearchResultData(response.data.result);
        props.setLoadingStatus(false);
      })
      .catch((error) => {
        console.error('Error fetching posts:', error);
      });
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      props.setLoadingStatus(true);
      axiosInstance.get('/api/youtube-search?query=' + inputValue)
        .then((response) => {
          props.getSearchResultData(response.data.result);
          props.setLoadingStatus(false);
        })
        .catch((error) => {
          console.error('Error fetching posts:', error);
        });
    }
  };

  return (
    <Card sx={{ p: 2 }}>
      <OutlinedInput
        value={inputValue}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
        fullWidth
        placeholder="Search Videos on Youtube"
        startAdornment={(
          <InputAdornment
            position="start"

          >
            <SvgIcon
              color="action"
              fontSize="small"
              onClick={handleAdornmentClick}
            >
              <MagnifyingGlassIcon />
            </SvgIcon>
          </InputAdornment>
        )}
        sx={{ maxWidth: "full" }}
      />
    </Card>
  )
};
