const {
    save,
    update,
    add
} = require('../../api/index')
const utils = require("../../utils/index.js")
var that;
Page({
    data: {
        content: '',
        formats: {}, // 样式
        placeholder: '开始输入...',
        userInfo: {},
        parentId: ""
    },
    onLoad(option) {
        that = this;
        const parentId = option.parentId
        this.setData({
            userInfo: getApp().globalData.userInfo,
            parentId
        })
        that.onEditorReady();
    },
    // 初始化编辑器
    onEditorReady() {
        const that = this;
        const editorQuery = this.createSelectorQuery().select('#editor');

        if (getApp().globalData.editorContent) {
            const content = getApp().globalData.editorContent;
            setTimeout(() => {
                editorQuery.context((res) => {
                    that.editorCtx = res.context;
                    // 初始化赋值内容
                    that.editorCtx.setContents({
                        html: content
                    });
                }).exec();
            }, 100);
        } else {
            editorQuery.context((res) => {
                that.editorCtx = res.context;
                console.log("res.context", res);

                if (wx.getStorageSync("content")) {
                    that.editorCtx.insertText(wx.getStorageSync("content"));
                }
            }).exec();
        }
    },
    // 返回选区已设置的样式
    onStatusChange(e) {
        // console.log(e.detail)
        const formats = e.detail
        this.setData({
            formats
        })
    },
    // 内容发生改变
    onContentChange(e) {
        // console.log("内容改变")
        // console.log(e.detail)
        // that.setData({
        //   content: e.detail
        // })
        // wx.setStorageSync("content", e.detail)
    },
    // 失去焦点
    onNoFocus(e) {
        // console.log("失去焦点")
        // console.log(e.detail)
        // that.setData({
        //   content: e.detail
        // })
        // wx.setStorageSync("content", e.detail)
    },
    // 获取内容
    clickLogText(e) {
        that.editorCtx.getContents({
            success: async function (res) {
                wx.setStorageSync("content", res.html);
                const data = {
                    avatarurl: that.data.userInfo?.touxiang,
                    content: res.html,
                    username: wx.getStorageSync('nickname')
                }
                // 添加留言用userid  回复都用  parentid
                const curPages = utils.getCurrentPageUrl(2) //获取上一级页面

                if (curPages.includes("forum")) {
                    data['parentid'] = that.data.parentId.split("r")[0]
                    let responed = await save("forum", data)
                    if (responed.code == 0) {
                        wx.showToast({
                            title: '回复成功',
                            icon: "none"
                        })
                        wx.navigateBack({
                            delta: 1
                        })
                    }
                }
                if (curPages.includes("messages")) {
                    if (that.data.parentId.includes("isAdd")) {
                        data['userid'] = that.data.userInfo.id
                        let responed = await add("messages", data)
                        if (responed.code == 0) {
                            wx.showToast({
                                title: '添加成功',
                                icon: "none"
                            })
                            wx.navigateBack({
                                    detail: 1,
                                    complete: () => {
                                        // 触发事件通知，传递需要更新的数据
                                        const pages = getCurrentPages();
                                        if (pages.length >= 1) {
                                            const prePage = pages[pages.length - 1];
                                            prePage.onLoad(); //
                                        }
                                    }
                                }

                            )
                        }

                    }
                    if (that.data.parentId.includes("edit")) {
                        data['id'] = that.data.parentId.split("edit")[0]
                        let responed = await update("messages", data)
                        if (responed.code == 0) {
                            wx.showToast({
                                title: '回复成功',
                                icon: "none"
                            })
                            getApp().globalData.editorContent = null
                            wx.navigateBack({
                                    detail: 1,
                                    complete: () => {
                                        // 触发事件通知，传递需要更新的数据
                                        const pages = getCurrentPages();
                                        if (pages.length >= 1) {
                                            const prePage = pages[pages.length - 1];
                                            prePage.onLoad(); //
                                        }
                                    }
                                }

                            )
                        }
                    }

                }


            }
        })
    },
    // 清空所有
    clear() {
        this.editorCtx.clear({
            success: function (res) {
                console.log("清空成功")
            }
        })
    },
    // 清除样式
    removeFormat() {
        this.editorCtx.removeFormat()
    },

    insertImg() {
        wx.chooseImage({
            count: 1,
            sizeType: ['compressed'],
            sourceType: ['album', 'camera'],
            success: (res) => {
                const tempFilePaths = res.tempFilePaths;
                this.editorCtx.insertImage({
                    src: tempFilePaths[0],
                    width: '100rpx',
                    height: '100rpx',
                    extClass: "charutupian"
                })
            }
        })

    },
    // 记录样式
    format(e) {
        let {
            name,
            value
        } = e.target.dataset
        if (!name) return
        this.editorCtx.format(name, value)
    },


})