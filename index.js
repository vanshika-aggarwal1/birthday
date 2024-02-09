["click","keydown"].forEach(evt=>{
    document.addEventListener(evt,function(){
        document.querySelector("#h1").innerHTML="";
        document.querySelector("#c2").innerHTML="Happy Birthday Mumma";
        var a=new Audio("assets/happy-bday.mp3");
        a.play();
        document.querySelector("body").classList.add("new");
        document.querySelector("#c0").classList.add("cake");
        document.querySelector("#c1").classList.add("layer","top");
        document.querySelector("#c2").classList.add("layer","frosting");
        document.querySelector("#c3").classList.add("layer","bottom");
    });
});
