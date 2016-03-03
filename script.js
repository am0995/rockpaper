      $(document).ready(function() {
      $("#playButton").click(play)
      
      });

      function getRandomPlay(){
        var outcomeArray = ["Rock", "Paper", "Scissors"];
        return outcomeArray[ Math.floor(Math.random() * outcomeArray.length) ];
      }
      
      function resetFaces(){
        $(".girl").removeClass("girl-lose"); 
        $(".boy").removeClass("boy-lose");  
      }
      
      function play(){
        
        resetFaces();
        
        var boyPlayed = getRandomPlay();
        var girlPlayed = getRandomPlay();
        
        $("#girlResult").html(boyPlayed);
        $("#boyResult").html(girlPlayed);
  
        if(boyPlayed == girlPlayed){
        
          tie(); 
        
        } else{

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

        $(".girl").addClass("girl-lose")
        $("#message").html("Boy wins!");
      }
      
      function girlWins(){

        $(".boy").addClass("boy-lose")
        $("#message").html("Girl wins!");
      }