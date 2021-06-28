$(document).ready(function() {
  var score = 0;
  var tern = 2;
  var playerOneTotalScore = 0;
  var playerTwoTotalScore = 0;
  var firstPlayerName = '';
  var secondPlayerName = '';
  $('#btn').click(function() {
      const rollSound = new Audio("./song.mp3");
      rollSound.play();
      $('.container1').hide();
      firstPlayerName = $('#firstPlayerName').val();
      secondPlayerName = $('#secondPlayerName').val();
      $('#name1').text(firstPlayerName.toUpperCase());
      $('#name2').text(secondPlayerName.toUpperCase());

    });

  $('.dice2').click(function() {
      if (tern % 2 == 0) {
          var num = Math.ceil(Math.random() * 6);

          score = num;
          playerOneTotalScore += score;

          tern++;
        }
      $('.dots').hide();
      for (var i = 0; i < num; i++) {
          $('.dots').eq(i).show();

        }

      $('.dice2').css({
          borderColor: 'rgb(0, 110, 255)',
          border: '5px solid rgb(0, 110, 255)',
          boxShadow: 'none',
         });
      $('.dice').css({
          borderColor: 'rgb(255, 174, 0)',
          border: '5px solid rgb(255, 174, 0)',
          boxShadow: 'none',

        });
      $('.oneBlue').css({
          background: 'none',
        });

      $('.oneBlue').eq((playerOneTotalScore - 1)).css({
          background: 'rgb(0, 110, 255)',
        });
          console.log(playerOneTotalScore);
       

      if (playerOneTotalScore == 25) {
          playerOneTotalScore += 29;
          $('.oneBlue').css({
              background: 'none',
            });

          $('.oneBlue').eq((playerOneTotalScore - 1)).css({
              background: 'rgb(0, 110, 255)',
            });

        }
      
      if (playerOneTotalScore == 47) {
          playerOneTotalScore += 20;
          $('.oneBlue').css({
              background: 'none',
            });

          $('.oneBlue').eq((playerOneTotalScore - 1)).css({
              background: 'rgb(0, 110, 255)',
            });

        }
      
      if (playerOneTotalScore == 65) {
          playerOneTotalScore -= 19;
          $('.oneBlue').css({
              background: 'none',
            });

          $('.oneBlue').eq((playerOneTotalScore - 1)).css({
              background: 'rgb(0, 110, 255)',
            });

      }
      if (playerOneTotalScore == 93) {
          playerOneTotalScore -= 41;
          $('.oneBlue').css({
              background: 'none',
            });

          $('.oneBlue').eq((playerOneTotalScore - 1)).css({
              background: 'rgb(0, 110, 255)',
            });

      }
      

      $('#playerTwoScore').text(playerOneTotalScore);
      if (playerOneTotalScore >= 100) {
          $('.container1').show();
          $('.start').hide();
          $('.end').show();
          $('#winnerName').text(firstPlayerName.toUpperCase());

        }
    })


  //dice1
  $('.dice').click(function() {
      if (tern % 2 != 0) {
          var num = Math.ceil(Math.random() * 6);

          score = num;
          playerTwoTotalScore += score;

          tern++;
      }
      $('.dot').hide();
      for (var i = 0; i < num; i++) {
          $('.dot').eq(i).show();

      }

      $('.dice').css({
          borderColor: 'rgb(255, 174, 0)',
          boxShadow: 'none',


      });
      $('.dice2').css({
          borderColor: 'rgb(8, 72, 189)',
          boxShadow: 'none',
           

      });

      $('.oneYellow').css({
          background: 'none',
      });

      $('.oneYellow').eq((playerTwoTotalScore - 1)).css({
          background: 'rgb(255, 174, 0)',
      });
      console.log(playerTwoTotalScore);
      if (playerTwoTotalScore == 25) {
          playerTwoTotalScore += 29;
          $('.oneYellow').css({
              background: 'none',
          });

          $('.oneYellow').eq((playerTwoTotalScore - 1)).css({
              background: 'rgb(255, 174, 0)',
          });

      }

      if (playerTwoTotalScore == 47) {
          playerTwoTotalScore += 20;
          $('.oneYellow').css({
              background: 'none',
          });

          $('.oneYellow').eq((playerTwoTotalScore - 1)).css({
              background: 'rgb(255, 174, 0)',
          });

      }
    
      if (playerTwoTotalScore == 65) {
          playerTwoTotalScore -= 19;
          $('.oneYellow').css({
              background: 'none',
          });

          $('.oneYellow').eq((playerTwoTotalScore - 1)).css({
              background: 'rgb(255, 174, 0)',
          });

      }
      if (playerTwoTotalScore == 93) {
          playerTwoTotalScore -= 41;
          $('.oneYellow').css({
              background: 'none',
          });

          $('.oneYellow').eq((playerTwoTotalScore - 1)).css({
              background: 'rgb(255, 174, 0)',
          });

      }
    
      $('#playerOneScore').text(playerTwoTotalScore);
      if (playerTwoTotalScore >= 100) {
          $('.container1').show();
          $('.start').hide();
          $('.end').show();
          $('#winnerName').text(secondPlayerName.toUpperCase());

      }

  })
});
