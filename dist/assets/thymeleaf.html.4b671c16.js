import{_ as l}from"./plugin-vue_export-helper.21dcd24c.js";import{r as i,o,c,a as e,b as a,e as s,d as t}from"./app.0d3123da.js";const r={},d=s('<h2 id="\u5173\u4E8E-thymeleaf" tabindex="-1"><a class="header-anchor" href="#\u5173\u4E8E-thymeleaf" aria-hidden="true">#</a> \u5173\u4E8E Thymeleaf</h2><p>Thymeleaf \u662F\u4E00\u4E2A\u4F18\u79C0\u7684\u3001\u9762\u5411 Java \u7684 HTML \u9875\u9762\u6A21\u677F\uFF0C\u5177\u6709\u4E30\u5BCC\u7684\u6807\u7B7E\u8BED\u8A00\u548C\u51FD\u6570\u3002\u5728 JSP \u88AB\u6DD8\u6C70\u4E4B\u540E\uFF0CThymeleaf \u53D6\u800C\u4EE3\u4E4B\u6210\u4E3A\u4E86 Spring Boot \u63A8\u8350\u7684\u6A21\u677F\u5F15\u64CE\u3002</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/springboot/thymeleaf-d373bf02-a577-4382-89b4-0b29a87ab922.png" alt=""></p><p>Thymeleaf \u5728\u6709\u7F51\u548C\u6CA1\u7F51\u7684\u73AF\u5883\u4E0B\u90FD\u53EF\u4EE5\u6B63\u5E38\u5DE5\u4F5C\uFF0C\u65E2\u80FD\u8BA9\u7F8E\u5DE5\u5728\u6D4F\u89C8\u5668\u4E2D\u67E5\u770B\u9875\u9762\u7684\u9759\u6001\u6548\u679C\uFF0C\u4E5F\u80FD\u8BA9\u7A0B\u5E8F\u5458\u5728\u670D\u52A1\u5668\u67E5\u770B\u5E26\u6570\u636E\u7684\u52A8\u6001\u9875\u9762\u6548\u679C\u3002</p><p>\u8FD9\u662F\u56E0\u4E3A Thymeleaf \u652F\u6301 HTML \u539F\u578B\uFF0C\u5728 HTML \u6807\u7B7E\u91CC\u589E\u52A0\u989D\u5916\u7684\u5C5E\u6027\u6765\u8FBE\u5230\u6A21\u677F+\u6570\u636E\u7684\u5C55\u793A\u65B9\u5F0F\u3002</p><p>\u6D4F\u89C8\u5668\u5728\u89E3\u91CA HTML \u7684\u65F6\u5019\u4F1A\u5FFD\u7565\u672A\u5B9A\u4E49\u7684\u6807\u7B7E\u5C5E\u6027\uFF0C\u6240\u4EE5 Thymeleaf \u53EF\u4EE5\u9759\u6001\u5730\u8FD0\u884C\uFF1B\u5F53\u6709\u6570\u636E\u8FD4\u56DE\u9875\u9762\u65F6\uFF0CThymeleaf \u6807\u7B7E\u4F1A\u52A8\u6001\u5730\u66FF\u6362\u9759\u6001\u5185\u5BB9\u3002</p><p>\u4E0B\u9762\u5217\u4E3E\u4E00\u4E9B Thymeleaf \u5E38\u7528\u7684\u8868\u8FBE\u5F0F\u3001\u6807\u7B7E\u548C\u51FD\u6570\u3002</p><p>1\uFF09\u5E38\u7528\u8868\u8FBE\u5F0F</p><ul><li><code>${...}</code>\u53D8\u91CF\u8868\u8FBE\u5F0F</li><li><code>*{...}</code>\u9009\u62E9\u8868\u8FBE\u5F0F</li><li><code>#{...}</code>\u6587\u5B57\u8868\u8FBE\u5F0F</li><li><code>@{...}</code>URL \u8868\u8FBE\u5F0F</li><li><code>#maps</code> \u5BF9\u8C61\u8868\u8FBE\u5F0F</li></ul><p>2\uFF09\u5E38\u7528\u6807\u7B7E</p><ul><li>th:action \u5B9A\u4E49\u670D\u52A1\u5668\u7AEF\u63A7\u5236\u5668\u8DEF\u5F84\u3002</li><li>th:each \u5FAA\u73AF\u8BED\u53E5</li><li>th:field \u8868\u5355\u5B57\u6BB5</li><li>th:href URL \u94FE\u63A5</li><li>th:id div \u6807\u7B7E\u4E2D\u7684 ID</li><li>th:if \u6761\u4EF6\u5224\u65AD</li><li>th:include \u5F15\u5165\u6587\u4EF6</li><li>th:fragment \u5B9A\u4E49\u4EE3\u7801\u7247\u6BB5</li><li>th:object \u66FF\u6362\u5BF9\u8C61</li><li>th:src \u56FE\u7247\u5730\u5740</li><li>th:text \u6587\u672C</li><li>th:value \u5C5E\u6027\u503C</li></ul><p>3\uFF09\u5E38\u7528\u51FD\u6570</p><ul><li><code>#dates</code> \u65E5\u671F\u51FD\u6570</li><li><code>#lists</code> \u5217\u8868\u51FD\u6570</li><li><code>#arrays</code> \u6570\u7EC4\u51FD\u6570</li><li><code>#strings</code> \u5B57\u7B26\u4E32\u51FD\u6570</li><li><code>#numbers</code> \u6570\u5B57\u51FD\u6570</li><li><code>#calendars</code> \u65E5\u5386\u51FD\u6570</li><li><code>#objects</code> \u5BF9\u8C61\u51FD\u6570</li><li><code>#bools</code> \u5E03\u5C14\u51FD\u6570</li></ul><p>\u60F3\u8981\u67E5\u770B\u66F4\u591A Thymeleaf \u8868\u8FBE\u5F0F\u3001\u6807\u7B7E\u3001\u51FD\u6570\u7B49\u5185\u5BB9\uFF0C\u53EF\u4EE5\u5230 Thymeleaf \u5B98\u7F51\uFF1A</p>',14),p={href:"https://www.thymeleaf.org/",target:"_blank",rel:"noopener noreferrer"},u=t("https://www.thymeleaf.org/"),h=s(`<h2 id="\u6574\u5408-thymeleaf" tabindex="-1"><a class="header-anchor" href="#\u6574\u5408-thymeleaf" aria-hidden="true">#</a> \u6574\u5408 Thymeleaf</h2><p>\u7B2C\u4E00\u6B65\uFF0C\u5728 pom.xml \u6587\u4EF6\u4E2D\u6DFB\u52A0 Thymeleaf \u7684 stater</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;dependency&gt;
    &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;
    &lt;artifactId&gt;spring-boot-starter-thymeleaf&lt;/artifactId&gt;
&lt;/dependency&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7B2C\u4E8C\u6B65\uFF0C\u5728 application.yml \u6587\u4EF6\u4E2D\u6DFB\u52A0 Thymeleaf \u7684\u914D\u7F6E</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>spring:
  thymeleaf:
    cache: false # \u5F00\u53D1\u65F6\u5173\u95ED\u7F13\u5B58\uFF0C\u4E0D\u7136\u770B\u4E0D\u5230\u5B9E\u65F6\u9875\u9762
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5176\u4ED6\u914D\u7F6E\u9879\u91C7\u7528\u9ED8\u8BA4\u5C31\u53EF\u4EE5\u4E86\uFF0C\u60F3\u8981\u770B\u6709\u54EA\u4E9B\u9ED8\u8BA4\u9879\u7684\u8BDD\uFF0C\u53EF\u4EE5\u5168\u5C40\u6253\u5F00 ThymeleafProperties.java \u7C7B\u3002</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/springboot/thymeleaf-2e0cba5c-89ae-4f1b-8cc8-0c8f86d5f520.png" alt=""></p><p>Thymeleaf \u6A21\u677F\u5F15\u64CE\u9ED8\u8BA4\u4F1A\u8BFB\u53D6 resources \u76EE\u5F55\u4E0B\u7684 templates \u76EE\u5F55\uFF0C\u8FD9\u4E2A\u76EE\u5F55\u662F\u7528\u6765\u5B58\u653E HTML \u9875\u9762\u7684\u3002</p><p>\u7B2C\u4E09\u6B65\uFF0C\u65B0\u5EFA UserController.java \u63A7\u5236\u5668\u3002</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token annotation punctuation">@Controller</span>
<span class="token annotation punctuation">@RequestMapping</span><span class="token punctuation">(</span><span class="token string">&quot;/user&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">UserController</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Resource</span>
    <span class="token keyword">private</span> <span class="token class-name">UserService</span> userService<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@RequestMapping</span><span class="token punctuation">(</span><span class="token string">&quot;/all&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">all</span><span class="token punctuation">(</span><span class="token class-name">Model</span> model<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        model<span class="token punctuation">.</span><span class="token function">addAttribute</span><span class="token punctuation">(</span><span class="token string">&quot;users&quot;</span><span class="token punctuation">,</span> userService<span class="token punctuation">.</span><span class="token function">findAll</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token string">&quot;all&quot;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>@Controller \u6CE8\u89E3\u8868\u793A\u8BE5\u7C7B\u4E3A\u4E00\u4E2A\u63A7\u5236\u5668\u7C7B\u3002</li><li>@RequestMapping \u6CE8\u89E3\u7528\u6765\u5904\u7406\u8BF7\u6C42\u5730\u5740\u6620\u5C04\uFF0C\u53EF\u7528\u4E8E\u7C7B\u6216\u8005\u65B9\u6CD5\u3002</li><li>Model \u63A5\u53E3\u53EF\u4EE5\u627F\u8F7D\u6570\u636E\u5E93\u91CC\u67E5\u5230\u7684\u6570\u636E\uFF0C\u524D\u7AEF\u53EF\u4EE5\u4ECE model \u4E2D\u53D6\u51FA\u6765\u3002</li></ul><p>\u7B2C\u56DB\u6B65\uFF0C\u5728 resources/templates \u76EE\u5F55\u4E0B\u65B0\u5EFA all.html \u6587\u4EF6\uFF08\u6587\u4EF6\u540D\u5BF9\u5E94\u63A7\u5236\u5668\u4E2D all \u65B9\u6CD5\u8FD4\u56DE\u7684\u5B57\u7B26\u4E32\uFF09.</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;!DOCTYPE html&gt;
&lt;html lang=&quot;zh&quot; xmlns:th=&quot;http://www.thymeleaf.org&quot;&gt;
&lt;head&gt;
    &lt;meta http-equiv=&quot;content-type&quot; content=&quot;text/html;charset=utf-8&quot;&gt;
    &lt;title&gt;Thymeleaf&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;table&gt;
        &lt;tr&gt;
            &lt;td&gt;\u7528\u6237\u540D&lt;/td&gt;
            &lt;td&gt;\u5BC6\u7801&lt;/td&gt;
        &lt;/tr&gt;
        &lt;tr th:each=&quot;user:\${users}&quot;&gt;
            &lt;td th:text=&quot;\${user.name}&quot;&gt;&lt;/td&gt;
            &lt;td th:text=&quot;\${user.password}&quot;&gt;&lt;/td&gt;
        &lt;/tr&gt;
    &lt;/table&gt;
&lt;/body&gt;
&lt;/html&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>&lt;html lang=&quot;zh&quot; xmlns:th=&quot;http://www.thymeleaf.org&quot;&gt;</code> \u4E3A Thymeleaf \u7684\u547D\u540D\u7A7A\u95F4\uFF0C\u901A\u8FC7\u5F15\u5165\u547D\u540D\u7A7A\u95F4\u5C31\u53EF\u4EE5\u5728 HTML \u6587\u4EF6\u4E2D\u4F7F\u7528 Thymeleaf \u6807\u7B7E\u8BED\u8A00\uFF0C\u7528\u5173\u952E\u5B57 \u201Cth\u201D\u6765\u6807\u6CE8\u3002</p><p>\u7B2C\u4E94\u6B65\uFF0C\u542F\u52A8\u4E3B\u7C7B\uFF0C\u5982\u679C\u770B\u5230\u4EE5\u4E0B\u4FE1\u606F\u8868\u793A\u542F\u52A8\u6210\u529F\u3002</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/springboot/thymeleaf-3e636801-32df-4591-9159-fe83f771f68d.png" alt=""></p><p>\u7B2C\u516D\u6B65\uFF0C\u5728\u6D4F\u89C8\u5668\u5730\u5740\u680F\u91CC\u8F93\u5165 <code>http://localhost:8080/user/all</code> \u8BBF\u95EE\u63A5\u53E3\u3002</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/springboot/thymeleaf-e4b658fd-e30a-4b00-8818-ab00f8a28620.png" alt=""></p><h2 id="http-client" tabindex="-1"><a class="header-anchor" href="#http-client" aria-hidden="true">#</a> HTTP Client</h2><hr>`,20),m=t("\u66F4\u591A\u5185\u5BB9\uFF0C\u53EA\u9488\u5BF9\u300AJava \u7A0B\u5E8F\u5458\u8FDB\u9636\u4E4B\u8DEF\u300B\u661F\u7403\u7528\u6237\u5F00\u653E\uFF0C\u9700\u8981\u7684\u5C0F\u4F19\u4F34\u53EF\u4EE5"),v={href:"https://tobebetterjavaer.com/zhishixingqiu/",target:"_blank",rel:"noopener noreferrer"},g=t("\u6233\u94FE\u63A5\u{1F517}"),b=t("\u52A0\u5165\u6211\u4EEC\u7684\u661F\u7403\uFF0C\u4E00\u8D77\u5B66\u4E60\uFF0C\u4E00\u8D77\u5377\u3002\u3002"),f=e("strong",null,"\u7F16\u7A0B\u55B5",-1),k=t("\u{1F431}\u662F\u4E00\u4E2A Spring Boot+Vue \u7684\u524D\u540E\u7AEF\u5206\u79BB\u9879\u76EE\uFF0C\u878D\u5408\u4E86\u5E02\u9762\u4E0A\u7EDD\u5927\u591A\u6570\u6D41\u884C\u7684\u6280\u672F\u8981\u70B9\u3002\u901A\u8FC7\u5B66\u4E60\u5B9E\u6218\u9879\u76EE\uFF0C\u4F60\u53EF\u4EE5\u5C06\u6240\u5B66\u7684\u77E5\u8BC6\u901A\u8FC7\u5B9E\u8DF5\u8FDB\u884C\u68C0\u9A8C\u3001\u4F60\u53EF\u4EE5\u62D3\u5BBD\u81EA\u5DF1\u7684\u6280\u672F\u8FB9\u754C\uFF0C\u4F60\u53EF\u4EE5\u638C\u63E1\u4E00\u4E2A\u771F\u6B63\u7684\u5B9E\u6218\u9879\u76EE\u662F\u5982\u4F55\u4ECE 0 \u5230 1 \u7684\u3002"),_=e("hr",null,null,-1),y=e("h2",{id:"\u6E90\u7801\u5730\u5740",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u6E90\u7801\u5730\u5740","aria-hidden":"true"},"#"),t(" \u6E90\u7801\u5730\u5740")],-1),q=t("\u7F16\u7A0B\u55B5\uFF1A"),x={href:"https://github.com/itwanger/coding-more",target:"_blank",rel:"noopener noreferrer"},T=t("https://github.com/itwanger/coding-more"),w=t("codingmore-thymeleaf: "),j={href:"https://github.com/itwanger/codingmore-learning/tree/main/codingmore-thymeleaf",target:"_blank",rel:"noopener noreferrer"},M=t("https://github.com/itwanger/codingmore-learning"),L=e("p",null,[e("img",{src:"http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/xingbiaogongzhonghao.png",alt:""})],-1);function S(C,H){const n=i("ExternalLinkIcon");return o(),c("div",null,[d,e("blockquote",null,[e("p",null,[e("a",p,[u,a(n)])])]),h,e("p",null,[m,e("a",v,[g,a(n)]),b,f,k]),_,y,e("blockquote",null,[e("ul",null,[e("li",null,[q,e("a",x,[T,a(n)])]),e("li",null,[w,e("a",j,[M,a(n)])])])]),L])}var B=l(r,[["render",S],["__file","thymeleaf.html.vue"]]);export{B as default};
