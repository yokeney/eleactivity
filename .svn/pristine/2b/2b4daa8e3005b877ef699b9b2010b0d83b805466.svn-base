const TokenKey = 'Admin-Token'

export function getToken() {
    return localStorage.getItem(TokenKey)
}

// 获取url参数
export const getUrlParam = (name) => {
    let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");　　　　　　//构造一个含有目标参数的正则表达式对象
    let r = window.location.search.substr(1).match(reg);　　　　　　　 //匹配目标参数
    if (r != null) return decodeURIComponent(r[2]); return null;　　　//返回参数值　
}

//判断是不是微信环境
export const isWechat = () => {
    let ua = window.navigator.userAgent.toLowerCase();
    return ua.match(/MicroMessenger/i) == 'micromessenger';
}

//获取url参数
export function getQueryString (name, search){
    search = search ||  window.location.search.substr(1) || window.location.hash.split("?")[1];
    let reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
    let r = search.match(reg);
    if (r != null) return  unescape(r[2]); return null;
}

//判断是安卓还是IOS
export function appSource() {
    const u = navigator.userAgent;
    const isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
    if (isiOS) {
        return "ios";
    } else {
        return "andriod";
    }
}