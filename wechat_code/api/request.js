const GET = 'get';
const POST = 'post';
 const baseURL = "http://localhost:8080/cl7014992"
wx.setStorageSync('baseURL', baseURL)
module.exports = function (options) {
    return new Promise(function (resolve, reject) {
        let header = {
            'content-type': 'application/json'
        };
        const token = wx.getStorageSync('token')
        token ? header['Token'] = token : ''
        wx.request({
            url: baseURL + options.url,
            method: options.method,
            data: options.method === POST ? JSON.stringify(options.data) : options.data,
            header: header,
            success(res) {
                if (res.data.code == 401) {
                    let token = wx.getStorageSync('token')
                    let msg = token ? '登录过期，请重新登录' : '请先登录'
                    if (token) {
                        wx.clearStorageSync()

                    }
                    return wx.reLaunch({
                        url: '/pages/login/login',
                        success: function (res) {
                            wx.showToast({
                                title: msg,
                                icon: 'error'
                            });
                            wx.setStorageSync('baseURL', baseURL)
                            // 跳转成功的回调函数
                        },
                        fail: function (res) {
                            // 跳转失败的回调函数
                        },
                        complete: function (res) {
                            // 无论跳转成功或失败都会执行的回调函数
                            wx.setStorageSync('baseURL', baseURL)
                        }
                    });
                }


                // 请求到接口前页面展示loading
                wx.showLoading({
                    title: '加载中...',
                    success: function () {
                        resolve(res.data)
                    }
                })
            },
            fail: function (err) {
                // 请求失败
                reject(err)
                wx.showToast({
                    title: '网络繁忙，请稍后重试~',
                    icon: 'none'
                })
            },
            complete: function () {
                // 配对使用（loading消失）
                wx.hideLoading();
            }
        })
    })
}