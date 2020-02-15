$(document).ready(function () {

    var x="刚刚的那些我画的画面，是我们平时在一起最平常也是最有感的画面，没有拍过照片我想就用这种方法让你回忆起来吧。配乐是从几百首歌里挑，然后一首歌一首歌的用心剪的，只想把最动听的话留给你。" +
        "还记得我们第一次见面是在操场上，你还给我带了一瓶奶，说实话并没有那么所谓的一见钟情，哈哈哈而且还有点感觉你那晚上穿的花花的一点都不适合你。" +
        "实话说第一次在超市里拉你的手🌚是荷尔蒙使然，然后我们就开始爬山，在山上的那个小平台上我才对你动了心，看见你咯咯咯的傻笑，就好想亲亲你的小嘴，想用一辈子来守护。" +
        "后来我们我们去了济南大大小小的地方，我度过了我大学里最开心的一个学期。\n" +
        "你要真的相信我只是疏忽了假期里有点冷淡了，不能说我一直都没有好好爱你啊，你回家时不是我冒着风雪不去复习考试送你去的车站嘛，你的手机不是我给你筹划买了又退又买的嘛，真的只是放假的原因，大家都变懒了，我可能慢慢变得自我自私了。" +
        "而且我真的知错了，每次都是我进入了冷淡期，是我的错是我透支了你的爱，我真的知错了，铭铭是那么可爱又善良的人，铭铭真的一直在调整啊，原谅他吧，他真的知道错了，他的内心真的是很想和你白头偕老的" +
        "不行的话我们重新开始好不好，这就当我送你的表白礼物，刚刚画的那些美好的事情我们会一起去做好不好，我喜欢你不管是过去现在还是将来。"


    var playlist = [{
        title: "晚安喵",
        artist: "罗小黑",
        content: "喜欢你的微笑和调皮的嘴角\n" +
            "那午后的阳光穿过你的发梢\n" +
            "想让全世界停在这一秒\n" +
            "陪着你把世界都忘掉",
        mp3: "./music/晚安喵.mp3",
    }, {
        title: "遇见你的时星星都落我头上",
        artist: "任然",
        content: "你给我了一个微笑\n" +
            "我可不可以用一个拥抱 \n" +
            "还你",
        mp3: "./music/遇见你的时候所有星星\n都落到我头上.mp3",
    }, {
        title: "Grade Skipping",
        artist: "封茗囧菌",
        content: "I could be I could be \n your boy friend\n" +
            "我愿意 我愿意做你的男友\n" +
            "Suddenly Suddenly you're \n all I need\n" +
            "一见钟情 你是我的一切",
        mp3: "./music/Grade Skipping.mp3",
    }, {
        title: "当你",
        artist: "封茗囧菌",
        content:
            "(●′?`●)我想对你说\n" +
            "*′Д｀*)却害怕都说错\n" +
            "(//×//●)好喜欢你\n" +
            "(//ω///)知不知道？",
        mp3: "./music/当你.mp3",
    }, {
        title: "Me & U",
        artist: "邓福如",
        content: "you're my everything\n" +
            "and I need you to know\n" +
            "I just can't waiting \n for the moment\n" +
            "cause I love you so",
        mp3: "./music/MeU.mp3",
    },
        {
            title: "鸽子",
            artist: "徐秉龙",
            content: "我喜欢一个女孩\n" +
                "长发短发都可爱",
            mp3: "./music/鸽子.mp3",
        },
        {
        title: "只对你有感觉",
        artist: "封茗囧菌",
        content: "微笑 再美 再甜\n" +
            "不是妳的 都不特别\n" +
            "眼泪 再苦 再咸\n" +
            "有你安慰 又是晴天",
        mp3: "./music/只对你有感觉.mp3",
    },
        {
            title: "我想",
            artist: "董昱昆",
            content: "想带你逃学看一场演唱会\n" +
                "想你难过时在我怀中流泪\n" +
                "想和你背包走遍天南地北\n" +
                "想你共我尝尽人生的滋味" ,
            mp3: "./music/我想.mp3",
        }, {
            title: "每一句都很甜",
            artist: "新乐尘符",
            content: "我想和你一起走 \n数遍所有的星星\n" +
                "我想和你一起疯 \n看完所有的风景\n" +
                "我想牵着你的手\n告诉我多喜欢你",
            mp3: "./music/每一句都很甜.mp3",
        }, {
            title: "一笑倾城",
            artist: "居里里",
            content: "想和你游四方赏晴雨的风光\n" +
                "想和你铺纸笔写余生的篇章",
            mp3: "./music/一笑倾城.mp3",
        },
        {
            title: "心愿便利贴",
            artist: "王欣宇",
            content: "把你的讨厌 \n" +
                "宅急便 送到天边\n" +
                "平凡的傻事\n" +
                "用了心 变成经典",
            mp3: "./music/心愿便利贴.mp3",
        },
        {
            title: "",
            artist: "一位不知名的网友",
            content: x,
            mp3: "./music/Christmas.mp3",
        },


    ];



    var cssSelector = {
        jPlayer: "#jquery_jplayer",
        cssSelectorAncestor: ".music-player"
    };

    var options = {
        swfPath: "http://cdnjs.cloudflare.com/ajax/libs/jplayer/2.6.4/jquery.jplayer/Jplayer.swf",
        supplied: "ogv, m4v, oga, mp3"
    };

    var myPlaylist = new jPlayerPlaylist(cssSelector, playlist, options);

});
