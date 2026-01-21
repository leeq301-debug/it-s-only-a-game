const hinhanh = new Image();
hinhanh.src = "texturepack.png";
var canvas1 = document.getElementById("itsacanvas1")
var canvas2 = document.getElementById("itsacanvas2")
var ctxt1 = canvas1.getContext("2d")
var ctxt2 = canvas2.getContext("2d")
ctxt1.drawImage(hinhanh,0,0,200,200,0,0,200,200)
ctxt1.drawImage(hinhanh,0,0,200,200,0,0,200,200)
function trinhchieu(x,y){
    var widthen1 = (x-1)*200
    var widthen2 = (y-1)*200
    ctxt1.clearRect(0, 0, canvas1.width, canvas1.height);
    ctxt2.clearRect(0, 0, canvas2.width, canvas2.height);
    ctxt1.drawImage(hinhanh, widthen1, 0, widthen1+200,200,0,0,200,200 )
    ctxt2.drawImage(hinhanh, widthen2, 0, widthen2+200,200,0,0,200,200);
}
function laplai(a,b){
    var i=0
    var n=0
    i++
    n++
    trinhchieu(i,n)
    if (i<24+a && n<24+b){
        requestAnimationFrame(laplai(a,b))
    }
}
function quay(){
    var TAI = document.getElementById("nuttai")
    var XIU = document.getElementById("nutxiu")
    var so1 = Math.floor(Math.random()*6)+1
    var so2 = Math.floor(Math.random()*6)+1
    hinhanh.onload = function(){
        requestAnimationFrame(laplai(so1,so2))
        trinhchieu(so1,so2)
    }
    
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