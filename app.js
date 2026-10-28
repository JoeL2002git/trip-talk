"use strict";
const K="triptalk1";let S=JSON.parse(localStorage.getItem(K)||"null")||{lang:"ja",xp:0,streak:0,last:"",srs:{}};
const save=()=>localStorage.setItem(K,JSON.stringify(S));const $=s=>document.querySelector(s);const app=$("#app");
const EMOJI={greetings:"👋",numbers:"💴",food:"🍜",transit:"🚇",emergency:"🚑",shopping:"🛍️",hotel:"🏨",smalltalk:"💬"};
const today=()=>new Date().toLocaleDateString("en-CA");
function bumpStreak(){const t=today();if(S.last===t)return;const y=new Date(Date.now()-864e5).toLocaleDateString("en-CA");S.streak=S.last===y?S.streak+1:1;S.last=t;}
function addXP(n){S.xp+=n;bumpStreak();save();stats();}
function stats(){$("#xp").textContent=S.xp;$("#streak").textContent=S.streak;document.body.className=S.lang;
 document.querySelectorAll("#langs button").forEach(b=>b.classList.toggle("on",b.dataset.l===S.lang));
 const m=document.querySelector('meta[name=theme-color]');if(m)m.content=S.lang==="ja"?"#e8506e":"#1677c9";}
const items=(topic)=>(topic?[topic]:Object.keys(TOPICS)).flatMap(t=>DATA[S.lang][t].map((a,i)=>({id:`${S.lang}:${t}:${i}`,nat:a[0],rom:a[1],en:a[2],note:a[3],t})));
const st=id=>S.srs[id]||(S.srs[id]={box:0,due:0,wrong:0,right:0});
const BOX=[0,1,3,7,14,30];
function grade(it,ok){const s=st(it.id);if(ok){s.box=Math.min(5,s.box+1);s.right++;}else{s.box=0;s.wrong++;}s.due=Date.now()+BOX[s.box]*864e5+(ok?0:6e4);addXP(ok?10:2);}
const esc=x=>String(x).replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[c]);
const shuffle=a=>{a=a.slice();for(let i=a.length-1;i>0;i--){const j=Math.random()*(i+1)|0;[a[i],a[j]]=[a[j],a[i]]}return a};
let voices=[];const loadV=()=>voices=speechSynthesis.getVoices();if("speechSynthesis"in window){loadV();speechSynthesis.onvoiceschanged=loadV;}
function speak(t){if(!("speechSynthesis"in window))return;const L=S.lang==="ja"?"ja-JP":"ko-KR";
 const u=new SpeechSynthesisUtterance(t.replace(/…/g,""));u.lang=L;u.rate=.85;const v=voices.find(v=>v.lang.replace("_","-")===L)||voices.find(v=>v.lang.startsWith(S.lang));
 if(v)u.voice=v;speechSynthesis.cancel();speechSynthesis.speak(u);}
const buzz=p=>{try{navigator.vibrate&&navigator.vibrate(p)}catch(e){}};
function flash(ok){const d=document.createElement("div");d.className="flash";d.style.background=ok?"var(--ok)":"var(--bad)";document.body.appendChild(d);setTimeout(()=>d.remove(),600);}
function confetti(n=28){const cs=["#ff5d8f","#ffb627","#3cc6c0","#1677c9","#2fbf71","#a970ff"];for(let i=0;i<n;i++){const c=document.createElement("i");c.className="conf";
 c.style.left=Math.random()*100+"vw";c.style.background=cs[i%cs.length];c.style.setProperty("--dx",(Math.random()*120-60)+"px");c.style.animationDelay=Math.random()*.3+"s";document.body.appendChild(c);setTimeout(()=>c.remove(),2000);}}
function feedback(ok){flash(ok);buzz(ok?20:[40,60,40]);if(ok&&Math.random()<.35)confetti(14);}
const view=h=>{app.innerHTML=`<div class="view">${h}</div>`;window.scrollTo(0,0);};
const weak=()=>items().filter(i=>{const s=S.srs[i.id];return s&&s.wrong>0&&s.wrong>=s.right/2}).sort((a,b)=>S.srs[b.id].wrong-S.srs[a.id].wrong);
function ring(p){const r=16,c=2*Math.PI*r;return`<svg class="ring" viewBox="0 0 38 38"><circle class="bg" cx="19" cy="19" r="${r}"/><circle class="fg" cx="19" cy="19" r="${r}" stroke-dasharray="${c}" stroke-dashoffset="${c*(1-p)}"/><text x="19" y="19">${Math.round(p*100)}</text></svg>`;}
function home(){const w=weak().length,all=items(),due=all.filter(i=>st(i.id).due<=Date.now()).length;save();
 const ja=S.lang==="ja";
 view(`<div class="hero"><span class="big">${ja?"🌸":"🌊"}</span><button class="gear" id="set" aria-label="Settings">⚙️</button><b id="hi">${ja?"こんにちは":"안녕하세요"}${S.name?", "+esc(S.name):""}!</b><p>${due} cards ready to review${trip()}</p></div>
 <div class="grid">`+Object.entries(TOPICS).map(([k,v])=>{const its=items(k),l=its.filter(i=>(S.srs[i.id]||{}).box>=2).length;
 return`<button class="tile" data-t="${k}">${ring(l/its.length)}<span class="em">${EMOJI[k]}</span><span><div class="nm">${v}</div><div class="ct">${l}/${its.length} learned</div></span></button>`}).join("")+
 `<button class="tile wide" data-t=""><span class="em">🎲</span><span><div class="nm">All topics mixed</div><div class="ct">${all.length} phrases</div></span></button>`+
 (w?`<button class="tile wide" data-weak><span class="em">💪</span><span><div class="nm">Weak items</div><div class="ct">${w} to strengthen</div></span></button>`:"")+
 `</div><p class="tip">Tap 🔊 to hear phrases · progress saves on this device · works offline</p>`);
 app.querySelectorAll("[data-t]").forEach(b=>b.onclick=()=>menu(b.dataset.t));const wb=app.querySelector("[data-weak]");if(wb)wb.onclick=()=>menu(null,true);}
function menu(t,isWeak){const pool=()=>isWeak?weak():items(t||null);const name=isWeak?"Weak items":t?TOPICS[t]:"All topics";const em=isWeak?"💪":t?EMOJI[t]:"🎲";
 view(`<h2>${em} ${name}</h2><p class="sub">${pool().length} phrases</p>
 <button class="btn pri mode" id="f"><span class="ic">🃏</span><span>Flashcards<small>Spaced review of what's due</small></span></button>
 <button class="btn mode" id="m"><span class="ic">✅</span><span>Multiple choice<small>10 quick questions</small></span></button>
 <button class="btn mode" id="y"><span class="ic">⌨️</span><span>Type the answer<small>Romanization, forgiving spelling</small></span></button>
 <button class="btn mode" id="l"><span class="ic">📖</span><span>Browse all phrases<small>With notes and audio</small></span></button>
 <button class="btn ghost" id="b">← Back to topics</button>`);
 $("#f").onclick=()=>flash_(pool());$("#m").onclick=()=>quiz(pool(),"mc");$("#y").onclick=()=>quiz(pool(),"type");$("#l").onclick=()=>list(pool());$("#b").onclick=home;}
const natCls=s=>s.length>12?"nat s":"nat";
function cardHTML(i,show){return`<div class="card"><div class="${natCls(i.nat)}">${esc(i.nat)}</div><button class="spk" data-say aria-label="Play audio">🔊</button>${show?`<div class="rom">${esc(i.rom)}</div><div class="en">${esc(i.en)}</div><div class="note">${esc(i.note)}</div>`:""}</div>`;}
function bindSay(i){app.querySelectorAll("[data-say]").forEach(b=>b.onclick=e=>{e.stopPropagation();speak(i.nat)});}
const lhead=(n,t)=>`<div class="lhead"><button class="x" id="b" aria-label="Close">✕</button><div class="bar"><i style="width:${n/t*100}%"></i></div></div>`;
function list(p){view(`<h2>📖 Phrases</h2>`+p.map((i,k)=>`<div class="card listc"><div class="r"><div class="${natCls(i.nat)}">${esc(i.nat)}</div><button class="spk" data-k="${k}">🔊</button></div><div class="rom">${esc(i.rom)}</div><div class="en">${esc(i.en)}</div>${i.note?`<div class="note">${esc(i.note)}</div>`:""}</div>`).join("")+`<button class="btn ghost" id="b">← Back to topics</button>`);
 app.querySelectorAll("[data-k]").forEach(b=>b.onclick=()=>speak(p[+b.dataset.k].nat));$("#b").onclick=home;}
function done_(title,sub){confetti(40);buzz([30,40,30]);view(`<div class="card result"><div class="big">🎉</div><h2>${title}</h2><p class="hint">${sub}</p></div><button class="btn pri" id="b">Back to topics</button>`);$("#b").onclick=home;}
function flash_(p){const now=Date.now();let q=p.filter(i=>st(i.id).due<=now).sort((a,b)=>st(a.id).box-st(b.id).box).slice(0,15);save();
 if(!q.length){view(`<div class="card result"><div class="big">✨</div><h2>All caught up!</h2><p class="hint">Nothing due here. Try a quiz.</p></div><button class="btn pri" id="b">Back to topics</button>`);$("#b").onclick=home;return;}
 let n=0,tot=q.length;const show=()=>{const i=q[n];
  view(lhead(n,tot)+`<div class="flip" id="fl"><div class="in"><div class="face card"><div class="${natCls(i.nat)}">${esc(i.nat)}</div><button class="spk" data-say>🔊</button><div class="hint">Tap card to flip</div></div>
  <div class="face back card"><div class="${natCls(i.nat)}">${esc(i.nat)}</div><div class="rom">${esc(i.rom)}</div><div class="en">${esc(i.en)}</div><div class="note">${esc(i.note)}</div><button class="spk" data-say>🔊</button></div></div></div>
  <div id="ctl"><button class="btn pri" id="rv">Show answer</button></div><p class="hint" style="text-align:center">Card ${n+1} of ${q.length} · box ${st(i.id).box}</p>`);
  bindSay(i);$("#b").onclick=home;speak(i.nat);
  const rev=()=>{if($("#fl").classList.contains("r"))return;$("#fl").classList.add("r");$("#ctl").innerHTML=`<div class="row"><button class="btn" id="no" style="color:var(--bad)">↺ Again</button><button class="btn pri" id="yes">✓ Got it</button></div>`;
   const nx=ok=>{feedback(ok);grade(i,ok);if(!ok){q.push(i);tot++;}n++;n<q.length?show():done_("Session done!",`Reviewed ${n} cards · keep the streak going 🔥`)};$("#no").onclick=()=>nx(0);$("#yes").onclick=()=>nx(1);};
  $("#rv").onclick=rev;$("#fl").onclick=rev;};show();}
const norm=s=>s.normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase().replace(/ou/g,"o").replace(/oo/g,"o").replace(/uu/g,"u").replace(/[^a-z]/g,"");
function accepts(i,ans){const a=norm(ans);if(!a)return false;return i.rom.split("/").map(norm).some(r=>r===a)||ans.trim()===i.nat.replace(/[?？!！]/g,"")||ans.trim()===i.nat;}
function quiz(p,mode){if(p.length<2){alert("Not enough items yet");return;}const q=shuffle(p).slice(0,10);let n=0,score=0;
 const next=()=>{if(n>=q.length){addXP(score*2);return done_(`${score} / ${q.length}`,`+${score*2} bonus XP${score===q.length?" · perfect! 🌟":""}`);}
  const i=q[n],hdr=lhead(n,q.length);
  if(mode==="mc"){const rev=Math.random()<.5;const opts=shuffle([i,...shuffle(items().filter(x=>x.en!==i.en)).slice(0,3)]);
   view(hdr+`<p class="hint">${rev?"How do you say…":"What does this mean?"}</p>`+(rev?`<div class="card"><div class="en">${esc(i.en)}</div></div>`:cardHTML(i,0))+opts.map((o,k)=>`<button class="btn opt" data-k="${k}">${rev?`<span><span style="font-size:20px">${esc(o.nat)}</span> <span class="hint">${esc(o.rom)}</span></span>`:esc(o.en)}</button>`).join(""));bindSay(i);if(!rev)speak(i.nat);
   app.querySelectorAll("[data-k]").forEach(b=>b.onclick=()=>{const ok=opts[+b.dataset.k]===i;b.classList.add(ok?"ok":"bad");app.querySelectorAll("[data-k]").forEach(x=>{if(opts[+x.dataset.k]===i)x.classList.add("ok");x.onclick=null});done(i,ok);});}
  else{view(hdr+`<p class="hint">Type this in romanization</p><div class="card"><div class="en">${esc(i.en)}</div></div><input id="in" autocomplete="off" autocapitalize="off" spellcheck="false" placeholder="e.g. arigato gozaimasu"><button class="btn pri" id="go">Check</button>`);
   const inp=$("#in");inp.focus();const chk=()=>{if($("#go").disabled)return;$("#go").disabled=true;const ok=accepts(i,inp.value);inp.disabled=true;inp.style.borderColor=ok?"var(--ok)":"var(--bad)";done(i,ok);};
   $("#go").onclick=chk;inp.onkeydown=e=>{if(e.key==="Enter")chk()};}};
 const done=(i,ok)=>{grade(i,ok);feedback(ok);if(ok)score++;speak(i.nat);
  app.querySelector(".view").insertAdjacentHTML("beforeend",`<div style="height:190px"></div><div class="fb ${ok?"ok":"bad"}"><h3>${ok?"✓ Nice!":"✗ Not quite"}</h3><div><b style="font-size:20px">${esc(i.nat)}</b> · ${esc(i.rom)}</div><div class="hint">${esc(i.en)}</div><button class="btn pri" id="nx">Continue</button></div>`);
  $("#nx").onclick=()=>{n++;next()};};next();}
document.querySelectorAll("#langs button").forEach(b=>b.onclick=()=>{S.lang=b.dataset.l;save();stats();home();});
stats();home();

function trip(){if(!S.trip)return"";const d=Math.ceil((new Date(S.trip+"T00:00:00")-new Date(today()+"T00:00:00"))/864e5);return d>0?` · trip in ${d} day${d==1?"":"s"}`:d==0?" · trip starts today! ✈️":"";}
function sheet(first){const m=document.createElement("div");m.className="modal";m.innerHTML=`<div class="mbox" role="dialog" aria-modal="true"><div class="wave">👋</div><h2>${first?"Welcome to TripTalk!":"Settings"}</h2><label>What should we call you?<input id="nm" maxlength="30" autocomplete="given-name" placeholder="Your name" value="${esc(S.name||"")}"></label>${first?"":`<label>Trip date (optional)<input id="td" type="date" value="${S.trip||""}"></label>`}<button class="btn pri" id="sv">${first?"Let's go":"Save"}</button><button class="btn ghost" id="sk">${first?"Skip":"Cancel"}</button></div>`;document.body.appendChild(m);const nm=m.querySelector("#nm");setTimeout(()=>nm.focus(),50);
const close=()=>{m.remove();home();};
m.querySelector("#sv").onclick=()=>{S.name=nm.value.trim();const td=m.querySelector("#td");if(td)S.trip=td.value;save();close();};
nm.onkeydown=e=>{if(e.key==="Enter")m.querySelector("#sv").click();};
m.querySelector("#sk").onclick=()=>{if(S.name===undefined)S.name="";save();close();};}
document.addEventListener("click",e=>{if(e.target.closest("#set,#hi"))sheet(false);});
if(S.name===undefined)setTimeout(()=>sheet(true),300);
