<!DOCTYPE html>
<html lang="ja" id="html">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width,initial-scale=1,user-scalable=no">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https: //fonts.googleapis.com/css2? family=新+テゴミン& display=swap" rel="stylesheet">
    <link rel="stylesheet" href="game.css">
    <script src="./imagereplord.js"></script>
    <script src="./jquery_3.3.1.min.js"></script>
    <title>魅惑のダンジョンズ</title>
</head>
<body>
    <p id="lose"class="hidden">意識が、、薄れていく、、。</p>
    <div id="ranking_input" class="hidden">
        <p id="score">SCORE:階</p>
        <form id="form" name="form"action="ranking.php" method="post">
        ランキングに登録する
            <fieldset>
                <input type="text" name="username" cols="10" rows="5" required="required" placeholder="ユーザー名を入力">
                <input type="hidden" name="score" value="" id="scorelevel">
                <input id="formbutton" type="submit" onclick="checkForm()">
            </fieldset>
            <script>
                function checkForm(){
                    if(document.form.username.value == "")
                    {
                        return false;
                    }else{
                        document.getElementById("formbutton").classList.add('hidden');  
                        return true;
                    }
                }
            </script>
        </form>
        <a href="./index.php">メインメニューに戻る</a>
    </div>
    <main id="main">
        <div id="people"></div>
        <div id="donttouch"></div>
        <div id="background"></div>
        <div id="dice">
            <ul>
                <li>体力：<span id="dice_down_hp"class="dwn"onclick="hdwn()">◀</span><span id="dice_hp"></span><span id="dice_up_hp"class="stup hidden"onclick="hup()">▶</span></li>
                <li>筋力：<span id="dice_down_atk"class="dwn"onclick="adwn()">◀</span><span id="dice_atk"></span><span id="dice_up_atk"class="stup hidden"onclick="aup()">▶</span></li>
                <li>知力：<span id="dice_down_iq"class="dwn"onclick="idwn()">◀</span><span id="dice_iq"></span><span id="dice_up_iq"class="stup hidden"onclick="iup()">▶</span></li>
                <li>俊敏：<span id="dice_down_spd"class="dwn"onclick="sdwn()">◀</span><span id="dice_spd"></span><span id="dice_up_spd"class="stup hidden"onclick="sup()">▶</span></li>
                <li>運：<span id="dice_down_luc"class="dwn"onclick="ldwn()">◀</span><span id="dice_luc"></span><span id="dice_up_luc"class="stup hidden"onclick="lup()">▶</span></li>
                <li>行動力:3</li>
                <div id="dice_window"><p id="stutas_setting_value">残り：０</p><p onclick="start_game()">進む</p></div>
            </ul>
        </div>
        <div id="status">
            <p id="hp_bar">♥</p>
            <p id="money_bar">0円</p>
            <ul>
                <li id="atk_bar">筋</li>
                <li id="sabun_atk_bar"></li>
                <li id="iq_bar">知</li>
                <li id="sabun_iq_bar"></li>
                <li id="spd_bar">俊</li>
                <li id="sabun_spd_bar"></li>
                <li id="luc_bar">運</li>
                <li id="sabun_luc_bar"></li>
                <li id="sp_bar">行</li>
                <li id="sabun_sp_bar"></li>
            </ul>
        </div>
        <div id="deck_window" class="hidden">
            <div id="equi">
                <div id="weapon_equi" class="card"><img src="./card/weapon.png"></div>
                <div id="armor_equi" class="card"><img src="./card/armor.png"></div>
            </div>
            <div id="dece_window_card"></div>
        </div>
        <div id="normal_message"class="message">やけに静かで嫌な予感がする<br>用心して進もう。</div>
        <div id="deck_close" onclick="closedeck()" class="hidden"></div>
        <img id="deck" onclick="opendeck()" src="./deck.png" alt="">
        <div id="level">1階</div>
        <div id="susumu" onclick="nextup()">進む</div>

        <h1 id="tarneffect"></h1>
        <div id="monster"class="up"></div>
        <div id="damage_count_animation"></div>
        <div id="entity_hp">♥</div>
        <div id="tarnend" onclick="tarnend()">ターン終了</div>
        <div id="battle_pleyer_status">
            <div id="battle_sp">残りSP:3</div>
            <div id="diffence">防</div>
            <div id="yakedo"></div>
        </div>
        <div id="battle_monster_status">
            <div id="mdiffence"></div>
            <div id="myakedo"></div>
        </div>
        <div id="monster_patarn"></div>
        <div id="battle_tefuda"></div>

        <div id="takara_message"class="message">宝を見つけた！開ける？</div>
        <div id="takara_window"></div>
        <div id="takara_open"onclick="open_takara()">開ける</div>
        <div id="takara_exit"onclick="normal()">いらない</div>

        <div id="ivent">
            <div id="bed">
                <p id="bed_message"class="message">わあ！ふかふかのベッドだ！</p>
                <ul id="bed_window">
                    <p onclick="gotobed()">寝るとするか</p>
                    <p onclick="normal()">去る</p>
                </ul>
            </div>

            <div id="city">
                <p class="message">集落についた</p>
                <ul id="city_action">
                </ul>
                <p onclick="normal()">去る</p>
            </div>
            <div id="shop">
                <div id="sakaba">
                    <ul class="shop_action">
                        <p onclick="shop_back()">戻る</p>
                    </ul>
                </div>
                <div id="yado">
                    <ul class="shop_action">
                        <p id="yado_action"onclick="yado_play()">宿を借りる（30円）</p>
                        <p onclick="shop_back()">戻る</p>
                    </ul>
                    <p id="yado_message"class="message">あらいらっしゃい。宿を借りたいのかい？</p>
                </div>
                <div id="skill">
                    <ul class="shop_action">
                        <p onclick="show_skill_shop()">見せてくれ</p>
                        <p onclick="shop_back()">戻る</p>
                    </ul>
                    <p id="card_shop_message"class="message">ここではスキルの習得ができるわよ。</p>
                    <div id="card_shop_window" class="hidden shop_window"></div>
                    <div id="card_shop_close" onclick="close_card_shop()" class="hidden shop_window_close"></div>
                </div>
                <div id="weapon">
                    <ul class="shop_action">
                        <p onclick="show_weapon_shop()">見せてくれ</p>
                        <p onclick="shop_back()">戻る</p>
                    </ul>
                    <p id="weapon_shop_message"class="message">ここの品は天下一品さ。さあ見てってくれ</p>
                    <div id="weapon_shop_window" class="hidden shop_window"></div>
                    <div id="weapon_shop_close" onclick="close_weapon_shop()" class="hidden shop_window_close"></div>
                </div>
                <div id="armor">
                    <ul class="shop_action">
                        <p onclick="show_armor_shop()">見せてくれ</p>
                        <p onclick="shop_back()">戻る</p>
                    </ul>
                    <p id="armor_shop_message"class="message">うっす。いらっしゃい～。</p>
                    <div id="armor_shop_window" class="hidden shop_window"></div>
                    <div id="armor_shop_close" onclick="close_armor_shop()" class="hidden shop_window_close"></div>
                </div>
            </div>

            <div id="money_ivent">
                <p id="money_ivent_message"class="message">おや？財宝じゃないか！</p>
                <ul class="action">
                    <p onclick="getmoney_ivent()">持ってく</p>
                </ul>
            </div>

            <div id="ayasii">
                <p id="ayasii_message"class="message">陰から声が聞こえる</p>
                <div id="ayasiicard"class="card hidden"><img src="./ivent/ayasiicard.png" alt=""></div>
                <ul id="ayasiiaction"class="action hidden">
                    <p onclick="ayasii_go()">応じる</p>
                    <p onclick="normal()">拒む</p>
                </ul>
            </div>

            <div id="otosiana">
                <p id="otosiana_message"class="message">最悪だ。お金を落としてしまった。<br>(100円失う)</p>
                <ul id="otosianaaction"class="action hidden">
                    <p id="otosiana_go"onclick="otosiana_gofunc()">拾ってみる</p>
                    <p onclick="normal()">前へ進む</p>
                </ul>
            </div>

            <div id="nigiyaka">
                <p id="nigiyaka_message"class="message">近くで賑やかな声が聞こえる。</p>
                <ul id="nigiyakaaction01"class="action">
                    <p onclick="nigiyaka_go()">話しかけてみる</p>
                    <p onclick="nigiyaka_hidden()">隠れる</p>
                </ul>
                <ul id="nigiyakaaction02"class="action hidden">
                    <p onclick="nigiyaka_why01()">ラッキーボーイ？</p>
                    <p onclick="nigiyaka_why02()">ここで何をしているの？</p>
                    <p onclick="nigiyaka_why03()">君は敵かい？</p>
                </ul>
                <ul id="nigiyakaaction03"class="action hidden">
                    <p onclick="nigiyaka_battle()">戦闘開始</p>
                </ul>
                <ul id="nigiyakaaction04"class="action hidden">
                    <p onclick="normal()">戻る</p>
                </ul>
            </div>

            <div id="baka">
                <p id="baka_message"class="message">明らかにもバカそうな奴がいる。どうするか。</p>
                <ul id="bakaaction01"class="action">
                    <p onclick="baka_hanasu01()">話しかけてみる</p>
                    <p onclick="normal()">構うなほっておけ</p>
                </ul>
                <ul id="bakaaction02"class="action">
                    <p onclick="normal()">戻る</p>
                </ul>
                <ul id="bakaaction03"class="action">
                    <p onclick="baka_hanasu02()">ここで何をしている？</p>
                    <p onclick="baka_hanasu03()">貴方は何者？</p>
                </ul>
            </div>

            <div id="bear">
                <p id="bear_message"class="message">熊だ！かわさなければ！</p>
                <ul id="bearaction01"class="action">
                    <p onclick="bear_kawasu()">躱す</p>
                    <p onclick="bear_tenazukeru()">手懐ける</p>
                    <p onclick="bear_battle()">対峙する</p>
                </ul>
            </div>
        </div>

        <script>
        var allcard =[];
        var allweapon=[];
        var allarmor=[];
        </script>
                <?php
              //$dsn = 'mysql:host=mysql632.db.sakura.ne.jp;dbname=sllyun14_miwakunosiro;charset=utf8';
              //$user = 'sllyun14';
              //$password = 'sql20000114';
              $dsn = 'mysql:dbname=miwakunosiro;host=localhost';
              $user = 'root';
              $password = '';
              try {
               
                // PDOインスタンスを生成
                $dbh = new PDO($dsn, $user, $password);
               
              // エラー（例外）が発生した時の処理を記述
              } catch (PDOException $e) {
               
                // エラーメッセージを表示させる
                echo 'データベースにアクセスできません！' . $e->getMessage();
               
                // 強制終了
                exit;
               
              }
              
                $sql = "SELECT * FROM miwakunosiro  ORDER BY id";
                $stmt = $dbh->query($sql);
                foreach ($stmt as $row) {
                        $id = $row['id'];
                        $name = $row['name'];
                        $description = $row['description'];
                        $sp = $row['sp'];
                        $source = $row['source'];
                        $hikisuu = $row['hikisuu'];
                        $actiontypepe = $row['actiontype'];
                        $money = $row['money'];
                        $cardtype = $row['cardtype'];
                        $opfunc = $row['opfunc'];
                        $php_array =[$id,$name,$description,$sp,$source,$hikisuu,$actiontypepe,$money,$cardtype,$opfunc];
                        $json_array = json_encode($php_array);


                        echo('<script> 
                        var js_array = '.$json_array.';
                        allcard.push(js_array);
                        </script>');
                    }
                $sql = "SELECT * FROM weapon ORDER BY id";
                $stmt = $dbh->query($sql);
                foreach ($stmt as $row) {
                        $id = $row['id'];
                        $name = $row['name'];
                        $type = $row['type'];
                        $plus = $row['plus'];
                        $description02 = $row['description02'];
                        $money = $row['money'];
                        $php_array =[$id,$name,$type,$plus,$description02,$money];
                        $json_array = json_encode($php_array);


                        echo('<script> 
                        var js_array = '.$json_array.';
                        allweapon.push(js_array);
                        </script>');
                    }
                $sql = "SELECT * FROM armor  ORDER BY id";
                $stmt = $dbh->query($sql);
                foreach ($stmt as $row) {
                        $id = $row['id'];
                        $name = $row['name'];
                        $plus = $row['plus'];
                        $description03 = $row['description03'];
                        $money = $row['money'];
                        $php_array =[$id,$name,$plus,$description03,$money];
                        $json_array = json_encode($php_array);


                        echo('<script> 
                        var js_array = '.$json_array.';
                        allarmor.push(js_array);
                        </script>');
                    }

                $dbh = null;
                ?>
                <script>
                console.log(allarmor);
                console.log(allweapon);
                console.log(allcard);
                $("body").bind
                ("contextmenu", function(e)
                {return false;}
                );
                </script>
             
    </main>
    <script src="./stutasu_setting.js"></script>
    <script src="./game.js"></script>
    <script src="./scrollreveall.js"></script>
    
</body>
</html>