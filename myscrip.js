const hinhanh = new Image();
hinhanh.src = "texturepack.png";

var canvas1 = document.getElementById("itsacanvas1");
var canvas2 = document.getElementById("itsacanvas2");

canvas1.width = 200;
canvas1.height = 200;
canvas2.width = 200;
canvas2.height = 200;

var ctxt1 = canvas1.getContext("2d");
var ctxt2 = canvas2.getContext("2d");

hinhanh.onload = function(){
    // Vẽ hình ban đầu (chỉ một lần)
    ctxt1.drawImage(hinhanh, 0, 0, 200, 200, 0, 0, 200, 200);
    ctxt2.drawImage(hinhanh, 0, 0, 200, 200, 0, 0, 200, 200);
};

function trinhchieu(x, y){
    var widthen1 = (x - 1) * 200;
    var widthen2 = (y - 1) * 200;
    ctxt1.clearRect(0, 0, canvas1.width, canvas1.height);  // Dùng canvas.width mặc định (300)
    ctxt2.clearRect(0, 0, canvas2.width, canvas2.height);
    ctxt1.drawImage(hinhanh, widthen1, 0, 200, 200, 0, 0, 200, 200);
    ctxt2.drawImage(hinhanh, widthen2, 0, 200, 200, 0, 0, 200, 200);
}

function laplai(a, b, tim, intervalId){
    tim++;
    trinhchieu(tim, tim);  // Lặp qua frame chung (có thể sửa thành riêng nếu cần)
    if (tim >= 24){  // Dừng sau 24 frame
        clearInterval(intervalId);
        trinhchieu(a, b);  // Hiển thị kết quả cuối
    }
    // Không cần else với setInterval nữa, vì setInterval đã được gọi ở quay()
}

function quay(hinhanh){
    var TAI = document.getElementById("nuttai");
    var XIU = document.getElementById("nutxiu");
    var so1 = Math.floor(Math.random() * 6) + 1;
    var so2 = Math.floor(Math.random() * 6) + 1;

    if (hinhanh.complete){
        var intervalId = setInterval(() => laplai(so1, so2, 0, intervalId), 100);  // Thêm intervalId và delay 100ms
    } else {
        hinhanh.onload = function(){
            var intervalId = setInterval(() => laplai(so1, so2, 0, intervalId), 100);
        }
    }
    if (so1 + so2 > 6){
        if (TAI.checked && !XIU.checked){
            document.getElementById("daura").innerHTML = "Bạn đã thắng!";
        } else if (!TAI.checked && XIU.checked){
            document.getElementById("daura").innerHTML = "Bạn đã thua!";
        } else {
            document.getElementById("daura").innerHTML = "Không hợp lệ!";
        }
    } else {
        document.getElementById("daura").innerHTML = "Kết quả: " + (so1 + so2);
    }
}