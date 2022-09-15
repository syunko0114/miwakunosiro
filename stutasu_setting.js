var stutas_value = 0;

var hp = 16;
document.getElementById('dice_hp').innerHTML = hp;
var atk = 4;
document.getElementById('dice_atk').innerHTML = atk;
var iq = 4;
document.getElementById('dice_iq').innerHTML = iq;
var spd = 3;
document.getElementById('dice_spd').innerHTML = spd;
var luc = 3;
document.getElementById('dice_luc').innerHTML = luc;
var bhp = hp;
var batk = atk;
var biq = iq;
var bspd = spd;

function strerog(){
    if(stutas_value==0){
        for(var i=0;i<document.getElementsByClassName("stup").length;i++){
            document.getElementsByClassName("stup")[i].classList.add("hidden");
        }
    }
    if(stutas_value>0){
            document.getElementsByClassName("stup")[0].classList.remove("hidden");
            if(atk<5){document.getElementsByClassName("stup")[1].classList.remove("hidden");}
            if(iq<5){document.getElementsByClassName("stup")[2].classList.remove("hidden");}
            if(spd<5){document.getElementsByClassName("stup")[3].classList.remove("hidden");}
            if(luc<5){document.getElementsByClassName("stup")[4].classList.remove("hidden");}
    }
    bhp = hp;
    batk = atk;
    biq = iq;
    bspd = spd;
    document.getElementById("stutas_setting_value").innerHTML="残り："+stutas_value
    status_reload();
}
function hdwn(){
    if(hp>10){
        hp-=2;
        document.getElementById('dice_hp').innerHTML = hp;
        stutas_value+=1;
        strerog();
}}
function adwn(){
    if(atk>0){
    atk-=1;
    document.getElementById('dice_atk').innerHTML = atk;
    stutas_value+=1;
    strerog();
    }
}
function idwn(){
    if(iq>0){
        iq-=1;
    document.getElementById('dice_iq').innerHTML = iq;
    stutas_value+=1;
    strerog();
    }
    
}
function sdwn(){
    if(spd>0){
        spd-=1;
    document.getElementById('dice_spd').innerHTML = spd;
    stutas_value+=1;
    strerog();
    }

}
function ldwn(){
    if(luc>0){
        luc-=1;
    document.getElementById('dice_luc').innerHTML = luc;
    stutas_value+=1;
    strerog();
    }
}

function hup(){
    hp+=2;
    document.getElementById('dice_hp').innerHTML = hp;
    stutas_value-=1;
    strerog();
}
function aup(){
    if(atk==5){
        document.getElementsByClassName("stup")[1].classList.add("hidden");
    }else if(atk<=5){
        atk+=1;
    document.getElementById('dice_atk').innerHTML = atk;
    stutas_value-=1;
    strerog();
    if(atk==5){
        document.getElementsByClassName("stup")[1].classList.add("hidden");
    }
    }
}
function iup(){
    if(iq==5){
        document.getElementsByClassName("stup")[2].classList.add("hidden");
    }else if(iq<=5){
    iq+=1;
    document.getElementById('dice_iq').innerHTML = iq;
    stutas_value-=1;
    strerog();
    if(iq==5){
        document.getElementsByClassName("stup")[2].classList.add("hidden");
    }
    }
}
function sup(){
    if(spd==5){
        document.getElementsByClassName("stup")[3].classList.add("hidden");
    }else if(spd<=5){
    spd+=1;
    document.getElementById('dice_spd').innerHTML = spd;
    stutas_value-=1;
    strerog();
    if(spd==5){
        document.getElementsByClassName("stup")[3].classList.add("hidden");
    }
    }
}
function lup(){
    if(luc==5){
        document.getElementsByClassName("stup")[4].classList.add("hidden");
    }else if(luc<=5){
    luc+=1;
    document.getElementById('dice_luc').innerHTML = luc;
    stutas_value-=1;
    strerog();
    if(luc==5){
        document.getElementsByClassName("stup")[4].classList.add("hidden");
    }
    }
}