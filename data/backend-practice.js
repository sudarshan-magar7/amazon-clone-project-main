const xrh=new XMLHttpRequest();
xrh.open('GET','https://supersimplebackend.dev/hello');
xrh.addEventListener('load',()=>{
    console.log(xrh.response);
})
xrh.send();
