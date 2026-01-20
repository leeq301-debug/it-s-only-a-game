const hinhanh = new Image();
hinhanh.src = "texturepack.png";
const canvas1 = document.getElementById("itsacanvas1")
const canvas2 = document.getElementById("itsacanvas2")
const ctxt1 = canvas1.getContext("2d")
const ctxt2 = canvas2.getContext("2d")
const sizetion = 200;
function trinhchieu(x,y){
    var widthen1 = (x-1)*sizetion
    var widthen2 = (y-1)*sizetion
    ctxt1.clearRect(0, 0, canvas1.width, canvas1.height);
    ctxt2.clearRect(0, 0, canvas2.width, canvas2.height);
    ctxt1.drawImage(hinhanh, widthen1, 0, widthen1+sizetion,sizetion,0,0,sizetion,sizetion )
    ctxt2.drawImage(hinhanh, widthen2, 0, widthen2+sizetion,sizetion,0,0,sizetion,sizetion);
}
function laplai(a,b){
    var i=0
    var n=0
    i++
    n++
    trinhchieu(i,n)
    if (i<10+a && n<10+b){
        requestAnimationFrame(laplai(a,b))
    }
    else{
        trinhchieu(a,b)
    }
}
function quay(){
    var TAI = document.getElementById("nuttai")
    var XIU = document.getElementById("nutxiu")
    var so1 = Math.floor(Math.random()*6)+1
    var so2 = Math.floor(Math.random()*6)+1
    requestAnimationFrame(laplai(so1,so2))
    if (so1+so2>6){
        if (TAI.checked && !XIU.checked){
            document.getElementById("daura").innerHTML = "Bạn đã thắng!"
        }
        else if (!TAI.checked && XIU.checked){
            document.getElementById("daura").innerHTML = "Bạn đã thua!"
        }
        else{
            document.getElementById("daura").innerHTML = "Không hợp lệ!"
        }
    
    }
}