import './style.css';

import { gsap } from "gsap";

const boite = document.querySelectorAll(".boite");


gsap.from(boite, {
  y:200,
  opacity:0,
  duration: 2
})
