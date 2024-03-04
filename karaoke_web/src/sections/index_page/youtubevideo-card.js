import PropTypes from 'prop-types';
import ArrowDownTrayIcon from '@heroicons/react/24/solid/ArrowDownTrayIcon';
import PlayCircleIcon from '@heroicons/react/24/solid/PlayCircleIcon';
import ClockIcon from '@heroicons/react/24/solid/ClockIcon';

import { Avatar, Box, Card, CardContent, Divider, Stack, SvgIcon, Typography, Button } from '@mui/material';
import YouTube from 'react-youtube';
import axiosInstance from 'src/lib/axios';

export const YoutubeVideoCard = (props) => {
  const { searchData } = props;

  const handleKaraokeBtn = videoLink => () => {
    axiosInstance.get('/api/create-karaoke-video?video_url=' + videoLink)
    .then((response) => {
      // props.getSearchResultData(response.data.result);
    })
    .catch((error) => {
      console.error('Error fetching posts:', error);
    });
  };
  return (
    <Card
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%'
      }}
    >
      <CardContent>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            pb: 3
          }}
        >

          <Avatar
            sx={{ height: '200px', width: '200px' }}
            src={searchData.thumbnailDetails.url}
            variant="square"
          />
          {/* <YouTube videoId={searchData.videoId}/> */}
        </Box>
        <Typography
          align="center"
          gutterBottom
          variant="p"
        >
          {searchData.videoTitle}
        </Typography>
      </CardContent>
      <Box sx={{ flexGrow: 1 }} />
      <Divider />
      <Stack
        alignItems="center"
        direction="row"
        justifyContent="space-between"
        spacing={2}
        sx={{ p: 2 }}
      >
        <Stack
          alignItems="center"
          direction="row"
          spacing={1}
        >
          <SvgIcon
            color="action"
            fontSize="small"
          >
            <ClockIcon />
          </SvgIcon>
          <Typography
            color="text.secondary"
            display="inline"
            variant="body2"
          >
            {searchData.viewCount.short}
          </Typography>
        </Stack>
        <Stack
          alignItems="center"
          direction="row"
          spacing={1}
        >
          <Button variant='outlined'>
            <SvgIcon
              color="action"
              fontSize="small"
            >
              <PlayCircleIcon />
            </SvgIcon>
            Stream
          </Button>
          <Button variant='outlined' onClick={handleKaraokeBtn(searchData.videoLink)}>
            <SvgIcon
              color="action"
              fontSize="small"
            >
              <ArrowDownTrayIcon />
            </SvgIcon>
            Karaoke
          </Button>
        </Stack>
      </Stack>
    </Card>
  );
};

YoutubeVideoCard.propTypes = {
  searchData: PropTypes.object.isRequired
};