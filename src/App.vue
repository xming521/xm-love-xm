<template>
    <div id="app">
        <div :class="{'video-block':true,'smaller':isActive}">
            <div id="innerPlayer"></div>
        </div>
        <div :class="{'music-block':true,'bigger':isActive}">
            <iframe id="iframe" frameborder="0" scrolling="no" src="/static/music-player/index.html"
                    style="border: none;height: 800px;width:100% "></iframe>
        </div>

    </div>
</template>

<script>
    import Player from 'xgplayer';

    export default {
        name: 'app',
        components: {},
        data: function () {
            return {isActive: false};
        },
        mounted: function () {
            let player = new Player({
                id: 'innerPlayer',
                autoplay: false,
                volume: 0.5,
                fluid: true,
                loop: false,
                url: '/static/video/exp.mp4',
                playsinline: true,
                whitelist: [''],
                controls: true
            });

            var that = this;
            player.on('play', function () {
                var oIframe = document.getElementById('iframe').contentDocument;
                oIframe.getElementById('play-button').click()
            });
            player.on('pause', function () {
                var oIframe = document.getElementById('iframe').contentDocument;
                oIframe.getElementById('pause-button').click()
            });
            player.on('ended', function () {
                that.isActive = true;
                // player
                player.play();

            })


        }
    }
</script>

<style>
    * {
        margin: 0;
        padding: 0
    }

    .xgplayer-skin-default {
        background: none !important;
    }

    body::-webkit-scrollbar {
        display: none;
    }

    body {
        overflow-y: hidden;
        overflow-x: hidden;
        -ms-overflow-style: none;
        background: #f8f8f8;
    }

    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        /*overflow: hidden;*/
    }

    .music-block {
        display: inline-block;
        width: 20%;
    }

    .video-block {
        display: inline-block;
        width: 80%;
        margin-bottom: 100px;
    }

    .bigger {
        animation: bigger forwards 1.5s;
        -webkit-animation: bigger forwards 1.5s; /* Safari %E4%B8%8E Chrome */
    }

    .smaller {
        animation: small forwards 1.5s;
        -webkit-animation: small forwards 1.5s; /* Safari %E4%B8%8E Chrome */
    }

    @keyframes bigger {
        100% {
            width: 60%;
        }
    }

    @-webkit-keyframes bigger /* Safari and Chrome */
    {
        100% {
            width: 60%;
        }
    }

    @keyframes small {
        100% {
            width: 40%;
        }
    }

    @-webkit-keyframes small /* Safari and Chrome */
    {
        100% {
            width: 40%;
        }
    }

</style>
