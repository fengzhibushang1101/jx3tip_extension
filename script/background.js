/**
 * Created by Administrator on 2018/4/13 0013.
 */

(function () {
    console.log('begin');
    //notification_test = window.webkitNotifications.createNotification(
    //    'icon.png', 'Notification Title', 'Notification content...');
    //notification_test.ondisplay = function () {
    //
    //};
    //notification_test.onclose = function () {
    //
    //};
    //notification_test.show();
    //Notification.requestPermission(function(status){  //status值有三种：default/granted/denied
    //    if(Notification.permission !== status){
    //        Notification.permission = status;
    //    }
    //});

    //var options = {
    //    dir: "ltr",  //控制方向，据说目前浏览器还不支持
    //    lang: "utf-8",
    //    icon: "http://ihuster.com/static/avatar/m_default.png",
    //    body: "你好呀，欢迎留言交流呀"
    //};
    //if (!("Notification" in window)) {
    //    console.log("This browser does not support desktop notification");
    //}
    //
    //// 检查用户是否同意接受通知
    //else if (Notification.permission === "granted") {
    //    // If it's okay let's create a notification
    //    var notification = new Notification("Hi there!");
    //}
    //
    //// 否则我们需要向用户获取权限
    //else if (Notification.permission !== 'denied') {
    //    Notification.requestPermission(function (permission) {
    //        // 如果用户同意，就可以向他们发送通知
    //        if (permission === "granted") {
    //            var n = new Notification("hello word!", options);
    //        }
    //    });
    //}
    console.log(chrome.extension);
    console.log(chrome.storage);
    console.log(chrome);
    chrome.storage.sync.set({

    });
    console.log($());
    chrome.notifications.create(null, {
        type: 'basic',
        iconUrl: 'img/icon.png',
        title: '这是标题',
        message: '您刚才点击了自定义右键菜单！'
    });
})();