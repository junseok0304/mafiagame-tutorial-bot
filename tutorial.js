var bantxt = ["", "1. 초성 포함 금지", "2. 특문 포함 금지", "3. 직업 포함 금지, 비속어 금지", "4. 정치 관련 이름 포함 금지", "5. 이미 존재하는 닉네임", "6. 2~8자(한글기준, 영어 1자는 0.5자로 취급)"];
const banNICK1 = /[ㄱ-ㆎ]/;
const banNICK2 = /경찰|의사|연인|정치인|정치|군인|군|기자|성직자|성직|테러리스트|테러|건달|마피아|맢|스파이|슾|마담|짐승인간|짐인|과학자|과학|교주/;
const banNICK3 = /[^가-힣&^ -9&^;-~]/;
const banNICK4 = /[❤|💜|🐰|🐹|🍀|💕|❣|💗|💖|💛|💚|💙|💫|🐶|🐦|🐥|🐧|🐤|🐣|🐬|🌸|🌼|🌷|🌹|🥀|🌈|⚡|🌟|⭐|🌌|🌠|😑|🍭|☪︎|☪︎·̩͙ |바보/;
//최종수정 21.1.2
function lengthKorean(str) {
  var count = 0;
  var ch = '';
  for (var i = 0; i < str.length; i++) {
    ch = str.charAt(i);
    if (escape(ch).length == 6) {
      count++;
    }
    count++;
  }
  return count;
}

function nickTest(nickname) {
  if (banNICK1.test(nickname)) {
    banwords = banNICK1.exec(nickname);
    return 1;
  }
  if (banNICK2.test(nickname)) {
    banwords = banNICK2.exec(nickname);
    return 2;
  }
  if (banNICK3.test(nickname)) {
    banwords = banNICK3.exec(nickname);
    return 3;
  }
  if (banNICK4.test(nickname)) {
    banwords = banNICK4.exec(nickname);
    return 4;
  }
  if (4 > lengthKorean(nickname) || 16 < lengthKorean(nickname)) 
    return 5;
  return null;
}

//여기까지 닉네임 검증하는 사전전역변수 및 함수
const scriptName = "튜토리얼";
//MadyBy.junseok0304
//가장 최근 수정일자. 2021.01.02
var a = "\n";
var aa = "\n\n";
var 배터리 = Device.getBatteryLevel();
var blank = "".repeat(500);
var nick = "닉네임 규정\n1. 초성 포함 금지\n2. 특문 포함 금지,비속어 금지\n3. 직업 포함 금지\n4. 정치 관련 이름 포함 금지\n5. 이미 존재하는 닉네임 금지\n6. 2~8자(한글기준, 영어 1자는 0.5자로 취급)";
var 갠톡링크 = FileStream.read("/sdcard/갠톡링크.txt");
json = {};

function response(room, msg, sender, isGroupChat, replier, imageDB, packageName) {

  if (room == "카톡으로 하는 마피아게임!") 
    return;
  {
    //리로드 관련
    if (msg == "*리로드") {
      Api.reload("튜토리얼");
    }
    
    //룸함수로 방 밴 설정
    if (msg == "ㅁ시작") {
      replier.reply("명령어가 변경되었습니다.\nㅁ맢겜 참가\n를 입력해주세요.");
    }
    
    if (msg == "ㅁ맢겜 참가" || msg == "ㅁ맢겜참가" || msg == "맢겜 참가" || msg == "맢겜참가") {
      java.lang.Thread.sleep(0);
      replier.reply("튜토리얼을 시작합니다.\n(ver.2021)");
     
      //스토리라인 0
      var ban = nickTest(sender);
      if (!ban) {
        replier.reply("[튜토리봇] 먼저 닉을 체크합니다.\n" + sender + "님, 반갑습니다.^^");
        java.lang.Thread.sleep(300);
      } else {
        replier.reply("[튜토리봇] " + sender + "님, 닉 규정을 지켜 주세요. \n" + bantxt[ban] + "닉변 하고 다시 'ㅁ맢겜 참가 하세요.' ");
        replier.reply("닉네임 규정\n1. 초성 포함 금지\n2. 특문 포함 금지,비속어 금지\n3. 직업 포함 금지\n4. 정치 관련 이름 포함 금지\n5. 이미 존재하는 닉네임 금지\n6. 2~8자(한글기준, 영어 1자는 0.5자로 취급)");
        java.lang.Thread.sleep(500);
        replier.reply("🚨추가로, 본방(500명방)과 이곳의 닉네임을 동일🚨하게 해주세요.(필수)");
        if (ban < 5) 
          replier.reply("[튜토리봇] 금지된 단어: " + banwords + "\n다시 닉변을 하고 'ㅁ맢겜 참가' 하세요.");
        return;
      }
      
      java.lang.Thread.sleep(200);
      replier.reply("[튜토리봇] 🔰카톡마피아는 최소 4인~ 최대 12인까지 참여가능하며\n🔰명령어는 항상 띄어쓰기와 맞춤법을 확인.🚨");
      java.lang.Thread.sleep(1200);
      replier.reply("원작(마피아42)과는 다른점들이 있습니다. ㅁ사전으로 확인바람.");
      java.lang.Thread.sleep(2800);
      replier.reply("[튜토리봇] ㅁ맢겜 시작\n을 쳐서\n게임을 시작해주세요.");
    }
    
    
    if (msg == "ㅁ맢겜 시작" || msg == "ㅁ맢겜시작" || msg == "맢겜 시작" || msg == "맢겜시작") {
      if (ban) {
        replier.reply("[튜토리봇] " + sender + "님, 닉 규정을 지켜 주세요. \n" + bantxt[ban] + "다시 닉변 하고 'ㅁ맢겜 참가' ");
        if (ban < 5) 
          replier.reply("[튜토리봇] 금지된 단어: " + banwords + "다시 닉변 하고 'ㅁ맢겜 참가' ");
        return;
      }
      
      java.lang.Thread.sleep(1500);
      replier.reply("[튜토리봇] 마피아게임을 시작합니다.");
      java.lang.Thread.sleep(2500);
      replier.reply("🚨[튜토리봇] 실제 게임 진행 시에는\n 🛎단톡(600명 방)과 📍갠톡(직업배정,능력사용,투표용)\n으로 분리되어 있지만,\n튜토리얼 진행을 위해 이곳에서\n🛎와📍로 표시하겠습니다.");
      //스토리라인01-1
      java.lang.Thread.sleep(3500);
      replier.reply("🛎[튜토리본방봇] 마피아게임을시작합니다.\n참가자들의 직업을 📍개인톡으로 보냈습니다.");
      java.lang.Thread.sleep(500);
      replier.reply("🛎[튜토리본방봇]\n밤이 되었습니다. 아침이 오기전까지\n게임방에서 ⚠️대화를 금지하며 능력이 있는 직업은\n📍개인톡에서 사용하세요");
      java.lang.Thread.sleep(3500);
      replier.reply("{📍마피아봇 갠톡(개인톡) 화면입니다.}");
      java.lang.Thread.sleep(3200);
      replier.reply("[튜토리갠톡📍봇]\n" + sender + "님의 직업은 경찰!👮 ♂️\n특수능력\n=======\n밤마다 ‘ㅁ조사 [번호]’로 선택한 사람이 마피아인지 아닌지를 알 수 있다.\n마피아팀을 모두 제거할 경우, 승리한다.");
      java.lang.Thread.sleep(2000);
      replier.reply("[튜토리갠톡📍봇]\n목록\n1:<⚙아기>" + sender + "\n2:<⚙초등학생>나는2사(BOT)\n3:<🥇대리>나는M피아(BOT)\n4:<⚙어린이>나는종치인(BOT)\n5:<⚙아기>나는간달(BOT)");
      java.lang.Thread.sleep(3200);
      replier.reply("[튜토리갠톡📍봇]\n조사할 사람의 번호를 고르세요.\n조사는\nㅁ조사 0 (0에 조사할사람번호입력)\n을 치세요.");
      java.lang.Thread.sleep(2500);
      replier.reply("[튜토리갠톡📍봇]\nTIP.\nㅁ조사 3\n을 입력하면 3번유저를 조사합니다.");
    }
    
    
    if (msg == "ㅁ조사 1" || msg == "ㅁ조사 2" || msg == "ㅁ조사 4" || msg == "ㅁ조사 5" || msg == "ㅁ조사1" || msg == "ㅁ조사2" || msg == "ㅁ조사3" || msg == "ㅁ조사4" || msg == "ㅁ조사5") {
      java.lang.Thread.sleep(100);
      replier.reply("현재는 ㅁ조사 3 만인식이됩니다.\n다시 치세요.");
    }


    if (msg == "ㅁ조사 6" || msg == "ㅁ조사6" || msg == "ㅁ조사 7" || msg == "ㅁ조사7" || msg == "ㅁ조사 8" || msg == "ㅁ조사8" || msg == "ㅁ조사 9" || msg == "ㅁ조사9" || msg == "ㅁ조사 10") {
      java.lang.Thread.sleep(100);
      replier.reply("현재는 ㅁ조사 3 만인식이됩니다.\n다시 치세요.");
    }
    
    
    if (msg == "ㅁ조사10" || msg == "ㅁ조사11" || msg == "ㅁ조사 11" || msg == "ㅁ조사12" || msg == "ㅁ조사 12" || msg == "ㅁ조사0" || msg == "ㅁ조사 0" || msg == "ㅁ조사 3번" || msg == "ㅁ조사3번") {
      java.lang.Thread.sleep(100);
      replier.reply("현재는 ㅁ조사 3 만인식이됩니다.\n다시 치세요.");
    }
    
    
    if (msg == "ㅁ조사 3") {
      java.lang.Thread.sleep(1500);
      replier.reply("[튜토리갠톡📍봇] 3번유저 <🥇대리> 나는M피아(BOT) 님은 마피아가 맞습니다.");
      java.lang.Thread.sleep(2900);
      replier.reply("🍞TIP. 축하합니다! 마피아를 찾으셨군요.\n단체방에서 낮이 온 이후에 자신의 조결을 어필해보세요.\n단, ⚠️본인이 죽은경우 또는 밤🌙에는 절대 아무말도 하면 안됩니다.");
      java.lang.Thread.sleep(3800);
      replier.reply("[튜토리갠톡📍봇]낮이 되었습니다. 단톡에 참여해주세요.");
      java.lang.Thread.sleep(1500);
      replier.reply("{🛎단체방(본방) 톡방 화면입니다.");
      java.lang.Thread.sleep(2000);
      replier.reply("🛎[튜토리봇]\n1번째 낮이 밝았습니다.\n2번 <초등학생⚙>나는2사(BOT)님이 \n마피아에 의해 공격당했으나, \n의사에 의해 치료되었습니다.");
      java.lang.Thread.sleep(1900);
      replier.reply("(해)");
      java.lang.Thread.sleep(1500);
      replier.reply("(알약)");
      java.lang.Thread.sleep(2500);
      replier.reply("2:나는2사(BOT): 저는 의사에요 ㅈㅎㅇ(자신을 힐한 의사)");
      java.lang.Thread.sleep(4000);
      replier.reply("3:나는M피아(BOT): 저는 경찰이에요 2노맢");
      java.lang.Thread.sleep(4500);
      replier.reply("4:나는종치인(BOT): 정치요");
      java.lang.Thread.sleep(5000);
      replier.reply("5:나는간달(BOT): 첫날 무협건(=협박안한 건달)");
      java.lang.Thread.sleep(4000);
      replier.reply("🍞TIP. 본인의 직업과 조사결과를 말해 어필하세요.\n조사결과 어필타임.!");
      java.lang.Thread.sleep(9500);
      replier.reply("나는2사(BOT): 오오!! 그럼 3번 나는M피아(BOT)님 투표로처형해요");
      java.lang.Thread.sleep(3500);
      replier.reply("BOT2, 3, 4, 5:ㅁ투표 동의");
      java.lang.Thread.sleep(2500);
      replier.reply("🛎[튜토리봇]\nㅁ투표 동의\n를 하여 투표를 진행합니다.");
    }
    
    if (msg == "ㅁ투표동의" || msg == "ㅁ투표 동의") {
      java.lang.Thread.sleep(3000);
      replier.reply("🛎[튜토리봇]\n" + sender + "님, 투표 등록 완료\n(현재 인원 : 5/5명)안 한 사람 :");
      java.lang.Thread.sleep(2500);
      replier.reply("🛎[튜토리봇]투표를 시작합니다.\n투표는 갠톡으로 'ㅁ투표 [번호]'\n모두가 투표한 이후\n최후의반론->찬반투표 순으로 진행됨.");
      java.lang.Thread.sleep(3500);
      replier.reply("{마피아봇 갠톡📍(개인톡) 화면입니다.\n투표는 갠톡에서 진행}");
      java.lang.Thread.sleep(1500);
      replier.reply("[튜토리갠톡📍봇]\n투표를 시작합니다.");
      java.lang.Thread.sleep(3500);
      replier.reply("📍목록\n1: <⚙️아기>" + sender + "\n2: <⚙️초등학생> 나는2사(BOT)\n3: <🏅대리> 나는M피아(BOT)\n4: <⚙️어린이> 나는종치인(BOT)\n5: <⚙️아기> 나는간달(BOT");
      java.lang.Thread.sleep(2000);
      replier.reply("[튜토리갠톡📍봇]\nTIP. 투표는\nㅁ투표 0\n이렇게 칩니다.");
    }
    
    
    if (msg == "ㅁ투표1" || msg == "ㅁ투표2" || msg == "ㅁ투표0" || msg == "ㅁ투표4" || msg == "ㅁ투표5" || msg == "ㅁ투표 1" || msg == "ㅁ투표 2" || msg == "ㅁ투표 4" || msg == "ㅁ투표 5") {
      java.lang.Thread.sleep(100);
      replier.reply("ㅁ투표 3을 입력하세요.\nTIP.본인이 확신하는사람에게 투표.\n⚠️고의트롤시 제재를 받을수있음.");
    }
    
    
    if (msg == "ㅁ투표6" || msg == "ㅁ투표 6" || msg == "ㅁ투표7" || msg == "ㅁ투표 7" || msg == "ㅁ투표8" || msg == "ㅁ투표 8" || msg == "ㅁ투표9" || msg == "ㅁ투표 9" || msg == "ㅁ투표10" || msg == "ㅁ투표 10" || msg == "ㅁ투표11" || msg == "ㅁ투표 11" || msg == "ㅁ투표12" || msg == "ㅁ투표 12" || msg == "ㅁ투표 0" || msg == "ㅁ투표3") {
      java.lang.Thread.sleep(100);
      replier.reply("⚠️제대로 투표하세요..\n없는사람에게 투표하거나 띄어쓰기오류.");
      java.lang.Thread.sleep(100);
      replier.reply("TIP. ㅁ투표 3");
    }
    
    
    if (msg == "ㅁ투표 3") {
      java.lang.Thread.sleep(1500);
      replier.reply("[튜토리갠톡📍봇]\n<🏅대리>3번:나는M피아(BOT) 님을 투표했습니다.");
      java.lang.Thread.sleep(6500);
      replier.reply("[튜토리갠톡📍봇]\n투표가 종료되었습니다.\n본방에서 다시게임을 진행해주세요");
      java.lang.Thread.sleep(4500);
      replier.reply("🛎[튜토리봇]\n<🏅대리>3번:나는M피아(BOT)님 세 표." + "빠른 진행을 위해 투표수가 한번만 표시됨.");
      replier.reply("🛎[튜토리봇]\n<⚙️아기>1번:" + sender + "님 한 표.");
      java.lang.Thread.sleep(1500);
      replier.reply("🛎[튜토리봇]\n<🏅대리>3번:나는M피아(BOT)님 한 표.");
      java.lang.Thread.sleep(2000);
      replier.reply("🛎[튜토리봇]\n투표가 끝났습니다. \n최다득표: <🏅대리>나는M피아(BOT) 님입니다.\n최후의발언하세요(다른분들은 말 자제.),\n최후의 발언 이후 찬반 투표를 진행하여 처형 여부를 결정합니다.");
      java.lang.Thread.sleep(4500);
      replier.reply("3:나는M피아(BOT): 아악 나 마피아 아니야 끄앙\n⚠️TIP.이렇게 음슴체,반말,비속어 사용시\n제재를 받을 수 있습니다.⚠️");
      java.lang.Thread.sleep(1500);
      replier.reply("3:나는M피아(BOT): ㅁ반대해주세요ㅠ\n❓최후의 반론은 꼭 3번 말해주세요.\n 나는M피아님! 한마디 더!");
      java.lang.Thread.sleep(1500);
      replier.reply("3:나는M피아(BOT): ㅁ반대");
      java.lang.Thread.sleep(2000);
      replier.reply("3:나는M피아(BOT): ㅁ반대좀요 제발");
      java.lang.Thread.sleep(2400);
      replier.reply("🛎[튜토리봇]\n최후의 발언이 끝났습니다.\n찬반 투표로 처형 여부를 결정합니다.\n‘ㅁ찬성’ 또는 ‘ㅁ반대’를 갠톡에 쓰세요.");
      java.lang.Thread.sleep(2100);
      replier.reply("⚠️TIP.능력사용및 보류,투표,찬성반대는 모두 갠톡명령어 입니다.");
      java.lang.Thread.sleep(1800);
      replier.reply("{마피아봇 갠톡📍(개인톡) 화면입니다.}");
          }
    if (msg == "ㅁ반대" || msg == "ㅁ 반대" || msg == "ㅁ 찬성") {
      replier.reply("명령어를 제대로입력하세요.\n⚠️고의로 게임을 망치는경우 제재를 받습니다.\nTIP.ㅁ찬성");
    }
    if (msg == "ㅁ찬성") {
      java.lang.Thread.sleep(2200);
      replier.reply("[튜토리갠톡📍봇]\n찬성했습니다.");
      java.lang.Thread.sleep(2800);
      replier.reply("🛎[튜토리봇]\n과반수 이상이 찬성하여 <🏅대리>3번 나는M피아(BOT)님은 처형당했습니다.");
      java.lang.Thread.sleep(2500);
      replier.reply("🛎[튜토리봇]\n마피아팀이 모두 사망했습니다. 시민팀의 승리입니다.");
      java.lang.Thread.sleep(2500);
      replier.reply("🛎직업 및 보상\n<⚙아기>" + sender + "(+11):경찰\n" + "<⚙초등학생>:나는2사(BOT)(+9):의사\n<🏅대리>나는M피아(BOT)(+0):마피아\n<⚙어린이>나는종치인(BOT)(+8):정치인\n<⚙아기>나는간달(BOT)(+7): 건달");
      java.lang.Thread.sleep(3100);
      replier.reply("🚨튜토리얼이 모두 종료되었습니다.\n🚨아래 내용을 꼭 완수하셔야 참가가 가능합니다.");
      java.lang.Thread.sleep(200);
      replier.reply("🍞실제 게임은 개인톡(하단링크)에서 진행합니다.\n이곳(맢봇갠톡)에 입장해주세요" + "\n 또한 튜토리얼은 1인당 1번씩만 이용바랍니다.");
      java.lang.Thread.sleep(500); 
      replier.reply("마피아봇 개인톡:");
      replier.reply(FileStream.read("/sdcard/갠톡링크.txt"));
      java.lang.Thread.sleep(1000);
      replier.reply("🚨위 링크에 들어간뒤 ㅁ등록 을 꼭 치세요.\n위의 링크가 안들어가질경우 ㅁ링크 치세요");
      java.lang.Thread.sleep(2000);
      replier.reply("자유모드(여러가지 명령어확인)를 하려면\nㅁ자유");
      replier.reply("21.01.02수정");
    
    }
    
    if(msg=="ㅁ닉"){
      replier.reply("[튜토리봇] 현재 튜토리봇이 인지하고 있는 닉네임 : \n "+sender);
    }
    
    if(msg=="ㅁ갠톡링크"){
      replier.reply(갠톡링크);
    }
    
    if (msg == "ㅁ자유") {
      replier.reply("/닉,ㅁ기준 인원,ㅁ기준 칭호,ㅁ기준 티어,ㅁ기준 경고\n,ㅁ기준 주의ㅁ상점,ㅁ직업사전,ㅁ사전,ㅁ스탯,ㅁ닉,ㅁ게임머니 \ntip.ㅁ직업사전 경찰\n,tip.ㅁ사전 ㄴㅁ");
    }
    if (msg == "ㅁ스탯") {
      replier.reply("현재 대화방은 튜토리얼입니다.\n당신의 전적은 n전 n승 n패입니다.");
    }
    if (msg == "ㅁ도움말") {
      replier.reply("현재 대화방은 튜토리얼입니다.\n여기말고 마피아봇갠톡에다 ㅁ도움말을 치세요");
    }
    if (msg == "ㅁ게임머니") {
      replier.reply(sender + "님의 게임머니는 n원입니다.\n◇튜토리봇(데모버젼)");
    }
    if (msg == "ㅁ상점") {
      replier.reply("<상점>​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​\n확성기 1회 | 가격: 100 (보유 0)\n고급확성기 1회 | 가격: 200 (보유 0)\n사망원인 설정권 | 가격: 500 (보유 0)\n경고 1회 삭제 | 가격: 1000 (보유 0)\n??? | 가격: 2000 (보유 0)\n※※특별상품※※\n커스텀 칭호:\n데모버젼[신화] (잔고: 3)| 가격: 50000");
      replier.reply("구매하시려면 'ㅁ구매/[상품명]/\n[수량]'으로 구매하실 수 있습니다.");
      replier.reply("단, 칭호 승급!은\n ㅁ구매/칭호 승급!'으로 구매 가능합니다.");
      replier.reply("커스텀 칭호는 'ㅁ구매/커스텀 칭호/칭호명'으로 구매 가능합니다.");
      replier.reply(" 튜토리얼은 데모이기 때문에 구매기능은 미지원입니다.");
}
    if (msg == "/닉") {
      replier.reply("닉네임 규정\n1. 초성 포함 금지\n2. 특문 포함 금지\n3. 직업 포함 금지\n4. 정치 관련 이름 포함 금지\n5. 이미 존재하는 닉네임 금지\n6. 2~8자(한글기준, 영어 1자는 0.5자로 취급)");
    }
    if (msg == "ㅁ출첵" || msg == "ㅁ출석") {
      replier.reply("[튜토리봇] 출첵되었습니다!");
    }
    if (msg == "ㅁ기준 인원") {
      replier.reply("인원수별 직업 개수                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   \n4인 : 마피아1 의사1 특직2(연인,성직제외)\n5인 : 마피아1 의사1 경찰1 특직2(연인,성직제외)\n6인 : 마피아1 보조직업1 의사1 경찰1 특직2\n7인 : 마피아1 보조직업1 의사1 경찰1 특직3\n8인 : 마피아2보조직업1 의사1 경찰1 특직3\n9인 : 마피아2 보조직업1 교주1 의사1 경찰1 특직3\n10인 : 마피아2 보조직업1 교주1 의사1 경찰1 특직4\n11인 : 마피아3 보조직업1 교주1 의사1 경찰1 특직4\n12인 : 마피아3 보조직업1 교주1 의사1 경찰1 특직5");
    }
    if (msg == "ㅁ기준 칭호") {
     replier.reply("칭호 가격 및 혜택​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​"+blank+"\n1. 신생아: 가격 0, 게임머니 1배\n2. 아기: 가격 100, 게임머니 1.2배\n3. 어린이: 가격 200, 게임머니 1.4배\n4. 초등학생: 가격 500, 게임머니 1.5배\n5. 중학생: 가격 1500, 게임머니 2배\n6. 고등학생: 가격 2500, 게임머니 2.5배\n7. 대학생: 가격 3500, 게임머니 3배\n8. 취준생: 가격 5000, 게임머니 4배\n9. 인턴: 가격 12500, 게임머니 6배\n10. 사원: 가격 25000, 게임머니 9배\n11. 대리: 가격 40000, 게임머니 14배\n12. 과장: 가격 60000, 게임머니 25배\n13. 차장: 가격 110000, 게임머니 50배\n14. 부장: 가격 220000, 게임머니 120배\n15. 이사: 가격 350000, 게임머니 270배\n16. 상무: 가격 700000, 게임머니 600배\n17. 전무: 가격 2500000, 게임머니 1500배\n18. 사장: 가격 10000000, 게임머니 3200배\n19. 부회장: 가격 undefined, 게임머니 0배 (부방용)")
     ;
      //replier.reply("칭호 가격 및 혜택                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    \n1. 이등병: 가격 0, 게임머니 1배\n2. 일등병: 가격 100, 게임머니 1.2배\n3. 상등병: 가격 200, 게임머니 1.4배\n4. 병장: 가격 500, 게임머니 1.5배\n5. 하사: 가격 1500, 게임머니 2배\n6. 중사: 가격 2500, 게임머니 2.5배\n7. 상사: 가격 3500, 게임머니 3배\n8. 소위: 가격 5000, 게임머니 4배\n9. 중위: 가격 12500, 게임머니 6배\n10. 대위: 가격 25000, 게임머니 9배\n11. 소령: 가격 40000, 게임머니 14배\n12. 중령: 가격 60000, 게임머니 25배\n13. 대령: 가격 110000, 게임머니 50배\n14. 소장: 가격 220000, 게임머니 120배\n15. 중장: 가격 350000, 게임머니 270배\n16. 대장: 가격 700000, 게임머니 600배\n17. 국가원수: 가격 0, 게임머니 0배 (부방용)");
    }
    
    if (msg == "ㅁ기준 경고" || msg == "ㅁ기준 주의") {
      replier.reply("주의 및 경고 기준" + blank + "\n\n\nㅁ신고::닉네임::사유로 신고할 수 있습니다.\n\n강퇴\n- 공지에 댓글\n- 관리자 사칭\n- 홍보\n- 마피아봇 비하\n- 성드립, 성비하발언\n- 의도적인 노체 사용\n- 테러 행위 및 고의적 도배\n- 타 유저 사칭\n- 욕설, 비속어\n- 관리자 지시 불이행\n\n경고\n- 남이 불쾌한 채팅\n- 마피아봇 갠톡에 보이스톡/페이스톡 거는 행동\n- 자신를 믿으라고 무언가를 거는 행동\n- 상대방 비존중\n- 게임 진행방해/지연\n- 분쟁 유도 및 분쟁\n- 마피아봇과의 갠톡 내용 캡본/복붙 전송\n- 이유없는 리셋\n\n주의\n- 죽은 후 직공/채팅\n- 과한 친목\n- 지속된 반말\n- 음슴체 사용\n- 공지 미숙지\n- #검색, 임티, 사진, 동영상 전송\n- 허위 신고\n- 게임 중 잠수(주의2번)\n- 무단시작 시\n\n그 외에도 관리자의 재량에 따라 강퇴/경고/주의를 부여할 수 있습니다.");
    }
    if (msg == "ㅁ기준 티어") {
      replier.reply("티어 조건 및 승패 경험치                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    \n1. ⚙: 필요경험치 0, 승리 시 20 증가, 패배 시 0 감소\n2. 🥉: 필요경험치 50, 승리 시 10 증가, 패배 시 5 감소\n3. 🥈: 필요경험치 120, 승리 시 10 증가, 패배 시 10 감소\n4. 🥇: 필요경험치 300, 승리 시 10 증가, 패배 시 15 감소\n5. 💠: 필요경험치 500, 승리 시 8 증가, 패배 시 16 감소\n6. 💎: 필요경험치 700, 승리 시 6 증가, 패배 시 20 감소\n7. ⚔: 필요경험치 1000, 승리 시 4 증가, 패배 시 20 감소\n8. ⚜: 필요경험치 undefined, 승리 시 0 증가, 패배 시 0 감소 (부방용)");
    }
    if (msg == "ㅁ사전") {
      replier.reply("ex)ㅁ사전 시조\nㅁ사전 출첵");
    }
    if (msg == "ㅁ사전 출첵" || msg == "ㅁ사전 ㅊㅊ") {
      replier.reply("[마피아봇]갠톡방 인식이 안될경우, 매일 한 번씩은 갠톡방에 ㅁ도움말등을쳐야 인식이 된다는 의미. 오늘 게임이 처음이라면 갠톡방에 명령어를 보내라는 뜻.");
    }
    if (msg == "ㅁ직업사전") {
      replier.reply("[튜토리봇] 직업사전 리스트 \n[시민팀 중직]\n경찰 의사\n[시민팀 특직]\n연인,정치인\n군인,기자,성직자\n테러리스트,건달\n[마피아팀+맢팀보조]\n마피아\n스파이,마담\n짐승인간,과학자\n[교주 팀(🚨직업 밝히지마세요. \n교주는 단독팀입니다.)]\n교주");
    }
    if (msg == "ㅁ직업사전 의사") {
      replier.reply("[마피아봇]\n의사👩 ⚕️\n특수능력\n=======\n밤마다 ‘ㅁ치료 [번호]’로 선택한 사람이 마피아\n에게 공격받았다면, 대상을 치료한다.\n마피아팀을 모두 제거할 경우, 승리한다.");
    }
    if (msg == "ㅁ직업사전 경찰") {
      replier.reply("[마피아봇]\n경찰👮 ♂️\n특수능력\n=======\n밤마다 ‘ㅁ조사 [번호]’로 선택한 사람이 마피아인지 아닌지를 알 수 있다.\n마피아팀을 모두 제거할 경우, 승리한다.");
    }
    if (msg == "ㅁ직업사전 기자") {
      replier.reply("[마피아봇]\n기자📸\n특수능력\n=======\n(둘째 밤 이후)'ㅁ특종 [번호]'로 다음날 아침 모두에게 대상의 직업이 공개된다(특종을 내고 싶지 않다면 'ㅁ특종 보류'를 써서 다음 밤으로 능력을 미룰 수 있다).\n•한 판 동안 한 번만 사용 가능한 능력•");
    }
    if (msg == "ㅁ직업사전 테러리스트") {
      replier.reply("[마피아봇]\n테러리스트💣\n특수능력\n=======\n마피아에게 공격당했을 때 마피아의 정체를 공개하며 죽는다.\n투표로 죽게 되었을 때 데려갈 사람을 'ㅁ테러 [번호]'를 개인톡에 쳐서 선택한다.");
    }
    if (msg == "ㅁ직업사전 건달") {
      replier.reply("[마피아봇]\n건달🤜\n특수능력\n=======\n밤마다 다음날 낮 'ㅁ협박 [번호]'로 투표를 하지 못하게 할 수 있다. (건달이 죽어도 그 날 동안 발동)\n발동하고 싶지 않은 경우 'ㅁ협박 보류'를 써서 능력을 안 사용할 수 있다.");
    }
    if (msg == "ㅁ직업사전 군인") {
      replier.reply("[마피아봇]\n군인💂 ♀\n특수능력\n=======\n마피아의 공격 한 번에 면역이다(의사의 치료가 우선적용된다).\n마피아팀을 모두 제거할 경우, 승리한다.");
    }
    if (msg == "ㅁ직업사전 성직자") {
      replier.reply("[마피아봇]\n성직자🙏\n특수능력\n=======\n밤에 죽은 사람 한 명을 'ㅁ부활 [숫자]'로 살릴 수 있다(부활을 시키고 싶지 않은 경우 'ㅁ부활 보류'를 써서 다음 밤으로 능력을 미룰 수 있다).\n•한 판 동안 한 번만 사용 가능한 능력•");
    }
    if (msg == "ㅁ직업사전 연인") {
      replier.reply("[마피아봇]\n연인💑\n특수능력\n=======\n밤에 ‘ㅁ밤챗 [메시지]’로 연인끼리 대화할 수 있다.\n연인 두명이 모두 생존하고 있을 때, 연인 한명이 마피아에게 지목당할 경우 다른 연인이 대신 죽게 된다.");
    }
    if (msg == "ㅁ직업사전 정치인") {
      replier.reply("[마피아봇]\n정치인⚖\n특수능력\n=======\n투표로 죽지 않는다.\n정치인의 표는 두 표로 인정된다.\n마피아팀을 모두 제거할 경우, 승리한다.\n\n(두 능력 모두 유혹에 무력화됨)");
    }
    if (msg == "ㅁ사전 완" || msg == "ㅁ사전 ㅇ") {
      replier.reply("[마피아봇]\n이 채팅방에서 유행하는 특수능력 사용완료의 뜻으로 사용되는 문구이다. 명령어는 아니다.");
    }
    if (msg == "ㅁ사전 경크") {
      replier.reply("[마피아봇]\n경찰 크리티컬의 준말. 경찰이 마피아를 찾았음을 뜻한다.");
    }
    if (msg == "ㅁ사전 시조") {
      replier.reply("[마피아봇]\n시체조사의 줄임말로, 경찰이 조사한 사람이 다음날 죽어서 조사한 것이 의미가 없음을 뜻한다.");
    }
    if (msg == "ㅁ사전 믿거군") {
      replier.reply("[마피아봇]\n믿고 거르는 군인의 준말. 마피아가 군인으로 위장하는 경우가 많기 때문에 의심하는 뜻으로 쓰인다.");
    }
    if (msg == "ㅁ사전 퍼경") {
      replier.reply("[마피아봇]\n경찰 퍼스트 블러드의 준말. 첫날 밤에 경찰이 죽었다는 뜻이다.");
    }
    if (msg == "ㅁ사전 경퍼") {
      replier.reply("[마피아봇]\n경찰 퍼스트 블러드의 준말. 첫날 밤에 경찰이 죽었다는 뜻이다.");
    }
    if (msg == "ㅁ사전 퍼블") {
      replier.reply("[마피아봇]\n퍼스트 블러드의 준말. 첫날 밤에 죽는다는 뜻이다.");
    }
    
    if (msg == "ㅁ사전 ㄷㅇ"|| msg =="ㅁ사전 ㅅㅈㄷㅇ") {
      replier.reply("[마피아봇]\n시작 동의 준말. 무단시작시 주의나 경고를 받을 수 있기 때문이다.");
    }
    
    if (msg == "ㅁ사전 ㅈㅎㅇ" || msg == "ㅁ사전 자힐의" || msg == "ㅁ사전 자힐") {
      replier.reply("[마피아봇]\n자힐의. 자신을 치료한 의사라는 뜻이다.");
    }
    if (msg == "ㅁ사전 ㄴㅁ" || msg == "ㅁ사전 노맢") {
      replier.reply("[마피아봇]\n어떤 사람이 마피아가 아니라는 뜻이다.");
    }
    if (msg == "ㅁ직업사전 마피아") {
      replier.reply("[마피아봇]\n마피아👤/👥\n특수능력\n=======\n매번 밤마다 마피아팀과 대화할 수 있다. ('ㅁ밤챗 [메시지]')\n'ㅁ처단 [번호]'로 처단할 사람을 선택한다.(쓰고 싶지 않다면 살아있는 마피아 모두 'ㅁ처단 보류'를 써서 능력을 안 사용할 수 있다.)\n시민팀의 총 표 수보다 마피아팀의 표 수가 많으면 승리한다.");
    }
    if (msg == "ㅁ직업사전 교주") {
      replier.reply("[마피아봇]\n교주🕴\n특수능력\n=======\n홀수 번째 밤마다 한 명씩 'ㅁ포교 [숫자]'로 포교할 수 있다.\n포교한 사람은 무조건 교주팀이 된다.(서로의 존재를 알지 못한다.)\n포교된 사람들과 일방적인 소통을 할 수 있다. ('ㅁ밤챗 [메시지]')\n마피아팀이 모두 죽고 교주가 살아있는 채로 시민팀의 표수보다 교주팀의 표수가 더 많거나 같은 경우, 또는 마피아팀이 모두 죽고 교주는 죽었지만 시민팀을 모두 죽인 경우 승리한다.\n※성직자에게 포교를 시도하면 실패하며 정체를 들키고, 마피아에게 포교를 시도하면 실패하지만 정체를 들키지 않는다.※");
    }
    if (msg == "ㅁ직업사전 스파이") {
      replier.reply("[마피아봇]\n스파이🎭\n특수능력\n=======\n밤마다 한 사람의 직업을 'ㅁ첩보 [숫자]'로 조사할 수 있다.\n마피아를 조사하게 되면 마피아와 접선을 하여 대화할 수 있다. ('ㅁ밤챗 [메시지]')\n※군인을 조사하게 되면 군인에게 정체를 들킴※");
    }
    if (msg == "ㅁ직업사전 과학자") {
      replier.reply("[마피아봇]\n과학자🧪(마피아팀 보조)\n특수능력\n=======\n자신이 죽으면 한 판에 한 번 그 다음날 살아남과 동시에 마피아와 접선하여 대화를 할 수 있다. ('ㅁ밤챗 [메시지]')\n※성직자에 의한 부활은 적용되지 않음※" );
      }
    if (msg == "ㅁ직업사전 마담") {
      replier.reply("[마피아봇]\n마담💄\n특수능력\n=======\n투표한 사람이 밤에 고유능력을 못 쓰게 한다.\n마피아를 투표하게 되면 마피아와 접선을 하여 대화할 수 있다. ('ㅁ밤챗 [메시지]')");
    }
    if (msg == "ㅁ직업사전 짐승인간") {
      replier.reply("[마피아봇]\n짐승인간👹\n특수능력\n=======\n마피아가 짐승인간을 쏘거나 짐승인간이 매일 밤 선택한 사람('ㅁ갈망 [번호]')이 마피아에게 처단당할 경우 마피아와 접선하여 대화를 할 수 있다. ('ㅁ밤챗 [메시지]')\n마피아가 모두 죽으면 의사, 연인, 테러리스트의 능력을 무시하는 처단 능력('ㅁ살육 [번호]')을 사용할 수 있다.");
    }
    if (msg == "작동 중이니") {
      replier.reply("튜토리봇 작동중");
    }
    
    if(msg=="/1"){
    replier.reply("분쟁조정이 시작되었습니다.\n진행자:"+sender+"\n조정진행자,관련인 이외에는 모두 정숙해주세요");
  }
  if(msg=="/2"){
  replier.reply("분쟁조정이 종료되었습니다\n담당자:"+sender+"\n분쟁위원회 방에서 나가주세요");
  }
  if(msg=="/3"){
    replier.reply("정숙 및 예의 갖춰주세요.");
  }
  
  if(msg=="/?"){
  replier.reply("무슨일로 오셨나요?\n미호출자가 아무이유없이 올경우 제재를 받을 수 있습니다.");
  }
  
  if(msg=="/도움말"){
  replier.reply("/1=조정시작\n/2=조정종료\n/3=정숙해주세요,예의갖춰주세요\n/?=들온사유");
  }

    if (msg == "ㅁ사전 ㄱㅈㄱ" || msg == "ㅁ사전 경조결") {
      replier.reply("[마피아봇] \n경찰조사결과(경조결)의 준말.\n경찰이 조사 결과를 어필하라는 뜻.");
    }
    if (msg == "ㅁ등록" || msg == "ㅁ 등록" || msg == " ㅁ등록" || msg == "ㅁ등록 ") {
      replier.reply("[튜토리봇] 현재 대화방이 아닌,\n마피아봇 갠톡에 입력하세요.");
      java.lang.Thread.sleep(1800);
      replier.reply(FileStream.read("/sdcard/갠톡링크.txt"));
    }
    if (msg == "*all") {
      replier.reply("운영자용 로그" + a + blank + a + "맢겜 참가되신 분" + FileStream.read("/sdcard/joingame.txt") + "\n\n투표기능 쓴분" + FileStream.read("/sdcard/listvote.txt") + "\n\nㅁ찬성 쓰신 분" + FileStream.read("/sdcard/list.txt"));
      replier.reply("list" + a + FileStream.read("/sdcard/list.txt"));
      java.lang.Thread.sleep(1800);
      replier.reply("all 리셋 완료!🛠");
      FileStream.remove("/sdcard/list.txt");
      FileStream.remove("/sdcard/listvote.txt");
      FileStream.remove("/sdcard/joingame.txt");
      
    }
    if (msg == "*bat") {
      replier.reply("🛠현재 봇의 배터리는 " + 배터리 + "%" + "입니다");
    }
    if (msg == "ㅁ찬성") {
      FileStream.append("/sdcard/list.txt", "\n" + sender);
    } else if (msg == "*list") {
      replier.reply(FileStream.read("/sdcard/list.txt"));
    }
    if (msg == "*reset" || msg == "*Reset 전체") {
      FileStream.remove("/sdcard/list.txt");
    }
  
    if (msg == "ㅁ투표 3") {
      FileStream.append("/sdcard/listvote.txt", "\n" + sender);
    } else if (msg == "*vote") {
      replier.reply(FileStream.read("/sdcard/listvote.txt"));
    }
    if (msg == "*reset" || msg == "*Reset 전체") {
      FileStream.remove("/sdcard/listvote.txt");
    }
    if (msg == "ㅁ맢겜참가" || msg == "ㅁ맢겜 참가" || msg == "맢겜 참가" || msg == "ㅁ맢겜 참여") {
      FileStream.append("/sdcard/joingame.txt", "\n" + sender);
    } else if (msg == "*join") {
      replier.reply(FileStream.read("/sdcard/joingame.txt"));
    }
    if (msg == "*reset" || msg == "*Reset 전체") {
      FileStream.remove("/sdcard/joingame.txt");
    }
    if (msg == "*help") {
      replier.reply("🛠관리자용명령어)" + blank + "\n*bat-배터리체크\n*list-ㅁ찬성\n*vote-ㅁ조사 3\n*join-ㅁ맢겜참가,ㅁ맢겜 참가,맢겜 참가\n*reset-리셋\n*리로드-리로드합니다.\n*Room 전체,\n*Reset 전체");
      java.lang.Thread.sleep(1000);
      replier.reply("*link::링크=ㅁ링크시 나오는 멘트\nlink::링크=ㅁ찬성할때 나오는링크(리로드시 이건 초기화됨)");
    }
    if (msg == "*reset") {
      replier.reply("🛠관리자용 목록이 리셋되었습니다.");
    }
    if (msg == "*리로드") {
      replier.reply("⚒리로드되었습니다.");
    }
    if (msg.indexOf("*link::") == 0) {
      FileStream.write("/sdcard/갠톡링크.txt", msg.substr(7));
      replier.reply("ㅁ찬성시,ㅁ링크 시 나오는것 모두 설정완료");
    } else if (msg == "ㅁ링크") {
      replier.reply(FileStream.read("/sdcard/갠톡링크.txt"));
    }

  }
  if (msg.trim() == "*bat") {
    var fill = ["알수없음", "충전중", "충전중 아님", "충전완료 후 충전중 아님", "충전 완료"];
    var ifilter = new android.content.IntentFilter(android.content.Intent.ACTION_BATTERY_CHANGED);
    var batteryStatus = Api.getContext().registerReceiver(null, ifilter);
    var battery = batteryStatus.getIntExtra(android.os.BatteryManager.EXTRA_STATUS, -1);
    var voltage = batteryStatus.getIntExtra(android.os.BatteryManager.EXTRA_VOLTAGE, -1);
    var level = batteryStatus.getIntExtra(android.os.BatteryManager.EXTRA_LEVEL, -1);
    var scale = batteryStatus.getIntExtra(android.os.BatteryManager.EXTRA_SCALE, -1);
    var am = Api.getContext().getSystemService(Api.getContext().ACTIVITY_SERVICE);
    var mem = new android.app.ActivityManager.MemoryInfo();
    am.getMemoryInfo(mem);
    var temp = batteryStatus.getIntExtra(android.os.BatteryManager.EXTRA_TEMPERATURE, -1);
    var ms1 = java.lang.System.currentTimeMillis();
    var ms2 = java.lang.System.currentTimeMillis();
    var ps = (((ms2 - ms1) / 1000) + "초");
    replier.reply("전원 : 켜짐\n현재상태 : " + fill[battery - 1] + "\n램 : " + (mem.availMem / mem.totalMem * 100).toFixed(2) + "% 남음\n배터리 : " + Math.round(level / scale * 100) + "%\n온도 : " + Math.round(temp) / 10 + "\xb0C\n전압 : " + voltage + "mv");
  }
}
//
