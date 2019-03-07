class Example1 extends Phaser.Scene {
    constructor(){
        super({key:"Example1"})
    }

    preload(){
        this.load.image('shaggy','assets/shaggy.jpg');
    }

    create() {
        this.shaggy = this.add.image(400,300,'shaggy');

        this.input.keyboard.on('keyup_D', ()=>{
            this.shaggy.x += 10;
        })

        this.key_A = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);

        this.input.on('pointerdown',(e)=>{
            this.shaggy.x = e.x;
            this.shaggy.y = e.y;
        })
    }

    update(delta){
        if(this.key_A.isDown)
            this.shaggy.x--;
    }
}
