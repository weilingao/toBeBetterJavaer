import{_ as i}from"./plugin-vue_export-helper.21dcd24c.js";import{o as n,c as l,e as a}from"./app.0d3123da.js";const e={},s=a(`<p><img src="https://mmbiz.qpic.cn/mmbiz_png/sXFqMxQoVLHMGBBGMicblbAiaMia4Z9QH8Nrq8FaJQBlOBcKyaTibK0cJEnxHjtLW8snPk1mhOW9wvNibAhgeA9nYJA/640?wx_fmt=png" alt=""></p><blockquote><p>\u4E3B\u8981\u8BB2\u89E3 final \u7684\u5185\u5B58\u8BED\u4E49\u548C\u4F7F\u7528\u65B9\u5F0F\u3002</p></blockquote><h2 id="\u524D\u8A00" tabindex="-1"><a class="header-anchor" href="#\u524D\u8A00" aria-hidden="true">#</a> \u524D\u8A00</h2><p>\u770B\u8FD9\u7BC7\u6587\u7AE0\u524D\uFF0C\u5EFA\u8BAE\u5148\u770B\u5B8C\u300AJava \u5E76\u53D1\u7F16\u7A0B\u7CFB\u5217 1-\u57FA\u7840\u77E5\u8BC6\u300B\uFF0C\u56E0\u4E3A\u76F8\u5173\u77E5\u8BC6\u6709\u5F88\u5F3A\u7684\u4F9D\u8D56\uFF0C\u8FD9\u7BC7\u6587\u7AE0\u4E5F\u662F Java \u5185\u5B58\u6A21\u578B JMM \u76F8\u5173\u6587\u7AE0\u7684\u6700\u540E\u4E00\u7BC7\u3002</p><h2 id="final-\u7981\u6B62\u6307\u4EE4\u91CD\u6392\u5206\u6790" tabindex="-1"><a class="header-anchor" href="#final-\u7981\u6B62\u6307\u4EE4\u91CD\u6392\u5206\u6790" aria-hidden="true">#</a> final \u7981\u6B62\u6307\u4EE4\u91CD\u6392\u5206\u6790</h2><blockquote><p>\u8BE5\u90E8\u5206\u5185\u5BB9\u57FA\u672C\u6458\u6284\u81EA\u300A\u6DF1\u5165\u7406\u89E3 Java \u5185\u5B58\u6A21\u578B\u300B\uFF0C\u4EC5\u52A0\u5165\u81EA\u5DF1\u7684\u603B\u7ED3\uFF0C\u66F4\u8BE6\u7EC6\u8BB2\u89E3\u53EF\u4EE5\u76F4\u63A5\u53C2\u8003\u6B64\u4E66\u3002</p></blockquote><p>\u5BF9 final \u57DF\u7684\u8BFB\u548C\u5199\u66F4\u50CF\u662F\u666E\u901A\u7684\u53D8\u91CF\u8BBF\u95EE\uFF0C\u7F16\u8BD1\u5668\u548C\u5904\u7406\u5668\u8981\u9075\u5B88\u4E24\u4E2A\u91CD\u6392\u5E8F\u89C4\u5219\uFF1A</p><ul><li>\u5728\u6784\u9020\u51FD\u6570\u5185\u5BF9\u4E00\u4E2A final \u57DF\u7684\u5199\u5165\uFF0C\u4E0E\u968F\u540E\u628A\u8FD9\u4E2A\u88AB\u6784\u9020\u5BF9\u8C61\u7684\u5F15\u7528\u8D4B\u503C\u7ED9\u4E00\u4E2A\u5F15\u7528\u53D8\u91CF\uFF0C\u8FD9\u4E24\u4E2A\u64CD\u4F5C\u4E4B\u95F4\u4E0D\u80FD\u91CD\u6392\u5E8F\u3002</li><li>\u521D\u6B21\u8BFB\u4E00\u4E2A\u5305\u542B final \u57DF\u7684\u5BF9\u8C61\u7684\u5F15\u7528\uFF0C\u4E0E\u968F\u540E\u521D\u6B21\u8BFB\u8FD9\u4E2A final \u57DF\uFF0C\u8FD9\u4E24\u4E2A\u64CD\u4F5C\u4E4B\u95F4\u4E0D\u80FD\u91CD\u6392\u5E8F\u3002</li></ul><p>\u4E0B\u9762\uFF0C\u6211\u4EEC\u901A\u8FC7\u4E00\u4E9B\u793A\u4F8B\u6027\u7684\u4EE3\u7801\u6765\u5206\u522B\u8BF4\u660E\u8FD9\u4E24\u4E2A\u89C4\u5219\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>public class FinalExample {
    int i;                            //\u666E\u901A\u53D8\u91CF
    final int j;                      //final\u53D8\u91CF
    static FinalExample obj;
    public void FinalExample () {     //\u6784\u9020\u51FD\u6570
        i = 1;                        //\u5199\u666E\u901A\u57DF
        j = 2;                        //\u5199final\u57DF
    }
    public static void writer () {    //\u5199\u7EBF\u7A0BA\u6267\u884C
        obj = new FinalExample ();
    }
    public static void reader () {       //\u8BFB\u7EBF\u7A0BB\u6267\u884C
        FinalExample object = obj;       //\u8BFB\u5BF9\u8C61\u5F15\u7528
        int a = object.i;                //\u8BFB\u666E\u901A\u57DF
        int b = object.j;                //\u8BFBfinal\u57DF
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>\u8FD9\u91CC\u5047\u8BBE\u4E00\u4E2A\u7EBF\u7A0B A \u6267\u884C writer ()\u65B9\u6CD5\uFF0C\u968F\u540E\u53E6\u4E00\u4E2A\u7EBF\u7A0B B \u6267\u884C reader ()\u65B9\u6CD5\uFF0C\u6CE8\u610F\u4E24\u8005\u7684\u8C03\u7528\u5148\u540E\u5173\u7CFB\uFF01</p></blockquote><p>\u4E0B\u9762\u6211\u4EEC\u901A\u8FC7\u8FD9\u4E24\u4E2A\u7EBF\u7A0B\u7684\u4EA4\u4E92\u6765\u8BF4\u660E\u8FD9\u4E24\u4E2A\u89C4\u5219\u3002</p><h3 id="\u5199-final-\u57DF\u7684\u91CD\u6392\u5E8F\u89C4\u5219" tabindex="-1"><a class="header-anchor" href="#\u5199-final-\u57DF\u7684\u91CD\u6392\u5E8F\u89C4\u5219" aria-hidden="true">#</a> \u5199 final \u57DF\u7684\u91CD\u6392\u5E8F\u89C4\u5219</h3><p>\u5199 final \u57DF\u7684\u91CD\u6392\u5E8F\u89C4\u5219\u7981\u6B62\u628A final \u57DF\u7684\u5199\u91CD\u6392\u5E8F\u5230\u6784\u9020\u51FD\u6570\u4E4B\u5916\u3002\u8FD9\u4E2A\u89C4\u5219\u7684\u5B9E\u73B0\u5305\u542B\u4E0B\u9762 2 \u4E2A\u65B9\u9762\uFF1A</p><ul><li>JMM \u7981\u6B62\u7F16\u8BD1\u5668\u628A final \u57DF\u7684\u5199\u91CD\u6392\u5E8F\u5230\u6784\u9020\u51FD\u6570\u4E4B\u5916\u3002</li><li>\u7F16\u8BD1\u5668\u4F1A\u5728 final \u57DF\u7684\u5199\u4E4B\u540E\uFF0C\u6784\u9020\u51FD\u6570 return \u4E4B\u524D\uFF0C\u63D2\u5165\u4E00\u4E2A StoreStore \u5C4F\u969C\u3002\u8FD9\u4E2A\u5C4F\u969C\u7981\u6B62\u5904\u7406\u5668\u628A final \u57DF\u7684\u5199\u91CD\u6392\u5E8F\u5230\u6784\u9020\u51FD\u6570\u4E4B\u5916\u3002</li></ul><p>\u73B0\u5728\u8BA9\u6211\u4EEC\u5206\u6790 writer ()\u65B9\u6CD5\u3002writer ()\u65B9\u6CD5\u53EA\u5305\u542B\u4E00\u884C\u4EE3\u7801\uFF1AfinalExample = new FinalExample ()\u3002\u8FD9\u884C\u4EE3\u7801\u5305\u542B\u4E24\u4E2A\u6B65\u9AA4\uFF1A</p><ul><li>\u6784\u9020\u4E00\u4E2A FinalExample \u7C7B\u578B\u7684\u5BF9\u8C61\uFF1B</li><li>\u628A\u8FD9\u4E2A\u5BF9\u8C61\u7684\u5F15\u7528\u8D4B\u503C\u7ED9\u5F15\u7528\u53D8\u91CF obj\u3002</li></ul><p>\u5047\u8BBE\u7EBF\u7A0B B \u8BFB\u5BF9\u8C61\u5F15\u7528\u4E0E\u8BFB\u5BF9\u8C61\u7684\u6210\u5458\u57DF\u4E4B\u95F4\u6CA1\u6709\u91CD\u6392\u5E8F\uFF08\u9A6C\u4E0A\u4F1A\u8BF4\u660E\u4E3A\u4EC0\u4E48\u9700\u8981\u8FD9\u4E2A\u5047\u8BBE\uFF09\uFF0C\u4E0B\u56FE\u662F\u4E00\u79CD\u53EF\u80FD\u7684\u6267\u884C\u65F6\u5E8F\uFF1A<img src="https://mmbiz.qpic.cn/mmbiz_png/sXFqMxQoVLHMGBBGMicblbAiaMia4Z9QH8NA7rrJ7BxXLgce9quicCK04xHiaXiarrNicJZeNrs8SUSx5geJOjL2AicLlQ/640?wx_fmt=png" alt=""></p><p>\u5728\u4E0A\u56FE\u4E2D\uFF0C\u5199\u666E\u901A\u57DF\u7684\u64CD\u4F5C\u88AB\u7F16\u8BD1\u5668\u91CD\u6392\u5E8F\u5230\u4E86\u6784\u9020\u51FD\u6570\u4E4B\u5916\uFF0C\u8BFB\u7EBF\u7A0B B \u9519\u8BEF\u7684\u8BFB\u53D6\u4E86\u666E\u901A\u53D8\u91CF i \u521D\u59CB\u5316\u4E4B\u524D\u7684\u503C\u3002\u800C\u5199 final \u57DF\u7684\u64CD\u4F5C\uFF0C\u88AB\u5199 final \u57DF\u7684\u91CD\u6392\u5E8F\u89C4\u5219\u201C\u9650\u5B9A\u201D\u5728\u4E86\u6784\u9020\u51FD\u6570\u4E4B\u5185\uFF0C\u8BFB\u7EBF\u7A0B B \u6B63\u786E\u7684\u8BFB\u53D6\u4E86 final \u53D8\u91CF\u521D\u59CB\u5316\u4E4B\u540E\u7684\u503C\u3002</p><p>\u5199 final \u57DF\u7684\u91CD\u6392\u5E8F\u89C4\u5219\u53EF\u4EE5\u786E\u4FDD\uFF1A\u5728\u5BF9\u8C61\u5F15\u7528\u4E3A\u4EFB\u610F\u7EBF\u7A0B\u53EF\u89C1\u4E4B\u524D\uFF0C\u5BF9\u8C61\u7684 final \u57DF\u5DF2\u7ECF\u88AB\u6B63\u786E\u521D\u59CB\u5316\u8FC7\u4E86\uFF0C\u800C\u666E\u901A\u57DF\u4E0D\u5177\u6709\u8FD9\u4E2A\u4FDD\u969C\u3002\u4EE5\u4E0A\u56FE\u4E3A\u4F8B\uFF0C\u5728\u8BFB\u7EBF\u7A0B B\u201C\u770B\u5230\u201D\u5BF9\u8C61\u5F15\u7528 obj \u65F6\uFF0C\u5F88\u53EF\u80FD obj \u5BF9\u8C61\u8FD8\u6CA1\u6709\u6784\u9020\u5B8C\u6210\uFF08\u5BF9\u666E\u901A\u57DF i \u7684\u5199\u64CD\u4F5C\u88AB\u91CD\u6392\u5E8F\u5230\u6784\u9020\u51FD\u6570\u5916\uFF0C\u6B64\u65F6\u521D\u59CB\u503C 2 \u8FD8\u6CA1\u6709\u5199\u5165\u666E\u901A\u57DF i\uFF09\u3002</p><blockquote><p>\u603B\u7ED3\u4E00\u4E0B\uFF1A\u4E5F\u5C31\u662F\u5BF9\u8C61\u521D\u59CB\u5316 final \u53D8\u91CF\u548C\u666E\u901A\u53D8\u91CF\uFF0C\u7136\u540E\u5C06\u521D\u59CB\u5316\u7684\u5BF9\u8C61\u5F15\u7528\u8D4B\u503C\u7ED9\u5176\u5B83\u53D8\u91CF\u524D\uFF0Cfinal \u53D8\u91CF\u53EF\u4EE5\u4FDD\u8BC1\u5DF2\u7ECF\u88AB\u521D\u59CB\u5316\uFF0C\u4F46\u662F\u666E\u901A\u53D8\u91CF\u4E0D\u80FD\u4FDD\u8BC1\uFF0C\u53EF\u80FD\u4F1A\u5BFC\u81F4\u8BFB\u53D6\u7684\u666E\u901A\u53D8\u91CF\u662F\u4E00\u4E2A\u7A7A\u503C\uFF0C\u6216\u8005\u8BF4\u662F\u672A\u521D\u59CB\u5316\u7684\u503C\uFF0C\u5BFC\u81F4\u5F02\u5E38\u3002</p></blockquote><h3 id="\u8BFB-final-\u57DF\u7684\u91CD\u6392\u5E8F\u89C4\u5219" tabindex="-1"><a class="header-anchor" href="#\u8BFB-final-\u57DF\u7684\u91CD\u6392\u5E8F\u89C4\u5219" aria-hidden="true">#</a> \u8BFB final \u57DF\u7684\u91CD\u6392\u5E8F\u89C4\u5219</h3><p>\u8BFB final \u57DF\u7684\u91CD\u6392\u5E8F\u89C4\u5219\u5982\u4E0B\uFF1A</p><ul><li>\u5728\u4E00\u4E2A\u7EBF\u7A0B\u4E2D\uFF0C\u521D\u6B21\u8BFB\u5BF9\u8C61\u5F15\u7528\u4E0E\u521D\u6B21\u8BFB\u8BE5\u5BF9\u8C61\u5305\u542B\u7684 final \u57DF\uFF0CJMM \u7981\u6B62\u5904\u7406\u5668\u91CD\u6392\u5E8F\u8FD9\u4E24\u4E2A\u64CD\u4F5C\uFF08\u6CE8\u610F\uFF0C\u8FD9\u4E2A\u89C4\u5219\u4EC5\u4EC5\u9488\u5BF9\u5904\u7406\u5668\uFF09\u3002\u7F16\u8BD1\u5668\u4F1A\u5728\u8BFB final \u57DF\u64CD\u4F5C\u7684\u524D\u9762\u63D2\u5165\u4E00\u4E2A LoadLoad \u5C4F\u969C\u3002</li></ul><p>reader()\u65B9\u6CD5\u5305\u542B\u4E09\u4E2A\u64CD\u4F5C\uFF1A</p><ol><li>\u521D\u6B21\u8BFB\u5F15\u7528\u53D8\u91CF obj;</li><li>\u521D\u6B21\u8BFB\u5F15\u7528\u53D8\u91CF obj \u6307\u5411\u5BF9\u8C61\u7684\u666E\u901A\u57DF j\u3002</li><li>\u521D\u6B21\u8BFB\u5F15\u7528\u53D8\u91CF obj \u6307\u5411\u5BF9\u8C61\u7684 final \u57DF i\u3002</li></ol><p>\u73B0\u5728\u6211\u4EEC\u5047\u8BBE\u5199\u7EBF\u7A0B A \u6CA1\u6709\u53D1\u751F\u4EFB\u4F55\u91CD\u6392\u5E8F\uFF0C\u540C\u65F6\u7A0B\u5E8F\u5728\u4E0D\u9075\u5B88\u95F4\u63A5\u4F9D\u8D56\u7684\u5904\u7406\u5668\u4E0A\u6267\u884C\uFF0C\u4E0B\u9762\u662F\u4E00\u79CD\u53EF\u80FD\u7684\u6267\u884C\u65F6\u5E8F\uFF1A</p><p><img src="https://mmbiz.qpic.cn/mmbiz_png/sXFqMxQoVLHMGBBGMicblbAiaMia4Z9QH8NGiaFeH1KcsgYgzPc0Mnoiaacq36v1LnOChA39Q4Xwx0C7dllib9B9tnPw/640?wx_fmt=png" alt=""></p><p>\u5728\u4E0A\u56FE\u4E2D\uFF0C\u8BFB\u5BF9\u8C61\u7684\u666E\u901A\u57DF\u7684\u64CD\u4F5C\u88AB\u5904\u7406\u5668\u91CD\u6392\u5E8F\u5230\u8BFB\u5BF9\u8C61\u5F15\u7528\u4E4B\u524D\u3002\u8BFB\u666E\u901A\u57DF\u65F6\uFF0C\u8BE5\u57DF\u8FD8\u6CA1\u6709\u88AB\u5199\u7EBF\u7A0B A \u5199\u5165\uFF0C\u8FD9\u662F\u4E00\u4E2A\u9519\u8BEF\u7684\u8BFB\u53D6\u64CD\u4F5C\u3002\u800C\u8BFB final \u57DF\u7684\u91CD\u6392\u5E8F\u89C4\u5219\u4F1A\u628A\u8BFB\u5BF9\u8C61 final \u57DF\u7684\u64CD\u4F5C\u201C\u9650\u5B9A\u201D\u5728\u8BFB\u5BF9\u8C61\u5F15\u7528\u4E4B\u540E\uFF0C\u6B64\u65F6\u8BE5 final \u57DF\u5DF2\u7ECF\u88AB A \u7EBF\u7A0B\u521D\u59CB\u5316\u8FC7\u4E86\uFF0C\u8FD9\u662F\u4E00\u4E2A\u6B63\u786E\u7684\u8BFB\u53D6\u64CD\u4F5C\u3002</p><blockquote><p>\u603B\u7ED3\u4E00\u4E0B\uFF1A\u5728\u8BFB\u4E00\u4E2A\u5BF9\u8C61\u7684 final \u53D8\u91CF\u4E4B\u524D\uFF0C\u4E00\u5B9A\u4F1A\u5148\u8BFB\u5305\u542B\u8FD9\u4E2A final \u57DF\u7684\u5BF9\u8C61\u7684\u5F15\u7528\uFF0C\u6240\u4EE5\u4E0D\u7528\u62C5\u5FC3\u8BFB\u5230\u5BF9\u8C61\u7684 final \u53D8\u91CF\uFF0C\u4F1A\u56E0\u4E3A\u91CD\u6392\u9664\u5BFC\u81F4\u8BFB\u5230\u7684\u662F\u4E00\u4E2A\u672A\u521D\u59CB\u5316\u7684\u503C\uFF0C\u4F46\u662F\u5BF9\u8C61\u7684\u666E\u901A\u53D8\u91CF\u5C31\u4E0D\u80FD\u8FD9\u6837\u4FDD\u8BC1\u3002</p></blockquote><blockquote><p>\u5BF9\u8BFB\u548C\u5199 finlal \u57DF\uFF0C\u6574\u4F53\u603B\u7ED3\u4E00\u4E0B\uFF1A\u5199 final \u57DF\u7684\u91CD\u6392\u5E8F\u89C4\u5219\u4F1A\u8981\u6C42\u8BD1\u7F16\u5668\u5728 final \u57DF\u7684\u5199\u4E4B\u540E\uFF0C\u6784\u9020\u51FD\u6570 return \u4E4B\u524D\uFF0C\u63D2\u5165\u4E00\u4E2A StoreStore \u969C\u5C4F\u3002\u8BFB final \u57DF\u7684\u91CD\u6392\u5E8F\u89C4\u5219\u8981\u6C42\u7F16\u8BD1\u5668\u5728\u8BFB final \u57DF\u7684\u64CD\u4F5C\u524D\u9762\u63D2\u5165\u4E00\u4E2A LoadLoad \u5C4F\u969C\u3002</p></blockquote><h3 id="\u5982\u679C-final-\u57DF\u662F\u5F15\u7528\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#\u5982\u679C-final-\u57DF\u662F\u5F15\u7528\u7C7B\u578B" aria-hidden="true">#</a> \u5982\u679C final \u57DF\u662F\u5F15\u7528\u7C7B\u578B</h3><p>\u4E0A\u9762\u6211\u4EEC\u770B\u5230\u7684 final \u57DF\u662F\u57FA\u7840\u6570\u636E\u7C7B\u578B\uFF0C\u4E0B\u9762\u8BA9\u6211\u4EEC\u770B\u770B\u5982\u679C final \u57DF\u662F\u5F15\u7528\u7C7B\u578B\uFF0C\u5C06\u4F1A\u6709\u4EC0\u4E48\u6548\u679C\uFF1F\u8BF7\u770B\u4E0B\u5217\u793A\u4F8B\u4EE3\u7801\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>public class FinalReferenceExample {
  final int[] intArray;                     //final\u662F\u5F15\u7528\u7C7B\u578B
  static FinalReferenceExample obj;
  public FinalReferenceExample () {        //\u6784\u9020\u51FD\u6570
      intArray = new int[1];              //1
      intArray[0] = 1;                   //2
  }
  public static void writerOne () {          //\u5199\u7EBF\u7A0BA\u6267\u884C
      obj = new FinalReferenceExample ();  //3
  }
  public static void writerTwo () {          //\u5199\u7EBF\u7A0BB\u6267\u884C
      obj.intArray[0] = 2;                 //4
  }
  public static void reader () {              //\u8BFB\u7EBF\u7A0BC\u6267\u884C
      if (obj != null) {                    //5
          int temp1 = obj.intArray[0];       //6
      }
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://mmbiz.qpic.cn/mmbiz_png/sXFqMxQoVLHMGBBGMicblbAiaMia4Z9QH8NcbzIvMPupvuNyJdvTQWORkDwicgbmkGpXS0PiaA53lwMfgiaGNib8TAcmQ/640?wx_fmt=png" alt=""></p><p>\u5728\u4E0A\u56FE\u4E2D\uFF0C1 \u662F\u5BF9 final \u57DF\u7684\u5199\u5165\uFF0C2 \u662F\u5BF9\u8FD9\u4E2A final \u57DF\u5F15\u7528\u7684\u5BF9\u8C61\u7684\u6210\u5458\u57DF\u7684\u5199\u5165\uFF0C3 \u662F\u628A\u88AB\u6784\u9020\u7684\u5BF9\u8C61\u7684\u5F15\u7528\u8D4B\u503C\u7ED9\u67D0\u4E2A\u5F15\u7528\u53D8\u91CF\u3002\u8FD9\u91CC\u9664\u4E86\u524D\u9762\u63D0\u5230\u7684 1 \u4E0D\u80FD\u548C 3 \u91CD\u6392\u5E8F\u5916\uFF0C2 \u548C 3 \u4E5F\u4E0D\u80FD\u91CD\u6392\u5E8F\u3002</p><p>JMM \u53EF\u4EE5\u786E\u4FDD\u8BFB\u7EBF\u7A0B C \u81F3\u5C11\u80FD\u770B\u5230\u5199\u7EBF\u7A0B A \u5728\u6784\u9020\u51FD\u6570\u4E2D\u5BF9 final \u5F15\u7528\u5BF9\u8C61\u7684\u6210\u5458\u57DF\u7684\u5199\u5165\u3002\u5373 C \u81F3\u5C11\u80FD\u770B\u5230\u6570\u7EC4\u4E0B\u6807 0 \u7684\u503C\u4E3A 1\u3002\u800C\u5199\u7EBF\u7A0B B \u5BF9\u6570\u7EC4\u5143\u7D20\u7684\u5199\u5165\uFF0C\u8BFB\u7EBF\u7A0B C \u53EF\u80FD\u770B\u7684\u5230\uFF0C\u4E5F\u53EF\u80FD\u770B\u4E0D\u5230\u3002JMM \u4E0D\u4FDD\u8BC1\u7EBF\u7A0B B \u7684\u5199\u5165\u5BF9\u8BFB\u7EBF\u7A0B C \u53EF\u89C1\uFF0C\u56E0\u4E3A\u5199\u7EBF\u7A0B B \u548C\u8BFB\u7EBF\u7A0B C \u4E4B\u95F4\u5B58\u5728\u6570\u636E\u7ADE\u4E89\uFF0C\u6B64\u65F6\u7684\u6267\u884C\u7ED3\u679C\u4E0D\u53EF\u9884\u77E5\u3002</p><p>\u5982\u679C\u60F3\u8981\u786E\u4FDD\u8BFB\u7EBF\u7A0B C \u770B\u5230\u5199\u7EBF\u7A0B B \u5BF9\u6570\u7EC4\u5143\u7D20\u7684\u5199\u5165\uFF0C\u5199\u7EBF\u7A0B B \u548C\u8BFB\u7EBF\u7A0B C \u4E4B\u95F4\u9700\u8981\u4F7F\u7528\u540C\u6B65\u539F\u8BED\uFF08lock \u6216 volatile\uFF09\u6765\u786E\u4FDD\u5185\u5B58\u53EF\u89C1\u6027\u3002</p><blockquote><p>\u603B\u7ED3\u4E00\u4E0B\uFF1A\u5982\u679C final \u57DF\u4E3A\u5F15\u7528\u7C7B\u578B\uFF0C\u8FD9\u4E2A\u5176\u5B9E\u548C\u975E\u5F15\u7528\u7C7B\u578B\u7981\u6B62\u91CD\u6392\u5E8F\u7684\u89C4\u5219\u57FA\u672C\u4E00\u6837\u3002\u4E0A\u9762\u7684\u793A\u4F8B\uFF0CwriterTwo()\u548C reader()\u540C\u65F6\u5BF9\u4E00\u4E2A\u6570\u636E\u8FDB\u884C\u64CD\u4F5C\uFF0C\u5B58\u5728\u7ADE\u4E89\u5173\u7CFB\uFF0C\u4E5F\u5F88\u597D\u7406\u89E3\uFF0C\u6211\u6362\u4E00\u4E2A\u975E\u5F15\u7528\u7C7B\u578B\uFF0C\u4E5F\u4E00\u6837\u5B58\u5728\u5E76\u53D1\uFF0C\u89E3\u51B3\u65B9\u6848\u5C31\u662F\u52A0\u9501\u3002</p></blockquote><h3 id="\u4E3A\u4EC0\u4E48-final-\u5F15\u7528\u4E0D\u80FD\u4ECE\u6784\u9020\u51FD\u6570\u5185-\u9038\u51FA" tabindex="-1"><a class="header-anchor" href="#\u4E3A\u4EC0\u4E48-final-\u5F15\u7528\u4E0D\u80FD\u4ECE\u6784\u9020\u51FD\u6570\u5185-\u9038\u51FA" aria-hidden="true">#</a> \u4E3A\u4EC0\u4E48 final \u5F15\u7528\u4E0D\u80FD\u4ECE\u6784\u9020\u51FD\u6570\u5185\u201C\u9038\u51FA\u201D</h3><p>\u524D\u9762\u6211\u4EEC\u63D0\u5230\u8FC7\uFF0C\u5199 final \u57DF\u7684\u91CD\u6392\u5E8F\u89C4\u5219\u53EF\u4EE5\u786E\u4FDD\uFF1A\u5728\u5F15\u7528\u53D8\u91CF\u4E3A\u4EFB\u610F\u7EBF\u7A0B\u53EF\u89C1\u4E4B\u524D\uFF0C\u8BE5\u5F15\u7528\u53D8\u91CF\u6307\u5411\u7684\u5BF9\u8C61\u7684 final \u57DF\u5DF2\u7ECF\u5728\u6784\u9020\u51FD\u6570\u4E2D\u88AB\u6B63\u786E\u521D\u59CB\u5316\u8FC7\u4E86\u3002\u5176\u5B9E\u8981\u5F97\u5230\u8FD9\u4E2A\u6548\u679C\uFF0C\u8FD8\u9700\u8981\u4E00\u4E2A\u4FDD\u8BC1\uFF1A</p><blockquote><p>\u5728\u6784\u9020\u51FD\u6570\u5185\u90E8\uFF0C\u4E0D\u80FD\u8BA9\u8FD9\u4E2A\u88AB\u6784\u9020\u5BF9\u8C61\u7684\u5F15\u7528\u4E3A\u5176\u4ED6\u7EBF\u7A0B\u53EF\u89C1\uFF0C\u4E5F\u5C31\u662F\u5BF9\u8C61\u5F15\u7528\u4E0D\u80FD\u5728\u6784\u9020\u51FD\u6570\u4E2D\u201C\u9038\u51FA\u201D\u3002</p></blockquote><p>\u4E3A\u4E86\u8BF4\u660E\u95EE\u9898\uFF0C\u8BA9\u6211\u4EEC\u6765\u770B\u4E0B\u9762\u793A\u4F8B\u4EE3\u7801\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>public class FinalReferenceEscapeExample {
  final int i;
  static FinalReferenceEscapeExample obj;
  public FinalReferenceEscapeExample () {
      i = 1;                              //1\u5199final\u57DF
      obj = this;                          //2 this\u5F15\u7528\u5728\u6B64\u201C\u9038\u51FA\u201D
  }
  public static void writer() {
      new FinalReferenceEscapeExample ();
  }
  public static void reader {
      if (obj != null) {                     //3
          int temp = obj.i;                 //4
      }
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5047\u8BBE\u4E00\u4E2A\u7EBF\u7A0B A \u6267\u884C writer()\u65B9\u6CD5\uFF0C\u53E6\u4E00\u4E2A\u7EBF\u7A0B B \u6267\u884C reader()\u65B9\u6CD5\u3002\u8FD9\u91CC\u7684\u64CD\u4F5C 2 \u4F7F\u5F97\u5BF9\u8C61\u8FD8\u672A\u5B8C\u6210\u6784\u9020\u524D\u5C31\u4E3A\u7EBF\u7A0B B \u53EF\u89C1\u3002\u5373\u4F7F\u8FD9\u91CC\u7684\u64CD\u4F5C 2 \u662F\u6784\u9020\u51FD\u6570\u7684\u6700\u540E\u4E00\u6B65\uFF0C\u4E14\u5373\u4F7F\u5728\u7A0B\u5E8F\u4E2D\u64CD\u4F5C 2 \u6392\u5728\u64CD\u4F5C 1 \u540E\u9762\uFF0C\u6267\u884C read()\u65B9\u6CD5\u7684\u7EBF\u7A0B\u4ECD\u7136\u53EF\u80FD\u65E0\u6CD5\u770B\u5230 final \u57DF\u88AB\u521D\u59CB\u5316\u540E\u7684\u503C\uFF0C\u56E0\u4E3A\u8FD9\u91CC\u7684\u64CD\u4F5C 1 \u548C\u64CD\u4F5C 2 \u4E4B\u95F4\u53EF\u80FD\u88AB\u91CD\u6392\u5E8F\u3002\u5B9E\u9645\u7684\u6267\u884C\u65F6\u5E8F\u53EF\u80FD\u5982\u4E0B\u56FE\u6240\u793A\uFF1A</p><p><img src="https://mmbiz.qpic.cn/mmbiz_png/sXFqMxQoVLHMGBBGMicblbAiaMia4Z9QH8Nfic39kFhiaxoZqVUOFCHejjxmWVqFhBVvzmsSgV5BtCMVVKmH0n2ic8nQ/640?wx_fmt=png" alt=""></p><p>\u4ECE\u4E0A\u56FE\u6211\u4EEC\u53EF\u4EE5\u770B\u51FA\uFF1A\u5728\u6784\u9020\u51FD\u6570\u8FD4\u56DE\u524D\uFF0C\u88AB\u6784\u9020\u5BF9\u8C61\u7684\u5F15\u7528\u4E0D\u80FD\u4E3A\u5176\u4ED6\u7EBF\u7A0B\u53EF\u89C1\uFF0C\u56E0\u4E3A\u6B64\u65F6\u7684 final \u57DF\u53EF\u80FD\u8FD8\u6CA1\u6709\u88AB\u521D\u59CB\u5316\u3002\u5728\u6784\u9020\u51FD\u6570\u8FD4\u56DE\u540E\uFF0C\u4EFB\u610F\u7EBF\u7A0B\u90FD\u5C06\u4FDD\u8BC1\u80FD\u770B\u5230 final \u57DF\u6B63\u786E\u521D\u59CB\u5316\u4E4B\u540E\u7684\u503C\u3002</p><blockquote><p>\u4E0A\u9762\u90FD\u662F\u516B\u80A1\u6587\uFF0C\u4E5F\u5F88\u5C11\u4F1A\u9047\u5230\u4E0A\u8FF0\u4F7F\u7528\u573A\u666F\uFF0C\u4E2A\u4EBA\u4E5F\u4EC5\u4F5C\u5174\u8DA3\u4E86\u89E3\uFF0C\u907F\u514D\u8E29\u5751\uFF0C\u4E0B\u9762\u603B\u7ED3\u4E00\u4E0B final \u7684\u5E38\u7528\u7528\u6CD5\u3002</p></blockquote><h2 id="final-\u5173\u952E\u5B57\u6709\u51E0\u79CD\u7528\u6CD5" tabindex="-1"><a class="header-anchor" href="#final-\u5173\u952E\u5B57\u6709\u51E0\u79CD\u7528\u6CD5" aria-hidden="true">#</a> final \u5173\u952E\u5B57\u6709\u51E0\u79CD\u7528\u6CD5</h2><h3 id="\u4FEE\u9970\u666E\u901A\u53D8\u91CF" tabindex="-1"><a class="header-anchor" href="#\u4FEE\u9970\u666E\u901A\u53D8\u91CF" aria-hidden="true">#</a> \u4FEE\u9970\u666E\u901A\u53D8\u91CF</h3><p>\u6CE8\u610F\u70B9\uFF1A</p><ul><li>\u7528 final \u5173\u952E\u5B57\u4FEE\u9970\u7684\u53D8\u91CF\uFF0C\u53EA\u80FD\u8FDB\u884C\u4E00\u6B21\u8D4B\u503C\u64CD\u4F5C\uFF0C\u5E76\u4E14\u5728\u751F\u5B58\u671F\u5185\u4E0D\u53EF\u4EE5\u6539\u53D8\u5B83\u7684\u503C\u3002final \u4FEE\u9970\u7684\u53D8\u91CF\u53EF\u4EE5\u5148\u58F0\u660E\uFF0C\u540E\u8D4B\u503C\u3002</li></ul><h3 id="\u4FEE\u9970\u6210\u5458\u53D8\u91CF" tabindex="-1"><a class="header-anchor" href="#\u4FEE\u9970\u6210\u5458\u53D8\u91CF" aria-hidden="true">#</a> \u4FEE\u9970\u6210\u5458\u53D8\u91CF</h3><p>\u6CE8\u610F\u70B9\uFF1A</p><ul><li>\u5FC5\u987B\u521D\u59CB\u5316\u503C\u3002</li><li>\u88AB final \u4FEE\u9970\u7684\u6210\u5458\u53D8\u91CF\u8D4B\u503C\uFF0C\u6709\u4E24\u79CD\u65B9\u5F0F\uFF1A1\u3001\u76F4\u63A5\u8D4B\u503C 2\u3001\u5168\u90E8\u5728\u6784\u9020\u65B9\u6CD5\u4E2D\u8D4B\u521D\u503C\u3002</li><li>\u5982\u679C\u4FEE\u9970\u7684\u6210\u5458\u53D8\u91CF\u662F\u57FA\u672C\u7C7B\u578B\uFF0C\u5219\u8868\u793A\u8FD9\u4E2A\u53D8\u91CF\u7684\u503C\u4E0D\u80FD\u6539\u53D8\u3002</li><li>\u5982\u679C\u4FEE\u9970\u7684\u6210\u5458\u53D8\u91CF\u662F\u4E00\u4E2A\u5F15\u7528\u7C7B\u578B\uFF0C\u5219\u662F\u8BF4\u8FD9\u4E2A\u5F15\u7528\u7684\u5730\u5740\u7684\u503C\u4E0D\u80FD\u4FEE\u6539\uFF0C\u4F46\u662F\u8FD9\u4E2A\u5F15\u7528\u6240\u6307\u5411\u7684\u5BF9\u8C61\u91CC\u9762\u7684\u5185\u5BB9\u8FD8\u662F\u53EF\u4EE5\u6539\u53D8\u7684\u3002</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>public class Test {
    final int age = 18;
    final String name;
    final String[] hobby;
    public Test() {
        this.name = &quot;lvmenglou&quot;;        // \u6B63\u786E\u4F7F\u7528
        //this.age = 20;                // \u9519\u8BEF\u4F7F\u7528
        this.hobby = new String[4];     // \u6B63\u786E\u4F7F\u7528
        this.hobby[0] = &quot;movie&quot;;        // \u6B63\u786E\u4F7F\u7528
        this.hobby[1] = &quot;sing song&quot;;    // \u6B63\u786E\u4F7F\u7528
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u4FEE\u9970\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u4FEE\u9970\u65B9\u6CD5" aria-hidden="true">#</a> \u4FEE\u9970\u65B9\u6CD5</h3><p>\u6CE8\u610F\u70B9\uFF1A</p><ul><li>\u88AB final \u4FEE\u9970\u7684\u65B9\u6CD5\u4E0D\u80FD\u88AB\u91CD\u5199\u3002</li><li>\u4E00\u4E2A\u7C7B\u7684 private \u65B9\u6CD5\u4F1A\u9690\u5F0F\u7684\u88AB\u6307\u5B9A\u4E3A final \u65B9\u6CD5\u3002</li><li>\u5982\u679C\u7236\u7C7B\u4E2D\u6709 final \u4FEE\u9970\u7684\u65B9\u6CD5\uFF0C\u90A3\u4E48\u5B50\u7C7B\u4E0D\u80FD\u53BB\u91CD\u5199\u3002</li></ul><p><img src="https://mmbiz.qpic.cn/mmbiz_png/sXFqMxQoVLHMGBBGMicblbAiaMia4Z9QH8NtTiaZV28IRGJuXpMUNJQeBZka5ls80Licdl364nhl1ibU1DITHTHLBQWQ/640?wx_fmt=png" alt=""></p><h3 id="\u4FEE\u9970\u7C7B" tabindex="-1"><a class="header-anchor" href="#\u4FEE\u9970\u7C7B" aria-hidden="true">#</a> \u4FEE\u9970\u7C7B</h3><p>\u6CE8\u610F\u70B9\uFF1A</p><ul><li>\u7528 final \u53BB\u4FEE\u9970\u4E00\u4E2A\u7C7B\u7684\u65F6\u5019\uFF0C\u8868\u793A\u8FD9\u4E2A\u7C7B\u4E0D\u80FD\u88AB\u7EE7\u627F\uFF1B</li><li>final \u7C7B\u4E2D\u7684\u6210\u5458\u65B9\u6CD5\u90FD\u4F1A\u88AB\u9690\u5F0F\u7684\u6307\u5B9A\u4E3A final \u65B9\u6CD5\uFF1B</li><li>\u88AB final \u4FEE\u9970\u7684\u7C7B\uFF0Cfinal \u7C7B\u4E2D\u7684\u6210\u5458\u53D8\u91CF\u53EF\u4EE5\u6839\u636E\u81EA\u5DF1\u7684\u5B9E\u9645\u9700\u8981\u8BBE\u8BA1\u4E3A final\u3002</li></ul><blockquote><p>\u5728\u81EA\u5DF1\u8BBE\u8BA1\u4E00\u4E2A\u7C7B\u7684\u65F6\u5019\uFF0C\u8981\u60F3\u597D\u8FD9\u4E2A\u7C7B\u5C06\u6765\u662F\u5426\u4F1A\u88AB\u7EE7\u627F\uFF0C\u5982\u679C\u53EF\u4EE5\u88AB\u7EE7\u627F\uFF0C\u5219\u8BE5\u7C7B\u4E0D\u80FD\u4F7F\u7528 final \u4FEE\u9970\uFF0C\u5728\u8FD9\u91CC\u5462\uFF0C\u4E00\u822C\u6765\u8BF4\u5DE5\u5177\u7C7B\u6211\u4EEC\u5F80\u5F80\u90FD\u4F1A\u8BBE\u8BA1\u6210\u4E3A\u4E00\u4E2A final \u7C7B\u3002\u5728 JDK \u4E2D\uFF0C\u88AB\u8BBE\u8BA1\u4E3A final \u7C7B\u7684\u6709 String\u3001System \u7B49\u3002</p></blockquote><p><img src="https://mmbiz.qpic.cn/mmbiz_png/sXFqMxQoVLHMGBBGMicblbAiaMia4Z9QH8NVAJRLLOM61t7R8FLTn65PtohOpHo39Wt0EbcnekGd5A6pMblmI9ebQ/640?wx_fmt=png" alt=""></p><h2 id="final-\u548C-static" tabindex="-1"><a class="header-anchor" href="#final-\u548C-static" aria-hidden="true">#</a> final \u548C static</h2><p>\u5F88\u591A\u65F6\u5019\u4F1A\u5BB9\u6613\u628A static \u548C final \u5173\u952E\u5B57\u6DF7\u6DC6\uFF0Cstatic \u4F5C\u7528\u4E8E\u6210\u5458\u53D8\u91CF\u7528\u6765\u8868\u793A\u53EA\u4FDD\u5B58\u4E00\u4EFD\u526F\u672C\uFF0C\u800C final \u7684\u4F5C\u7528\u662F\u7528\u6765\u4FDD\u8BC1\u53D8\u91CF\u4E0D\u53EF\u53D8\u3002\u770B\u4E0B\u9762\u8FD9\u4E2A\u4F8B\u5B50\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>class MyClass {
    public final double i = Math.random();
    public static double j = Math.random();
}
public class Test2 {
    public static void main(String[] args)  {
        MyClass myClass1 = new MyClass();
        MyClass myClass2 = new MyClass();
        System.out.println(myClass1.i);
        System.out.println(myClass1.j);
        System.out.println(myClass2.i);
        System.out.println(myClass2.j);
    }
}
// \u8F93\u51FA\uFF1A
// 0.6885279073145978
// 0.7678464493258529
// 0.5645174724833194
// 0.7678464493258529
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD0\u884C\u8FD9\u6BB5\u4EE3\u7801\u5C31\u4F1A\u53D1\u73B0\uFF0C\u6BCF\u6B21\u6253\u5370\u7684\u4E24\u4E2A j \u503C\u90FD\u662F\u4E00\u6837\u7684\uFF0C\u800C i \u7684\u503C\u5374\u662F\u4E0D\u540C\u7684\u3002\u4ECE\u8FD9\u91CC\u5C31\u53EF\u4EE5\u77E5\u9053 final \u548C static \u53D8\u91CF\u7684\u533A\u522B\u4E86\u3002</p><h2 id="\u603B\u7ED3" tabindex="-1"><a class="header-anchor" href="#\u603B\u7ED3" aria-hidden="true">#</a> \u603B\u7ED3</h2><p>\u672C\u7AE0\u8BE6\u7EC6\u8BB2\u89E3\u4E86 final \u7684\u5185\u5B58\u8BED\u4E49\u548C\u4F7F\u7528\u65B9\u5F0F\uFF0C\u5185\u5B58\u8BED\u4E49\u4E3B\u8981\u662F\u6D89\u53CA\u5230\u5E76\u53D1\u7F16\u7A0B\u76F8\u5173\u7684\u77E5\u8BC6\uFF0C\u4EC5\u4F9B\u4E86\u89E3\u5373\u53EF\u3002\u5176\u5B9E\u6211\u4EEC\u6700\u7EC8\u8FD8\u662F\u9700\u8981\u6CE8\u91CD final \u7684\u4F7F\u7528\u65B9\u5F0F\uFF0C\u5206\u522B\u4ECE\u53D8\u91CF\u3001\u65B9\u6CD5\u3001\u7C7B\uFF0C\u5BF9\u9F50\u8FDB\u884C\u8BB2\u89E3\uFF0C\u8FD9\u5757\u77E5\u8BC6\u5F88\u7B80\u5355\uFF0C\u4E3B\u8981\u662F\u505A\u4E2A\u8BB0\u5F55\uFF0C\u6700\u540E\u662F final \u548C static\uFF0C\u4E5F\u662F\u7F51\u4E0A\u770B\u5230\u7684\u793A\u4F8B\uFF0C\u4E5F\u53EA\u505A\u4E2A\u7B80\u5355\u7684\u8BB0\u5F55\u3002</p><p>\u8FD9\u4E9B\u5185\u5BB9\uFF0C\u5176\u5B9E\u662F\u6839\u636E\u300A\u6DF1\u5165\u7406\u89E3 Java \u5185\u5B58\u6A21\u578B\u300B\uFF0C\u7136\u540E\u7ED3\u5408\u7F51\u4E0A\u7684\u8D44\u6599\uFF0C\u505A\u4E86\u76F8\u5173\u6574\u7406\u548C\u603B\u7ED3\uFF0C\u5176\u5B9E\u90FD\u5C5E\u4E8E Java \u5185\u5B58\u6A21\u578B\u65B9\u9762\u7684\u5185\u5BB9\uFF0C\u901A\u8FC7\u8FD9 4 \u7BC7\u6587\u7AE0\uFF0C\u5927\u5BB6\u5BF9 Java \u5185\u5B58\u6A21\u578B\u5E94\u8BE5\u4F1A\u6709\u6574\u4F53\u7684\u4E86\u89E3\uFF0C\u540E\u9762\u624D\u771F\u6B63\u8BB2\u89E3\u5E76\u53D1\u7F16\u7A0B\u76F8\u5173\u7684\u77E5\u8BC6\u3002</p><p>\u53C2\u8003\u8D44\u6599\uFF1A\u300A\u6DF1\u5165\u7406\u89E3 Java \u5185\u5B58\u6A21\u578B\u300B \u300AJava \u5E76\u53D1\u7F16\u7A0B\u5B9E\u6218\u300B</p>`,73),d=[s];function r(c,t){return n(),l("div",null,d)}var u=i(e,[["render",r],["__file","javabfbcjlfinal.html.vue"]]);export{u as default};
