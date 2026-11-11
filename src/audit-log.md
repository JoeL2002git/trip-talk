# Dictionary audit log (2026-11-02)

## Scope
- jawords.txt: 147 entries. Kanji→kana readings were batch-checked against the Jisho API (JMdict). 143 matched. The other 4 (ATM, お箸, 牛カツ, 黒たまご) aren't in JMdict as headwords; I checked them by hand and they're correct.
- javerbs.txt: 34 verbs. The dictionary-form readings were checked against Jisho, and all match. I checked every conjugation (ます/ました/ません/たいです/てください) by hand against the standard rules.
- kowords.txt (143), koverbs.txt (55 verbs, all 5 forms), ko.txt (137 phrases), ja.txt (134 phrases) and situations.js (18 scenes, ~85 staff lines plus ~255 reply options): checked by hand for script, Revised Romanization or Hepburn, meaning and politeness.
- Total: 379 dictionary items (words and verbs) plus 271 phrases, and the situation lines.

## Fixes
| File | Old | New | Source / reason |
|---|---|---|---|
| kowords.txt | PC방 `pissibang` | `pisibang` | Standard spelling is 피시방 (Naver/NIKL). In Revised Romanization ㅅ is `s`, and nothing here doubles it. |
| koverbs.txt (갈아타다 example) | 서울역에서 `seouryeogeseo` | `seoullyeogeseo` | Standard pronunciation is [서울력] (ㄴ insertion, then ㄹ assimilation: 표준 발음법 제29항, 제20항). Revised Romanization follows the pronunciation, and the official romanization is "Seoullyeok". |
| ko.txt / levels.js | 한국말 `hangukmal` | `hangungmal` | Pronounced [한궁말] by nasalization (표준 발음법 제18항). Revised Romanization reflects nasalization. |
| ja.txt / levels.js | ご試着されますか `go-shichaku saremasu ka` | ご試着なさいますか `go-shichaku nasaimasu ka` | Politeness: ご〜する is the humble pattern, so adding される to it makes a mismatched honorific. The standard respectful form is ご〜なさる (文化庁「敬語の指針」). |
| situations.js (ko hotel) | 예약했어요 `yeyakhaesseoyo` | `yeyakaesseoyo` | Revised Romanization reflects aspiration (ㄱ+ㅎ→ㅋ) in verbs. This also matches koverbs 예약하다. |
| situations.js (ko PC bang) | 이천 원이요 `icheon wonieyo` | `icheon woniyo` | The romanization didn't match the hangul (원이요 = woniyo). |

## Notes updated (official sources)
- jawords タクシー: "Late night (10 PM-5 AM) fares are about 20% higher (Tokyo Taxi Center)." Source: tokyo-tc.or.jp/en, "20% increase from 10pm to 5am".
- jawords 自由席: "non-reserved seats only in cars 1-2, none during Golden Week, Obon and New Year peaks (JR Central)". Source: global.jr-central.co.jp/en/news/_pdf/2025/0002.pdf.
- kowords 한복: "Wearing a full hanbok (top plus skirt or trousers) gets you free entry to Seoul's royal palaces." Source: royal.khs.go.kr/ENG/contents/E701000000.do.

## Uncertain (not changed)
- ja onsen scene: タトゥーはございますか. Front desks do say this, but ございます refers to the guest's own thing, so strictly おありですか would be more correct. Left as is because it's common real-world usage.
- ja.txt お仕事は何をされていますか: some guides frown on される as an honorific, but it's widely accepted. Left as is.
- kowords 택스 리펀드: signs vary (택스리펀/텍스리펀드), and there's no single standard spelling. Left as is.
- ko phrases with ㄴ insertion across words (e.g. 다음 역 [다음녁]) are romanized word by word. That's acceptable in Revised Romanization; left as is.
- Korean entries weren't machine-checked against Naver, because Naver's dictionary API needs session headers. They were checked by hand instead.

# Mandarin Chinese added (2026-11-10)

## Scope
- New sources: src/zh.txt (170 phrases: 105 beginner, 41 intermediate, 24 advanced), src/zhverbs.txt (24 verbs), src/zhwords.txt (63 words), src/zhsit.txt (5 scenes, 21 turns). Built into zh.js by src/build_zh.py.
- Script and style: simplified characters, Hanyu Pinyin with tone marks, polite forms (请, 您, 谢谢) where natural.
- Machine check: all 460 character/pinyin pairs were run through pypinyin. No syllable mismatches. The remaining differences are deliberate:
  - Neutral tones written unmarked (谢谢 xièxie, 朋友 péngyou, 什么 shénme, 个 ge).
  - 一 and 不 written with their spoken tone change (一下 yíxià, 一点 yìdiǎn, 不客气 bú kèqi), as in most learner textbooks.
  - Erhua spelled as spoken (哪儿 nǎr, 这儿 zhèr).
  - Two pypinyin misreads kept as written: 多长 duō cháng (pypinyin said zhǎng), 肚子 dùzi "belly" (pypinyin said dǔzi, which means tripe), 干烹鸡 gān (dry), not gàn.
- Pronunciation guides were written by hand in the same English sound-it-out style as ja/ko (q = "ch", x = "sh", zh = "j", c = "ts", z = "dz", -i after zh/ch/sh/r = "rr").

## Uncertain (flagged, not guessed)
- 炒码面 for Korean 짬뽕 (jjamppong): Korean-Chinese restaurants use this name, but there's no exact mainland equivalent. The note says so, and suggests 海鲜面 as the nearest mainland dish (usually not spicy).
- 炸酱面 note: "Incheon Chinatown is called its Korean birthplace" reflects the usual claim (Gonghwachun / Jjajangmyeon Museum). It wasn't checked against an official source this run.
- 仁川中华街 as the Chinese name of Incheon Chinatown: widely used, but signs may also say 唐人街. Not checked on an official site.
- 创可贴 is written chuāngkětiē (创 = wound). Some speakers say chuàng.
- Korean-Chinese vs mainland food: the app flags the differences in notes. Staff at Incheon Chinatown restaurants mostly speak Korean, so the Korean names (짜장면, 탕수육, 짬뽕) are the ones to order with. The Chinese is for reading signs and chatting.
- Prices in the scenes use 块/yuan. Korea and Japan use won and yen, so these are generic practice amounts.
- Pinyin typing accepts "v" for ü and ignores tone marks. That's forgiving, but it means tones aren't graded.
