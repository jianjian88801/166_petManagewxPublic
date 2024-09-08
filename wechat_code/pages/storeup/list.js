const {
deleteData,
list,
page
} = require("../../api/index.js")
const utils = require("../../utils/index.js")
Page({
/**
* 页面的初始数据
*/
data: {
showToTopButton: true,
onPageScrollTop: 0, // 存储滚动距离的变量
goodsListData: [],
activeIndex: 0,
allData: [],
deleteShow: false,
className:"",
name:"",
addAuth:"",
delAuth: "",
editAuth:"" ,
userid:"",
baseURL: wx.getStorageSync('baseURL') + '/'
},

/**
* 生命周期函数--监听页面加载
*/
async onLoad(options) {
this.setData({
addAuth: utils.isAuth("storeup", "新增") || utils.isAuthFront("storeup", "新增"),
delAuth: utils.isAuth("storeup", "删除") || utils.isAuthFront("storeup", "删除"),
editAuth: utils.isAuth("storeup", "修改") || utils.isAuthFront("storeup", "修改"),
})
if(options.userid) {
this.setData({
userid:options.userid
})
}
const currentPageUrl = this.getCurrentPageUrl();
if(getApp().globalData.name!=null){
this.setData({
name: getApp().globalData.name
})
getApp().globalData.name=null
this.searhandler()
}else{
this.getData()
}

},
onShow() {
if (getApp().globalData.name == null) {
this.setData({
name: null
})
this.getData()

}
},
/**
* 生命周期函数--监听页面初次渲染完成
*/
onReady() {

},
onPageShow() {
// 页面显示时执行的操作
console.log("sssww页面显示");
},
/**
* 生命周期函数--监听页面显示
*/
getCurrentPageUrl() {
const pages = getCurrentPages();
const currentPage = pages[pages.length - 1];
const currentPageUrl = `/${currentPage.route}`;
return currentPageUrl;
},
handleTabClick(e) {

this.setData({
activeIndex: index,
});
},

    async search() {

        let params = {};
        params['sort'] = 'id';
        params['order'] = 'asc';
        params['type'] = 1
        if (this.data.name) {
            params['name'] = '%' + this.data.name + '%'
        }
        let res = {};
        if (this.data.userid) {
            res = await page(`storeup`, params);
        } else {
            res = await list(`storeup`, params);
        }

        let goodsListData
        // 如果是第一页数据置空
        if (res.data.list.length <= 0) goodsListData = [];

        goodsListData = res.data.list.map(item => {
            item.picture = item.picture.split(",")
            return item
        })



        this.setData({
            goodsListData,
        })

    },


addTap() {
getApp().globalData.detailId=null
wx.navigateTo({
url: `/pages/storeup/update-and-add`
})
},
searchListHandler(e) {
this.setData({
goodsListData: e.detail.data
})
},
onPageScroll(e) {
if (e.scrollTop >= 225) {
this.setData({
showToTopButton: true
});
}

},
backToTop() {
wx.pageScrollTo({
scrollTop: 0, // 返回顶部的位置
duration: 1000, // 滚动动画的时长，单位为 ms
});
// 返回顶部时隐藏按钮

},

deleteBtn(e) {
wx.showModal({
title: '提示',
content: '确认删除？',
complete: async (res) => {
if (res.cancel) {}
if (res.confirm) {
const id = e.currentTarget.dataset.id;
const res = await deleteData("storeup",[id])
console.log(res);
if (res.code == 0) {
    this.getData()
}
}
}
})
},
editBtn(e) {
const id = e.currentTarget.dataset.id;
getApp().globalData.detailId=id
wx.navigateTo({
url: `/pages/storeup/update-and-add`
})
},
async detailBtn(e) {
const item = e.currentTarget.dataset.item;
getApp().globalData.detailId = item.refid
wx.navigateTo({
    url: `/pages/${item.tablename}/detail`
})

},
async getData() {
const obj={
page: 1,
limit: 100,
type:1
}


    const userId = getApp().globalData.userInfo.id;
    let data;
    if (userId) {
        const responseList = await list("storeup", obj);
        data = responseList.data;
    } else {
        const responsePage = await page("storeup", obj);
        data = responsePage.data;
    }
    
let goodsListData = data?.list?.filter(item =>
item?.sfsh?item.sfsh === "是":item)
.map(item => {
    item.picture? item.picture=item.picture.split(","):""
return item;
});
if(this.data.userid){
goodsListData=data?.list?.filter(item=>item.userid==this.data.userid*1)
}

this.setData({
goodsListData,
allData: goodsListData
})

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