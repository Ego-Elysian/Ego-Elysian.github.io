var posts=["posts/4.html","posts/6.html","posts/2.html","posts/11.html","posts/12.html","posts/8.html","posts/1.html","posts/9.html","posts/10.html","posts/3.html","posts/7.html","posts/5.html"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };var friend_link_list=[{"name":"Hexo","link":"https://hexo.io/zh-tw/","avatar":"https://d33wubrfki0l68.cloudfront.net/6657ba50e702d84afb32fe846bed54fba1a77add/827ae/logo.svg","descr":"快速、简单且强大的网站框架"},{"name":"AnZhiYu主题","link":"https://blog.anheyu.com/","avatar":"https://npm.elemecdn.com/anzhiyu-blog-static@1.0.4/img/avatar.jpg","descr":"生活明朗，万物可爱","siteshot":"https://npm.elemecdn.com/anzhiyu-theme-static@1.1.6/img/blog.anheyu.com.jpg"},{"name":"Butterfly主题","link":"https://blog.anheyu.com/","avatar":"https://butterfly.js.org/img/avatar.png","descr":"今日事今日毕","siteshot":"https://image.thum.io/get/width/400/crop/800/allowJPG/wait/20/noanimate/https://butterfly.js.org/"},{"name":"安知鱼","link":"https://blog.anheyu.com/","avatar":"https://npm.elemecdn.com/anzhiyu-blog-static@1.0.4/img/avatar.jpg","descr":"生活明朗，万物可爱","siteshot":"https://npm.elemecdn.com/anzhiyu-theme-static@1.1.6/img/blog.anheyu.com.jpg","color":"vip","tag":"技术"},{"name":"Akilarの糖果屋","link":"https://akilar.top/","avatar":"https://npm.elemecdn.com/akilar-friends@latest/avatar/akilar.top.jpg","descr":"生活明朗，万物可爱","siteshot":"https://npm.elemecdn.com/akilar-friends@latest/siteshot/akilar.top.jpg","color":"vip","tag":"技术"},{"name":"张洪Heo","link":"https://blog.zhheo.com/","avatar":"https://bu.dusays.com/2022/12/28/63ac2812183aa.png","descr":"分享设计与科技生活","siteshot":"https://bu.dusays.com/2024/07/16/6695ebc5158dc.jpg","color":"vip","tag":"技术"},{"name":"Tianli","link":"https://tianli-blog.club/","avatar":"https://q2.qlogo.cn/headimg_dl?dst_uin=507249007&spec=640","descr":"自知之明是最可贵的知识！","siteshot":"https://img02.anheyu.com/adminuploads/1/2022/11/07/6368520c9e4e7.webp","color":"vip","tag":"技术"},{"name":"Fomalhaut🥝","link":"https://www.fomal.cc/","avatar":"https://www.fomal.cc/assets/avatar.webp","descr":"Future is now 🍭🍭🍭","siteshot":"https://source.fomal.cc/siteshot/www.fomal.cc.webp","color":"vip","tag":"技术"},{"name":"青桔气球","link":"https://blog.qjqq.cn/","avatar":"https://avatar.qjqq.cn/1/6503bb1b7fa1a.webp","descr":"分享网络安全与科技生活","siteshot":"https://avatar.qjqq.cn/1/647571edf20a9.webp","color":"vip","tag":"技术"},{"name":"安知鱼","link":"https://blog.anheyu.com/","avatar":"https://npm.elemecdn.com/anzhiyu-blog-static@1.0.4/img/avatar.jpg","descr":"生活明朗，万物可爱","recommend":true},{"name":"Akilar","link":"https://akilar.top/","avatar":"https://npm.elemecdn.com/akilar-friends@latest/avatar/akilar.top.jpg","descr":"欢迎光临糖果屋","recommend":true},{"name":"张洪Heo","link":"https://blog.zhheo.com/","avatar":"https://bu.dusays.com/2022/12/28/63ac2812183aa.png","descr":"分享设计与科技生活","recommend":true},{"name":"Tianli","link":"https://tianli-blog.club/","avatar":"https://q2.qlogo.cn/headimg_dl?dst_uin=507249007&spec=640","descr":"自知之明是最可贵的知识！","recommend":true},{"name":"Dejavu","link":"https://blog.dejavu.moe/","avatar":"https://blog.dejavu.moe/avatar.webp","descr":"Not for success, just for growing.","recommend":true},{"name":"Fgaoxing","link":"https://www.yt-blog.top/","avatar":"https://img.yt-blog.top/webp/logo.webp","descr":"一个少年的博客","recommend":true},{"name":"Guo Le's Blog","link":"https://blog.guole.fun/","avatar":"https://blog.guole.fun/img/gl.jpg","descr":"生命是独立是自由是爱与和平"},{"name":"Black Flies","link":"https://www.yyyzyyyz.cn/","avatar":"https://npm.elemecdn.com/imgscdn/img/202111191951780.JPG","descr":"When nothing goes right,just go left."},{"name":"Fomalhaut🥝","link":"https://www.fomal.cc/","avatar":"https://www.fomal.cc/assets/avatar.webp","descr":"Future is now 🍭🍭🍭","recommend":true},{"name":"青桔气球","link":"https://blog.qjqq.cn/","avatar":"https://avatar.qjqq.cn/1/6503bb1b7fa1a.webp!avatar","descr":"分享网络安全与科技生活","recommend":true},{"name":"iMaeGoo","link":"https://www.imaegoo.com","avatar":"https://cdn.jsdelivr.net/npm/imaegoo/avatar.jpg","descr":"虹墨空间站"},{"name":"Mr.Nyampasu","link":"https://blog.mpsxx.top/","avatar":"https://blog.mpsxx.top/img/favicon.svg","descr":"分享、学习、生活"},{"name":"EvanNotFound","link":"https://ohevan.com","avatar":"https://assets.ohevan.com/avatars/avatar-min.png","descr":"Evan的部落阁，用香港记者的速度更新文章","recommend":true},{"name":"AI悦创","link":"https://blog.bornforthis.cn","avatar":"https://bornforthis.cn/aiyc.svg","descr":"AI悦创·创造不同～"},{"name":"煮雪话河山","link":"https://blog.cent1pedee.top/","avatar":"https://img.cent1pedee.top/img/wechat.jpg","descr":"如月之恒，如日之升。"},{"name":"葱苓sama","link":"https://blog.ciraos.top","avatar":"https://cdn.jsdelivr.net/gh/ciraos/ciraos-static@main/img/avatar1.avif","descr":"Don't worry, Be happy."},{"name":"矿井小帕的茶馆","link":"https://blog.ciraos.top","avatar":"https://minecreeper.top/images/avatar.png","descr":"Don't worry, Be happy."},{"name":"atpX","link":"https://atpx.com/blog/","avatar":"https://atpx.com/favicon.ico","descr":"A nook where thoughts and ideas sometimes echo","recommend":true},{"name":"Leonus","link":"https://blog.leonus.cn/","avatar":"https://q1.qlogo.cn/g?b=qq&nk=990320751&s=5","descr":"进一寸有进一寸的欢喜。"},{"name":"Rootlex","link":"https://blog.nalex.top","avatar":"https://q2.qlogo.cn/headimg_dl?dst_uin=1736191951&spec=640","descr":"寒蝉黎明之时，便是重生之日"},{"name":"卷二兔","link":"https://blog.juanertu.com","avatar":"https://blog.juanertu.com/images/avatar.png","descr":"能与你一起成长，我荣幸之至。","recommend":true},{"name":"iMaeGoo","link":"https://www.imaegoo.com","avatar":"https://cdn.jsdelivr.net/npm/imaegoo/avatar.jpg","descr":"虹墨空间站","recommend":true},{"name":"SCOTT STUDIO","link":"https://blog.scott-studio.cn","avatar":"https://blog.scott-studio.cn/uploads/2024/08/blog-logo.webp","descr":"不知名前端攻城狮，分享编程经验和技术干货。"},{"name":"CrazyWong","link":"https://blog.crazywong.com/","avatar":"https://blog.crazywong.com/img/avatar.png","descr":"熱衷學習，熱衷生活"},{"name":"小冰博客","link":"https://zfe.one","avatar":"https://zfe.space/images/headimage.png","descr":"做个有梦想的人！"},{"name":"木木木木木","link":"https://immmmm.com/","avatar":"https://avatars.githubusercontent.com/u/1472390?v=4","descr":"Bber功能作者"},{"name":"轻笑Chuckle","link":"https://www.qcqx.cn","avatar":"https://www.qcqx.cn/head.webp","descr":"漫天倾尘,风中轻笑"},{"name":"张时贰","link":"https://zhsher.cn","avatar":"https://q1.qlogo.cn/g?b=qq&nk=1310446718&s=5","descr":"环转码，爱敲代码的小张！"},{"name":"琅環书生","link":"https://www.zlog.us.kg","avatar":"https://z1.ax1x.com/2023/10/20/piFQxN8.jpg","descr":"无远弗届，皆有可能"},{"name":"小孙同学","link":"https://blog.sunguoqi.com","avatar":"https://blog.sunguoqi.com/avatar.webp","descr":"路虽远行则将至，事虽难做则必成！"},{"name":"山岳库博","link":"https://kmar.top/","avatar":"https://npm.elemecdn.com/@kmar/fonts@1/avatar/own.png","descr":"开发学习启发性二刺螈"}];
    var refreshNum = 1;
    function friendChainRandomTransmission() {
      const randomIndex = Math.floor(Math.random() * friend_link_list.length);
      const { name, link } = friend_link_list.splice(randomIndex, 1)[0];
      Snackbar.show({
        text:
          "点击前往按钮进入随机一个友链，不保证跳转网站的安全性和可用性。本次随机到的是本站友链：「" + name + "」",
        duration: 8000,
        pos: "top-center",
        actionText: "前往",
        onActionClick: function (element) {
          element.style.opacity = 0;
          window.open(link, "_blank");
        },
      });
    }
    function addFriendLinksInFooter() {
      var footerRandomFriendsBtn = document.getElementById("footer-random-friends-btn");
      if(!footerRandomFriendsBtn) return;
      footerRandomFriendsBtn.style.opacity = "0.2";
      footerRandomFriendsBtn.style.transitionDuration = "0.3s";
      footerRandomFriendsBtn.style.transform = "rotate(" + 360 * refreshNum++ + "deg)";
      const finalLinkList = [];
  
      let count = 0;

      while (friend_link_list.length && count < 3) {
        const randomIndex = Math.floor(Math.random() * friend_link_list.length);
        const { name, link, avatar } = friend_link_list.splice(randomIndex, 1)[0];
  
        finalLinkList.push({
          name,
          link,
          avatar,
        });
        count++;
      }
  
      let html = finalLinkList
        .map(({ name, link }) => {
          const returnInfo = "<a class='footer-item' href='" + link + "' target='_blank' rel='noopener nofollow'>" + name + "</a>"
          return returnInfo;
        })
        .join("");
  
      html += "<a class='footer-item' href='/link/'>更多</a>";

      document.getElementById("friend-links-in-footer").innerHTML = html;

      setTimeout(()=>{
        footerRandomFriendsBtn.style.opacity = "1";
      }, 300)
    };