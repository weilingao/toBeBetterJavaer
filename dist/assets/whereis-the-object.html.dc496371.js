import{_ as o}from"./plugin-vue_export-helper.21dcd24c.js";import{r as a,o as n,c as i,a as e,b as c,e as h,d as r}from"./app.0d3123da.js";const s={},p=h('<h1 id="java-\u521B\u5EFA\u7684\u5BF9\u8C61\u5230\u5E95\u653E\u5728\u54EA" tabindex="-1"><a class="header-anchor" href="#java-\u521B\u5EFA\u7684\u5BF9\u8C61\u5230\u5E95\u653E\u5728\u54EA" aria-hidden="true">#</a> Java \u521B\u5EFA\u7684\u5BF9\u8C61\u5230\u5E95\u653E\u5728\u54EA\uFF1F</h1><p>\u5927\u5BB6\u597D\uFF0C\u6211\u662F\u4E8C\u54E5\u5440\u3002\u521B\u5EFA\u5BF9\u8C61\u7684\u65F6\u5019\uFF0C\u5BF9\u8C61\u662F\u5728\u5806\u5185\u5B58\u4E2D\u521B\u5EFA\u7684\u3002\u4F46\u5806\u5185\u5B58\u53C8\u5206\u4E3A\u65B0\u751F\u4EE3\u548C\u8001\u5E74\u4EE3\uFF0C\u65B0\u751F\u4EE3\u53C8\u7EC6\u5206\u4E3A Eden \u7A7A\u95F4\u3001From Survivor \u7A7A\u95F4\u3001To Survivor \u7A7A\u95F4\u3002<strong>\u90A3\u6211\u4EEC\u521B\u5EFA\u7684\u5BF9\u8C61\u5230\u5E95\u5728\u54EA\u91CC</strong>\uFF1F</p><h3 id="\u4E00\u3001\u5BF9\u8C61\u4F18\u5148\u5728-eden-\u5206\u914D" tabindex="-1"><a class="header-anchor" href="#\u4E00\u3001\u5BF9\u8C61\u4F18\u5148\u5728-eden-\u5206\u914D" aria-hidden="true">#</a> \u4E00\u3001\u5BF9\u8C61\u4F18\u5148\u5728 Eden \u5206\u914D</h3><p>\u5806\u5185\u5B58\u5206\u4E3A\u65B0\u751F\u4EE3\u548C\u8001\u5E74\u4EE3\uFF0C\u65B0\u751F\u4EE3\u662F\u7528\u4E8E\u5B58\u653E\u4F7F\u7528\u540E\u51C6\u5907\u88AB\u56DE\u6536\u7684\u5BF9\u8C61\uFF0C\u8001\u5E74\u4EE3\u662F\u7528\u4E8E\u5B58\u653E\u751F\u547D\u5468\u671F\u6BD4\u8F83\u957F\u7684\u5BF9\u8C61\u3002</p><p>\u5927\u90E8\u5206\u6211\u4EEC\u521B\u5EFA\u7684\u5BF9\u8C61\uFF0C\u90FD\u5C5E\u4E8E\u751F\u547D\u5468\u671F\u6BD4\u8F83\u77ED\u7684\uFF0C\u6240\u4EE5\u4F1A\u5B58\u653E\u5728\u65B0\u751F\u4EE3\u3002\u65B0\u751F\u4EE3\u53C8\u7EC6\u5206 Eden \u7A7A\u95F4\u3001From Survivor \u7A7A\u95F4\u3001To Survivor \u7A7A\u95F4\uFF0C\u6211\u4EEC\u521B\u5EFA\u7684\u5BF9\u8C61\u4F18\u5148\u5728 Eden \u5206\u914D\u3002</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/jvm/whereis-the-object-1.png" alt=""></p><p>\u968F\u7740\u5BF9\u8C61\u7684\u521B\u5EFA\uFF0CEden \u5269\u4F59\u5185\u5B58\u7A7A\u95F4\u8D8A\u6765\u8D8A\u5C11\uFF0C\u5C31\u4F1A\u89E6\u53D1 Minor GC\uFF0C\u4E8E\u662F Eden \u7684\u5B58\u6D3B\u5BF9\u8C61\u4F1A\u653E\u5165 From Survivor \u7A7A\u95F4\u3002</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/jvm/whereis-the-object-2.png" alt=""></p><p>Minor GC \u540E\uFF0C\u65B0\u5BF9\u8C61\u4F9D\u7136\u4F1A\u5F80 Eden \u5206\u914D\u3002</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/jvm/whereis-the-object-3.png" alt=""></p><p>Eden \u5269\u4F59\u5185\u5B58\u7A7A\u95F4\u8D8A\u6765\u8D8A\u5C11\uFF0C\u53C8\u4F1A\u89E6\u53D1 Minor GC\uFF0C\u4E8E\u662F Eden \u548C From Survivor \u7684\u5B58\u6D3B\u5BF9\u8C61\u4F1A\u653E\u5165 To Survivor \u7A7A\u95F4\u3002</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/jvm/whereis-the-object-4.png" alt=""></p><h3 id="\u4E8C\u3001\u5927\u5BF9\u8C61\u76F4\u63A5\u8FDB\u5165\u8001\u5E74\u4EE3" tabindex="-1"><a class="header-anchor" href="#\u4E8C\u3001\u5927\u5BF9\u8C61\u76F4\u63A5\u8FDB\u5165\u8001\u5E74\u4EE3" aria-hidden="true">#</a> \u4E8C\u3001\u5927\u5BF9\u8C61\u76F4\u63A5\u8FDB\u5165\u8001\u5E74\u4EE3</h3><p>\u5728\u4E0A\u9762\u7684\u6D41\u7A0B\u4E2D\uFF0C\u5982\u679C\u4E00\u4E2A\u5BF9\u8C61\u5F88\u5927\uFF0C\u4E00\u76F4\u5728 Survivor \u7A7A\u95F4\u590D\u5236\u6765\u590D\u5236\u53BB\uFF0C\u90A3\u5F88\u8D39\u6027\u80FD\uFF0C\u6240\u4EE5\u8FD9\u4E9B\u5927\u5BF9\u8C61\u76F4\u63A5\u8FDB\u5165\u8001\u5E74\u4EE3\u3002</p><p>\u53EF\u4EE5\u7528 <code>XX:PretenureSizeThreshold</code> \u6765\u8BBE\u7F6E\u8FD9\u4E9B\u5927\u5BF9\u8C61\u7684\u9608\u503C\u3002</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/jvm/whereis-the-object-5.png" alt=""></p><h3 id="\u4E09\u3001\u957F\u671F\u5B58\u6D3B\u7684\u5BF9\u8C61\u5C06\u8FDB\u5165\u8001\u5E74\u4EE3" tabindex="-1"><a class="header-anchor" href="#\u4E09\u3001\u957F\u671F\u5B58\u6D3B\u7684\u5BF9\u8C61\u5C06\u8FDB\u5165\u8001\u5E74\u4EE3" aria-hidden="true">#</a> \u4E09\u3001\u957F\u671F\u5B58\u6D3B\u7684\u5BF9\u8C61\u5C06\u8FDB\u5165\u8001\u5E74\u4EE3</h3><p>\u5728\u4E0A\u9762\u7684\u6D41\u7A0B\u4E2D\uFF0C\u5982\u679C\u4E00\u4E2A\u5BF9\u8C61 Hello_A\uFF0C\u5DF2\u7ECF\u7ECF\u5386\u4E86 15 \u6B21 Minor GC \u8FD8\u5B58\u6D3B\u5728 Survivor \u7A7A\u95F4\u4E2D\uFF0C\u90A3\u4ED6\u5373\u5C06\u8F6C\u79FB\u5230\u8001\u5E74\u4EE3\u3002\u8FD9\u4E2A 15 \u53EF\u4EE5\u901A\u8FC7 <code>-XX:MaxTenuringThreshold</code> \u6765\u8BBE\u7F6E\u7684\uFF0C\u9ED8\u8BA4\u662F 15\u3002</p><p>\u865A\u62DF\u673A\u4E3A\u4E86\u7ED9\u5BF9\u8C61\u8BA1\u7B97\u4ED6\u5230\u5E95\u7ECF\u5386\u4E86\u51E0\u6B21 Minor GC\uFF0C\u4F1A\u7ED9\u6BCF\u4E2A\u5BF9\u8C61\u5B9A\u4E49\u4E86\u4E00\u4E2A\u5BF9\u8C61\u5E74\u9F84\u8BA1\u6570\u5668\u3002\u5982\u679C\u5BF9\u8C61\u5728 Eden \u4E2D\u7ECF\u8FC7\u7B2C\u4E00\u6B21 Minor GC \u540E\u4ECD\u7136\u5B58\u6D3B\uFF0C\u79FB\u52A8\u5230 Survivor \u7A7A\u95F4\u5E74\u9F84\u52A0 1\uFF0C\u5728 Survivor \u533A\u4E2D\u6BCF\u7ECF\u5386\u8FC7 Minor GC \u540E\u4ECD\u7136\u5B58\u6D3B\u5E74\u9F84\u518D\u52A0 1\u3002\u5E74\u9F84\u5230\u4E86 15\uFF0C\u5C31\u5230\u4E86\u8001\u5E74\u4EE3\u3002</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/jvm/whereis-the-object-6.png" alt=""></p><h3 id="\u56DB\u3001\u52A8\u6001\u5E74\u9F84\u5224\u65AD" tabindex="-1"><a class="header-anchor" href="#\u56DB\u3001\u52A8\u6001\u5E74\u9F84\u5224\u65AD" aria-hidden="true">#</a> \u56DB\u3001\u52A8\u6001\u5E74\u9F84\u5224\u65AD</h3><p>\u9664\u4E86\u5E74\u9F84\u8FBE\u5230 MaxTenuringThreshold \u7684\u503C\uFF0C\u8FD8\u6709\u53E6\u5916\u4E00\u4E2A\u65B9\u5F0F\u8FDB\u5165\u8001\u5E74\u4EE3\uFF0C\u90A3\u5C31\u662F\u52A8\u6001\u5E74\u9F84\u5224\u65AD\uFF1A\u5728 Survivor \u7A7A\u95F4\u4E2D\u76F8\u540C\u5E74\u9F84\u6240\u6709\u5BF9\u8C61\u5927\u5C0F\u7684\u603B\u548C\u5927\u4E8E Survivor \u7A7A\u95F4\u7684\u4E00\u534A\uFF0C\u5E74\u9F84\u5927\u4E8E\u6216\u7B49\u4E8E\u8BE5\u5E74\u9F84\u7684\u5BF9\u8C61\u5C31\u53EF\u4EE5\u76F4\u63A5\u8FDB\u5165\u8001\u5E74\u4EE3\u3002</p><p>\u6BD4\u5982 Survivor \u662F 100M\uFF0CHello1 \u548C Hello2 \u90FD\u662F 3 \u5C81\uFF0C\u4E14\u603B\u548C\u8D85\u8FC7\u4E86 50M\uFF0CHello3 \u662F 4 \u5C81\uFF0C\u8FD9\u4E2A\u65F6\u5019\uFF0C\u8FD9\u4E09\u4E2A\u5BF9\u8C61\u90FD\u5C06\u5230\u8001\u5E74\u4EE3\u3002</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/jvm/whereis-the-object-7.png" alt=""></p><h3 id="\u4E94\u3001\u7A7A\u95F4\u5206\u914D\u62C5\u4FDD" tabindex="-1"><a class="header-anchor" href="#\u4E94\u3001\u7A7A\u95F4\u5206\u914D\u62C5\u4FDD" aria-hidden="true">#</a> \u4E94\u3001\u7A7A\u95F4\u5206\u914D\u62C5\u4FDD</h3><p>\u4E0A\u9762\u7684\u6D41\u7A0B\u63D0\u8FC7\uFF0C\u5B58\u6D3B\u7684\u5BF9\u8C61\u90FD\u4F1A\u653E\u5165\u53E6\u5916\u4E00\u4E2A Survivor \u7A7A\u95F4\uFF0C\u5982\u679C\u8FD9\u4E9B\u5B58\u6D3B\u7684\u5BF9\u8C61\u6BD4 Survivor \u7A7A\u95F4\u8FD8\u5927\u5462\uFF1F\u6574\u4E2A\u6D41\u7A0B\u5982\u4E0B\uFF1A</p><ul><li>Minor GC \u4E4B\u524D\uFF0C\u865A\u62DF\u673A\u4F1A\u5148\u68C0\u67E5\u8001\u5E74\u4EE3\u6700\u5927\u53EF\u7528\u7684\u8FDE\u7EED\u7A7A\u95F4\u662F\u5426\u5927\u4E8E\u65B0\u751F\u4EE3\u6240\u6709\u5BF9\u8C61\u603B\u7A7A\u95F4\uFF0C\u5982\u679C\u5927\u4E8E\uFF0C\u5219\u53D1\u8D77 Minor GC\u3002</li><li>\u5982\u679C\u5C0F\u4E8E\uFF0C\u5219\u770B HandlePromotionFailure \u6709\u6CA1\u6709\u8BBE\u7F6E\uFF0C\u5982\u679C\u6CA1\u6709\u8BBE\u7F6E\uFF0C\u5C31\u53D1\u8D77 full gc\u3002</li><li>\u5982\u679C\u8BBE\u7F6E\u4E86 HandlePromotionFailure\uFF0C\u5219\u770B\u8001\u5E74\u4EE3\u6700\u5927\u53EF\u7528\u7684\u8FDE\u7EED\u7A7A\u95F4\u662F\u5426\u5927\u4E8E\u5386\u6B21\u664B\u5347\u5230\u8001\u5E74\u4EE3\u5BF9\u8C61\u7684\u5E73\u5747\u5927\u5C0F\uFF0C\u5982\u679C\u5C0F\u4E8E\uFF0C\u5C31\u53D1\u8D77 full gc\u3002</li><li>\u5982\u679C\u5927\u4E8E\uFF0C\u53D1\u8D77 Minor GC\u3002Minor GC \u540E\uFF0C\u770B Survivor \u7A7A\u95F4\u662F\u5426\u8DB3\u591F\u5B58\u653E\u5B58\u6D3B\u5BF9\u8C61\uFF0C\u5982\u679C\u4E0D\u591F\uFF0C\u5C31\u653E\u5165\u8001\u5E74\u4EE3\uFF0C\u5982\u679C\u591F\u653E\uFF0C\u5C31\u76F4\u63A5\u5B58\u653E Survivor \u7A7A\u95F4\u3002\u5982\u679C\u8001\u5E74\u4EE3\u90FD\u4E0D\u591F\u653E\u5B58\u6D3B\u5BF9\u8C61\uFF0C\u62C5\u4FDD\u5931\u8D25\uFF08Handle Promotion Failure\uFF09\uFF0C\u53D1\u8D77 full gc\u3002</li></ul><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/jvm/whereis-the-object-8.png" alt=""></p><p>\u597D\u4E86\uFF0C\u4ECA\u5929\u5C31\u5206\u4EAB\u5230\u8FD9\u513F\u5427\uFF0C\u6211\u662F\u4E8C\u54E5\u5440\uFF0C\u6211\u4EEC\u4E0B\u671F\u89C1~~</p><hr><blockquote><p>\u539F\u6587\u94FE\u63A5\uFF1A<a href="juejin.cn/post/7052894117105238053">juejin.cn/post/7052894117105238053</a></p></blockquote><hr>',32),d=r("\u6700\u8FD1\u6574\u7406\u4E86\u4E00\u4EFD\u725B\u903C\u7684\u5B66\u4E60\u8D44\u6599\uFF0C\u5305\u62EC\u4F46\u4E0D\u9650\u4E8EJava\u57FA\u7840\u90E8\u5206\uFF08JVM\u3001Java\u96C6\u5408\u6846\u67B6\u3001\u591A\u7EBF\u7A0B\uFF09\uFF0C\u8FD8\u56CA\u62EC\u4E86 "),l=e("strong",null,"\u6570\u636E\u5E93\u3001\u8BA1\u7B97\u673A\u7F51\u7EDC\u3001\u7B97\u6CD5\u4E0E\u6570\u636E\u7ED3\u6784\u3001\u8BBE\u8BA1\u6A21\u5F0F\u3001\u6846\u67B6\u7C7BSpring\u3001Netty\u3001\u5FAE\u670D\u52A1\uFF08Dubbo\uFF0C\u6D88\u606F\u961F\u5217\uFF09 \u7F51\u5173",-1),v=r(" \u7B49\u7B49\u7B49\u7B49\u2026\u2026\u8BE6\u60C5\u6233\uFF1A"),b={href:"https://tobebetterjavaer.com/pdf/programmer-111.html",target:"_blank",rel:"noopener noreferrer"},m=r("\u53EF\u4EE5\u8BF4\u662F2022\u5E74\u5168\u7F51\u6700\u5168\u7684\u5B66\u4E60\u548C\u627E\u5DE5\u4F5C\u7684PDF\u8D44\u6E90\u4E86"),u=e("p",null,[r("\u5173\u6CE8\u4E8C\u54E5\u7684\u539F\u521B\u516C\u4F17\u53F7 "),e("strong",null,"\u6C89\u9ED8\u738B\u4E8C"),r("\uFF0C\u56DE\u590D"),e("strong",null,"111"),r(" \u5373\u53EF\u514D\u8D39\u9886\u53D6\u3002")],-1),g=e("p",null,[e("img",{src:"http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/xingbiaogongzhonghao.png",alt:""})],-1);function j(_,f){const t=a("ExternalLinkIcon");return n(),i("div",null,[p,e("p",null,[d,l,v,e("a",b,[m,c(t)])]),u,g])}var x=o(s,[["render",j],["__file","whereis-the-object.html.vue"]]);export{x as default};
