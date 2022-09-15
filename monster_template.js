//コピペ用素材//

//攻撃
if (mra== x){monster_action = ["mtopdamage(Math.trunc(matk))"]
    document.getElementById('monster_patarn').innerHTML += '<div class="atk">'+Math.trunc(matk)+'<p>攻撃しようとしている。</p></div>';
}
if (mra== x){monster_action = ["mtopslash(Math.trunc(matk))"];
    document.getElementById('monster_patarn').innerHTML += '<div class="slash">'+Math.trunc(matk)+'<p>貫通攻撃しようとしている。</p></div>';
}
//防御
if (mra== x){monster_action = ['mdifence(Math.trunc(mdef))']
    document.getElementById('monster_patarn').innerHTML += '<div class="def">'+Math.trunc(mdef)+'<p>防御しようとしている。</p></div>';
}

//力をためる
if (mra== x){monster_action = ['matkup(Math.trunc(1*ml))']
           document.getElementById('monster_patarn').innerHTML += '<div class="atkup">'+Math.trunc(1*ml)+'<p>力を溜めようとしている</p></div>';
}
//防御量アップ
if (mra== x){monster_action=("mdefup(Math.trunc(mdef))");
    document.getElementById('monster_patarn').innerHTML += '<div class="defup">'+Math.trunc(mdef)+'<p>防御力を上げようとしている。</p></div>';
}

//回復
if (mra== x){monster_action = ["mheal(Math.trunc(4*ml))"];
    document.getElementById('monster_patarn').innerHTML += '<div class="heal">'+Math.trunc(4*ml)+'<p>回復しようとしている。</p></div>';
}

//防御無効
if (mra== x){monster_action=("nodiffence()");
    document.getElementById('monster_patarn').innerHTML += '<div class="special">　<p>防御を無くさせようとしている。</p></div>';
}

//力を下げる
if (mra== x){monster_action=("matkdown(Math.trunc(10*ml))");
    document.getElementById('monster_patarn').innerHTML += '<div class="special">'+Math.trunc(10*ml)+'<p>筋力を下げようとしている。</p></div>';
}

//骨折
if (mra== x){monster_action = ["noroi(0)"]
    document.getElementById('monster_patarn').innerHTML += '<div class="special">　<p>呪いで骨折させようとしている。</p></div>';
}

//切り傷
if (mra== x){monster_action = ["noroi(1)"]
    document.getElementById('monster_patarn').innerHTML += '<div class="special">　<p>呪いで切り傷させようとしている。</p></div>';
}

//鬱
if (mra== x){monster_action = ["noroi(2)"]
    document.getElementById('monster_patarn').innerHTML += '<div class="special">　<p>呪いで鬱させようとしている。</p></div>';
}

//戦意喪失
if (mra== x){monster_action = ["noroi(3)"]
    document.getElementById('monster_patarn').innerHTML += '<div class="special">　<p>呪いで戦意喪失させようとしている。</p></div>';
}

//集中力散漫
if (mra== x){monster_action = ["noroi(4)"]
    document.getElementById('monster_patarn').innerHTML += '<div class="special">　<p>呪いで散漫させようとしている。</p></div>';
}

//燃やす
if (mra== x){monster_action = ["mfire(Math.trunc(matk))"];
    document.getElementById('monster_patarn').innerHTML += '<div class="fire">'+Math.trunc(matk)+'<p>火をつけようとしている</p></div>';
}
//ドレイン
if (mra== x){monster_action = ["mdrain(Math.trunc(4*ml))"];
    document.getElementById('monster_patarn').innerHTML += '<div class="drain">'+Math.trunc(4*ml)+'<p>吸血しようとしている</p></div>';
}
//石化
if (mra== x){monster_action = ["sekika()"]
    document.getElementById('monster_patarn').innerHTML += '<div class="special">　<p>石化させようとしている。</p></div>';
}