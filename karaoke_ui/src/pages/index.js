import Head from 'next/head';
import {
  Box,
  Container,
  Pagination,
  Stack,
  Unstable_Grid2 as Grid
} from '@mui/material';
import { YoutubeVideCard } from 'src/sections/index_page/youtubevideo-card';
import { YoutubeSearch } from 'src/sections/index_page/youtube-search';
import { useState, useEffect } from 'react';



const Page = () => {

  const [youtubeSearchResults, setYoutubeSearchResults] = useState([]);

  // const youtubeSearchResults = new Array();

  const getSearchResultData = (rowData) => {
    const test = new Array();
    rowData.forEach(element => {
      let youtubeSearchResultObj = new Object();

      youtubeSearchResultObj.videoTitle = element.title;
      youtubeSearchResultObj.videoId = element.id;
      youtubeSearchResultObj.video_link = element.link;
      youtubeSearchResultObj.thumbnailDetails = element.thumbnails[1];
      youtubeSearchResultObj.viewCount = element.viewCount;

      test.push(youtubeSearchResultObj)
    });
    setYoutubeSearchResults([...youtubeSearchResults, test]);
    console.log(youtubeSearchResults)
    
  };




  return (
    <>
      <Head>
        <title>
          Karaoke Maker
        </title>
      </Head>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8
        }}
      >
        <Container maxWidth="xl">
          <Stack spacing={3}>
            <Stack
              direction="row"
              justifyContent="space-between"
              spacing={4}
            >
              <Stack spacing={1}>
                <Stack
                  alignItems="center"
                  direction="row"
                  spacing={1}
                >
                </Stack>
              </Stack>
              <div>

              </div>
            </Stack>
            <YoutubeSearch getSearchResultData={getSearchResultData} />
            <Grid
              container
              spacing={3}
            >
              {youtubeSearchResults.map((eachSearchResult) => (
                <Grid
                  xs={12}
                  md={6}
                  lg={4}
                  key={eachSearchResult.videoId}
                >
                  {/* <YoutubeVideCard eachSearchResult={eachSearchResult} /> */}
                  <li key={eachSearchResult.videoId}>{eachSearchResult.videoTitle}</li>
                </Grid>

              ))}
            </Grid>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center'
              }}
            >
              <Pagination
                count={3}
                size="small"
              />
            </Box>
          </Stack>
        </Container>
      </Box>
    </>
  )
};

export default Page;