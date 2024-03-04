// import React from "react";
// // import "../CSS/VideoCard.css";
// import '../CSS/Videos.css';
// import Card from "@mui/material/Card";
// import CardContent from "@mui/material/CardContent";
// import CardMedia from "@mui/material/CardMedia";
// import Typography from "@mui/material/Typography";
// import { CardActionArea } from "@mui/material";

// const VideoCard = ({ embedCode }) => {
//   return (
//     <>
//       <div id="VideosId" className="youtube-video-card">
//         <div className="innerContainer">
//           <div className="framesDiv">
//             <Card sx={{ maxWidth: 345 }} style={{backgroundColor:"#ddc4e4", borderRadius:"18px"}}>
//               <CardActionArea >
//                 <iframe
//                   title="YouTube Video"
//                   width="345"
//                   height="200"
//                   src={`https://www.youtube.com/embed/${embedCode}`}
//                   allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
//                   allowFullScreen
//                 />
//                 <CardContent>
//                   <Typography gutterBottom variant="h5" component="div">
//                     Lizard
//                   </Typography>
//                   <Typography variant="body2" color="text.secondary">
//                     Lizards are a widespread group of squamate reptiles, with
//                     over 6,000 species, ranging across all continents except
//                     Antarctica
//                   </Typography>
//                 </CardContent>
//               </CardActionArea>
//             </Card>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default VideoCard;

// VideoCard.jsx
import React from "react";
// import '../CSS/VideoCard.css';
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

const VideoCard = ({ embedCode }) => {
  return (
    <>
      <div className="youtube-video-card">
        <div className="innerContainer">
          <div className="framesDiv">
            <Card
              sx={{ maxWidth: 345 }}
              style={{ borderRadius: "20px",backgroundColor:"rgb(200, 226, 230)" }}
              className="video-card"
            >
              <CardActionArea>
                <iframe
                  title="YouTube Video"
                  width="100%"
                  height="200"
                  src={`https://www.youtube.com/embed/${embedCode.url}`}
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {embedCode.desc}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {embedCode.date}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default VideoCard;
