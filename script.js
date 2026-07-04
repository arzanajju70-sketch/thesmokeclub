/* ===========================
   PREMIUM EFFECTS
=========================== */

body::before{
content:"";
position:fixed;
top:0;
left:0;
width:100%;
height:100%;
pointer-events:none;
background:
radial-gradient(circle at 20% 20%,rgba(255,255,255,.04),transparent 35%),
radial-gradient(circle at 80% 60%,rgba(255,255,255,.03),transparent 35%),
radial-gradient(circle at 50% 90%,rgba(255,255,255,.02),transparent 35%);
animation:smokeMove 18s linear infinite;
z-index:-1;
}

@keyframes smokeMove{

0%{
transform:translateY(0);
opacity:.5;
}

50%{
transform:translateY(-40px);
opacity:.8;
}

100%{
transform:translateY(0);
opacity:.5;
}

}

/* GOLD GLOW */

.logo,
.title,
#about h2,
#reviews h2,
#contact h2{

text-shadow:0 0 10px gold,
0 0 25px rgba(255,215,0,.5);

}

/* BUTTON EFFECT */

button,
.shopbtn{

transition:.35s;

}

button:hover,
.shopbtn:hover{

transform:translateY(-4px) scale(1.05);

box-shadow:0 0 20px rgba(255,215,0,.4);

}

/* PRODUCT IMAGE */

.card img{

transition:.35s;

}

.card:hover img{

transform:scale(1.08) rotate(-2deg);

}

/* BADGE */

.badge{

display:inline-block;

background:gold;

color:black;

padding:5px 12px;

border-radius:20px;

font-size:12px;

font-weight:700;

margin-bottom:12px;

}

/* CARD ANIMATION */

.card{

animation:fadeUp .8s ease;

}

@keyframes fadeUp{

from{

opacity:0;
transform:translateY(30px);

}

to{

opacity:1;
transform:translateY(0);

}

}

/* NAV UNDERLINE */

nav a{

position:relative;

}

nav a::after{

content:"";

position:absolute;

left:0;

bottom:-6px;

width:0;

height:2px;

background:gold;

transition:.35s;

}

nav a:hover::after{

width:100%;

}

/* FOOTER */

footer{

letter-spacing:1px;

}
