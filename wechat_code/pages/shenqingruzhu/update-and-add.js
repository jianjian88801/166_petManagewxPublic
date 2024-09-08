// pages/edit/edit.js
const {
detail,
option,
update,
add,
list,
follow,
faceMatch,
session,
rubbish,
levelOption,
baiduIdentify
} = require("../../api/index.js")

const des = require('../../utils/des.js')
const utils = require("../../utils/index.js")

Page({

/**
* 页面的初始数据
*/
data: {
imgIcon: "../../static/upload.png",
editStatus: false,
baseURL:'',
sessionReadArr:[],

detailList: null,
id: "",
cross:"",
ruleForm:{},
userid:getApp().globalData.userInfo.id,
userInfo:getApp().globalData.userInfo,
ro:{
},

jiuzhuzhanzhanghao:"",
tupian:"",
jiuzhuzhanmingcheng:"",
lianxidianhua:"",
fuzeren:"",
jiuzhuzhandizhi:"",
shenqingriqi:"请选择时间",
showshenqingriqi:false,
yonghuzhanghao:"",
yonghuxingming:"",
sfsh: '待审核',
beizhu:"",
},


/**
* 生命周期函数--监听页面加载
*/
async onLoad(options) {
let userid
if (options?.id) {
this.setData({
editStatus: true
})

}
let nowTable = wx.getStorageSync("nowTable");
const res = await session(nowTable)
if(res.data.code==0){
getApp().globalData.userInfo=res?.data
userid = res?.data.id
this.setData({
userid
})

}

let baseURL =wx.getStorageSync('baseURL') + '/'
const id = getApp().globalData.detailId
this.setData({
refid:id,
baseURL
})
//人脸识别


let  ro=this.data.ro
if(options?.cross){
var obj = wx.getStorageSync('crossObj');
let refobjempty={}
for (var o in obj){

if(o=='jiuzhuzhanzhanghao'){
refobjempty["jiuzhuzhanzhanghao"]=obj[o]
ro.jiuzhuzhanzhanghao = true;
continue;
}else{
refobjempty["jiuzhuzhanzhanghao"]=this.getUUID()
}


if(o=='tupian'){
refobjempty['tupianPath']=baseURL+ obj[o].split(",")[0]
ro.tupian = true;
continue;
}else{
}


if(o=='jiuzhuzhanmingcheng'){
refobjempty["jiuzhuzhanmingcheng"]=obj[o]
ro.jiuzhuzhanmingcheng = true;
continue;
}else{
}


if(o=='lianxidianhua'){
refobjempty["lianxidianhua"]=obj[o]
ro.lianxidianhua = true;
continue;
}else{
}


if(o=='fuzeren'){
refobjempty["fuzeren"]=obj[o]
ro.fuzeren = true;
continue;
}else{
}


if(o=='jiuzhuzhandizhi'){
refobjempty["jiuzhuzhandizhi"]=obj[o]
ro.jiuzhuzhandizhi = true;
continue;
}else{
}


if(o=='shenqingriqi'){
refobjempty["shenqingriqi"]=obj[o]
ro.shenqingriqi = true;
continue;
}else{
}


if(o=='yonghuzhanghao'){
refobjempty["yonghuzhanghao"]=obj[o]
ro.yonghuzhanghao = true;
continue;
}else{
}


if(o=='yonghuxingming'){
refobjempty["yonghuxingming"]=obj[o]
ro.yonghuxingming = true;
continue;
}else{
}


if(o=='beizhu'){
refobjempty["beizhu"]=obj[o]
ro.beizhu = true;
continue;
}else{
}



}

    let  statusColumnName=wx.getStorageSync('statusColumnName');
statusColumnName=statusColumnName.replace('[',"").replace(']',"");
this.setData({
ro,
cross:options?.cross,
statusColumnName
})
this.setData(refobjempty)
}

if(id){
// 如果上一级页面传递了id，获取改id数据信息
const   data=getApp().globalData.detailList


const url = wx.getStorageSync("baseURL") + "/"
const detailList = data
let  objtemp= {
detailList,
'ro.jiuzhuzhanzhanghao':true,
jiuzhuzhanzhanghao: data.jiuzhuzhanzhanghao ? data.jiuzhuzhanzhanghao  : this.getUUID(),
tupian:data?.tupian?.split(',')[0],
tupianPath:baseURL+data?.tupian?.split(',')[0],
jiuzhuzhanmingcheng: data.jiuzhuzhanmingcheng,
lianxidianhua: data.lianxidianhua,
fuzeren: data.fuzeren,
jiuzhuzhandizhi: data.jiuzhuzhandizhi,
shenqingriqi:utils.getCurrentDate("yMDhms"),
yonghuzhanghao: data.yonghuzhanghao,
yonghuxingming: data.yonghuxingming,
beizhu: data.beizhu,
sfsh: '待审核',

shhf: data.shhf,
}
this.setData(objtemp);

//ss读取
let h = this.data
let c = this.data
this.setData({
});

}else {
this.setData({
jiuzhuzhanzhanghao: this.getUUID(),
})
}



// ss读取
let sessionReadArr=[]
let yonghuzhanghao= getApp().globalData.userInfo.yonghuzhanghao
ro.yonghuzhanghao=true
this.setData({
yonghuzhanghao,
})
sessionReadArr.push('yonghuzhanghao')
let yonghuxingming= getApp().globalData.userInfo.yonghuxingming
ro.yonghuxingming=true
this.setData({
yonghuxingming,
})
sessionReadArr.push('yonghuxingming')

this.setData({
cross:options?.cross,
ro,
id,
sessionReadArr

})








this.setData({
shenqingriqi:utils.getCurrentDate("yMDhms")
})






},
getUUID () {
return new Date().getTime();
},
onUnload: function () {
console.log('页面被卸载，执行销毁操作');
},
onShow() {

},





























uploadtupian() {
wx.chooseImage({
count: 1,
sizeType: ['compressed'],
sourceType: ['album', 'camera'],
success: async (res) => {
const tempFilePaths = res.tempFilePaths;
// 本地临时图片的路径
this.setData({
tupianPath: tempFilePaths[0]
})
let _this = this;
// 上传网络图片
const baseURL = wx.getStorageSync('baseURL')
wx.uploadFile({
url: `${baseURL}/file/upload`,
filePath: res.tempFilePaths[0],
name: 'file',
header: {
'Token': wx.getStorageSync('token')
},
success: (uploadFileRes) => {
let result = JSON.parse(uploadFileRes.data);
// result.file是上传成功为网络图片的名称
if (result.code == 0) {
this.setData({
tupian: 'file/' + result.file
})
} else {
wx.showToast({
title: result.msg,
icon: 'none',
duration: 2000
});
}
}
})

this.setData({
face: tempFilePaths[0]
});

}
})
},








uploadtupian() {
wx.chooseImage({
count: 1,
sizeType: ['compressed'],
sourceType: ['album', 'camera'],
success: async (res) => {
const tempFilePaths = res.tempFilePaths;
// 本地临时图片的路径
this.setData({
tupianPath: tempFilePaths[0]
})
let _this = this;
// 上传网络图片
const baseURL = wx.getStorageSync('baseURL')
wx.uploadFile({
url: `${baseURL}/file/upload`,
filePath: res.tempFilePaths[0],
name: 'file',
header: {
'Token': wx.getStorageSync('token')
},
success: (uploadFileRes) => {
let result = JSON.parse(uploadFileRes.data);
// result.file是上传成功为网络图片的名称
if (result.code == 0) {
this.setData({
tupian: 'file/' + result.file
})
} else {
wx.showToast({
title: result.msg,
icon: 'none',
duration: 2000
});
}
}
})

this.setData({
face: tempFilePaths[0]
});

}
})
},













































onshenqingriqiTap(){
this.setData({
showshenqingriqi: true,
})

},
shenqingriqiTap(e) {
this.setData({
shenqingriqi: e.detail.data
})

let c = this.data;
let h = this.data;
},




















beizhuInput(e){
this.setData({
beizhu: e.detail.value // 每次输入变化时更新文本框的值
});},







beizhuInput(e) {
this.setData({
beizhu: e.detail.value // 每次输入变化时更新文本框的值
});
},












shhfInput(e){
this.setData({
shhf: e.detail.value // 每次输入变化时更新文本框的值
});},







shhfInput(e) {
this.setData({
shhf: e.detail.value // 每次输入变化时更新文本框的值
});
},






async submit() {
let that = this
var query = wx.createSelectorQuery();
// 在 Page 中的某个方法中调用

query.select('#beizhu').boundingClientRect();
query.exec(function (res) {
//res就是 所有标签为v1的元素的信息 的数组
that.setData({
beizhu: res[0].dataset.info
})
})







if(this.data.shenqingriqi?.includes("请选择") || this.data.shenqingriqi==""){
wx.showToast({
icon: "none",
title: `申请日期不能为空`,
})
return
}












const baseURL = wx.getStorageSync('baseURL') + "/"
const regex = new RegExp(baseURL, "g");
const obj={
jiuzhuzhanzhanghao: this.data. jiuzhuzhanzhanghao,
tupian:this.data.tupian?.replace(regex, ""),
jiuzhuzhanmingcheng: this.data. jiuzhuzhanmingcheng,
lianxidianhua: this.data. lianxidianhua,
fuzeren: this.data. fuzeren,
jiuzhuzhandizhi: this.data. jiuzhuzhandizhi,
shenqingriqi: this.data. shenqingriqi,
yonghuzhanghao: this.data. yonghuzhanghao,
yonghuxingming: this.data. yonghuxingming,
sfsh:this.data.sfsh,
beizhu:this.data. beizhu,
}
const detailId= getApp().globalData.detailId
const tableName= `shenqingruzhu`

//跨表计算判断
var obj2;
var  ruleForm=obj
obj2 = ruleForm
this.data.refid==""? ruleForm['refid']= getApp().globalData.detailId:""
ruleForm['userid']=getApp().globalData.userInfo.id
var userInfo=getApp().globalData.userInfo


const sessionReadArr=this.data.sessionReadArr
const phonePattern = /^\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/;
const mobilePattern = /^(?:\+?86)?1[3-9]\d{9}$/;
const emailPattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
const idPattern = /^[1-9]\d{5}(18|19|20)\d{2}(0[1-9]|1[0-2])(0[1-9]|[1-2]\d|3[0-1])\d{3}[\dxX]$/;
const urlPattern = /^(http|https):\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/;

if(!this.data.jiuzhuzhanzhanghao ){
wx.showToast({
icon: "none",
title: `救助站账号不能为空`,
})
return
}



















if(!this.data.jiuzhuzhanmingcheng ){
wx.showToast({
icon: "none",
title: `救助站名称不能为空`,
})
return
}












const valuelianxidianhua = this.data.lianxidianhua;

if (!mobilePattern.test(valuelianxidianhua)) {
wx.showToast({
icon: "none",
title: `联系电话应输入手机格式`,
})
return
}


















































































//更新跨表属性
var crossuserid;
var crossrefid;
var crossoptnum;

if(this.data.cross) {
wx.setStorageSync('crossCleanType', true);
var statusColumnName = wx.getStorageSync('statusColumnName');
var statusColumnValue = wx.getStorageSync('statusColumnValue');
if (statusColumnName != '') {
obj2 = wx.getStorageSync('crossObj');
if (!statusColumnName.startsWith("[")) {
for (var o in obj2) {
if (statusColumnName.includes(o)){
obj2[o] = statusColumnValue;
}

}
var table = wx.getStorageSync('crossTable');
await update(table, obj2)
} else {

crossuserid =getApp().globalData.userInfo.id
crossrefid =  this.data.id
crossoptnum = wx.getStorageSync('statusColumnName');
crossoptnum = crossoptnum.replace(/\[/, "").replace(/\]/, "");
}
}
}
this.data.cross ? (crossrefid = obj2.id, crossuserid =getApp().globalData.userInfo.id) : ""
ruleForm?.crossrefid==undefined? ( ruleForm["crossrefid"] = obj2.id, ruleForm["crossuserid"] =getApp().globalData.userInfo.id ): "";
ruleForm?.shhf?ruleForm.shhf=this.data.shhf:''
if(crossrefid && crossuserid) {
ruleForm['crossuserid'] =obj2.id
ruleForm['crossrefid'] =getApp().globalData.userInfo.id

this.setData({
ruleForm
})
let params = {
page: 1,
limit: 10,
crossuserid: crossuserid,
crossrefid: crossrefid,
}
const tips = wx.getStorageSync('tips')
let corssRes = await list(`shenqingruzhu`, params)
crossoptnum = wx.getStorageSync('statusColumnName');
crossoptnum = crossoptnum.match(/\d+/g);
if (corssRes.data.total >= parseInt(crossoptnum)) {
wx.showToast({
icon: "none",
title: tips,
})
wx.removeStorageSync('crossCleanType');
return ;
}
else {


//跨表计算













if (ruleForm.id ) {
await update(`shenqingruzhu`, ruleForm)
}
else {
await add(`shenqingruzhu`, ruleForm)
}
}


}
else {


//跨表计算
if (ruleForm.id || this.data.editStatus) {
this.data.editStatus?ruleForm['id']= getApp().globalData.detailId:""
await update(`shenqingruzhu`, ruleForm)
}
else {
await add(`shenqingruzhu`, ruleForm)
}
}
getApp().globalData.editorContent=''
wx.showToast({
title: '提交成功',
icon: "none"
})
const preId = getApp().globalData.detailId

if(table){
let res = await detail(table, preId)
if(res.code==0){
getApp().globalData.detailList = res.data
}

}



wx.navigateBack({
delta: 1,
complete: () => {
// 触发事件通知，传递需要更新的数据
const pages = getCurrentPages();
if (pages.length >= 1) {
const prePage = pages[pages.length - 1];
prePage.onLoad(); //
}
}
})













},
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