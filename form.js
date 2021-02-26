class Form {

    constructor() {
     this.title = 
     this.question
     this.option1
     this.option2
     this.button = createButton("Submit")
     this.input1 = createInput("Enter your Name");
     this.input2 = createInput("Enter the Answer");

     
    }
    
  
    display(){
     // this.title.html("MyQuiz Game");
     // this.title.position(425,20);
      this.input1.position(200,300);
      this.input2.position(400,300);
      this.button.position(350,350)
      /*this.question= createName("Question:-Who is the most richest person in the world ?");
      this.question.position(150, 80);
      this.option1.html("Bill Gates");
      this.option1.position(150, 100);
      this.option2.html("Jeff Bezos");
      this.option2.position(150, 120);
      this.option3.html("Elon Musk");
      this.option3.position(150, 140);
      this.option4.html("Sundar Pichai");
      this.option4.position(150, 160);*/
  
      this.button.mousePressed(()=>{
        var contestant;
        /*this.title.visible=false;
        this.input1.visible=false;
        this.button.visible=false;*/
        contestant.name = this.input1.value();  
        contestantCount+=1;
        contestant.index = contestantCount;
        contestant.update();
        contestant.updateCount(contestantCount);
      });

      for(var plr in allContestants){
        var correctAns = "c";
      }
      if (correctAns === allContestants[plr].answer){
        fill("Green")
      }else
        fill("red")
      } 
    }
  


  

  
  
  