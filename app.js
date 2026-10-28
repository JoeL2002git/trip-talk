"use strict";
const K="triptalk1";let S=JSON.parse(localStorage.getItem(K)||"null")||{lang:"ja",xp:0,streak:0,last:"",srs:{}};
const save=()=>localStorage.setItem(K,JSON.stringify(S));const $=s=>document.querySelector(s);const app=$("#app");
const today=()=>new Date().toLocaleDateString("en-CA");
function bumpStreak(){const t=today();if(S.last===t)return;const y=new Date(Date.now()-864e5).toLocaleDateString("en-CA");S.streak=S.last===y?S.streak+1:1;S.last=t;}
function addXP(n){S.xp+=n;bumpStreak();save();stats();}
function stats(){$("#stats").textContent=`⭐ ${S.xp} XP · 🔥 ${S.streak} day streak`;document.querySelectorAll("#langs button").forEach(b=>b.classList.toggle("on",b.dataset.l===S.lang));}
const items=(topic)=>(topic?[topic]:Object.keys(TOPICS)).flatMap(t=>DATA[S.lang][t].map((a,i)=>({id:`${S.lang}:${t}:${i}`,nat:a[0],rom:a[1],en:a[2],note:a[3],t})));
const st=id=>S.srs[id]||(S.srs[id]={box:0,due:0,wrong:0,right:0});
const BOX=[0,1,3,7,14,30];// Leitner days
function grade(it,ok){const s=st(it.id);if(ok){s.box=Math.min(5,s.box+1);s.right++;}else{s.box=0;s.wrong++;}s.due=Date.now()+BOX[s.box]*864e5+(ok?0:6e4);addXP(ok?10:2);}
const esc=x=>String(x).replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[c]);
const shuffle=a=>{a=a.slice();for(let i=a.length-1;i>0;i--){const j=Math.random()*(i+1)|0;[a[i],a[j]]=[a[j],a[i]]}return a};
let voices=[];const loadV=()=>voices=speechSynthesis.getVoices();if("speechSynthesis"in window){loadV();speechSynthesis.onvoiceschanged=loadV;}
function speak(t){if(!("speechSynthesis"in window)){alert("Audio not supported in this browser");return;}const L=S.lang==="ja"?"ja-JP":"ko-KR";
 const u=new SpeechSynthesisUtterance(t.replace(/…/g,""));u.lang=L;u.rate=.85;const v=voices.find(v=>v.lang.replace("_","-")===L)||voices.find(v=>v.lang.startsWith(S.lang));
 if(v)u.voice=v;speechSynthesis.cancel();speechSynthesis.speak(u);}
const weak=()=>items().filter(i=>{const s=S.srs[i.id];return s&&s.wrong>0&&s.wrong>=s.right/2}).sort((a,b)=>S.srs[b.id].wrong-S.srs[a.id].wrong);
function home(){const w=weak().length;app.innerHTML=`<h2>Topics</h2>`+Object.entries(TOPICS).map(([k,v])=>{const its=items(k),l=its.filter(i=>(S.srs[i.id]||{}).box>=2).length;return`<button class="btn" data-t="${k}">${v} <span class="small">· ${l}/${its.length} learned</span></button>`}).join("")+
 `<button class="btn" data-t="">🌐 All topics mixed</button>`+(w?`<button class="btn" data-weak>💪 Weak items (${w})</button>`:"")+`<p class="small">Tip: tap 🔊 to hear it. Progress saves on this device.</p>`;
 app.querySelectorAll("[data-t]").forEach(b=>b.onclick=()=>menu(b.dataset.t));const wb=app.querySelector("[data-weak]");if(wb)wb.onclick=()=>menu(null,true);}
function menu(t,isWeak){const pool=()=>isWeak?weak():items(t||null);const name=isWeak?"Weak items":t?TOPICS[t]:"All topics";
 app.innerHTML=`<h2>${name}</h2><button class="btn pri" id="f">🃏 Flashcards (spaced review)</button><button class="btn pri" id="m">✅ Multiple choice</button><button class="btn pri" id="y">⌨️ Type the answer</button><button class="btn" id="l">📖 Browse list</button><button class="btn" id="b">← Back</button>`;
 $("#f").onclick=()=>flash(pool());$("#m").onclick=()=>quiz(pool(),"mc");$("#y").onclick=()=>quiz(pool(),"type");$("#l").onclick=()=>list(pool());$("#b").onclick=home;}
function cardHTML(i,show){return`<div class="card"><div class="nat">${esc(i.nat)}</div><button class="spk" data-say>🔊</button>${show?`<div class="rom">${esc(i.rom)}</div><div class="en">${esc(i.en)}</div><div class="note">${esc(i.note)}</div>`:""}</div>`;}
function bindSay(i){app.querySelectorAll("[data-say]").forEach(b=>b.onclick=()=>speak(i.nat));}
function list(p){app.innerHTML=p.map(i=>cardHTML(i,1)).join("")+`<button class="btn" id="b">← Home</button>`;app.querySelectorAll("[data-say]").forEach((b,k)=>b.onclick=()=>speak(p[k].nat));$("#b").onclick=home;}
function flash(p){const now=Date.now();let q=p.filter(i=>st(i.id).due<=now).sort((a,b)=>st(a.id).box-st(b.id).box).slice(0,15);save();
 if(!q.length){app.innerHTML=`<div class="card"><h2>🎉 All caught up!</h2><p>Nothing due here. Try a quiz.</p></div><button class="btn" id="b">← Home</button>`;$("#b").onclick=home;return;}
 let n=0;const show=(rev)=>{const i=q[n];app.innerHTML=`<p class="small">${n+1}/${q.length} · box ${st(i.id).box}</p>`+cardHTML(i,rev)+(rev?`<div class="row"><button class="btn bad" id="no">Again</button><button class="btn ok" id="yes">Got it</button></div>`:`<button class="btn pri" id="rv">Show answer</button>`)+`<button class="btn" id="b">← Home</button>`;
  bindSay(i);$("#b").onclick=home;if(!rev){$("#rv").onclick=()=>show(1);speak(i.nat);}else{const nx=ok=>{grade(i,ok);if(!ok)q.push(i);n++;n<q.length?show(0):flash(p)};$("#no").onclick=()=>nx(0);$("#yes").onclick=()=>nx(1);}};show(0);}
const norm=s=>s.normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase().replace(/ou/g,"o").replace(/oo/g,"o").replace(/uu/g,"u").replace(/[^a-z]/g,"");
function accepts(i,ans){const a=norm(ans);if(!a)return false;return i.rom.split("/").map(norm).some(r=>r===a)||ans.trim()===i.nat.replace(/[?？!！]/g,"")||ans.trim()===i.nat;}
function quiz(p,mode){if(p.length<2){alert("Not enough items yet");return;}const q=shuffle(p).slice(0,10);let n=0,score=0;
 const next=()=>{if(n>=q.length){addXP(score*2);app.innerHTML=`<div class="card"><h2>Score ${score}/${q.length}</h2><p>+${score*2} bonus XP</p></div><button class="btn pri" id="a">Again</button><button class="btn" id="b">← Home</button>`;$("#a").onclick=()=>quiz(p,mode);$("#b").onclick=home;return;}
  const i=q[n],hdr=`<p class="small">${n+1}/${q.length}</p>`;
  if(mode==="mc"){const rev=Math.random()<.5;const opts=shuffle([i,...shuffle(items().filter(x=>x.en!==i.en)).slice(0,3)]);
   app.innerHTML=hdr+(rev?`<div class="card"><div class="en">${esc(i.en)}</div></div>`:cardHTML(i,0))+opts.map((o,k)=>`<button class="btn" data-k="${k}">${rev?esc(o.nat)+` <span class="small">${esc(o.rom)}</span>`:esc(o.en)}</button>`).join("");bindSay(i);
   app.querySelectorAll("[data-k]").forEach(b=>b.onclick=()=>{const ok=opts[+b.dataset.k]===i;b.classList.add(ok?"ok":"bad");app.querySelectorAll("[data-k]").forEach(x=>{if(opts[+x.dataset.k]===i)x.classList.add("ok");x.onclick=null});done(i,ok);});}
  else{app.innerHTML=hdr+`<div class="card"><div class="en">${esc(i.en)}</div><div class="note">Type it in romaji/romanization</div></div><input id="in" autocomplete="off" autocapitalize="off" spellcheck="false"><button class="btn pri" id="go">Check</button>`;
   const inp=$("#in");inp.focus();const chk=()=>{const ok=accepts(i,inp.value);app.insertAdjacentHTML("beforeend",cardHTML(i,1));bindSay(i);$("#go").remove();inp.disabled=true;inp.style.borderColor=ok?"#58cc02":"#ea2b2b";done(i,ok);};
   $("#go").onclick=chk;inp.onkeydown=e=>{if(e.key==="Enter")chk()};}};
 const done=(i,ok)=>{grade(i,ok);if(ok)score++;speak(i.nat);app.insertAdjacentHTML("beforeend",`<p style="text-align:center;font-size:22px">${ok?"✅ Correct!":"❌ "+esc(i.rom)}</p><button class="btn pri" id="nx">Continue</button>`);$("#nx").onclick=()=>{n++;next()};};next();}
document.querySelectorAll("#langs button").forEach(b=>b.onclick=()=>{S.lang=b.dataset.l;save();stats();home();});
stats();home();
