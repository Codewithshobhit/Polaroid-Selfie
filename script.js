var xmlns = "http://www.w3.org/2000/svg",
  xlinkns = "http://www.w3.org/1999/xlink",
  select = function(s) {
    return document.querySelector(s);
  },
  selectAll = function(s) {
    return document.querySelectorAll(s);
  }


TweenMax.set('svg', {
  visibility: 'visible'
})

TweenMax.set('#duplicateCamera', {
  transformOrigin:'50% 50%',
  alpha:0,
  scaleY:1
})

var tl = new TimelineMax({repeat:-1}).timeScale(2);
tl.fromTo('#flashStar', 0.4, {
  rotation:90,
  scale:0.3,
  transformOrigin:'50% 50%'
},
{
  rotation:0,
 scale:2
})
.to('#flash', 0.05,{
  fill:'#ededed',
  repeat:1,
  yoyo:true
  
},'-=0.4')

.set('#flashStar',{
  alpha:0
},'-=0.2')
.to('#flashHalo1', 0.6, {
  attr:{
    rx:17,
    ry:25
  },
  alpha:0,
  transformOrigin:'50% 50%'
},'-=0.4')
.to('#flashHalo2',0.4, {
  attr:{
    rx:27,
    ry:35
  },
  alpha:0,
  transformOrigin:'50% 50%'
},'-=0.6')
.to('#mainFlash', 0.05,{
  alpha:1,
  repeat:1,
  yoyo:true
  
},'-=0.5')
.fromTo('#photoStart', 1, {
  y:0,
  scaleY:0},{
 
  scaleY:1.5,
  transformOrigin:'50% 0%',
  ease:Power4.easeIn
})

  .to('#photoStart', 0.5, {
  //delay:0.5,
  y:20,
  transformOrigin:'50% 50%'
})
.set('#slotShadow', {
  alpha:0
})
.to('#photoStart', 1, {
  y:150,
  scale:2,
  morphSVG:{shape:'#photoEnd'},
  ease:Expo.easeInOut
})
.to('#photoContent', 3, {
  alpha:1,
  transformOrigin:'50% 150%'
})
.from('#photoContent', 3, {
  fill:'#212121'
  
},'-=3')
.to('#duplicateCamera', 3, {
  alpha:1,
  ease:Power3.easeInOut
},'-=3')

.to('#endGroup', 4, {
  rotation:35,
  transformOrigin:'0% 0%',
   
  ease:Elastic.easeOut.config(1.2,0.47)
})

.to('#endGroup', 2, {
  y:'+=3800',
   
  ease:Power1.easeIn
},'-=3')


//ScrubGSAPTimeline(tl)