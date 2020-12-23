
const bigimg = document.querySelector(".displayed-img");
const fbox = document.querySelector(".set-buttons");
const subbuttons = document.querySelector(".function-buttons");

// Spróbuj aby zmiana przycisku nie wpływała na edycję pozostałych przycisków!!  -> 

// DARKEN / LIGHTEN - OPACITY !!

let dark = fbox.querySelector("button:first-child");
let brightvalue = 0;

dark.addEventListener('click', event => {

    if(brightvalue=== 0) {
      event.target.innerText = "Bright 60%";
      //bigimg.style.filter = "brightness(60%)";
      brightvalue++;
    }

    else {
      event.target.innerText = "Bright 100%";
      //bigimg.style.filter = "brightness(100%)";
      brightvalue--;
    }
})


// BLUR / NO-BLUR  - BLUR !!

//const fbox= document.querySelector('.filter-box');
const blur1 = fbox.querySelector("button:nth-child(2)"); 
let blurvalue = 0;

blur1.addEventListener('click', event => {
  
    if(blurvalue === 0) {
        event.target.innerText = "Blur";
        //bigimg.style.filter = "blur(4px)";
        blurvalue++;
    }

    else {
        event.target.innerText = "No blur";
        //bigimg.style.filter = "blur(0px)";
        blurvalue--;
    }
})

const contrast= fbox.querySelector("button:nth-child(3)"); 
let contrastvalue = 0;

contrast.addEventListener('click', event => {
  
    if(contrastvalue === 0) {
        event.target.innerText = "Contrast: 150%";
        //bigimg.style.filter = "contrast(150%)";
        contrastvalue++;
    }

    else if(contrastvalue===1) {
      event.target.innerText = "Contrast: 200%";
     // bigimg.style.filter = "contrast(200%)";
      contrastvalue++;
    }

    else if(contrastvalue===2) {
      event.target.innerText = "Contrast: 50%";
     // bigimg.style.filter = "contrast(50%)";
      contrastvalue++;
    }

    else {
        event.target.innerText = "Contrast: 100%";
       // bigimg.style.filter = "contrast(100%)";
        contrastvalue = contrastvalue-3;
    }
})

const grayscale = fbox.querySelector("button:nth-child(4)");
let grayscalevalue = 0;

grayscale.addEventListener('click', event=> {


  if(grayscalevalue === 0) {
    event.target.innerText = "Grayscale: 25%";
    //bigimg.style.filter = "contrast(150%)";
    grayscalevalue++;
  }

  else if(grayscalevalue===1) {
    event.target.innerText = "Grayscale: 50%";
    // bigimg.style.filter = "contrast(200%)";
    grayscalevalue++;
  }

  else if(grayscalevalue===2) {
    event.target.innerText = "Grayscale: 75%";
    // bigimg.style.filter = "contrast(50%)";
    grayscalevalue++;
  }

  else {
    event.target.innerText = "Grayscale: 0%";
    // bigimg.style.filter = "contrast(100%)";
    grayscalevalue = grayscalevalue-3;
  }

})

const hue = fbox.querySelector("button:nth-child(5)");
let huevalue = 0;

hue.addEventListener('click', event=> {


  if(huevalue === 0) {
    event.target.innerText = "Hue: 90deg";
    //bigimg.style.filter = "contrast(150%)";
    huevalue++;
  }

  else if(huevalue===1) {
    event.target.innerText = "Hue: 180deg";
    // bigimg.style.filter = "contrast(200%)";
    huevalue++;
  }

  else if(huevalue===2) {
    event.target.innerText = "Hue: 270deg";
    // bigimg.style.filter = "contrast(50%)";
    huevalue++;
  }

  else {
    event.target.innerText = "Hue: 0deg";
    // bigimg.style.filter = "contrast(100%)";
    huevalue = huevalue-3;
  }

})



const invert = fbox.querySelector("button:nth-child(6)");
let invertvalue = 0;

invert.addEventListener('click', event=> {


  if(invertvalue === 0) {
    event.target.innerText = "Invert: 25%";
    //bigimg.style.filter = "contrast(150%)";
    invertvalue++;
  }

  else if(invertvalue===1) {
    event.target.innerText = "Invert: 75%";
    // bigimg.style.filter = "contrast(50%)";
    invertvalue++;
  }

  else if(invertvalue===2) {
    event.target.innerText = "Invert: 100%";
    // bigimg.style.filter = "contrast(50%)";
    invertvalue++;
  }

  else {
    event.target.innerText = "Invert: 0%";
    // bigimg.style.filter = "contrast(100%)";
    invertvalue = invertvalue-3;
  }

})




const saturate= fbox.querySelector("button:nth-child(7)"); 
let saturatevalue = 0;

saturate.addEventListener('click', event => {
  
    if(saturatevalue === 0) {
        event.target.innerText = "Saturate: 150%";
        //bigimg.style.filter = "contrast(150%)";
        saturatevalue++;
    }

    else if(saturatevalue===1) {
      event.target.innerText = "Saturate: 200%";
     // bigimg.style.filter = "contrast(200%)";
     saturatevalue++;
    }

    else if(saturatevalue===2) {
      event.target.innerText = "Saturate: 50%";
     // bigimg.style.filter = "contrast(50%)";
      saturatevalue++;
    }

    else {
        event.target.innerText = "Saturate: 100%";
       // bigimg.style.filter = "contrast(100%)";
       saturatevalue = saturatevalue-3;
    }
})

const sepia= fbox.querySelector("button:nth-child(8)"); 
let sepiavalue = 0;
sepia.addEventListener('click', event => {

    if(sepiavalue === 0) {
      event.target.innerText = "Sepia 60%";
      //bigimg.style.filter = "brightness(60%)";
      sepiavalue++;
    }

    else {
      event.target.innerText = "Sepia 0%";
      //bigimg.style.filter = "brightness(100%)";
      sepiavalue--;
    }
})


// brightvalue ; blurvalue ;  contrastvalue ;  grayscalevalue ; huevalue ; invertvalue ; saturatevalue ; sepiavalue ;

const submit = subbuttons.querySelector("button:nth-last-child(1)");

submit.addEventListener('click', event => {

  let brightstring = brightvalue;   let blurstring = blurvalue;  let contraststring = contrastvalue;  let grayscalestring = grayscalevalue;
  let huestring = huevalue;         let invertstring = invertvalue;  let saturatestring = saturatevalue;  let sepiastring = sepiavalue;
  
  switch(brightstring)
  {
    case 0:  {brightstring = "brightness(100%)";  break;}
    case 1:  {brightstring = "brightness(60%)";   break;}
  
  }

  switch(blurstring)
  {
    case 0: {blurstring = "blur(0px)"; break;}
    case 1: {blurstring = "blur(4px)"; break;}
  }

  switch(contraststring)
  {
    case 0: {contraststring = "contrast(100%)"; break;}
    case 1: {contraststring = "contrast(150%)"; break;}
    case 2: {contraststring = "contrast(200%)"; break;}
    case 3: {contraststring = "contrast(50%)"; break;}    
  }

  switch(grayscalestring)
  {
    case 0: {grayscalestring= "grayscale(0%)"; break;}
    case 1: {grayscalestring = "grayscale(25%)"; break;}
    case 2: {grayscalestring = "grayscale(50%)"; break;}
    case 3: {grayscalestring = "grayscale(75%)"; break;}    
  }

  switch(huestring)
  {
    case 0: {huestring = "hue-rotate(0deg)"; break;}
    case 1: {huestring = "hue-rotate(90deg)"; break;}
    case 2: {huestring = "hue-rotate(180deg)"; break;}
    case 3: {huestring = "hue-rotate(270deg)"; break;}  
  }

  switch(invertstring)
  {
    case 0: {invertstring = "invert(0%)"; break;}
    case 1: {invertstring = "invert(25%)"; break;}
    case 2: {invertstring = "invert(75%)"; break;} 
    case 3: {invertstring = "invert(100%)"; break;}   
  }

  switch(saturatestring)
  {
    case 0: {saturatestring = "saturate(100%)"; break;}
    case 1: {saturatestring = "saturate(150%)"; break;}
    case 2: {saturatestring = "saturate(200%)"; break;}
    case 3: {saturatestring = "saturate(50%)"; break;} 
  }

  switch(sepiastring)
  {
    case 0: {sepiastring = "sepia(0%)"; break;}
    case 1: {sepiastring = "sepia(60%)"; break;}
  }

  

  bigimg.style.filter = `${brightstring}  ${blurstring}  ${contraststring}  ${grayscalestring}  ${huestring}  ${invertstring}  ${saturatestring}  ${sepiastring}`;

})


const reset = subbuttons.querySelector("button:nth-last-child(2)"); // dopracuj to dokładnie 

reset.addEventListener('click', event => { 

  // brightvalue ; blurvalue ;  contrastvalue ;  grayscalevalue ; huevalue ; invertvalue ; saturatevalue ; sepiavalue ;
  brightvalue = 0;
  blurvalue = 0;
  contrastvalue =0;
  grayscalevalue =0;
  huevalue =0;
  invertvalue =0;
  saturatevalue =0;
  sepiavalue =0;

  fbox.querySelectorAll(".set").forEach(button => {
    let napis = button.dataset.default;
    button.innerText = napis;
  })


  // Po naciśnięciu działanie filtrów resetuje się

  bigimg.style.filter = "none";
})


const setbtn = fbox.querySelectorAll(".set");

setbtn.forEach(btn => {
  btn.addEventListener('mouseover', e => {
    e.target.style.backgroundImage = "linear-gradient(90deg, #99b, #669, #99b)";
    e.target.style.cursor ="pointer";
  })

  btn.addEventListener('mouseout', e => {
    e.target.style.backgroundImage= "linear-gradient(90deg, #437891, #a3b8be, #437891)";
  })
})

const firstsubbtn = subbuttons.querySelector(".submit");

firstsubbtn.addEventListener('mouseover', ev => {
  ev.target.style.backgroundImage = "linear-gradient(90deg, #a85720, #978d03, #a85720)";
  ev.target.style.border = "0.1em solid #444";
  ev.target.style.cursor ="pointer";
})

firstsubbtn.addEventListener('mouseout', ev => {
  ev.target.style.backgroundImage = "linear-gradient(90deg, #ca7942, #b9af25, #ca7942)";
  ev.target.style.border = "0.1em solid #ca7942";
})




const secondsubbtn = subbuttons.querySelector(".reset");


secondsubbtn.addEventListener('mouseover', ev => {
  ev.target.style.backgroundImage = "linear-gradient(90deg, #70b150, #5ba26d, #70b150)";
  ev.target.style.border = "0.1em solid #444";
  ev.target.style.cursor ="pointer";
})

secondsubbtn.addEventListener('mouseout', ev => {
  ev.target.style.backgroundImage = "linear-gradient(90deg, #91d372, #7dc48f, #91d372)";
  ev.target.style.border = "0.1em solid #91d372";
})

