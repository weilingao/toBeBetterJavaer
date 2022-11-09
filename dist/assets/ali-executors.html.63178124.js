import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{r as t,o,c as l,a as n,b as p,e as c,d as a}from"./app.0d3123da.js";const i={},u=c(`<h1 id="\u4E3A\u4EC0\u4E48\u963F\u91CC\u5DF4\u5DF4\u8981\u7981\u7528executors\u521B\u5EFA\u7EBF\u7A0B\u6C60" tabindex="-1"><a class="header-anchor" href="#\u4E3A\u4EC0\u4E48\u963F\u91CC\u5DF4\u5DF4\u8981\u7981\u7528executors\u521B\u5EFA\u7EBF\u7A0B\u6C60" aria-hidden="true">#</a> \u4E3A\u4EC0\u4E48\u963F\u91CC\u5DF4\u5DF4\u8981\u7981\u7528Executors\u521B\u5EFA\u7EBF\u7A0B\u6C60\uFF1F</h1><p>\u770B\u963F\u91CC\u5DF4\u5DF4\u5F00\u53D1\u624B\u518C\u5E76\u53D1\u7F16\u7A0B\u8FD9\u5757\u6709\u4E00\u6761\uFF1A<strong>\u7EBF\u7A0B\u6C60\u4E0D\u5141\u8BB8\u4F7F\u7528 Executors \u53BB\u521B\u5EFA\uFF0C\u800C\u662F\u901A\u8FC7 ThreadPoolExecutor \u7684\u65B9\u5F0F</strong>\uFF0C\u4ECA\u5929\u6211\u4EEC\u6765\u901A\u8FC7\u6E90\u7801\u5206\u6790\u4E00\u4E0B\u7981\u7528\u7684\u539F\u56E0\u3002</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/thread/ali-executors-1.png" alt=""></p><p>\u901A\u8FC7\u9605\u8BFB\u672C\u7BC7\u6587\u7AE0\u4F60\u5C06\u4E86\u89E3\u5230\uFF1A</p><ul><li>\u7EBF\u7A0B\u6C60\u7684\u5B9A\u4E49</li><li>Executors \u521B\u5EFA\u7EBF\u7A0B\u6C60\u7684\u51E0\u79CD\u65B9\u5F0F</li><li>ThreadPoolExecutor \u5BF9\u8C61</li><li>\u7EBF\u7A0B\u6C60\u6267\u884C\u4EFB\u52A1\u903B\u8F91\u548C\u7EBF\u7A0B\u6C60\u53C2\u6570\u7684\u5173\u7CFB</li><li>Executors \u521B\u5EFA\u8FD4\u56DE ThreadPoolExecutor \u5BF9\u8C61</li><li>OOM \u5F02\u5E38\u6D4B\u8BD5</li><li>\u5982\u4F55\u5B9A\u4E49\u7EBF\u7A0B\u6C60\u53C2\u6570</li></ul><p>\u5982\u679C\u53EA\u60F3\u77E5\u9053\u539F\u56E0\u53EF\u4EE5\u76F4\u63A5\u62C9\u5230\u6587\u672B\u603B\u7ED3\u90A3\u3002</p><h3 id="\u4E00\u3001\u7EBF\u7A0B\u6C60\u7684\u5B9A\u4E49" tabindex="-1"><a class="header-anchor" href="#\u4E00\u3001\u7EBF\u7A0B\u6C60\u7684\u5B9A\u4E49" aria-hidden="true">#</a> \u4E00\u3001\u7EBF\u7A0B\u6C60\u7684\u5B9A\u4E49</h3><p>\u7BA1\u7406\u4E00\u7EC4\u5DE5\u4F5C\u7EBF\u7A0B\u3002\u901A\u8FC7\u7EBF\u7A0B\u6C60\u590D\u7528\u7EBF\u7A0B\u6709\u4EE5\u4E0B\u51E0\u70B9\u4F18\u70B9\uFF1A</p><ul><li>\u51CF\u5C11\u8D44\u6E90\u521B\u5EFA =&gt; \u51CF\u5C11\u5185\u5B58\u5F00\u9500\uFF0C\u521B\u5EFA\u7EBF\u7A0B\u5360\u7528\u5185\u5B58</li><li>\u964D\u4F4E\u7CFB\u7EDF\u5F00\u9500 =&gt; \u521B\u5EFA\u7EBF\u7A0B\u9700\u8981\u65F6\u95F4\uFF0C\u4F1A\u5EF6\u8FDF\u5904\u7406\u7684\u8BF7\u6C42</li><li>\u63D0\u9AD8\u7A33\u5B9A\u7A33\u5B9A\u6027 =&gt; \u907F\u514D\u65E0\u9650\u521B\u5EFA\u7EBF\u7A0B\u5F15\u8D77\u7684 OutOfMemoryError\u3010\u7B80\u79F0 OOM\u3011</li></ul><p>Executors \u521B\u5EFA\u7EBF\u7A0B\u6C60\u7684\u65B9\u5F0F\uFF0C\u6839\u636E\u8FD4\u56DE\u7684\u5BF9\u8C61\u7C7B\u578B\u521B\u5EFA\u7EBF\u7A0B\u6C60\u53EF\u4EE5\u5206\u4E3A\u4E09\u7C7B\uFF1A</p><ul><li>\u521B\u5EFA\u8FD4\u56DE ThreadPoolExecutor \u5BF9\u8C61</li><li>\u521B\u5EFA\u8FD4\u56DE ScheduleThreadPoolExecutor \u5BF9\u8C61</li><li>\u521B\u5EFA\u8FD4\u56DE ForkJoinPool \u5BF9\u8C61</li></ul><p>\u672C\u6587\u53EA\u8BA8\u8BBA\u521B\u5EFA\u8FD4\u56DE ThreadPoolExecutor \u5BF9\u8C61\u3002</p><h3 id="\u4E8C\u3001threadpoolexecutor-\u5BF9\u8C61" tabindex="-1"><a class="header-anchor" href="#\u4E8C\u3001threadpoolexecutor-\u5BF9\u8C61" aria-hidden="true">#</a> \u4E8C\u3001ThreadPoolExecutor \u5BF9\u8C61</h3><p>\u5728\u4ECB\u7ECD Executors \u521B\u5EFA\u7EBF\u7A0B\u6C60\u65B9\u6CD5\u524D\u5148\u4ECB\u7ECD\u4E00\u4E0B ThreadPoolExecutor\uFF0C\u56E0\u4E3A\u8FD9\u4E9B\u521B\u5EFA\u7EBF\u7A0B\u6C60\u7684\u9759\u6001\u65B9\u6CD5\u90FD\u662F\u8FD4\u56DE ThreadPoolExecutor \u5BF9\u8C61\uFF0C\u548C\u6211\u4EEC\u624B\u52A8\u521B\u5EFA ThreadPoolExecutor \u5BF9\u8C61\u7684\u533A\u522B\u5C31\u662F\u6211\u4EEC\u4E0D\u9700\u8981\u81EA\u5DF1\u4F20\u6784\u9020\u65B9\u6CD5\u7684\u53C2\u6570\u3002</p><p>ThreadPoolExecutor \u7684\u6784\u9020\u65B9\u6CD5\u5171\u6709\u56DB\u4E2A\uFF0C\u4F46\u6700\u7EC8\u8C03\u7528\u7684\u90FD\u662F\u540C\u4E00\u4E2A\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token class-name">ThreadPoolExecutor</span><span class="token punctuation">(</span><span class="token keyword">int</span> corePoolSize<span class="token punctuation">,</span>
 <span class="token keyword">int</span> maximumPoolSize<span class="token punctuation">,</span>
 <span class="token keyword">long</span> keepAliveTime<span class="token punctuation">,</span>
 <span class="token class-name">TimeUnit</span> unit<span class="token punctuation">,</span>
 <span class="token class-name">BlockingQueue</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Runnable</span><span class="token punctuation">&gt;</span></span> workQueue<span class="token punctuation">,</span>
 <span class="token class-name">ThreadFactory</span> threadFactory<span class="token punctuation">,</span>
 <span class="token class-name">RejectedExecutionHandler</span> handler<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4EE3\u7801\u6784\u9020\u65B9\u6CD5\u7684\u53C2\u6570\u8BF4\u660E\uFF1A</p><ul><li>corePoolSize =&gt; \u7EBF\u7A0B\u6C60\u6838\u5FC3\u7EBF\u7A0B\u6570\u91CF</li><li>maximumPoolSize =&gt; \u7EBF\u7A0B\u6C60\u6700\u5927\u6570\u91CF</li><li>keepAliveTime =&gt; \u7A7A\u95F2\u7EBF\u7A0B\u5B58\u6D3B\u65F6\u95F4</li><li>unit =&gt; \u65F6\u95F4\u5355\u4F4D</li><li>workQueue =&gt; \u7EBF\u7A0B\u6C60\u6240\u4F7F\u7528\u7684\u7F13\u51B2\u961F\u5217</li><li>threadFactory =&gt; \u7EBF\u7A0B\u6C60\u521B\u5EFA\u7EBF\u7A0B\u4F7F\u7528\u7684\u5DE5\u5382</li><li>handler =&gt; \u7EBF\u7A0B\u6C60\u5BF9\u62D2\u7EDD\u4EFB\u52A1\u7684\u5904\u7406\u7B56\u7565</li></ul><p>\u7EBF\u7A0B\u6C60\u6267\u884C\u4EFB\u52A1\u903B\u8F91\u548C\u7EBF\u7A0B\u6C60\u53C2\u6570\u7684\u5173\u7CFB\u3002</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/thread/ali-executors-2.png" alt=""></p><p>\u6267\u884C\u903B\u8F91\u8BF4\u660E\uFF1A</p><ul><li>\u5224\u65AD\u6838\u5FC3\u7EBF\u7A0B\u6570\u662F\u5426\u5DF2\u6EE1\uFF0C\u6838\u5FC3\u7EBF\u7A0B\u6570\u5927\u5C0F\u548C corePoolSize \u53C2\u6570\u6709\u5173\uFF0C\u672A\u6EE1\u5219\u521B\u5EFA\u7EBF\u7A0B\u6267\u884C\u4EFB\u52A1</li><li>\u82E5\u6838\u5FC3\u7EBF\u7A0B\u6C60\u5DF2\u6EE1\uFF0C\u5224\u65AD\u961F\u5217\u662F\u5426\u6EE1\uFF0C\u961F\u5217\u662F\u5426\u6EE1\u548C workQueue \u53C2\u6570\u6709\u5173\uFF0C\u82E5\u672A\u6EE1\u5219\u52A0\u5165\u961F\u5217\u4E2D</li><li>\u82E5\u961F\u5217\u5DF2\u6EE1\uFF0C\u5224\u65AD\u7EBF\u7A0B\u6C60\u662F\u5426\u5DF2\u6EE1\uFF0C\u7EBF\u7A0B\u6C60\u662F\u5426\u5DF2\u6EE1\u548C maximumPoolSize \u53C2\u6570\u6709\u5173\uFF0C\u82E5\u672A\u6EE1\u521B\u5EFA\u7EBF\u7A0B\u6267\u884C\u4EFB\u52A1</li><li>\u82E5\u7EBF\u7A0B\u6C60\u5DF2\u6EE1\uFF0C\u5219\u91C7\u7528\u62D2\u7EDD\u7B56\u7565\u5904\u7406\u65E0\u6CD5\u6267\u6267\u884C\u7684\u4EFB\u52A1\uFF0C\u62D2\u7EDD\u7B56\u7565\u548C handler \u53C2\u6570\u6709\u5173</li></ul><p>Executors \u521B\u5EFA\u8FD4\u56DE ThreadPoolExecutor \u5BF9\u8C61\u7684\u65B9\u6CD5\u5171\u6709\u4E09\u79CD\uFF1A</p><ul><li>Executors.newCachedThreadPool =&gt; \u521B\u5EFA\u53EF\u7F13\u5B58\u7684\u7EBF\u7A0B\u6C60</li><li>Executors#.newSingleThreadExecutor =&gt; \u521B\u5EFA\u5355\u7EBF\u7A0B\u7684\u7EBF\u7A0B\u6C60</li><li>Executors.newFixedThreadPool =&gt; \u521B\u5EFA\u56FA\u5B9A\u957F\u5EA6\u7684\u7EBF\u7A0B\u6C60</li></ul><p>Executors.newCachedThreadPool \u65B9\u6CD5\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">ExecutorService</span> <span class="token function">newCachedThreadPool</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">ThreadPoolExecutor</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token class-name">Integer</span><span class="token punctuation">.</span>MAX_VALUE<span class="token punctuation">,</span>
<span class="token number">60L</span><span class="token punctuation">,</span> <span class="token class-name">TimeUnit</span><span class="token punctuation">.</span>SECONDS<span class="token punctuation">,</span>
<span class="token keyword">new</span> <span class="token class-name">SynchronousQueue</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Runnable</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>CachedThreadPool \u662F\u4E00\u4E2A\u6839\u636E\u9700\u8981\u521B\u5EFA\u65B0\u7EBF\u7A0B\u7684\u7EBF\u7A0B\u6C60\uFF1A</p><ul><li>corePoolSize =&gt; 0\uFF0C\u6838\u5FC3\u7EBF\u7A0B\u6C60\u7684\u6570\u91CF\u4E3A 0</li><li>maximumPoolSize =&gt; Integer.MAX_VALUE\uFF0C\u7EBF\u7A0B\u6C60\u6700\u5927\u6570\u91CF\u4E3A Integer.MAX_VALUE\uFF0C\u53EF\u4EE5\u8BA4\u4E3A\u53EF\u4EE5\u65E0\u9650\u521B\u5EFA\u7EBF\u7A0B</li><li>keepAliveTime =&gt; 60L</li><li>unit =&gt; \u79D2</li><li>workQueue =&gt; SynchronousQueue</li></ul><p>\u5F53\u4E00\u4E2A\u4EFB\u52A1\u63D0\u4EA4\u65F6\uFF0CcorePoolSize \u4E3A 0 \u4E0D\u521B\u5EFA\u6838\u5FC3\u7EBF\u7A0B\uFF0CSynchronousQueue \u662F\u4E00\u4E2A\u4E0D\u5B58\u50A8\u5143\u7D20\u7684\u961F\u5217\uFF0C\u53EF\u4EE5\u7406\u89E3\u4E3A\u961F\u91CC\u6C38\u8FDC\u662F\u6EE1\u7684\uFF0C\u56E0\u6B64\u6700\u7EC8\u4F1A\u521B\u5EFA\u975E\u6838\u5FC3\u7EBF\u7A0B\u6765\u6267\u884C\u4EFB\u52A1\u3002</p><p>\u5BF9\u4E8E\u975E\u6838\u5FC3\u7EBF\u7A0B\u7A7A\u95F2 60s \u65F6\u5C06\u88AB\u56DE\u6536\u3002\u56E0\u4E3A Integer.MAX_VALUE \u975E\u5E38\u5927\uFF0C\u53EF\u4EE5\u8BA4\u4E3A\u662F\u53EF\u4EE5\u65E0\u9650\u521B\u5EFA\u7EBF\u7A0B\u7684\uFF0C\u5728\u8D44\u6E90\u6709\u9650\u7684\u60C5\u51B5\u4E0B\u5BB9\u6613\u5F15\u8D77 OOM \u5F02\u5E38\u3002</p><p>Executors.newSingleThreadExecutor \u65B9\u6CD5\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">ExecutorService</span> <span class="token function">newSingleThreadExecutor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">FinalizableDelegatedExecutorService</span>
<span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">ThreadPoolExecutor</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span>
<span class="token number">0L</span><span class="token punctuation">,</span> <span class="token class-name">TimeUnit</span><span class="token punctuation">.</span>MILLISECONDS<span class="token punctuation">,</span>
<span class="token keyword">new</span> <span class="token class-name">LinkedBlockingQueue</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Runnable</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>SingleThreadExecutor \u662F\u5355\u7EBF\u7A0B\u7EBF\u7A0B\u6C60\uFF0C\u53EA\u6709\u4E00\u4E2A\u6838\u5FC3\u7EBF\u7A0B\uFF1A</p><ul><li>corePoolSize =&gt; 1\uFF0C\u6838\u5FC3\u7EBF\u7A0B\u6C60\u7684\u6570\u91CF\u4E3A 1</li><li>maximumPoolSize =&gt; 1\uFF0C\u7EBF\u7A0B\u6C60\u6700\u5927\u6570\u91CF\u4E3A 1\uFF0C\u5373\u6700\u591A\u53EA\u53EF\u4EE5\u521B\u5EFA\u4E00\u4E2A\u7EBF\u7A0B\uFF0C\u552F\u4E00\u7684\u7EBF\u7A0B\u5C31\u662F\u6838\u5FC3\u7EBF\u7A0B</li><li>keepAliveTime =&gt; 0L</li><li>unit =&gt; \u6BEB\u79D2</li><li>workQueue =&gt; LinkedBlockingQueue</li></ul><p>\u5F53\u4E00\u4E2A\u4EFB\u52A1\u63D0\u4EA4\u65F6\uFF0C\u9996\u5148\u4F1A\u521B\u5EFA\u4E00\u4E2A\u6838\u5FC3\u7EBF\u7A0B\u6765\u6267\u884C\u4EFB\u52A1\uFF0C\u5982\u679C\u8D85\u8FC7\u6838\u5FC3\u7EBF\u7A0B\u7684\u6570\u91CF\uFF0C\u5C06\u4F1A\u653E\u5165\u961F\u5217\u4E2D\uFF0C\u56E0\u4E3A LinkedBlockingQueue \u662F\u957F\u5EA6\u4E3A Integer.MAX_VALUE \u7684\u961F\u5217\uFF0C\u53EF\u4EE5\u8BA4\u4E3A\u662F\u65E0\u754C\u961F\u5217\uFF0C\u56E0\u6B64\u5F80\u961F\u5217\u4E2D\u53EF\u4EE5\u63D2\u5165\u65E0\u9650\u591A\u7684\u4EFB\u52A1\uFF0C\u5728\u8D44\u6E90\u6709\u9650\u7684\u65F6\u5019\u5BB9\u6613\u5F15\u8D77 OOM \u5F02\u5E38\uFF0C\u540C\u65F6\u56E0\u4E3A\u65E0\u754C\u961F\u5217\uFF0CmaximumPoolSize \u548C keepAliveTime \u53C2\u6570\u5C06\u65E0\u6548\uFF0C\u538B\u6839\u5C31\u4E0D\u4F1A\u521B\u5EFA\u975E\u6838\u5FC3\u7EBF\u7A0B\u3002</p><p>Executors.newFixedThreadPool \u65B9\u6CD5</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">ExecutorService</span> <span class="token function">newFixedThreadPool</span><span class="token punctuation">(</span><span class="token keyword">int</span> nThreads<span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">ThreadPoolExecutor</span><span class="token punctuation">(</span>nThreads<span class="token punctuation">,</span> nThreads<span class="token punctuation">,</span>
<span class="token number">0L</span><span class="token punctuation">,</span> <span class="token class-name">TimeUnit</span><span class="token punctuation">.</span>MILLISECONDS<span class="token punctuation">,</span>
<span class="token keyword">new</span> <span class="token class-name">LinkedBlockingQueue</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Runnable</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>FixedThreadPool \u662F\u56FA\u5B9A\u6838\u5FC3\u7EBF\u7A0B\u7684\u7EBF\u7A0B\u6C60\uFF0C\u56FA\u5B9A\u6838\u5FC3\u7EBF\u7A0B\u6570\u7531\u7528\u6237\u4F20\u5165\uFF1A</p><ul><li>corePoolSize =&gt; nThreads\uFF0C\u6838\u5FC3\u7EBF\u7A0B\u6C60\u7684\u6570\u91CF\u4E3A 1</li><li>maximumPoolSize =&gt; nThreads\uFF0C\u7EBF\u7A0B\u6C60\u6700\u5927\u6570\u91CF\u4E3A nThreads\uFF0C\u5373\u6700\u591A\u53EA\u53EF\u4EE5\u521B\u5EFA nThreads \u4E2A\u7EBF\u7A0B</li><li>keepAliveTime =&gt; 0L</li><li>unit =&gt; \u6BEB\u79D2</li><li>workQueue =&gt; LinkedBlockingQueue</li></ul><p>\u5B83\u548C SingleThreadExecutor \u7C7B\u4F3C\uFF0C\u552F\u4E00\u7684\u533A\u522B\u5C31\u662F\u6838\u5FC3\u7EBF\u7A0B\u6570\u4E0D\u540C\uFF0C\u5E76\u4E14\u7531\u4E8E\u4F7F\u7528\u7684\u662F LinkedBlockingQueue\uFF0C\u5728\u8D44\u6E90\u6709\u9650\u7684\u65F6\u5019\u5BB9\u6613\u5F15\u8D77 OOM \u5F02\u5E38\u3002</p><h3 id="\u4E09\u3001\u603B\u7ED3" tabindex="-1"><a class="header-anchor" href="#\u4E09\u3001\u603B\u7ED3" aria-hidden="true">#</a> \u4E09\u3001\u603B\u7ED3\uFF1A</h3><ul><li>FixedThreadPool \u548C SingleThreadExecutor =&gt; \u5141\u8BB8\u7684\u8BF7\u6C42\u961F\u5217\u957F\u5EA6\u4E3A Integer.MAX_VALUE\uFF0C\u53EF\u80FD\u4F1A\u5806\u79EF\u5927\u91CF\u7684\u8BF7\u6C42\uFF0C\u4ECE\u800C\u5F15\u8D77 OOM \u5F02\u5E38</li><li>CachedThreadPool =&gt; \u5141\u8BB8\u521B\u5EFA\u7684\u7EBF\u7A0B\u6570\u4E3A Integer.MAX_VALUE\uFF0C\u53EF\u80FD\u4F1A\u521B\u5EFA\u5927\u91CF\u7684\u7EBF\u7A0B\uFF0C\u4ECE\u800C\u5F15\u8D77 OOM \u5F02\u5E38</li></ul><p>\u8FD9\u5C31\u662F\u4E3A\u4EC0\u4E48\u7981\u6B62\u4F7F\u7528 Executors \u53BB\u521B\u5EFA\u7EBF\u7A0B\u6C60\uFF0C\u800C\u662F\u63A8\u8350\u81EA\u5DF1\u53BB\u521B\u5EFA ThreadPoolExecutor \u7684\u539F\u56E0\u3002</p><p><strong>OOM \u5F02\u5E38\u6D4B\u8BD5</strong></p><p>\u7406\u8BBA\u4E0A\u4F1A\u51FA\u73B0 OOM \u5F02\u5E38\uFF0C\u5FC5\u987B\u6D4B\u8BD5\u4E00\u6CE2\u9A8C\u8BC1\u4E4B\u524D\u7684\u8BF4\u6CD5\u3002</p><p>\u6D4B\u8BD5\u7C7B\uFF1ATaskTest.java</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TaskTest</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">ExecutorService</span> es <span class="token operator">=</span> <span class="token class-name">Executors</span><span class="token punctuation">.</span><span class="token function">newCachedThreadPool</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            es<span class="token punctuation">.</span><span class="token function">submit</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Task</span><span class="token punctuation">(</span>i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4F7F\u7528 Executors \u521B\u5EFA\u7684 CachedThreadPool\uFF0C\u5F80\u7EBF\u7A0B\u6C60\u4E2D\u65E0\u9650\u6DFB\u52A0\u7EBF\u7A0B\u3002</p><p>\u5728\u542F\u52A8\u6D4B\u8BD5\u7C7B\u4E4B\u524D\u5148\u5C06 JVM \u5185\u5B58\u8C03\u6574\u5C0F\u4E00\u70B9\uFF0C\u4E0D\u7136\u5F88\u5BB9\u6613\u5C06\u7535\u8111\u8DD1\u51FA\u95EE\u9898\u3010\u522B\u95EE\u6211\u4E3A\u4EC0\u4E48\u77E5\u9053\uFF0C\u662F\u94C1\u61A8\u61A8\u6CA1\u9519\u4E86\uFF01\uFF01\uFF01\u3011\uFF0C\u5728 idea \u91CC\uFF1ARun -&gt; Edit Configurations\u3002</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/thread/ali-executors-3.png" alt=""></p><p>JVM \u53C2\u6570\u8BF4\u660E\uFF1A</p><ul><li>-Xms10M =&gt; Java Heap \u5185\u5B58\u521D\u59CB\u5316\u503C</li><li>-Xmx10M =&gt; Java Heap \u5185\u5B58\u6700\u5927\u503C</li></ul><p>\u8FD0\u884C\u7ED3\u679C\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Exception: java.lang.OutOfMemoryError thrown from the UncaughtExceptionHandler in thread &quot;main&quot;
Disconnected from the target VM, address: &#39;127.0.0.1:60416&#39;, transport: &#39;socket&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u521B\u5EFA\u5230 3w \u591A\u4E2A\u7EBF\u7A0B\u7684\u65F6\u5019\u5F00\u59CB\u62A5 OOM \u9519\u8BEF\u3002</p><p>\u53E6\u5916\u4E24\u4E2A\u7EBF\u7A0B\u6C60\u5C31\u4E0D\u505A\u6D4B\u8BD5\u4E86\uFF0C\u6D4B\u8BD5\u65B9\u6CD5\u4E00\u81F4\uFF0C\u53EA\u662F\u521B\u5EFA\u7684\u7EBF\u7A0B\u6C60\u4E0D\u4E00\u6837\u3002</p><h3 id="\u56DB\u3001\u5982\u4F55\u5B9A\u4E49\u7EBF\u7A0B\u6C60\u53C2\u6570" tabindex="-1"><a class="header-anchor" href="#\u56DB\u3001\u5982\u4F55\u5B9A\u4E49\u7EBF\u7A0B\u6C60\u53C2\u6570" aria-hidden="true">#</a> \u56DB\u3001\u5982\u4F55\u5B9A\u4E49\u7EBF\u7A0B\u6C60\u53C2\u6570</h3><p><strong>1\uFF09CPU \u5BC6\u96C6\u578B</strong></p><p>\u7EBF\u7A0B\u6C60\u7684\u5927\u5C0F\u63A8\u8350\u4E3A CPU \u6570\u91CF + 1\uFF0CCPU \u6570\u91CF\u53EF\u4EE5\u6839\u636E Runtime.availableProcessors \u65B9\u6CD5\u83B7\u53D6</p><p><strong>2\uFF09IO \u5BC6\u96C6\u578B</strong></p><p>CPU \u6570\u91CF * CPU \u5229\u7528\u7387 * (1 + \u7EBF\u7A0B\u7B49\u5F85\u65F6\u95F4/\u7EBF\u7A0B CPU \u65F6\u95F4)</p><p><strong>3\uFF09\u6DF7\u5408\u578B</strong></p><p>\u5C06\u4EFB\u52A1\u5206\u4E3A CPU \u5BC6\u96C6\u578B\u548C IO \u5BC6\u96C6\u578B\uFF0C\u7136\u540E\u5206\u522B\u4F7F\u7528\u4E0D\u540C\u7684\u7EBF\u7A0B\u6C60\u53BB\u5904\u7406\uFF0C\u4ECE\u800C\u4F7F\u6BCF\u4E2A\u7EBF\u7A0B\u6C60\u53EF\u4EE5\u6839\u636E\u5404\u81EA\u7684\u5DE5\u4F5C\u8D1F\u8F7D\u6765\u8C03\u6574\u3002</p><p><strong>4\uFF09\u963B\u585E\u961F\u5217</strong></p><p>\u63A8\u8350\u4F7F\u7528\u6709\u754C\u961F\u5217\uFF0C\u6709\u754C\u961F\u5217\u6709\u52A9\u4E8E\u907F\u514D\u8D44\u6E90\u8017\u5C3D\u7684\u60C5\u51B5\u53D1\u751F</p><p><strong>5\uFF09\u62D2\u7EDD\u7B56\u7565</strong></p><p>\u9ED8\u8BA4\u91C7\u7528\u7684\u662F AbortPolicy \u62D2\u7EDD\u7B56\u7565\uFF0C\u76F4\u63A5\u5728\u7A0B\u5E8F\u4E2D\u629B\u51FA RejectedExecutionException \u5F02\u5E38\u3010\u56E0\u4E3A\u662F\u8FD0\u884C\u65F6\u5F02\u5E38\uFF0C\u4E0D\u5F3A\u5236 catch\u3011\uFF0C\u8FD9\u79CD\u5904\u7406\u65B9\u5F0F\u4E0D\u591F\u4F18\u96C5\u3002</p><p>\u5904\u7406\u62D2\u7EDD\u7B56\u7565\u6709\u4EE5\u4E0B\u51E0\u79CD\u6BD4\u8F83\u63A8\u8350\uFF1A</p><ul><li>\u5728\u7A0B\u5E8F\u4E2D\u6355\u83B7 RejectedExecutionException \u5F02\u5E38\uFF0C\u5728\u6355\u83B7\u5F02\u5E38\u4E2D\u5BF9\u4EFB\u52A1\u8FDB\u884C\u5904\u7406\u3002\u9488\u5BF9\u9ED8\u8BA4\u62D2\u7EDD\u7B56\u7565</li><li>\u4F7F\u7528 CallerRunsPolicy \u62D2\u7EDD\u7B56\u7565\uFF0C\u8BE5\u7B56\u7565\u4F1A\u5C06\u4EFB\u52A1\u4EA4\u7ED9\u8C03\u7528 execute \u7684\u7EBF\u7A0B\u6267\u884C\u3010\u4E00\u822C\u4E3A\u4E3B\u7EBF\u7A0B\u3011\uFF0C\u6B64\u65F6\u4E3B\u7EBF\u7A0B\u5C06\u5728\u4E00\u6BB5\u65F6\u95F4\u5185\u4E0D\u80FD\u63D0\u4EA4\u4EFB\u4F55\u4EFB\u52A1\uFF0C\u4ECE\u800C\u4F7F\u5DE5\u4F5C\u7EBF\u7A0B\u5904\u7406\u6B63\u5728\u6267\u884C\u7684\u4EFB\u52A1\u3002\u6B64\u65F6\u63D0\u4EA4\u7684\u7EBF\u7A0B\u5C06\u88AB\u4FDD\u5B58\u5728 TCP \u961F\u5217\u4E2D\uFF0CTCP \u961F\u5217\u6EE1\u5C06\u4F1A\u5F71\u54CD\u5BA2\u6237\u7AEF\uFF0C\u8FD9\u662F\u4E00\u79CD\u5E73\u7F13\u7684\u6027\u80FD\u964D\u4F4E</li><li>\u81EA\u5B9A\u4E49\u62D2\u7EDD\u7B56\u7565\uFF0C\u53EA\u9700\u8981\u5B9E\u73B0 RejectedExecutionHandler \u63A5\u53E3\u5373\u53EF</li><li>\u5982\u679C\u4EFB\u52A1\u4E0D\u662F\u7279\u522B\u91CD\u8981\uFF0C\u4F7F\u7528 DiscardPolicy \u548C DiscardOldestPolicy \u62D2\u7EDD\u7B56\u7565\u5C06\u4EFB\u52A1\u4E22\u5F03\u4E5F\u662F\u53EF\u4EE5\u7684</li></ul><p>\u5982\u679C\u4F7F\u7528 Executors \u7684\u9759\u6001\u65B9\u6CD5\u521B\u5EFA ThreadPoolExecutor \u5BF9\u8C61\uFF0C\u53EF\u4EE5\u901A\u8FC7\u4F7F\u7528 Semaphore \u5BF9\u4EFB\u52A1\u7684\u6267\u884C\u8FDB\u884C\u9650\u6D41\u4E5F\u53EF\u4EE5\u907F\u514D\u51FA\u73B0 OOM \u5F02\u5E38\u3002</p><p>\u7531\u4E8E\u7EBF\u7A0B\u6C60\u53C2\u6570\u5B9A\u4E49\u7ECF\u9A8C\u8F83\u5C11\uFF0C\u90FD\u662F\u7406\u8BBA\u77E5\u8BC6\uFF0C\u6B22\u8FCE\u6709\u7ECF\u9A8C\u7684\u5927\u4F6C\u5728\u8BC4\u8BBA\u533A\u8865\u5145\u3002</p><hr><blockquote><p>\u7F16\u8F91\uFF1A\u6C89\u9ED8\u738B\u4E8C \u8F6C\u8F7D\u94FE\u63A5\uFF1Ahttps://mp.weixin.qq.com/s/dd_IPt7lQQeIMH7YTdgLIw \u539F\u6587\u94FE\u63A5\uFF1Ahttps://juejin.cn/post/6844903989675458574</p></blockquote><hr>`,74),r=a("\u6700\u8FD1\u6574\u7406\u4E86\u4E00\u4EFD\u725B\u903C\u7684\u5B66\u4E60\u8D44\u6599\uFF0C\u5305\u62EC\u4F46\u4E0D\u9650\u4E8EJava\u57FA\u7840\u90E8\u5206\uFF08JVM\u3001Java\u96C6\u5408\u6846\u67B6\u3001\u591A\u7EBF\u7A0B\uFF09\uFF0C\u8FD8\u56CA\u62EC\u4E86 "),d=n("strong",null,"\u6570\u636E\u5E93\u3001\u8BA1\u7B97\u673A\u7F51\u7EDC\u3001\u7B97\u6CD5\u4E0E\u6570\u636E\u7ED3\u6784\u3001\u8BBE\u8BA1\u6A21\u5F0F\u3001\u6846\u67B6\u7C7BSpring\u3001Netty\u3001\u5FAE\u670D\u52A1\uFF08Dubbo\uFF0C\u6D88\u606F\u961F\u5217\uFF09 \u7F51\u5173",-1),k=a(" \u7B49\u7B49\u7B49\u7B49\u2026\u2026\u8BE6\u60C5\u6233\uFF1A"),m={href:"https://tobebetterjavaer.com/pdf/programmer-111.html",target:"_blank",rel:"noopener noreferrer"},v=a("\u53EF\u4EE5\u8BF4\u662F2022\u5E74\u5168\u7F51\u6700\u5168\u7684\u5B66\u4E60\u548C\u627E\u5DE5\u4F5C\u7684PDF\u8D44\u6E90\u4E86"),h=n("p",null,[a("\u5173\u6CE8\u4E8C\u54E5\u7684\u539F\u521B\u516C\u4F17\u53F7 "),n("strong",null,"\u6C89\u9ED8\u738B\u4E8C"),a("\uFF0C\u56DE\u590D"),n("strong",null,"111"),a(" \u5373\u53EF\u514D\u8D39\u9886\u53D6\u3002")],-1),g=n("p",null,[n("img",{src:"http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/xingbiaogongzhonghao.png",alt:""})],-1);function x(b,E){const s=t("ExternalLinkIcon");return o(),l("div",null,[u,n("p",null,[r,d,k,n("a",m,[v,p(s)])]),h,g])}var w=e(i,[["render",x],["__file","ali-executors.html.vue"]]);export{w as default};
