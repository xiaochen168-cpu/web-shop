"use strict";!function(o){o(".top_bar span").on("click",function(){o(this).parent().remove()});var t=o(".bl_top .bl_right li");t.on("mouseover",function(){o(this).find("span").css("background","url(../img/hy-up.png)")}),t.on("mouseout",function(){o(this).find("span").css("background","url(../img/hy-down.png)")}),o(".heade .h_nav .menu li").hover(function(){o(this).addClass("active")},function(){o(this).removeClass("active")}),localStorage.user?(o(".login").hide(),o(".user").show(),o(".u_name").html(localStorage.user),o(".goods_car a").on("click",function(){location.href="goodscar.html"})):(o(".user").hide(),o(".login").show(),o(".goods_car a").on("click",function(){alert("请先登录"),location.href="login.html"})),o(".user a").on("click",function(){confirm("你确定退出当前账号吗")&&(localStorage.removeItem("user"),o(".user").hide(),o(".login").show())}),o(".good_list").on("mouseover",function(){o(".list_text").show(),o(".list_text").on("mouseover",function(){o(".good_list").show(),o(".list_text").show()}),o(".list_text").on("mouseout",function(){o(".list_text").hide()})}),o(".good_list li").on("mouseout",function(){o(".list_text").hide()}),o(".sosuo button").on("click",function(){location.href="search data.html"})}(jQuery);