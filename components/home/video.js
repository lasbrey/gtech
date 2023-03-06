import { useState } from "react";
import Container from "./container";

export default function Video() {
  const [playVideo, setPlayVideo] = useState(false);
  return (
    <Container>
      <div className="w-full max-w-5xl mx-auto overflow-hidden lg:mb-20 rounded-2xl ">
        <div
          onClick={() => setPlayVideo(!playVideo)}
          className="relative cursor-pointer aspect-w-16 aspect-h-9"
        >
          <p>
            Gtech Global Contraceptives R and D Network is an initiative of Gtech
            Global Integrated limited which was commenced in 2021. The network
            has secured strategic Partnership/MOU with the FMOH (Nigerian
            Instutute of Medical Research), National Bureau of Statistics, International
            University of Bamenda Cameroun and Global Health International Institute
            Togo. The Global Network is aimed solely at researching and
            developing at least 1 new contraceptive technology by 2030. The
            network has atrracted a lot of interest from International donors who
            are interested in providing funds because contraceptive research lies
            within the priority areas of their global strategy. Below is a draft
            Schedule of Work geared towards ensuring project kick-off in the
            First Quarter of 2023.
          </p>
        </div>
      </div>
    </Container>
  );
}
