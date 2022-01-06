var container=document.createElement('div');
container.setAttribute('class','container');
container.style.width="100%";

var nav=document.createElement('nav');
nav.style.display="flex";
nav.style.minHeight="11vh";
nav.style.background="#29465B";
nav.style.position="sticky"

nav.style.alignItems="center";
nav.style.position="relative";

var div1=document.createElement('div');
div1.setAttribute('class','logo');
div1.style.alignItems="left";

var i=document.createElement('i');
i.setAttribute('class','fa fa-book');
i.innerHTML="Bookspot";
i.style.fontWeight="bold";
i.style.fontSize="30px";
i.style.letterSpacing="2px";
i.style.color="white";
i.style.marginLeft="10px";


var ul=document.createElement('ul');
ul.style.display="flex";
ul.style.justifyContent="space-around";
ul.style.width="20%";
ul.style.marginLeft="650px";
ul.style.fontSize="18px"
ul.style.position="absolute";
ul.style.listStyle="none";
ul.style.color="white";

var li1=document.createElement('li');
var a1=document.createElement('a');
a1.setAttribute('href','#');
a1.innerHTML="Home";
a1.style.color="white";
a1.style.textDecoration="none";

var li2=document.createElement('li');
var a2=document.createElement('a');
a2.setAttribute('href','#');
a2.innerHTML="About";
a2.style.color="white";
a2.style.textDecoration="none";


var li3=document.createElement('li');
var a3=document.createElement('a');
a3.setAttribute('href','#');
a3.innerHTML="Contact";
a3.style.color="white";
a3.style.textDecoration="none";


var div2=document.createElement('div');
div2.setAttribute('class','div2');
div2.style.width="15%";
div2.style.display="flex";
div2.style.marginLeft="1000px";
div2.style.justifyContent="space-between";
div2.style.position="absolute";

var btn1=document.createElement('button');
btn1.setAttribute('type','button');
btn1.setAttribute('id','data1');
btn1.innerHTML="Log in";
btn1.style.width="75px";
btn1.style.height="30px";
btn1.style.borderRadius="5px";
btn1.style.border="none";
btn1.style.fontWeight="bold";

var br1=document.createElement('br');

var btn2=document.createElement('button');
btn2.setAttribute('type','button');
btn2.setAttribute('id','data2');
btn2.innerHTML="Sign up";
btn2.style.marginLeft="14px";
btn2.style.width="75px";
btn2.style.height="30px";
btn2.style.borderRadius="5px";
btn2.style.border="none";
btn2.style.fontWeight="bold";

var div3=document.createElement('div');
div3.setAttribute('class','box');
div3.style.width="100%";
div3.style.minHeight="400px";
div3.style.background = "linear-gradient(25deg, #FF0000 , #800080)";


var input=document.createElement('input');
input.setAttribute("type",'text');
input.setAttribute('name',"");
input.setAttribute('placeholder','Search book number(1-12)');
input.setAttribute('id','val');
input.style.width="400px";
input.style.height="40px";
input.style.marginTop="100px";
input.style.marginLeft="400px";
input.style.borderRadius="20px";
input.style.fontSize="15px"
input.style.border="none";
input.style.outline="none";

var br2=document.createElement('br');

var btn3=document.createElement('button');
btn3.setAttribute('type','button');
btn3.setAttribute('id','check');
btn3.addEventListener('click',getData);
btn3.style.width="100px";
btn3.style.height="40px";
btn3.innerHTML="Click";
btn3.style.margin="30px 0px 0px 550px";
btn3.style.borderRadius="4px";
btn3.style.border="none";
btn3.style.outline="none";
btn3.style.backgroundColor="#C0C0C0";
btn3.style.color="white";
btn3.addEventListener("mouseenter",foo => {
    btn3.style.boxShadow="0 0 5px #f0c9a5, 0 0 25px #f0c9a5, 0 0 50px #f0c9a5, 0 0 200px #f0c9a5";

});
btn3.addEventListener("mouseleave", foo =>{
    btn3.style.boxShadow="none";
})

var div4=document.createElement('div');
div4.style.display="flex";
div4.style.flexWrap="wrap";
div4.style.width="100%";
div4.style.height="350px";
div4.style.marginTop="10px";
div4.style.backgroundColor="white";
div4.style.border="none";
div4.style.boxShadow="2px 3px 4px 3px gray";

var div5=document.createElement('div');
div5.setAttribute('id','row');
div5.style.width="400px";
div5.style.height="270px";
div5.style.marginLeft="400px";
div5.style.marginTop="20px";
div5.style.boxShadow="2px 3px 4px 3px gray";
div5.style.padding="40px 0px 0px 80px";

var section=document.createElement('section');
section.setAttribute('class','footer');
section.style.fontFamily="segoe UI";
section.style.backgroundColor="rgb(23, 23, 29)";
section.style.padding="40px 0";

var div6=document.createElement('div');
div6.setAttribute('class','social');
div6.style.textAlign="center";
div6.style.paddingBottom="25px";

var a4=document.createElement('a');
a4.setAttribute('href','#');
a4.style.color="white";
a4.style.fontSize="24px";
a4.style.border="1px solid #ccc";
a4.style.width="40px";
a4.style.height="40px";
a4.style.lineHeight="38px";
a4.style.display="inline-block";
a4.style.textAlign="center";
a4.style.borderRadius="50%";
a4.style.margin=" 0 8px";
a4.style.color="black";
a4.style.backgroundColor="white";
a4.style.opacity="0.75";


var i1=document.createElement('i');
i1.setAttribute('class','fa fa-instagram');


var a5=document.createElement('a');
a5.setAttribute('href','#');
a5.style.color="white";
a5.style.fontSize="24px";
a5.style.border="1px solid #ccc";
a5.style.width="40px";
a5.style.height="40px";
a5.style.lineHeight="38px";
a5.style.display="inline-block";
a5.style.textAlign="center";
a5.style.borderRadius="50%";
a5.style.margin=" 0 8px";
a5.style.color="black";
a5.style.backgroundColor="white";
a5.style.opacity="0.75";


var i2=document.createElement('i');
i2.setAttribute('class','fa fa-facebook');

var a6=document.createElement('a');
a6.setAttribute('href','#');
a6.style.color="white";
a6.style.fontSize="24px";
a6.style.border="1px solid #ccc";
a6.style.width="40px";
a6.style.height="40px";
a6.style.lineHeight="38px";
a6.style.display="inline-block";
a6.style.textAlign="center";
a6.style.borderRadius="50%";
a6.style.margin=" 0 8px";
a6.style.color="black";
a6.style.backgroundColor="white";
a6.style.opacity="0.75";


var i3=document.createElement('i');
i3.setAttribute('class','fa fa-twitter');

var ul1=document.createElement('ul');
ul1.setAttribute('class','list');
ul1.style.marginTop="0";
ul1.style.padding="0";
ul1.style.listStyle="none";
ul1.style.fontSize="15px";
ul1.style.lineHeight="1.6";
ul1.style.marginBottom="0";
ul1.style.textAlign="center";

var li4=document.createElement('li');
li4.style.display="inline-block";
li4.style.padding="0 15px";

var a7=document.createElement('a');
a7.setAttribute('href','#');
a7.innerHTML="Home";
a7.style.color="white";
a7.style.textDecoration="none";
a7.style.opacity="0.8";

var li5=document.createElement('li');
li5.style.display="inline-block";
li5.style.padding="0 15px";
var a8=document.createElement('a');
a8.setAttribute('href','#');
a8.innerHTML="About";
a8.style.color="white";
a8.style.textDecoration="none";
a8.style.opacity="0.8";

var li6=document.createElement('li');
li6.style.display="inline-block";
li6.style.padding="0 15px";
var a9=document.createElement('a');
a9.setAttribute('href','#');
a9.innerHTML="Terms";
a9.style.color="white";
a9.style.textDecoration="none";
a9.style.opacity="0.8";

var li7=document.createElement('li');
li7.style.display="inline-block";
li7.style.padding="0 15px";
var a10=document.createElement('a');
a10.setAttribute('href','#');
a10.innerHTML="Privacy policy";
a10.style.color="white";
a10.style.textDecoration="none";
a10.style.opacity="0.8";

var p1=document.createElement('p');
p1.setAttribute('class','copyright');
p1.innerHTML="Future coders @2022";
p1.style.marginTop="15px";
p1.style.textAlign="center";
p1.style.fontSize="13px";
p1.style.color="#aaa";

li3.append(a3);
li2.append(a2);
li1.append(a1);
ul.append(li1,li2,li3);
div1.append(i);
div2.append(btn1,br1,btn2);
nav.append(div1,ul,div2);
div3.append(input,br2,btn3);
div4.append(div5);
a4.append(i1);
a5.append(i2);
a6.append(i3);
div6.append(a4,a5,a6);
li4.append(a7);
li5.append(a8);
li6.append(a9);
li7.append(a10);
ul1.append(li4,li5,li6,li7);
section.append(div6,ul1,p1);
container.append(nav,div3,div4,section);
document.body.append(container);



async function getData(){

try{
    let name=document.getElementById("val").value;
    console.log(name);
    let res=await fetch(`https://www.anapioficeandfire.com/api/books/${name}`);
    let result=await res.json();
    console.log(result);
    console.log(`
                 ${result.name}
                 ${result.isbn}
                 ${result.numberOfPages}
                 ${result.authors}
                 ${result.publisher}
                 ${result.released}`);  

    document.getElementById("row").innerHTML=`
    <b>Name:</b>            ${result.name}<br><br>
    <b>isbn:</b>            ${result.isbn}<br><br>
    <b>Number of pages:</b>  ${result.numberOfPages}<br><br>
    <b>Authors:</b>         ${result.authors}<br><br>
    <b>Publisher Name:</b>       ${result.publisher}<br><br>
    <b>Released Date:</b>         ${result.released}`;             
                             
}
catch(error){
 console.log("error");
}   

}
