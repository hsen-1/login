function loGin() {
    console.log(username.value);
    console.log(pwd.value);
    $.ajax({
        url: 'http://123.60.44.50:3000/users',
        type: 'GET',
        success: function (data) {
            console.log(data[0].password);
            for (let i = 0; i < data.length; i++) {
                console.log(0);
                if (username.value == data[i].id && pwd.value == data[i].password) {
                    alert("登录成功！");
                    let url = "./home.html?username=" + username.value + "&pwd=" + pwd.value;
                    url = encodeURI(url);
                    window.location.href =url;
                    // setTimeout(function () {

                    // })
                    break;
                }
                if(i==data.length-1) {
                    alert("用户名或密码错误");
                    break;
                }
            }
        }
    })
}

function putData(username, name_, pwd) {
    $.ajax({
        url: 'http://123.60.44.50:3000/users',
        type: 'POST',
        data: {
            id: username,
            name: name_,
            password: pwd
        },
        success: function () {
            alert("注册成功！");
            window.location.href = "./index.html";
        }
    })
}

function reGister() {

    if (username.value == "" || name_.value == "" || pwd.value == "")
        alert("信息不能为空值！");
    else {
        let m = 1;
        $.ajax({
            url: 'http://123.60.44.50:3000/users',
            type: 'GET',
            success: function (data) {
                console.log(username.value);
                for (let i = 0; i < data.length; i++) {
                    if (username.value == data[i].id) {
                        m = 0;
                        alert("用户名已存在，请重新输入！");
                    }
                    if (name_.value == data[i].name) {
                        m = 0;
                        alert("用户昵称已存在，请重新输入！");
                    }
                }
            }
        })
        if (m == 1) {
            putData(username.value, name_.value, pwd.value);
            return;
        }
    }
}
