// pages/newsDetail/newsDetail.js
const {
    detail,
    list,
    info
} = require("../../api/index.js")
Page({

    /**
     * 页面的初始数据
     */
    data: {
        articleList: [],
        id: "",
        refid:'',
        list:[]
    },

    /**
     * 生命周期函数--监听页面加载
     */
    async onLoad(options) {
        this.setData({
            id: options.id,
            refid:options.refid,
        })
        this.getDetail(options.id)
        this.getList()

    },
    async getDetail(id){
        const {
            data
        } = await detail("chapteryonghu", id)
        this.setData({
            articleList: data
        })
    },
    async getList() {
        const res = await list("chapteryonghu", {
            refid: this.data.refid,
            limit: 1000
        })
        if (res.code == 0) {
            this.setData({
                list: res.data.list
            })
        }

    },
    async init() {
        console.log(this.data.id)
        const res = await info("chapteryonghu",  this.data.id)
        if (res.code == 0) {
            this.setData({
                articleList: res.data,
                'articleList.content': res.data.content.replace(/<img/g, '<img style="width: 100%;"')
            })
        }
        wx.pageScrollTo({
            scrollTop: 0,
            duration: 100,
        })
    },

    prepClick() {
        for (let x in this.data.list) {
            if (this.data.list[x].id == this.data.id) {
                if (x == 0) {
                    wx.showToast({
                        title: '已经是第一章了!',
                        icon: "none"
                    })
                    return
                } else {
                    this.setData({
                        id: this.data.list[Number(x) - 1].id
                    })
                    this.init()
                    break
                }
            }
        }

    },
    backClick(){
      wx.navigateBack({
          delta: 1
      })
    },
    nextClick() {
        for (let x in this.data.list) {
            if (this.data.list[x].id == this.data.id) {
                if (x == this.data.list.length - 1) {
                    wx.showToast({
                        title: '已经是最后一章了!',
                        icon: "none"
                    })
                    return
                } else {
                    if (this.data.list[Number(x) + 1].vipread == '是' && wx.getStorageSync("vip") != '是') {
                        wx.showToast({
                            title: '下一章为vip章节，请购买会员后阅读!',
                            icon: "none"
                        })
                        return
                    } else {
                        this.setData({
                            id: this.data.list[Number(x) + 1].id
                        })
                        this.init()
                        break
                    }
                }
            }
        }
    },
    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload() {
        // console.log("销毁");

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