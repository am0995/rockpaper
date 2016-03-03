      $(document).ready(function() {
      $("#playButton").click(play)
        // ****** STEP ONE ******
        // attach a click event listener here
        // to your play button (get its ID at the bottom of this page)
        // and attach it to the play function
      
      });
      
      ////////////////////////////////////////////////
      // these are helper functions, don't touch!
      ////////////////////////////////////////////////
      function getRandomPlay(){
        var outcomeArray = ["Rock", "Paper", "Scissors"];
        return outcomeArray[ Math.floor(Math.random() * outcomeArray.length) ];
      }
      
      function resetFaces(){
        $(".girl").removeClass("girl-lose"); 
        $(".boy").removeClass("boy-lose");  
      }
      ////////////////////////////////////////////////
      // end of helper functions
      ////////////////////////////////////////////////
      
      
      function play(){
        
        resetFaces();
        
        var boyPlayed = getRandomPlay();
        var girlPlayed = getRandomPlay();
        
        $("#girlResult").html(boyPlayed);
        $("#boyResult").html(girlPlayed);
  
        if(boyPlayed == girlPlayed){
        
          tie(); 
        
        } else{

          // ****** STEP TWO ******
          // there are three conditions where the boy could win
          // 1. if boy played Rock and girl played Scissors
          // 2. if boy played Paper and girl played Rock
          // 3. if boy played Scissors and girl played Paper
          
          // write an if / if else statements testing for these
          // conditions. If the boy wins, run the function boyWins(),
          // If the girl wins, run the function girlWins()
          // hints: == tests if two things are equal, && means "and"
          // if (boyPlayed == "Rock" && girlPlayed == "Scissors") {}
          if(boyPlayed == "Rock" && girlPlayed == "Scissors"){
            boyWins();
            
          }
          else if(boyPlayed == "Paper" && girlPlayed == "Rock"){
            boyWins();
            
          }
          
          else if(boyPlayed == "Scissors" && girlPlayed == "Paper"){
            boyWins();
          }
          
          else{
            girlWins();
          }
        }
              
      }
      
      function tie(){
        $("#message").html("It's a tie. Try again.");  
      }
      
      function boyWins(){
        // ****** STEP THREE ******
        // add the class "girl-lose" to the girl div
        $("#message").html("Boy wins!");
      }
      
      function girlWins(){
        // ****** STEP THREE ******
        // add the class "boy-lose" to the boy div  
        $("#message").html("Girl wins!");
      }