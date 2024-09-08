// component/com-date/com-date.js
const dateUtils = require('../../utils/defautils')
const utils = require("../../utils/index.js")
Component({
    properties: {
        isShowPicker: false
    },
    data: {
        yMDhms: "",
        // isShowPicker: false,
        mode: "YMDhms",
        yMDhms: "",
        mode: "YMDhms",
        data: {
            type: "YMDhms"
        },
        yMDhm: "",
        yMD: "",
        mD: "",
        hm: "",
        hm: "",
        dateTime: new Date().getTime()
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {},

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onShow() {

    },
    ready() {
        const yMDhms = utils.getCurrentDate("yMDhms")
        this.setData({
            yMDhms
        })
    },
    methods: {
        onYMDhms: function (e) {

            this.setData({
                isShowPicker: true,

            })
        },
        datePickerCancellEvent: function (e) {
            this.setData({
                isShowPicker: false
            })
        },
        datePickerOkEvent: function (e) {
            this.setData({
                isShowPicker: false
            })
            let mode = e.detail.data.type;
            let date = e.detail.date;

            switch (mode) {
                case "YMDhms": {
                    this.setData({
                        yMDhms: dateUtils.formatLongTime(date, "Y-M-D h:m:s")
                    })

                    break;
                }
                case "YMDhm": {
                    this.setData({

                        yMDhm: dateUtils.formatLongTime(date, "Y-M-D h:m")
                    })

                    break;
                }
                case "YMD": {
                    this.setData({

                        yMD: dateUtils.formatLongTime(date, "Y-M-D")
                    })
                    break;
                }
                case "MD": {
                    this.setData({

                        mD: dateUtils.formatLongTime(date, "M-D")
                    })
                    break;
                }
                case "hm": {
                    this.setData({

                        hm: dateUtils.formatLongTime(date, "h:m")
                    })
                    break;
                }
            }

            const data = this.data.yMDhms
            this.triggerEvent("dateHandler", {
                data
            })
        },
    },


    /**
     * 生命周期函数--监听页面显示
     */


    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage() {

    }
})