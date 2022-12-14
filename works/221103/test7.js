'use strict'

function regexCheck() {
  //정규표현식을 만든다.
  const regex1 = /atom/gm;     //'atom'이라는 문자열이 포함되어있다면 true, 없으면 false
  const regex2 = /mbc|kbs|sbs/gm;   // | : or   mbc또는 kbs또는 sbs문자열을 포함하고 있따면?
  const regex3 = /홍길(동|순)/gm;     //홍길동, 홍길순이 있느냐?
  const regex4 = /[a-z]/gm;         //영문 소문자를 포함하고있니?
  const regex5 = /[^a-z]/gm;        //영문 소문자 외를 포함하고있나?
  const regex6 = /[A-Z]/gm;              //영문 대문자를 포함하고있니?
  const regex7 = /[^A-Z]/gm;              //영문 대문자 외를 포함하고있나?
  const regex8 = /[0-9]/gm;              //숫자를 포함하고있나?
  const regex9 = /[^0-9]/gm;              //숫자 외를 포함하고있나?
  const regex10 = /[가-힣]/gm;              //한글 포함하고있나?
  const regex11 = /[a-zA-Z0-9]/gm;    //영문 '대/소문자'나 '숫자'가 포함되어 있느냐?
  const regex12 = /[^a-zA-Z0-9]/gm;                //영문 '대/소문자'나 '숫자'외에 다른 문자가 포함되어 있느냐??
  const regex13 = /[a-z][A-Z][0-9]/gm;     //영문 "대/소문자"와 '숫자'만 입력받도록한다/


  const regex14 = /\./gm; //   문자열중에서 '.' 이 있는가?
  const regex15 = /\d/gm; //   숫자를 포함하고  있는가?
  const regex16 = /\D/gm; //   숫자를 포함하고 있지 않느냐?
  const regex17 = /\w/gm;   // 영문자/숫자/_ 을 포함하고 있는가?
  const regex18 = /\W/gm;   // 영문자/숫자/_ 을 포함하고 있지 않는냐?
  const regex19 = /\s/gm;   // 문자안에 공백 또는 탬을포함하느냐?

  //와일드카드 : 1개글자에 대한 포함유무(?), 복수개문자의 포함유무(+,*)
  const regex20 = /홍길동?안녕/gm;   //'홍길동'의 '동' 1개 글자의 포함여부(있어도되고,없어도 되고~~)
  const regex21 = /홍길동+안녕/gm;   //'홍길동'의 '동' 1개이상 글자의 포함여부(있어도되고,없어도 되고~~)
  const regex22 = /홍길동*안녕/gm;   //'홍길동'의 '동' 0개이상 글자의 포함여부(있어도되고,없어도 되고~~)
  
  // d{2,3} 2~3글자 가능        d{2,20} 2~20 글자 가능
  // [a-z]{2,20} 소문자 2~20글자가능


  let content = document.getElementById("content").value;

  if(content.trim() == "") {
    alert("문자열을 입력하세요.")
    return false;
  }
  // else if(!content.match(regex1)) {
  //   alert("1.atom문자열을 포함하고 있지 않습니다.")
  //   return false;
  // }
  // else if(!content.match(regex2)) {
  //   alert("2.mbc/kbs/sbs 문자열을 포함하고 있지 않습니다.")
  //   return false;
  // }
  // else if(!content.match(regex3)) {
  //   alert("3.홍길동 또는 홍길순 문자열을 포함하고 있지 않습니다.")
  //   return false;
  // }
  // else if(!content.match(regex4)) {
  //   alert("4.영문 소문자를 포함하고 있지 않습니다.")
  //   return false;
  // }

  // else if(regex5.test(content)) {
  //   alert("5.영문 소문자외 다른 문자를를 포함하고 있습니다.")
  //   return false;
  // }
  // else if(regex6.test(content)) {
  //   alert("6. 영대문자를 포함하고 있습니다.")
  //   return false;
  // }
  // else if(regex7.test(content)) {
  //   alert("7. 영대문자외 다른 문자를 포함하고 있습니다.")
  //   return false;
  // }

  // else if(regex8.test(content)) {
  //   alert("8. 숫자를 포함하고 있습니다.")
  //   return false;
  // }

  // else if(regex9.test(content)) {
  //   alert("9. 숫자 외 다른 문자를 포함하고 있습니다.")
  //   return false;
  // }

  // else if(regex10.test(content)) {
  //   alert("10. 한글을 포함하고 있습니다.")
  //   return false;
  // }

  // else if(regex11.test(content)) {
  //   alert("11.영문 '대/소문자'나 '숫자'가 포함되어 있습니다.")
  //   return false;
  // }

  // else if(regex12.test(content)) {
  //   alert("12.영문 '대/소문자'나 '숫자'외에 다른 문자가 포함되어있습니다.")
  //   return false;
  // }
      // else if(!regex13.test(content)) {
      //   alert("13.영문 '대/소문자' 와 '숫자'만 입력받도록한다.")
      //   return false;
      // }
      else if(!regex14.test(content)) {
        alert("14.'.' 을 포함되어 있지 않습니다")
        return false;
      }

  alert("작업끝")
  document.getElementById("content").focus();
}