import{_ as p}from"./plugin-vue_export-helper.21dcd24c.js";import{r as o,o as c,c as l,a as s,b as t,d as n,e}from"./app.0d3123da.js";const i={},u=n("\u201C\u54E5\uFF0C"),r={href:"https://tobebetterjavaer.com/array/array.html",target:"_blank",rel:"noopener noreferrer"},d=n("\u4E4B\u524D\u542C\u4F60\u8BF4\uFF0C\u6570\u7EC4\u4E5F\u662F\u4E00\u4E2A\u5BF9\u8C61"),k=n("\uFF0C\u4F46 Java \u4E2D\u5E76\u672A\u660E\u786E\u7684\u5B9A\u4E49\u8FD9\u6837\u4E00\u4E2A\u7C7B\u3002\u201D\u770B\u6765\u4E09\u59B9\u6709\u5728\u7528\u5FC3\u5730\u5B66\u4E60\u3002"),v=e(`<p>\u201C\u662F\u7684\uFF0C\u56E0\u6B64\u6570\u7EC4\u4E5F\u5C31\u6CA1\u6709\u673A\u4F1A\u8986\u76D6 <code>Object.toString()</code> \u65B9\u6CD5\u3002\u5982\u679C\u5C1D\u8BD5\u76F4\u63A5\u6253\u5370\u6570\u7EC4\u7684\u8BDD\uFF0C\u8F93\u51FA\u7684\u7ED3\u679C\u5E76\u4E0D\u662F\u6211\u4EEC\u9884\u671F\u7684\u7ED3\u679C\u3002\u201D\u6211\u63A5\u7740\u4E09\u59B9\u7684\u8BDD\u7EE7\u7EED\u8BF4\u3002</p><p>\u201C\u90A3\u600E\u4E48\u6253\u5370\u6570\u7EC4\u5462\uFF1F\u201D\u4E09\u59B9\u5FC3\u6709\u7075\u7280\u5730\u628A\u4ECA\u5929\u7684\u6838\u5FC3\u95EE\u9898\u63D0\u4E86\u51FA\u6765\u3002</p><p>\u201C\u9996\u5148\uFF0C\u6211\u4EEC\u6765\u770B\u4E00\u4E0B\uFF0C\u4E3A\u4EC0\u4E48\u4E0D\u80FD\u76F4\u63A5\u6253\u5370\u6570\u7EC4\uFF0C\u76F4\u63A5\u6253\u5370\u7684\u8BDD\uFF0C\u4F1A\u51FA\u73B0\u4EC0\u4E48\u95EE\u9898\u3002\u201D</p><p>\u6765\u770B\u8FD9\u6837\u4E00\u4E2A\u4F8B\u5B50\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>String [] cmowers = {&quot;\u6C89\u9ED8&quot;,&quot;\u738B\u4E8C&quot;,&quot;\u4E00\u679A\u6709\u8DA3\u7684\u7A0B\u5E8F\u5458&quot;};
System.out.println(cmowers);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7A0B\u5E8F\u6253\u5370\u7684\u7ED3\u679C\u662F\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>[Ljava.lang.String;@3d075dc0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code>[Ljava.lang.String;</code> \u8868\u793A\u5B57\u7B26\u4E32\u6570\u7EC4\u7684 Class \u540D\uFF0C@ \u540E\u9762\u7684\u662F\u5341\u516D\u8FDB\u5236\u7684 hashCode\u2014\u2014\u8FD9\u6837\u7684\u6253\u5370\u7ED3\u679C\u592A\u201C\u4EBA\u6027\u5316\u201D\u4E86\uFF0C\u4E00\u822C\u4EBA\u8868\u793A\u770B\u4E0D\u61C2\uFF01\u4E3A\u4EC0\u4E48\u4F1A\u8FD9\u6837\u663E\u793A\u5462\uFF1F\u67E5\u770B\u4E00\u4E0B <code>java.lang.Object</code> \u7C7B\u7684 <code>toString()</code> \u65B9\u6CD5\u5C31\u660E\u767D\u4E86\u3002</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token function">getClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;@&quot;</span> <span class="token operator">+</span> <span class="token class-name">Integer</span><span class="token punctuation">.</span><span class="token function">toHexString</span><span class="token punctuation">(</span><span class="token function">hashCode</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u518D\u6B21\u8BC1\u660E\uFF0C\u6570\u7EC4\u867D\u7136\u6CA1\u6709\u663E\u5F0F\u5B9A\u4E49\u6210\u4E00\u4E2A\u7C7B\uFF0C\u4F46\u5B83\u7684\u786E\u662F\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u7EE7\u627F\u4E86\u7956\u5148\u7C7B Object \u7684\u6240\u6709\u65B9\u6CD5\u3002</p><p>\u201C\u54E5\uFF0C\u90A3\u4E3A\u4EC0\u4E48\u6570\u7EC4\u4E0D\u5355\u72EC\u5B9A\u4E49\u4E00\u4E2A\u7C7B\u6765\u8868\u793A\u5462\uFF1F\u5C31\u50CF\u5B57\u7B26\u4E32 String \u7C7B\u90A3\u6837\u5462\uFF1F\u201D\u4E09\u59B9\u8FD9\u4E2A\u95EE\u9898\u8BA9\u4EBA\u5934\u5927\uFF0C\u4F46\u4E5F\u597D\u89E3\u91CA\u3002</p><p>\u201C\u4E00\u4E2A\u5408\u7406\u7684\u8BF4\u6CD5\u662F Java \u5C06\u5176\u9690\u85CF\u4E86\u3002\u5047\u5982\u771F\u7684\u5B58\u5728\u8FD9\u4E48\u4E00\u4E2A\u7C7B\uFF0C\u5C31\u53EB Array.java \u5427\uFF0C\u6211\u4EEC\u5047\u60F3\u4E00\u4E0B\u5B83\u771F\u5B9E\u7684\u6837\u5B50\uFF0C\u5FC5\u987B\u5F97\u6709\u4E00\u4E2A\u5BB9\u5668\u6765\u5B58\u653E\u6570\u7EC4\u7684\u6BCF\u4E00\u4E2A\u5143\u7D20\uFF0C\u5C31\u50CF String \u7C7B\u90A3\u6837\u3002\u201D\u4E00\u8FB9\u56DE\u7B54\u4E09\u59B9\uFF0C\u6211\u4E00\u8FB9\u6253\u5F00\u4E86 String \u7C7B\u7684\u6E90\u7801\u3002</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">final</span> <span class="token keyword">class</span> <span class="token class-name">String</span>
    <span class="token keyword">implements</span> <span class="token class-name"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span>Serializable</span><span class="token punctuation">,</span> <span class="token class-name">Comparable</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">,</span> <span class="token class-name">CharSequence</span> <span class="token punctuation">{</span>
    <span class="token doc-comment comment">/** The value is used for character storage. */</span>
    <span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token keyword">char</span> value<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u201C\u6700\u7EC8\u8FD8\u662F\u8981\u7528\u7C7B\u4F3C\u4E00\u79CD\u6570\u7EC4\u7684\u5F62\u5F0F\u6765\u5B58\u653E\u6570\u7EC4\u7684\u5143\u7D20\uFF0C\u5BF9\u5427\uFF1F\u8FD9\u5C31\u53D8\u5F97\u5F88\u6CA1\u6709\u5FC5\u8981\u4E86\uFF0C\u4E0D\u59A8\u5C31\u628A\u6570\u7EC4\u5F53\u505A\u662F\u4E00\u4E2A\u6CA1\u6709\u5F62\u4F53\u7684\u5BF9\u8C61\u5427\uFF01\u201D</p><p>\u201C\u597D\u4E86\uFF0C\u4E0D\u8BA8\u8BBA\u8FD9\u4E2A\u4E86\u3002\u201D\u6211\u6015\u8BDD\u9898\u626F\u8FDC\u4E86\uFF0C\u626F\u5230\u6211\u81EA\u5DF1\u4E5F\u7B54\u4E0D\u51FA\u6765\u5C31\u5C34\u5C2C\u4E86\uFF0C\u8D76\u7D27\u628A\u4E09\u59B9\u7684\u601D\u8DEF\u62FD\u4E86\u56DE\u6765\u3002</p>`,15),m=n("\u201C\u6211\u4EEC\u6765\u770B\u7B2C\u4E00\u79CD\u6253\u5370\u6570\u7EC4\u7684\u65B9\u6CD5\uFF0C\u4F7F\u7528\u65F6\u9AE6\u4E00\u70B9\u7684"),g={href:"https://tobebetterjavaer.com/java8/stream.html",target:"_blank",rel:"noopener noreferrer"},b=n("Stream \u6D41"),h=n("\u3002\u201D"),_=e(`<p>\u7B2C\u4E00\u79CD\u5F62\u5F0F\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">asList</span><span class="token punctuation">(</span>cmowers<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">stream</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span>s <span class="token operator">-&gt;</span> <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u7B2C\u4E8C\u79CD\u5F62\u5F0F\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token class-name">Stream</span><span class="token punctuation">.</span><span class="token function">of</span><span class="token punctuation">(</span>cmowers<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token operator">::</span><span class="token function">println</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u7B2C\u4E09\u79CD\u5F62\u5F0F\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">stream</span><span class="token punctuation">(</span>cmowers<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token operator">::</span><span class="token function">println</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u6253\u5370\u7684\u7ED3\u679C\u5982\u4E0B\u6240\u793A\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u6C89\u9ED8
\u738B\u4E8C
\u4E00\u679A\u6709\u8DA3\u7684\u7A0B\u5E8F\u5458
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),f=n("\u6CA1\u9519\uFF0C\u8FD9\u4E09\u79CD\u65B9\u5F0F\u90FD\u53EF\u4EE5\u8F7B\u677E\u80DC\u4EFB\u672C\u804C\u5DE5\u4F5C\uFF0C\u5E76\u4E14\u663E\u5F97\u6709\u70B9\u9AD8\u5927\u4E0A\uFF0C\u6BD5\u7ADF\u7528\u5230\u4E86 Stream\uFF0C\u4EE5\u53CA "),j={href:"https://tobebetterjavaer.com/java8/Lambda.html",target:"_blank",rel:"noopener noreferrer"},y=n("lambda \u8868\u8FBE\u5F0F"),S=n("\u3002"),x=e(`<p>\u201C\u5F53\u7136\u4E86\uFF0C\u4E5F\u53EF\u4EE5\u4F7F\u7528\u6BD4\u8F83\u571F\u7684\u65B9\u5F0F\uFF0Cfor \u5FAA\u73AF\u3002\u751A\u81F3 for-each \u4E5F\u884C\u3002\u201D</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> cmowers<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>cmowers<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">String</span> s <span class="token operator">:</span> cmowers<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),w=n("\u201C\u54E5\uFF0C\u4F60\u96BE\u9053\u5FD8\u4E86"),q={href:"https://tobebetterjavaer.com/common-tool/arrays.html",target:"_blank",rel:"noopener noreferrer"},A=n("\u4E0A\u4E00\u7BC7"),J=n("\u5728\u8BB2 Arrays \u5DE5\u5177\u7C7B\u7684\u65F6\u5019\uFF0C\u63D0\u5230\u8FC7\u53E6\u5916\u4E00\u79CD\u65B9\u6CD5 "),O=s("code",null,"Arrays.toString()",-1),C=n(" \u5417\uFF1F\u201D\u4E09\u59B9\u770B\u6211\u4E00\u76F4\u8BF4\u4E0D\u5230\u70B9\u5B50\u4E0A\uFF0C\u6709\u70B9\u7740\u6025\u4E86\u3002"),E=e(`<p>\u201C\u5F53\u7136\u6CA1\u6709\u4E86\uFF0C\u6211\u8BA4\u4E3A <code>Arrays.toString()</code> \u662F\u6253\u5370\u6570\u7EC4\u7684\u6700\u4F73\u65B9\u5F0F\uFF0C\u6CA1\u6709\u4E4B\u4E00\u3002\u201D\u6211\u7684\u60C5\u7EEA\u6709\u70B9\u6FC0\u52A8\u3002</p><p><code>Arrays.toString()</code> \u53EF\u4EE5\u5C06\u4EFB\u610F\u7C7B\u578B\u7684\u6570\u7EC4\u8F6C\u6210\u5B57\u7B26\u4E32\uFF0C\u5305\u62EC\u57FA\u672C\u7C7B\u578B\u6570\u7EC4\u548C\u5F15\u7528\u7C7B\u578B\u6570\u7EC4\u3002\u8BE5\u65B9\u6CD5\u6709\u591A\u79CD\u91CD\u8F7D\u5F62\u5F0F\u3002</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/array/print-01.png" alt=""></p><p>\u4F7F\u7528 <code>Arrays.toString()</code> \u65B9\u6CD5\u6765\u6253\u5370\u6570\u7EC4\u518D\u4F18\u96C5\u4E0D\u8FC7\u4E86\uFF0C\u5C31\u50CF\uFF0C\u5C31\u50CF\uFF0C\u5C31\u50CF\u8499\u5A1C\u4E3D\u838E\u7684\u5FAE\u7B11\u3002</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/array/print-02.png" alt=""></p><p>\uFF08\u4E09\u59B9\u770B\u5230\u8FD9\u4E48\u4E00\u526F\u56FE\u7684\u65F6\u5019\u5FCD\u4E0D\u4F4F\u5730\u7B11\u4E86\uFF09</p><p>\u201C\u4E09\u59B9\uFF0C\u4F60\u4E0D\u8981\u7B11\uFF0C\u6765\uFF0C\u6000\u63E3\u7740\u6109\u5FEB\u7684\u5FC3\u60C5\u770B\u4E00\u4E0B\u4EE3\u7801\u793A\u4F8B\u3002\u201D</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token class-name">String</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> cmowers <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">&quot;\u6C89\u9ED8&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;\u738B\u4E8C&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;\u4E00\u679A\u6709\u8DA3\u7684\u7A0B\u5E8F\u5458&quot;</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span>cmowers<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7A0B\u5E8F\u6253\u5370\u7ED3\u679C\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>[\u6C89\u9ED8, \u738B\u4E8C, \u4E00\u679A\u6709\u8DA3\u7684\u7A0B\u5E8F\u5458]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u54C7\uFF0C\u6253\u5370\u683C\u5F0F\u4E0D\u8981\u592A\u5B8C\u7F8E\uFF0C\u4E0D\u591A\u4E0D\u5C11\uFF01\u5B8C\u5168\u662F\u6211\u4EEC\u9884\u671F\u7684\u7ED3\u679C\uFF1A<code>[]</code> \u8868\u660E\u662F\u4E00\u4E2A\u6570\u7EC4\uFF0C<code>,</code> \u70B9\u548C\u7A7A\u683C\u7528\u6765\u5206\u5272\u5143\u7D20\u3002</p><p>\u201C\u54E5\uFF0C\u90A3\u5982\u679C\u6211\u60F3\u6253\u5370\u4E8C\u7EF4\u6570\u7EC4\u5462\uFF1F\u201D</p><p>\u201C\u53EF\u4EE5\u4F7F\u7528 <code>Arrays.deepToString()</code> \u65B9\u6CD5\u3002\u201D</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span> deepArray <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">{</span><span class="token punctuation">{</span><span class="token string">&quot;\u6C89\u9ED8&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;\u738B\u4E8C&quot;</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token string">&quot;\u4E00\u679A\u6709\u8DA3\u7684\u7A0B\u5E8F\u5458&quot;</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">deepToString</span><span class="token punctuation">(</span>deepArray<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6253\u5370\u7ED3\u679C\u5982\u4E0B\u6240\u793A\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>[[\u6C89\u9ED8, \u738B\u4E8C], [\u4E00\u679A\u6709\u8DA3\u7684\u7A0B\u5E8F\u5458]]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><hr><p>\u201C\u8BF4\u5230\u6253\u5370\uFF0C\u4E09\u59B9\uFF0C\u54E5\u7ED9\u4F60\u63D0\u9192\u4E00\u70B9\u3002\u963F\u91CC\u5DF4\u5DF4\u7684 Java \u5F00\u53D1\u624B\u518C\u4E0A\u6709\u8FD9\u6837\u4E00\u6761\u89C4\u7EA6\uFF0C\u4F60\u770B\u3002\u201D</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/array/print-03.png" alt=""></p><p>\u201C\u4EC0\u4E48\u662F POJO \u5462\uFF0C\u5C31\u662F Plain Ordinary Java Object \u7684\u7F29\u5199\uFF0C\u4E00\u822C\u5728 Web \u5E94\u7528\u7A0B\u5E8F\u4E2D\u5EFA\u7ACB\u4E00\u4E2A\u6570\u636E\u5E93\u7684\u6620\u5C04\u5BF9\u8C61\u65F6\uFF0C\u6211\u4EEC\u79F0\u5B83\u4E3A POJO\uFF0C\u8FD9\u7C7B\u5BF9\u8C61\u4E0D\u7EE7\u627F\u6216\u4E0D\u5B9E\u73B0\u4EFB\u4F55\u5176\u5B83 Java \u6846\u67B6\u7684\u7C7B\u6216\u63A5\u53E3\u3002\u201D</p><p>\u201C\u5BF9\u4E8E\u8FD9\u6837\u7684\u7C7B\uFF0C\u6700\u597D\u662F\u91CD\u5199\u4E00\u4E0B\u5B83\u7684 <code>toString()</code> \u65B9\u6CD5\uFF0C\u65B9\u4FBF\u67E5\u770B\u8FD9\u4E2A\u5BF9\u8C61\u5230\u5E95\u5305\u542B\u4E86\u4EC0\u4E48\u5B57\u6BB5\uFF0C\u597D\u6392\u67E5\u95EE\u9898\u3002\u201D</p><p>\u201C\u5982\u679C\u4E0D\u91CD\u5199\u7684\u8BDD\uFF0C\u6253\u5370\u51FA\u6765\u7684 Java \u5BF9\u8C61\u5C31\u50CF\u76F4\u63A5\u6253\u5370\u6570\u7EC4\u7684\u90A3\u6837\uFF0C\u4E00\u4E32\u8C01\u4E5F\u770B\u4E0D\u61C2\u7684\u5B57\u7B26\u5E8F\u5217\u3002\u201D</p><p>\u201C\u53EF\u4EE5\u501F\u52A9 Intellij IDEA \u751F\u6210\u91CD\u5199\u7684 <code>toString()</code> \u65B9\u6CD5\uFF0C\u7279\u522B\u65B9\u4FBF\u3002\u201D</p><p>\u201C\u597D\u7684\uFF0C\u54E5\uFF0C\u6211\u8BB0\u4F4F\u4E86\u3002\u4EE5\u540E\u9047\u5230\u7684\u8BDD\uFF0C\u6211\u6CE8\u610F\u4E0B\u3002\u4F60\u53BB\u4F11\u606F\u5427\uFF0C\u6211\u6765\u6572\u4E00\u4E0B\u4F60\u63D0\u5230\u7684\u8FD9\u4E9B\u4EE3\u7801\uFF0C\u7EC3\u4E00\u7EC3\u3002\u201D</p><p>\u201COK\uFF0C\u6211\u8D70\uFF0C\u6211\u8D70\u3002\u201D</p><hr>`,26),L=n("\u6700\u8FD1\u6574\u7406\u4E86\u4E00\u4EFD\u725B\u903C\u7684\u5B66\u4E60\u8D44\u6599\uFF0C\u5305\u62EC\u4F46\u4E0D\u9650\u4E8EJava\u57FA\u7840\u90E8\u5206\uFF08JVM\u3001Java\u96C6\u5408\u6846\u67B6\u3001\u591A\u7EBF\u7A0B\uFF09\uFF0C\u8FD8\u56CA\u62EC\u4E86 "),N=s("strong",null,"\u6570\u636E\u5E93\u3001\u8BA1\u7B97\u673A\u7F51\u7EDC\u3001\u7B97\u6CD5\u4E0E\u6570\u636E\u7ED3\u6784\u3001\u8BBE\u8BA1\u6A21\u5F0F\u3001\u6846\u67B6\u7C7BSpring\u3001Netty\u3001\u5FAE\u670D\u52A1\uFF08Dubbo\uFF0C\u6D88\u606F\u961F\u5217\uFF09 \u7F51\u5173",-1),I=n(" \u7B49\u7B49\u7B49\u7B49\u2026\u2026\u8BE6\u60C5\u6233\uFF1A"),V={href:"https://tobebetterjavaer.com/pdf/programmer-111.html",target:"_blank",rel:"noopener noreferrer"},P=n("\u53EF\u4EE5\u8BF4\u662F2022\u5E74\u5168\u7F51\u6700\u5168\u7684\u5B66\u4E60\u548C\u627E\u5DE5\u4F5C\u7684PDF\u8D44\u6E90\u4E86"),T=s("p",null,[n("\u5173\u6CE8\u4E8C\u54E5\u7684\u539F\u521B\u516C\u4F17\u53F7 "),s("strong",null,"\u6C89\u9ED8\u738B\u4E8C"),n("\uFF0C\u56DE\u590D"),s("strong",null,"111"),n(" \u5373\u53EF\u514D\u8D39\u9886\u53D6\u3002")],-1),B=s("p",null,[s("img",{src:"http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/xingbiaogongzhonghao.png",alt:""})],-1);function D(z,F){const a=o("ExternalLinkIcon");return c(),l("div",null,[s("p",null,[u,s("a",r,[d,t(a)]),k]),v,s("p",null,[m,s("a",g,[b,t(a)]),h]),_,s("p",null,[f,s("a",j,[y,t(a)]),S]),x,s("p",null,[w,s("a",q,[A,t(a)]),J,O,C]),E,s("p",null,[L,N,I,s("a",V,[P,t(a)])]),T,B])}var M=p(i,[["render",D],["__file","print.html.vue"]]);export{M as default};
