import {hinhanh,trinhchieu} from './myscrip.js';
function datlaixiu() {
    document.getElementById("daura").innerHTML = "";
    document.getElementById("nuttai").checked = false;
    document.getElementById("nutxiu").checked = false;
    if (hinhanh.complete){
        trinhchieu(1,1);
    }
    else {
        hinhanh.onload = function(){
            trinhchieu(1,1);
        }
    }
}