// Intermediate/advanced sets: [native, romanization, English, note, pronunciation]. 🎧 = phrase you will hear from staff/announcements.
const LEVELS={
"ko": {
"int": {
"greetings": [
[
"오랜만이에요",
"oraenmanieyo",
"It's been a while",
"Polite; for someone you've met before.",
"oh-ren-mah-nee-eh-yo"
],
[
"잘 지내셨어요?",
"jal jinaesyeosseoyo?",
"Have you been well?",
"Honorific -시- shows respect.",
"jahl jee-neh-shuh-ssuh-yo?"
],
[
"덕분에 잘 지냈어요",
"deokbune jal jinaesseoyo",
"I've been well, thanks to you",
"Warm standard reply.",
"duhk-boo-neh jahl jee-neh-ssuh-yo"
],
[
"수고하세요",
"sugohaseyo",
"Keep up the good work (leaving a shop)",
"Said to staff as you leave; not to bosses or elders.",
"soo-goh-hah-seh-yo"
],
[
"다음에 또 올게요",
"daeume tto olgeyo",
"I'll come again next time",
"Friendly when leaving a shop or restaurant.",
"dah-eu-meh ttoh ohl-keh-yo"
],
[
"좋은 하루 보내세요",
"joeun haru bonaeseyo",
"Have a nice day",
"Polite farewell.",
"joh-eun hah-roo boh-neh-seh-yo"
],
[
"도와주셔서 감사합니다",
"dowajusyeoseo gamsahamnida",
"Thank you for helping me",
"-아서/어서 gives the reason.",
"doh-wah-joo-shuh-suh gahm-sah-hahm-nee-dah"
],
[
"늦어서 죄송합니다",
"neujeoseo joesonghamnida",
"Sorry I'm late",
"Formal apology.",
"neu-juh-suh jweh-song-hahm-nee-dah"
]
],
"numbers": [
[
"커피 두 잔 주세요",
"keopi du jan juseyo",
"Two coffees, please",
"잔 = cups/glasses, with native numbers (한, 두, 세…).",
"kuh-pee doo jahn joo-seh-yo"
],
[
"사과 세 개 주세요",
"sagwa se gae juseyo",
"Three apples, please",
"개 = general counter for things.",
"sah-gwah seh geh joo-seh-yo"
],
[
"표 네 장 주세요",
"pyo ne jang juseyo",
"Four tickets, please",
"장 = flat things (tickets, paper).",
"pyo neh jahng joo-seh-yo"
],
[
"다섯 시 삼십 분에 만나요",
"daseot si samsip bune mannayo",
"Let's meet at 5:30",
"Hours use native numbers; minutes use Sino numbers.",
"dah-suht shee sahm-sheep boo-neh mahn-nah-yo"
],
[
"이만 오천 원이에요",
"iman ocheon wonieyo",
"It's 25,000 won",
"Money uses Sino numbers, grouped by 만 (10,000).",
"ee-mahn oh-chuhn wuh-nee-eh-yo"
],
[
"몇 분이세요?",
"myeot buniseyo?",
"How many people? (staff asks)",
"분 = honorific counter for people.",
"myuht boo-nee-seh-yo?"
],
[
"세 명이에요",
"se myeongieyo",
"There are three of us",
"명 = counter for people.",
"seh myung-ee-eh-yo"
],
[
"이틀 동안 있을 거예요",
"iteul dongan isseul geoyeyo",
"I'll stay for two days",
"-(으)ㄹ 거예요 = future plan.",
"ee-teul dong-ahn ee-sseul guh-yeh-yo"
],
[
"삼 번 출구",
"sam beon chulgu",
"Exit 3",
"번 + Sino number for numbered things.",
"sahm buhn chool-goo"
],
[
"맥주 두 병하고 소주 한 병 주세요",
"maekju du byeonghago soju han byeong juseyo",
"Two beers and one soju, please",
"병 = bottles; 하고 = and.",
"mek-joo doo byung-hah-goh soh-joo hahn byung joo-seh-yo"
]
],
"food": [
[
"여기서 제일 잘 나가는 메뉴가 뭐예요?",
"yeogiseo jeil jal naganeun menyuga mwoyeyo?",
"What's your most popular dish?",
"잘 나가다 = to sell well.",
"yuh-gee-suh jeh-eel jahl nah-gah-neun meh-nyoo-gah mwuh-yeh-yo?"
],
[
"땅콩 알레르기가 있는데, 이거 땅콩 들어가요?",
"ttangkong allereugiga inneunde, igeo ttangkong deureogayo?",
"I have a peanut allergy. Does this have peanuts in it?",
"-는데 sets up background info.",
"ttahng-kong ahl-leh-reu-gee-gah een-neun-deh, ee-guh ttahng-kong deu-ruh-gah-yo?"
],
[
"고수 빼 주세요",
"gosu ppae juseyo",
"No cilantro, please",
"빼다 = leave out.",
"goh-soo ppeh joo-seh-yo"
],
[
"이거 많이 매워요?",
"igeo mani maewoyo?",
"Is this very spicy?",
"Useful before ordering stews.",
"ee-guh mah-nee meh-wuh-yo?"
],
[
"1인분도 돼요?",
"irinbundo dwaeyo?",
"Can I order a single portion?",
"Some BBQ and stew places require 2+ portions (인분).",
"ee-reen-boon-doh dweh-yo?"
],
[
"아까 주문한 게 아직 안 나왔어요",
"akka jumunhan ge ajik an nawasseoyo",
"What I ordered earlier hasn't come out yet",
"Polite way to chase an order.",
"ahk-kah joo-moon-hahn geh ah-jeek ahn nah-wah-ssuh-yo"
],
[
"따로 계산할게요",
"ttaro gyesanhalgeyo",
"We'll pay separately",
"-ㄹ게요 = I'll (do it).",
"ttah-roh gyeh-sahn-hahl-keh-yo"
],
[
"남은 거 포장돼요?",
"nameun geo pojangdwaeyo?",
"Can I take the leftovers to go?",
"Usually fine except at buffets.",
"nah-meun guh poh-jahng-dweh-yo?"
],
[
"물은 셀프예요?",
"mureun selpeuyeyo?",
"Is water self-serve?",
"Many Korean restaurants have a water station.",
"moo-reun sel-peu-yeh-yo?"
]
],
"transit": [
[
"명동역까지 어떻게 가요?",
"myeongdongyeokkkaji eotteoke gayo?",
"How do I get to Myeongdong Station?",
"-까지 = to/until.",
"myung-dong-yuhk-kkah-jee uh-ttuh-keh gah-yo?"
],
[
"여기서 걸어서 얼마나 걸려요?",
"yeogiseo georeoseo eolmana geollyeoyo?",
"How long does it take on foot from here?",
"걸리다 = to take (time).",
"yuh-gee-suh guh-ruh-suh uhl-mah-nah guhl-lyuh-yo?"
],
[
"몇 호선 타야 돼요?",
"myeot hoseon taya dwaeyo?",
"Which subway line should I take?",
"호선 = line number; -아야 돼요 = have to.",
"myuht hoh-suhn tah-yah dweh-yo?"
],
[
"어디서 갈아타야 돼요?",
"eodiseo garataya dwaeyo?",
"Where do I have to transfer?",
"",
"uh-dee-suh gah-rah-tah-yah dweh-yo?"
],
[
"이 버스 공항 가요?",
"i beoseu gonghang gayo?",
"Does this bus go to the airport?",
"Natural spoken style drops particles.",
"ee buh-seu gong-hahng gah-yo?"
],
[
"다음 정류장에서 내려요",
"daeum jeongnyujangeseo naeryeoyo",
"I'm getting off at the next stop",
"",
"dah-eum juhng-nyoo-jahng-eh-suh neh-ryuh-yo"
],
[
"교통카드 충전하고 싶어요",
"gyotongkadeu chungjeonhago sipeoyo",
"I'd like to top up my transit card",
"-고 싶어요 = I want to. Top-ups are usually cash only, at station machines or convenience stores.",
"gyoh-tong-kah-deu choong-juhn-hah-goh shee-puh-yo"
],
[
"기사님, 여기서 세워 주세요",
"gisanim, yeogiseo sewo juseyo",
"Driver, please stop here",
"기사님 = polite way to address drivers.",
"gee-sah-neem, yuh-gee-suh seh-wuh joo-seh-yo"
],
[
"지하철을 잘못 탔어요",
"jihacheoreul jalmot tasseoyo",
"I took the wrong subway",
"잘못 = wrongly.",
"jee-hah-chuh-reul jahl-moht tah-ssuh-yo"
]
],
"emergency": [
[
"여권을 잃어버렸어요",
"yeogwoneul ireobeoryeosseoyo",
"I lost my passport",
"",
"yuh-gwuh-neul ee-ruh-buh-ryuh-ssuh-yo"
],
[
"가방을 도난당했어요",
"gabangeul donandanghaesseoyo",
"My bag was stolen",
"도난당하다 = to be robbed of.",
"gah-bahng-eul doh-nahn-dahng-heh-ssuh-yo"
],
[
"열이 나고 머리가 아파요",
"yeori nago meoriga apayo",
"I have a fever and a headache",
"-고 links two facts.",
"yuh-ree nah-goh muh-ree-gah ah-pah-yo"
],
[
"어제부터 배가 아파요",
"eojebuteo baega apayo",
"My stomach has hurt since yesterday",
"-부터 = since/from.",
"uh-jeh-boo-tuh beh-gah ah-pah-yo"
],
[
"이 약은 하루에 몇 번 먹어요?",
"i yageun harue myeot beon meogeoyo?",
"How many times a day do I take this medicine?",
"Medicine is \"eaten\" (먹다).",
"ee yah-geun hah-roo-eh myuht buhn muh-guh-yo?"
],
[
"미국 대사관에 연락하고 싶어요",
"miguk daesagwane yeollakago sipeoyo",
"I'd like to contact the US embassy",
"",
"mee-gook deh-sah-gwah-neh yuhl-lah-kah-goh shee-puh-yo"
],
[
"다리를 다쳤어요",
"darireul dachyeosseoyo",
"I hurt my leg",
"",
"dah-ree-reul dah-chuh-ssuh-yo"
],
[
"사고가 났어요",
"sagoga nasseoyo",
"There's been an accident",
"",
"sah-goh-gah nah-ssuh-yo"
],
[
"근처에 응급실 있어요?",
"geuncheoe eunggeupsil isseoyo?",
"Is there an emergency room nearby?",
"Korea: 119 fire/ambulance, 112 police.",
"geun-chuh-eh eung-geup-sheel ee-ssuh-yo?"
]
],
"shopping": [
[
"이거 다른 색깔도 있어요?",
"igeo dareun saekkkaldo isseoyo?",
"Does this come in other colors?",
"",
"ee-guh dah-reun sek-kkahl-doh ee-ssuh-yo?"
],
[
"한 사이즈 큰 걸로 주세요",
"han saijeu keun geollo juseyo",
"One size bigger, please",
"",
"hahn sai-jeu keun guhl-loh joo-seh-yo"
],
[
"입어 봤는데 좀 작아요",
"ibeo bwanneunde jom jagayo",
"I tried it on, but it's a bit small",
"-는데 = but (soft contrast).",
"ee-buh bwahn-neun-deh johm jah-gah-yo"
],
[
"이거 교환할 수 있어요?",
"igeo gyohwanhal su isseoyo?",
"Can I exchange this?",
"-(으)ㄹ 수 있어요 = can.",
"ee-guh gyoh-hwahn-hahl soo ee-ssuh-yo?"
],
[
"환불하고 싶은데요",
"hwanbulhago sipeundeyo",
"I'd like a refund",
"Soft -는데요 ending sounds polite.",
"hwahn-bool-hah-goh shee-peun-deh-yo"
],
[
"선물 포장 돼요?",
"seonmul pojang dwaeyo?",
"Can you gift-wrap it?",
"",
"suhn-mool poh-jahng dweh-yo?"
],
[
"두 개 사면 할인돼요?",
"du gae samyeon harindwaeyo?",
"Is there a discount if I buy two?",
"-면 = if.",
"doo geh sah-myun hah-reen-dweh-yo?"
],
[
"영수증도 주세요",
"yeongsujeungdo juseyo",
"A receipt too, please",
"-도 = also.",
"yung-soo-jeung-doh joo-seh-yo"
]
],
"hotel": [
[
"방이 너무 추워요. 난방이 안 돼요",
"bangi neomu chuwoyo. nanbangi an dwaeyo",
"The room is too cold. The heating doesn't work",
"안 돼요 = doesn't work.",
"bahng-ee nuh-moo choo-wuh-yo. nahn-bahng-ee ahn dweh-yo"
],
[
"뜨거운 물이 안 나와요",
"tteugeoun muri an nawayo",
"There's no hot water",
"",
"tteu-guh-oon moo-ree ahn nah-wah-yo"
],
[
"방을 바꿀 수 있을까요?",
"bangeul bakkul su isseulkkayo?",
"Could I change rooms?",
"-(으)ㄹ까요 softens a request.",
"bahng-eul bah-kkool soo ee-sseul-kkah-yo?"
],
[
"체크아웃을 좀 늦게 해도 될까요?",
"chekeuauseul jom neutge haedo doelkkayo?",
"Could I check out a bit late?",
"-아도 될까요 = may I?",
"cheh-keu-ah-oo-seul johm neut-keh heh-doh dwel-kkah-yo?"
],
[
"카드키를 방에 두고 나왔어요",
"kadeukireul bange dugo nawasseoyo",
"I left my key card in the room",
"",
"kah-deu-kee-reul bahng-eh doo-goh nah-wah-ssuh-yo"
],
[
"옆방이 너무 시끄러워요",
"yeopbangi neomu sikkeureowoyo",
"The room next door is too noisy",
"",
"yuhp-bahng-ee nuh-moo shee-kkeu-ruh-wuh-yo"
],
[
"수건 좀 더 갖다주실 수 있어요?",
"sugeon jom deo gatdajusil su isseoyo?",
"Could you bring some more towels?",
"갖다주다 = bring.",
"soo-guhn johm duh gaht-tah-joo-sheel soo ee-ssuh-yo?"
],
[
"근처에 편의점 있어요?",
"geuncheoe pyeonuijeom isseoyo?",
"Is there a convenience store nearby?",
"",
"geun-chuh-eh pyuh-nee-juhm ee-ssuh-yo?"
]
],
"smalltalk": [
[
"한국에 처음 왔어요",
"hanguge cheoeum wasseoyo",
"It's my first time in Korea",
"",
"hahn-goo-geh chuh-eum wah-ssuh-yo"
],
[
"일주일 동안 여행할 거예요",
"iljuil dongan yeohaenghal geoyeyo",
"I'm going to travel for a week",
"Future -(으)ㄹ 거예요.",
"eel-joo-eel dong-ahn yuh-heng-hahl guh-yeh-yo"
],
[
"어제 경복궁에 갔는데 정말 좋았어요",
"eoje gyeongbokgunge ganneunde jeongmal joasseoyo",
"I went to Gyeongbokgung yesterday and it was great",
"Past tense + -는데 connective.",
"uh-jeh gyung-bohk-goong-eh gahn-neun-deh juhng-mahl joh-ah-ssuh-yo"
],
[
"한국 음식을 좋아해요",
"hanguk eumsigeul joahaeyo",
"I like Korean food",
"",
"hahn-gook eum-shee-geul joh-ah-heh-yo"
],
[
"이 근처에 가 볼 만한 곳 있어요?",
"i geuncheoe ga bol manhan got isseoyo?",
"Is there anywhere worth visiting around here?",
"-(으)ㄹ 만하다 = worth doing.",
"ee geun-chuh-eh gah bohl mahn-hahn goht ee-ssuh-yo?"
],
[
"한국어를 배우고 있어요",
"hangugeoreul baeugo isseoyo",
"I'm learning Korean",
"-고 있다 = -ing.",
"hahn-goo-guh-reul beh-oo-goh ee-ssuh-yo"
],
[
"무슨 일 하세요?",
"museun il haseyo?",
"What do you do for work?",
"",
"moo-seun eel hah-seh-yo?"
],
[
"사진 좀 찍어 주실 수 있어요?",
"sajin jom jjigeo jusil su isseoyo?",
"Could you take a photo for me?",
"",
"sah-jeen johm jjee-guh joo-sheel soo ee-ssuh-yo?"
]
]
},
"adv": {
"greetings": [
[
"안녕! / 안녕하세요",
"annyeong! / annyeonghaseyo",
"Hi! (casual) / Hello (polite)",
"안녕 is 반말: only for friends and kids.",
"ahn-nyung! / ahn-nyung-hah-seh-yo"
],
[
"고마워 / 고마워요",
"gomawo / gomawoyo",
"Thanks (casual) / Thanks (polite)",
"Drop 요 only with close friends or younger people.",
"goh-mah-wuh / goh-mah-wuh-yo"
],
[
"미안해 / 미안해요",
"mianhae / mianhaeyo",
"Sorry (casual) / Sorry (polite)",
"Same 요 rule: 반말 vs 존댓말.",
"mee-ahn-heh / mee-ahn-heh-yo"
],
[
"말씀 많이 들었습니다",
"malsseum mani deureotseumnida",
"I've heard a lot about you",
"말씀 is the honorific form of 말 (words).",
"mahl-sseum mah-nee deu-ruht-seum-nee-dah"
],
[
"어서 오세요",
"eoseo oseyo",
"Welcome (staff greeting)",
"🎧 Staff say this as you enter; a nod is enough.",
"uh-suh oh-seh-yo"
],
[
"말 편하게 하세요",
"mal pyeonhage haseyo",
"Feel free to talk casually with me",
"Invites the other person to use 반말; usually the older person offers.",
"mahl pyuhn-hah-geh hah-seh-yo"
],
[
"우리 말 놓을까요?",
"uri mal noeulkkayo?",
"Shall we drop the formalities?",
"Suggests switching to 반말.",
"oo-ree mahl noh-eul-kkah-yo?"
],
[
"들어가세요",
"deureogaseyo",
"Get home safe (lit. \"go in\")",
"Common polite goodbye when parting or on the phone.",
"deu-ruh-gah-seh-yo"
],
[
"식사하셨어요?",
"siksahasyeosseoyo?",
"Have you eaten? (as a greeting)",
"Often just a friendly hello, not an invitation.",
"sheek-sah-hah-shuh-ssuh-yo?"
]
],
"numbers": [
[
"몇 살이에요? / 연세가 어떻게 되세요?",
"myeot sarieyo? / yeonsega eotteoke doeseyo?",
"How old are you? (plain / honorific for elders)",
"연세 is the honorific word for age.",
"myuht sah-ree-eh-yo? / yuhn-seh-gah uh-ttuh-keh dweh-seh-yo?"
],
[
"스물다섯 살이에요",
"seumuldaseot sarieyo",
"I'm 25 years old",
"Age uses native numbers + 살.",
"seu-mool-dah-suht sah-ree-eh-yo"
],
[
"한 시간 반쯤 걸려요",
"han sigan banjjeum geollyeoyo",
"It takes about an hour and a half",
"쯤 = about.",
"hahn shee-gahn bahn-jjeum guhl-lyuh-yo"
],
[
"거스름돈 여기 있습니다",
"geoseureumdon yeogi itseumnida",
"Here's your change",
"🎧 Cashier phrase.",
"guh-seu-reum-dohn yuh-gee eet-seum-nee-dah"
],
[
"이천이십육 년 십일월 이십이 일",
"icheonisimnyuk nyeon sibirwol isibi il",
"November 22, 2026",
"Dates use Sino numbers + 년/월/일. June and October are 유월, 시월.",
"ee-chuhn-ee-sheem-nyook nyuhn shee-beer-wuhl ee-shee-bee eel"
],
[
"공일공 일이삼사 오육칠팔",
"gong-il-gong il-i-sam-sa o-yuk-chil-pal",
"010-1234-5678 (a phone number)",
"Phone numbers use Sino digits; 0 is 공.",
"gong-eel-gong eel-ee-sahm-sah oh-yook-cheel-pahl"
],
[
"삼 층이에요 / 지하 일 층",
"sam cheungieyo / jiha il cheung",
"It's on the 3rd floor / basement level 1",
"Floors: Sino number + 층; B1 = 지하 1층.",
"sahm cheung-ee-eh-yo / jee-hah eel cheung"
],
[
"포인트 적립해 드릴까요?",
"pointeu jeongnipae deurilkkayo?",
"Shall I add points to your card?",
"🎧 Cashier question; say 괜찮아요 to decline.",
"poh-een-teu juhng-nee-peh deu-reel-kkah-yo?"
],
[
"영수증 드릴까요?",
"yeongsujeung deurilkkayo?",
"Would you like a receipt?",
"🎧 드리다 = humble \"give\".",
"yung-soo-jeung deu-reel-kkah-yo?"
]
],
"food": [
[
"드시고 가세요?",
"deusigo gaseyo?",
"Eating here?",
"🎧 Café staff; 드시다 = honorific \"eat/drink\". Reply 포장이요 for to-go.",
"deu-shee-goh gah-seh-yo?"
],
[
"주문하시겠어요?",
"jumunhasigesseoyo?",
"Are you ready to order?",
"🎧 Honorific -시- + -겠-.",
"joo-moon-hah-shee-geh-ssuh-yo?"
],
[
"맛있게 드세요",
"masitge deuseyo",
"Enjoy your meal",
"🎧 Staff say this when serving.",
"mah-sheet-keh deu-seh-yo"
],
[
"배고파 죽겠어",
"baegopa jukgesseo",
"I'm starving (lit. hungry to death)",
"Casual 반말; a very common exaggeration.",
"beh-goh-pah jook-geh-ssuh"
],
[
"배불러요",
"baebulleoyo",
"I'm full",
"",
"beh-bool-luh-yo"
],
[
"이모, 여기 소주 한 병이요!",
"imo, yeogi soju han byeongiyo!",
"Ma'am, one soju over here!",
"이모 (lit. aunt) is a friendly way to call older women staff at casual eateries.",
"ee-moh, yuh-gee soh-joo hahn byung-ee-yo!"
],
[
"입맛에 맞으세요?",
"immase majeuseyo?",
"Is it to your taste?",
"🎧 Host or staff asking politely.",
"eem-mah-seh mah-jeu-seh-yo?"
],
[
"제가 살게요",
"jega salgeyo",
"It's on me",
"사다 = to buy (treat).",
"jeh-gah sahl-keh-yo"
],
[
"건배!",
"geonbae!",
"Cheers!",
"Turn your head away from elders when drinking.",
"guhn-beh!"
]
],
"transit": [
[
"이번 역은 시청, 시청역입니다",
"ibeon yeogeun sicheong, sicheongyeogimnida",
"This station is City Hall",
"🎧 Subway announcement format.",
"ee-buhn yuh-geun shee-chuhng, shee-chuhng-yuh-geem-nee-dah"
],
[
"내리실 문은 오른쪽입니다",
"naerisil muneun oreunjjogimnida",
"Doors will open on the right",
"🎧 Announcement; 내리시다 is honorific.",
"neh-ree-sheel moo-neun oh-reun-jjoh-geem-nee-dah"
],
[
"어디로 모실까요?",
"eodiro mosilkkayo?",
"Where can I take you?",
"🎧 Taxi driver; 모시다 = humble \"escort\".",
"uh-dee-roh moh-sheel-kkah-yo?"
],
[
"길이 많이 막히네요",
"giri mani makineyo",
"Traffic is really bad",
"-네요 = noticing something.",
"gee-ree mah-nee mah-kee-neh-yo"
],
[
"비행기 시간이 얼마 안 남았어요",
"bihaenggi sigani eolma an namasseoyo",
"My flight is coming up soon",
"Lit. \"not much time left until the flight\".",
"bee-heng-gee shee-gah-nee uhl-mah ahn nah-mah-ssuh-yo"
],
[
"이번에 내려요",
"ibeone naeryeoyo",
"I'm getting off at this stop",
"Say it on a crowded bus or train to get through.",
"ee-buh-neh neh-ryuh-yo"
],
[
"잠시만요, 좀 지나갈게요",
"jamsimanyo, jom jinagalgeyo",
"Excuse me, coming through",
"",
"jahm-shee-mahn-yo, johm jee-nah-gahl-keh-yo"
],
[
"환승입니다",
"hwanseungimnida",
"Transfer (card reader voice)",
"🎧 Heard when you tap within the free-transfer window.",
"hwahn-seung-eem-nee-dah"
]
],
"emergency": [
[
"119에 전화해 주세요",
"il-il-gu-e jeonhwahae juseyo",
"Please call 119",
"119 = fire/ambulance; 112 = police; 1330 = tourist helpline.",
"eel-eel-goo-eh juhn-hwah-heh joo-seh-yo"
],
[
"어디가 불편하세요?",
"eodiga bulpyeonhaseyo?",
"What seems to be the problem?",
"🎧 Doctors and pharmacists ask this.",
"uh-dee-gah bool-pyuhn-hah-seh-yo?"
],
[
"언제부터 그러셨어요?",
"eonjebuteo geureosyeosseoyo?",
"Since when has it been like this?",
"🎧 Doctor's question.",
"uhn-jeh-boo-tuh geu-ruh-shuh-ssuh-yo?"
],
[
"처방전 있으세요?",
"cheobangjeon isseuseyo?",
"Do you have a prescription?",
"🎧 Pharmacist.",
"chuh-bahng-juhn ee-sseu-seh-yo?"
],
[
"식후 30분에 드세요",
"sikhu samsip bune deuseyo",
"Take it 30 minutes after meals",
"🎧 Standard dosage instruction.",
"shee-koo sahm-sheep boo-neh deu-seh-yo"
],
[
"숨쉬기가 힘들어요",
"sumswigiga himdeureoyo",
"It's hard to breathe",
"",
"soom-shwee-gee-gah heem-deu-ruh-yo"
],
[
"분실물 센터가 어디예요?",
"bunsilmul senteoga eodiyeyo?",
"Where's the lost and found?",
"",
"boon-sheel-mool sen-tuh-gah uh-dee-yeh-yo?"
],
[
"비켜! / 비켜 주세요",
"bikyeo! / bikyeo juseyo",
"Move! (casual) / Please move aside",
"반말 vs polite request.",
"bee-kyuh! / bee-kyuh joo-seh-yo"
]
],
"shopping": [
[
"찾으시는 거 있으세요?",
"chajeusineun geo isseuseyo?",
"Looking for anything in particular?",
"🎧 Shop staff. Reply 그냥 구경하는 거예요.",
"chah-jeu-shee-neun guh ee-sseu-seh-yo?"
],
[
"그냥 구경하는 거예요",
"geunyang gugyeonghaneun geoyeyo",
"I'm just looking around",
"",
"geu-nyahng goo-gyung-hah-neun guh-yeh-yo"
],
[
"봉투 필요하세요?",
"bongtu piryohaseyo?",
"Do you need a bag?",
"🎧 Bags usually cost a little extra.",
"bong-too pee-ryo-hah-seh-yo?"
],
[
"일시불로 해 드릴까요?",
"ilsibullo hae deurilkkayo?",
"Pay in full (not installments)?",
"🎧 Card payment question; just say 네.",
"eel-shee-bool-loh heh deu-reel-kkah-yo?"
],
[
"완전 예쁘다!",
"wanjeon yeppeuda!",
"So pretty!",
"Casual 반말; 완전 = totally (slang).",
"wahn-juhn yep-peu-dah!"
],
[
"생각보다 비싸네요",
"saenggakboda bissaneyo",
"It's more expensive than I thought",
"",
"seng-gahk-boh-dah bee-ssah-neh-yo"
],
[
"좀 더 생각해 볼게요",
"jom deo saenggakae bolgeyo",
"I'll think about it a bit more",
"Polite way to leave without buying.",
"johm duh seng-gah-keh bohl-keh-yo"
],
[
"이거 품절이에요",
"igeo pumjeorieyo",
"This is sold out",
"🎧 Staff.",
"ee-guh poom-juh-ree-eh-yo"
]
],
"hotel": [
[
"성함이 어떻게 되세요?",
"seonghami eotteoke doeseyo?",
"May I have your name?",
"🎧 Front desk; 성함 = honorific of 이름.",
"suhng-hah-mee uh-ttuh-keh dweh-seh-yo?"
],
[
"여권 좀 보여 주시겠어요?",
"yeogwon jom boyeo jusigesseoyo?",
"May I see your passport?",
"🎧 Front desk.",
"yuh-gwuhn johm boh-yuh joo-shee-geh-ssuh-yo?"
],
[
"조식 포함이에요?",
"josik pohamieyo?",
"Is breakfast included?",
"",
"joh-sheek poh-hah-mee-eh-yo?"
],
[
"잠시만 기다려 주세요",
"jamsiman gidaryeo juseyo",
"Please wait a moment",
"🎧 Very common from staff.",
"jahm-shee-mahn gee-dah-ryuh joo-seh-yo"
],
[
"불편하신 점 있으시면 연락 주세요",
"bulpyeonhasin jeom isseusimyeon yeollak juseyo",
"Let us know if anything is inconvenient",
"🎧 Honorific staff phrasing.",
"bool-pyuhn-hah-sheen juhm ee-sseu-shee-myun yuhl-lahk joo-seh-yo"
],
[
"예약이 확인이 안 되는데요",
"yeyagi hwagini an doeneundeyo",
"We can't find your reservation",
"🎧 Soft -는데요 signals a problem.",
"yeh-yah-gee hwah-gee-nee ahn dweh-neun-deh-yo"
],
[
"여기 예약 확인서예요",
"yeogi yeyak hwaginseoyeyo",
"Here's my booking confirmation",
"",
"yuh-gee yeh-yahk hwah-geen-suh-yeh-yo"
],
[
"짐 들어 드릴까요?",
"jim deureo deurilkkayo?",
"Shall I carry your bags?",
"🎧 -어 드리다 = humble \"do for you\".",
"jeem deu-ruh deu-reel-kkah-yo?"
]
],
"smalltalk": [
[
"한국말 진짜 잘하시네요!",
"hangukmal jinjja jalhasineyo!",
"Your Korean is really good!",
"🎧 You'll hear this a lot.",
"hahn-goong-mahl jeen-jjah jahl-hah-shee-neh-yo!"
],
[
"아니에요, 아직 멀었어요",
"anieyo, ajik meoreosseoyo",
"Oh no, I still have a long way to go",
"Modest reply to a compliment.",
"ah-nee-eh-yo, ah-jeek muh-ruh-ssuh-yo"
],
[
"대박!",
"daebak!",
"Awesome! / No way!",
"Casual slang; fine with friends.",
"deh-bahk!"
],
[
"진짜요? / 진짜?",
"jinjjayo? / jinjja?",
"Really? (polite / casual)",
"",
"jeen-jjah-yo? / jeen-jjah?"
],
[
"그렇죠 / 그치",
"geureochyo / geuchi",
"Right? (polite / casual)",
"",
"geu-ruh-chyo / geu-chee"
],
[
"시간 가는 줄 몰랐어요",
"sigan ganeun jul mollasseoyo",
"I didn't notice the time flying",
"",
"shee-gahn gah-neun jool mohl-lah-ssuh-yo"
],
[
"어디서 오셨어요?",
"eodiseo osyeosseoyo?",
"Where are you from?",
"🎧 Honorific -시-; common question for travelers.",
"uh-dee-suh oh-shuh-ssuh-yo?"
],
[
"뭐 해? / 뭐 하세요?",
"mwo hae? / mwo haseyo?",
"What are you doing? (casual / honorific)",
"반말 vs 존댓말 with -시-.",
"mwuh heh? / mwuh hah-seh-yo?"
],
[
"다음에 밥 한번 먹어요",
"daeume bap hanbeon meogeoyo",
"Let's grab a meal sometime",
"Often a friendly pleasantry, not a firm plan.",
"dah-eu-meh bahp hahn-buhn muh-guh-yo"
]
]
}
},
"ja": {
"int": {
"greetings": [
[
"お久しぶりです",
"o-hisashiburi desu",
"Long time no see",
"Polite.",
"oh-hee-sah-shee-boo-ree dess"
],
[
"お元気でしたか",
"o-genki deshita ka",
"Have you been well?",
"Past tense of お元気ですか.",
"oh-gehn-kee deh-shtah kah"
],
[
"おかげさまで元気です",
"okagesama de genki desu",
"I'm well, thank you",
"Set humble reply.",
"oh-kah-geh-sah-mah deh gehn-kee dess"
],
[
"手伝ってくれてありがとうございます",
"tetsudatte kurete arigatō gozaimasu",
"Thank you for helping me",
"〜てくれて gives the reason for thanks.",
"teh-tsoo-daht-teh koo-reh-teh ah-ree-gah-TOH goh-zai-mahss"
],
[
"遅れてすみません",
"okurete sumimasen",
"Sorry I'm late",
"て-form + すみません = sorry for…",
"oh-koo-reh-teh soo-mee-mah-sehn"
],
[
"また来ます",
"mata kimasu",
"I'll come again",
"Nice when leaving a shop.",
"mah-tah kee-mahss"
],
[
"お先に失礼します",
"o-saki ni shitsurei shimasu",
"Excuse me for leaving first",
"Polite when leaving before others.",
"oh-sah-kee nee shee-tsoo-RAY shee-mahss"
],
[
"お気をつけて",
"o-ki o tsukete",
"Take care (on your way)",
"Common send-off.",
"oh-kee oh tsoo-keh-teh"
]
],
"numbers": [
[
"コーヒーを二つください",
"kōhī o futatsu kudasai",
"Two coffees, please",
"〜つ = general native counter (1–9).",
"KOH-HEE oh foo-tah-tsoo koo-dah-sai"
],
[
"切符を三枚ください",
"kippu o sanmai kudasai",
"Three tickets, please",
"枚 = flat things.",
"keep-poo oh sahn-mai koo-dah-sai"
],
[
"ビールを二本ください",
"bīru o nihon kudasai",
"Two bottles of beer, please",
"本 = long things/bottles (1 ippon, 3 sanbon).",
"BEE-roo oh nee-hohn koo-dah-sai"
],
[
"三人です",
"sannin desu",
"Three people",
"1 hitori, 2 futari, then 〜nin.",
"sahn-neen dess"
],
[
"五時半に会いましょう",
"goji han ni aimashō",
"Let's meet at 5:30",
"半 = half past.",
"goh-jee hahn nee ai-mah-SHOH"
],
[
"二千五百円です",
"nisen gohyaku en desu",
"It's 2,500 yen",
"",
"nee-sehn goh-hyah-koo ehn dess"
],
[
"二泊します",
"nihaku shimasu",
"I'll stay two nights",
"泊 = nights (1 ippaku, 3 sanpaku).",
"nee-hah-koo shee-mahss"
],
[
"三番線",
"sanbansen",
"Platform (track) 3",
"番線 = track number.",
"sahm-bahn-sehn"
],
[
"何名様ですか",
"nanmei-sama desu ka",
"How many in your party?",
"🎧 Staff asks; reply 二人です etc.",
"nahn-may-sah-mah dess kah"
]
],
"food": [
[
"一番人気のメニューは何ですか",
"ichiban ninki no menyū wa nan desu ka",
"What's the most popular dish?",
"",
"ee-chee-bahn neen-kee noh meh-NYOO wah nahn dess kah"
],
[
"そばアレルギーがあるんですが、これは大丈夫ですか",
"soba arerugī ga aru n desu ga, kore wa daijōbu desu ka",
"I have a buckwheat allergy. Is this OK?",
"〜んですが softly explains background.",
"soh-bah ah-reh-roo-GEE gah ah-roon dess gah, koh-reh wah dai-JOH-boo dess kah"
],
[
"これは辛いですか",
"kore wa karai desu ka",
"Is this spicy?",
"",
"koh-reh wah kah-rai dess kah"
],
[
"わさび抜きでお願いします",
"wasabi nuki de onegai shimasu",
"No wasabi, please",
"〜抜き = without.",
"wah-sah-bee noo-kee deh oh-neh-gai shee-mahss"
],
[
"注文したものがまだ来ていません",
"chūmon shita mono ga mada kite imasen",
"What I ordered hasn't come yet",
"",
"CHOO-mohn shtah moh-noh gah mah-dah kee-teh ee-mah-sehn"
],
[
"別々に払えますか",
"betsubetsu ni haraemasu ka",
"Can we pay separately?",
"",
"beh-tsoo-beh-tsoo nee hah-rah-eh-mahss kah"
],
[
"おかわりできますか",
"okawari dekimasu ka",
"Can I get a refill / seconds?",
"",
"oh-kah-wah-ree deh-kee-mahss kah"
],
[
"予約は必要ですか",
"yoyaku wa hitsuyō desu ka",
"Is a reservation needed?",
"",
"yoh-yah-koo wah hee-tsoo-YOH dess kah"
],
[
"食券を先に買ってください",
"shokken o saki ni katte kudasai",
"Please buy a meal ticket first",
"🎧 At ramen/udon shops with ticket machines.",
"shohk-kehn oh sah-kee nee kaht-teh koo-dah-sai"
]
],
"transit": [
[
"新宿駅までどうやって行けばいいですか",
"Shinjuku-eki made dō yatte ikeba ii desu ka",
"How do I get to Shinjuku Station?",
"〜ばいいですか = what should I do?",
"sheen-joo-koo eh-kee mah-deh DOH yaht-teh ee-keh-bah EE dess kah"
],
[
"ここから歩いて何分ぐらいですか",
"koko kara aruite nanpun gurai desu ka",
"About how many minutes on foot from here?",
"",
"koh-koh kah-rah ah-roo-ee-teh nahm-poon goo-rai dess kah"
],
[
"何番線に乗ればいいですか",
"nanbansen ni noreba ii desu ka",
"Which platform should I take?",
"",
"nahm-bahn-sehn nee noh-reh-bah EE dess kah"
],
[
"どこで乗り換えればいいですか",
"doko de norikaereba ii desu ka",
"Where should I transfer?",
"",
"doh-koh deh noh-ree-kah-eh-reh-bah EE dess kah"
],
[
"このバスは空港に行きますか",
"kono basu wa kūkō ni ikimasu ka",
"Does this bus go to the airport?",
"",
"koh-noh bah-soo wah KOO-KOH nee ee-kee-mahss kah"
],
[
"次で降ります",
"tsugi de orimasu",
"I'm getting off at the next stop",
"",
"tsoo-gee deh oh-ree-mahss"
],
[
"Suicaにチャージしたいです",
"Suika ni chāji shitai desu",
"I'd like to top up my Suica",
"〜たい = want to.",
"soo-ee-kah nee CHAH-jee shtai dess"
],
[
"ここで止めてください",
"koko de tomete kudasai",
"Please stop here (taxi)",
"",
"koh-koh deh toh-meh-teh koo-dah-sai"
],
[
"電車を乗り間違えました",
"densha o norimachigaemashita",
"I got on the wrong train",
"",
"dehn-shah oh noh-ree-mah-chee-gah-eh-mahsh-tah"
]
],
"emergency": [
[
"パスポートをなくしました",
"pasupōto o nakushimashita",
"I lost my passport",
"",
"pah-soo-POH-toh oh nah-koo-shee-mahsh-tah"
],
[
"かばんを盗まれました",
"kaban o nusumaremashita",
"My bag was stolen",
"Passive 〜られました.",
"kah-bahn oh noo-soo-mah-reh-mahsh-tah"
],
[
"熱があって、頭が痛いです",
"netsu ga atte, atama ga itai desu",
"I have a fever and a headache",
"て-form links two facts.",
"neh-tsoo gah aht-teh, ah-tah-mah gah ee-tai dess"
],
[
"昨日からお腹が痛いです",
"kinō kara onaka ga itai desu",
"My stomach has hurt since yesterday",
"",
"kee-NOH kah-rah oh-nah-kah gah ee-tai dess"
],
[
"この薬は一日何回飲みますか",
"kono kusuri wa ichinichi nankai nomimasu ka",
"How many times a day do I take this?",
"Medicine is \"drunk\" (飲む).",
"koh-noh koo-soo-ree wah ee-chee-nee-chee nahn-kai noh-mee-mahss kah"
],
[
"足をけがしました",
"ashi o kega shimashita",
"I hurt my leg/foot",
"",
"ah-shee oh keh-gah shee-mahsh-tah"
],
[
"事故がありました",
"jiko ga arimashita",
"There's been an accident",
"",
"jee-koh gah ah-ree-mahsh-tah"
],
[
"近くに病院はありますか",
"chikaku ni byōin wa arimasu ka",
"Is there a hospital nearby?",
"Japan: 119 ambulance/fire, 110 police.",
"chee-kah-koo nee BYOH-een wah ah-ree-mahss kah"
]
],
"shopping": [
[
"ほかの色はありますか",
"hoka no iro wa arimasu ka",
"Do you have other colors?",
"",
"hoh-kah noh ee-roh wah ah-ree-mahss kah"
],
[
"もう少し小さいサイズはありますか",
"mō sukoshi chiisai saizu wa arimasu ka",
"Do you have a slightly smaller size?",
"",
"MOH soo-koh-shee CHEE-sai sai-zoo wah ah-ree-mahss kah"
],
[
"着てみたら、ちょっと大きかったです",
"kite mitara, chotto ōkikatta desu",
"I tried it on and it was a bit big",
"〜てみる = try doing.",
"kee-teh mee-tah-rah, choht-toh OH-kee-kaht-tah dess"
],
[
"これを返品できますか",
"kore o henpin dekimasu ka",
"Can I return this?",
"",
"koh-reh oh hehm-peen deh-kee-mahss kah"
],
[
"プレゼント用に包んでもらえますか",
"purezento-yō ni tsutsunde moraemasu ka",
"Could you gift-wrap it?",
"〜てもらえますか = could you…?",
"poo-reh-zehn-toh YOH nee tsoo-tsoon-deh moh-rah-eh-mahss kah"
],
[
"カードで払います",
"kādo de haraimasu",
"I'll pay by card",
"",
"KAH-doh deh hah-rai-mahss"
],
[
"パスポートが必要ですか",
"pasupōto ga hitsuyō desu ka",
"Do you need my passport?",
"Required for tax-free shopping.",
"pah-soo-POH-toh gah hee-tsoo-YOH dess kah"
],
[
"新しいのはありますか",
"atarashii no wa arimasu ka",
"Do you have a new one (not the display)?",
"",
"ah-tah-rah-SHEE noh wah ah-ree-mahss kah"
]
],
"hotel": [
[
"部屋が寒いです。暖房がつきません",
"heya ga samui desu. danbō ga tsukimasen",
"The room is cold. The heater won't turn on",
"",
"heh-yah gah sah-moo-ee dess. dahn-BOH gah tsoo-kee-mah-sehn"
],
[
"お湯が出ません",
"o-yu ga demasen",
"There's no hot water",
"",
"oh-yoo gah deh-mah-sehn"
],
[
"部屋を変えてもらえますか",
"heya o kaete moraemasu ka",
"Could I change rooms?",
"",
"heh-yah oh kah-eh-teh moh-rah-eh-mahss kah"
],
[
"レイトチェックアウトはできますか",
"reito chekkuauto wa dekimasu ka",
"Is late checkout possible?",
"",
"ray-toh chehk-koo-ow-toh wah deh-kee-mahss kah"
],
[
"鍵を部屋に置いたまま出てしまいました",
"kagi o heya ni oita mama dete shimaimashita",
"I left my key in the room and got locked out",
"〜てしまう = ended up (regret).",
"kah-gee oh heh-yah nee oy-tah mah-mah deh-teh shee-mai-mahsh-tah"
],
[
"隣の部屋がうるさいです",
"tonari no heya ga urusai desu",
"The room next door is noisy",
"",
"toh-nah-ree noh heh-yah gah oo-roo-sai dess"
],
[
"タクシーを呼んでもらえますか",
"takushī o yonde moraemasu ka",
"Could you call me a taxi?",
"",
"tahk-SHEE oh yohn-deh moh-rah-eh-mahss kah"
],
[
"近くにコンビニはありますか",
"chikaku ni konbini wa arimasu ka",
"Is there a convenience store nearby?",
"",
"chee-kah-koo nee kohm-bee-nee wah ah-ree-mahss kah"
]
],
"smalltalk": [
[
"日本は初めてです",
"Nihon wa hajimete desu",
"It's my first time in Japan",
"",
"nee-hohn wah hah-jee-meh-teh dess"
],
[
"一週間旅行する予定です",
"isshūkan ryokō suru yotei desu",
"I plan to travel for a week",
"予定 = plan.",
"ees-SHOO-kahn RYOH-koh soo-roo yoh-tay dess"
],
[
"昨日、浅草に行きました。とても楽しかったです",
"kinō, Asakusa ni ikimashita. totemo tanoshikatta desu",
"Yesterday I went to Asakusa. It was really fun",
"Past tense of verbs and adjectives.",
"kee-NOH, ah-sah-koo-sah nee ee-kee-mahsh-tah. toh-teh-moh tah-noh-shee-kaht-tah dess"
],
[
"日本料理が大好きです",
"Nihon ryōri ga daisuki desu",
"I love Japanese food",
"",
"nee-hohn RYOH-ree gah dai-soo-kee dess"
],
[
"このあたりでおすすめの場所はありますか",
"kono atari de osusume no basho wa arimasu ka",
"Any places you recommend around here?",
"",
"koh-noh ah-tah-ree deh oh-soo-soo-meh noh bah-shoh wah ah-ree-mahss kah"
],
[
"日本語を勉強しています",
"nihongo o benkyō shite imasu",
"I'm studying Japanese",
"〜ています = -ing.",
"nee-hohn-goh oh behn-KYOH shteh ee-mahss"
],
[
"お仕事は何をされていますか",
"o-shigoto wa nani o sarete imasu ka",
"What do you do for work?",
"Respectful phrasing.",
"oh-shee-goh-toh wah nah-nee oh sah-reh-teh ee-mahss kah"
],
[
"写真を撮ってもらえますか",
"shashin o totte moraemasu ka",
"Could you take a photo for us?",
"",
"shah-sheen oh toht-teh moh-rah-eh-mahss kah"
]
]
},
"adv": {
"greetings": [
[
"ありがとう / ありがとうございます",
"arigatō / arigatō gozaimasu",
"Thanks (casual) / Thank you (polite)",
"Casual form only with friends.",
"ah-ree-gah-TOH / ah-ree-gah-TOH goh-zai-mahss"
],
[
"ごめん / 申し訳ございません",
"gomen / mōshiwake gozaimasen",
"Sorry (casual) / I sincerely apologize (very formal)",
"You'll hear the formal one from staff.",
"goh-mehn / MOH-shee-wah-keh goh-zai-mah-sehn"
],
[
"いらっしゃいませ",
"irasshaimase",
"Welcome (staff greeting)",
"🎧 Called out as you enter; no reply needed.",
"ee-rahs-shai-mah-seh"
],
[
"かしこまりました",
"kashikomarimashita",
"Certainly (staff)",
"🎧 Humble \"understood\".",
"kah-shee-koh-mah-ree-mahsh-tah"
],
[
"少々お待ちください",
"shōshō o-machi kudasai",
"Please wait a moment",
"🎧 Honorific お〜ください.",
"SHOH-SHOH oh-mah-chee koo-dah-sai"
],
[
"お疲れ様です",
"otsukaresama desu",
"Thanks for your hard work",
"Greeting among coworkers; you'll hear it often.",
"oh-tsoo-kah-reh-sah-mah dess"
],
[
"元気？ / お元気ですか",
"genki? / o-genki desu ka",
"How are you? (casual / polite)",
"",
"gehn-kee? / oh-gehn-kee dess kah"
],
[
"じゃあね / 失礼します",
"jā ne / shitsurei shimasu",
"See ya (casual) / Goodbye (formal)",
"",
"JAH neh / shee-tsoo-RAY shee-mahss"
]
],
"numbers": [
[
"おいくつですか",
"o-ikutsu desu ka",
"How old are you? (polite)",
"Asking age is a bit personal.",
"oh-ee-koo-tsoo dess kah"
],
[
"二十五歳です",
"nijūgo-sai desu",
"I'm 25",
"Age 20 is 二十歳 (hatachi).",
"nee-JOO-goh sai dess"
],
[
"お会計、三千二百円になります",
"o-kaikei, sanzen nihyaku en ni narimasu",
"Your total is 3,200 yen",
"🎧 Staff use 〜になります for prices.",
"oh-kai-KAY, sahn-zehn nee-hyah-koo ehn nee nah-ree-mahss"
],
[
"一万円からお預かりします",
"ichiman en kara o-azukari shimasu",
"Out of 10,000 yen",
"🎧 Cashier repeats what you handed over.",
"ee-chee-mahn ehn kah-rah oh-ah-zoo-kah-ree shee-mahss"
],
[
"六千八百円のお返しです",
"rokusen happyaku en no o-kaeshi desu",
"Here's 6,800 yen change",
"🎧 Note 六千 rokusen, 八百 happyaku.",
"roh-koo-sehn hahp-pyah-koo ehn noh oh-kah-eh-shee dess"
],
[
"ポイントカードはお持ちですか",
"pointo kādo wa o-mochi desu ka",
"Do you have a point card?",
"🎧 Answer いいえ.",
"poyn-toh KAH-doh wah oh-moh-chee dess kah"
],
[
"袋はご利用ですか",
"fukuro wa go-riyō desu ka",
"Will you need a bag?",
"🎧 Bags often cost a few yen.",
"foo-koo-roh wah goh-ree-YOH dess kah"
],
[
"温めますか",
"atatamemasu ka",
"Shall I heat this up?",
"🎧 Convenience store staff, for bento.",
"ah-tah-tah-meh-mahss kah"
],
[
"三階 / 地下一階",
"sangai / chika ikkai",
"3rd floor / basement 1",
"Note 三階 = sangai, 一階 = ikkai.",
"sahn-gai / chee-kah eek-kai"
]
],
"food": [
[
"店内でお召し上がりですか",
"tennai de o-meshiagari desu ka",
"Will you eat in?",
"🎧 召し上がる = honorific \"eat\". Reply 持ち帰りで for to-go.",
"tehn-nai deh oh-meh-shee-ah-gah-ree dess kah"
],
[
"ご注文はお決まりですか",
"go-chūmon wa o-kimari desu ka",
"Have you decided on your order?",
"🎧 Staff.",
"goh-CHOO-mohn wah oh-kee-mah-ree dess kah"
],
[
"お腹すいた / お腹がすきました",
"onaka suita / onaka ga sukimashita",
"I'm hungry (casual / polite)",
"",
"oh-nah-kah soo-ee-tah / oh-nah-kah gah soo-kee-mahsh-tah"
],
[
"うまい！",
"umai!",
"Delicious! (casual)",
"Casual, more common among men; おいしい is safe for everyone.",
"oo-mai!"
],
[
"お腹いっぱいです",
"onaka ippai desu",
"I'm full",
"",
"oh-nah-kah eep-pai dess"
],
[
"すみません、お冷ください",
"sumimasen, o-hiya kudasai",
"Excuse me, some water please",
"お冷 = restaurant word for cold water.",
"soo-mee-mah-sehn, oh-hee-yah koo-dah-sai"
],
[
"ラストオーダーになります",
"rasuto ōdā ni narimasu",
"It's last orders",
"🎧 Staff.",
"rah-soo-toh OH-DAH nee nah-ree-mahss"
],
[
"乾杯！",
"kanpai!",
"Cheers!",
"",
"kahm-pai!"
],
[
"今日は私がおごります",
"kyō wa watashi ga ogorimasu",
"Today's on me",
"おごる = to treat.",
"KYOH wah wah-tah-shee gah oh-goh-ree-mahss"
]
],
"transit": [
[
"まもなく、渋谷です",
"mamonaku, Shibuya desu",
"Arriving shortly at Shibuya",
"🎧 Train announcement.",
"mah-moh-nah-koo, shee-boo-yah dess"
],
[
"お出口は右側です",
"o-deguchi wa migigawa desu",
"The exit is on the right side",
"🎧 Doors open on the right.",
"oh-deh-goo-chee wah mee-gee-gah-wah dess"
],
[
"白線の内側までお下がりください",
"hakusen no uchigawa made o-sagari kudasai",
"Please stand behind the white line",
"🎧 Platform announcement.",
"hah-koo-sehn noh oo-chee-gah-wah mah-deh oh-sah-gah-ree koo-dah-sai"
],
[
"どちらまで？",
"dochira made?",
"Where to?",
"🎧 Taxi driver.",
"doh-chee-rah mah-deh?"
],
[
"道が混んでいますね",
"michi ga konde imasu ne",
"The roads are crowded, aren't they",
"〜ね invites agreement.",
"mee-chee gah kohn-deh ee-mahss neh"
],
[
"降ります！",
"orimasu!",
"Getting off!",
"Say it on a packed train to get through.",
"oh-ree-mahss!"
],
[
"終電は何時ですか",
"shūden wa nanji desu ka",
"What time is the last train?",
"",
"SHOO-dehn wah nahn-jee dess kah"
],
[
"人身事故で遅れています",
"jinshin jiko de okurete imasu",
"Delayed due to an accident involving a person",
"🎧 Common delay announcement.",
"jeen-sheen jee-koh deh oh-koo-reh-teh ee-mahss"
]
],
"emergency": [
[
"救急車を呼んでもらえますか",
"kyūkyūsha o yonde moraemasu ka",
"Could you call an ambulance for me?",
"〜てもらえますか is a polite request. 119 = ambulance.",
"KYOO-KYOO-shah oh yohn-deh moh-rah-eh-mahss kah"
],
[
"どうしましたか",
"dō shimashita ka",
"What's wrong?",
"🎧 Doctor or police.",
"DOH shee-mahsh-tah kah"
],
[
"いつからですか",
"itsu kara desu ka",
"Since when?",
"🎧 Doctor.",
"ee-tsoo kah-rah dess kah"
],
[
"処方箋はありますか",
"shohōsen wa arimasu ka",
"Do you have a prescription?",
"🎧 Pharmacist.",
"shoh-HOH-sehn wah ah-ree-mahss kah"
],
[
"食後に飲んでください",
"shokugo ni nonde kudasai",
"Take it after meals",
"🎧 Dosage instruction.",
"shoh-koo-goh nee nohn-deh koo-dah-sai"
],
[
"息が苦しいです",
"iki ga kurushii desu",
"It's hard to breathe",
"",
"ee-kee gah koo-roo-SHEE dess"
],
[
"忘れ物センターはどこですか",
"wasuremono sentā wa doko desu ka",
"Where's the lost and found?",
"忘れ物 = lost/forgotten items.",
"wah-soo-reh-moh-noh sehn-TAH wah doh-koh dess kah"
],
[
"やめて！ / やめてください",
"yamete! / yamete kudasai",
"Stop it! (casual) / Please stop",
"",
"yah-meh-teh! / yah-meh-teh koo-dah-sai"
]
],
"shopping": [
[
"何かお探しですか",
"nanika o-sagashi desu ka",
"Looking for something?",
"🎧 Reply 見ているだけです.",
"nah-nee-kah oh-sah-gah-shee dess kah"
],
[
"ご試着されますか",
"go-shichaku saremasu ka",
"Would you like to try it on?",
"🎧 Staff.",
"goh-shee-chah-koo sah-reh-mahss kah"
],
[
"お支払いはいかがなさいますか",
"o-shiharai wa ikaga nasaimasu ka",
"How would you like to pay?",
"🎧 Very polite.",
"oh-shee-hah-rai wah ee-kah-gah nah-sai-mahss kah"
],
[
"一括でよろしいですか",
"ikkatsu de yoroshii desu ka",
"Single payment OK?",
"🎧 Card payment; answer はい.",
"eek-kah-tsoo deh yoh-roh-SHEE dess kah"
],
[
"めっちゃかわいい！",
"metcha kawaii!",
"Super cute!",
"Casual slang (originally Kansai).",
"meht-chah kah-wah-EE!"
],
[
"思ったより高いですね",
"omotta yori takai desu ne",
"Pricier than I thought",
"",
"oh-moht-tah yoh-ree tah-kai dess neh"
],
[
"ちょっと考えます",
"chotto kangaemasu",
"I'll think about it",
"Polite way to leave without buying.",
"choht-toh kahn-gah-eh-mahss"
],
[
"ただいま品切れです",
"tadaima shinagire desu",
"It's currently sold out",
"🎧 Staff.",
"tah-dai-mah shee-nah-gee-reh dess"
]
],
"hotel": [
[
"お名前を頂戴できますか",
"o-namae o chōdai dekimasu ka",
"May I have your name?",
"🎧 Very polite, humble phrasing.",
"oh-nah-mah-eh oh CHOH-dai deh-kee-mahss kah"
],
[
"パスポートを拝見してもよろしいですか",
"pasupōto o haiken shite mo yoroshii desu ka",
"May I see your passport?",
"🎧 拝見 = humble \"see\".",
"pah-soo-POH-toh oh hai-kehn shteh moh yoh-roh-SHEE dess kah"
],
[
"朝食は付いていますか",
"chōshoku wa tsuite imasu ka",
"Is breakfast included?",
"",
"CHOH-shoh-koo wah tsoo-ee-teh ee-mahss kah"
],
[
"ごゆっくりどうぞ",
"go-yukkuri dōzo",
"Please take your time / enjoy",
"🎧 Staff.",
"goh-yook-koo-ree DOH-zoh"
],
[
"何かございましたらお申し付けください",
"nanika gozaimashitara o-mōshitsuke kudasai",
"Let us know if you need anything",
"🎧 Keigo.",
"nah-nee-kah goh-zai-mahsh-tah-rah oh-MOH-shee-tsoo-keh koo-dah-sai"
],
[
"ご予約が確認できないのですが",
"go-yoyaku ga kakunin dekinai no desu ga",
"We can't find your reservation…",
"🎧 Trailing が signals a problem.",
"goh-yoh-yah-koo gah kah-koo-neen deh-kee-nai noh dess gah"
],
[
"こちらが予約確認書です",
"kochira ga yoyaku kakuninsho desu",
"Here's my booking confirmation",
"",
"koh-chee-rah gah yoh-yah-koo kah-koo-neen-shoh dess"
],
[
"お荷物をお持ちします",
"o-nimotsu o o-mochi shimasu",
"I'll carry your luggage",
"🎧 Humble お〜します.",
"oh-nee-moh-tsoo oh oh-moh-chee shee-mahss"
]
],
"smalltalk": [
[
"日本語がお上手ですね",
"nihongo ga o-jōzu desu ne",
"Your Japanese is very good",
"🎧 You'll hear this often.",
"nee-hohn-goh gah oh-JOH-zoo dess neh"
],
[
"いえいえ、まだまだです",
"ie ie, madamada desu",
"Oh no, I still have a long way to go",
"Modest reply to a compliment.",
"ee-eh ee-eh, mah-dah-mah-dah dess"
],
[
"マジで？",
"maji de?",
"Seriously?",
"Casual slang.",
"mah-jee deh?"
],
[
"本当ですか / ほんと？",
"hontō desu ka / honto?",
"Really? (polite / casual)",
"",
"hohn-TOH dess kah / hohn-toh?"
],
[
"そうですね / そうだね",
"sō desu ne / sō da ne",
"That's right (polite / casual)",
"",
"SOH dess neh / SOH dah neh"
],
[
"すごい！",
"sugoi!",
"Amazing!",
"",
"soo-goy!"
],
[
"どちらからいらっしゃいましたか",
"dochira kara irasshaimashita ka",
"Where are you from?",
"🎧 Honorific いらっしゃる.",
"doh-chee-rah kah-rah ee-rahs-shai-mahsh-tah kah"
],
[
"何してる？ / 何をしていますか",
"nani shiteru? / nani o shite imasu ka",
"What are you doing? (casual / polite)",
"",
"nah-nee shteh-roo? / nah-nee oh shteh ee-mahss kah"
],
[
"また今度ご飯でも行きましょう",
"mata kondo gohan demo ikimashō",
"Let's grab a meal sometime",
"Often a pleasantry, not a firm plan.",
"mah-tah kohn-doh goh-hahn deh-moh ee-kee-mah-SHOH"
]
]
}
}
};
