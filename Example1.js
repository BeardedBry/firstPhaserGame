class Example1 extends Phaser.Scene {
    constructor(){
        super({key:"Example1"})
    }

    preload(){
        this.load.image('shaggy','assets/shaggy.jpg');
    }

    create() {
        this.shaggy = this.add.image(400,300,'shaggy');
        this.shaggy.scaleX = .3;
        this.shaggy.scaleY = .3;

        this.input.keyboard.on('keyup_D', ()=>{
            this.shaggy.x += 10;
        })

        this.key_A = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);

        this.input.on('pointerdown',(e)=>{
            this.shaggy.x = e.x;
            this.shaggy.y = e.y;
        })

        this.input.keyboard.on('keyup_P', (e) =>{
            var particles = this.add.particles('blue');
            var emitter = particles.createEmitter({
                speed:100,
                scale: {start: 1, end: 0},
                blendMode: 'ADD'
            })
            var physicsImage = this.physics.add.image(this.shaggy.x, this.shaggy.y, 'shaggy' )
            physicsImage.scaleX = .1;
            physicsImage.scaleY = .1;
            physicsImage.setVelocity(Phaser.Math.RND.integerInRange(-100,100),-500);
            emitter.startFollow(physicsImage);
        });

        this.input.keyboard.on('keyup', (e)=>{
            console.log(this.shaggy)
            if(e.key=='2'){
                this.scene.start('Example2');
            } 
            if(e.key=='3'){
                this.scene.start('Example3');
            } 
        })
    }

    update(delta){
        if(this.key_A.isDown)
            this.shaggy.x--;
    }
}
