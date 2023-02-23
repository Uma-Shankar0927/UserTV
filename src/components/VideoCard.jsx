import React from "react";
import { Link } from "react-router-dom";
import { Typography, Card, CardContent, CardMedia } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import {
  demoThumbnailUrl,
  demoVideoUrl,
  demoVideoTitle,
  demoChannelUrl,
  demoChannelTitle,
} from "../utils/constants";

const VideoCard = ({
  video: {
    id: { videoId },
    snippet,
  },
  channeLDetail,
}) => (
  <Card
    gap={0}
    sx={{
      width: { xs: "300px", sm: "300px", md: "300px" },
      boxShadow: "none",
      borderRadius: 4,
      m: 0,
      p: 0,
    }}
  >
    <Link to={videoId ? `/video/${videoId}` : `/video/cV2gBU6hKfY`}>
      <CardMedia
        gap={0}
        image={snippet?.thumbnails?.high?.url || demoThumbnailUrl}
        alt={snippet?.title}
        sx={{ width: "100%", height: "170px", m: 0, p: 0 }}
      />
    </Link>
    <CardContent
      sx={{ backgroundColor: "#1E1E1E", height: "100px", width: "100%" }}
    >
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <Typography variant="subtitle1" color="#FFF">
          {snippet?.title.length > 30
            ? snippet?.title.slice(0, 30) + "..."
            : snippet?.title || demoVideoTitle.slice(0, 30)}
        </Typography>
      </Link>
      <Link
        to={
          snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl
        }
      >
        <Typography variant="subtitle1" color="gray" paddingTop="5px">
          {snippet?.channelTitle || demoChannelTitle}
          <CheckCircleIcon
            sx={{ fontSize: "15px", color: "grey", ml: "5px" }}
          />
        </Typography>
      </Link>
    </CardContent>
  </Card>
);

export default VideoCard;
