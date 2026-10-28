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
const LV=()=>S.level==="int"||S.level==="adv"?S.level:"beg";
const LVN={beg:"Beginner",int:"Intermediate",adv:"Advanced"};
const items=(topic)=>{const lv=LV();return(topic?[topic]:Object.keys(TOPICS)).flatMap(t=>lv==="beg"?DATA[S.lang][t].map((a,i)=>({id:`${S.lang}:${t}:${i}`,nat:a[0],rom:a[1],en:a[2],note:a[3],pr:(PRON[S.lang]||{})[a[0]]||"",t})):
 ((LEVELS[S.lang][lv]||{})[t]||[]).map((a,i)=>({id:`${S.lang}:${lv}:${t}:${i}`,nat:a[0],rom:a[1],en:a[2],note:a[3],pr:a[4],t,listen:lv==="adv"||a[3].startsWith("🎧")})));};
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
 <div class="lvl" role="tablist" aria-label="Level">${Object.entries(LVN).map(([k,v])=>`<button role="tab" data-lv="${k}" class="${LV()===k?"on":""}">${v}</button>`).join("")}</div>
 <div class="grid">`+Object.entries(TOPICS).map(([k,v])=>{const its=items(k),l=its.filter(i=>(S.srs[i.id]||{}).box>=2).length;
 return`<button class="tile" data-t="${k}">${ring(l/its.length)}<span class="em">${EMOJI[k]}</span><span><div class="nm">${v}</div><div class="ct">${l}/${its.length} learned</div></span></button>`}).join("")+
 `<button class="tile wide sit" id="vb"><span class="em">🔤</span><span><div class="nm">Verbs</div><div class="ct">Conjugations, flashcards & quiz</div></span></button><button class="tile wide sit" id="wb"><span class="em">📚</span><span><div class="nm">Words</div><div class="ct">Travel nouns by category · ✈️ My trip</div></span></button><button class="tile wide sit" id="sit"><span class="em">🎭</span><span><div class="nm">Situations</div><div class="ct">Role-play: restaurant, taxi, hotel…</div></span></button><button class="tile wide" data-t=""><span class="em">🎲</span><span><div class="nm">All topics mixed</div><div class="ct">${all.length} phrases</div></span></button>`+
 (w?`<button class="tile wide" data-weak><span class="em">💪</span><span><div class="nm">Weak items</div><div class="ct">${w} to strengthen</div></span></button>`:"")+
 `</div><p class="tip">Tap 🔊 to hear phrases · progress saves on this device · works offline</p>`);
 app.querySelectorAll("[data-lv]").forEach(b=>b.onclick=()=>{S.level=b.dataset.lv;save();home();});app.querySelectorAll("[data-t]").forEach(b=>b.onclick=()=>menu(b.dataset.t));$("#sit").onclick=sits;$("#vb").onclick=verbs;$("#wb").onclick=()=>words();const wb=app.querySelector("[data-weak]");if(wb)wb.onclick=()=>menu(null,true);}
function menu(t,isWeak){const pool=()=>isWeak?weak():items(t||null);const name=(isWeak?"Weak items":t?TOPICS[t]:"All topics")+` · ${LVN[LV()]}`;const em=isWeak?"💪":t?EMOJI[t]:"🎲";
 view(`<h2>${em} ${name}</h2><p class="sub">${pool().length} phrases</p>
 <button class="btn pri mode" id="f"><span class="ic">🃏</span><span>Flashcards<small>Spaced review of what's due</small></span></button>
 <button class="btn mode" id="m"><span class="ic">✅</span><span>Multiple choice<small>10 quick questions</small></span></button>
 <button class="btn mode" id="y"><span class="ic">⌨️</span><span>Type the answer<small>Romanization, forgiving spelling</small></span></button>
 <button class="btn mode" id="l"><span class="ic">📖</span><span>Browse all phrases<small>With notes and audio</small></span></button>
 <button class="btn ghost" id="b">← Back to topics</button>`);
 $("#f").onclick=()=>flash_(pool());$("#m").onclick=()=>quiz(pool(),"mc");$("#y").onclick=()=>quiz(pool(),"type");$("#l").onclick=()=>list(pool());$("#b").onclick=home;}
const natCls=s=>s.length>12?"nat s":"nat";
const showNat=()=>S.showNat!==false;
function phr(i){const nat=showNat()?`<div class="${natCls(i.nat)}${S.easy?" sm":""}">${esc(i.nat)}</div>`:"";const big=S.easy||!showNat();
 const rom=`<div class="rom${big?" big":""}">${esc(i.rom)}</div>`,pr=i.pr?`<div class="pr">🗣️ ${esc(i.pr)}</div>`:"";return S.easy?rom+pr+nat:nat+rom+pr;}
function cardHTML(i,show){return`<div class="card">${phr(i)}<button class="spk" data-say aria-label="Play audio">🔊</button>${show?`<div class="en">${esc(i.en)}</div><div class="note">${esc(i.note)}</div>`:""}</div>`;}
function bindSay(i){app.querySelectorAll("[data-say]").forEach(b=>b.onclick=e=>{e.stopPropagation();speak(i.nat)});}
const lhead=(n,t)=>`<div class="lhead"><button class="x" id="b" aria-label="Close">✕</button><div class="bar"><i style="width:${n/t*100}%"></i></div></div>`;
function list(p){view(`<h2>📖 Phrases</h2>`+p.map((i,k)=>`<div class="card listc"><div class="r"><div>${phr(i)}</div><button class="spk" data-k="${k}">🔊</button></div><div class="en">${esc(i.en)}</div>${i.note?`<div class="note">${esc(i.note)}</div>`:""}</div>`).join("")+`<button class="btn ghost" id="b">← Back to topics</button>`);
 app.querySelectorAll("[data-k]").forEach(b=>b.onclick=()=>speak(p[+b.dataset.k].nat));$("#b").onclick=home;}
function done_(title,sub){confetti(40);buzz([30,40,30]);view(`<div class="card result"><div class="big">🎉</div><h2>${title}</h2><p class="hint">${sub}</p></div><button class="btn pri" id="b">Back to topics</button>`);$("#b").onclick=home;}
function flash_(p){const now=Date.now();let q=p.filter(i=>st(i.id).due<=now).sort((a,b)=>st(a.id).box-st(b.id).box).slice(0,15);save();
 if(!q.length){view(`<div class="card result"><div class="big">✨</div><h2>All caught up!</h2><p class="hint">Nothing due here. Try a quiz.</p></div><button class="btn pri" id="b">Back to topics</button>`);$("#b").onclick=home;return;}
 let n=0,tot=q.length;const show=()=>{const i=q[n];
  view(lhead(n,tot)+`<div class="flip" id="fl"><div class="in"><div class="face card">${phr(i)}<button class="spk" data-say>🔊</button><div class="hint">Tap card to flip</div></div>
  <div class="face back card">${phr(i)}<div class="en">${esc(i.en)}</div><div class="note">${esc(i.note)}</div><button class="spk" data-say>🔊</button></div></div></div>
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
  if(mode==="mc"){const rev=Math.random()<.5,lis=!rev&&i.listen&&Math.random()<.6;const opts=shuffle([i,...shuffle(items().filter(x=>x.en!==i.en)).slice(0,3)]);
   view(hdr+`<p class="hint">${rev?"How do you say…":"What does this mean?"}</p>`+(rev?`<div class="card"><div class="en">${esc(i.en)}</div></div>`:lis?`<div class="card listen"><button class="spk big" data-say aria-label="Play audio">🔊</button><div class="hint">🎧 Listen and pick the meaning</div><button class="btn ghost" id="st">Show text</button><div id="lt" hidden>${phr(i)}</div></div>`:cardHTML(i,0))+opts.map((o,k)=>`<button class="btn opt" data-k="${k}">${rev?`<span class="optp">${showNat()&&!S.easy?`<span class="on">${esc(o.nat)}</span>`:""}<b class="orom">${esc(o.rom)}</b>${S.easy&&showNat()?`<span class="on sm">${esc(o.nat)}</span>`:""}${o.pr?`<span class="opr">🗣️ ${esc(o.pr)}</span>`:""}</span>`:esc(o.en)}</button>`).join(""));bindSay(i);if(!rev)speak(i.nat);const stb=$("#st");if(stb)stb.onclick=()=>{$("#lt").hidden=false;stb.remove();};
   app.querySelectorAll("[data-k]").forEach(b=>b.onclick=()=>{const ok=opts[+b.dataset.k]===i;b.classList.add(ok?"ok":"bad");app.querySelectorAll("[data-k]").forEach(x=>{if(opts[+x.dataset.k]===i)x.classList.add("ok");x.onclick=null});done(i,ok);});}
  else{view(hdr+`<p class="hint">Type it in romanization (English letters)</p><div class="card"><div class="en">${esc(i.en)}</div></div><input id="in" autocomplete="off" autocapitalize="off" spellcheck="false" placeholder="${S.lang==="ja"?"e.g. arigato gozaimasu":"e.g. annyeonghaseyo"}"><p class="hint tiny">Spelling is forgiving: spaces, accents (ō) and long vowels don't matter. Native script works too.</p><button class="btn pri" id="go">Check</button>`);
   const inp=$("#in");inp.focus();const chk=()=>{if($("#go").disabled)return;$("#go").disabled=true;const ok=accepts(i,inp.value);inp.disabled=true;inp.style.borderColor=ok?"var(--ok)":"var(--bad)";done(i,ok);};
   $("#go").onclick=chk;inp.onkeydown=e=>{if(e.key==="Enter")chk()};}};
 const done=(i,ok)=>{grade(i,ok);feedback(ok);if(ok)score++;speak(i.nat);
  app.querySelector(".view").insertAdjacentHTML("beforeend",`<div style="height:190px"></div><div class="fb ${ok?"ok":"bad"}"><h3>${ok?"✓ Nice!":"✗ Not quite"}</h3><div class="fbp">${phr(i)}</div><div class="hint">${esc(i.en)}</div><button class="btn pri" id="nx">Continue</button></div>`);
  $("#nx").onclick=()=>{n++;next()};};next();}
document.querySelectorAll("#langs button").forEach(b=>b.onclick=()=>{S.lang=b.dataset.l;save();stats();home();});
stats();home();

function trip(){if(!S.trip)return"";const d=Math.ceil((new Date(S.trip+"T00:00:00")-new Date(today()+"T00:00:00"))/864e5);return d>0?` · trip in ${d} day${d==1?"":"s"}`:d==0?" · trip starts today! ✈️":"";}
function sheet(first){const m=document.createElement("div");m.className="modal";m.innerHTML=`<div class="mbox" role="dialog" aria-modal="true"><div class="wave">👋</div><h2>${first?"Welcome to TripTalk!":"Settings"}</h2><label>What should we call you?<input id="nm" maxlength="30" autocomplete="given-name" placeholder="Your name" value="${esc(S.name||"")}"></label>${first?"":`<label>Trip date (optional)<input id="td" type="date" value="${S.trip||""}"></label><label class="chk"><input type="checkbox" id="sn" ${showNat()?"checked":""}> Show native script</label><label class="chk"><input type="checkbox" id="ez" ${S.easy?"checked":""}> Easy mode <small>(romanization first, extra large)</small></label>`}<button class="btn pri" id="sv">${first?"Let's go":"Save"}</button><button class="btn ghost" id="sk">${first?"Skip":"Cancel"}</button></div>`;document.body.appendChild(m);const nm=m.querySelector("#nm");setTimeout(()=>nm.focus(),50);
const close=()=>{m.remove();home();};
m.querySelector("#sv").onclick=()=>{S.name=nm.value.trim();const td=m.querySelector("#td");if(td){S.trip=td.value;S.showNat=m.querySelector("#sn").checked;S.easy=m.querySelector("#ez").checked;}save();close();};
nm.onkeydown=e=>{if(e.key==="Enter")m.querySelector("#sv").click();};
m.querySelector("#sk").onclick=()=>{if(S.name===undefined)S.name="";save();close();};}
document.addEventListener("click",e=>{if(e.target.closest("#set,#hi"))sheet(false);});
if(S.name===undefined)setTimeout(()=>sheet(true),300);
app.addEventListener("click",e=>{if(e.target.closest(".lhead .x"))home();});

const sitDone=()=>S.sitDone||(S.sitDone={});
function sits(){const L=SIT[S.lang];view(`<h2>🎭 Situations</h2><p class="sub">Hear the line, then pick (or type) the right reply.</p>`+L.map((c,k)=>`<button class="btn mode" data-c="${k}"><span class="ic">${c.em}</span><span>${c.t}${c.trip?" ✈️":""}<small>${c.steps.length} turns${sitDone()[S.lang+":"+c.id]?" · ✓ done":""}</small></span></button>`).join("")+`<button class="btn ghost" id="b">← Back to topics</button>`);
 app.querySelectorAll("[data-c]").forEach(b=>b.onclick=()=>scene(L[+b.dataset.c]));$("#b").onclick=home;}
function scene(c){let n=0,score=0,log="";const rp=r=>({nat:r[0],rom:r[1],en:r[2],pr:r[3]});
 const step=()=>{if(n>=c.steps.length){addXP(score*3);sitDone()[S.lang+":"+c.id]=1;save();return done_(`${c.em} ${score} / ${c.steps.length}`,`${c.t} complete · +${score*3} XP`);}
  const st_=c.steps[n],ok=rp(st_.o[0]),opts=shuffle(st_.o.map(rp));
  view(lhead(n,c.steps.length)+`<h2>${c.em} ${c.t}</h2>${log}<div class="bub staff"><button class="spk" id="ss" aria-label="Play">🔊</button><div>${showNat()?`<div class="bn">${esc(st_.s[0])}</div>`:""}<div class="br">${esc(st_.s[1])}</div><div class="be">${esc(st_.s[2])}</div></div></div>
  <p class="hint">Your reply:</p><div id="ops">`+opts.map((o,k)=>`<button class="btn opt" data-k="${k}"><span class="optp">${showNat()?`<span class="on">${esc(o.nat)}</span>`:""}<b class="orom">${esc(o.rom)}</b><span class="opr">🗣️ ${esc(o.pr)}</span></span></button>`).join("")+`</div><button class="btn ghost" id="ty">⌨️ Type it instead</button>`);
  const say=()=>speak(st_.s[0]);$("#ss").onclick=say;say();
  const fin=good=>{if(good)score++;feedback(good);speak(ok.nat);log+=`<div class="bub staff sm">${esc(st_.s[S.easy||!showNat()?1:0])}</div><div class="bub me sm">${esc(S.easy||!showNat()?ok.rom:ok.nat)}</div>`;
   app.querySelector(".view").insertAdjacentHTML("beforeend",`<div style="height:190px"></div><div class="fb ${good?"ok":"bad"}"><h3>${good?"✓ Nice!":"✗ Better reply:"}</h3><div class="fbp">${phr(ok)}</div><div class="hint">${esc(ok.en)}</div><button class="btn pri" id="nx">Continue</button></div>`);$("#nx").onclick=()=>{n++;step();};};
  app.querySelectorAll("[data-k]").forEach(b=>b.onclick=()=>{const g=opts[+b.dataset.k]===opts.find(o=>o.nat===ok.nat);app.querySelectorAll("[data-k]").forEach(x=>{if(opts[+x.dataset.k].nat===ok.nat)x.classList.add("ok");x.onclick=null});if(!g)b.classList.add("bad");$("#ty").remove();fin(g);});
  $("#ty").onclick=()=>{$("#ops").innerHTML=`<div class="card"><div class="en">${esc(ok.en)}</div></div><input id="in" autocomplete="off" autocapitalize="off" spellcheck="false" placeholder="romanization or native script"><button class="btn pri" id="go">Check</button>`;$("#ty").remove();const inp=$("#in");inp.focus();
   const chk=()=>{if($("#go").disabled)return;$("#go").disabled=true;inp.disabled=true;const g=accepts(ok,inp.value)||(ok.rom.includes("___")&&inp.value.trim().length>0);inp.style.borderColor=g?"var(--ok)":"var(--bad)";fin(g);};$("#go").onclick=chk;inp.onkeydown=e=>{if(e.key==="Enter")chk()};};};step();}
// ---- Verbs ----
const VL=()=>VERBS[S.lang]||[];const FK=["a","b","c","d","e"];
const vforms=v=>FK.map((k,j)=>v.f[k]?{j,nat:v.f[k][0],rom:v.f[k][1],lab:VFORMS[S.lang][j]}:null).filter(Boolean);
let vTrip=false;function verbs(){const VS=VL().map((v,k)=>[v,k]).filter(([v])=>!vTrip||v.trip);view(`<h2>🔤 Verbs</h2><p class="sub">${VL().length} common verbs · tap one for all its forms</p><div class="chips"><button class="chip${vTrip?"":" on"}" id="va">All</button><button class="chip${vTrip?" on":""}" id="vt">✈️ My trip</button></div><div class="row"><button class="btn pri" id="vf">🃏 Flashcards</button><button class="btn pri" id="vq">❓ Quiz</button></div>`+VS.map(([v,k])=>`<button class="btn mode vrow" data-v="${k}"><span><b class="vn">${esc(v.d)}</b> <span class="orom">${esc(v.r)}</span><small>${esc(v.en)}${/irregular|drop/i.test(v.irr)?" · ⚠️ irregular":""}${v.trip?" · ✈️":""}</small></span></button>`).join("")+`<button class="btn ghost" id="b">← Back to topics</button>`);
 $("#b").onclick=home;$("#va").onclick=()=>{vTrip=false;verbs()};$("#vt").onclick=()=>{vTrip=true;verbs()};$("#vf").onclick=vflash;$("#vq").onclick=vquiz;app.querySelectorAll("[data-v]").forEach(b=>b.onclick=()=>vdetail(VL()[+b.dataset.v]));}
function vdetail(v){const fs=vforms(v);view(`<div class="card"><div class="${natCls(v.d)}">${esc(v.d)}</div><b class="orom">${esc(v.r)}</b><div class="opr">🗣️ ${esc(v.pr)}</div><div class="en">${esc(v.en)}</div>${v.irr?`<div class="note">${/irregular|drop/i.test(v.irr)?"⚠️ ":""}${esc(v.irr)}</div>`:""}<button class="spk" data-s="${esc(v.d)}">🔊</button></div>`+fs.map(f=>`<div class="card listc vform"><div class="r"><div><small class="hint">${esc(f.lab)}</small><div class="vn">${esc(f.nat)}</div><b class="orom">${esc(f.rom)}</b></div><button class="spk" data-s="${esc(f.nat)}">🔊</button></div></div>`).join("")+`<div class="card listc"><small class="hint">Example</small><div class="r"><div><div class="vn">${esc(v.ex[0])}</div><b class="orom">${esc(v.ex[1])}</b><div class="en">${esc(v.ex[2])}</div></div><button class="spk" data-s="${esc(v.ex[0])}">🔊</button></div></div><button class="btn ghost" id="b">← All verbs</button>`);
 app.querySelectorAll("[data-s]").forEach(b=>b.onclick=()=>speak(b.dataset.s));$("#b").onclick=verbs;speak(v.d);}
const vpairs=()=>VL().filter(v=>!vTrip||v.trip).flatMap(v=>vforms(v).map(f=>({v,f})));
function vflash(){const q=shuffle(vpairs()).slice(0,12);let n=0;const show=()=>{if(n>=q.length){addXP(q.length);return done_("Verb cards done!",`+${q.length} XP`);}const {v,f}=q[n];
 view(lhead(n,q.length)+`<div class="card" id="vc"><small class="hint">${esc(f.lab)} of</small><div class="${natCls(v.d)}">${esc(v.d)}</div><b class="orom">${esc(v.r)}</b><div class="en">${esc(v.en)}</div><div id="ans" hidden><hr><div class="vn">${esc(f.nat)}</div><b class="orom">${esc(f.rom)}</b>${v.irr?`<div class="note">${esc(v.irr)}</div>`:""}</div></div><button class="btn pri" id="rv">Show answer</button>`);$("#b").onclick=verbs;
 $("#rv").onclick=()=>{if($("#ans").hidden){$("#ans").hidden=false;speak(f.nat);$("#rv").textContent="Next →";}else{n++;show();}};};show();}
function vquiz(){const all=vpairs();const q=shuffle(all).slice(0,10);let n=0,score=0;const next=()=>{if(n>=q.length){addXP(score*2);return done_(`${score} / ${q.length}`,`Verb quiz · +${score*2} XP`);}
 const {v,f}=q[n];const wrong=new Set();vforms(v).forEach(x=>x.nat!==f.nat&&wrong.add(x.nat+"|"+x.rom));shuffle(all).forEach(x=>{if(wrong.size<8&&x.f.j===f.j&&x.f.nat!==f.nat)wrong.add(x.f.nat+"|"+x.f.rom)});
 const opts=shuffle([f.nat+"|"+f.rom,...shuffle([...wrong]).slice(0,3)]);
 view(lhead(n,q.length)+`<p class="hint">${esc(f.lab)} of…</p><div class="card"><div class="${natCls(v.d)}">${esc(v.d)}</div><b class="orom">${esc(v.r)}</b><div class="en">${esc(v.en)}</div></div>`+opts.map((o,k)=>{const[a,r]=o.split("|");return`<button class="btn opt" data-k="${k}"><span class="optp"><span class="on">${esc(a)}</span><b class="orom">${esc(r)}</b></span></button>`}).join("")+`<div id="nx"></div>`);$("#b").onclick=verbs;
 app.querySelectorAll(".opt").forEach(b=>b.onclick=()=>{if(app.querySelector(".opt.ok"))return;const ok=opts[+b.dataset.k].split("|")[0]===f.nat;app.querySelectorAll(".opt").forEach(x=>{if(opts[+x.dataset.k].split("|")[0]===f.nat)x.classList.add("ok");x.disabled=true});if(!ok)b.classList.add("bad");else score++;feedback(ok);speak(f.nat);
  $("#nx").innerHTML=`${v.irr?`<div class="note">${esc(v.irr)}</div>`:""}<button class="btn pri" id="nb">Next →</button>`;$("#nb").onclick=()=>{n++;next();};});};next();}
// ---- Words ----
const WC=()=>(WORDS[S.lang]||[]);const wall=()=>WC().flatMap(c=>c.w.map(w=>({...w,c:c.k})));
const wsay=w=>w.kana||w.nat;
function wordHTML(w,k){return`<div class="card listc"><div class="r"><div><div class="vn">${esc(w.nat)}${w.trip?" <small>✈️</small>":""}</div>${w.kana?`<div class="hint">${esc(w.kana)}</div>`:""}<b class="orom">${esc(w.rom)}</b><div class="opr">🗣️ ${esc(w.pr)}</div><div class="en">${esc(w.en)}</div>${w.note?`<div class="note">${esc(w.note)}</div>`:""}</div><button class="spk" data-w="${k}">🔊</button></div></div>`;}
function words(cat){const trip=cat==="trip";const L=cat?wall().filter(w=>trip?w.trip:w.c===cat):[];
 view(`<h2>📚 Words</h2><p class="sub">${wall().length} travel nouns · ${wall().filter(w=>w.trip).length} ✈️ for this trip</p><div class="row"><button class="btn pri" id="wf">🃏 Flashcards</button><button class="btn pri" id="wq">❓ Quiz</button></div><div class="chips"><button class="chip${trip?" on":""}" data-c="trip">✈️ My trip</button>`+WC().map(c=>`<button class="chip${cat===c.k?" on":""}" data-c="${c.k}">${esc(c.n)} <small>${c.w.length}</small></button>`).join("")+`</div>`+(cat?L.map(wordHTML).join(""):`<p class="hint">Pick a category above.</p>`)+`<button class="btn ghost" id="b">← Back to topics</button>`);
 $("#b").onclick=home;const pool=cat?L:wall();$("#wf").onclick=()=>wflash(pool);$("#wq").onclick=()=>wquiz(pool);
 app.querySelectorAll("[data-c]").forEach(b=>b.onclick=()=>words(b.dataset.c));app.querySelectorAll("[data-w]").forEach(b=>b.onclick=()=>speak(wsay(L[+b.dataset.w])));}
function wflash(p){const q=shuffle(p).slice(0,15);let n=0;const show=()=>{if(n>=q.length){addXP(q.length);return done_("Word cards done!",`+${q.length} XP`);}const w=q[n];
 view(lhead(n,q.length)+`<div class="card"><div class="en" style="font-size:1.4rem">${esc(w.en)}</div><div id="ans" hidden><hr><div class="${natCls(w.nat)}">${esc(w.nat)}</div>${w.kana?`<div class="hint">${esc(w.kana)}</div>`:""}<b class="orom">${esc(w.rom)}</b><div class="opr">🗣️ ${esc(w.pr)}</div>${w.note?`<div class="note">${esc(w.note)}</div>`:""}</div></div><button class="btn pri" id="rv">Show answer</button>`);$("#b").onclick=()=>words();
 $("#rv").onclick=()=>{if($("#ans").hidden){$("#ans").hidden=false;speak(wsay(w));$("#rv").textContent="Next →";}else{n++;show();}};};show();}
function wquiz(p){if(p.length<4)p=wall();const q=shuffle(p).slice(0,10);let n=0,score=0;const next=()=>{if(n>=q.length){addXP(score*2);return done_(`${score} / ${q.length}`,`Words quiz · +${score*2} XP`);}
 const w=q[n],rev=Math.random()<.5;const pool=wall().filter(x=>x.en!==w.en);const opts=shuffle([w,...shuffle(pool.filter(x=>x.c===w.c)).concat(shuffle(pool)).filter((x,i,a)=>a.findIndex(y=>y.en===x.en)===i).slice(0,3)]);
 view(lhead(n,q.length)+`<p class="hint">${rev?"How do you say…":"What does this mean?"}</p><div class="card">${rev?`<div class="en" style="font-size:1.4rem">${esc(w.en)}</div>`:`<div class="${natCls(w.nat)}">${esc(w.nat)}</div>${w.kana?`<div class="hint">${esc(w.kana)}</div>`:""}<b class="orom">${esc(w.rom)}</b><button class="spk" data-say>🔊</button>`}</div>`+opts.map((o,k)=>`<button class="btn opt" data-k="${k}">${rev?`<span class="optp"><span class="on">${esc(o.nat)}</span><b class="orom">${esc(o.rom)}</b></span>`:esc(o.en)}</button>`).join("")+`<div id="nx"></div>`);$("#b").onclick=()=>words();
 const sb=app.querySelector("[data-say]");if(sb){sb.onclick=()=>speak(wsay(w));speak(wsay(w));}
 app.querySelectorAll(".opt").forEach(b=>b.onclick=()=>{if(app.querySelector(".opt.ok"))return;const ok=opts[+b.dataset.k]===w;app.querySelectorAll(".opt").forEach(x=>{if(opts[+x.dataset.k]===w)x.classList.add("ok");x.disabled=true});if(!ok)b.classList.add("bad");else score++;feedback(ok);speak(wsay(w));
  $("#nx").innerHTML=`${w.note?`<div class="note">${esc(w.note)}</div>`:""}<button class="btn pri" id="nb">Next →</button>`;$("#nb").onclick=()=>{n++;next();};});};next();}
