const menu = require('./menu.js')

function getCurrentDate(name) {
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth() + 1; // 月份从0开始，所以要加1
    const day = now.getDate();
    // 时间戳

    // 获取小时
    const hours = now.getHours();

    // 获取分钟
    const minutes = now.getMinutes();

    // 获取秒钟
    const seconds = now.getSeconds();

    if (name == "yMDhms") {
        return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`
    } else {
        return `${year}-${month}-${day} `

    }

}
// num 获取上一级页2 当前页面1
function getCurrentPageUrl(num) {
    const pages = getCurrentPages();
    const currentPage = pages[pages.length - num];
    const currentPageUrl = `/${currentPage?.route}`;
    return currentPageUrl;
}

function menuTap(tableName, userid) {
    wx.setStorageSync('isAuth', true)
    const tabar = getApp().globalData.tabarList;
    const fixPages = ["news", "forum", "messages", "chat", "exampaper", "orders"]
    let path = userid ? `/pages/${tableName}/list?userid=${userid}` : `/pages/${tableName}/list`;
    if (tabar.includes(tableName)) {
        wx.switchTab({
            url: path
        })
    } else {
        if(tableName){
            wx.navigateTo({
                url: path
            })
        }
    }


}
var countdownTimer; // 定义定时器变量

// 公共方法：倒计时年月日
function countdown(endTime, callback, clearCountdownTimer, timeType) {
    var countDownDate = new Date(endTime).getTime();
    var future = new Date();
    future.setTime(future.getTime() + 2 * 60 * 60 * 1000); // 添加两小时
    if (clearCountdownTimer) {
        // 清楚定时器 
        clearInterval(countdownTimer);
    } else {
        if (timeType == "hms") {
            // 小时分钟秒倒计时
            countdownTimer = setInterval(function () {
                var currentTime = new Date().getTime(); // 获取当前时间
                var distance = future.getTime() - currentTime; // 计算时间差

                // 倒计时结束
                if (distance <= 0) {
                    clearInterval(countdownTimer); // 清除定时器
                    callback("活动已结束");
                    return;
                }

                // 计算剩余的小时、分钟和秒
                var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                var seconds = Math.floor((distance % (1000 * 60)) / 1000);

                // 构造倒计时文本
                var countdownText = hours + "小时 " + minutes + "分钟 " + seconds + "秒";

                callback(countdownText); // 更新文本
            }, 1000);
        } else {
            // 年月日小时分钟秒倒计时
            countdownTimer = setInterval(function () {
                var now = new Date().getTime();
                var distance = countDownDate - now;

                // 倒计时结束
                if (distance <= 0) {
                    clearInterval(countdownTimer); // 清除定时器
                    callback("倒计时结束");
                    return;
                }

                // 计算剩余的天、小时、分钟和秒
                var days = Math.floor(distance / (1000 * 60 * 60 * 24));
                var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                var seconds = Math.floor((distance % (1000 * 60)) / 1000);

                // 构造倒计时文本
                var countdownText = days == 0 ? hours + "小时 " + minutes + "分钟 " + seconds + "秒" : days + "天" + hours + "小时 " + minutes + "分钟 " + seconds + "秒";

                callback(countdownText); // 更新文本
            }, 1000);
        }


    }
}
// 是否有权限(前台权限)
export function isAuthFront(tableName, key) {
    const role = wx.getStorageSync("role");
    const menus = menu.default.list();
    for(let i=0;i<menus.length;i++){
        if(menus[i].roleName==role){
            for(let j=0;j<menus[i].frontMenu.length;j++){
                for(let k=0;k<menus[i].frontMenu[j].child.length;k++){
                    if(tableName==menus[i].frontMenu[j].child[k].tableName){
                        let buttons = menus[i].frontMenu[j].child[k].buttons.join(',');
                        return buttons.indexOf(key) !== -1 || false
                    }
                }
            }
        }
    }
    return false;
}

// 是否有权限(后台权限)
export function isAuth(tableName, key) {
    const role = wx.getStorageSync("role");
    const menus = menu.default.list();
    for(let i=0;i<menus.length;i++){
        if(menus[i].roleName==role){
            for(let j=0;j<menus[i].backMenu.length;j++){
                for(let k=0;k<menus[i].backMenu[j].child.length;k++){
                    if(tableName==menus[i].backMenu[j].child[k].tableName){
                        let buttons = menus[i].backMenu[j].child[k].buttons.join(',');
                        return buttons.indexOf(key) !== -1 || false
                    }
                }
            }
        }
    }
    return false;
}

// 指定的页面跳转并且重新加载
export function pageJump(path) {
    wx.navigateTo({
        url: `${path}`,
        complete: () => {
            // 触发事件通知，传递需要更新的数据
            const pages = getCurrentPages();
            if (pages.length >= 1) {
                const prePage = pages[pages.length - 1];
                prePage.onLoad(); //
            }
        }
    })
}

// 手机号码或邮箱校验
export function validata(name, str) {
    name.replace(/\s/g, '');
    if (name=='email') {
          // 邮箱校验
          const regex = /^[a-zA-Z0-9_\-]+@[a-zA-Z0-9]+\.(com|cn|net|org)$/;
          return regex.test(str);
    } else {
         // 使用正则表达式匹配手机号码格式
        //  湖南那些电话号码为false 如16680451907匹配不了
        // 全中国的11位号码匹配
        const regex = /^1\d{10}$/;
         return regex.test(str);
     

    }

}
// 身份证校验
export function validateIDCard(id) {
    // 正则表达式匹配身份证号码
    // 格式：6位地区码 + 8位生日 + 3位顺序码 + 1位校验码
    var pattern = /^[1-9]\d{5}(19|20)\d{2}(0\d|1[012])(0\d|1\d|2\d|3[01])\d{3}[\dXx]$/;
    // 如果身份证号码不符合格式要求，返回错误
    if (!pattern.test(id)) {
        return false;
    }

    // 加权因子
    var weightedFactors = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2];
    // 校验码对应关系
    var checkCodes = [1, 0, 'X', 9, 8, 7, 6, 5, 4, 3, 2];

    // 计算校验码
    var sum = 0;
    for (var i = 0; i < 17; i++) {
        sum += parseInt(id.charAt(i)) * weightedFactors[i];
    }
    var checkCodeIndex = sum % 11;

    // 检查校验码是否正确
    if (id.charAt(17).toUpperCase() !== checkCodes[checkCodeIndex].toString()) {
        return false;
    }

    return true;
}





export function genTradeNo() {
    var date = new Date();
    var tradeNo = date.getFullYear().toString() + (date.getMonth() + 1).toString() +
        date.getDate().toString() + date.getHours().toString() + date.getMinutes().toString() +
        date.getSeconds().toString() + date.getMilliseconds().toString();
    for (var i = 0; i < 5; i++) //5位随机数，用以加在时间戳后面。
    {
        tradeNo += Math.floor(Math.random() * 10);
    }
    return tradeNo;
}

module.exports = {
    getCurrentDate: getCurrentDate,
    getCurrentPageUrl: getCurrentPageUrl,
    menuTap: menuTap,
    countdown: countdown,
    isAuth: isAuth,
    isAuthFront: isAuthFront,
    pageJump: pageJump,
    validata: validata,
    validateIDCard: validateIDCard,
    genTradeNo: genTradeNo
}