const key='78411915c66afceccd876b42c10741a6';
const req=new XMLHttpRequest();
const search=document.querySelector('.search');
const loc=document.querySelector('.location');
const temp=document.querySelector(".temp");
const weath=document.querySelector(".rain");
const datee=document.querySelector(".date");

search.addEventListener("keypress",change_city);


function change_city(evt){
    if(evt.keyCode==13){
      getresults(search.value);  

    }
}

function getresults(val){
    req.open('GET','https://api.openweathermap.org/data/2.5/weather?q='+val+'&appid=78411915c66afceccd876b42c10741a6&units=metric');
req.send();

req.onload=function(){
    console.log("all done with request");
    const data=JSON.parse(this.response);
    console.log(data);
    console.log(data.name);
    loc.innerHTML=data.name+" , "+data.sys.country;
    temp.innerHTML=data.main.temp+"&#176;C";
    weath.innerHTML=data.weather[0].main;
   

    


}

req.onerror=function(){
    console.log("pepepe error!!!")
   console.log(this)
}



}







