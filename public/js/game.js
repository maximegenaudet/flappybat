var game = {
    data: {
        score : 0,
        steps: 0,
        start: false,
        newHiScore: false,
        muted: false
    },

    resources: [
            // images
        {name: "bg", type:"image", src: "data/img/bg.png"},
        {name: "clumsy", type:"image", src: "data/img/clumsy.png"},
        {name: "pipe", type:"image", src: "data/img/pipe.png"},
        {name: "logo", type:"image", src: "data/img/logo.png"},

        {name: "gameover", type:"image", src: "data/img/gameover.png"},
		{name: "tablo", type:"image", src: "data/img/tablo.png"},
		{name: "tablo12", type:"image", src: "data/img/tablo12.png"},
        {name: "gameoverbg", type:"image", src: "data/img/gameoverbg.png"},
        {name: "hit", type:"image", src: "data/img/hit.png"},
        {name: "getready", type:"image", src: "data/img/getready.png"},
        {name: "new", type:"image", src: "data/img/new.png"},
        {name: "share", type:"image", src: "data/img/share.png"},
        {name: "tweet", type:"image", src: "data/img/tweet.png"},
        // sounds
        {name: "theme", type: "audio", src: "data/bgm/"},
        {name: "hit", type: "audio", src: "data/sfx/"},
        {name: "lose", type: "audio", src: "data/sfx/"},
        {name: "wing", type: "audio", src: "data/sfx/"},
		{name: "balledeboulepremium", type: "audio", src: "data/sfx/"},
        {name: "balle de boule", type: "audio", src: "data/sfx/"},
        {name: "cabiche", type: "audio", src: "data/sfx/"},
        {name: "cest du bon", type: "audio", src: "data/sfx/"},
        {name: "fatchdefitch", type: "audio", src: "data/sfx/"},
        {name: "onestbienla", type: "audio", src: "data/sfx/"},
        {name: "tesdanslaxe", type: "audio", src: "data/sfx/"},

    ],

    "onload": function() {
        if (!me.video.init(900, 504, {
            wrapper: "screen",
            scale : "auto",
            scaleMethod: "fit"
        })) {
            alert("Your browser does not support HTML5 canvas.");
            return;
        }
        me.audio.init("mp3,ogg");
        me.loader.preload(game.resources, this.loaded.bind(this));
    },

    "loaded": function() {
        me.state.set(me.state.MENU, new game.TitleScreen());
        me.state.set(me.state.PLAY, new game.PlayScreen());
        me.state.set(me.state.GAME_OVER, new game.GameOverScreen());

        me.input.bindKey(me.input.KEY.SPACE, "fly", true);
        me.input.bindPointer(me.input.KEY.SPACE);

        me.pool.register("clumsy", game.BirdEntity);
        me.pool.register("pipe", game.PipeEntity, true);
        me.pool.register("hit", game.HitEntity, true);

        me.state.change(me.state.MENU);
    }
};
