var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    if(w <= 700){
        document.getElementById("html").style.width = h+"px";
        document.getElementById("html").style.height = w+"px";
    }



var level =1;
var havemoney=100;
var ml=1;
var sp =3;
var bsp = sp;

var pyakedo=0;

var equi_weapon =-1;
var equi_armor =-1;

var deck = [allcard[0],allcard[0],allcard[0],allcard[0],allcard[0],allcard[1],allcard[1],allcard[1],allcard[1]]
for (var i = 0; i < deck.length; i++) {
    g = i ;
    document.getElementById('dece_window_card').innerHTML += '<div class="card" cardtype="'+deck[g][0]+'"><img src="./card/'+ deck[g][0]+'.png" ><p>'+deck[g][8]+'</p><p>'+ deck[g][3]+'</p><p class="result" a='+deck[g][5]+'>'+ eval(deck[g][5])+'</p><div class="card_div"><p>'+ deck[g][1]+'</p><p>'+ deck[g][2]+'</p></div></div>';
};
var cardgetlength = []
for(var i =0;i<allcard.length;i++){
    if(allcard[i][0] < 200){
        cardgetlength.push(allcard[i])
    }
}


var monster_action_kaisuu =[];
var monster_action = [];
var mra=0;
var card_stutas_param=0;
var sabun_deck = [];
var battle_tefuda = [];
var battle_deck = [];
var battle_sp = sp;
var mhp = 0;
var matk = 0;
var mdef = 0;
var drop_money=0;
var havedif = 0;
var mhavedif = 0;
var brum = 0;
var takararum=0;
var before_equi_weapon = 0;
var before_equi_armor = 0;
var second=0
var actioncardcount=0
function backmainmenu(){
        location.assign('./index.php')
}
function status_reload(){
    document.getElementById('level').innerHTML = level+"階";

document.getElementById('battle_sp').innerHTML = "残りSP"+battle_sp;
document.getElementById("scorelevel").setAttribute("value",level);
if(havemoney<0){
    havemoney=0;
}
if(havedif>0){
    document.getElementById('diffence').innerHTML = "守" + havedif;
}
if(havedif==0){
    document.getElementById('diffence').innerHTML ="";
}
document.getElementById('hp_bar').innerHTML = "♥" + bhp +"/"+hp;
document.getElementById('money_bar').innerHTML = havemoney+"円";
document.getElementById('atk_bar').innerHTML = "筋" + atk;
document.getElementById('iq_bar').innerHTML = "知" + iq;
document.getElementById('spd_bar').innerHTML = "俊" + spd;
document.getElementById('luc_bar').innerHTML = "運" + luc;
document.getElementById('sp_bar').innerHTML = "行" + sp;
for(var i=0;i< document.getElementsByClassName('result').length;i++){
card_stutas_param = document.getElementsByClassName('result')[i].getAttribute('a');
if(card_stutas_param == null){
    card_stutas_param =" ";
}
document.getElementsByClassName('result')[i].innerHTML = Math.trunc(eval(card_stutas_param));
}
var sabun_atk = batk - atk;
var sabun_iq = biq - iq;
if(sabun_atk == 0){document.getElementById('sabun_atk_bar').innerHTML =""}
if (sabun_atk > 0){document.getElementById('sabun_atk_bar').innerHTML = "+"+Math.trunc(eval(sabun_atk));}
if (sabun_atk < 0){document.getElementById('sabun_atk_bar').innerHTML = Math.trunc(eval(sabun_atk));}
if(sabun_iq == 0){document.getElementById('sabun_iq_bar').innerHTML =""}
if (sabun_iq > 0){document.getElementById('sabun_iq_bar').innerHTML = "+"+Math.trunc(eval(sabun_iq));}
if (sabun_iq < 0){document.getElementById('sabun_iq_bar').innerHTML = Math.trunc(eval(sabun_iq));}
if(bspd == spd){document.getElementById('sabun_spd_bar').innerHTML =""}else{document.getElementById('sabun_spd_bar').innerHTML = Math.trunc(eval(bspd-spd));} 
if(bsp == sp){document.getElementById('sabun_sp_bar').innerHTML =""}else{document.getElementById('sabun_sp_bar').innerHTML = Math.trunc(eval(bsp-sp));} 
lose();
}
status_reload();

function feedin_animation(){
    document.getElementById("main").innerHTML+=("<div class='feedin_animation'></div>")
    window.setTimeout(function(){
        document.getElementsByClassName("feedin_animation")[0].remove();
    }, 1000);
}
function donttouch(second){
    document.getElementById("donttouch").classList.add("active");
    window.setTimeout(function(){
        document.getElementById("donttouch").classList.remove("active");
    }, second);
}
function start_game(){
    status_reload;
    feedin_animation();
    window.setTimeout(function(){
    document.getElementById("dice").classList.add("hidden");
    document.getElementById("main").setAttribute("class", "normal");
       }, 300);
}

function opendeck(){
    document.getElementById('deck_window').classList.remove('hidden');
    document.getElementById('deck_close').classList.remove('hidden');
}
function closedeck(){
    document.getElementById('deck_window').classList.add('hidden');
    document.getElementById('deck_close').classList.add('hidden');
}

function rundom_message(){
    if (level <= 50) {var rum = Math.floor(Math.random() * (5 + 1 - 1) ) + 1;}
    if (51 <= level && level <= 200) {var rum = Math.floor(Math.random() * (8 + 1 - 6) ) + 6;}
    if (level > 201) {var rum = Math.floor(Math.random() * (13 + 1 - 9) ) + 9;}
    var message = 0;
    if (rum == 1) {message = "同じ廊下が続く。それでも進まなくては。";}
    if (rum == 2) {message = "広いな、歩き疲れた。それでも進まなくては。";}
    if (rum == 3) {message = "帰ったら彼女と結婚するんだ。";}
    if (rum == 4) {message = "とても寒い";}
    if (rum == 5) {message = "故郷のみなは元気だろうか。";}
    if (rum == 6) {message = "どれだけ歩いたことだろうか。";}
    if (rum == 7) {message = "あれ、何でここに来た？";}
    if (rum == 8) {message = "迷いはあれど進まなくてはいけない。";}
    if (rum == 9) {message = "私は確信した、ここは人が来ていい領域ではない。";}
    if (rum == 10) {message = "警告だ。直ちに進め。";}
    if (rum == 11) {message = "虚無";}
    if (rum == 12) {message = "無限に続く廊下、進もう。";}
    if (rum == 13) {message = "アハハ！！楽しいい！！";}
    document.getElementById('normal_message').innerHTML = message;
}

function nextup(){
    donttouch(1500);
    ml=1+((Math.trunc(level/5))*0.1);
    document.getElementById('background').classList.add('go')
    window.setTimeout(function(){
    window.setTimeout(function(){
    }, 700);
    if( (level % 30) == 0 ){
        battle()
    }else{
        let rum = Math.floor(Math.random() * 4) + 1;
        // if (rum >= 2) {ivent()}
        if (rum >= 2) {battle()}
        if (rum == 1) {ivent()}
        document.getElementById('background').classList.remove('go')
        
    }
}, 1000);
}

function normal(){
    document.getElementById("people").style.filter="brightness(1)";
    document.getElementById("people").setAttribute("class", "");
    status_reload();
    level +=1;
    actioncardcount=0
    document.getElementById('level').innerHTML = level+"階";
    feedin_animation();
    rundom_message();
    window.setTimeout(function(){
    document.getElementById("main").setAttribute("class", "normal");
    // ↑クラスをnormalのみにする
   }, 300);
}


function battle(enemy){//初回ターン処理
    document.getElementById("people").setAttribute("class", "");
    document.getElementById("battle_tefuda").classList.remove('hidden');
    mra=0;
    batk = atk;
    biq = iq;
    bspd = spd;
    bsp = sp;
    document.getElementById("monster").classList.remove('down');
    document.getElementById("background").setAttribute("class", "");
    havedif = 0;
    mhavedif = 0;
    sabun_deck = [];
    battle_tefuda = [];
    battle_deck = [];
    battle_sp = sp;
    mhp = 0;
    matk = 0;
    mdef = 0;
    brum = 0;
    document.getElementById('mdiffence').innerHTML = "";
    document.getElementById('diffence').innerHTML = "";
    document.getElementById('battle_sp').innerHTML = "残りSP"+battle_sp;
    feedin_animation();
    window.setTimeout(function(){
    document.getElementById("main").setAttribute("class", "battle");
    // ↑クラスをバトルのみにする
    document.getElementById("background").setAttribute("class", "");
    let battle_background = Math.floor(Math.random() * 9) + 1;
    document.getElementById("background").classList.add("b"+battle_background)
    // ↑戦闘背景処理
    monster_setting(enemy);
    ramdom_monsteraction();

    document.getElementById('entity_hp').innerHTML = "♥" + mhp;
    }, 300);

    battle_deck = deck.concat();
    sabun_deck = deck.concat();

    window.setTimeout(function(){
        for (var i = 0; i < 4; i++) {
            var rum = battle_deck[Math.floor(Math.random()*battle_deck.length)];
            console.log(deck)
            var arrydelete = battle_deck.indexOf(rum);
            if(rum[6]=="senkou"){
                eval(rum[9]);
            }
            if(equi_weapon >= 0){
                if(allweapon[equi_weapon][1]=="憎しみの杖"){
                    if(rum[8]=="呪い"){
                        biq+=2
                    }
                }
            }
            battle_tefuda.push(rum);
            battle_deck.splice(arrydelete,1);
            sabun_deck.splice(arrydelete,1);
            // 重複チェックしながらをデッキから「rum」を手札にカードを収納
            g = i;
            document.getElementById('battle_tefuda').innerHTML += '<div id="c'+g+'"class="card" data-card1="'+ rum[0]+'" data-card2="'+g+'" onclick="cardview('+ rum[0]+','+ g +')"><img id="card'+rum[0]+'" src="./card/'+ rum[0]+'.png"><p>'+rum[8]+'</p><p>'+ rum[3]+'</p><p class="result" a='+rum[5]+'>'+ eval(rum[5])+'</p><div class="card_div"><p>'+ rum[1]+'</p><p>'+ rum[2]+'</p></div></div>';
            $('div[cardtype="'+rum[0]+'"]').eq(0).remove();
            status_reload();
        };
       }, 300);
}
function win(){
    document.getElementById("monster").classList.add('down');
    window.setTimeout(function(){
    batk = atk;
    biq = iq;
    bspd = spd;
    bsp = sp;
    havemoney+=drop_money;
    document.getElementById('dece_window_card').innerHTML = '';
    document.getElementById('battle_tefuda').innerHTML = ''; 
    document.getElementById('monster_patarn').innerHTML = '';
    for (var i = 0; i < deck.length; i++) {
        g = i ;
        document.getElementById('dece_window_card').innerHTML += '<div class="card" cardtype="'+deck[g][0]+'"><img src="./card/'+ deck[g][0]+'.png" ><p>'+deck[g][8]+'</p><p>'+ deck[g][3]+'</p><p class="result" a='+deck[g][5]+'>'+ eval(deck[g][5])+'</p><div class="card_div"><p>'+ deck[g][1]+'</p><p>'+ deck[g][2]+'</p></div></div>';
    };
    takararum = Math.floor(Math.random() * 9) + 1;
    if(takararum <= luc){
        takara();
    }else{
        normal();
    }
    status_reload()
    }, 500);
}
function lose(){
    if(bhp<=0){
    donttouch(1500)
    document.getElementById("main").classList.add('lose_background');  
    window.setTimeout(function(){
        document.getElementById("lose").classList.remove('hidden');    
        window.setTimeout(function(){ 
            document.getElementById("score").innerHTML="SCORE:"+level+"階"; 
            document.getElementById("ranking_input").classList.remove('hidden'); 
        }, 2000);  
    }, 1000);
    }
}
var setsecond = 0;
function tarnend(){//ターン終了時、モンスターの行動パターン);}
    actioncardcount=0
    psekika = false;
    if (document.querySelector('div[style="transform: translate(0%, -5%);"]') == null){
    } else {
        let cardnum = document.querySelector('div[style="transform: translate(0%, -5%);"]').dataset.card1;
        let cardi = document.querySelector('div[style="transform: translate(0%, -5%);"]').dataset.card2;
        document.querySelector('div[style="transform: translate(0%, -5%);"]').setAttribute("onclick","cardview("+cardnum+","+cardi+")");
        document.querySelector('div[style="transform: translate(0%, -5%);"]').style.transform = "translate(0%,0%)";
    } 
    
    monster_action_kaisuu = 0;
    setsecond=0;
    document.getElementById("tarnend").classList.add('hidden');
    document.getElementById("donttouch").classList.add('active');
    document.getElementById("battle_tefuda").classList.add('hidden');
    document.getElementById("tarneffect").classList.add('enemy');
    document.getElementById('tarneffect').innerHTML = 'EnemyTarn';
    window.setTimeout(function(){
    document.getElementById("tarneffect").classList.remove('enemy');
    document.getElementById('tarneffect').innerHTML = '';
    }, 1200);

    monster_action_kaisuu = monster_action.concat();
    let timer_id = setInterval((function(){
        if(monster_action_kaisuu.length > 0){
            document.getElementById('monster_patarn').firstElementChild.classList.add('hidden');
            window.setTimeout(function(){
            eval(monster_action_kaisuu[0]);
            monster_action_kaisuu.splice(0,1);
            document.getElementById('monster_patarn').firstElementChild.remove();
        }, 200);
            
        }if(monster_action_kaisuu.length == 0){
            window.setTimeout(function(){
                tarnstart();
                clearInterval(timer_id);
            }, 200);
        }
    }), 1000);
    
    

}


function tarnstart(){//ターン開始時
    if(equi_armor >= 0){
        if(allarmor[equi_armor][1]=="再生の鎧"){
            bhp+=hp/10
        }
    }
    if(equi_weapon >= 0){
        if(allweapon[equi_weapon][1]=="深紅の双刀"){
            damagedrow(1);
        }
        if(allweapon[equi_weapon][1]=="速読の魔導書"){
            skilldrow(1);
        }
    }
    
    if(pyakedo>1){
        pyakedo=Math.trunc(pyakedo/2);
        document.getElementById('yakedo').innerHTML = "焼"+pyakedo;
        if(pyakedo<=1){
            pyakedo=0;
            document.getElementById('yakedo').innerHTML = "";}
    }else{
        myaked=0;
        document.getElementById('yakedo').innerHTML = "";
    }
    // ターンアニメーション処理
    if(!psekika){
        battle_sp = sp;
    }
    document.getElementById('battle_sp').innerHTML = "残りSP"+battle_sp;
    document.getElementById("battle_tefuda").classList.remove('hidden');
    document.getElementById("tarneffect").classList.add('your');
    document.getElementById('tarneffect').innerHTML = 'YourTarn';
    window.setTimeout(function(){
        document.getElementById("tarnend").classList.remove('hidden');
        document.getElementById("tarneffect").classList.remove('your');
        document.getElementById('tarneffect').innerHTML = '';
        document.getElementById("donttouch").classList.remove('active');
    }, 1200);

    ramdom_monsteraction();
    while(battle_tefuda.length<4) {
        if(battle_deck.length){
            var rum = battle_deck[Math.floor(Math.random()*battle_deck.length)];
            var arrydelete = battle_deck.indexOf(rum);
            if(rum[6]=="senkou"){
                eval(rum[9]);
            }
            if(equi_weapon >= 0){
                if(allweapon[equi_weapon][1]=="憎しみの杖"){
                    if(rum[8]=="呪い"){
                        biq+=2
                    }
               }
            }
            battle_tefuda.push(rum);
            battle_deck.splice(arrydelete,1);
            sabun_deck.splice(arrydelete,1);
            // 重複チェックしながらをデッキから「rum」を手札にカードを収納
            document.getElementById('battle_tefuda').innerHTML += '<div id="c9" class="card" data-card1="'+ rum[0]+'" data-card2="9" onclick="cardview('+ rum[0]+','+9+')"><img id="card'+rum[0]+'" src="./card/'+ rum[0]+'.png"><p>'+rum[8]+'</p><p>'+ rum[3]+'</p><p class="result" a='+rum[5]+'>'+ eval(rum[5])+'</p><div class="card_div"><p>'+ rum[1]+'</p><p>'+ rum[2]+'</p></div></div>';
            $('div[cardtype='+rum[0]+']').eq(0).remove();
        //最大4枚までカードを配り属性値を再生成
    }else{
        for (var i = 0; i < sabun_deck.length; i++) {
            g = i;
            document.getElementById('dece_window_card').innerHTML += '<div class="card" cardtype="'+sabun_deck[g][0]+'"><img src="./card/'+ sabun_deck[g][0]+'.png" ><p>'+sabun_deck[g][8]+'</p><p>'+ sabun_deck[g][3]+'</p><p class="result" a='+sabun_deck[g][5]+'>'+ eval(sabun_deck[g][5])+'</p><div class="card_div"><p>'+ sabun_deck[g][1]+'</p><p>'+ sabun_deck[g][2]+'</p></div></div>';
        };
        battle_deck = sabun_deck.concat();
    }}
    for(var i = 0;i < document.getElementById('battle_tefuda').getElementsByClassName("card").length;i++){
        var tefuda0func0 = document.getElementById('battle_tefuda').children[i].getAttribute('onclick');
        var tefuda0func1 = tefuda0func0.slice( 9, -3 ) ;
        let tefuda0 = {"id":"c"+i,"data-card2":i,"onclick":"cardview("+tefuda0func1+","+i+")"} 
        for(let z of Object.entries(tefuda0)) {
            document.getElementById('battle_tefuda').children[i].setAttribute(z[0],z[1]);
        };
    }
    status_reload();
    dragonshild = false;
}
var bosscount=1;
function monster_setting(enemy){//モンスターのパラメーター設定
    if(enemy){
        brum = enemy;
    }else if((level%30)==0) {
        brum = 100+bosscount;
        bosscount++;
        console.log(bosscount)
        if(bosscount==8){
            bosscount=1;
        }
    }else if(level <= 29) {brum = Math.floor(Math.random() * (5 + 1 - 1) ) + 1;
    }else if(31 <= level && level <= 59) {brum = Math.floor(Math.random() * (10 + 1 - 6) ) + 6;
    }else if(61 <= level && level <= 89) {brum = Math.floor(Math.random() * (15 + 1 - 9) ) + 11
    }else if(level >= 91) {brum = Math.floor(Math.random() * (22 + 1 - 16) ) + 16;}

    console.log(brum)
    if (brum == 1) {document.getElementById("monster").setAttribute("class", "m1");//スライム
    mhp=Math.trunc(10*ml);matk=Math.trunc(3*ml);mdef=Math.trunc(5*ml);drop_money=Math.trunc(8*ml)}
    if (brum == 2) {document.getElementById("monster").setAttribute("class", "m2");//スケルトン
    mhp=Math.trunc(20*ml);matk=Math.trunc(1*ml);mdef=Math.trunc(3*ml);drop_money=Math.trunc(15*ml)}
    if (brum == 3) {document.getElementById("monster").setAttribute("class", "m3");//芋虫
    mhp=Math.trunc(13*ml);matk=Math.trunc(4*ml);mdef=Math.trunc(4*ml);drop_money=Math.trunc(10*ml)}
    if (brum == 4) {document.getElementById("monster").setAttribute("class", "m4");//ヘドロスライム
    mhp=Math.trunc(10*ml);matk=Math.trunc(4*ml);mdef=Math.trunc(5*ml);drop_money=Math.trunc(8*ml)}
    if (brum == 5) {document.getElementById("monster").setAttribute("class", "m5");//キノコ
    mhp=Math.trunc(15*ml);matk=Math.trunc(3*ml);mdef=Math.trunc(4*ml);drop_money=Math.trunc(7*ml)}

    if (brum == 6) {document.getElementById("monster").setAttribute("class", "m6");//ゲイザー
    mhp=Math.trunc(25*ml);matk=Math.trunc(7*ml);mdef=Math.trunc(4*ml);drop_money=Math.trunc(7*ml)}
    if (brum == 7) {document.getElementById("monster").setAttribute("class", "m7");//ゴブリン魔術師
    mhp=Math.trunc(17*ml);matk=Math.trunc(4*ml);mdef=Math.trunc(5*ml);drop_money=Math.trunc(7*ml)}
    if (brum == 8) {document.getElementById("monster").setAttribute("class", "m8");//一つ目
    mhp=Math.trunc(18*ml);matk=Math.trunc(4*ml);mdef=Math.trunc(2*ml);drop_money=Math.trunc(7*ml)}
    if (brum == 9) {document.getElementById("monster").setAttribute("class", "m9");//浮遊ガイコツ
    mhp=Math.trunc(16*ml);matk=Math.trunc(4*ml);mdef=Math.trunc(6*ml);drop_money=Math.trunc(7*ml)}
    if (brum == 10) {document.getElementById("monster").setAttribute("class", "m10");//トレント
    mhp=Math.trunc(20*ml);matk=Math.trunc(6*ml);mdef=Math.trunc(8*ml);drop_money=Math.trunc(7*ml)}

    if (brum == 11) {document.getElementById("monster").setAttribute("class", "m11");//巨大みみず
    mhp=Math.trunc(20*ml);matk=Math.trunc(5*ml);mdef=Math.trunc(5*ml);drop_money=Math.trunc(7*ml)}
    if (brum == 12) {document.getElementById("monster").setAttribute("class", "m12");//双頭ウルフ
    mhp=Math.trunc(20*ml);matk=Math.trunc(7*ml);mdef=Math.trunc(7*ml);drop_money=Math.trunc(7*ml)}
    if (brum == 13) {document.getElementById("monster").setAttribute("class", "m13");//リザードマン
    mhp=Math.trunc(20*ml);matk=Math.trunc(6*ml);mdef=Math.trunc(6*ml);drop_money=Math.trunc(7*ml)}
    if (brum == 14) {document.getElementById("monster").setAttribute("class", "m14");//狼男
    mhp=Math.trunc(20*ml);matk=Math.trunc(7*ml);mdef=Math.trunc(7*ml);drop_money=Math.trunc(7*ml)}
    if (brum == 15) {document.getElementById("monster").setAttribute("class", "m15");//ミノタウロス
    mhp=Math.trunc(20*ml);matk=Math.trunc(8*ml);mdef=Math.trunc(6*ml);drop_money=Math.trunc(7*ml)}

    if (brum == 16) {document.getElementById("monster").setAttribute("class", "m16");//ゴーレム
    mhp=Math.trunc(30*ml);matk=Math.trunc(4*ml);mdef=Math.trunc(7*ml);drop_money=Math.trunc(10*ml)}
    if (brum == 17) {document.getElementById("monster").setAttribute("class", "m17");//荒くれもの
    mhp=Math.trunc(20*ml);matk=Math.trunc(7*ml);mdef=Math.trunc(4*ml);drop_money=Math.trunc(7*ml)}
    if (brum == 18) {document.getElementById("monster").setAttribute("class", "m18");//女エルフ
    mhp=Math.trunc(20*ml);matk=Math.trunc(7*ml);mdef=Math.trunc(4*ml);drop_money=Math.trunc(7*ml)}
    if (brum == 19) {document.getElementById("monster").setAttribute("class", "m19");//ドラゴン
    mhp=Math.trunc(20*ml);matk=Math.trunc(7*ml);mdef=Math.trunc(7*ml);drop_money=Math.trunc(7*ml)}
    if (brum == 20) {document.getElementById("monster").setAttribute("class", "m20");//紫騎士
    mhp=Math.trunc(20*ml);matk=Math.trunc(7*ml);mdef=Math.trunc(3*ml);drop_money=Math.trunc(7*ml)}
    if (brum == 21) {document.getElementById("monster").setAttribute("class", "m21");//黒いやつ
    mhp=Math.trunc(20*ml);matk=Math.trunc(7*ml);mdef=Math.trunc(6*ml);drop_money=Math.trunc(7*ml)}
    if (brum == 22) {document.getElementById("monster").setAttribute("class", "m22");//パンプキン
    mhp=Math.trunc(20*ml);matk=Math.trunc(7*ml);mdef=Math.trunc(8*ml);drop_money=Math.trunc(7*ml)}

    if (brum == 101) {document.getElementById("monster").setAttribute("class", "boss1");//オオカミ剣士
    mhp=Math.trunc(60*ml);matk=Math.trunc(6*ml);mdef=Math.trunc(6*ml);drop_money=Math.trunc(200)}
    if (brum == 102) {document.getElementById("monster").setAttribute("class", "boss2");//メデューサ
    mhp=Math.trunc(100*ml);matk=Math.trunc(10*ml);mdef=Math.trunc(10*ml);drop_money=Math.trunc(200)}
    if (brum == 103) {document.getElementById("monster").setAttribute("class", "boss3");//二つ頭悪魔
    mhp=Math.trunc(100*ml);matk=Math.trunc(10*ml);mdef=Math.trunc(10*ml);drop_money=Math.trunc(200)}
    if (brum == 104) {document.getElementById("monster").setAttribute("class", "boss4");//混沌キメラ
    mhp=Math.trunc(100*ml);matk=Math.trunc(10*ml);mdef=Math.trunc(10*ml);drop_money=Math.trunc(200)}
    if (brum == 105) {document.getElementById("monster").setAttribute("class", "boss4");//ガーゴイル
    mhp=Math.trunc(100*ml);matk=Math.trunc(10*ml);mdef=Math.trunc(10*ml);drop_money=Math.trunc(200)}
    if (brum == 106) {document.getElementById("monster").setAttribute("class", "boss4");//オークキング
    mhp=Math.trunc(100*ml);matk=Math.trunc(10*ml);mdef=Math.trunc(10*ml);drop_money=Math.trunc(200)}
    if (brum == 107) {document.getElementById("monster").setAttribute("class", "boss4");//ファイアーマン
    mhp=Math.trunc(100*ml);matk=Math.trunc(10*ml);mdef=Math.trunc(10*ml);drop_money=Math.trunc(200)}

    if (brum == 201) {document.getElementById("monster").setAttribute("class", "sanzoku");//山賊
    mhp=Math.trunc(20*ml);matk=Math.trunc(10*ml);mdef=Math.trunc(10*ml);drop_money=Math.trunc(50*ml)}
    if (brum == 202) {document.getElementById("monster").setAttribute("class", "bear");//熊
    mhp=Math.trunc(15*ml);matk=Math.trunc(15*ml);mdef=Math.trunc(0*ml);drop_money=Math.trunc(0*ml)}
}
function ramdom_monsteraction(){//モンスター行動パターン
    monster_action = [];
    if (brum == 1) {//スライム
        if (mra== 0){monster_action = ["mtopdamage(Math.trunc(matk))"];
            document.getElementById('monster_patarn').innerHTML += '<div class="atk">'+Math.trunc(matk)+'<p>攻撃しようとしている。</p></div>';
        }
        if (mra== 1){monster_action = ['mdifence(Math.trunc(mdef))']
           document.getElementById('monster_patarn').innerHTML += '<div class="def">'+Math.trunc(mdef)+'<p>防御しようとしている。</p></div>';
        }
        if (mra== 2){monster_action = ["mtopdamage(Math.trunc(matk*1.5))"]
           document.getElementById('monster_patarn').innerHTML += '<div class="atk">'+Math.trunc(matk*1.5)+'<p>攻撃しようとしている。</p></div>';
        }
        mra++;
        if(mra>=3){mra=0}
    }
    if (brum == 2) {//スケルトン
        if (mra== 0||mra== 1){monster_action = ["mtopslash(Math.trunc(matk))"];
            document.getElementById('monster_patarn').innerHTML += '<div class="slash">'+Math.trunc(matk)+'<p>貫通攻撃しようとしている。</p></div>';
        }
        if (mra== 2){monster_action = ['matkup(Math.trunc(1*ml))']
           document.getElementById('monster_patarn').innerHTML += '<div class="atkup">'+Math.trunc(1*ml)+'<p>力を溜めようとしている</p></div>';
        }
        mra++;
        if(mra>=3){mra=0}
    }
    if (brum == 3) {//芋虫
        if (mra== 0){monster_action = ['mdifence(Math.trunc(mdef))']
           document.getElementById('monster_patarn').innerHTML += '<div class="def">'+Math.trunc(mdef)+'<p>防御しようとしている。</p></div>';
        }
        if (mra== 1){monster_action = ['mdifence(Math.trunc(mdef))']
           document.getElementById('monster_patarn').innerHTML += '<div class="def">'+Math.trunc(mdef)+'<p>防御しようとしている。</p></div>';
        }
        if (mra== 2){monster_action = ["mtopdamage(Math.trunc(matk*2))"]
           document.getElementById('monster_patarn').innerHTML += '<div class="atk">'+Math.trunc(matk*1.5)+'<p>攻撃しようとしている。</p></div>';
        }
        mra++;
        if(mra>=3){mra=0}
    }
    if (brum == 4) {//ヘドロ
        if (mra== 0){monster_action = ["mtopdamage(Math.trunc(matk))"];
            document.getElementById('monster_patarn').innerHTML += '<div class="atk">'+Math.trunc(matk)+'<p>攻撃しようとしている。</p></divp>';
        }
        if (mra== 1){monster_action = ['mheal(Math.trunc(4*ml))']
           document.getElementById('monster_patarn').innerHTML += '<div class="heal">'+Math.trunc(4*ml)+'<p>回復しようとしている。</p></div>';
        }
        if (mra== 2){monster_action = ["mtopdamage(Math.trunc(matk))","mtopdamage(Math.trunc(matk*0.75))"]
           document.getElementById('monster_patarn').innerHTML += '<div class="atk">'+Math.trunc(matk)+'<p>攻撃しようとしている。</p></div>';
           document.getElementById('monster_patarn').innerHTML += '<div class="atk">'+Math.trunc(matk*0.75)+'<p>攻撃しようとしている。</p></div>';
        }
        mra++;
        if(mra>=3){mra=0}
    }
    if (brum == 5) {//キノコ
        if (mra== 0){monster_action = ["mheal(Math.trunc(4*ml))"];
            document.getElementById('monster_patarn').innerHTML += '<div class="heal">'+Math.trunc(4*ml)+'<p>回復しようとしている。</p></div>';
        }
        if (mra== 1){monster_action = ['mdifence(Math.trunc(mdef))']
           document.getElementById('monster_patarn').innerHTML += '<div class="def">'+Math.trunc(mdef)+'<p>防御しようとしている。</p></div>';
        }
        if (mra== 2){monster_action = ["mtopdamage(Math.trunc(matk))"]
           document.getElementById('monster_patarn').innerHTML += '<div class="atk">'+Math.trunc(matk)+'<p>攻撃しようとしている。</p></div>';
        }
        mra++;
        if(mra>=3){mra=0}
    }
    if (brum == 6) {//ゲイザー
        if (mra== 0){monster_action = ["mtopdamage(Math.trunc(matk))"]
           document.getElementById('monster_patarn').innerHTML += '<div class="atk">'+Math.trunc(matk)+'<p>攻撃しようとしている。</p></div>';
        }
        if (mra== 1){monster_action = ['mdifence(Math.trunc(mdef))']
           document.getElementById('monster_patarn').innerHTML += '<div class="def">'+Math.trunc(mdef)+'<p>防御しようとしている。</p></div>';
        }
        if (mra== 2){monster_action = ["mtopdamage(Math.trunc(matk))"]
           document.getElementById('monster_patarn').innerHTML += '<div class="atk">'+Math.trunc(matk)+'<p>攻撃しようとしている。</p></div>';
        }
        mra++;
        if(mra>=3){mra=0}
    }
    if (brum == 7) {//ゴブリン魔術師
        if (mra== 0){monster_action = ["mheal(Math.trunc(4*ml))"];
            document.getElementById('monster_patarn').innerHTML += '<div class="heal">'+Math.trunc(4*ml)+'<p>回復しようとしている。</p></div>';
        }
        if (mra== 1){monster_action = ["mfire(Math.trunc(matk*2))"];
           document.getElementById('monster_patarn').innerHTML += '<div class="fire">'+Math.trunc(matk+2)+'<p>火をつけようとしている</p></div>';
        }
        if (mra== 2){monster_action = ["noroi(4)"]
           document.getElementById('monster_patarn').innerHTML += '<div class="special">　<p>呪いで戦意喪失させようとしている。</p></div>';
        }
        mra++;
        if(mra>=3){mra=0}
    }
    if (brum == 8) {//一つ目
        if (mra== 0){monster_action = ["mdrain(Math.trunc(matk/1.8))"]
            document.getElementById('monster_patarn').innerHTML += '<div class="drain">'+Math.trunc(matk/1.8)+'<p>吸血しようとしている</p></div>';
        }
        if (mra== 1){monster_action = ['mdifence(Math.trunc(mdef))']
           document.getElementById('monster_patarn').innerHTML += '<div class="def">'+Math.trunc(mdef)+'<p>防御しようとしている。</p></div>';
        }
        if (mra== 2){monster_action = ["mtopdamage(Math.trunc(matk))"]
           document.getElementById('monster_patarn').innerHTML += '<div class="atk">'+Math.trunc(matk)+'<p>攻撃しようとしている。</p></div>';
        }
        mra++;
        if(mra>=3){mra=0}
    }
    if (brum == 9) {//浮遊ガイコツ
        if (mra== 0){monster_action=["matkdown(Math.trunc(1*ml))"];
            document.getElementById('monster_patarn').innerHTML += '<div class="special">'+Math.trunc(1*ml)+'<p>筋力を下げようとしている。</p></div>';
        }
        if (mra== 1){monster_action = ['mdifence(Math.trunc(mdef))']
           document.getElementById('monster_patarn').innerHTML += '<div class="def">'+Math.trunc(mdef)+'<p>防御しようとしている。</p></div>';
        }
        if (mra== 2){monster_action = ["mtopdamage(Math.trunc(matk))"]
           document.getElementById('monster_patarn').innerHTML += '<div class="atk">'+Math.trunc(matk)+'<p>攻撃しようとしている。</p></div>';
        }
        mra++;
        if(mra>=3){mra=0}
    }
    if (brum == 10) {//トレント
        if (mra== 0){monster_action = ["mtopdamage(Math.trunc(matk))"]
           document.getElementById('monster_patarn').innerHTML += '<div class="atk">'+Math.trunc(matk)+'<p>攻撃しようとしている。</p></div>';
        }
        if (mra== 1){monster_action = ["mtopdamage(Math.trunc(matk))"]
           document.getElementById('monster_patarn').innerHTML += '<div class="atk">'+Math.trunc(matk)+'<p>攻撃しようとしている。</p></div>';
        }
        if (mra== 2){monster_action = ["mheal(Math.trunc(10*ml))"];
            document.getElementById('monster_patarn').innerHTML += '<div class="heal">'+Math.trunc(10*ml)+'<p>回復しようとしている。</p></div>';
        }
        mra++;
        if(mra>=3){mra=0}
    }
    if (brum == 11) {//巨大ミミズ
        if (mra== 0){monster_action = ["mtopdamage(Math.trunc(matk))",'matkup(Math.trunc(1*ml))'];
            document.getElementById('monster_patarn').innerHTML += '<div class="atk">'+Math.trunc(matk)+'<p>攻撃しようとしている。</p></div>'; 
            document.getElementById('monster_patarn').innerHTML += '<div class="atkup">'+Math.trunc(1*ml)+'<p>力を溜めようとしている</p></div>';
        }
        if (mra== 1){monster_action = ["mtopdamage(Math.trunc(matk))",'matkup(Math.trunc(1*ml))'];
            document.getElementById('monster_patarn').innerHTML += '<div class="atk">'+Math.trunc(matk)+'<p>攻撃しようとしている。</p></div>'; 
            document.getElementById('monster_patarn').innerHTML += '<div class="atkup">'+Math.trunc(1*ml)+'<p>力を溜めようとしている</p></div>';
        }
        if (mra== 2){monster_action = ["mtopslash(Math.trunc(matk/1.5))"];
            document.getElementById('monster_patarn').innerHTML += '<div class="slash">'+Math.trunc(matk/1.5)+'<p>貫通攻撃しようとしている。</p></div>';
        }
        mra++;
        if(mra>=3){mra=0}
    }
    if (brum == 12) {//双頭ウルフ
        if (mra== 0){monster_action = ["mtopdamage(Math.trunc(matk))"]
           document.getElementById('monster_patarn').innerHTML += '<div class="atk">'+Math.trunc(matk)+'<p>攻撃しようとしている。</p></div>';
        }
        if (mra== 1){monster_action = ["mtopdamage(Math.trunc(matk))"]
           document.getElementById('monster_patarn').innerHTML += '<div class="atk">'+Math.trunc(matk)+'<p>攻撃しようとしている。</p></div>';
        }
        if (mra== 2){monster_action = ["mtopdamage(Math.trunc(matk))","mtopdamage(Math.trunc(matk))"]
           document.getElementById('monster_patarn').innerHTML += '<div class="atk">'+Math.trunc(matk)+'<p>攻撃しようとしている。</p></div>';
           document.getElementById('monster_patarn').innerHTML += '<div class="atk">'+Math.trunc(matk)+'<p>攻撃しようとしている。</p></div>';
        }
        mra++;
        if(mra>=3){mra=0}
    }
    if (brum == 13) {//リザードマン
        if (mra== 0||mra== 1){monster_action = ["mtopslash(Math.trunc(matk))"];
            document.getElementById('monster_patarn').innerHTML += '<div class="slash">'+Math.trunc(matk)+'<p>貫通攻撃しようとしている。</p></div>';
        }
        if (mra== 2){monster_action = ['matkup(Math.trunc(1*ml))']
           document.getElementById('monster_patarn').innerHTML += '<div class="atkup">'+Math.trunc(1*ml)+'<p>力を溜めようとしている</p></div>';
        }
        if (mhp<= 20){monster_action.push("mheal(Math.trunc(20))");
        document.getElementById('monster_patarn').innerHTML += '<div class="heal">'+Math.trunc(20)+'<p>回復しようとしている。</p></div>';
        }
        mra++;
        if(mra>=3){mra=0}
    }
    if (brum == 14) {//狼男
        if (mra== 0){monster_action = ["mtopdamage(Math.trunc(matk))","mdifence(Math.trunc(mdef))"]
           document.getElementById('monster_patarn').innerHTML += '<div class="atk">'+Math.trunc(matk)+'<p>攻撃しようとしている。</p></div>';
           document.getElementById('monster_patarn').innerHTML += '<div class="def">'+Math.trunc(mdef)+'<p>防御しようとしている。</p></div>';
        }
        if (mra== 1){monster_action = ['mdifence(Math.trunc(mdef))']
           document.getElementById('monster_patarn').innerHTML += '<div class="def">'+Math.trunc(mdef)+'<p>防御しようとしている。</p></div>';
        }
        if (mra== 2){monster_action = ["mtopdamage(Math.trunc(matk))","mheal(Math.trunc(4*ml))"]
           document.getElementById('monster_patarn').innerHTML += '<div class="atk">'+Math.trunc(matk)+'<p>攻撃しようとしている。</p></div>';
           document.getElementById('monster_patarn').innerHTML += '<div class="heal">'+Math.trunc(4*ml)+'<p>回復しようとしている。</p></div>';
        }
        mra++;
        if(mra>=3){mra=0}
    }
    if (brum == 15) {//ミノタウロス
        if (mra== 0){monster_action = ["mtopdamage(Math.trunc(matk))"]
           document.getElementById('monster_patarn').innerHTML += '<div class="atk">'+Math.trunc(matk)+'<p>攻撃しようとしている。</p></div>';
        }
        if (mra== 1){monster_action = ["mtopdamage(Math.trunc(matk))"]
           document.getElementById('monster_patarn').innerHTML += '<div class="atk">'+Math.trunc(matk)+'<p>攻撃しようとしている。</p></div>';
        }
        if (mra== 2){monster_action = ["mtopdamage(Math.trunc(matk))","noroi(3)"]
           document.getElementById('monster_patarn').innerHTML += '<div class="atk">'+Math.trunc(matk)+'<p>攻撃しようとしている。</p></div>';
           document.getElementById('monster_patarn').innerHTML += '<div class="special">　<p>呪いで戦意喪失させようとしている。</p></div>';
        }
        mra++;
        if(mra>=3){mra=0}
    }
    if (brum == 16) {//ゴーレム
        if (mra== 0){monster_action = ['mdifence(Math.trunc(mdef*2))']
           document.getElementById('monster_patarn').innerHTML += '<div class="def">'+Math.trunc(mdef)+'<p>防御しようとしている。</p></div>';
        }
        if (mra== 1){monster_action = []
        }
        if (mra== 2){monster_action = []
        }
        if (mra== 3){monster_action = ["mtopdamage(Math.trunc(matk))","mdefup(Math.trunc(mdef))"]
           document.getElementById('monster_patarn').innerHTML += '<div class="atk">'+Math.trunc(matk)+'<p>攻撃しようとしている。</p></div>';
           document.getElementById('monster_patarn').innerHTML += '<div class="defup">'+Math.trunc(mdef)+'<p>防御力を上げようとしている。</p></div>';
        }
        mra++;
        if(mra>=4){mra=0}
    }
    if (brum == 17) {//荒くれもの
        if (mra== 0){monster_action = ["mtopdamage(Math.trunc(matk))"]
           document.getElementById('monster_patarn').innerHTML += '<div class="atk">'+Math.trunc(matk)+'<p>攻撃しようとしている。</p></div>';
        }
        if (mra== 1){monster_action = ["mtopdamage(Math.trunc(matk))"]
           document.getElementById('monster_patarn').innerHTML += '<div class="atk">'+Math.trunc(matk)+'<p>攻撃しようとしている。</p></div>';
        }
        if (mra== 2){monster_action = ["mtopdamage(Math.trunc(matk))",'matkup(Math.trunc(1*ml))']
           document.getElementById('monster_patarn').innerHTML += '<div class="atk">'+Math.trunc(matk)+'<p>攻撃しようとしている。</p></div>';
           document.getElementById('monster_patarn').innerHTML += '<div class="atkup">'+Math.trunc(1*ml)+'<p>力を溜めようとしている</p></div>';
        }
        if(mhavedif<=0){monster_action.push('mdifence(Math.trunc(mdef))')
            document.getElementById('monster_patarn').innerHTML += '<div class="def">'+Math.trunc(mdef)+'<p>防御しようとしている。</p></div>';
        }
        if (mhp<= 20){monster_action.push("mheal(Math.trunc(20))");
        document.getElementById('monster_patarn').innerHTML += '<div class="heal">'+Math.trunc(20)+'<p>回復しようとしている。</p></div>';
        }
        mra++;
        if(mra>=3){mra=0}
    }
    if (brum == 18) {//女エルフ
        if (mra== 0){monster_action = ["mtopdamage(Math.trunc(matk/2))","mtopdamage(Math.trunc(matk/2))","mheal(Math.trunc(4*ml))"]
           document.getElementById('monster_patarn').innerHTML += '<div class="atk">'+Math.trunc(matk/2)+'<p>攻撃しようとしている。</p></div>';
           document.getElementById('monster_patarn').innerHTML += '<div class="atk">'+Math.trunc(matk/2)+'<p>攻撃しようとしている。</p></div>';
           document.getElementById('monster_patarn').innerHTML += '<div class="heal">'+Math.trunc(4*ml)+'<p>回復しようとしている。</p></div>';
        }
        if (mra== 1){monster_action = ['mdifence(Math.trunc(mdef))',"mheal(Math.trunc(4*ml))"]
           document.getElementById('monster_patarn').innerHTML += '<div class="def">'+Math.trunc(mdef)+'<p>防御しようとしている。</p></div>';
           document.getElementById('monster_patarn').innerHTML += '<div class="heal">'+Math.trunc(4*ml)+'<p>回復しようとしている。</p></div>';
        }
        if (mra== 2){monster_action = ["mtopdamage(Math.trunc(matk))","mheal(Math.trunc(4*ml))"]
           document.getElementById('monster_patarn').innerHTML += '<div class="atk">'+Math.trunc(matk)+'<p>攻撃しようとしている。</p></div>';
           document.getElementById('monster_patarn').innerHTML += '<div class="heal">'+Math.trunc(4*ml)+'<p>回復しようとしている。</p></div>';
        }
        mra++;
        if(mra>=3){mra=0}
    }
    if (brum == 19) {//ドラゴン
        if (mra== 0){monster_action = ["mfire(Math.trunc(matk/2))"];
            document.getElementById('monster_patarn').innerHTML += '<div class="fire">'+Math.trunc(matk/2)+'<p>火をつけようとしている</p></div>';
        }
        if (mra== 1){monster_action = ['mdifence(Math.trunc(mdef))',"mfire(Math.trunc(matk/2))"]
           document.getElementById('monster_patarn').innerHTML += '<div class="def">'+Math.trunc(mdef)+'<p>防御しようとしている。</p></div>';
           document.getElementById('monster_patarn').innerHTML += '<div class="fire">'+Math.trunc(matk/2)+'<p>火をつけようとしている</p></div>';
        }
        if (mra== 2){monster_action = ["mtopdamage(Math.trunc(matk))"]
           document.getElementById('monster_patarn').innerHTML += '<div class="atk">'+Math.trunc(matk)+'<p>攻撃しようとしている。</p></div>';
        }
        mra++;
        if(mra>=3){mra=0}
    }
    if (brum == 20) {//紫騎士

        if (mra== 1||mra== 2||mra== 3){monster_action = ['mdifence(Math.trunc(mdef))','matkup(Math.trunc(2*ml))']
           document.getElementById('monster_patarn').innerHTML += '<div class="def">'+Math.trunc(mdef)+'<p>防御しようとしている。</p></div>';
           document.getElementById('monster_patarn').innerHTML += '<div class="atkup">'+Math.trunc(2*ml)+'<p>力を溜めようとしている</p></div>';
        }
        if (mra== 4){monster_action = ["mtopdamage(Math.trunc(matk))"]
           document.getElementById('monster_patarn').innerHTML += '<div class="atk">'+Math.trunc(matk)+'<p>攻撃しようとしている。</p></div>';
        }
        mra++;
        if(mra>=5){mra=0}
    }
    if (brum == 21) {//黒いやつ
        if (mra== 0){monster_action = ["noroi(4)"]
            document.getElementById('monster_patarn').innerHTML += '<div class="special">　<p>呪いで散漫させようとしている。</p></div>';
        }
        if (mra== 1){monster_action = ["noroi(1)"]
            document.getElementById('monster_patarn').innerHTML += '<div class="special">　<p>呪いで切り傷させようとしている。</p></div>';
        }
        if (mra== 2){monster_action = ["mtopdamage(Math.trunc(matk))"]
           document.getElementById('monster_patarn').innerHTML += '<div class="atk">'+Math.trunc(matk)+'<p>攻撃しようとしている。</p></div>';
        }
        if (mra== 3){monster_action = ["mdrain(Math.trunc(4*ml))"];
            document.getElementById('monster_patarn').innerHTML += '<div class="drain">'+Math.trunc(4*ml)+'<p>吸血しようとしている</p></div>';
        }
        if (mra== 4){monster_action = ["mtopdamage(Math.trunc(matk))"]
           document.getElementById('monster_patarn').innerHTML += '<div class="atk">'+Math.trunc(matk)+'<p>攻撃しようとしている。</p></div>';
        }
        mra++;
        if(mra>=5){mra=0}
    }
    if (brum == 22) {//パンプキン
        if (mra== 0||mra==1|mra==2){monster_action = ["mheal(Math.trunc(4*ml))","noroi(0)"];
            document.getElementById('monster_patarn').innerHTML += '<div class="heal">'+Math.trunc(4*ml)+'<p>回復しようとしている。</p></div>';
            document.getElementById('monster_patarn').innerHTML += '<div class="special">　<p>呪いで骨折させようとしている。</p></div>';
        }
        mra++;
        if(mra>=3){mra=0}
    }

    if (brum == 101) {//オオカミ剣士
        if (mra== 0){monster_action = ["mtopdamage(Math.trunc(matk))",'matkup(Math.trunc(1*ml))']
        document.getElementById('monster_patarn').innerHTML += '<div class="atk">'+Math.trunc(matk)+'<p>攻撃しようとしている。</p></div>';
        document.getElementById('monster_patarn').innerHTML += '<div class="atkup">'+Math.trunc(2)+'<p>力を溜めようとしている</p></div>';
        }
        if (mra== 1){monster_action = ['mdifence(Math.trunc(mdef))']
           document.getElementById('monster_patarn').innerHTML += '<div class="def">'+Math.trunc(mdef)+'<p>防御しようとしている。</p></div>';
        }
        if (mra== 2){monster_action = ["mtopdamage(Math.trunc(matk))"]
           document.getElementById('monster_patarn').innerHTML += '<div class="atk">'+Math.trunc(matk)+'<p>攻撃しようとしている。</p></div>';
        }
        if (mhp<= 20){monster_action.push("mheal(Math.trunc(20))");
        document.getElementById('monster_patarn').innerHTML += '<div class="heal">'+Math.trunc(20)+'<p>回復しようとしている。</p></div>';
        }
        if (havedif>=10){monster_action.push("nodiffence()");
        document.getElementById('monster_patarn').innerHTML += '<div class="special">　<p>防御を無くさせようとしている。</p></div>';
        }
        mra++;
        console.log(monster_action)
        if(mra>=3){mra=0}
    }
    if (brum == 102) {//メデューサ
        if (mra== 0){monster_action = ["sekika()"]
        document.getElementById('monster_patarn').innerHTML += '<div class="special">　<p>石化させようとしている。</p></div>';
        }
        if (mra== 1){monster_action = ['mdifence(Math.trunc(mdef))','mtopdamage(Math.trunc(matk/1.5))']
           document.getElementById('monster_patarn').innerHTML += '<div class="def">'+Math.trunc(mdef)+'<p>防御しようとしている。</p></div>';
           document.getElementById('monster_patarn').innerHTML += '<div class="atk">'+Math.trunc(matk/1.5)+'<p>攻撃しようとしている。</p></div>';
        }
        if (mra== 2){monster_action = ["mtopdamage(Math.trunc(matk))"]
           document.getElementById('monster_patarn').innerHTML += '<div class="atk">'+Math.trunc(matk)+'<p>攻撃しようとしている。</p></div>';
        }
        if (mra== 3){monster_action=("nodiffence()");
        document.getElementById('monster_patarn').innerHTML += '<div class="special">　<p>防御を無くさせようとしている。</p></div>';
        }
        if (mhp<= 20){monster_action.push("mheal(Math.trunc(20))");
        document.getElementById('monster_patarn').innerHTML += '<div class="heal">'+Math.trunc(20)+'<p>回復しようとしている。</p></div>';
        }
        mra++;
        console.log(monster_action)
        if(mra>=4){mra=0}
    }
    if (brum == 103) {//二つ目悪魔
        if (mra== 0){monster_action = ["mtopdamage(Math.trunc(matk))",'matkup(Math.trunc(1*ml))']
        document.getElementById('monster_patarn').innerHTML += '<div class="atk">'+Math.trunc(matk)+'<p>攻撃しようとしている。</p></div>';
        document.getElementById('monster_patarn').innerHTML += '<div class="atkup">'+Math.trunc(2)+'<p>力を溜めようとしている</p></div>';
        }
        if (mra== 1){monster_action = ['mdifence(Math.trunc(mdef))']
           document.getElementById('monster_patarn').innerHTML += '<div class="def">'+Math.trunc(mdef)+'<p>防御しようとしている。</p></div>';
        }
        if (mra== 2){monster_action = ["mtopdamage(Math.trunc(matk))"]
           document.getElementById('monster_patarn').innerHTML += '<div class="atk">'+Math.trunc(matk)+'<p>攻撃しようとしている。</p></div>';
        }
        if (mhp<= 20){monster_action.push("mheal(Math.trunc(20))");
        document.getElementById('monster_patarn').innerHTML += '<div class="heal">'+Math.trunc(20)+'<p>回復しようとしている。</p></div>';
        }
        if (havedif>=10){monster_action.push("nodiffence()");
        document.getElementById('monster_patarn').innerHTML += '<div class="special">　<p>防御を無くさせようとしている。</p></div>';
        }
        mra++;
        console.log(monster_action)
        if(mra>=3){mra=0}
    }
    if (brum == 104) {//混沌キメラ
        if (mra== 0){monster_action = ["mtopdamage(Math.trunc(matk))",'matkup(Math.trunc(1*ml))']
        document.getElementById('monster_patarn').innerHTML += '<div class="atk">'+Math.trunc(matk)+'<p>攻撃しようとしている。</p></div>';
        document.getElementById('monster_patarn').innerHTML += '<div class="atkup">'+Math.trunc(2)+'<p>力を溜めようとしている</p></div>';
        }
        if (mra== 1){monster_action = ['mdifence(Math.trunc(mdef))']
           document.getElementById('monster_patarn').innerHTML += '<div class="def">'+Math.trunc(mdef)+'<p>防御しようとしている。</p></div>';
        }
        if (mra== 2){monster_action = ["mtopdamage(Math.trunc(matk))"]
           document.getElementById('monster_patarn').innerHTML += '<div class="atk">'+Math.trunc(matk)+'<p>攻撃しようとしている。</p></div>';
        }
        if (mhp<= 20){monster_action.push("mheal(Math.trunc(20))");
        document.getElementById('monster_patarn').innerHTML += '<div class="heal">'+Math.trunc(20)+'<p>回復しようとしている。</p></div>';
        }
        if (havedif>=10){monster_action.push("nodiffence()");
        document.getElementById('monster_patarn').innerHTML += '<div class="special">　<p>防御を無くさせようとしている。</p></div>';
        }
        mra++;
        console.log(monster_action)
        if(mra>=3){mra=0}
    }
    if (brum == 105) {//ガーゴイル
        if (mra== 0){monster_action = ["mtopdamage(Math.trunc(matk))",'matkup(Math.trunc(1*ml))']
        document.getElementById('monster_patarn').innerHTML += '<div class="atk">'+Math.trunc(matk)+'<p>攻撃しようとしている。</p></div>';
        document.getElementById('monster_patarn').innerHTML += '<div class="atkup">'+Math.trunc(2)+'<p>力を溜めようとしている</p></div>';
        }
        if (mra== 1){monster_action = ['mdifence(Math.trunc(mdef))']
           document.getElementById('monster_patarn').innerHTML += '<div class="def">'+Math.trunc(mdef)+'<p>防御しようとしている。</p></div>';
        }
        if (mra== 2){monster_action = ["mtopdamage(Math.trunc(matk))"]
           document.getElementById('monster_patarn').innerHTML += '<div class="atk">'+Math.trunc(matk)+'<p>攻撃しようとしている。</p></div>';
        }
        if (mhp<= 20){monster_action.push("mheal(Math.trunc(20))");
        document.getElementById('monster_patarn').innerHTML += '<div class="heal">'+Math.trunc(20)+'<p>回復しようとしている。</p></div>';
        }
        if (havedif>=10){monster_action.push("nodiffence()");
        document.getElementById('monster_patarn').innerHTML += '<div class="special">　<p>防御を無くさせようとしている。</p></div>';
        }
        mra++;
        console.log(monster_action)
        if(mra>=3){mra=0}
    }
    if (brum == 106) {//オークキング
        if (mra== 0){monster_action = ["mtopdamage(Math.trunc(matk))",'matkup(Math.trunc(1*ml))']
        document.getElementById('monster_patarn').innerHTML += '<div class="atk">'+Math.trunc(matk)+'<p>攻撃しようとしている。</p></div>';
        document.getElementById('monster_patarn').innerHTML += '<div class="atkup">'+Math.trunc(2)+'<p>力を溜めようとしている</p></div>';
        }
        if (mra== 1){monster_action = ['mdifence(Math.trunc(mdef))']
           document.getElementById('monster_patarn').innerHTML += '<div class="def">'+Math.trunc(mdef)+'<p>防御しようとしている。</p></div>';
        }
        if (mra== 2){monster_action = ["mtopdamage(Math.trunc(matk))"]
           document.getElementById('monster_patarn').innerHTML += '<div class="atk">'+Math.trunc(matk)+'<p>攻撃しようとしている。</p></div>';
        }
        if (mhp<= 20){monster_action.push("mheal(Math.trunc(20))");
        document.getElementById('monster_patarn').innerHTML += '<div class="heal">'+Math.trunc(20)+'<p>回復しようとしている。</p></div>';
        }
        if (havedif>=10){monster_action.push("nodiffence()");
        document.getElementById('monster_patarn').innerHTML += '<div class="special">　<p>防御を無くさせようとしている。</p></div>';
        }
        mra++;
        console.log(monster_action)
        if(mra>=3){mra=0}
    }
    if (brum == 107) {//ファイアーマン
        if (mra== 0){monster_action = ["mtopdamage(Math.trunc(matk))",'matkup(Math.trunc(1*ml))']
        document.getElementById('monster_patarn').innerHTML += '<div class="atk">'+Math.trunc(matk)+'<p>攻撃しようとしている。</p></div>';
        document.getElementById('monster_patarn').innerHTML += '<div class="atkup">'+Math.trunc(2)+'<p>力を溜めようとしている</p></div>';
        }
        if (mra== 1){monster_action = ['mdifence(Math.trunc(mdef))']
           document.getElementById('monster_patarn').innerHTML += '<div class="def">'+Math.trunc(mdef)+'<p>防御しようとしている。</p></div>';
        }
        if (mra== 2){monster_action = ["mtopdamage(Math.trunc(matk))"]
           document.getElementById('monster_patarn').innerHTML += '<div class="atk">'+Math.trunc(matk)+'<p>攻撃しようとしている。</p></div>';
        }
        if (mhp<= 20){monster_action.push("mheal(Math.trunc(20))");
        document.getElementById('monster_patarn').innerHTML += '<div class="heal">'+Math.trunc(20)+'<p>回復しようとしている。</p></div>';
        }
        if (havedif>=10){monster_action.push("nodiffence()");
        document.getElementById('monster_patarn').innerHTML += '<div class="special">　<p>防御を無くさせようとしている。</p></div>';
        }
        mra++;
        console.log(monster_action)
        if(mra>=3){mra=0}
    }
    if (brum == 201) {//山賊
        if (mra== 0){monster_action = ["mtopdamage(Math.trunc(matk))",'matkup(Math.trunc(1*ml))']
        document.getElementById('monster_patarn').innerHTML += '<div class="atk">'+Math.trunc(matk)+'<p>攻撃しようとしている。</p></div>';
        document.getElementById('monster_patarn').innerHTML += '<div class="atkup">'+Math.trunc(2)+'<p>力を溜めようとしている</p></div>';
        }
        if (mra== 1){monster_action = ['mdifence(Math.trunc(mdef))']
           document.getElementById('monster_patarn').innerHTML += '<div class="def">'+Math.trunc(mdef)+'<p>防御しようとしている。</p></div>';
        }
        if (mra== 2){monster_action = ["mtopdamage(Math.trunc(matk/1.5))"]
           document.getElementById('monster_patarn').innerHTML += '<div class="atk">'+Math.trunc(matk/1.5)+'<p>攻撃しようとしている。</p></div>';
        }
        mra++;
        console.log(monster_action)
        if(mra>=3){mra=0}
    }
    if (brum == 202) {//熊
        if (mra== 0){monster_action = ["mtopdamage(Math.trunc(matk))",'matkup(Math.trunc(1*ml))']
        document.getElementById('monster_patarn').innerHTML += '<div class="atk">'+Math.trunc(matk)+'<p>攻撃しようとしている。</p></div>';
        document.getElementById('monster_patarn').innerHTML += '<div class="atkup">'+Math.trunc(2)+'<p>力を溜めようとしている</p></div>';
        }
        if (mra== 1){monster_action = ['mdifence(Math.trunc(mdef))']
           document.getElementById('monster_patarn').innerHTML += '<div class="def">'+Math.trunc(mdef)+'<p>防御しようとしている。</p></div>';
        }
        if (mra== 2){monster_action = ["mtopdamage(Math.trunc(matk/1.5))"]
           document.getElementById('monster_patarn').innerHTML += '<div class="atk">'+Math.trunc(matk/1.5)+'<p>攻撃しようとしている。</p></div>';
        }
        mra++;
        console.log(monster_action)
        if(mra>=3){mra=0}
    }
}
// 各カードの動作関数
function noaction(){

}
function ptomdamage(damage){
    damage = Math.trunc(damage);
    if(equi_armor >= 0){
        if(allarmor[equi_armor][1]=="卑怯者のさらし"){
            pdifence(damage/5)
        }
    }
    if(equi_weapon >= 0){
        if(allweapon[equi_weapon][1]=="はやぶさの刀"){
            damage=Math.trunc(damage*(spd/4));
        }
        if(allweapon[equi_weapon][1]=="ブラッディクロー"){
            heal(Math.trunc(damage/5));
        }
        if(allweapon[equi_weapon][1]=="勇者の剣"){
            let rum = Math.floor( Math.random() * 11 ) ;
            if(rum>=2){
                damage=Math.trunc(damage*2)
            }
        }
    }
    if(next_p_atack_hosei){
        damage = damage*2;
        next_p_atack_hosei = false;
    }
    second=500/damage;
    var i = 0;
    document.getElementById("damage_count_animation").innerHTML +="<div class='count'>"+damage+"</div>";
    document.getElementsByClassName("count")[document.getElementsByClassName("count").length-1].classList.add('active');
    document.getElementById("monster").classList.add('damage');
    window.setTimeout(function(){
    document.getElementsByClassName("count")[document.getElementsByClassName("count").length-1].classList.remove('active');
    document.getElementsByClassName("count")[document.getElementsByClassName("count").length-1].remove();
    document.getElementById("monster").classList.remove('damage');
}, 800);
let timer_id = setInterval((function(){
        i++;
        if (i <= damage) {
            if (mhavedif == 0){
                mhp =mhp - 1;
            document.getElementById('entity_hp').innerHTML = "♥" + mhp;
            if (mhp <= 0){
                clearInterval(timer_id);
                donttouch(1300);
                win();
            }
            }
            if (mhavedif > 0){
                mhavedif = mhavedif - 1;
                document.getElementById('mdiffence').innerHTML = "守" + mhavedif;
                if (mhavedif <=0){
                    document.getElementById('mdiffence').innerHTML = "";
                }
            }
        }
}), second);
}
function ptomslash(damage){
    damage = Math.trunc(damage);
    if(equi_armor >= 0){
        if(allarmor[equi_armor][1]=="卑怯者のさらし"){
            pdifence(damage/5)
        }
    }
    if(equi_weapon >= 0){
        if(allweapon[equi_weapon][1]=="はやぶさの刀"){
            damage=Math.trunc(damage*(spd/4));
        }
        if(allweapon[equi_weapon][1]=="ブラッディクロー"){
            heal(Math.trunc(damage/5));
        }
        if(allweapon[equi_weapon][1]=="勇者の剣"){
            let rum = Math.floor( Math.random() * 11 ) ;
            if(rum>=2){
                damage=Math.trunc(damage*2)
            }
        }
    }
    if(next_p_atack_hosei){
        damage = damage*2;
        next_p_atack_hosei = false;
    }
    second=500/damage;
    var i = 0;
    document.getElementById("damage_count_animation").innerHTML +="<div class='count'>"+damage+"</div>";
    document.getElementsByClassName("count")[document.getElementsByClassName("count").length-1].classList.add('active');
    document.getElementById("monster").classList.add('damage');
    window.setTimeout(function(){
    document.getElementsByClassName("count")[document.getElementsByClassName("count").length-1].classList.remove('active');
    document.getElementsByClassName("count")[document.getElementsByClassName("count").length-1].remove();
    document.getElementById("monster").classList.remove('damage');
}, 800);
let timer_id = setInterval((function(){
        i++;
        if (i <= damage) {
            mhp =mhp - 1;
            document.getElementById('entity_hp').innerHTML = "♥" + mhp;
            if (mhp <= 0){
                clearInterval(timer_id);
                donttouch(1300);
                win();
            }
        }
}), second);
}
function pdifence(dif){
    dif = Math.trunc(dif);
    if(equi_armor >= 0){
        if(allarmor[equi_armor][1]=="守護者の鎧"){
            dif=dif*1.5;
        }
        if(allarmor[equi_armor][1]=="門番の鎧"){
            bhp+=dif/4;
        }
    }
    if(equi_weapon >= 0&&allweapon[equi_weapon][1]=="決闘者のつるぎ"){
        ptomdamage(dif);
    }else{
    second=500/dif;
    var i = 0;
    setInterval((function(){
        i++;
        if (i <= dif) {
            havedif = havedif + 1;
            status_reload()
            document.getElementById('diffence').innerHTML = "守" + havedif;
        }
}), second);
}
}
function drow(count){
    for (var i = 0; i < count; i++) {
        if(battle_deck.length){
            var rum = battle_deck[Math.floor(Math.random()*battle_deck.length)];
            var arrydelete = battle_deck.indexOf(rum);
            battle_tefuda.push(rum);
            battle_deck.splice(arrydelete,1);
            sabun_deck.splice(arrydelete,1);
            document.getElementById('battle_sp').innerHTML = "残りSP"+battle_sp;
            // 重複チェックしながらをデッキから「rum」を手札にカードを収納
            document.getElementById('battle_tefuda').innerHTML += '<div id="c9" class="card" data-card1="'+ rum[0]+'" data-card2="9" onclick="cardview('+ rum[0]+','+9+')"><img id="card'+rum[0]+'" src="./card/'+ rum[0]+'.png"><p>'+ rum[8]+'</p><p>'+ rum[3]+'</p><p class="result" a='+rum[5]+'>'+ eval(rum[5])+'</p><div class="card_div"><p>'+ rum[1]+'</p><p>'+ rum[2]+'</p></div></div>';
            $('div[cardtype='+rum[0]+']').eq(0).remove();
        //最大4枚までカードを配り属性値を再生成
    }else{
        for (var i = 0; i < sabun_deck.length; i++) {
            g = i;
            document.getElementById('dece_window_card').innerHTML += '<div class="card" cardtype="'+sabun_deck[g][0]+'"><img src="./card/'+ sabun_deck[g][0]+'.png" ><p>'+ sabun_deck[g][8]+'</p><p>'+ sabun_deck[g][3]+'</p><p class="result" a='+sabun_deck[g][5]+'>'+ eval(sabun_deck[g][5])+'</p><div class="card_div"><p>'+ sabun_deck[g][1]+'</p><p>'+ sabun_deck[g][2]+'</p></div></div>';
        };
        battle_deck = sabun_deck.concat();
    }}
    for(var i = 0;i < document.getElementById('battle_tefuda').getElementsByClassName("card").length;i++){
        var tefuda0func0 = document.getElementById('battle_tefuda').children[i].getAttribute('onclick');
        var tefuda0func1 = tefuda0func0.slice( 9, -3 ) ;
        let tefuda0 = {"id":"c"+i,"data-card2":i,"onclick":"cardview("+tefuda0func1+","+i+")"} 
        for(let z of Object.entries(tefuda0)) {
            document.getElementById('battle_tefuda').children[i].setAttribute(z[0],z[1]);
        };
    }
}
function skilldrow(count){
        for (var i = 0; i < count; i++) {
            if(battle_deck.length){
                console.log(battle_deck.findIndex( item => item.includes( "スキル" )))
                if(battle_deck.findIndex( item => item.includes( "スキル" ))==-1){
                    break
                }
                var rum = battle_deck[battle_deck.findIndex( item => item.includes( "スキル" ))];
                var arrydelete = battle_deck.indexOf(rum);
                battle_tefuda.push(rum);
                battle_deck.splice(arrydelete,1);
                sabun_deck.splice(arrydelete,1);
                document.getElementById('battle_sp').innerHTML = "残りSP"+battle_sp;
                // 重複チェックしながらをデッキから「rum」を手札にカードを収納
                document.getElementById('battle_tefuda').innerHTML += '<div id="c9" class="card" data-card1="'+ rum[0]+'" data-card2="9" onclick="cardview('+ rum[0]+','+9+')"><img id="card'+rum[0]+'" src="./card/'+ rum[0]+'.png"><p>'+ rum[8]+'</p><p>'+ rum[3]+'</p><p class="result" a='+rum[5]+'>'+ eval(rum[5])+'</p><div class="card_div"><p>'+ rum[1]+'</p><p>'+ rum[2]+'</p></div></div>';
                $('div[cardtype='+rum[0]+']').eq(0).remove();
            //最大4枚までカードを配り属性値を再生成
        }else{
            for (var i = 0; i < sabun_deck.length; i++) {
                g = i;
                document.getElementById('dece_window_card').innerHTML += '<div class="card" cardtype="'+sabun_deck[g][0]+'"><img src="./card/'+ sabun_deck[g][0]+'.png" ><p>'+ sabun_deck[g][8]+'</p><p>'+ sabun_deck[g][3]+'</p><p class="result" a='+sabun_deck[g][5]+'>'+ eval(sabun_deck[g][5])+'</p><div class="card_div"><p>'+ sabun_deck[g][1]+'</p><p>'+ sabun_deck[g][2]+'</p></div></div>';
            };
            battle_deck = sabun_deck.concat();
    
        }}
        for(var i = 0;i < document.getElementById('battle_tefuda').getElementsByClassName("card").length;i++){
            var tefuda0func0 = document.getElementById('battle_tefuda').children[i].getAttribute('onclick');
            var tefuda0func1 = tefuda0func0.slice( 9, -3 ) ;
            let tefuda0 = {"id":"c"+i,"data-card2":i,"onclick":"cardview("+tefuda0func1+","+i+")"} 
            for(let z of Object.entries(tefuda0)) {
                document.getElementById('battle_tefuda').children[i].setAttribute(z[0],z[1]);
            };
        }
}
function damagedrow(count){
    for (var i = 0; i < count; i++) {
        if(battle_deck.length){
            console.log(battle_deck.findIndex( item => item.includes( "攻撃" )))
            if(battle_deck.findIndex( item => item.includes( "攻撃" ))==-1){
                break
            }
            var rum = battle_deck[battle_deck.findIndex( item => item.includes( "攻撃" ))];
            var arrydelete = battle_deck.indexOf(rum);
            battle_tefuda.push(rum);
            battle_deck.splice(arrydelete,1);
            sabun_deck.splice(arrydelete,1);
            document.getElementById('battle_sp').innerHTML = "残りSP"+battle_sp;
            // 重複チェックしながらをデッキから「rum」を手札にカードを収納
            document.getElementById('battle_tefuda').innerHTML += '<div id="c9" class="card" data-card1="'+ rum[0]+'" data-card2="9" onclick="cardview('+ rum[0]+','+9+')"><img id="card'+rum[0]+'" src="./card/'+ rum[0]+'.png"><p>'+ rum[8]+'</p><p>'+ rum[3]+'</p><p class="result" a='+rum[5]+'>'+ eval(rum[5])+'</p><div class="card_div"><p>'+ rum[1]+'</p><p>'+ rum[2]+'</p></div></div>';
            $('div[cardtype='+rum[0]+']').eq(0).remove();
        //最大4枚までカードを配り属性値を再生成
    }else{
        for (var i = 0; i < sabun_deck.length; i++) {
            g = i;
            document.getElementById('dece_window_card').innerHTML += '<div class="card" cardtype="'+sabun_deck[g][0]+'"><img src="./card/'+ sabun_deck[g][0]+'.png" ><p>'+ sabun_deck[g][8]+'</p><p>'+ sabun_deck[g][3]+'</p><p class="result" a='+sabun_deck[g][5]+'>'+ eval(sabun_deck[g][5])+'</p><div class="card_div"><p>'+ sabun_deck[g][1]+'</p><p>'+ sabun_deck[g][2]+'</p></div></div>';
        };
        battle_deck = sabun_deck.concat();

    }}
    for(var i = 0;i < document.getElementById('battle_tefuda').getElementsByClassName("card").length;i++){
        var tefuda0func0 = document.getElementById('battle_tefuda').children[i].getAttribute('onclick');
        var tefuda0func1 = tefuda0func0.slice( 9, -3 ) ;
        let tefuda0 = {"id":"c"+i,"data-card2":i,"onclick":"cardview("+tefuda0func1+","+i+")"} 
        for(let z of Object.entries(tefuda0)) {
            document.getElementById('battle_tefuda').children[i].setAttribute(z[0],z[1]);
        };
    }
}
function defdrow(count){
    for (var i = 0; i < count; i++) {
        if(battle_deck.length){
            console.log(battle_deck.findIndex( item => item.includes( "防御" )))
            if(battle_deck.findIndex( item => item.includes( "防御" ))==-1){
                break
            }
            var rum = battle_deck[battle_deck.findIndex( item => item.includes( "防御" ))];
            var arrydelete = battle_deck.indexOf(rum);
            battle_tefuda.push(rum);
            battle_deck.splice(arrydelete,1);
            sabun_deck.splice(arrydelete,1);
            document.getElementById('battle_sp').innerHTML = "残りSP"+battle_sp;
            // 重複チェックしながらをデッキから「rum」を手札にカードを収納
            document.getElementById('battle_tefuda').innerHTML += '<div id="c9" class="card" data-card1="'+ rum[0]+'" data-card2="9" onclick="cardview('+ rum[0]+','+9+')"><img id="card'+rum[0]+'" src="./card/'+ rum[0]+'.png"><p>'+ rum[8]+'</p><p>'+ rum[3]+'</p><p class="result" a='+rum[5]+'>'+ eval(rum[5])+'</p><div class="card_div"><p>'+ rum[1]+'</p><p>'+ rum[2]+'</p></div></div>';
            $('div[cardtype='+rum[0]+']').eq(0).remove();
        //最大4枚までカードを配り属性値を再生成
    }else{
        for (var i = 0; i < sabun_deck.length; i++) {
            g = i;
            document.getElementById('dece_window_card').innerHTML += '<div class="card" cardtype="'+sabun_deck[g][0]+'"><img src="./card/'+ sabun_deck[g][0]+'.png" ><p>'+ sabun_deck[g][8]+'</p><p>'+ sabun_deck[g][3]+'</p><p class="result" a='+sabun_deck[g][5]+'>'+ eval(sabun_deck[g][5])+'</p><div class="card_div"><p>'+ sabun_deck[g][1]+'</p><p>'+ sabun_deck[g][2]+'</p></div></div>';
        };
        battle_deck = sabun_deck.concat();

    }}
    for(var i = 0;i < document.getElementById('battle_tefuda').getElementsByClassName("card").length;i++){
        var tefuda0func0 = document.getElementById('battle_tefuda').children[i].getAttribute('onclick');
        var tefuda0func1 = tefuda0func0.slice( 9, -3 ) ;
        let tefuda0 = {"id":"c"+i,"data-card2":i,"onclick":"cardview("+tefuda0func1+","+i+")"} 
        for(let z of Object.entries(tefuda0)) {
            document.getElementById('battle_tefuda').children[i].setAttribute(z[0],z[1]);
        };
    }
}
function pbash(damage){
    if(equi_armor >= 0){
        if(allarmor[equi_armor][1]=="卑怯者のさらし"){
            pdifence(damage/5)
        }
    }
    if(equi_weapon >= 0){
        if(allweapon[equi_weapon][1]=="はやぶさの刀"){
            damage=Math.trunc(damage*(spd/4));
        }
        if(allweapon[equi_weapon][1]=="ブラッディクロー"){
            heal(Math.trunc(damage/5));
        }
        if(allweapon[equi_weapon][1]=="勇者の剣"){
            let rum = Math.floor( Math.random() * 11 ) ;
            if(rum>=2){
                damage=Math.trunc(damage*2)
            }
        }
    }
    if(next_p_atack_hosei){
        damage = damage*2;
        next_p_atack_hosei = false;
    }
    second=500/damage;
    var i = 0;
    document.getElementById("damage_count_animation").innerHTML +="<div class='count'>"+damage+"</div>";
    document.getElementsByClassName("count")[document.getElementsByClassName("count").length-1].classList.add('active');
    document.getElementById("monster").classList.add('damage');
    window.setTimeout(function(){
    document.getElementsByClassName("count")[document.getElementsByClassName("count").length-1].classList.remove('active');
    document.getElementsByClassName("count")[document.getElementsByClassName("count").length-1].remove();
    document.getElementById("monster").classList.remove('damage');
}, 800);
let timer_id = setInterval((function(){
        i++;
        if (i <= damage) {
            if (mhavedif == 0){
                mhp =mhp - 1;
            document.getElementById('entity_hp').innerHTML = "♥" + mhp;
            havedif = havedif - 1;
            document.getElementById('diffence').innerHTML = "守" + havedif;
            status_reload();
            if (mhp <= 0){
                clearInterval(timer_id);
                donttouch(1300);
                win();
            }
            }
            if (mhavedif > 0){
                mhavedif = mhavedif - 1;
                document.getElementById('mdiffence').innerHTML = "守" + mhavedif;
                havedif = havedif - 1;
                document.getElementById('diffence').innerHTML = "守" + havedif;
                if (mhavedif <=0){
                    document.getElementById('mdiffence').innerHTML = "";
                }
            }
        }
}), second);
}
function madowasi(){
    console.log(monster_action)
    if(monster_action.length > 0){
    let mado = monster_action.length-1;
    monster_action.splice(mado,1);
        window.setTimeout(function(){
            console.log(mado)
            document.getElementById('monster_patarn').children[monster_action.length].remove();
        }, 200);
    }
}
function enagyshild(){
    second=500/battle_sp;
    var i = 0;
    setInterval((function(){
        i++;
        if (i <= battle_sp) {
            havedif = havedif + 3;
            status_reload()
            document.getElementById('diffence').innerHTML = "守" + havedif;
        }
}), second);
}
function meisou(count){
    battle_sp += Math.trunc(count);
    status_reload();
}
var next_p_atack_hosei = false;
function hosei(){
    document.getElementById("html").classList.add('patkup');
    window.setTimeout(function(){
    document.getElementById("html").classList.remove('patkup');
    }, 800);
    next_p_atack_hosei = true;
    console.log(next_p_atack_hosei)
}
var dragonshild = false; 
function dorashild(dif){
    dragonshild = true; 
    pdifence(dif);
}
function buchardagger(damage){
    ptomdamage(damage);
    batk+=1;
    status_reload();
}
function taiatari(damage){
    second=500/damage;
    ptomdamage(damage);
    var i = 0;
    setInterval((function(){
        i++;
        if (i <= 5) {
            if (havedif == 0){
                bhp =bhp - 1;
                document.getElementById('hp_bar').innerHTML ="♥" + bhp +"/"+hp;
            }
            if (havedif > 0){
                havedif = havedif - 1;
                status_reload()
                document.getElementById('diffence').innerHTML = "守" + havedif;
                if (havedif <=0){
                    document.getElementById('diffence').innerHTML = "";
                }
            }
        }
}), second);
}
function kabutowari(damage){
    if(equi_armor >= 0){
        if(allarmor[equi_armor][1]=="卑怯者のさらし"){
            pdifence(damage/5)
        }
    }
    if(equi_weapon >= 0){
        if(allweapon[equi_weapon][1]=="はやぶさの刀"){
            damage=Math.trunc(damage*(spd/4));
        }
        if(allweapon[equi_weapon][1]=="ブラッディクロー"){
            heal(Math.trunc(damage/5));
        }
        if(allweapon[equi_weapon][1]=="勇者の剣"){
            let rum = Math.floor( Math.random() * 11 ) ;
            if(rum>=2){
                damage=Math.trunc(damage*2)
            }
        }
    }
    if(next_p_atack_hosei){
        damage = damage*2;
        next_p_atack_hosei = false;
    }
    second=500/damage;
    damage = Math.trunc(damage)
    var i = 0;
    document.getElementById("damage_count_animation").innerHTML +="<div class='count'>"+damage+"</div>";
    document.getElementsByClassName("count")[document.getElementsByClassName("count").length-1].classList.add('active');
    document.getElementById("monster").classList.add('damage');
    window.setTimeout(function(){
    document.getElementsByClassName("count")[document.getElementsByClassName("count").length-1].classList.remove('active');
    document.getElementsByClassName("count")[document.getElementsByClassName("count").length-1].remove();
    document.getElementById("monster").classList.remove('damage');
}, 800);
let timer_id = setInterval((function(){
        i++;
        if (i <= damage) {
            if (mhavedif == 0){
                mhp =mhp - 1;
            document.getElementById('entity_hp').innerHTML = "♥" + mhp;
            if (mhp <= 0){
                clearInterval(timer_id);
                donttouch(1300);
                win();
            }
            }
            if (mhavedif > 0){
                mhavedif = mhavedif - 2;
                document.getElementById('mdiffence').innerHTML = "守" + mhavedif;
                if (mhavedif <=0){
                    document.getElementById('mdiffence').innerHTML = "";
                }
            }
        }
}), second);
}
function kyousensi(){
    battle_sp += 3;
    batk += 10;
    biq -=10;
    bhp = 1;
    drow(2);
    status_reload();
}
function heal(heal){
    second=500/heal;
    var i = 0;
setInterval((function(){
        i++;
        if (i < heal) {
            if (bhp < hp) 
            bhp =bhp + 1;
            document.getElementById('hp_bar').innerHTML = "♥" + bhp +"/"+hp;
        }
}), second);
}
function spup(count){
    battle_sp+=count;
}
function maryokuzoufuku(){
 biq+=2;
 drow(1);
}
function torihiki(){
    var i =0;
    setInterval((function(){
        i++;
        if (i <= 5) {
            if (havedif == 0){
                bhp =bhp - 1;
                document.getElementById('hp_bar').innerHTML = "♥" + bhp +"/"+hp;
            }
            if (havedif > 0){
                havedif = havedif - 1;
                status_reload()
                document.getElementById('diffence').innerHTML = "守" + havedif;
                if (havedif <=0){
                    document.getElementById('diffence').innerHTML = "";
                }
            }
            if(dragonshild){
                mhp =mhp - 1
                document.getElementById('entity_hp').innerHTML = "♥" + mhp;
                if (mhp <= 0){
                    donttouch(1300);
                    win();
                }
                if (mhavedif > 0){
                    mhavedif = mhavedif - 1;
                    document.getElementById('mdiffence').innerHTML = "守" + mhavedif;
                    if (mhavedif <=0){
                        document.getElementById('mdiffence').innerHTML = "";
                    }
                    
                }
            }
        }
        
}), 100);
iqup(5);
}
function iqup(count){
    biq+=count;
}
function atkup(count){
    batk+=count;
}
function majutusifukurou(damage){
    ptomdamage(damage);
    iqup(1);
}
function drain(damage){
    if(equi_armor >= 0){
        if(allarmor[equi_armor][1]=="卑怯者のさらし"){
            pdifence(damage/5)
        }
    }
    if(equi_weapon >= 0){
        if(allweapon[equi_weapon][1]=="はやぶさの刀"){
            damage=Math.trunc(damage*(spd/4));
        }
        if(allweapon[equi_weapon][1]=="ブラッディクロー"){
            heal(Math.trunc(damage/5));
        }
        if(allweapon[equi_weapon][1]=="勇者の剣"){
            let rum = Math.floor( Math.random() * 11 ) ;
            if(rum>=2){
                damage=Math.trunc(damage*2)
            }
        }
    }
    if(next_p_atack_hosei){
        damage = damage*2;
        next_p_atack_hosei = false;
    }
    var i = 0;
    document.getElementById("damage_count_animation").innerHTML +="<div class='count'>"+damage+"</div>";
    document.getElementsByClassName("count")[document.getElementsByClassName("count").length-1].classList.add('active');
    document.getElementById("monster").classList.add('damage');
    window.setTimeout(function(){
    document.getElementsByClassName("count")[document.getElementsByClassName("count").length-1].classList.remove('active');
    document.getElementsByClassName("count")[document.getElementsByClassName("count").length-1].remove();
    document.getElementById("monster").classList.remove('damage');
}, 800);
let timer_id = setInterval((function(){
        i++;
        if (i <= damage) {
            if (mhavedif == 0){
                if(hp>bhp){
                    bhp= bhp+1;
                }
                mhp =mhp - 1;
                document.getElementById('hp_bar').innerHTML = "♥" + bhp +"/"+hp;
            document.getElementById('entity_hp').innerHTML = "♥" + mhp;
            if (mhp <= 0){
                clearInterval(timer_id);
                donttouch(1300);
                win();
            }
            }
            if (mhavedif > 0){
                mhavedif = mhavedif - 1;
                document.getElementById('mdiffence').innerHTML = "守" + mhavedif;
                if (mhavedif <=0){
                    document.getElementById('mdiffence').innerHTML = "";
                }
            }
        }
}), second);
}
function noroi_utu(count){
    battle_sp-=count;
}
function noroi_sousitu(count){
    batk -= count;
}
function noroi_sanman(count){
    biq-= count;
}
function planb(){
    console.log(battle_tefuda)
    for(var i=0;i<battle_tefuda.length;i++){
        sabun_deck.push(battle_tefuda[i])
    }
    let planb_count = battle_tefuda.length;
    battle_tefuda=[]
    document.getElementById('battle_tefuda').innerHTML="";
    window.setTimeout(function(){
        for (var i = 0; i < planb_count; i++) {
            var rum = battle_deck[Math.floor(Math.random()*battle_deck.length+1)];
            var arrydelete = battle_deck.indexOf(rum);
            if(rum[6]=="senkou"){
                eval(rum[9]);
            }
            battle_tefuda.push(rum);
            battle_deck.splice(arrydelete,1);
            sabun_deck.splice(arrydelete,1);
            // 重複チェックしながらをデッキから「rum」を手札にカードを収納
            g = i;
            document.getElementById('battle_tefuda').innerHTML += '<div id="c'+g+'"class="card" data-card1="'+ rum[0]+'" data-card2="'+g+'" onclick="cardview('+ rum[0]+','+ g +')"><img id="card'+rum[0]+'" src="./card/'+ rum[0]+'.png"><p>'+rum[8]+'</p><p>'+ rum[3]+'</p><p class="result" a='+rum[5]+'>'+ eval(rum[5])+'</p><div class="card_div"><p>'+ rum[1]+'</p><p>'+ rum[2]+'</p></div></div>';
            $('div[cardtype="'+rum[0]+'"]').eq(0).remove();
            status_reload();
        };
       }, 300);

}

// モンスター
function mtopdamage(damage){
    if(equi_armor >= 0){
        if(allarmor[equi_armor][1]=="トゲトゲプレート"){
            ptomdamage(damage/2.5);
        }
    }
    second=500/damage;
    damage = Math.trunc(damage)
    var i = 0;
    document.getElementById("monster").classList.add('atk');
    document.getElementById("html").classList.add('matk');
    window.setTimeout(function(){
    document.getElementById("html").classList.remove('matk');
    document.getElementById("monster").classList.remove('atk');
    }, 800);
    setInterval((function(){
        i++;
        if (i <= damage) {
            if (havedif == 0){
                bhp =bhp - 1;
                document.getElementById('hp_bar').innerHTML = "♥" + bhp +"/"+hp;
            }
            if (havedif > 0){
                havedif = havedif - 1;
                status_reload()
                document.getElementById('diffence').innerHTML = "守" + havedif;
                if (havedif <=0){
                    document.getElementById('diffence').innerHTML = "";
                }
            }
            if(dragonshild){
                mhp =mhp - 1
                document.getElementById('entity_hp').innerHTML = "♥" + mhp;
                if (mhp <= 0){
                    donttouch(1300);
                    win();
                }
                if (mhavedif > 0){
                    mhavedif = mhavedif - 1;
                    document.getElementById('mdiffence').innerHTML = "守" + mhavedif;
                    if (mhavedif <=0){
                        document.getElementById('mdiffence').innerHTML = "";
                    }
                    
                }
            }
        }
        
}), second);
}
function mtopslash(damage){
    if(equi_armor >= 0){
        if(allarmor[equi_armor][1]=="トゲトゲプレート"){
            ptomdamage(damage/2.5);
        }
    }
    second=500/damage;
    damage = Math.trunc(damage)
    var i = 0;
    document.getElementById("monster").classList.add('atk');
    document.getElementById("html").classList.add('matk');
    window.setTimeout(function(){
    document.getElementById("html").classList.remove('matk');
    document.getElementById("monster").classList.remove('atk');
    }, 800);
    setInterval((function(){
        i++;
        if (i <= damage) {
                bhp =bhp - 1;
                document.getElementById('hp_bar').innerHTML = "♥" + bhp +"/"+hp;
                if(dragonshild){
                    mhp =mhp - 1
                    document.getElementById('entity_hp').innerHTML = "♥" + mhp;
                    if (mhavedif > 0){
                        mhavedif = mhavedif - 1;
                        document.getElementById('mdiffence').innerHTML = "守" + mhavedif;
                        if (mhavedif <=0){
                            document.getElementById('mdiffence').innerHTML = "";
                        }
                    }
                }
        }
}), second);
}
function mdifence(dif){
    second=500/dif;
    var i = 0;
    document.getElementById("monster").classList.add('def');
    window.setTimeout(function(){
    document.getElementById("monster").classList.remove('def');
    }, 800);
    setInterval((function(){
        i++;
        if (i <= dif) {
            mhavedif = mhavedif + 1;
            document.getElementById('mdiffence').innerHTML = "守" + mhavedif;
        }
}), second);
}
function nodiffence(){
    second=500/havedif;
    document.getElementById("monster").classList.add('special');
    window.setTimeout(function(){
    document.getElementById("monster").classList.remove('special');
    }, 800);
    let timer_id = setInterval((function(){
        i++;
        if (0 < havedif) {
            havedif = havedif - 1;
            document.getElementById('diffence').innerHTML = "守" + havedif;
                if (havedif <=0){
                    clearInterval(timer_id);
                    document.getElementById('diffence').innerHTML = "";
                }
        }
}), second);
}
function mheal(heal){
    second=500/heal;
    var i = 0;
    document.getElementById("monster").classList.add('heal');
    window.setTimeout(function(){
    document.getElementById("monster").classList.remove('heal');
}, 800);
setInterval((function(){
        i++;
        if (i < heal) {
            mhp =mhp + 1;
            document.getElementById('entity_hp').innerHTML = "♥" + mhp;
        }
}), second);
}
function matkup(up){
    document.getElementById("monster").classList.add('up');
    window.setTimeout(function(){
    document.getElementById("monster").classList.remove('up');
}, 800);
            matk += up;
}
function mdefup(up){
    document.getElementById("monster").classList.add('defup');
    window.setTimeout(function(){
    document.getElementById("monster").classList.remove('defup');
}, 800);
            mdef += up;
}
function matkdown(down){
    var i = 0;
    document.getElementById("monster").classList.add('atkdown');
    window.setTimeout(function(){
    document.getElementById("monster").classList.remove('atkdown');
    }, 800);
    setInterval((function(){
        i++;
        if (i <= down) {
            batk = batk - 1;
        }
}), second);
}
function mfire(damage){
    if(equi_armor >= 0){
        if(allarmor[equi_armor][1]=="トゲトゲプレート"){
            ptomdamage(damage/2.5);
        }
    }
    document.getElementById("html").classList.add('mfire');
    window.setTimeout(function(){
    document.getElementById("html").classList.remove('mfire');
    }, 800);
    pyakedo+=damage;
    document.getElementById('yakedo').innerHTML = "焼" + damage;
}
function mdrain(damage){
    if(equi_armor >= 0){
        if(allarmor[equi_armor][1]=="トゲトゲプレート"){
            ptomdamage(damage/2.5);
        }
    }
    second=500/damage;
    var i = 0;
    document.getElementById("monster").classList.add('atk');
    document.getElementById("html").classList.add('matk');
    window.setTimeout(function(){
    document.getElementById("html").classList.remove('matk');
    document.getElementById("monster").classList.remove('atk');
    }, 800);
    setInterval((function(){
        i++;
        if (i <= damage) {
            if (havedif == 0){
                mhp=mhp+1;
                bhp =bhp - 1;
                document.getElementById('entity_hp').innerHTML = "♥" + mhp;
                document.getElementById('hp_bar').innerHTML = "♥" + bhp +"/"+hp;
            }
            if (havedif > 0){
                havedif = havedif - 1;
                status_reload()
                document.getElementById('diffence').innerHTML = "守" + havedif;
                if (havedif <=0){
                    document.getElementById('diffence').innerHTML = "";
                }
            }
            if(dragonshild){
                mhp =mhp - 1
                document.getElementById('entity_hp').innerHTML = "♥" + mhp;
                if (mhp <= 0){
                    donttouch(1300);
                    win();
                }
                if (mhavedif > 0){
                    mhavedif = mhavedif - 1;
                    document.getElementById('mdiffence').innerHTML = "守" + mhavedif;
                    if (mhavedif <=0){
                        document.getElementById('mdiffence').innerHTML = "";
                    }
                    
                }
            }
        }
        
}), second);
}
var psekika = false;
function sekika(){
    document.getElementById("html").classList.add('magic');
    window.setTimeout(function(){
    document.getElementById("html").classList.remove('magic');
    }, 800);
    psekika = true;
    battle_sp=0;
}
function noroi(type){
    document.getElementById("html").classList.add('magic');
    window.setTimeout(function(){
    document.getElementById("html").classList.remove('magic');
    }, 800);
    if(type==0){
        var action = allcard.findIndex(([x]) => x == 201);
    }
    if(type==1){
        var action = allcard.findIndex(([x]) => x == 202);
    }
    if(type==2){
        var action = allcard.findIndex(([x]) => x == 203);
    }
    if(type==3){
        var action = allcard.findIndex(([x]) => x == 204);
    }
    if(type==4){
        var action = allcard.findIndex(([x]) => x == 205);
    }
    var rum=allcard[action]
    battle_deck.push(rum);
    document.getElementById('dece_window_card').innerHTML += '<div class="card" cardtype="202"><img id="card'+rum[0]+'" src="./card/'+ rum[0]+'.png"><p>'+rum[8]+'</p><p>'+ rum[3]+'</p><p class="result" a='+rum[5]+'>'+ eval(rum[5])+'</p><div class="card_div"><p>'+ rum[1]+'</p><p>'+ rum[2]+'</p></div></div>';
}



function activecard(card,g){
    actioncardcount+=1;
    if(equi_weapon >= 0){
        if(allweapon[equi_weapon][1]=="チェーンソード"&&(actioncardcount%3)==0){
            batk+=1

        }
        if(allweapon[equi_weapon][1]=="超越者の杖"&&(actioncardcount%3)==0){
            bsp+=1
        }
        if(allweapon[equi_weapon][1]=="追い魔法"){
            ptomdamage(Math.trunc(biq/4));
        }
    }
    let action = allcard.findIndex(([x]) => x == card);
    viewcard = allcard[action]
    console.log(viewcard)
    if(viewcard[3]<=battle_sp){
        var arrydelete = battle_tefuda.indexOf(viewcard);
        equi_armor >= 0
        battle_tefuda.splice(arrydelete,1);
        if(viewcard[6]=="haiki"){
        }else if(equi_armor >= 0){
            if(allarmor[equi_armor][1]=="果てのローブ"){
            }else{sabun_deck.push(viewcard)}
        }else{sabun_deck.push(viewcard)}

        document.querySelector("div[id=c"+g+"]").remove()
        document.getElementById('battle_sp').innerHTML = "残りSP"+battle_sp;
        if(pyakedo>1){
            if(havedif>0){
                havedif-=pyakedo;
                pyakedo=Math.trunc(pyakedo/2);
            }else if(havedif==0){
                bhp-=pyakedo;
                pyakedo=Math.trunc(pyakedo/2);
            }
            document.getElementById('yakedo').innerHTML = "焼"+pyakedo;
            if(pyakedo<=1){
                pyakedo=0;
                document.getElementById('yakedo').innerHTML = "";}
        }else{
            myaked=0;
            document.getElementById('yakedo').innerHTML = "";
        }
        if(equi_weapon >= 0){
            if(allweapon[equi_weapon][1]=="無限のオーブ"&&!battle_tefuda.length){
                drow(1);
            }
        }
        eval(viewcard[4]);
        if(viewcard[6]=="ketu"&&battle_tefuda.length==0){
            eval(viewcard[9]);
        }
        battle_sp = battle_sp- viewcard[3];
        status_reload();

    }else{
        if (document.querySelector('div[style="transform: translate(0%, -5%);"]') == null){
        } else {
            let cardnum = document.querySelector('div[style="transform: translate(0%, -5%);"]').dataset.card1;
            let cardi = document.querySelector('div[style="transform: translate(0%, -5%);"]').dataset.card2;
            document.querySelector('div[style="transform: translate(0%, -5%);"]').setAttribute("onclick","cardview("+cardnum+","+cardi+")");
            document.querySelector('div[style="transform: translate(0%, -5%);"]').style.transform = "translate(0%,0%)";
        } 
    }
}
function cardview(viewcard,g){
    var elem = document.querySelector('div[style="transform: translate(0%, -5%);"]');

if (elem == null){
	document.getElementById('c'+g).setAttribute("onclick", "activecard("+viewcard+","+g+")");
    document.getElementById('c'+g).style.transform = "translate(0%,-5%)";
} else {
    let cardnum = document.querySelector('div[style="transform: translate(0%, -5%);"]').dataset.card1;
    let cardi = document.querySelector('div[style="transform: translate(0%, -5%);"]').dataset.card2;
	document.querySelector('div[style="transform: translate(0%, -5%);"]').setAttribute("onclick","cardview("+cardnum+","+cardi+")");
    document.querySelector('div[style="transform: translate(0%, -5%);"]').style.transform = "translate(0%,0%)";
} 
}
// 宝イベント
function takara(){
    document.getElementById("takara_open").classList.remove('hidden');
    document.getElementById("takara_window").innerHTML="";
    document.getElementById("takara_message").innerHTML ="宝を見つけた！開ける？"
    document.getElementById("takara_window").classList.remove('active');
    feedin_animation();
    window.setTimeout(function(){
        document.getElementById("main").setAttribute("class", "takara");
    // ↑クラスをnormalのみにする
   }, 300);
}
function open_takara(){
    document.getElementById("takara_message").innerHTML ="さて、どれにしようか？";
    document.getElementById("takara_window").classList.add('active');
    document.getElementById("takara_open").classList.add('hidden');
    takararum = Math.floor(Math.random() * 10) + 1;
    i =0 ;
    if(takararum >= 5){
        for(var i =0;i<3;i++){
            let rum = allcard[Math.floor(Math.random() * cardgetlength.length)];
            let card = rum[0]-1;
            document.getElementById('takara_window').innerHTML += '<div class="card" onclick="getcard('+card+','+ i +')"><img src="./card/'+ rum[0]+'.png" ><p>'+ rum[8]+'</p><p>'+ rum[3]+'</p><p class="result" a='+rum[5]+'>'+ eval(rum[5])+'</p><div class="card_div"><p>'+ rum[1]+'</p><p>'+rum[2]+'</p></div></div>';
        }
    }if(takararum < 5){
    for(var i=0;i<3;i++){
        upbun = "";
        let rum = Math.floor( Math.random() * 101 ) ;
        if(100 >= rum&&rum >= 81){
            upbun = 1;
            document.getElementById('takara_window').innerHTML += '<div class="card" onclick="getstutas('+upbun+','+ i +')"><img src="./card/hp.png" ><div class="card_div"><p>体力＋５する</p></div>';
        }
        if(80 >= rum&&rum >= 66){
            upbun = 2;
            document.getElementById('takara_window').innerHTML += '<div class="card" onclick="getstutas('+upbun+','+ i +')"><img src="./card/atk.png" ><div class="card_div"><p>筋力+１する</p></div>';
        }
        if(65>=rum&&rum >= 41){
            upbun = 3;
            document.getElementById('takara_window').innerHTML += '<div class="card" onclick="getstutas('+upbun+','+ i +')"><img src="./card/iq.png" ><div class="card_div"><p>知力＋１する</p></div>';
        }
        if(40>=rum&&rum >= 16){
            upbun = 4;
            document.getElementById('takara_window').innerHTML += '<div class="card" onclick="getstutas('+upbun+','+ i +')"><img src="./card/spd.png" ><div class="card_div"><p>俊敏＋１する</p></div>';
        }
        if(15>=rum&&rum >= 3){
            upbun = 5;
            document.getElementById('takara_window').innerHTML += '<div class="card" onclick="getstutas('+upbun+','+ i +')"><img src="./card/luc.png" ><div class="card_div"><p>運＋１する</p></div>';
        }
        if(2>=rum&&rum >= 1){
            upbun = 6;
            document.getElementById('takara_window').innerHTML += '<div class="card" onclick="getstutas('+upbun+','+ i +')"><img src="./card/sp.png" ><div class="card_div"><p>行動力＋１する</p></div>';
        }
    }}status_reload();
}
var upbun ="";
function getcard(card,count){
    donttouch(1500);
    deck.push(allcard[card]);
    if(count==0){document.getElementById("takara_window").children[1].style.filter=" brightness(0%)";document.getElementById("takara_window").children[2].style.filter=" brightness(0%)";}
    if(count==1){document.getElementById("takara_window").children[0].style.filter=" brightness(0%)";document.getElementById("takara_window").children[2].style.filter=" brightness(0%)";}
    if(count==2){document.getElementById("takara_window").children[0].style.filter=" brightness(0%)";document.getElementById("takara_window").children[1].style.filter=" brightness(0%)";}
    document.getElementById("takara_message").innerHTML =allcard[card][1]+"を手に入れた！";
    document.getElementById('dece_window_card').innerHTML += '<div class="card" cardtype="'+allcard[card][0]+'"><img src="./card/'+ allcard[card][0]+'.png" ><p>'+ allcard[card][8]+'</p><p>'+ allcard[card][3]+'</p><p class="result" a='+allcard[card][5]+'>'+ eval(allcard[card][5])+'</p><div class="card_div"><p>'+ allcard[card][1]+'</p><p>'+ allcard[card][2]+'</p></div></div>';
    window.setTimeout(function(){
        normal();
    }, 1000);
}
function getstutas(up,count){
    donttouch(1500);
    status_reload();
    let bun = "";
    if(up==1){
        bun = "体力";
        hp += 5;
        bhp += 5;
    }
    if(up==2){ 
        bun = "筋力"
        atk += 1;
        batk += 1;
    }
    if(up==3){ 
        bun = "知力"
        iq += 1;
        biq += 1;
    }
    if(up==4){ 
        bun = "俊敏"
        spd += 1;
        bspd += 1;
    }
    if(up==5){ 
        bun = "運";
        luc += 1;
    }
    if(up==6){ 
        bun = "行動力";
        sp += 1;
        bsp += 1;
    }
    if(count==0){document.getElementById("takara_window").children[1].style.filter=" brightness(0%)";document.getElementById("takara_window").children[2].style.filter=" brightness(0%)";}
    if(count==1){document.getElementById("takara_window").children[0].style.filter=" brightness(0%)";document.getElementById("takara_window").children[2].style.filter=" brightness(0%)";}
    if(count==2){document.getElementById("takara_window").children[0].style.filter=" brightness(0%)";document.getElementById("takara_window").children[1].style.filter=" brightness(0%)";}
    
    document.getElementById("takara_message").innerHTML =bun+"が上がったぞ！";
    window.setTimeout(function(){
        normal();
    }, 1000);
}
////
var ivent_type=["bed","city","money","ayasii","otosiana","nigiyaka","baka","bear"]
// var ivent_type=["city"]
function ivent(){
    feedin_animation();
    window.setTimeout(function(){
    document.getElementById("main").setAttribute("class", "ivent");
    var value = ivent_type[Math.floor(Math.random()*ivent_type.length)];
    if(value=="bed"){
        document.getElementById("bed_window").classList.remove("hidden");
        document.getElementById("bed_message").innerHTML="わあ！ふかふかのベッドだ！"
        document.getElementById("main").classList.add("bed");
    }
    if(value=="city"){
        document.getElementById("city_action").innerHTML="";
        document.getElementById('card_shop_window').innerHTML ="";
        document.getElementById('weapon_shop_window').innerHTML ="";
        document.getElementById('armor_shop_window').innerHTML ="";
        for(var i =0;i<8;i++){
            let rum = allcard[Math.floor(Math.random() * cardgetlength.length)];
            let card = rum[0]-1;
            document.getElementById('card_shop_window').innerHTML += '<div class="card" onclick="buycard('+card+','+eval(rum[7])+')"><img src="./card/'+ rum[0]+'.png" ><p>'+ rum[8]+'</p><p>'+ rum[3]+'</p><p class="result" a='+rum[5]+'>'+ eval(rum[5])+'</p><div class="card_div"><p>'+ rum[1]+'</p><p>'+rum[2]+'</p></div><p class="price">'+rum[7]+'円</p></div>';
        }
        for(var i =0;i<3;i++){
            let rum = allweapon[Math.floor(Math.random() * allweapon.length)];
            let card = rum[0]-1;
            document.getElementById('weapon_shop_window').innerHTML += '<div class="card" onclick="buyweapon('+card+','+eval(rum[5])+')"><img src="./weapon/'+ rum[0]+'.png" ><div class="card_div"><p>'+ rum[1]+'</p><p>'+rum[4]+'</p></div><p class="price">'+rum[5]+'円</p></div>';
        }
        for(var i =0;i<3;i++){
            let rum = allarmor[Math.floor(Math.random() * allarmor.length)];
            let card = rum[0]-1;
            document.getElementById('armor_shop_window').innerHTML += '<div class="card" onclick="buyarmor('+card+','+eval(rum[4])+')"><img src="./armor/'+ rum[0]+'.png" ><div class="card_div"><p>'+ rum[1]+'</p><p>'+rum[3]+'</p></div><p class="price">'+rum[4]+'円</p></div>';
        }
        status_reload();
        document.getElementById("main").classList.add("city");

        let city_rum=[["yado","宿屋"],["sakaba","酒場"],["weapon","武器屋"],["armor","防具屋"],["skill","スキル屋"]]
        for(var i=0;i<4;i++){
            let value = Math.floor(Math.random()*city_rum.length);
            document.getElementById("city_action").innerHTML+="<p onclick="+city_rum[value][0]+"()>"+city_rum[value][1]+"</p>"
            city_rum.splice(value,1)
        }
        for(var i=0;i<document.getElementsByClassName("shop_action").length;i++){
            document.getElementsByClassName("shop_action")[i].classList.remove("hidden");
        }
        document.getElementById("yado_message").innerHTML="あらいらっしゃい。宿を借りたいのかい？"
    }
    if(value=="money"){
        document.getElementById("main").classList.add("money_ivent");
    }
    if(value=="ayasii"){
        document.getElementById('ayasiicard').innerHTML ='<img src="./ivent/ayasiicard.png">';
        document.getElementById("ayasiicard").classList.add("hidden");
        document.getElementById("ayasiiaction").classList.add("hidden");
        document.getElementById("main").classList.add("ayasii");
        document.getElementById("ayasii_message").innerHTML="陰から声が聞こえる....。"
        window.setTimeout(function(){
            document.getElementById("ayasii_message").innerHTML="このカードを30円で買わないかい？"
            document.getElementById("ayasiicard").classList.remove("hidden");
            document.getElementById("ayasiiaction").classList.remove("hidden");
        }, 1000);
    }
    if(value=="otosiana"){
        document.getElementById("otosiana_go").classList.remove("hidden");
        document.getElementById("otosianaaction").classList.add("hidden");
        document.getElementById("main").classList.add("otosiana");
        document.getElementById("otosiana_message").innerHTML="最悪だ。お金を落としてしまった。<br>(100円失う)"
        havemoney-=100;
        status_reload()
        window.setTimeout(function(){
            document.getElementById("otosianaaction").classList.remove("hidden");
        }, 1000);
    }
    if(value=="nigiyaka"){
        document.getElementById("nigiyaka").classList.remove("kakureru");
        document.getElementById("people").setAttribute("class", "");
        document.getElementById("nigiyakaaction01").classList.remove("hidden");
        document.getElementById("nigiyakaaction02").classList.add("hidden");
        document.getElementById("nigiyakaaction03").classList.add("hidden");
        document.getElementById("nigiyakaaction04").classList.add("hidden");
        document.getElementById("main").classList.add("nigiyaka");
        document.getElementById("nigiyaka_message").innerHTML="近くで賑やかな声が聞こえる。"
    }
    if(value=="baka"){
        ivent_type.splice(6,1);
        document.getElementById("people").style.filter="brightness(0.5)";
        document.getElementById("people").setAttribute("class", "baka");
        document.getElementById("main").classList.add("baka");
        document.getElementById("baka_message").innerHTML="明らかにもバカそうな奴がいる。どうするか。";
        document.getElementById("bakaaction01").classList.remove("hidden");
        document.getElementById("bakaaction02").classList.add("hidden");
        document.getElementById("bakaaction03").classList.add("hidden");
    }
    if(value=="bear"){
        document.getElementById("people").setAttribute("class", "bear");
        document.getElementById("main").classList.add("bear");
        document.getElementById("bear_message").innerHTML="熊だ！かわさなければ！";
        document.getElementById("bearaction01").classList.remove("hidden");
    }
   }, 300);
}
////////////////////////////////////////////////////////////
var yado_money =30;
function yado(){
    window.setTimeout(function(){
        document.getElementById("people").setAttribute("class", "yado");
        document.getElementById("yado_action").innerHTML="宿を借りる("+yado_money+"円)";
        document.getElementById("main").classList.remove("city");
        document.getElementById("main").classList.add("yado");
        document.getElementById("main").classList.add("shop");
    }, 300);
}
function yado_play(){
    if(havemoney>=yado_money){
        havemoney -=yado_money;
        for(var i=0;i<document.getElementsByClassName("shop_action").length;i++){
            document.getElementsByClassName("shop_action")[i].classList.add("hidden");
        }
        document.getElementById("yado_message").innerHTML="体力を全回復した"
        bhp =hp;
        status_reload();
        yado_money+=20;
        window.setTimeout(function(){
            shop_back()
        }, 1000);
    }else{
        document.getElementById("yado_message").innerHTML="お金が足りないようだ";
    }
}

function sakaba(){
    feedin_animation();
    window.setTimeout(function(){
        document.getElementById("main").classList.remove("city");
        document.getElementById("main").classList.add("sakaba");
        document.getElementById("main").classList.add("shop");
    }, 300);

}

function weapon(){
    feedin_animation();
    window.setTimeout(function(){
        document.getElementById("people").setAttribute("class", "weapon");
        document.getElementById("main").classList.remove("city");
        document.getElementById("main").classList.add("weapon");
        document.getElementById("main").classList.add("shop");
    }, 300);

}
function show_weapon_shop(){
    document.getElementById("weapon_shop_window").classList.remove("hidden");
    document.getElementById("weapon_shop_close").classList.remove("hidden");
}
function buyweapon(card,place){
    if(place<=havemoney){
        equi_weapon = card;
        document.getElementById("card_shop_message").style.zindex="1000";
        document.getElementById("weapon_shop_message").innerHTML =allweapon[card][1]+"を手に入れた！";
        if(equi_weapon >= 0){
            if(allweapon[equi_weapon][2]=="atk"){
            atk = atk + allweapon[equi_weapon][3];
            batk = batk + allweapon[equi_weapon][3];
            }
            if(allweapon[equi_weapon][2]=="iq"){
                iq = iq + allweapon[equi_weapon][3];
                biq = biq + allweapon[equi_weapon][3];
            }
            if(before_equi_weapon[2]=="atk"){
                atk= atk-before_equi_weapon[3];
                batk= batk-before_equi_weapon[3]}
            if(before_equi_weapon[2]=="iq"){
                iq= iq-before_equi_weapon[3];
                biq= biq-before_equi_weapon[3]}
            before_equi_weapon = allweapon[equi_weapon];
        }
        console.log(equi_weapon)
        document.getElementById('weapon_equi').innerHTML = '<img src="./weapon/'+ allweapon[card][0]+'.png" ><div class="card_div"><p>'+ allweapon[card][1]+'</p><p>'+ allweapon[card][4]+'</p></div>';
        havemoney-=place;
        status_reload();
        window.setTimeout(function(){
            document.getElementById("card_shop_message").style.zindex="1";
            document.getElementById("weapon_shop_message").innerHTML ="ここの品は天下一品さ。さあ見てってくれ";
        }, 1000);
        }
}
function close_weapon_shop(){
    document.getElementById("weapon_shop_window").classList.add("hidden");
    document.getElementById("weapon_shop_close").classList.add("hidden");
}

function armor(){
    feedin_animation();
    window.setTimeout(function(){
        document.getElementById("people").setAttribute("class", "armor");
        document.getElementById("main").classList.remove("city");
        document.getElementById("main").classList.add("armor");
        document.getElementById("main").classList.add("shop");
    }, 300);
}
function show_armor_shop(){
    document.getElementById("armor_shop_window").classList.remove("hidden");
    document.getElementById("armor_shop_close").classList.remove("hidden");
}
function close_armor_shop(){
    document.getElementById("armor_shop_window").classList.add("hidden");
    document.getElementById("armor_shop_close").classList.add("hidden");
}
function buyarmor(card,place){
    if(place<=havemoney){
        equi_armor = card;
        document.getElementById("card_shop_message").style.zindex="1000";
        document.getElementById("armor_shop_message").innerHTML =allarmor[card][1]+"を手に入れた！";
        if(equi_armor >= 0){
            console.log(bhp,hp,allarmor[equi_armor][2],before_equi_armor[2])
            hp = hp + allarmor[equi_armor][2];
            bhp = bhp + allarmor[equi_armor][2];
            if(before_equi_armor){
                hp = hp-before_equi_armor[2];
                bhp = bhp-before_equi_armor[2];
            }
            before_equi_armor = allarmor[equi_armor];
        }
        console.log(equi_armor)
        document.getElementById('armor_equi').innerHTML = '<img src="./armor/'+ allarmor[card][0]+'.png" ><div class="card_div"><p>'+ allarmor[card][1]+'</p><p>'+allarmor[card][3]+'</p></div>';
        havemoney-=place;
        status_reload();
        window.setTimeout(function(){
            document.getElementById("card_shop_message").style.zindex="1";
            document.getElementById("armor_shop_message").innerHTML ="うっす。いらっしゃい～。";
        }, 1000);
        }
}

function skill(){
    feedin_animation();
    window.setTimeout(function(){
        document.getElementById("people").setAttribute("class", "skill");
        document.getElementById("main").classList.remove("city");
        document.getElementById("main").classList.add("skill");
        document.getElementById("main").classList.add("shop");
    }, 300);
}
function show_skill_shop(){
    document.getElementById("card_shop_window").classList.remove("hidden");
    document.getElementById("card_shop_close").classList.remove("hidden");
}
function close_card_shop(){
    document.getElementById("card_shop_window").classList.add("hidden");
    document.getElementById("card_shop_close").classList.add("hidden");
}
function buycard(card,place){
    if(place<=havemoney){
    deck.push(allcard[card]);
    document.getElementById("card_shop_message").style.zindex="1000";
    document.getElementById("card_shop_message").innerHTML =allcard[card][1]+"を手に入れた！";
    document.getElementById('dece_window_card').innerHTML += '<div class="card" cardtype="'+allcard[card][0]+'"><img src="./card/'+ allcard[card][0]+'.png" ><p>'+ allcard[card][8]+'</p><p>'+ allcard[card][3]+'</p><p class="result" a='+allcard[card][5]+'>'+ eval(allcard[card][5])+'</p><div class="card_div"><p>'+ allcard[card][1]+'</p><p>'+ allcard[card][2]+'</p></div></div>';
    havemoney-=place;
    status_reload();
    window.setTimeout(function(){
        document.getElementById("card_shop_message").style.zindex="1";
        document.getElementById("card_shop_message").innerHTML ="ここではスキルの習得ができるわよ。";
    }, 1000);
    }
}

function shop_back(){
    feedin_animation()
    window.setTimeout(function(){
        document.getElementById("people").setAttribute("class", "");
        document.getElementById("main").setAttribute("class", "ivent city");
        for(var i=0;i<document.getElementsByClassName("shop_action").length;i++){
            document.getElementsByClassName("shop_action")[i].classList.remove("hidden");
        }
        document.getElementById("yado_message").innerHTML="あらいらっしゃい。宿を借りたいのかい？"
        }, 300);
}
/////////////////////////////////////////////////

function gotobed(){
    document.getElementById("bed_window").classList.add("hidden");
    document.getElementById("bed_message").innerHTML="体力を全回復した"
    bhp =hp;
    status_reload();
    window.setTimeout(function(){
        normal()
    }, 300);
}
//////////////////////////////////////////////////
function getmoney_ivent(){
    havemoney+=50;
    status_reload();
    normal();
}
/////////////////////////////////////////////////
function ayasii_go(){
    if(havemoney>=30){
        donttouch(1500);
        havemoney-=30;
        let rum = allcard[Math.floor(Math.random() * cardgetlength.length)];
        document.getElementById('ayasiicard').innerHTML = '<img src="./card/'+ rum[0]+'.png" ><p>'+ rum[8]+'</p><p>'+ rum[3]+'</p><p class="result" a='+rum[5]+'>'+ eval(rum[5])+'</p><div class="card_div"><p>'+ rum[1]+'</p><p>'+rum[2]+'</p></div>';
        window.setTimeout(function(){
            deck.push(rum);
            document.getElementById('dece_window_card').innerHTML += '<div class="card" cardtype="'+rum[0]+'"><img src="./card/'+ rum[0]+'.png" ><p>'+ rum[8]+'</p><p>'+ rum[3]+'</p><p class="result" a='+rum[5]+'>'+ eval(rum[5])+'</p><div class="card_div"><p>'+ rum[1]+'</p><p>'+ rum[2]+'</p></div></div>';
            document.getElementById("ayasii_message").innerHTML=rum[1]+"を手に入れた。"
            window.setTimeout(function(){
                normal();
            }, 1000);
        }, 300);
    }else(document.getElementById("ayasii_message").innerHTML="足りないな。それじゃあげれない。")

}
/////////////////////////////////////////////////
function otosiana_gofunc(){
    document.getElementById("otosiana_go").classList.add("hidden");
    let luckymoney = Math.floor(Math.random() * (10 + 1 - 5) ) + 5;
    if(luckymoney<luc){
        document.getElementById("otosiana_message").innerHTML="なんと！他人のお財布も見つけた！<br>(200円獲得)"
        havemoney+=200;
    }else if((luckymoney-2)<luc){
        document.getElementById("otosiana_message").innerHTML="おっと！見つけたぞ！<br>(100円獲得)"
        havemoney+=100;
    }else{
        document.getElementById("otosiana_message").innerHTML="どうあがいても取れない。哀れだ。"
    }
    status_reload()
}
////////////////////////////////////////////////
function nigiyaka_go(){
    document.getElementById("nigiyakaaction01").classList.add("hidden");
    let nigiyaka_rum = Math.floor(Math.random() * (10 + 1 - 1) ) + 1;
    if(nigiyaka_rum<luc){
        feedin_animation()
        window.setTimeout(function(){
            document.getElementById("people").setAttribute("class", "luckyboy");
            document.getElementById("nigiyaka_message").innerHTML="やあ、少年！僕はラッキーボーイ！"
            document.getElementById("nigiyakaaction02").classList.remove("hidden");
        }, 300);
    }else{
        feedin_animation()
        window.setTimeout(function(){
            document.getElementById("people").setAttribute("class", "sanzoku");
            document.getElementById("nigiyaka_message").innerHTML="物好きもいるもんだな！！やっちまえ！けっけっけ！"
            window.setTimeout(function(){
            document.getElementById("nigiyakaaction03").classList.remove("hidden");
        }, 1000);
        }, 300);
    }
}
function nigiyaka_why01(){
    document.getElementById("nigiyakaaction02").classList.add("hidden");
    document.getElementById("nigiyaka_message").innerHTML="ああそうさ！僕に出会えた君は幸運だね！"
    window.setTimeout(function(){
        document.getElementById("nigiyaka_message").innerHTML="これをあげるよ！"
        window.setTimeout(function(){
            document.getElementById("nigiyaka_message").innerHTML="幸運の証を手に入れた！！"
            let card = allcard.findIndex(([x]) => x == 211);
            deck.push(allcard[card]);
            document.getElementById('dece_window_card').innerHTML += '<div class="card" cardtype="'+allcard[card][0]+'"><img src="./card/'+ allcard[card][0]+'.png" ><p>'+ allcard[card][8]+'</p><p>'+ allcard[card][3]+'</p><p class="result" a='+allcard[card][5]+'>'+ eval(allcard[card][5])+'</p><div class="card_div"><p>'+ allcard[card][1]+'</p><p>'+ allcard[card][2]+'</p></div></div>';        
            window.setTimeout(function(){
                normal();
            }, 1500);
        }, 1000);
    }, 1500);
}
function nigiyaka_why02(){
    document.getElementById("nigiyakaaction02").classList.add("hidden");
    document.getElementById("nigiyaka_message").innerHTML="何を言っているんだい？栗を拾ってるの決まってるじゃないか！"
    window.setTimeout(function(){
        document.getElementById("nigiyakaaction02").classList.remove("hidden");
    }, 1000);
}
function nigiyaka_why03(){
    document.getElementById("nigiyakaaction02").classList.add("hidden");
    document.getElementById("nigiyaka_message").innerHTML="僕が味方に見えるのかい？正解！"
    window.setTimeout(function(){
        document.getElementById("nigiyakaaction02").classList.remove("hidden");
    }, 1000);
}
function nigiyaka_hidden(){
    feedin_animation()
    window.setTimeout(function(){
        document.getElementById("nigiyaka").classList.add("kakureru");
        document.getElementById("nigiyakaaction01").classList.add("hidden");
        let nigiyaka_rum = Math.floor(Math.random() * (10 + 1 - 1) ) + 1;
        if(nigiyaka_rum<luc){
            document.getElementById("nigiyaka_message").innerHTML="誰だかわからないが青年のようだ。まあ構う暇はないな。"
        }else{
            document.getElementById("nigiyaka_message").innerHTML="どうやら山賊たちの周回のようだ。隠れてよかった。"
        }
        document.getElementById("nigiyakaaction04").classList.remove("hidden");
    }, 300);
}
function nigiyaka_battle(){
    battle(201);
}
///////////////////////////////////////////////
function baka_hanasu01(){
    document.getElementById("bakaaction01").classList.add("hidden");
    if(biq>=3){
        document.getElementById("people").style.filter="brightness(1)";
        document.getElementById("baka_message").innerHTML="おめえ何言ってだあ？？オラにはわかんねえぞ";
        window.setTimeout(function(){
            document.getElementById("baka_message").innerHTML="オラ今、この芋虫の相手で忙しいんだけんど～。";
            window.setTimeout(function(){
                document.getElementById("people").style.filter="brightness(0.5)";
                document.getElementById("baka_message").innerHTML="どうやら、私のIQが高すぎて会話にならないようだ。";
                window.setTimeout(function(){
                    document.getElementById("baka_message").innerHTML="知力が2以下であれば会話できるかもしれない。";
                    window.setTimeout(function(){
                        document.getElementById("bakaaction02").classList.remove("hidden");
                    }, 1000);
                }, 2000);
            }, 2000);
        }, 2000);
    }
    if(biq<=2){
        document.getElementById("people").style.filter="brightness(1)";
        document.getElementById("baka_message").innerHTML="初めまして。本日はお日柄も良く、貴殿に出会えて微笑ましく思います。";
        window.setTimeout(function(){
            document.getElementById("bakaaction03").classList.remove("hidden");
            document.getElementById("baka_message").innerHTML="私にどのような御用でしょうか？";

        }, 2000);
}}

function baka_hanasu02(){
    document.getElementById("bakaaction03").classList.add("hidden");
    document.getElementById("people").style.filter="brightness(1)";
        document.getElementById("baka_message").innerHTML="今は研究の一環として、この新しい芋虫を見ていたところです。";
        window.setTimeout(function(){
            document.getElementById("baka_message").innerHTML="あ！そうだ、この出会いはきっと何かの縁です。";
            window.setTimeout(function(){
                document.getElementById("baka_message").innerHTML="この新種の芋虫をお持ちになってください。";
                window.setTimeout(function(){
                    document.getElementById("people").style.filter="brightness(0.5)";
                    document.getElementById("baka_message").innerHTML="芋虫を手に入れた！";
                    let card = allcard.findIndex(([x]) => x == 212);
                    deck.push(allcard[card]);
                           console.log(allcard[card])
                           console.log(deck)
                    document.getElementById('dece_window_card').innerHTML += '<div class="card" cardtype="'+allcard[card][0]+'"><img src="./card/'+ allcard[card][0]+'.png" ><p>'+ allcard[card][8]+'</p><p>'+ allcard[card][3]+'</p><p class="result" a='+allcard[card][5]+'>'+ eval(allcard[card][5])+'</p><div class="card_div"><p>'+ allcard[card][1]+'</p><p>'+ allcard[card][2]+'</p></div></div>';        
                    document.getElementById("bakaaction02").classList.remove("hidden");
                }, 2000);
            }, 2000);
        }, 2000);
}
function baka_hanasu03(){
    document.getElementById("bakaaction03").classList.add("hidden");
    document.getElementById("people").style.filter="brightness(1)";
        document.getElementById("baka_message").innerHTML="あ、名乗り遅れました。私昆虫学者を行っているものです。";
        window.setTimeout(function(){
            document.getElementById("baka_message").innerHTML="ちょうど研究の一環として、この新しい芋虫を見ていたところです。";
                window.setTimeout(function(){
                    document.getElementById("baka_message").innerHTML="あ！そうだ、この出会いはきっと何かの縁です。";
                    window.setTimeout(function(){
                        document.getElementById("baka_message").innerHTML="この新種の芋虫をお持ちになってください。";
                        window.setTimeout(function(){
                           document.getElementById("people").style.filter="brightness(0.5)";
                           document.getElementById("baka_message").innerHTML="芋虫を手に入れた！";
                           let card = allcard.findIndex(([x]) => x == 212);
                           deck.push(allcard[card]);
                           console.log(allcard[card])
                           console.log(deck)
                           document.getElementById('dece_window_card').innerHTML += '<div class="card" cardtype="'+allcard[card][0]+'"><img src="./card/'+ allcard[card][0]+'.png" ><p>'+ allcard[card][8]+'</p><p>'+ allcard[card][3]+'</p><p class="result" a='+allcard[card][5]+'>'+ eval(allcard[card][5])+'</p><div class="card_div"><p>'+ allcard[card][1]+'</p><p>'+ allcard[card][2]+'</p></div></div>';        
                           document.getElementById("bakaaction02").classList.remove("hidden");
                        }, 2000);
                   }, 2000);
                }, 2000);
        }, 2000);
}
///////////////////////////////////////////////
function bear_kawasu(){
    document.getElementById("bearaction01").classList.add("hidden");
    let rum = Math.floor(Math.random() * (10 + 1 - 1) ) + 1;
    if(rum<spd){
        feedin_animation();
        window.setTimeout(function(){
            document.getElementById("people").setAttribute("class", "");
            document.getElementById("bear_message").innerHTML="何とか躱せたみたいだ。助かった";
            window.setTimeout(function(){
                normal();
            }, 2000);
        }, 300);

    }else{
        document.getElementById("people").classList.add('atk');
        document.getElementById("html").classList.add('matk');
        window.setTimeout(function(){
        document.getElementById("html").classList.remove('matk');
        document.getElementById("people").classList.remove('atk');
        document.getElementById("bear_message").innerHTML="深手を負ってしまった。";
        }, 800);
        window.setTimeout(function(){
            feedin_animation()
            window.setTimeout(function(){
                document.getElementById("people").setAttribute("class", "");
                document.getElementById("bear_message").innerHTML="どうやら満足したらしく森へ帰っていった、なんて陰湿なのだ。";
                window.setTimeout(function(){
                    normal()
                }, 2000); 
            }, 300);
        }, 2000);
    }
}
function bear_tenazukeru(){
    document.getElementById("bearaction01").classList.add("hidden");
    let rum = Math.floor(Math.random() * (10 + 1 - 1) ) + 1;
    if(rum<luc){
        feedin_animation()
        window.setTimeout(function(){
            document.getElementById("people").setAttribute("class", "");
            document.getElementById("bear_message").innerHTML="満足したのか、森へ帰っていった。";
            window.setTimeout(function(){
                document.getElementById("bear_message").innerHTML="また、見かけたらなにか貰えるかもしれないな。";
                window.setTimeout(function(){
                    normal();
                }, 2000);
            }, 2000);
        }, 300);

    }else{
        document.getElementById("people").classList.add('atk');
        document.getElementById("html").classList.add('matk');
        window.setTimeout(function(){
        document.getElementById("html").classList.remove('matk');
        document.getElementById("people").classList.remove('atk');
        document.getElementById("bear_message").innerHTML="失敗だ！！襲ってくる！！";
        }, 800);
        window.setTimeout(function(){
            feedin_animation();
            window.setTimeout(function(){
                document.getElementById("people").setAttribute("class", "");
                document.getElementById("bear_message").innerHTML="どうやら満足したらしく森へ帰っていった、なんて陰湿なのだ。";
                window.setTimeout(function(){
                    normal()
                }, 2000);
            }, 300);
        }, 2000);
    }

}
function bear_battle(){
    document.getElementById("bearaction01").classList.add("hidden");
    battle(202);
    document.getElementById("people").setAttribute("class", "");
}