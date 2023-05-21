//your JS code here. If required.
let ele=document.createElement("h1");
ele.innerText=`You are using ${navigator.appName} version ${navigator.appVersion}`;
document.getElementById("browser-info").append(ele);