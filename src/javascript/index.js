import '../styles.scss';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const tl = gsap.timeline({repeat: 2, repeatDelay: 1});
tl.from("#firstPepperoni", {y: -500, duration: 1});
tl.from("#secondPepperoni", {y: -500, duration: 1});
tl.from("#thirdPepperoni", {y: -500, duration: 1});


const sections = document.querySelectorAll('section');

sections.forEach(section => {
  gsap.fromTo(section.children, {y: '+=100', opacity: 0}, {y: 0, opacity: 1, stagger: 0.2, duration: 1, ease: 'easeInOut', scrollTrigger: {
  trigger: section,
  start: 'top 20%',
}});  
});
const tlm = gsap.timeline({repeat: 2, repeatDelay: 1});

tlm.to("#g28", {y: -70, duration: 2});
tlm.to("#g31", {x: 70, duration: 3});
tlm.to("#g34", {y: -70, duration: 2});
tlm.to("#g40", {x: 70, duration: 3});