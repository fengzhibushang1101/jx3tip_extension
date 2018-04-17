/**
 * Created by Administrator on 2018/4/13 0013.
 */

(function () {

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

    function has_tiped() {
        var config = localStorage.get("jx3_config");
        if (!config) return false;
        var lastTime = config["last_time"];
    }
    function is_today(time) {

    }

    function show(title, body) {
        var time = /(..)(:..)/.exec(new Date());     // The prettyprinted time.
        var hour = time[1] % 12 || 12;               // The prettyprinted hour.
        var period = time[1] < 12 ? 'a.m.' : 'p.m.'; // The period of the day.
        new Notification(title + hour + time[2] + ' ' + period, {
            //icon: '48.png',
            body: body
        });
    }
    $.get('http://180.76.98.136/api/jx3/info', function (data) {
        if (data.status) {
            var info = data.info;
            var title = "剑网三每日提醒";
            var body = '战场:' + info[1] + "人战场" + info[0];
            show(title, body);
        }
    });
})();