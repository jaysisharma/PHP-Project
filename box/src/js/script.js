Shery.mouseFollower({debug:true});
Shery.makeMagnet(".magnet");

Shery.hoverWithMediaCircle(".hvr", {images: ["https://cdn.pixabay.com/photo/2016/11/19/14/00/code-1839406_1280.jpg", "https://cdn.pixabay.com/photo/2018/08/04/20/48/woman-3584435_960_720.jpg","https://cdn.pixabay.com/photo/2018/06/07/16/49/virtual-3460451_1280.jpg"] })


gsap.from(".logo",{
    y:-10,
    yoyo:true,
    repeat:-1
    
})
gsap.registerPlugin(ScrollTrigger);
// ScrollTrigger.create({
//     trigger: ".about",
//     start: "top center", 
//     end: "+=200", // 200px past the start 
//     pin: "#red-content"
//   });
  


gsap.to('.arrow', {
    y:-10,
    yoyo:true,
    repeat:-1,
    
})