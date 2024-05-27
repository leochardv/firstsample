document.write("<h3>ただの出力</h3>")
document.write("This is written by JavaScript!<br>")

// 文字列の変数
document.write("<h3>文字列の変数</h3>")
var x = 12345;
document.write(x + "<br>");
x = "Hello";
document.write(x + "<br><br>");

// 数値計算
document.write("<h3>数値計算</h3>")
var x = 123;
var y = 456;
var z = x + y;
document.write(x + " + " + y + " = " + z + "<br>");

// if文
document.write("<h3>if文</h3>");
x = 12345;
if (x % 2 == 0) {
    document.write(x + 'は、<span class="gu">偶数</span>です。<br>');
} else {
    document.write(x + 'は、<span class="ki">奇数</span>です。<br>');
}

// While文
document.write("<h3>while文</h3>");
x = 1;
var end = 20;
var total = 0;
while(x < end) {
    total = total + x;
    document.write(x + " + ");
    x = x + 1;
}
total = total + x;
document.write(x + " = " + total + "<br>");

// For文
document.write("<h3>for文</h3>");
end = 100;
total = 0;
for(var i = 1; i <= end; i++) {
    total += i;
}
document.write(end + "までの合計は、" + total + "<br>");

// 配列
document.write("<h3>配列</h3>");
var data = [98, 67, 81, 59, 76];
total = 0;
for(var i = 0; i < data.length; i++) {
    total += data[i];

    if(i < data.length - 1){
        document.write(data[i] + " + ");
    }
    else{
        document.write(data[i] + " = ");
    }
}
document.write(total + "<br>");
document.write(data.length + "つの数字の平均は、" + total/data.length + "<br>");

// 連想配列
document.write("<h3>連想配列</h3>");
var data = {'国語': 98, '数学': 67, '英語':81, '理科':59, '社会':76};
var total = 0;

for(key in data){
    total += data[key];
    document.write("[" + key + ":" + data[key]  + "]");
}
document.write("<br><br>");
document.write("合計点は、" + total + "<br>");
document.write(Object.keys(data).length + "つの科目の平均は、" + total/Object.keys(data).length + "<br>");

// 関数
var count = 1;

function writeMsg(msg){
    document.write('<p><span class="No">' + count++ + '.</span>' + msg + '</p>');
}

var fn = function(msg){
    document.write('<p><span class="No">' + count++ + '.</span>' + msg + '</p>');
}

var syohi_zei = new Object();

syohi_zei.tax = 8;
syohi_zei.price_ex_tax = 0;

syohi_zei.kingaku = function(){
    document.write('<p><span class="head">金額（税抜き）：</span>' + syohi_zei.price_ex_tax + '円</p>');
}

syohi_zei.zeigaku = function(){
    document.write('<p><span class="head">税額：</span>' + Math.trunc(syohi_zei.price_ex_tax * syohi_zei.tax / 100) + '円</p>');
}

syohi_zei.zeikomi = function(){
    document.write('<p><span class="head">金額（税込み）：</span>' + Math.trunc(syohi_zei.price_ex_tax * (1 + syohi_zei.tax / 100)) + '円</p>');
}