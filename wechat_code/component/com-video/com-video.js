function getRandomColor() {
    const rgb = []
    for (let i = 0; i < 3; ++i) {
        let color = Math.floor(Math.random() * 256).toString(16)
        color = color.length === 1 ? '0' + color : color
        rgb.push(color)
    }
    return '#' + rgb.join('')
}

Component({
    onShareAppMessage() {
        return {
            title: 'video',
            path: 'page/component/pages/video/video'
        }
    },

    onReady() {
        this.videoContext =
            this.setData({
                videoContext: wx.createVideoContext('myVideo')
            })
    },

    onHide() {

    },

    inputValue: '',
    data: {
        src: '',
        danmuList: [{
            text: '第 1s 出现的弹幕',
            color: '#ff0000',
            time: 1
        }, {
            text: '第 3s 出现的弹幕',
            color: '#ff00ff',
            time: 3
        }],
    },
    methods: {

        playAudio: function () {
            const audioContext = wx.createInnerAudioContext();
            audioContext.src = 'audio.mp3';
            audioContext.play();
        },
        bindButtonTap() {
            const that = this
            wx.chooseVideo({
                sourceType: ['album', 'camera'],
                maxDuration: 60,
                camera: ['front', 'back'],
                success(res) {
                    that.setData({
                        src: res.tempFilePath
                    })
                }
            })
        },






    }

})