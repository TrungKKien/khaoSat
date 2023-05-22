alert("con chào Huynh Đệ");
$(document).ready(function () {
});
// var randomChar = "a";  
$("#option1").mouseover(function () { 
  let check = $('#option1').attr('class');
  // console.log(check)
  $("#option1").removeClass();
    
//    Tạo số ngẫu nhiên trong khoảng từ 0 đến 4
    const randomNumber = Math.floor(Math.random() * 5);
    let randomChar;
            switch (randomNumber) {
                case 0:
                    randomChar = 'a';
                    break;
                case 1:
                    randomChar = 'b';
                    break;
                case 2:
                    randomChar = 'c';
                    break;
                case 3:
                    randomChar = 'd';
                    break;
                case 4:
                    randomChar = 'f';
                    break;
    //                default:
  //                  randomChar = '';
            }
 //   Chuyển đổi số ngẫu nhiên thành ký tự a, b, c, d, hoặc f
    
    do{
        if(randomChar == check){
            const randomNumber = Math.floor(Math.random() * 5);
            console.log(randomNumber)
            let randomChar;
            switch (randomNumber) {
                case 0:
                    randomChar = 'a';
                    break;
                case 1:
                    randomChar = 'b';
                    break;
                case 2:
                    randomChar = 'c';
                    break;
                case 3:
                    randomChar = 'd';
                    break;
                case 4:
                    randomChar = 'f';
                    break;
                //     default:
                //     randomChar = '';
            }
            // check = randomChar/

        }else{
            $("#option1").addClass(randomChar);
            check = randomChar
        }
    }while(randomChar == check && randomChar == "")
});
$("#option2").click(function () { 
  $(".camOn").addClass("show");
});