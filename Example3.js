class Example3 extends Phaser.Scene{
    constructor(){
        super({key:"Example3"});
    }

    preload(){
        this.load.audio('test',['assets/music.wav']);
    }

    create(){
        this.soundFX = this.sound.add('test', {loop: "true"});
        this.soundFX.play();
        this.soundFX.rate = 1.5;

        this.input.keyboard.on("keydown_L", (e)=>{
            this.soundFX.loop = !this.soundFX.loop;
            if(this.soundFX.loop) this.soundFX.play();
        })

        this.input.keyboard.on("keydown_P",(e)=>{
            if(this.soundFX.isPlaying) this.soundFX.pause();
            else this.soundFX.resume();
        })

        this.key_L = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.L);
        this.key_K = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.K);
    }

    update(delta){
        if(this.key_K.isDown){
            this.soundFX.rate -=.02;
        }
        if(this.key_L.isDown){
            this.soundFX.rate += .02;
        }
    }
}