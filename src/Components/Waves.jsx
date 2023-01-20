import { Box } from "@mui/material";
import React from "react";

const Waves = () => {
  return (
    <Box sx={{ transform: "translate(0,10px)" }}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#4267b2"
          fillOpacity="1"
          d="M0,0L30,21.3C60,43,120,85,180,138.7C240,192,300,256,360,266.7C420,277,480,235,540,229.3C600,224,660,256,720,272C780,288,840,288,900,261.3C960,235,1020,181,1080,149.3C1140,117,1200,107,1260,96C1320,85,1380,75,1410,69.3L1440,64L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
        ></path>
      </svg>
    </Box>
  );
};

export default Waves;
