"use strict";


 window.onload=function(){
     let h2=document.querySelector("h2");
     h2.classList.remove("d-none");
     let table=document.querySelector("table");
     let thead=document.querySelector("thead");
     let tbody=document.querySelector("tbody");
     let http=new XMLHttpRequest;
     http.onreadystatechange=function(){
         if(http.readyState===4 && http.status===200){
              let data =JSON.parse(http.responseText);
               data.list.forEach(element => {
                   let tr=document.createElement("tr");
                   let td =document.createElement("td");
                   let day=document.createElement("td");
                   let temp=document.createElement("td");
                   let maxt=document.createElement("td");
                   let mint=document.createElement("td");
                   let pres=document.createElement("td");
                   let sea=document.createElement("td");
                   let rutub=document.createElement("td");
                   let weather=document.createElement("td");
                   let descr=document.createElement("td");
                   let wind=document.createElement("td");



                   td.innerText=element.dt_txt.substr(element.dt_txt.length-8,5);
                   day.innerText=element.dt_txt.substr(5,5);
                   temp.innerText=parseInt(+element.main.temp-272.15);
                   maxt.innerText=parseInt(+element.main.temp_max-272.15);
                   mint.innerText=parseInt(+element.main.temp_min-272.15);
                   pres.innerText=parseInt(element.main.pressure);
                   sea.innerText=parseInt(element.main.sea_level);
                   rutub.innerText=element.main.humidity;
                   weather.innerText=element.weather[0].main;
                   descr.innerText=element.weather[0].description;
                   wind.innerText=element.wind.speed;

                tr.appendChild(td);
                tr.appendChild(day);
                tr.appendChild(temp);
                tr.appendChild(maxt);
                tr.appendChild(mint);
                tr.appendChild(pres);
                tr.appendChild(sea);
                tr.appendChild(rutub);
                tr.appendChild(weather);
                tr.appendChild(descr);
                tr.appendChild(wind);
                
                 h2.classList.add("d-none");
                tbody.appendChild(tr);  
                });
         }
     }
     http.open("GET","http://api.openweathermap.org/data/2.5/forecast?id=587084&APPID=ad13347afe18e1b76716899dc1747aa8&cnt=128");
     http.send();
 }