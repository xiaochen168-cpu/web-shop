"use strict";!function(n){function l(){n(".sort a").eq(0).on("click",function(){console.log(array_default),n.each(array_default,function(t,a){n(".e_list ul").append(a)})}),n(".sort a").eq(1).on("click",function(){for(var t=0;t<array.length;t++)for(var a=0;a<array.length-t-1;a++)if(prev=parseFloat(array[a].find(".price").html().substring(1)),next=parseFloat(array[a+1].find(".price").html().substring(1)),prev>next){var r=array[a];array[a]=array[a+1],array[a+1]=r}n(".list ul").empty(),n.each(array,function(t,a){n(".e_list ul").append(a)})}),n(".sort a").eq(2).on("click",function(){for(var t=0;t<array.length;t++)for(var a=0;a<array.length-t-1;a++)if(prev=parseFloat(array[a].find(".price").html().substring(1)),next=parseFloat(array[a+1].find(".price").html().substring(1)),prev<next){var r=array[a];array[a]=array[a+1],array[a+1]=r}n(".list ul").empty(),n.each(array,function(t,a){n(".e_list ul").append(a)})})}n.ajax({url:"http://localhost/web-shop/php/listpage.php",dataType:"json"}).done(function(t){var a,r="<ul>";n.each(t.data,function(t,a){r+='\n\t\t\t<li>\n\t\t\t    <a href="Detail Pages.html?sid='+a.sid+'">\n\t\t\t        <img class="lazy" data-original="'+a.url+'" sid='+a.sid+"/>\n\t\t\t        <p>"+a.title+'</p>\n\t\t\t        <span class="price">￥'+a.price+'</span>\n\t\t\t        <span class="sail">销量：'+a.sailnumber+"</span>\n\t\t\t    </a>\n\t\t\t</li>\n\t\t\t"}),r+="</ul>",n(".e_list").html(r),n("img.lazy").lazyload(),a=t.pageall,n(".page").pagination({pageCount:a,jump:!0,coping:!0,prevContent:"上一页",nextContent:"下一页",homePage:"首页",endPage:"尾页",callback:function(t){n.ajax({url:"http://localhost/web-shop/php/listpage.php",dataType:"json",data:{page:t.getCurrent()}}).done(function(t){var r="<ul>";n.each(t.data,function(t,a){r+='\n\t\t\t\t\t\t<li>\n\t\t\t\t\t\t    <a href="Detail Pages.html?sid='+a.sid+'">\n\t\t\t\t\t\t        <img class="lazy" data-original="'+a.url+'" sid='+a.sid+"/>\n\t\t\t\t\t\t        <p>"+a.title+'</p>\n\t\t\t\t\t\t        <span class="price">￥'+a.price+'</span>\n\t\t\t\t\t\t        <span class="sail">销量：'+a.sailnumber+"</span>\n\t\t\t\t\t\t    </a>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t"}),r+="</ul>",n(".e_list").html(r),n("img.lazy").lazyload(),array_default=[],array=[],prev=null,next=null,n(".e_list ul li").each(function(t,a){array[t]=n(this),array_default[t]=n(this)}),l()})}}),array_default=[],array=[],prev=null,next=null,n(".e_list ul li").each(function(t,a){array[t]=n(this),array_default[t]=n(this)}),l()}),n(".e_list").on("mouseover","li",function(){n(this).css("border","1px solid red")}),n(".e_list").on("mouseout","li",function(){n(this).css("border","1px solid #CCCCCC")})}(jQuery);