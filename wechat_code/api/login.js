const request = require('./request.js')

export function userLogin(roleName, username, password) {
    return request({
        url: `/${roleName}/login?username=${username}&password=${password}`,
        method: 'get',
    })
}
export function wxlogin(roleName, data) {
    return request({
        url: `/${roleName}/wx/login`,
        method: 'post',
        data: data
    })
}
// 绑定微信
export function wxbind(roleName, data) {
    return request({
        url: `/${roleName}/wx/bind`,
        method: 'post',
        data: data
    })
}

// 解绑微信
export function wxunbind(roleName, data) {
    return request({
        url: `/${roleName}/wx/unbind`,
        method: 'post',
        data: data
    })
}
export function security(loginType, username) {
    return request({
        url: `/${loginType}/security?username=${username}`,
        method: 'get',
    })
}
// http://localhost:8080/ssm88ifk5/yonghu/update
export function update(tableName, data) {
    return request({
        url: `/${tableName}/update`,
        method: 'post',
        data
    })
}

// /option/xiasuibiao/woshixiala
// /option/xialabiao/leixing
export function option(path) {
    return request({
        url: `/option/${path}`,
        method: 'get',
    })
}
// /follow/xiasuibiao/woshixiala
export function follow(path, columnValue) {
    return request({
        url: `/follow/${path}?columnValue=${columnValue}`,
        method: 'get',
    })
}
export function SendverificationCode(roleName, sendtype, typeName, mobile, ) {
    return request({
        url: `/${roleName}/${sendtype}?${typeName}=${mobile}`,
        method: 'get',
    })
}
export function smscode(roleName, sendtype, smscode, data) {
    return request({
        url: `/${roleName}/register?${sendtype}=${smscode}`,
        method: 'post',
        data
    })
}
export function register(roleName, columnName1, columnValue1, columnName2, columnValue2, data) {
    return request({
        url: `/${roleName}/register?${columnName1}=${columnValue1}&${columnName2}=${columnValue2}`,
        method: 'post',
        data
    })
}

// /matchFace?face1=yonghu_touxiang1.jpg&face2=1690857705275.jpg
export function faceMatch(data) {
    return request({
        url: '/matchFace',
        method: 'GET',
        data
    });
}
export function faceLogin(role, data) {
    return request({
        url: `/${role}/faceLogin`,
        method: 'GET',
        data
    });
}