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
