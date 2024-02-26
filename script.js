/*
  Terence Nguyen
  1/12/2022
  Script
  This is where the script of my game is
*/

//38.96 - With Damage
//43.80 - Without Damage

/************************
* VARIABLE DECLARATIONS *
*************************/
//Scene, platforms and obstacles
let swampBG;
let forestBG;
let plainsBG;
let platform1;
let platform2;
let platform3;
let platform4;
let platform5;
let platform6;
let platform7;
let platform8;
let platform9;
let platform10;
let platform11;
let platform12;
let platform13;
let platform14;
let platform15;
let platform16;
let platform17;
let platform18;
let platform19;
let platform20;
let platform21;
let platform22;
let platform23;
let platform24;
let platform25;
let platform26;
let platform27;
let platform28;
let platform29;
let platform30;
let platform31;
let platform32;
let platform33;
let platform34;
let platform35;
let platform36;
let vanishPlatform1;
let vanishPlatform2;
let vanishPlatform3;
let spike1;
let spike2;
let spike3;
let button1;
let button2;
let button3;

//Keys
let leftKey;
let rightKey;
let aKey;
let dKey;
let upKey;
let spaceKey;
let wKey;
let downKey;
let sKey;

//Buttons
let startButton;
let helpButton;
let levelsButton;
let exitButton;
let backButton;
let againButton;
let oneButton;
let twoButton;
let threeButton;

//Items
let banana;

//Character
let character;

//Audio
let melody;
let select;
let menu;
let footsteps;
let pickup;

//Text
let title;
let levels;
let gameover;

//Game Logic Variables
let numberOfLives;
let heart1;
let heart2;
let heart3;

//Misc
let controls;

class titleScreen extends Phaser.Scene
{
  constructor (config)
  {
    super(config);
  }
  preload ()
  {
    //Loading images
    this.load.image("start","../assets/sprites/startButton.png");
    this.load.image("help","../assets/sprites/helpButton.png");
    this.load.image("levels","../assets/sprites/levelsButton.png");
    this.load.image("exit","../assets/sprites/exitButton.png");
    this.load.image("swamp","../assets/sprites/swampBG.png");
    this.load.image("title","../assets/sprites/title.png");
    this.load.image("back","../assets/sprites/backButton.png");

    //Loading audio in titlescreen so all the levels can load faster
    this.load.audio("melody",["../assets/music/melody.mp3"]);
    this.load.audio("select",["../assets/soundfx/select.wav"]);
    this.load.audio("menu",["../assets/music/menu.ogg"]);

  }//end of preload
  create (data)
  {
    //Background
    swampBG=this.physics.add.image(500,300,"swamp");
    swampBG.displayWidth=1000;
    swampBG.displayHeight=600;

    title=this.add.image(500,200,"title");
    title.displayWidth=660;
    title.displayHeight=120;

    //Create Audio
    select=this.sound.add("select");
    menu=this.sound.add("menu", { loop: true }); // This adds the sound and makes it a loop
    menu.play();

    /*************
     * SELECTION *
     *************/
    //Buttons
    startButton=this.add.image(500,300,"start"); // Pointerover is when the mouse is hovering over the button and I scale it bigger
    startButton.setInteractive({useHandCursor: true})
    startButton.on("pointerover",()=>{
      startButton.setScale(1.1)
      select.play();
    })
    startButton.on("pointerout",()=>{ // When the mouse is not over the button it returns to normal size
      startButton.setScale(1)
    })
    startButton.on("pointerdown",()=>{ // When the button is clicked it gets smaller
      startButton.setScale(.9)
      select.play();
      menu.stop();
      this.time.addEvent //adds a delay to switch screens
      ({
        delay: 200,
        callback: ()=>
        {
          this.scene.start("one");
        },
      })
    })
    helpButton=this.add.image(200,300,"help");
    helpButton.setInteractive({useHandCursor: true})
    helpButton.on("pointerover",()=>{ // Pointerover is when the mouse is hovering over the button and I scale it bigger
      helpButton.setScale(1.1)
      select.play();
    })
    helpButton.on("pointerout",()=>{ // When the mouse is not over the button it returns to normal size
      helpButton.setScale(1)
    })
    helpButton.on("pointerdown",()=>{ // When the button is clicked it gets smaller
      helpButton.setScale(.9)
      select.play();
      this.time.addEvent //adds a delay to switch screens
      ({
        delay: 200,
        callback: ()=>
        {
          this.scene.start("help");
        },
      })
    })
    levelsButton=this.add.image(800,300,"levels");
    levelsButton.setInteractive({useHandCursor: true})
    levelsButton.on("pointerover",()=>{ // Pointerover is when the mouse is hovering over the button and I scale it bigger
      levelsButton.setScale(1.1)
      select.play();
    })
    levelsButton.on("pointerout",()=>{ // When the mouse is not over the button it returns to normal size
      levelsButton.setScale(1)
    })
    levelsButton.on("pointerdown",()=>{ // When the button is clicked it gets smaller
      levelsButton.setScale(.9)
      select.play();
      this.time.addEvent //adds a delay to switch screens
      ({
        delay: 200,
        callback: ()=>
        {
          this.scene.start("levels");
        },
      })
    })
    exitButton=this.add.image(500,400,"exit");
    exitButton.setInteractive({useHandCursor: true})
    exitButton.on("pointerover",()=>{ // Pointerover is when the mouse is hovering over the button and I scale it bigger
      exitButton.setScale(1.1)
      select.play();
      select.play();
    })
    exitButton.on("pointerout",()=>{ // When the mouse is not over the button it returns to normal size
      exitButton.setScale(1)
    })
    exitButton.on("pointerdown",()=>{ // When the button is clicked it gets smaller
      exitButton.setScale(.9)
      select.play();
      menu.stop();
      this.time.addEvent //adds a delay to switch screens
      ({
        delay: 200,
        callback: ()=>
        {
          this.scene.start("end");
        },
      })
    })
  }//end of create
  update ()
  {

  }
}
//end of titleScreen

class helpScreen extends Phaser.Scene
{   
  constructor (config)
  {
    super(config);
  }
  preload()
  {
    //Loading Images
    this.load.image("plains","../assets/sprites/plainsBG.jpg");
    this.load.image("controls","../assets/sprites/controls.png");
  }
  create()
  {
    //Creating Background
    plainsBG=this.add.image(500,300,"plains");
    plainsBG.displayWidth=1000;
    plainsBG.displayHeight=600;

    //Creating help images
    controls=this.add.image(500,300,"controls");
    
    /*************
     * SELECTION *
     *************/
    //Creating Buttons
    backButton=this.add.image(120,50,"back");
    backButton.setInteractive({useHandCursor: true})
    backButton.on("pointerover",()=>{ // Pointerover is when the mouse is hovering over the button and I scale it bigger
      backButton.setScale(1.1)
      select.play();
    })
    backButton.on("pointerout",()=>{ // When the mouse is not over the button it returns to normal size
      backButton.setScale(1)
    })
    backButton.on("pointerdown",()=>{ // When the button is clicked it gets smaller
      backButton.setScale(.9)
      select.play();
      menu.stop();
      this.time.addEvent //adds a delay to switch screens
      ({
        delay: 200,
        callback: ()=>
        {
          this.scene.start("title");
        },
      })
    })
  }//end of create
  update()
  {
    
  }
}
//end of helpScreen screen

class levelScreen extends Phaser.Scene
{
  constructor (config)
  {
    super(config);
  }
  preload()
  {
    //Loading title
    this.load.image("levels","../assets/sprites/levels.png");

    //Loading button levels
    this.load.image("one","../assets/sprites/one.png");
    this.load.image("two","../assets/sprites/two.png");
    this.load.image("three","../assets/sprites/three.png");

    //Loading Background
    this.load.image("plains","../assets/sprites/plainsBG.jpg");
  }
  create()
  {
    //Creating title
    levels=this.add.image(300,100,"levels");

    //Creating Background
    plainsBG=this.add.image(500,300,"plains");
    plainsBG.displayWidth=1000;
    plainsBG.displayHeight=600;
    
    /*************
     * SELECTION *
     *************/
    //Creating Back Button
    backButton=this.add.image(120,50,"back");
    backButton.setInteractive({useHandCursor: true})
    backButton.on("pointerover",()=>{ // Pointerover is when the mouse is hovering over the button and I scale it bigger
      backButton.setScale(1.1)
      select.play();
    })
    backButton.on("pointerout",()=>{ // When the mouse is not over the button it returns to normal size
      backButton.setScale(1)
    })
    backButton.on("pointerdown",()=>{ // When the button is clicked it gets smaller
      backButton.setScale(.9)
      select.play();
      menu.stop();
      this.time.addEvent //adds a delay to switch screens
      ({
        delay: 200,
        callback: ()=>
        {
          this.scene.start("title");
        },
      })
    })
    //Creating Level buttons
    oneButton=this.add.image(200,200,"one");
    oneButton.setInteractive({useHandCursor: true})
    oneButton.on("pointerover",()=>{ // Pointerover is when the mouse is hovering over the button and I scale it bigger
      oneButton.setScale(1.1)
      select.play();
    })
    oneButton.on("pointerout",()=>{ // When the mouse is not over the button it returns to normal size
      oneButton.setScale(1)
    })
    oneButton.on("pointerdown",()=>{ // When the button is clicked it gets smaller
      oneButton.setScale(.9)
      select.play();
      menu.stop();
      this.time.addEvent //adds a delay to switch screens
      ({
        delay: 200,
        callback: ()=>
        {
          this.scene.start("one");
        },
      })
    })
    twoButton=this.add.image(500,200,"two");
    twoButton.setInteractive({useHandCursor: true})
    twoButton.on("pointerover",()=>{ // Pointerover is when the mouse is hovering over the button and I scale it bigger
      twoButton.setScale(1.1)
      select.play();
    })
    twoButton.on("pointerout",()=>{ // When the mouse is not over the button it returns to normal size
      twoButton.setScale(1)
    })
    twoButton.on("pointerdown",()=>{ // When the button is clicked it gets smaller
      twoButton.setScale(.9)
      select.play();
      menu.stop();
      this.time.addEvent //adds a delay to switch screens
      ({
        delay: 200,
        callback: ()=>
        {
          this.scene.start("two");
        },
      })
    })
  }//end of create
  update()
  {
    
  }
}
//end of levelScreen screen
class levelOne extends Phaser.Scene
{
  constructor (config)
  {
    super(config);
    //this=this;
  }
  /*The preload function is where we
  write code to load all game resources into memory.*/
  //https://itch.io/game-assets
  preload ()
  {
    //Loading Images
    this.load.image("platform","../assets/sprites/ground.png");
    this.load.image("hearts","../assets/sprites/heart.png");
    this.load.image("wood","../assets/sprites/woodPlatform.png")
    this.load.image("banana","../assets/sprites/banana.png");

    //Loading Spritesheets -- frameWidth and frameHeight determine the size of the thing inside of the spritesheet
    this.load.spritesheet("monkey","../assets/sprites/animation.png", { frameWidth: 50, frameHeight: 50 });
    this.load.spritesheet("buttons","../assets/sprites/buttons.png", { frameWidth: 16, frameHeight: 16 });

    //Loading audio
    this.load.audio("pickup",["../assets/soundfx/pickup.wav"]);

  }//end of preload
  //The create is where we will create the game objects in code.
  create (data)
  {
    //Creating Scene
    swampBG=this.physics.add.image(500,300,"swamp");
    swampBG.displayWidth=1000;
    swampBG.displayHeight=600;

    //Creating Platforms
    platform1=this.physics.add.image(50,600,"platform");
    platform1.displayWidth=73;
    platform1.displayHeight=15;
    platform2=this.physics.add.image(200,500,"platform");
    platform2.displayWidth=73;
    platform2.displayHeight=15;
    platform3=this.physics.add.image(100,400,"platform");
    platform3.displayWidth=73;
    platform3.displayHeight=15;
    platform4=this.physics.add.image(250,320,"platform");
    platform4.displayWidth=73;
    platform4.displayHeight=15;
    platform5=this.physics.add.image(250,220,"platform");
    platform5.displayWidth=73;
    platform5.displayHeight=15;
    platform6=this.physics.add.image(375,320,"platform");
    platform6.displayWidth=73;
    platform6.displayHeight=15;
    platform7=this.physics.add.image(279,176,"platform");
    platform7.displayWidth=73;
    platform7.displayHeight=15;
    platform7.angle=90;
    platform7.setSize(150,2000); //oversized hitbox to avoid wall climbing
    platform7.body.setOffset(320, -1400); 
    platform8=this.physics.add.image(279,103,"platform");
    platform8.displayWidth=73;
    platform8.displayHeight=15;
    platform8.angle=90; // turns the platform 90 degrees
    platform8.setSize(150,1700); //oversized hitbox to avoid wall climbing
    platform8.body.setOffset(280, -550); 
    platform9=this.physics.add.image(279,30,"platform");
    platform9.displayWidth=73;
    platform9.displayHeight=15;
    platform9.angle=90; // turns the platform 90 degrees
    platform9.setSize(150,730);
    platform10=this.physics.add.image(100,120,"platform");
    platform10.displayWidth=73;
    platform10.displayHeight=15;
    platform11=this.physics.add.image(500,320,"platform");
    platform11.displayWidth=73;
    platform11.displayHeight=15;
    platform12=this.physics.add.image(700,400,"platform");
    platform12.displayWidth=73;
    platform12.displayHeight=15;
    platform13=this.physics.add.image(500,320,"platform");
    platform13.displayWidth=73;
    platform13.displayHeight=15;
    platform14=this.physics.add.image(850,559,"platform");
    platform14.displayWidth=73;
    platform14.displayHeight=15;
    platform15=this.physics.add.image(890,530,"platform");
    platform15.displayWidth=73;
    platform15.displayHeight=15;
    platform15.angle=90; // turns the platform 90 degrees
    platform15.setSize(150,730);
    platform16=this.physics.add.image(810,530,"platform");
    platform16.displayWidth=73;
    platform16.displayHeight=15;
    platform16.angle=90; // turns the platform 90 degrees
    platform16.setSize(150,730);
    platform17=this.physics.add.image(627,400,"platform");
    platform17.displayWidth=73;
    platform17.displayHeight=15;

    //Creating button related platforms
    vanishPlatform1=this.physics.add.image(850,500,"wood");
    vanishPlatform1.displayWidth=73;
    vanishPlatform1.displayHeight=50;
    vanishPlatform1.setSize(240,50);

    //Creating Items
    banana=this.physics.add.image(850,530,"banana");
    banana.displayWidth=54;
    banana.displayHeight=42;

    //Creating interactive in game buttons with spritesheets
    this.anims.create({
        key: "redButton",
        frames: [ { key: "buttons", frame: 0 } ],
        frameRate: 1
    });
    this.anims.create({
        key: "greenButton",
        frames: [ { key: "buttons", frame: 1 } ],
        frameRate: 1
    });
    this.anims.create({
        key: "yellowButton",
        frames: [ { key: "buttons", frame: 2 } ],
        frameRate: 1
    });
    button1=this.physics.add.sprite(100,100,"buttons")
    button1.displayWidth=30;
    button1.displayHeight=30;
    

    //Initializing Character Movement Keys
    leftKey=this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
    aKey=this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
    rightKey=this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
    dKey=this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
    upKey=this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
    spaceKey=this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
    wKey=this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
    downKey=this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);
    sKey=this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);

    //Creating the character
    character=this.physics.add.sprite(50,550,"monkey"); // have to add sprite if you want animations
    character.displayWidth=50;
    character.displayHeight=50;
    character.body.setSize(25, 45);
    character.body.setOffset(12, 5);
    
    //Creating Animations with spritesheets
    this.anims.create
    ({
        key: "right",
        frameRate: 7,
        frames: this.anims.generateFrameNumbers("monkey", { start: 48, end: 51 }),
        repeat: -1
    });
    this.anims.create
    ({
        key: "left",
        frameRate: 7,
        frames: this.anims.generateFrameNumbers("monkey", { start: 16, end: 19 }),
        repeat: -1
    });
    this.anims.create
    ({
        key: "roll",
        frameRate: 7,
        frames: this.anims.generateFrameNumbers("monkey", { start: 21, end: 22 }),
        repeat: -1
    });
    this.anims.create
    ({
        key: "idle",
        frames: [ { key: "monkey", frame: 0 } ],
        frameRate: 1
    });

    //Creating collision -- setImmovable(); makes it so that the player cannot push the platforms
    this.physics.add.collider(platform1, character);
    platform1.setImmovable();
    this.physics.add.collider(platform2, character);
    platform2.setImmovable();
    this.physics.add.collider(platform3, character);
    platform3.setImmovable();
    this.physics.add.collider(platform4, character);
    platform4.setImmovable();
    this.physics.add.collider(platform5, character);
    platform5.setImmovable();
    this.physics.add.collider(platform6, character);
    platform6.setImmovable();
    this.physics.add.collider(platform7, character);
    platform7.setImmovable();
    this.physics.add.collider(platform8, character);
    platform8.setImmovable();
    this.physics.add.collider(platform9, character);
    platform9.setImmovable();
    this.physics.add.collider(platform10, character);
    platform10.setImmovable();
    this.physics.add.collider(platform11, character);
    platform11.setImmovable();
    this.physics.add.collider(platform12, character);
    platform12.setImmovable();
    this.physics.add.collider(platform13, character);
    platform13.setImmovable();
    this.physics.add.collider(platform14, character);
    platform14.setImmovable();
    this.physics.add.collider(platform15, character);
    platform15.setImmovable();
    this.physics.add.collider(platform16, character);
    platform16.setImmovable();
    this.physics.add.collider(platform17, character);
    platform17.setImmovable();

    this.physics.add.collider(vanishPlatform1, character);
    vanishPlatform1.setImmovable();

    character.setCollideWorldBounds(true);
    character.body.setBoundsRectangle(new Phaser.Geom.Rectangle(0, 0, 1000, 800)); // makes custom worldbounds

    //Creating lives
    numberOfLives=3;
    heart1=this.physics.add.image(20,20,"hearts");
    heart1.displayWidth=30;
    heart1.displayHeight=30;
    heart2=this.physics.add.image(50,20,"hearts");
    heart2.displayWidth=30;
    heart2.displayHeight=30;
    heart3=this.physics.add.image(80,20,"hearts");
    heart3.displayWidth=30;
    heart3.displayHeight=30;

    //Creating Audio
    melody=this.sound.add("melody", { loop: true }); // adds sound and loop
    melody.play();
    pickup=this.sound.add("pickup");

  }//end of create
  /*************
  * REPETITION *
  *************/
  /*The update function gets called for every frame
  of your game. It's where all the game logic takes place.*/
  update() // loops to check character movement, collision detection and game completion
  {
    /*************
     * SELECTION *
     *************/
    //Number of lives and hearts
    if(character.y>630)
    {
      character.x=50;
      character.y=550;
      numberOfLives--;
    }
    if(numberOfLives==2)
    {
      heart3.disableBody(true,true); // removes the image
    }
    else if(numberOfLives==1)
    {
      heart2.disableBody(true,true); // removes the image
    }
    else if(numberOfLives<=0)
    {
      heart1.disableBody(true,true); // removes the image
      melody.stop();
      this.scene.start("end");
    }
    
    //Character Movement
    if(upKey.isDown && character.body.touching.down || spaceKey.isDown && character.body.touching.down || wKey.isDown&& character.body.touching.down) // makes it so user can only jump when touching a platform
    {
      character.setVelocityY(-330); // Using velocity to move things instead of x and y so then collision works
    }
    character.setVelocityX(0); // Sets default X Velocity to 0 so it doesn't slide forever
    if(leftKey.isDown || aKey.isDown)
    {
      character.setVelocityX(-100); // Using velocity to move things instead of x and y so then collision works
      character.anims.play("left", true);
    }
    else if(rightKey.isDown || dKey.isDown)
    {
      character.setVelocityX(100); // Using velocity to move things instead of x and y so then collision works
      character.anims.play("right", true);
    }
    else
    {
      character.anims.play("idle", true);
    }
    if(downKey.isDown || sKey.isDown)
    {
      character.setVelocityY(300); // Using velocity to move things instead of x and y so then collision works
      character.anims.play("roll", true);
    }

    //Button activation
    if(this.physics.world.overlap(button1,character))
    {
      button1.anims.play("greenButton", true);
      vanishPlatform1.disableBody(true,true); // removes the image and collision
    }

    //Level completion
    if(this.physics.world.overlap(banana,character))
    {
      pickup.play();
      banana.disableBody(true, true); // removes the image
      melody.stop();
      this.scene.start("two");
    }
    
    //Creating gravity
    character.setGravityY(500); // this makes it so there is always a force pulling the character down
  }
}
//end of levelOne screen

class levelTwo extends Phaser.Scene
{   
  constructor (config)
  {
    super(config);
  }
  preload()
  {
    //Loading Images
    this.load.image("platform","../assets/sprites/ground.png");
    this.load.image("hearts","../assets/sprites/heart.png");
    this.load.image("wood","../assets/sprites/woodPlatform.png")
    this.load.image("banana","../assets/sprites/banana.png");
    this.load.image("forest","../assets/sprites/forestBG.png");
    this.load.image("upSpike","../assets/sprites/upSpike.png");

    //Loading Spritesheets
    this.load.spritesheet("monkey","../assets/sprites/animation.png", { frameWidth: 50, frameHeight: 50 });
    this.load.spritesheet("buttons","../assets/sprites/buttons.png", { frameWidth: 16, frameHeight: 16 });

    //Loading Audio
    this.load.audio("pickup",["../assets/soundfx/pickup.wav"]);
  }
  create()
  {
    //Creating Background
    forestBG=this.add.image(500,300,"forest");
    forestBG.displayWidth=1000;
    forestBG.displayHeight=600;

    platform1=this.physics.add.image(750,100,"platform");
    platform1.displayWidth=73;
    platform1.displayHeight=15;
    platform2=this.physics.add.image(630,30,"platform");
    platform2.displayWidth=73;
    platform2.displayHeight=15;
    platform2.angle=90;
    platform2.setSize(150,730);
    platform3=this.physics.add.image(630,102,"platform");
    platform3.displayWidth=73;
    platform3.displayHeight=15;
    platform3.angle=90;
    platform3.setSize(150,730);
    platform4=this.physics.add.image(630,174,"platform");
    platform4.displayWidth=73;
    platform4.displayHeight=15;
    platform4.angle=90;
    platform4.setSize(150,730);
    platform5=this.physics.add.image(795,129,"platform");
    platform5.displayWidth=73;
    platform5.displayHeight=15;
    platform5.angle=90;
    platform5.setSize(150,730);
    platform6=this.physics.add.image(795,201,"platform");
    platform6.displayWidth=73;
    platform6.displayHeight=15;
    platform6.angle=90;
    platform6.setSize(150,730);
    platform7=this.physics.add.image(795,273,"platform");
    platform7.displayWidth=73;
    platform7.displayHeight=15;
    platform7.angle=90;
    platform7.setSize(150,730);
    platform8=this.physics.add.image(750,302,"platform");
    platform8.displayWidth=73;
    platform8.displayHeight=15;
    platform9=this.physics.add.image(675,203,"platform");
    platform9.displayWidth=73;
    platform9.displayHeight=15;
    platform10=this.physics.add.image(677,302,"platform");
    platform10.displayWidth=73;
    platform10.displayHeight=15;
    platform11=this.physics.add.image(604,302,"platform");
    platform11.displayWidth=73;
    platform11.displayHeight=15;
    platform12=this.physics.add.image(531,302,"platform");
    platform12.displayWidth=73;
    platform12.displayHeight=15;
    platform13=this.physics.add.image(585,203,"platform");
    platform13.displayWidth=73;
    platform13.displayHeight=15;
    platform14=this.physics.add.image(839,302,"platform");
    platform14.displayWidth=73;
    platform14.displayHeight=15;
    platform15=this.physics.add.image(883,129,"platform");
    platform15.displayWidth=73;
    platform15.displayHeight=15;
    platform15.angle=90;
    platform15.setSize(150,730);
    platform16=this.physics.add.image(883,201,"platform");
    platform16.displayWidth=73;
    platform16.displayHeight=15;
    platform16.angle=90;
    platform16.setSize(150,730);
    platform17=this.physics.add.image(883,273,"platform");
    platform17.displayWidth=73;
    platform17.displayHeight=15;
    platform17.angle=90;
    platform17.setSize(150,730);
    platform18=this.physics.add.image(883,56,"platform");
    platform18.displayWidth=73;
    platform18.displayHeight=15;
    platform18.angle=90;
    platform18.setSize(150,730);
    platform19=this.physics.add.image(883,-17,"platform");
    platform19.displayWidth=73;
    platform19.displayHeight=15;
    platform19.angle=90;
    platform19.setSize(150,730);
    platform20=this.physics.add.image(458,302,"platform");
    platform20.displayWidth=73;
    platform20.displayHeight=15;
    platform21=this.physics.add.image(512,100,"platform");
    platform21.displayWidth=73;
    platform21.displayHeight=15;
    platform22=this.physics.add.image(439,100,"platform");
    platform22.displayWidth=73;
    platform22.displayHeight=15;
    platform23=this.physics.add.image(366,100,"platform");
    platform23.displayWidth=73;
    platform23.displayHeight=15;
    platform24=this.physics.add.image(293,100,"platform");
    platform24.displayWidth=73;
    platform24.displayHeight=15;
    platform25=this.physics.add.image(220,100,"platform");
    platform25.displayWidth=73;
    platform25.displayHeight=15;
    platform26=this.physics.add.image(191,56,"platform");
    platform26.displayWidth=73;
    platform26.displayHeight=15;
    platform26.angle=90;
    platform26.setSize(150,730);
    platform27=this.physics.add.image(191,-17,"platform");
    platform27.displayWidth=73;
    platform27.displayHeight=15;
    platform27.angle=90;
    platform27.setSize(150,730);
    platform28=this.physics.add.image(239,302,"platform");
    platform28.displayWidth=73;
    platform28.displayHeight=15;
    platform29=this.physics.add.image(312,400,"platform");
    platform29.displayWidth=73;
    platform29.displayHeight=15;
    platform30=this.physics.add.image(430,145,"platform");
    platform30.displayWidth=73;
    platform30.displayHeight=15;
    platform30.angle=90;
    platform30.setSize(150,730);
    platform31=this.physics.add.image(430,186,"platform");
    platform31.displayWidth=73;
    platform31.displayHeight=15;
    platform31.angle=90;
    platform31.setSize(150,730);
    platform32=this.physics.add.image(385,302,"platform");
    platform32.displayWidth=73;
    platform32.displayHeight=15;
    platform33=this.physics.add.image(140,220,"platform"); 
    platform33.displayWidth=15;
    platform33.displayHeight=15;
    platform34=this.physics.add.image(40,120,"platform"); 
    platform34.displayWidth=15;
    platform34.displayHeight=15;
    platform35=this.physics.add.image(168,100,"platform");
    platform35.displayWidth=30;
    platform35.displayHeight=15;
    
    vanishPlatform1=this.physics.add.image(839,100,"wood");
    vanishPlatform1.displayWidth=77;
    vanishPlatform1.displayHeight=50;
    vanishPlatform1.setSize(240,50);
    vanishPlatform2=this.physics.add.image(430,260,"wood");
    vanishPlatform2.displayWidth=77;
    vanishPlatform2.displayHeight=50;
    vanishPlatform2.angle=90;
    vanishPlatform2.setSize(20,370);
    vanishPlatform3=this.physics.add.image(312,302,"wood");
    vanishPlatform3.displayWidth=77;
    vanishPlatform3.displayHeight=50;
    vanishPlatform3.setSize(240,50);
    
    //Creating interactive in game buttons with animations and spritesheets
    this.anims.create({
        key: "redButton",
        frames: [ { key: "buttons", frame: 0 } ],
        frameRate: 1
    });
    this.anims.create({
        key: "greenButton",
        frames: [ { key: "buttons", frame: 1 } ],
        frameRate: 1
    });
    this.anims.create({
        key: "yellowButton",
        frames: [ { key: "buttons", frame: 2 } ],
        frameRate: 1
    });
    button1=this.physics.add.sprite(250,80,"buttons")
    button1.displayWidth=30;
    button1.displayHeight=30;
    button2=this.physics.add.sprite(168,80,"buttons")
    button2.displayWidth=30;
    button2.displayHeight=30;
    button3=this.physics.add.sprite(312,380,"buttons")
    button3.displayWidth=30;
    button3.displayHeight=30;
   
    
    //Creating Spikes
    spike1=this.physics.add.image(500,84,"upSpike");
    spike2=this.physics.add.image(425,84,"upSpike");
    spike3=this.physics.add.image(350,84,"upSpike");

    //Creating Items
    banana=this.physics.add.image(840,260,"banana");
    banana.displayWidth=54;
    banana.displayHeight=42;

    //Initializing Character Movement Keys
    leftKey=this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
    aKey=this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
    rightKey=this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
    dKey=this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
    upKey=this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
    spaceKey=this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
    wKey=this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
    downKey=this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);
    sKey=this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);

    //Creating the character
    character=this.physics.add.sprite(750,50,"monkey"); // have to add sprite if you want animations
    character.displayWidth=50;
    character.displayHeight=50;
    character.body.setSize(25, 45);
    character.body.setOffset(12, 5);
    
    //Creating Animations for the monkey
    this.anims.create
    ({
        key: "right",
        frameRate: 7,
        frames: this.anims.generateFrameNumbers("monkey", { start: 48, end: 51 }),
        repeat: -1
    });
    this.anims.create
    ({
        key: "left",
        frameRate: 7,
        frames: this.anims.generateFrameNumbers("monkey", { start: 16, end: 19 }),
        repeat: -1
    });
    this.anims.create
    ({
        key: "roll",
        frameRate: 7,
        frames: this.anims.generateFrameNumbers("monkey", { start: 21, end: 22 }),
        repeat: -1
    });
    this.anims.create
    ({
        key: "idle",
        frames: [ { key: "monkey", frame: 0 } ],
        frameRate: 1
    });
    
    //Creating Collisions -- setImmovable(); makes it so that the player cannot push the platforms
    this.physics.add.collider(platform1, character);
    platform1.setImmovable();
    this.physics.add.collider(platform2, character);
    platform2.setImmovable();
    this.physics.add.collider(platform3, character);
    platform3.setImmovable();
    this.physics.add.collider(platform4, character);
    platform4.setImmovable();
    this.physics.add.collider(platform5, character);
    platform5.setImmovable();
    this.physics.add.collider(platform6, character);
    platform6.setImmovable();
    this.physics.add.collider(platform7, character);
    platform7.setImmovable();
    this.physics.add.collider(platform8, character);
    platform8.setImmovable();
    this.physics.add.collider(platform9, character);
    platform9.setImmovable();
    this.physics.add.collider(platform10, character);
    platform10.setImmovable();
    this.physics.add.collider(platform11, character);
    platform11.setImmovable();
    this.physics.add.collider(platform12, character);
    platform12.setImmovable();
    this.physics.add.collider(platform13, character);
    platform13.setImmovable();
    this.physics.add.collider(platform14, character);
    platform14.setImmovable();
    this.physics.add.collider(platform15, character);
    platform15.setImmovable();
    this.physics.add.collider(platform16, character);
    platform16.setImmovable();
    this.physics.add.collider(platform17, character);
    platform17.setImmovable();
    this.physics.add.collider(platform18, character);
    platform18.setImmovable();
    this.physics.add.collider(platform19, character);
    platform19.setImmovable();
    this.physics.add.collider(platform20, character);
    platform20.setImmovable();
    this.physics.add.collider(platform21, character);
    platform21.setImmovable();
    this.physics.add.collider(platform22, character);
    platform22.setImmovable();
    this.physics.add.collider(platform23, character);
    platform23.setImmovable();
    this.physics.add.collider(platform24, character);
    platform24.setImmovable();
    this.physics.add.collider(platform25, character);
    platform25.setImmovable();
    this.physics.add.collider(platform26, character);
    platform26.setImmovable();
    this.physics.add.collider(platform27, character);
    platform27.setImmovable();
    this.physics.add.collider(platform28, character);
    platform28.setImmovable();
    this.physics.add.collider(platform29, character);
    platform29.setImmovable();
    this.physics.add.collider(platform30, character);
    platform30.setImmovable();
    this.physics.add.collider(platform31, character);
    platform31.setImmovable();
    this.physics.add.collider(platform32, character);
    platform32.setImmovable();
    this.physics.add.collider(platform33, character);
    platform33.setImmovable();
    this.physics.add.collider(platform34, character);
    platform34.setImmovable();
    this.physics.add.collider(platform35, character);
    platform35.setImmovable();

    this.physics.add.collider(vanishPlatform1, character);
    vanishPlatform1.setImmovable();
    this.physics.add.collider(vanishPlatform2, character);
    vanishPlatform2.setImmovable();
    this.physics.add.collider(vanishPlatform3, character);
    vanishPlatform3.setImmovable();

    character.setCollideWorldBounds(true);
    character.body.setBoundsRectangle(new Phaser.Geom.Rectangle(0, -20, 1000, 800)); // makes custom worldbounds

    //Creating lives and heart images
    numberOfLives=3;
    heart1=this.physics.add.image(20,20,"hearts");
    heart1.displayWidth=30;
    heart1.displayHeight=30;
    heart2=this.physics.add.image(50,20,"hearts");
    heart2.displayWidth=30;
    heart2.displayHeight=30;
    heart3=this.physics.add.image(80,20,"hearts");
    heart3.displayWidth=30;
    heart3.displayHeight=30;

    //Creating Audio
    melody=this.sound.add("melody", { loop: true });
    melody.play();
    pickup=this.sound.add("pickup");

  }//end of create
  /*************
  * REPETITION *
  *************/
  update() // loops to check character movement, collision detection and game completion
  {
    /*************
     * SELECTION *
     *************/
    //Number of lives and hearts
    if(character.y>630)
    {
      character.x=750;
      character.y=50;
      numberOfLives--;
    }
    if(numberOfLives==2)
    {
      heart3.disableBody(true,true); // removes the image
    }
    else if(numberOfLives==1)
    {
      heart2.disableBody(true,true); // removes the image
    }
    else if(numberOfLives<=0)
    {
      heart1.disableBody(true,true); // removes the image
      melody.stop();
      this.scene.start("end");
    }
    
    if(upKey.isDown && character.body.touching.down || spaceKey.isDown && character.body.touching.down || wKey.isDown&& character.body.touching.down) // makes it so user can only jump when touching a platform
    {
      character.setVelocityY(-330); // Using velocity to move things instead of x and y so then collision works
    }
    character.setVelocityX(0); // Sets default X Velocity to 0 so it doesn't slide forever
    if(leftKey.isDown || aKey.isDown)
    {
      character.setVelocityX(-100); // Using velocity to move things instead of x and y so then collision works
      character.anims.play("left", true);
    }
    else if(rightKey.isDown || dKey.isDown)
    {
      character.setVelocityX(100); // Using velocity to move things instead of x and y so then collision works
      character.anims.play("right", true);
    }
    else
    {
      character.anims.play("idle", true);
    }
    if(downKey.isDown || sKey.isDown)
    {
      character.setVelocityY(300); // Using velocity to move things instead of x and y so then collision works
      character.anims.play("roll", true);
    }

    //Button activation -- seeing if the character interacted with the button
    if(this.physics.world.overlap(button1,character))
    {
      button1.anims.play("greenButton", true);
      vanishPlatform2.disableBody(true,true); // removes the image and collision
    }
    if(this.physics.world.overlap(button2,character))
    {
      button2.anims.play("greenButton", true);
      vanishPlatform3.disableBody(true,true); // removes the image and collision
    }
    if(this.physics.world.overlap(button3,character))
    {
      button3.anims.play("greenButton", true);
      vanishPlatform1.disableBody(true,true); // removes the image and collision
    }

    //Spike collision -- takes damage and resets the character on contact with spikes
    if(this.physics.world.overlap(spike1,character))
    {
      character.x=750;
      character.y=50;
      numberOfLives--;
    }
    if(this.physics.world.overlap(spike2,character))
    {
      character.x=750;
      character.y=50;
      numberOfLives--;
    }
    if(this.physics.world.overlap(spike3,character))
    {
      character.x=750;
      character.y=50;
      numberOfLives--;
    }

    //Level Completion -- when the level is completed
    if(this.physics.world.overlap(banana,character))
    {
      banana.disableBody(true, true); // removes the image
      melody.stop();
      pickup.play();
      this.scene.start("title");
    }

    //Creating gravity
    character.setGravityY(500); // this makes it so there is always a force pulling the character down
  }
}
//end of levelTwo screen
class endScene extends Phaser.Scene
{   
  constructor (config)
  {
    super(config);
  }
  preload()
  {
    //Loading Images
    this.load.image("again","../assets/sprites/playAgain.png");
    this.load.image("gameover","../assets/sprites/gameoverButton.png");
  }
  create()
  {
    //Creating buttons
    againButton=this.add.image(500,350,"again");
    againButton.setInteractive({useHandCursor: true})
    againButton.on("pointerover",()=>{ // When the mouse is hovering over the button
      againButton.setScale(1.1)
      select.play();
    })
    againButton.on("pointerout",()=>{ // When the mouse is not over the button it returns to normal size
      againButton.setScale(1)
    })
    againButton.on("pointerdown",()=>{ // When the button is clicked it gets smaller
      againButton.setScale(.9)
      select.play();
      menu.stop();
      this.time.addEvent //adds a delay to switch screens
      ({
        delay: 200,
        callback: ()=>
        {
          this.scene.start("title");
        },
      })
    })
    gameover=this.add.image(500,250,"gameover");
  }//end of create
  update()
  {
  }
}
//end of endScene screen
var config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 1000,
    height: 600,
    physics: {
      default: 'arcade',
      arcade: {
        debug: false
         
      }
    }
};
var game = new Phaser.Game(config);

game.scene.add("title",titleScreen);
game.scene.add("help",helpScreen)
game.scene.add("levels",levelScreen);
game.scene.add("one",levelOne);
game.scene.add("two",levelTwo)
game.scene.add("end",endScene);
game.scene.start("title");