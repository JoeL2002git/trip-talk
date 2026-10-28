import json
def verbs(f):
  V=[]
  for ln in open(f):
    ln=ln.rstrip('\n');t=ln.startswith('*');x=ln.lstrip('*').split('|');assert len(x)==11,x[0]
    sp=lambda s:s.split(';') if s else None
    V.append({"d":x[0],"r":x[1],"en":x[2],"irr":x[3],"f":dict(zip("abcde",[sp(s) for s in x[4:9]])),"ex":x[9].split(';'),"pr":x[10],"trip":t})
  return V
def words(f,ja):
  C=[]
  for ln in open(f):
    ln=ln.rstrip('\n')
    if not ln:continue
    if ln[0]=='@':k,n=ln[1:].split(' ',1);C.append({"k":k,"n":n,"w":[]});continue
    t=ln.startswith('*');x=ln.lstrip('*').split('|')
    if ja:assert len(x)==6,x;nat,kana,rom,en,pr,note=x
    else:assert len(x)==5,x;nat,rom,en,pr,note=x;kana=""
    C[-1]["w"].append({"nat":nat,"kana":kana if kana!=nat else "","rom":rom,"en":en,"pr":pr,"note":note,"trip":t})
  return C
open('verbs.js','w').write('const VFORMS={ko:["Present (-아요/어요)","Past (-았어요/었어요)","Future (-을 거예요)","Want to (-고 싶어요)","Please (-아/어 주세요)"],ja:["Polite (〜ます)","Past (〜ました)","Negative (〜ません)","Want to (〜たいです)","Please (〜てください)"]};\nconst VERBS='+json.dumps({"ko":verbs('src/koverbs.txt'),"ja":verbs('src/javerbs.txt')},ensure_ascii=False)+';\n')
W={"ko":words('src/kowords.txt',0),"ja":words('src/jawords.txt',1)}
open('words.js','w').write('const WORDS='+json.dumps(W,ensure_ascii=False)+';\n')
for l in W:print(l,[(c["k"],len(c["w"]),sum(w["trip"] for w in c["w"])) for c in W[l]],sum(len(c["w"]) for c in W[l]))
