import {
  EmojiHappyIcon,
  ChartSquareBarIcon,
  CursorClickIcon,
  DeviceMobileIcon,
  AdjustmentsIcon,
  SunIcon,
} from "@heroicons/react/outline";

import benefitOneImg from "../../public/img/3.png";
import benefitTwoImg from "../../public/img/2.jpg";
import stakeOneImg from "../../public/img/4.png";
import stakeTwoImg from "../../public/img/5.png";
import stakeThreeImg from "../../public/img/6.png";


const benefitOne = {
  title: "Aim of Gtech Global Integrated",
  desc: "The aim of the Gtech Global R and D Network is to strengthen the Global R and D Ecosystem , Support the development of new medicines and Food through a collaborative effort that is home grown in Africa with support from the Global North. Presently the focus of our research is developing new contraceptives, Cancer drugs and Improved Agricultural Products. The Network is an important Global Platform that enhances Global Health and Food Security.",
  image: benefitOneImg,

  bullets: [
    {
      title: "Focus",
      desc: "Presently the focus of our research is developing new contraceptives, Cancer drugs and Improved Agricultural Products. ",
      icon: <EmojiHappyIcon />,
    },
    {
      title: "Network",
      desc: "The Network is an important Global Platform that enhances Global Health and Food Security",
      icon: <EmojiHappyIcon />,
    }
  ],
};

const benefitTwo = {
  title: "Important Milestones of Gtech Global Integrated Network",
  desc: "The Gtech Global Contraceptives Technologies R and D Network presently has Existing Memoranda of Understanding (MOU) with 4 institutions across 3 African countries – Nigeria, Cameroun and Togo.",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Research",
      desc: "Our Researchers are working collaboratively to push the boundary of science to develop new and improved Cancer Drugs in more efficient manner.",
      icon: <DeviceMobileIcon />,
    },
    {
      title: "Food Insecurity in Africa",
      desc: "Food Insecurity at a time of high inflation in Africa has been aggravated by Climate Change and geopolitical Conflict like the on-going Ukraine crisis.",
      icon: <AdjustmentsIcon />,
    },
    {
      title: "Technology",
      desc: "Use of Disruptive Technology to achieve Food Self-Sufficiency and ensure Africa becomes net Exporter of Food ",
      icon: <SunIcon />,
    },
  ],
};

const stakeOne = {
  title: "High-level Stakeholders Engagement and Strategic Partnerships",
  desc: "L-R. MD/CEO Gtech Global Integrated and Founder Gtech Global Contraceptives R and D Network Mr. Sulaiman Gbadamosi with Prof Babatunde Salako Director General of Nigerian institute of Medical Research and Dr. Habeeb Salami Director , Global Strategy and Partnerships Gtech Global Contraceptives R and D network during the signing of official MOU between Gtech Global Integrated limited and Nigerian institute of Medical Research on the Gtech Global Contraceptives R and D Network on 5 th August 2021 at NIMR , Lagos Nigeria.",
  image: stakeOneImg,
};

const stakeTwo = {
  title: "High-level Stakeholders Engagement and Strategic Partnerships",
  desc: "Signing of Memorandum of Understanding (MOU) between Gtech Global Integrated and National Bureau of Statistics (NBS) on Strengthening Data Architecture for Gtech Global Contraceptives R and D Network. The official MOU signing took place at NBS , Abuja Nigeria on 17th May 2021.",
  image: stakeTwoImg,
};
const stakeThree = {
  title: "High-level Stakeholders Engagement and Strategic Partnerships",
  desc: "Signing of Memorandum of Understanding (MOU) between Gtech Global Integrated and National Bureau of Statistics (NBS) on Strengthening Data Architecture for Gtech Global Contraceptives R and D Network. The official MOU signing took place at NBS , Abuja Nigeria on 17th May 2021.",
  image: stakeThreeImg,
};

export { benefitOne, benefitTwo, stakeOne, stakeTwo,stakeThree };
