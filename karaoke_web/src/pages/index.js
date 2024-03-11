import Head from 'next/head';
import {
  Box,
  Container,
  Pagination,
  Stack,
  Unstable_Grid2 as Grid
} from '@mui/material';
import { YoutubeVideoCard } from 'src/sections/index_page/youtubevideo-card';
import { YoutubeSearch } from 'src/sections/index_page/youtube-search';
import { useState } from 'react';
import ReactLoading from 'react-loading';



const Page = () => {

  const [youtubeSearchResults, setYoutubeSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);


  const getSearchResultData = (rowData) => {
    const searchResults = new Array();
    rowData.forEach(element => {
      let youtubeSearchResultObj = new Object();

      youtubeSearchResultObj.videoTitle = element.title;
      youtubeSearchResultObj.videoId = element.id;
      youtubeSearchResultObj.videoLink = element.link;
      youtubeSearchResultObj.thumbnailDetails = element.thumbnails[element.thumbnails.length - 1];
      youtubeSearchResultObj.viewCount = element.viewCount;

      searchResults.push(youtubeSearchResultObj);
    });
    setYoutubeSearchResults(searchResults);
  };

  const loadingStatus = (isLoading) => {
    setLoading(isLoading);
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
            <YoutubeSearch getSearchResultData={getSearchResultData} setLoadingStatus={loadingStatus} />
            
            <Grid
              container
              spacing={3}
            >
              {loading ? <div><ReactLoading type={"balls"} color={"#000000"} />Loading</div>  : youtubeSearchResults.map((eachSearchResult) => (
                <Grid
                  xs={12}
                  md={6}
                  lg={4}
                  key={eachSearchResult.videoId}
                >
                  <YoutubeVideoCard searchData={eachSearchResult} />
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