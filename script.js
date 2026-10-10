(function(){
  var d=document,reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
  d.documentElement.classList.add('js');
  var els=d.querySelectorAll('.reveal');
  if('IntersectionObserver' in window&&!reduce){
    var io=new IntersectionObserver(function(e){e.forEach(function(x){if(x.isIntersecting){x.target.classList.add('in');io.unobserve(x.target)}})},{threshold:.15});
    els.forEach(function(el){io.observe(el)});
  }else{els.forEach(function(el){el.classList.add('in')})}
  if(!reduce){
    var box=d.querySelector('.petals'),n=0;
    var t=setInterval(function(){
      if(++n>12){clearInterval(t);return}
      var p=d.createElement('i');p.style.left=Math.random()*95+'%';
      p.style.animationDuration=(9+Math.random()*6)+'s';box.appendChild(p);
      setTimeout(function(){p.remove()},16000);
    },2500);
  }
  var msg=d.getElementById('msg');
  d.getElementById('share').addEventListener('click',function(){
    var data={title:d.title,url:location.href};
    if(navigator.share){navigator.share(data).catch(function(){})}
    else if(navigator.clipboard){navigator.clipboard.writeText(location.href).then(function(){msg.textContent='लिंक कॉपी हो गया।'})}
    else{msg.textContent=location.href}
  });
  d.getElementById('print').addEventListener('click',function(){window.print()});
})();
