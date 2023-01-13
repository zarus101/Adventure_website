import * as React from "react";
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import "../Assests/Gallery.scss"
import { Typography } from "@mui/material";
import GalleryData from "../Data/GalleryData";

export default function Gallery() {
  return (
    <>
      <div className="gallery-section">
      <div className="adventure-title">
          <Typography sx={{ my: 2 }} fontFamily="Sansita" variant="h4">
            Gallery
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
  );
}

