import headInTheClouds from "./assets/coverImages/head-in-the-clouds.jpg";
import madness from "./assets/midsummer-madness.mp4";
import california from "./assets/california.mp4";
import californiaCover from "./assets/coverImages/california.jpg";
import loverboy88Cover from "./assets/coverImages/loverboy88.jpg";
import loverboy88 from "./assets/loverboy88.mp4";
import rnbCover from "./assets/coverImages/rnb.jpg";
import rnb from "./assets/rnb.mp4";
import splitCover from "./assets/coverImages/split.jpg";
import split from "./assets/split.mp4";

/*
This is the file that defines all the album data uses in the site in a array.
Using the React framework allows me to import assets into javascript and use them later. 
*/

export const albums = [
  {
    id: 1,
    img: californiaCover,
    title: "California",
    artists: "王嘉尔, Rich Brain",
    video: california,
  },
  {
    id: 2,
    img: headInTheClouds,
    title: "head in the clouds",
    artists: "Joji, Rich Brain, NIKI...",
    video: madness,
  },
  {
    id: 3,
    img: loverboy88Cover,
    title: "Lover Boy 88",
    artists: "Phum Viphurit, Higher Brothers",
    video: loverboy88,
  },
  {
    id: 5,
    img: rnbCover,
    title: "R&B All Night",
    artists: "KnowKnow",
    video: rnb,
  },
  {
    id: 6,
    img: splitCover,
    title: "Split",
    artists: "NIKI",
    video: split,
  },
];
