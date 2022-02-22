// function Time( ) {
//     var d=new Date();
//     var h =d.getHours();
//     var m=d.getMinutes();
//     var s=d.getSeconds();

//  if (s<10 ){
//     s="0"+s;
//  }
//  else if(m<10){
//      m="0"+m;
//  }
//  else if(h<10){
//      h="0"+h
//  }
//  document.getElementById('demo').innerHTML=`${h}:${m}:${s}`
// }
// setInterval(Time,1000);




function myFunction(){
    var element = document.getElementById("Az");
    if (element.style.transform==="rotate(0deg)") {
        element.style.transform="rotate(180deg)"
        document.querySelector(".Az").style.display="none"
    }
    else{
        element.style.transform="rotate(0deg)"
        document.querySelector(".Az").style.display="none"
        document.querySelector(".Az").style.display="block"
    }
  }

  function Search( ) {
        var element = document.getElementById("help");
     element.classList.toggle("active");

  }

//   function Close(){
//       var sidebar=document.getElementById("bar");
//      sidebar.classList.toggle('xclass')


//   }
  function Click(){
      var div=document.getElementById('first');
      div.classList.toggle
  }

  function Open() {
      var sidebar=document.getElementById('sidebar');
      var close=document.getElementById('close1')
      sidebar.style.width='50%';
      close.style.opacity='1'
  }
  function Close() {
    var sidebar=document.getElementById('sidebar');
    var close=document.getElementById('close1')
    sidebar.style.width='0%';
    close.style.opacity='0'
}
