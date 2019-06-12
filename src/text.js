import { TweenLite, TimelineMax, Linear, Back, Sine } from 'gsap/all';

document.getElementById("MyPath").setAttribute("d",document.getElementById("Path").getAttribute("d"));
var tl = new TimelineMax({repeat:-1});
tl.to("#Text",15,{attr:{startOffset:'100%'}});
//tl.to("#Text",3,{text:{value:"BY BFZEBZFBFZE"}},3);
