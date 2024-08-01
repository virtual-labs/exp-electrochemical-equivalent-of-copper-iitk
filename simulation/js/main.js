//Your JavaScript goes in here
var circuit=false;
const voltage=12;
 var resistance=0;
var i=0;
var oldwgt=10;
var newwgt=0;
var count=0;


 // switch

 const image = document.querySelector("#switch1");
const rotateBtn = document.querySelector("#switch1btn");
const textBtn = document.querySelector("#switch1text");

let rotation = 0;



 function switchonoff() {
  if(rotateBtn.style.fill=="red"){
   rotation = -35;
   //   image.style.transform=`translate(0,10)`;


   image.style.transform = `rotate(${rotation}deg)`;
   image.style.transformOrigin = "338.9px 132px";
   image.style.transition = 'transform 1s';


  
   document.getElementById("switch1btn").style.fill = "green";
   document.getElementById("switch1text").innerHTML =  "Switch On";
   
   circuit=true;


document.getElementById('resistance1').disabled=false;
var  st= setInterval(function(){
      if(rotateBtn.style.fill=="red"){
          clearInterval(st);
      }
      count++;
     console.log(count) ;
    },1000);

  }
  else if(rotateBtn.style.fill=="green"){
    rotateBtn.style.fill="red";
    image.style.transform = `rotate(${-rotation}deg)`;
   image.style.transition = 'transform 1s';

   document.getElementById("switch1text").innerHTML =  "Switch Off";
circuit=false;


document.getElementById('resistance1').disabled=true;
  }
 
  return circuit;
};


// console.log( switchonoff());




//  document.getElementById('resistance1').disabled=true;


  // document.getElementById("ammeter1").disabled = false;

  // let time = document.querySelector('#start');
  // time.addEventListener('click', function(){
  //  var  st= setInterval(function(){
  //     if(rotateBtn.style.fill=="red"){
  //         clearInterval(st);
  //     }
  //     count++;
  //    console.log(count) ;
  //   },1000);
  // });






function getResistance(id) {
    // let resistance=0;
    
    if (id === 'resistance1' && circuit  ) {

   
        resistance = document.getElementById(id).value;
        document.getElementById("resistance-1-display").innerText = resistance +" "+"ohm";
      
        document.getElementById("resistance-1-display-svg").innerHTML =  resistance +" " + "ohm";
        
        i=voltage/resistance;
       var amp= setInterval(function() { 
        if(circuit===false ){
          clearInterval(amp);
        }
            i=i+0.0003;
            document.getElementById("ammeter-svg").innerHTML =  i.toFixed(3)+" " + "A"}, 1000);
       

     
        // document.getElementById("gauss-1-display-svg").innerHTML = ((12.57*10**-7)*(117900)*ammeter1).toFixed(4);

    
  }
}

 




function openNav() {
    document.getElementById("mySidepanel").style.width = "500px";
    document.getElementById("mySidepanel").style.height = "100%";
  }
  
  function closeNav() {
    document.getElementById("mySidepanel").style.width = "0";
  }

  // tranfer

  const needle = document.getElementById("calweight");
  const connect= document.getElementById("connect");

  const cathod=document.getElementById("cathod");

 function getweight()
{

  
    cathod.setAttribute('transform','translate(295,0)');
    cathod.style.transition = 'transform 2s';


//     var wgt=setInterval(function(){
  // document.getElementById('weight').innerHTML=((10) + (0.000327)*(voltage/resistance))
    

//     oldwgt=oldwgt+0.000375;
// console.log((oldwgt)+(voltage/resistance));
// if(rotateBtn.style.fill=="red"){
//   clearInterval(wgt);
// }
//     },1000);
  document.getElementById('weight').innerHTML=((10) +( (0.000327)*(voltage/resistance)*count)).toFixed(3)+" "+"g";
    

document.getElementById('resistance1').disabled=true;
    
    circuit=false;
    return circuit;
};
 function getconnect(){


  cathod.setAttribute('transform','translate(0,0)');
  cathod.style.transition = 'transform 3s';

document.getElementById('resistance1').disabled=true;

circuit=true;
 return circuit;
};









