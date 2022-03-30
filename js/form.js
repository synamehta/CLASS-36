class FORM{

    constructor(){
        this.box=createInput("ENTER NAME");
        this.playButton=createButton("GO!!!");
        this.heading=createImg("assets/title.png","gameTitle");
        this.greeting=createElement("h2");
    }

    //To give x and y positions 
    setElementsPosition(){
        this.heading.position(120,160);
        this.box.position(width/2-100,height/2-80);
        this.playButton.position(width/2-100,height/2);
        this.greeting.position(width/2-200,height/2);
    }

    setElementStyle(){
        this.box.class("customInput");
        this.playButton.class("customButton");
        this.greeting.class("greeting");
        this.heading.class("gameTitle");
    }

    afterMousePressed(){
        this.playButton.mousePressed(()=>{
            this.box.hide();
            this.playButton.hide();
            var name=this.box.value();
            var message="WELCOME TO THE GAME " + name + " :) " ;
            this.greeting.html(message);            
        });
    }

    display(){
        this.setElementsPosition();
        this.setElementStyle();
        this.afterMousePressed();
    }
}
