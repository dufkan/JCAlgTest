var w = document.getElementById('chart').offsetWidth,
    h = window.innerHeight -70;
var colorscale = d3.scale.category10();
var data = [
[
{axis:"SECURE RANDOM (256B)",value:0.884,title:"41.4 ms"},
{axis:"SHA-1 hash (256B)",value:0.099,title:"62.4 ms"},
{axis:"SHA2-256 hash (256B)",value:0.099,title:"114.26 ms"},
{axis:"AES128 encrypt (256B)",value:0.834,title:"16.9 ms"},
{axis:"AES256 encrypt (256B)",value:0.868,title:"17.1 ms"},
{axis:"3DES encrypt (256B)",value:0.711,title:"59.13 ms"},
{axis:"3DES setKey(192b)",value:0.692,title:"15.3 ms"},
{axis:"AES setKey(128b)",value:0.763,title:"11.62 ms"},
{axis:"AES setKey(256b)",value:0.673,title:"16.2 ms"},
{axis:"SWAES oneblock (16B)",value:0.718,title:"669.64 ms"},
{axis:" arrayCopy nonAtomic RAM2RAM (256B)",value:0.826,title:"1.11 ms"},
{axis:" arrayCopy nonAtomic EEPROM2EEPROM (256B)",value:0.904,title:"4.04 ms"},
{axis:"ECC 256b genKeyPair",value:0.0,title:"NS"},
{axis:"ECDSA 256b sign",value:0.0,title:"NS"},
{axis:"ECDSA 256b verify",value:0.0,title:"NS"},
{axis:"ECDH 256b",value:0.0,title:"NS"},
{axis:"RSA1024 CRT decrypt",value:0.585,title:"182.74 ms"},
{axis:"RSA1024 CRT encrypt",value:0.525,title:"19.02 ms"},
{axis:"RSA2048 CRT decrypt",value:0.520,title:"836.66 ms"},
{axis:"RSA2048 CRT encrypt",value:0.653,title:"28.53 ms"},
{axis:"RSA1024 decrypt",value:0.145,title:"409.75 ms"},
{axis:"RSA1024 encrypt",value:0.527,title:"18.93 ms"},
{axis:"RSA2048 decrypt",value:0.181,title:"2659.69 ms"},
{axis:"RSA2048 encrypt",value:0.651,title:"28.68 ms"},
],
[
{axis:"SECURE RANDOM (256B)",value:0.981,title:"6.91 ms"},
{axis:"SHA-1 hash (256B)",value:0.843,title:"10.84 ms"},
{axis:"SHA2-256 hash (256B)",value:0.881,title:"15.05 ms"},
{axis:"AES128 encrypt (256B)",value:0.989,title:"1.14 ms"},
{axis:"AES256 encrypt (256B)",value:0.995,title:"0.66 ms"},
{axis:"3DES encrypt (256B)",value:0.996,title:"0.79 ms"},
{axis:"3DES setKey(192b)",value:0.545,title:"22.58 ms"},
{axis:"AES setKey(128b)",value:0.557,title:"21.68 ms"},
{axis:"AES setKey(256b)",value:0.526,title:"23.45 ms"},
{axis:"SWAES oneblock (16B)",value:0.878,title:"289.41 ms"},
{axis:" arrayCopy nonAtomic RAM2RAM (256B)",value:0.966,title:"0.22 ms"},
{axis:" arrayCopy nonAtomic EEPROM2EEPROM (256B)",value:0.993,title:"0.31 ms"},
{axis:"ECC 256b genKeyPair",value:1.650,title:"-412.0 ms"},
{axis:"ECDSA 256b sign",value:0.752,title:"39.19 ms"},
{axis:"ECDSA 256b verify",value:0.827,title:"40.35 ms"},
{axis:"ECDH 256b",value:1.065,title:"-13.44 ms"},
{axis:"RSA1024 CRT decrypt",value:0.939,title:"26.96 ms"},
{axis:"RSA1024 CRT encrypt",value:1.362,title:"-14.49 ms"},
{axis:"RSA2048 CRT decrypt",value:0.963,title:"64.82 ms"},
{axis:"RSA2048 CRT encrypt",value:1.161,title:"-13.22 ms"},
{axis:"RSA1024 decrypt",value:0.921,title:"37.62 ms"},
{axis:"RSA1024 encrypt",value:1.184,title:"-7.37 ms"},
{axis:"RSA2048 decrypt",value:0.933,title:"217.29 ms"},
{axis:"RSA2048 encrypt",value:1.074,title:"-6.1 ms"},
],
];

var config = { w: w-175,
 h: h-175,
 maxValue: 1.0,
 levels: 10,
 }

RadarChart.draw("#chart", data, config);