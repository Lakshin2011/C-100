var SpeechRecognition=window.webkitSpeechRecognition;
recognition=new SpeechRecognition();
function begin(){
   document.getElementById("textbox").innerHTML="";
  recognition.start();

}
recognition.onresult=function(event){
    console.log(event);
    var content = event.results[0][0].transcript;
    document.getElementById("textbox").innerHTML=content;
    if(content=="take my selfie")
    {
      talk();
    }
    
}
function talk()
{
  var synth = window.speechSynthesis;
  var speakdata = "Taking Your Selfie In Five Seconds" ;
  var utterthis=new SpeechSynthesisUtterance( speakdata);
  synth.speak(utterthis);
  Webcam.attach("#cam");
  setTimeout(function(){
    take_selfie();
    savepic();
  },5000);

}
Webcam.set({
  width:360,
  height:250, 
  image_format:"png",
  png_quality:100
});
var camera =document.getElementById("cam");

function take_selfie(){
  Webcam.snap(function(data_uri){
    document.getElementById("result").innerHTML='<img id="mypic" src="'+data_uri+'">'
  });
}

function savepic(){
  var anchor=document.getElementById("selfie");
  var pic=document.getElementById("mypic").src;
  anchor.href=pic;
  anchor.click();
}