function laplai(x){
    alert("tinh nang dang duoc phat trien")

}
function quay(){
    var TAI = document.getElementById("nuttai")
    var XIU = document.getElementById("nutxiu")
    var so1 = Math.floor(Math.random()*6)+1
    var so2 = Math.floor(Math.random()*6)+1
    laplai(so1)
    laplai(so2)
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