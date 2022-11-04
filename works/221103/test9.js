'use strict'

//오늘날짜를 전역변수로 생성...
const today = new Date();
const year = today.getFullYear();     //연도 4자리
const month = today.getMonth() +1;       //월(기존월보다 1자리 작다)
const date = today.getDate();           //일
const hour = today.getHours();          //시
const minute = today.getMinutes();       //분
const second = today.getSeconds();        //초
const yymmdd = year + "-" + month + "-" + date + " " + hour + ":" + minute + ":" + second;

//표준날짜 출력함수

function fCheck1() {
  let date1 = new Date();
  console.log("date1 : " , date1);
  document.getElementById("demo").innerHTML = date1;
}

//편집날짜 함수
function fCheck2() {
  let strDate = yymmdd;
  demo.innerHTML = strDate;
}

function fCheck3() {
  let str = "";
  str += year + " 년 ";
  str += month + " 월 ";
  str += date + " 일 ";

  //요일 : 0(일) 1(월) ~ 5(금) 6(토) 
  // str += today.getDay() + "요일";    //요일 : getDay()
  let week = ["일","월","화","수","목","금","토"];
  str += week[today.getDay()] + "요일 ";
  str += hour + "시 ";
  str += minute + "분 ";
  str += second + "초";
  
  
  let strDate = str;
  demo.innerHTML = strDate;
}

//시간출력 함수
function fCheck4() {
  // let strDate = today.getTime();
  let strTime = (today.getMilliseconds()/100  ) + "초";
  let strDate = strTime;

  demo.innerHTML = strDate;
}

//해당 월마지막일자 함수
function fCheck5() {
  let strDate = new Date(2022,11,0);     // new Date(년,월,일,시,분,초); 0을 넣으면 마지막 일자
  strDate += "해당월의 마지막 일자는? " + strDate.getDate();
  demo.innerHTML = strDate;
}

function fCheck6() {
  let year2 = document.getElementById("year").value;
  let month2 = document.getElementById("month").value;
  let strDate = "";
  let strDate2 = new Date(year2,month2,0);
  strDate += year2+"년 ";
  strDate += month2+"월 ";
  strDate += "해당월의 마지막 일자는"+strDate2.getDate();
  demo.innerHTML = strDate;
}
function fCheck7() {
//   let year3 = document.getElementById("year").value;
//   let month3 = document.getElementById("month").value;
//   let date3 = document.getElementById("date").value;
//   let strDate = "";
//   let strDate3 = new Data(year3,month3.date3);

//   strDate += year3+"-";
//   strDate += month3+"-";
//   strDate += date3+"-";
// strDate += "오늘날짜는" + strDate3.getDate();
  let strDate = year + "-" + month + "-" + date;
  let fmtDate = strDate.split("-");
  let yy = fmtDate[0];
  let mm = ('0' +fmtDate[1]).slice(-2);    //2월 --> 02월 : 02 -->
  let dd = ('0' +fmtDate[2]).slice(-2);
  strDate = yy + "-" + mm + "-" + dd;

  demo.innerHTML = strDate;
  
}

