const utils = require('../../utils/index.js')
Component({
    properties: {
        listData: {
            type: Array | Object,
            value: {}
        },
        step: {
            type: Number,
            value: 1
        },
    },
    data: {
        isShowChildren: false,
    },
    methods: {
        toggleShowChildren() {
            this.setData({
                isShowChildren: !this.data.isShowChildren
            })
        },
        menuTap(e) {
            const item = e.currentTarget.dataset.item;
            const tableName = item.tableName
            if (tableName == 'forum') {
                // 固定模板
                if (item.menu == '论坛交流') {
                    wx.switchTab({
                        url: `/pages/${tableName}/${tableName}-list`,
                    })
                }
                if (item.menu == '我的发布') {
                    wx.navigateTo({
                        url: `/pages/${tableName}/${tableName}-my`,
                    })
                }
                if (item.menu.includes('详情')) {
                    wx.navigateTo({
                        url: `/pages/${tableName}/${tableName}-detail`,
                    })
                }
                if (item.menu.includes('回复')) {
                    wx.navigateTo({
                        url: `/pages/${tableName}/${tableName}-reply`,
                    })
                }
            } else if (item.menu == "错题本") {
                wx.navigateTo({
                    url: '/pages/examrecord/detail',
                })
            } else if (tableName == 'orders') {
                const tabar = getApp().globalData.tabarList;
                if (tabar.includes(tableName)) {
                    wx.switchTab({
                        url: '/pages/shop-orders/orders-list',
                    })
                } else {
                    wx.navigateTo({
                        url: '/pages/shop-orders/orders-list',
                    })
                }
            } else if (tableName == 'cart') {
                const tabar = getApp().globalData.tabarList;
                if (tabar.includes(tableName)) {
                    wx.switchTab({
                        url: '/pages/shop-cart/shop-cart',
                    })
                } else {
                    wx.navigateTo({
                        url: '/pages/shop-cart/shop-cart',
                    })
                }
            } else {
                let id = getApp().globalData.userInfo.id
               if(tableName){
                utils.menuTap(tableName, id)
               }
            }




        },
    }
})