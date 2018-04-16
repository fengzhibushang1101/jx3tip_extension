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

    Notifi = {
        set: function (k , v, fn) {
            if ('localStorage' in window) {
                window.localStorage[k] = v;
                if(typeof fn === 'function') {
                    fn(v);
                }
            } else  {
                var options = {};
                options[k] = v;
                if(typeof fn === 'function') {
                    chrome.storage.local.set(options, fn);
                } else {
                    chrome.storage.local.set(options);
                }
            }
        },
        get: function (k, fn) {
            if ('localStorage' in window) {
                v = window.localStorage[k];
                if(typeof fn === 'function') {
                    fn(v);
                }
            } else  {
                if(typeof fn === 'function') {
                    chrome.storage.local.get(k, function (data) {
                        fn.call(data[k]);
                    });
                }
            }
        }
    };


    function has_tiped() {
        chrome.storage.local.set({
            config: {last: 123}
        });
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
    c = fetch("http://www.baidu.com");
    console.log(c);
    $.get('http://180.76.98.136/api/jx3/info', function (data) {
        if (data.status) {
            var info = data.info;
            show('剑三提醒', '战场:' + info[1] + "人战场" + info[0]);
        }
    });
})();