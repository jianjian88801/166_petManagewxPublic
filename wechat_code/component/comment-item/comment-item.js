// component/com-search/com-search.js
const {
    deleteData
} = require("../../api/index.js")
const utils = require("../../utils/index.js")
Component({
    properties: {
        treeData: {
            type: Array,
            value: [],
        },
        tableName: {
            type: String,
            value: "",
        },
        // editAuth: {
        //     type: Boolean,
        //     value: false,
        // },
        // delAuth: {
        //     type: Boolean,
        //     value: false,
        // },

    },
    data: {
        treeData: [],
        curTabName: "",
        isreply: true,
        editAuth: false,
        delAuth: false,
        userid: '',
    },
    observers: {
        'data': function (newValue) {
            this.setData({
                treeData: newValue
            })
        },
        "tableName": function (newValue) {
            this.setData({
                curTabName: newValue
            })
        },
    },
    ready() {
        const result = this.mergeChilds(this.data.treeData)
        let delAuth
        let backpage = utils.getCurrentPageUrl(2)
        if (backpage.includes('index')) {
            delAuth = utils.isAuthFront(this.data.curTabName, "删除")
        } else if (backpage.includes('center')) {
            delAuth = utils.isAuth(this.data.curTabName, "删除")
        }
        this.setData({
            userid: getApp().globalData.userInfo.id,
            treeData: result,
            addAuth: utils.isAuth(this.data.curTabName, "新增") || utils.isAuthFront(this.data.curTabName, "新增"),
            delAuth,
            editAuth: utils.isAuth(this.data.curTabName, "修改") || utils.isAuthFront(this.data.curTabName, "修改"),
            replyAuth: utils.isAuth(this.data.curTabName, "回复") || utils.isAuthFront(this.data.curTabName, "回复"),
        })
    },
    onShow() {},
    methods: {
        mergeChilds(data) {
            for (let i = 0; i < data.length; i++) {
                const obj = data[i];
                if (obj.childs && obj.childs.length > 0) {
                    obj.childs = this.mergeChilds(obj.childs);
                    for (let j = 0; j < obj.childs.length; j++) {
                        const child = obj.childs[j];
                        if (child.childs && child.childs.length > 0) {
                            obj.childs.splice(j + 1, 0, ...child.childs);
                            j += child.childs.length - 1; // 减去 1 ，跳过已添加的子项
                        }
                    }
                }
            }
            return data;
        },
        replyTap(e) {
            const id = e.currentTarget.dataset.id;
            // console.log("回复", id);
            const curPages = utils.getCurrentPageUrl(1)
            if (curPages.includes("forum")) {
                getApp().globalData.editorContent = null
                wx.navigateTo({
                    url: `/pages/reply/reply?parentId=${id}reply`
                })
            } else {
                // 留言回复
            }

        },
        editTap(e) {
            const id = e.currentTarget.dataset.id;
            const content = e.currentTarget.dataset.content;
            getApp().globalData.editorContent = content
            wx.navigateTo({
                url: `/pages/reply/reply?parentId=${id}edit`
            })
        },
        delTap(e) {
            const id = e.currentTarget.dataset.id;
            const curPages = utils.getCurrentPageUrl(1)
            if (curPages.includes("messages")) {
                wx.showModal({
                    title: '提示',
                    content: '确认删除？',
                    complete: async (res) => {


                        if (res.confirm) {
                            const responed = await deleteData("messages", [id])
                            if (responed.code == 0) {
                                this.triggerEvent("refreshParent")
                            }

                        }
                    }
                })

            }
        },

    }

})