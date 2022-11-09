import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{r as p,o,c,a as n,b as t,e as l,d as s}from"./app.0d3123da.js";const i={},u=l(`<p>\u4F55\u8C13\u8F6C\u6362\u6D41\uFF1F\u4E3A\u4F55\u7531\u6765\uFF1F\u8BA9\u6211\u4EEC\u6682\u65F6\u5E26\u7740\u8FD9\u4E24\u4E2A\u95EE\u9898\u6765\u4E86\u89E3\u4E86\u89E3\u5B57\u7B26\u7F16\u7801\u548C\u5B57\u7B26\u96C6\uFF01</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/io/char-byte-86699b2c-4f24-492a-ba68-62c3be0f86bc.png" alt=""></p><h2 id="\u5B57\u7B26\u7F16\u7801\u4E0E\u89E3\u7801" tabindex="-1"><a class="header-anchor" href="#\u5B57\u7B26\u7F16\u7801\u4E0E\u89E3\u7801" aria-hidden="true">#</a> \u5B57\u7B26\u7F16\u7801\u4E0E\u89E3\u7801</h2><p>\u4F17\u6240\u5468\u77E5\uFF0C\u8BA1\u7B97\u673A\u4E2D\u50A8\u5B58\u7684\u4FE1\u606F\u90FD\u662F\u7528\u4E8C\u8FDB\u5236\u6570\u8868\u793A\u7684\uFF0C\u800C\u6211\u4EEC\u5728\u5C4F\u5E55\u4E0A\u770B\u5230\u7684\u6570\u5B57\u3001\u82F1\u6587\u3001\u6807\u70B9\u7B26\u53F7\u3001\u6C49\u5B57\u7B49\u5B57\u7B26\u662F\u4E8C\u8FDB\u5236\u6570\u8F6C\u6362\u4E4B\u540E\u7684\u7ED3\u679C\u3002</p><p>\u6309\u7167\u67D0\u79CD\u89C4\u5219\uFF0C\u5C06\u5B57\u7B26\u5B58\u50A8\u5230\u8BA1\u7B97\u673A\u4E2D\uFF0C\u79F0\u4E3A<strong>\u7F16\u7801</strong> \u3002\u53CD\u4E4B\uFF0C\u5C06\u5B58\u50A8\u5728\u8BA1\u7B97\u673A\u4E2D\u7684\u4E8C\u8FDB\u5236\u6570\u6309\u7167\u67D0\u79CD\u89C4\u5219\u89E3\u6790\u663E\u793A\u51FA\u6765\uFF0C\u79F0\u4E3A<strong>\u89E3\u7801</strong> \u3002\u6BD4\u5982\u8BF4\uFF0C\u6309\u7167<code>A</code>\u89C4\u5219\u5B58\u50A8\uFF0C\u540C\u6837\u6309\u7167<code>A</code>\u89C4\u5219\u89E3\u6790\uFF0C\u90A3\u4E48\u5C31\u80FD\u663E\u793A\u6B63\u786E\u7684\u6587\u672C\u7B26\u53F7\u3002\u53CD\u4E4B\uFF0C\u6309\u7167<code>A</code>\u89C4\u5219\u5B58\u50A8\uFF0C\u518D\u6309\u7167<code>B</code>\u89C4\u5219\u89E3\u6790\uFF0C\u5C31\u4F1A\u5BFC\u81F4\u4E71\u7801\u73B0\u8C61\u3002</p><p>\u7B80\u5355\u4E00\u70B9\u7684\u8BF4\u5C31\u662F\uFF1A</p><blockquote><p>\u7F16\u7801:\u5B57\u7B26(\u80FD\u770B\u61C2\u7684)--\u5B57\u8282(\u770B\u4E0D\u61C2\u7684)</p><p>\u89E3\u7801:\u5B57\u8282(\u770B\u4E0D\u61C2\u7684)--&gt;\u5B57\u7B26(\u80FD\u770B\u61C2\u7684)</p></blockquote><p>\u4EE3\u7801\u89E3\u91CA\u5219\u662F</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token class-name">String</span><span class="token punctuation">(</span><span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token punctuation">]</span> bytes<span class="token punctuation">,</span> <span class="token class-name">String</span> charsetName<span class="token punctuation">)</span><span class="token operator">:</span>\u901A\u8FC7\u6307\u5B9A\u7684\u5B57\u7B26\u96C6\u89E3\u7801\u5B57\u8282\u6570\u7EC4
<span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token function">getBytes</span><span class="token punctuation">(</span><span class="token class-name">String</span> charsetName<span class="token punctuation">)</span><span class="token operator">:</span>\u4F7F\u7528\u6307\u5B9A\u7684\u5B57\u7B26\u96C6\u5408\u628A\u5B57\u7B26\u4E32\u7F16\u7801\u4E3A\u5B57\u8282\u6570\u7EC4

\u7F16\u7801<span class="token operator">:</span>\u628A\u770B\u5F97\u61C2\u7684\u53D8\u6210\u770B\u4E0D\u61C2\u7684
<span class="token class-name">String</span> <span class="token operator">--</span> <span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token punctuation">]</span>

\u89E3\u7801<span class="token operator">:</span>\u628A\u770B\u4E0D\u61C2\u7684\u53D8\u6210\u770B\u5F97\u61C2\u7684
<span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">--</span> <span class="token class-name">String</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><strong>\u5B57\u7B26\u7F16\u7801</strong> <code>Character Encoding</code>: \u5C31\u662F\u4E00\u5957\u81EA\u7136\u8BED\u8A00\u7684\u5B57\u7B26\u4E0E\u4E8C\u8FDB\u5236\u6570\u4E4B\u95F4\u7684\u5BF9\u5E94\u89C4\u5219\u3002</li></ul><p>\u800C<strong>\u7F16\u7801\u8868</strong>\u5219\u662F\u751F\u6D3B\u4E2D\u6587\u5B57\u548C\u8BA1\u7B97\u673A\u4E2D\u4E8C\u8FDB\u5236\u7684\u5BF9\u5E94\u89C4\u5219</p><h2 id="\u5B57\u7B26\u96C6" tabindex="-1"><a class="header-anchor" href="#\u5B57\u7B26\u96C6" aria-hidden="true">#</a> \u5B57\u7B26\u96C6</h2><ul><li><strong>\u5B57\u7B26\u96C6</strong> <code>Charset</code>\uFF1A\u4E5F\u53EB<strong>\u7F16\u7801\u8868</strong>\u3002\u662F\u4E00\u4E2A\u7CFB\u7EDF\u652F\u6301\u7684\u6240\u6709\u5B57\u7B26\u7684\u96C6\u5408\uFF0C\u5305\u62EC\u5404\u56FD\u5BB6\u6587\u5B57\u3001\u6807\u70B9\u7B26\u53F7\u3001\u56FE\u5F62\u7B26\u53F7\u3001\u6570\u5B57\u7B49\u3002</li></ul><p>\u8BA1\u7B97\u673A\u8981\u51C6\u786E\u7684\u5B58\u50A8\u548C\u8BC6\u522B\u5404\u79CD\u5B57\u7B26\u96C6\u7B26\u53F7\uFF0C\u9700\u8981\u8FDB\u884C\u5B57\u7B26\u7F16\u7801\uFF0C\u4E00\u5957\u5B57\u7B26\u96C6\u5FC5\u7136\u81F3\u5C11\u6709\u4E00\u5957\u5B57\u7B26\u7F16\u7801\u3002\u5E38\u89C1\u7684\u5B57\u7B26\u96C6\u6709<code>ASCII</code>\u5B57\u7B26\u96C6\u3001<code>GBK</code>\u5B57\u7B26\u96C6\u3001<code>Unicode</code>\u5B57\u7B26\u96C6\u7B49\u3002</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/io/char-byte-eafc0ac8-ce5b-4183-9a7e-9498e23b2d4e.png" alt=""></p><p>\u53EF\u89C1\uFF0C\u5F53\u6307\u5B9A\u4E86<strong>\u7F16\u7801</strong>\uFF0C\u5B83\u6240\u5BF9\u5E94\u7684<strong>\u5B57\u7B26\u96C6</strong>\u81EA\u7136\u5C31\u6307\u5B9A\u4E86\uFF0C\u6240\u4EE5<strong>\u7F16\u7801</strong>\u624D\u662F\u6211\u4EEC\u6700\u7EC8\u8981\u5173\u5FC3\u7684\u3002</p><ul><li><strong>ASCII\u5B57\u7B26\u96C6</strong> \uFF1A</li><li>ASCII\uFF08American Standard Code for Information Interchange\uFF0C\u7F8E\u56FD\u4FE1\u606F\u4EA4\u6362\u6807\u51C6\u4EE3\u7801\uFF09\u662F\u57FA\u4E8E\u62C9\u4E01\u5B57\u6BCD\u7684\u4E00\u5957\u7535\u8111\u7F16\u7801\u7CFB\u7EDF\uFF0C\u7528\u4E8E\u663E\u793A\u73B0\u4EE3\u82F1\u8BED\uFF0C\u4E3B\u8981\u5305\u62EC\u63A7\u5236\u5B57\u7B26\uFF08\u56DE\u8F66\u952E\u3001\u9000\u683C\u3001\u6362\u884C\u952E\u7B49\uFF09\u548C\u53EF\u663E\u793A\u5B57\u7B26\uFF08\u82F1\u6587\u5927\u5C0F\u5199\u5B57\u7B26\u3001\u963F\u62C9\u4F2F\u6570\u5B57\u548C\u897F\u6587\u7B26\u53F7\uFF09\u3002</li><li>\u57FA\u672C\u7684ASCII\u5B57\u7B26\u96C6\uFF0C\u4F7F\u75287\u4F4D\uFF08bits\uFF09\u8868\u793A\u4E00\u4E2A\u5B57\u7B26\uFF0C\u5171128\u5B57\u7B26\u3002ASCII\u7684\u6269\u5C55\u5B57\u7B26\u96C6\u4F7F\u75288\u4F4D\uFF08bits\uFF09\u8868\u793A\u4E00\u4E2A\u5B57\u7B26\uFF0C\u5171256\u5B57\u7B26\uFF0C\u65B9\u4FBF\u652F\u6301\u6B27\u6D32\u5E38\u7528\u5B57\u7B26\u3002</li><li><strong>ISO-8859-1\u5B57\u7B26\u96C6</strong>\uFF1A</li><li>\u62C9\u4E01\u7801\u8868\uFF0C\u522B\u540DLatin-1\uFF0C\u7528\u4E8E\u663E\u793A\u6B27\u6D32\u4F7F\u7528\u7684\u8BED\u8A00\uFF0C\u5305\u62EC\u8377\u5170\u3001\u4E39\u9EA6\u3001\u5FB7\u8BED\u3001\u610F\u5927\u5229\u8BED\u3001\u897F\u73ED\u7259\u8BED\u7B49\u3002</li><li>ISO-8859-1\u4F7F\u7528\u5355\u5B57\u8282\u7F16\u7801\uFF0C\u517C\u5BB9ASCII\u7F16\u7801\u3002</li><li><strong>GBxxx\u5B57\u7B26\u96C6</strong>\uFF1A</li><li>GB\u5C31\u662F\u56FD\u6807\u7684\u610F\u601D\uFF0C\u662F\u4E3A\u4E86\u663E\u793A\u4E2D\u6587\u800C\u8BBE\u8BA1\u7684\u4E00\u5957\u5B57\u7B26\u96C6\u3002</li><li><strong>GB2312</strong>\uFF1A\u7B80\u4F53\u4E2D\u6587\u7801\u8868\u3002\u4E00\u4E2A\u5C0F\u4E8E127\u7684\u5B57\u7B26\u7684\u610F\u4E49\u4E0E\u539F\u6765\u76F8\u540C\u3002\u4F46\u4E24\u4E2A\u5927\u4E8E127\u7684\u5B57\u7B26\u8FDE\u5728\u4E00\u8D77\u65F6\uFF0C\u5C31\u8868\u793A\u4E00\u4E2A\u6C49\u5B57\uFF0C\u8FD9\u6837\u5927\u7EA6\u53EF\u4EE5\u7EC4\u5408\u4E86\u5305\u542B7000\u591A\u4E2A\u7B80\u4F53\u6C49\u5B57\uFF0C\u6B64\u5916\u6570\u5B66\u7B26\u53F7\u3001\u7F57\u9A6C\u5E0C\u814A\u7684\u5B57\u6BCD\u3001\u65E5\u6587\u7684\u5047\u540D\u4EEC\u90FD\u7F16\u8FDB\u53BB\u4E86\uFF0C\u8FDE\u5728ASCII\u91CC\u672C\u6765\u5C31\u6709\u7684\u6570\u5B57\u3001\u6807\u70B9\u3001\u5B57\u6BCD\u90FD\u7EDF\u7EDF\u91CD\u65B0\u7F16\u4E86\u4E24\u4E2A\u5B57\u8282\u957F\u7684\u7F16\u7801\uFF0C\u8FD9\u5C31\u662F\u5E38\u8BF4\u7684&quot;\u5168\u89D2&quot;\u5B57\u7B26\uFF0C\u800C\u539F\u6765\u5728127\u53F7\u4EE5\u4E0B\u7684\u90A3\u4E9B\u5C31\u53EB&quot;\u534A\u89D2&quot;\u5B57\u7B26\u3002</li><li><strong>GBK</strong>\uFF1A\u6700\u5E38\u7528\u7684\u4E2D\u6587\u7801\u8868\u3002\u662F\u5728GB2312\u6807\u51C6\u57FA\u7840\u4E0A\u7684\u6269\u5C55\u89C4\u8303\uFF0C\u4F7F\u7528\u4E86\u53CC\u5B57\u8282\u7F16\u7801\u65B9\u6848\uFF0C\u5171\u6536\u5F55\u4E8621003\u4E2A\u6C49\u5B57\uFF0C\u5B8C\u5168\u517C\u5BB9GB2312\u6807\u51C6\uFF0C\u540C\u65F6\u652F\u6301\u7E41\u4F53\u6C49\u5B57\u4EE5\u53CA\u65E5\u97E9\u6C49\u5B57\u7B49\u3002</li><li><strong>GB18030</strong>\uFF1A\u6700\u65B0\u7684\u4E2D\u6587\u7801\u8868\u3002\u6536\u5F55\u6C49\u5B5770244\u4E2A\uFF0C\u91C7\u7528\u591A\u5B57\u8282\u7F16\u7801\uFF0C\u6BCF\u4E2A\u5B57\u53EF\u4EE5\u75311\u4E2A\u30012\u4E2A\u62164\u4E2A\u5B57\u8282\u7EC4\u6210\u3002\u652F\u6301\u4E2D\u56FD\u56FD\u5185\u5C11\u6570\u6C11\u65CF\u7684\u6587\u5B57\uFF0C\u540C\u65F6\u652F\u6301\u7E41\u4F53\u6C49\u5B57\u4EE5\u53CA\u65E5\u97E9\u6C49\u5B57\u7B49\u3002</li><li><strong>Unicode\u5B57\u7B26\u96C6</strong> \uFF1A</li><li>Unicode\u7F16\u7801\u7CFB\u7EDF\u4E3A\u8868\u8FBE\u4EFB\u610F\u8BED\u8A00\u7684\u4EFB\u610F\u5B57\u7B26\u800C\u8BBE\u8BA1\uFF0C\u662F\u4E1A\u754C\u7684\u4E00\u79CD\u6807\u51C6\uFF0C\u4E5F\u79F0\u4E3A\u7EDF\u4E00\u7801\u3001\u6807\u51C6\u4E07\u56FD\u7801\u3002</li><li>\u5B83\u6700\u591A\u4F7F\u75284\u4E2A\u5B57\u8282\u7684\u6570\u5B57\u6765\u8868\u8FBE\u6BCF\u4E2A\u5B57\u6BCD\u3001\u7B26\u53F7\uFF0C\u6216\u8005\u6587\u5B57\u3002\u6709\u4E09\u79CD\u7F16\u7801\u65B9\u6848\uFF0CUTF-8\u3001UTF-16\u548CUTF-32\u3002\u6700\u4E3A\u5E38\u7528\u7684UTF-8\u7F16\u7801\u3002</li><li>UTF-8\u7F16\u7801\uFF0C\u53EF\u4EE5\u7528\u6765\u8868\u793AUnicode\u6807\u51C6\u4E2D\u4EFB\u4F55\u5B57\u7B26\uFF0C\u5B83\u662F\u7535\u5B50\u90AE\u4EF6\u3001\u7F51\u9875\u53CA\u5176\u4ED6\u5B58\u50A8\u6216\u4F20\u9001\u6587\u5B57\u7684\u5E94\u7528\u4E2D\uFF0C\u4F18\u5148\u91C7\u7528\u7684\u7F16\u7801\u3002\u4E92\u8054\u7F51\u5DE5\u7A0B\u5DE5\u4F5C\u5C0F\u7EC4\uFF08IETF\uFF09\u8981\u6C42\u6240\u6709\u4E92\u8054\u7F51\u534F\u8BAE\u90FD\u5FC5\u987B\u652F\u6301UTF-8\u7F16\u7801\u3002\u6240\u4EE5\uFF0C\u6211\u4EEC\u5F00\u53D1Web\u5E94\u7528\uFF0C\u4E5F\u8981\u4F7F\u7528UTF-8\u7F16\u7801\u3002\u5B83\u4F7F\u7528\u4E00\u81F3\u56DB\u4E2A\u5B57\u8282\u4E3A\u6BCF\u4E2A\u5B57\u7B26\u7F16\u7801\uFF0C\u7F16\u7801\u89C4\u5219\uFF1A</li></ul><ol><li>128\u4E2AUS-ASCII\u5B57\u7B26\uFF0C\u53EA\u9700\u4E00\u4E2A\u5B57\u8282\u7F16\u7801\u3002</li><li>\u62C9\u4E01\u6587\u7B49\u5B57\u7B26\uFF0C\u9700\u8981\u4E8C\u4E2A\u5B57\u8282\u7F16\u7801\u3002</li><li>\u5927\u90E8\u5206\u5E38\u7528\u5B57\uFF08\u542B\u4E2D\u6587\uFF09\uFF0C\u4F7F\u7528\u4E09\u4E2A\u5B57\u8282\u7F16\u7801\u3002</li><li>\u5176\u4ED6\u6781\u5C11\u4F7F\u7528\u7684Unicode\u8F85\u52A9\u5B57\u7B26\uFF0C\u4F7F\u7528\u56DB\u5B57\u8282\u7F16\u7801\u3002</li></ol><h2 id="\u7F16\u7801\u95EE\u9898\u5BFC\u81F4\u4E71\u7801" tabindex="-1"><a class="header-anchor" href="#\u7F16\u7801\u95EE\u9898\u5BFC\u81F4\u4E71\u7801" aria-hidden="true">#</a> \u7F16\u7801\u95EE\u9898\u5BFC\u81F4\u4E71\u7801</h2><p>\u5728java\u5F00\u53D1\u5DE5\u5177IDEA\u4E2D\uFF0C\u4F7F\u7528<code>FileReader</code> \u8BFB\u53D6\u9879\u76EE\u4E2D\u7684\u6587\u672C\u6587\u4EF6\u3002\u7531\u4E8EIDEA\u7684\u8BBE\u7F6E\uFF0C\u90FD\u662F\u9ED8\u8BA4\u7684<code>UTF-8</code>\u7F16\u7801\uFF0C\u6240\u4EE5\u6CA1\u6709\u4EFB\u4F55\u95EE\u9898\u3002\u4F46\u662F\uFF0C\u5F53\u8BFB\u53D6Windows\u7CFB\u7EDF\u4E2D\u521B\u5EFA\u7684\u6587\u672C\u6587\u4EF6\u65F6\uFF0C\u7531\u4E8EWindows\u7CFB\u7EDF\u9ED8\u8BA4\u7684\u662FGBK\u7F16\u7801\uFF0C\u5C31\u4F1A\u51FA\u73B0\u4E71\u7801\u3002</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ReaderDemo</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span>
        <span class="token class-name">FileReader</span> fileReader <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FileReader</span><span class="token punctuation">(</span><span class="token string">&quot;C:\\\\a.txt&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> read<span class="token punctuation">;</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>read <span class="token operator">=</span> fileReader<span class="token punctuation">.</span><span class="token function">read</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">!=</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token keyword">char</span><span class="token punctuation">)</span>read<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        fileReader<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
\u8F93\u51FA\u7ED3\u679C\uFF1A\uFFFD\uFFFD\uFFFD
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u90A3\u4E48\u5982\u4F55\u8BFB\u53D6GBK\u7F16\u7801\u7684\u6587\u4EF6\u5462\uFF1F \u8FD9\u4E2A\u65F6\u5019\u5C31\u5F97\u8BB2\u8BB2\u8F6C\u6362\u6D41\u4E86\uFF01</p><blockquote><p>\u4ECE\u53E6\u4E00\u89D2\u5EA6\u6765\u8BB2\uFF1A<strong>\u5B57\u7B26\u6D41=\u5B57\u8282\u6D41+\u7F16\u7801\u8868</strong></p></blockquote><h2 id="inputstreamreader\u7C7B-\u5B57\u8282\u6D41\u5230\u5B57\u7B26\u6D41\u7684\u6865\u6881" tabindex="-1"><a class="header-anchor" href="#inputstreamreader\u7C7B-\u5B57\u8282\u6D41\u5230\u5B57\u7B26\u6D41\u7684\u6865\u6881" aria-hidden="true">#</a> InputStreamReader\u7C7B--(\u5B57\u8282\u6D41\u5230\u5B57\u7B26\u6D41\u7684\u6865\u6881)</h2><p>\u8F6C\u6362\u6D41<code>java.io.InputStreamReader</code>\uFF0C\u662F<code>Reader</code>\u7684\u5B50\u7C7B\uFF0C\u4ECE\u5B57\u9762\u610F\u601D\u53EF\u4EE5\u770B\u51FA\u5B83\u662F\u4ECE\u5B57\u8282\u6D41\u5230\u5B57\u7B26\u6D41\u7684\u6865\u6881\u3002\u5B83\u8BFB\u53D6\u5B57\u8282\uFF0C\u5E76\u4F7F\u7528\u6307\u5B9A\u7684\u5B57\u7B26\u96C6\u5C06\u5176\u89E3\u7801\u4E3A\u5B57\u7B26\u3002\u5B83\u7684\u5B57\u7B26\u96C6\u53EF\u4EE5\u7531\u540D\u79F0\u6307\u5B9A\uFF0C\u4E5F\u53EF\u4EE5\u63A5\u53D7\u5E73\u53F0\u7684\u9ED8\u8BA4\u5B57\u7B26\u96C6\u3002</p><h3 id="\u6784\u9020\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u6784\u9020\u65B9\u6CD5" aria-hidden="true">#</a> \u6784\u9020\u65B9\u6CD5</h3><blockquote><p><code>InputStreamReader(InputStream in)</code>: \u521B\u5EFA\u4E00\u4E2A\u4F7F\u7528\u9ED8\u8BA4\u5B57\u7B26\u96C6\u7684\u5B57\u7B26\u6D41\u3002</p><p><code>InputStreamReader(InputStream in, String charsetName)</code>: \u521B\u5EFA\u4E00\u4E2A\u6307\u5B9A\u5B57\u7B26\u96C6\u7684\u5B57\u7B26\u6D41\u3002</p></blockquote><p>\u6784\u9020\u4EE3\u7801\u5982\u4E0B\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token class-name">InputStreamReader</span> isr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">InputStreamReader</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">FileInputStream</span><span class="token punctuation">(</span><span class="token string">&quot;in.txt&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">InputStreamReader</span> isr2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">InputStreamReader</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">FileInputStream</span><span class="token punctuation">(</span><span class="token string">&quot;in.txt&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">,</span> <span class="token string">&quot;GBK&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u4F7F\u7528\u8F6C\u6362\u6D41\u89E3\u51B3\u7F16\u7801\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528\u8F6C\u6362\u6D41\u89E3\u51B3\u7F16\u7801\u95EE\u9898" aria-hidden="true">#</a> \u4F7F\u7528\u8F6C\u6362\u6D41\u89E3\u51B3\u7F16\u7801\u95EE\u9898</h3><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ReaderDemo2</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span>
      	<span class="token comment">// \u5B9A\u4E49\u6587\u4EF6\u8DEF\u5F84,\u6587\u4EF6\u4E3Agbk\u7F16\u7801</span>
        <span class="token class-name">String</span> <span class="token class-name">FileName</span> <span class="token operator">=</span> <span class="token string">&quot;C:\\\\A.txt&quot;</span><span class="token punctuation">;</span>
      	<span class="token comment">// \u521B\u5EFA\u6D41\u5BF9\u8C61,\u9ED8\u8BA4UTF8\u7F16\u7801</span>
        <span class="token class-name">InputStreamReader</span> isr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">InputStreamReader</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">FileInputStream</span><span class="token punctuation">(</span><span class="token class-name">FileName</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      	<span class="token comment">// \u521B\u5EFA\u6D41\u5BF9\u8C61,\u6307\u5B9AGBK\u7F16\u7801</span>
        <span class="token class-name">InputStreamReader</span> isr2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">InputStreamReader</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">FileInputStream</span><span class="token punctuation">(</span><span class="token class-name">FileName</span><span class="token punctuation">)</span> <span class="token punctuation">,</span> <span class="token string">&quot;GBK&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token comment">// \u5B9A\u4E49\u53D8\u91CF,\u4FDD\u5B58\u5B57\u7B26</span>
        <span class="token keyword">int</span> read<span class="token punctuation">;</span>
      	<span class="token comment">// \u4F7F\u7528\u9ED8\u8BA4\u7F16\u7801\u5B57\u7B26\u6D41\u8BFB\u53D6,\u4E71\u7801</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>read <span class="token operator">=</span> isr<span class="token punctuation">.</span><span class="token function">read</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">!=</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token keyword">char</span><span class="token punctuation">)</span>read<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\u02BA      </span>
        <span class="token punctuation">}</span>
        isr<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      
      	<span class="token comment">// \u4F7F\u7528\u6307\u5B9A\u7F16\u7801\u5B57\u7B26\u6D41\u8BFB\u53D6,\u6B63\u5E38\u89E3\u6790</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>read <span class="token operator">=</span> isr2<span class="token punctuation">.</span><span class="token function">read</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">!=</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token keyword">char</span><span class="token punctuation">)</span>read<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u6C89\u9ED8\u738B\u4E8C</span>
        <span class="token punctuation">}</span>
        isr2<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-4-outputstreamwriter\u7C7B-\u5B57\u7B26\u6D41\u5230\u5B57\u8282\u6D41\u7684\u6865\u6881" tabindex="-1"><a class="header-anchor" href="#_2-4-outputstreamwriter\u7C7B-\u5B57\u7B26\u6D41\u5230\u5B57\u8282\u6D41\u7684\u6865\u6881" aria-hidden="true">#</a> 2.4 OutputStreamWriter\u7C7B--(\u5B57\u7B26\u6D41\u5230\u5B57\u8282\u6D41\u7684\u6865\u6881)</h2><p>\u8F6C\u6362\u6D41<code>java.io.OutputStreamWriter</code> \uFF0C\u662FWriter\u7684\u5B50\u7C7B\uFF0C\u5B57\u9762\u770B\u5BB9\u6613\u6DF7\u6DC6\u4F1A\u8BEF\u4EE5\u4E3A\u662F\u8F6C\u4E3A\u5B57\u7B26\u6D41\uFF0C\u5176\u5B9E\u4E0D\u7136\uFF0COutputStreamWriter\u4E3A\u4ECE\u5B57\u7B26\u6D41\u5230\u5B57\u8282\u6D41\u7684\u6865\u6881\u3002\u4F7F\u7528\u6307\u5B9A\u7684\u5B57\u7B26\u96C6\u5C06\u5B57\u7B26\u7F16\u7801\u4E3A\u5B57\u8282\u3002\u5B83\u7684\u5B57\u7B26\u96C6\u53EF\u4EE5\u7531\u540D\u79F0\u6307\u5B9A\uFF0C\u4E5F\u53EF\u4EE5\u63A5\u53D7\u5E73\u53F0\u7684\u9ED8\u8BA4\u5B57\u7B26\u96C6\u3002</p><h3 id="\u6784\u9020\u65B9\u6CD5-1" tabindex="-1"><a class="header-anchor" href="#\u6784\u9020\u65B9\u6CD5-1" aria-hidden="true">#</a> \u6784\u9020\u65B9\u6CD5</h3><blockquote><p><code>OutputStreamWriter(OutputStream in)</code>: \u521B\u5EFA\u4E00\u4E2A\u4F7F\u7528\u9ED8\u8BA4\u5B57\u7B26\u96C6\u7684\u5B57\u7B26\u6D41\u3002</p><p><code>OutputStreamWriter(OutputStream in, String charsetName)</code>: \u521B\u5EFA\u4E00\u4E2A\u6307\u5B9A\u5B57\u7B26\u96C6\u7684\u5B57\u7B26\u6D41\u3002</p></blockquote><p>\u6784\u9020\u4E3E\u4F8B\uFF0C\u4EE3\u7801\u5982\u4E0B\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token class-name">OutputStreamWriter</span> isr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">OutputStreamWriter</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">FileOutputStream</span><span class="token punctuation">(</span><span class="token string">&quot;a.txt&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">OutputStreamWriter</span> isr2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">OutputStreamWriter</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">FileOutputStream</span><span class="token punctuation">(</span><span class="token string">&quot;b.txt&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">,</span> <span class="token string">&quot;GBK&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u6307\u5B9A\u7F16\u7801\u6784\u9020\u4EE3\u7801" tabindex="-1"><a class="header-anchor" href="#\u6307\u5B9A\u7F16\u7801\u6784\u9020\u4EE3\u7801" aria-hidden="true">#</a> \u6307\u5B9A\u7F16\u7801\u6784\u9020\u4EE3\u7801</h3><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">OutputDemo</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span>
      	<span class="token comment">// \u5B9A\u4E49\u6587\u4EF6\u8DEF\u5F84</span>
        <span class="token class-name">String</span> <span class="token class-name">FileName</span> <span class="token operator">=</span> <span class="token string">&quot;C:\\\\s.txt&quot;</span><span class="token punctuation">;</span>
      	<span class="token comment">// \u521B\u5EFA\u6D41\u5BF9\u8C61,\u9ED8\u8BA4UTF8\u7F16\u7801</span>
        <span class="token class-name">OutputStreamWriter</span> osw <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">OutputStreamWriter</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">FileOutputStream</span><span class="token punctuation">(</span><span class="token class-name">FileName</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// \u5199\u51FA\u6570\u636E</span>
      	osw<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token string">&quot;\u6C89\u9ED8&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u4FDD\u5B58\u4E3A6\u4E2A\u5B57\u8282</span>
        osw<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      	
		<span class="token comment">// \u5B9A\u4E49\u6587\u4EF6\u8DEF\u5F84</span>
		<span class="token class-name">String</span> <span class="token class-name">FileName2</span> <span class="token operator">=</span> <span class="token string">&quot;D:\\\\A.txt&quot;</span><span class="token punctuation">;</span>
     	<span class="token comment">// \u521B\u5EFA\u6D41\u5BF9\u8C61,\u6307\u5B9AGBK\u7F16\u7801</span>
        <span class="token class-name">OutputStreamWriter</span> osw2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">OutputStreamWriter</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">FileOutputStream</span><span class="token punctuation">(</span><span class="token class-name">FileName2</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token string">&quot;GBK&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// \u5199\u51FA\u6570\u636E</span>
      	osw2<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token string">&quot;\u738B\u4E8C&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// \u4FDD\u5B58\u4E3A4\u4E2A\u5B57\u8282</span>
        osw2<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/io/char-byte-61d3a7e6-365e-41d3-8c4a-bc9e680c70a6.png" alt=""></p><p>\u4E3A\u4E86\u8FBE\u5230<strong>\u6700\u9AD8\u6548\u7387</strong>\uFF0C\u53EF\u4EE5\u8003\u8651\u5728 <code>BufferedReader</code> \u5185\u5305\u88C5 <code>InputStreamReader</code></p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token class-name">BufferedReader</span> in <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BufferedReader</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">InputStreamReader</span><span class="token punctuation">(</span><span class="token class-name">System</span><span class="token punctuation">.</span>in<span class="token punctuation">)</span><span class="token punctuation">)</span>\uFF1B
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,42),r=s("\u53C2\u8003\u94FE\u63A5\uFF1A"),k={href:"https://www.cnblogs.com/yichunguo/p/11775270.html",target:"_blank",rel:"noopener noreferrer"},d=s("https://www.cnblogs.com/yichunguo/p/11775270.html"),m=s("\uFF0C\u6574\u7406\uFF1A\u6C89\u9ED8\u738B\u4E8C"),v=n("hr",null,null,-1),b=s("\u6700\u8FD1\u6574\u7406\u4E86\u4E00\u4EFD\u725B\u903C\u7684\u5B66\u4E60\u8D44\u6599\uFF0C\u5305\u62EC\u4F46\u4E0D\u9650\u4E8EJava\u57FA\u7840\u90E8\u5206\uFF08JVM\u3001Java\u96C6\u5408\u6846\u67B6\u3001\u591A\u7EBF\u7A0B\uFF09\uFF0C\u8FD8\u56CA\u62EC\u4E86 "),g=n("strong",null,"\u6570\u636E\u5E93\u3001\u8BA1\u7B97\u673A\u7F51\u7EDC\u3001\u7B97\u6CD5\u4E0E\u6570\u636E\u7ED3\u6784\u3001\u8BBE\u8BA1\u6A21\u5F0F\u3001\u6846\u67B6\u7C7BSpring\u3001Netty\u3001\u5FAE\u670D\u52A1\uFF08Dubbo\uFF0C\u6D88\u606F\u961F\u5217\uFF09 \u7F51\u5173",-1),h=s(" \u7B49\u7B49\u7B49\u7B49\u2026\u2026\u8BE6\u60C5\u6233\uFF1A"),w={href:"https://tobebetterjavaer.com/pdf/programmer-111.html",target:"_blank",rel:"noopener noreferrer"},S=s("\u53EF\u4EE5\u8BF4\u662F2022\u5E74\u5168\u7F51\u6700\u5168\u7684\u5B66\u4E60\u548C\u627E\u5DE5\u4F5C\u7684PDF\u8D44\u6E90\u4E86"),y=n("p",null,[s("\u5173\u6CE8\u4E8C\u54E5\u7684\u539F\u521B\u516C\u4F17\u53F7 "),n("strong",null,"\u6C89\u9ED8\u738B\u4E8C"),s("\uFF0C\u56DE\u590D"),n("strong",null,"111"),s(" \u5373\u53EF\u514D\u8D39\u9886\u53D6\u3002")],-1),f=n("p",null,[n("img",{src:"http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/xingbiaogongzhonghao.png",alt:""})],-1);function I(_,q){const a=p("ExternalLinkIcon");return o(),c("div",null,[u,n("blockquote",null,[n("p",null,[r,n("a",k,[d,t(a)]),m])]),v,n("p",null,[b,g,h,n("a",w,[S,t(a)])]),y,f])}var F=e(i,[["render",I],["__file","char-byte.html.vue"]]);export{F as default};
