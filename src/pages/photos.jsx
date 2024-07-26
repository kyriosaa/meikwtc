import React from "react";
import "animate.css";
import "../styles.css";
import {
  Box,
  Fade,
  ImageList,
  ImageListItem,
  Tooltip,
  Typography,
} from "@mui/material";

// Photos
const itemData = [
  {
    img: "/images/RoadMirrorSelfie.jpg",
    title: "RoadMirrorSelfie",
    desc: "2024/01/15 - Words Stationery Store",
  },
  {
    img: "/images/ColorplusShrine.jpg",
    title: "Storage",
    desc: "2024/07/13 - Taipei Rose Garden",
  },
  {
    img: "/images/StopSign.jpg",
    title: "StopSign",
    desc: "2024/07/06 - Xinsheng South Road",
  },
  {
    img: "/images/ColorplusBench.jpg",
    title: "ColorplusBench",
    desc: "2024/07/13 - Taipei Rose Garden",
  },
  {
    img: "/images/ColorplusPortrait.jpg",
    title: "ColorplusPortrait",
    desc: "2024/07/13 - Taipei Rose Garden",
  },
  {
    img: "/images/ColorplusSelfie.jpg",
    title: "ColorplusSelfie",
    desc: "2024/07/13 - Taipei Rose Garden",
  },
  {
    img: "/images/ColorplusMirror.jpg",
    title: "ColorplusMirror",
    desc: "2024/07/13 - Taipei Rose Garden",
  },
  {
    img: "images/ColorplusNoLook.jpg",
    title: "ColorplusNoLook",
    desc: "2024/07/13 - Taipei Rose Garden",
  },
  {
    img: "/images/MeiBookStore.jpg",
    title: "MeiBookStore",
    desc: "2024/01/15 - Words Stationery Store",
  },
  {
    img: "/images/ColorplusKuraKin.jpg",
    title: "ColorplusKuraKin",
    desc: "2024/07/13 - Kura Sushi @ Taipei Main Station",
  },
  {
    img: "images/ColorplusKuraMei.jpg",
    title: "ColorplusKuraMei",
    desc: "2024/07/13 - Kura Sushi @ Taipei Main Station",
  },
  {
    img: "/images/ShilinBlue.jpg",
    title: "ShilinBlue",
    desc: "2024/05/10 - Shilin Riverside",
  },
  {
    img: "/images/ShowaVending.jpg",
    title: "ShowaVending",
    desc: "2024/03/14 - Showa Ice Cream Shop",
  },
  {
    img: "/images/ShifenRoad.JPG",
    title: "ShifenRoad",
    desc: "2024/02/24 - Shifen Lantern Festival",
  },
  {
    img: "/images/ShowaCrates.jpg",
    title: "ShowaCrates",
    desc: "2024/03/14 - Showa Ice Cream Shop",
  },
  {
    img: "/images/ShifenShrine.JPG",
    title: "ShifenShrine",
    desc: "2024/02/24 - Shifen Lantern Festival",
  },
  {
    img: "/images/ColorplusFlash.jpg",
    title: "ColorplusFlash",
    desc: "2024/07/13 - Taipei Main Station",
  },
  {
    img: "/images/ShilinMirror.jpg",
    title: "ShilinMirror",
    desc: "2024/05/10 - Shilin Riverside",
  },
  {
    img: "/images/ShilinBridge.jpg",
    title: "ShilinBridge",
    desc: "2024/05/10 - Shilin Riverside",
  },
  {
    img: "/images/ShowaFront.jpg",
    title: "ShowaFront",
    desc: "2024/03/14 - Showa Ice Cream Shop",
  },
  {
    img: "/images/ShowaPortrait.jpg",
    title: "ShowaPortrait",
    desc: "2024/03/14 - Showa Ice Cream Shop",
  },
];

export default function Photos() {
  return (
    <Box>
      <Box display="flex" justifyContent="center" alignContent="center">
        <Typography class="photos-title animate__animated animate__fadeInDown animate__slow">
          我們的照片
        </Typography>
      </Box>
      <Box display="flex" justifyContent="center" alignContent="center">
        <Typography class="constantia animate__animated animate__fadeInDown animate__slow">
          Here are my favorite photos of us that we've taken!
        </Typography>
      </Box>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
        sx={{
          overflowY: "scroll",
        }}
      >
        <Box class="animate__animated animate__fadeIn ">
          <ImageList variant="masonry" cols={3} gap={8} sx={{ width: 1600 }}>
            {itemData.map((item) => (
              <Tooltip
                TransitionComponent={Fade}
                TransitionProps={{ timeout: 600 }}
                title={item.desc}
                placement="right"
              >
                <ImageListItem key={item.img}>
                  <img
                    srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                    src={`${item.img}?w=248&fit=crop&auto=format`}
                    alt={item.title}
                    loading="lazy"
                  />
                </ImageListItem>
              </Tooltip>
            ))}
          </ImageList>
        </Box>
      </Box>
    </Box>
  );
}
