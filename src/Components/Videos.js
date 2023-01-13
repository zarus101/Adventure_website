import { ImageList, ImageListItem, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import GalleryData from '../Data/GalleryData'

const Videos = () => {
  return (
    <>
    <div className="gallery-section">
      <div className="adventure-title">
          <Typography sx={{ my: 2 }} fontFamily="Sansita" variant="h4">
            Videos
          </Typography>
          </div>
        <Box sx={{height: 300,}}>
          <ImageList variant="masonry" cols={3} gap={8}>
            {GalleryData.map((item) => (
              <ImageListItem key={item.img}>
                <img
                  src={`${item.img}?w=248&fit=crop&auto=format`}
                  srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                  alt={item.title}
                  loading="lazy"
                />
              </ImageListItem>
            ))}
          </ImageList>
        </Box>
      </div>

    </>
  )
}

export default Videos