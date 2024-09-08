
const dateUtils = require('../../utils/defautils')
const utils = require("../../utils/index.js")
const {
SendverificationCode,
register,
option,
    smscode,
follow
} = require('../../api/login.js')
const {
    levelOption,
    sheng,
} = require('../../api/index.js')
Page({
data: {
     yonghuzhanghao:'',
     yonghumima:'',
     yonghuxingming:'',
    touxiang:'',
    tempPathtouxiang:'../../static/upload.png',
xingbieList:"男,女".split(','),
xingbieIndex:0,
     shoujihaoma:'',

    registerContainerClass: "",

},

async onLoad() {









},
onUnload() {
},
async onShow() {





    this.setData({
            xingbieList:  "男,女".split(',')
    })




},







yonghuzhanghaoInput(e) {
this.setData({
    yonghuzhanghao: e.detail.value
})
},

yonghumimaInput(e) {
this.setData({
    yonghumima: e.detail.value
})
},

yonghuxingmingInput(e) {
this.setData({
    yonghuxingming: e.detail.value
})
},


touxiangTap() {
wx.chooseImage({
count: 1,
sizeType: ['compressed'],
sourceType: ['album', 'camera'],
success: async (res) => {
const tempFilePaths = res.tempFilePaths;
let tempPathtouxiang= tempFilePaths[0]
// 本地临时图片的路径
this.setData({
    tempPathtouxiang,
})
// 上传网络图片
const  baseURL= wx.getStorageSync('baseURL')
    if(baseURL){
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
                            touxiang: 'file/' + result.file
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
    }



}
})
},

xingbieChange(e) {
const selectedIndex = e.detail.value;
    this.setData({
            xingbieIndex: selectedIndex,
    });
},

async sendCodeHandler() {
if (!this.data.canSendCode) {
return;
}
if (this.data.shoujihaoma == "") {
wx.showToast({
    title: '请输入手机号码',
    icon: 'none'
})
return;
} else {
if (!utils.validata("shoujihaoma",this.data.shoujihaoma)) {
    wx.showToast({
        title: '请输入有效手机号码',
        icon: 'none'
    })
    return;
} else {
    const res = await SendverificationCode("yonghu", 'sendsms','shoujihaoma',  this.data.shoujihaoma)
    this.setData({
        smscode: res.data
    })
}
}
this.setData({
canSendCode: false,
});
let time = this.data.countdown;
let timer = setInterval(() => {
time--;
this.setData({
    countdown: time, // 更新倒计时的时间
});
if (time <= 0) {
    clearInterval(timer); // 倒计时结束，清除定时器
    this.setData({
        buttonText: '发送验证码',
        canSendCode: true,
        countdown: 60
    });
}
}, 1000);

},

async  register(){
if (this.data.yonghuzhanghao == "") {
wx.showToast({
title: '请输入用户账号',
icon: "none"
})
return;
}
if (this.data.yonghumima == "") {
wx.showToast({
title: '请输入用户密码',
icon: "none"
})
return;
}
if (this.data.yonghumima2=="") {
wx.showToast({
title: '请输入确认用户密码',
icon: "none"
})
return;
}
if (this.data.yonghumima !== this.data.yonghumima2) {
wx.showToast({
title: '用户密码与确认用户密码不一致!!',
icon: "none"
})
return;
}
if (this.data.shoujihaoma == "") {
wx.showToast({
title: '请输入手机号码',
icon: "none"
})
return;
}
        if (!utils.validata("shoujihaoma",this.data.shoujihaoma)) {
        wx.showToast({
            title: '请输入有效手机号码',
            icon: 'none'
        })
        return;
    }










    const regex = new RegExp(wx.getStorageSync("baseURL"), "g");
  const resultObj={
        yonghuzhanghao:this.data.yonghuzhanghao,
        yonghumima:this.data.yonghumima,
        yonghuxingming:this.data.yonghuxingming,
        touxiang:this.data.touxiang.replace(regex, ""),
        xingbie: this.data.xingbieList?.length ? this.data.xingbieList[this.data.xingbieIndex] : "",
        shoujihaoma:this.data.shoujihaoma,
  }
    const name="yonghuzhanghao"
    const password="yonghumima"
    const res = await register("yonghu", name, this.data[name],password , this.data[password], resultObj)
if (res.code == 0) {
wx.navigateTo({
url: '../login/login',
})
} else {
wx.showToast({
title: res.msg,
icon: "none"
})
}

}



});