export function getiInfoCode(appid,_url,str) {
    let scope='snsapi_userinfo';    		//snsapi_base   //仅获取openid
    //let appid = appid;
    let url=`https://open.weixin.qq.com/connect/oauth2/authorize?appid=${appid}&redirect_uri=${_url}&response_type=code&scope=${scope}&state=${str}#wechat_redirect`;
    return window.location.href=url;
}
export function getBaseCode (_url,str) {
    let scope='snsapi_base';    		//snsapi_base   //仅获取openid
    let appid = 'wx084e74e683ea758d';
    let url=`https://open.weixin.qq.com/connect/oauth2/authorize?appid=${appid}&redirect_uri=${_url}&response_type=code&scope=${scope}&state=${str}#wechat_redirect`;
    return window.location.href=url;
}
