import{_ as r}from"./plugin-vue_export-helper.21dcd24c.js";import{r as a,o as l,c as s,a as e,b as d,d as i,e as o}from"./app.0d3123da.js";const c={},t=e("p",null,"Java \u4E2D\u7684 PriorityQueue \u4E8B\u901A\u8FC7\u4E8C\u53C9\u5C0F\u9876\u5806\u5B9E\u73B0\u7684\uFF0C\u53EF\u4EE5\u7528\u4E00\u68F5\u5B8C\u5168\u4E8C\u53C9\u6811\u8868\u793A\u3002\u672C\u6587\u4ECE Queue \u63A5\u53E3\u51FA\u53D1\uFF0C\u7ED3\u5408\u751F\u52A8\u7684\u56FE\u89E3\uFF0C\u6DF1\u5165\u6D45\u51FA\u5730\u5206\u6790 PriorityQueue \u6BCF\u4E2A\u64CD\u4F5C\u7684\u5177\u4F53\u8FC7\u7A0B\u548C\u65F6\u95F4\u590D\u6742\u5EA6\uFF0C\u8BA9\u8BFB\u8005\u5BF9 PriorityQueue \u5EFA\u7ACB\u6E05\u6670\u800C\u6DF1\u5165\u7684\u8BA4\u8BC6\u3002",-1),u=e("h2",{id:"\u603B\u4F53\u4ECB\u7ECD",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u603B\u4F53\u4ECB\u7ECD","aria-hidden":"true"},"#"),i(" \u603B\u4F53\u4ECB\u7ECD")],-1),v=i("\u524D\u9762\u4EE5 Java "),m={href:"https://tobebetterjavaer.com/collection/arraydeque.html",target:"_blank",rel:"noopener noreferrer"},b=i("ArrayDeque"),p=i("\u4E3A\u4F8B\u8BB2\u89E3\u4E86"),h=e("em",null,"Stack",-1),g=i("\u548C"),f=e("em",null,"Queue",-1),_=i("\uFF0C\u5176\u5B9E\u8FD8\u6709\u4E00\u79CD\u7279\u6B8A\u7684\u961F\u5217\u53EB\u505A"),x=e("em",null,"PriorityQueue",-1),k=i("\uFF0C\u5373\u4F18\u5148\u961F\u5217\u3002"),J=o(`<p><strong>\u4F18\u5148\u961F\u5217\u7684\u4F5C\u7528\u662F\u80FD\u4FDD\u8BC1\u6BCF\u6B21\u53D6\u51FA\u7684\u5143\u7D20\u90FD\u662F\u961F\u5217\u4E2D\u6743\u503C\u6700\u5C0F\u7684</strong>\uFF08Java \u7684\u4F18\u5148\u961F\u5217\u6BCF\u6B21\u53D6\u6700\u5C0F\u5143\u7D20\uFF0CC++\u7684\u4F18\u5148\u961F\u5217\u6BCF\u6B21\u53D6\u6700\u5927\u5143\u7D20\uFF09\u3002</p><p>\u8FD9\u91CC\u7275\u6D89\u5230\u4E86\u5927\u5C0F\u5173\u7CFB\uFF0C<strong>\u5143\u7D20\u5927\u5C0F\u7684\u8BC4\u5224\u53EF\u4EE5\u901A\u8FC7\u5143\u7D20\u672C\u8EAB\u7684\u81EA\u7136\u987A\u5E8F\uFF08<em>natural ordering</em>\uFF09\uFF0C\u4E5F\u53EF\u4EE5\u901A\u8FC7\u6784\u9020\u65F6\u4F20\u5165\u7684\u6BD4\u8F83\u5668</strong>\uFF08<em>Comparator</em>\uFF0C\u7C7B\u4F3C\u4E8E C++\u7684\u4EFF\u51FD\u6570\uFF09\u3002</p><p>Java \u4E2D<em>PriorityQueue</em>\u5B9E\u73B0\u4E86<em>Queue</em>\u63A5\u53E3\uFF0C\u4E0D\u5141\u8BB8\u653E\u5165<code>null</code>\u5143\u7D20\uFF1B\u5176\u901A\u8FC7\u5806\u5B9E\u73B0\uFF0C\u5177\u4F53\u8BF4\u662F\u901A\u8FC7\u5B8C\u5168\u4E8C\u53C9\u6811\uFF08<em>complete binary tree</em>\uFF09\u5B9E\u73B0\u7684<strong>\u5C0F\u9876\u5806</strong>\uFF08\u4EFB\u610F\u4E00\u4E2A\u975E\u53F6\u5B50\u8282\u70B9\u7684\u6743\u503C\uFF0C\u90FD\u4E0D\u5927\u4E8E\u5176\u5DE6\u53F3\u5B50\u8282\u70B9\u7684\u6743\u503C\uFF09\uFF0C\u4E5F\u5C31\u610F\u5473\u7740\u53EF\u4EE5\u901A\u8FC7\u6570\u7EC4\u6765\u4F5C\u4E3A<em>PriorityQueue</em>\u7684\u5E95\u5C42\u5B9E\u73B0\u3002</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/collection/PriorityQueue-8dca2f55-a7c7-49e1-95a5-df1a34f2aef5.png" alt="PriorityQueue_base.png"></p><p>\u4E0A\u56FE\u4E2D\u6211\u4EEC\u7ED9\u6BCF\u4E2A\u5143\u7D20\u6309\u7167\u5C42\u5E8F\u904D\u5386\u7684\u65B9\u5F0F\u8FDB\u884C\u4E86\u7F16\u53F7\uFF0C\u5982\u679C\u4F60\u8DB3\u591F\u7EC6\u5FC3\uFF0C\u4F1A\u53D1\u73B0\u7236\u8282\u70B9\u548C\u5B50\u8282\u70B9\u7684\u7F16\u53F7\u662F\u6709\u8054\u7CFB\u7684\uFF0C\u66F4\u786E\u5207\u7684\u8BF4\u7236\u5B50\u8282\u70B9\u7684\u7F16\u53F7\u4E4B\u95F4\u6709\u5982\u4E0B\u5173\u7CFB\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>leftNo = parentNo\\*2+1

rightNo = parentNo\\*2+2

parentNo = (nodeNo-1)/2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u901A\u8FC7\u4E0A\u8FF0\u4E09\u4E2A\u516C\u5F0F\uFF0C\u53EF\u4EE5\u8F7B\u6613\u8BA1\u7B97\u51FA\u67D0\u4E2A\u8282\u70B9\u7684\u7236\u8282\u70B9\u4EE5\u53CA\u5B50\u8282\u70B9\u7684\u4E0B\u6807\u3002\u8FD9\u4E5F\u5C31\u662F\u4E3A\u4EC0\u4E48\u53EF\u4EE5\u76F4\u63A5\u7528\u6570\u7EC4\u6765\u5B58\u50A8\u5806\u7684\u539F\u56E0\u3002</p><p><em>PriorityQueue</em>\u7684<code>peek()</code>\u548C<code>element</code>\u64CD\u4F5C\u662F\u5E38\u6570\u65F6\u95F4\uFF0C<code>add()</code>, <code>offer()</code>, \u65E0\u53C2\u6570\u7684<code>remove()</code>\u4EE5\u53CA<code>poll()</code>\u65B9\u6CD5\u7684\u65F6\u95F4\u590D\u6742\u5EA6\u90FD\u662F<em>log(N)</em>\u3002</p><h2 id="\u65B9\u6CD5\u5256\u6790" tabindex="-1"><a class="header-anchor" href="#\u65B9\u6CD5\u5256\u6790" aria-hidden="true">#</a> \u65B9\u6CD5\u5256\u6790</h2><h3 id="add-\u548C-offer" tabindex="-1"><a class="header-anchor" href="#add-\u548C-offer" aria-hidden="true">#</a> add()\u548C offer()</h3><p><code>add(E e)</code>\u548C<code>offer(E e)</code>\u7684\u8BED\u4E49\u76F8\u540C\uFF0C\u90FD\u662F\u5411\u4F18\u5148\u961F\u5217\u4E2D\u63D2\u5165\u5143\u7D20\uFF0C\u53EA\u662F<code>Queue</code>\u63A5\u53E3\u89C4\u5B9A\u4E8C\u8005\u5BF9\u63D2\u5165\u5931\u8D25\u65F6\u7684\u5904\u7406\u4E0D\u540C\uFF0C\u524D\u8005\u5728\u63D2\u5165\u5931\u8D25\u65F6\u629B\u51FA\u5F02\u5E38\uFF0C\u540E\u5219\u5219\u4F1A\u8FD4\u56DE<code>false</code>\u3002\u5BF9\u4E8E<em>PriorityQueue</em>\u8FD9\u4E24\u4E2A\u65B9\u6CD5\u5176\u5B9E\u6CA1\u4EC0\u4E48\u5DEE\u522B\u3002</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/collection/PriorityQueue-0fb89aa7-c8fa-4fad-adbb-40c61c3bb0e9.png" alt="PriorityQueue_offer.png"></p><p>\u65B0\u52A0\u5165\u7684\u5143\u7D20\u53EF\u80FD\u4F1A\u7834\u574F\u5C0F\u9876\u5806\u7684\u6027\u8D28\uFF0C\u56E0\u6B64\u9700\u8981\u8FDB\u884C\u5FC5\u8981\u7684\u8C03\u6574\u3002</p><div class="language-Java ext-Java line-numbers-mode"><pre class="language-Java"><code>//offer(E e)
public boolean offer(E e) {
    if (e == null)//\u4E0D\u5141\u8BB8\u653E\u5165null\u5143\u7D20
        throw new NullPointerException();
    modCount++;
    int i = size;
    if (i &gt;= queue.length)
        grow(i + 1);//\u81EA\u52A8\u6269\u5BB9
    size = i + 1;
    if (i == 0)//\u961F\u5217\u539F\u6765\u4E3A\u7A7A\uFF0C\u8FD9\u662F\u63D2\u5165\u7684\u7B2C\u4E00\u4E2A\u5143\u7D20
        queue[0] = e;
    else
        siftUp(i, e);//\u8C03\u6574
    return true;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u8FF0\u4EE3\u7801\u4E2D\uFF0C\u6269\u5BB9\u51FD\u6570<code>grow()</code>\u7C7B\u4F3C\u4E8E<code>ArrayList</code>\u91CC\u7684<code>grow()</code>\u51FD\u6570\uFF0C\u5C31\u662F\u518D\u7533\u8BF7\u4E00\u4E2A\u66F4\u5927\u7684\u6570\u7EC4\uFF0C\u5E76\u5C06\u539F\u6570\u7EC4\u7684\u5143\u7D20\u590D\u5236\u8FC7\u53BB\uFF0C\u8FD9\u91CC\u4E0D\u518D\u8D58\u8FF0\u3002\u9700\u8981\u6CE8\u610F\u7684\u662F<code>siftUp(int k, E x)</code>\u65B9\u6CD5\uFF0C\u8BE5\u65B9\u6CD5\u7528\u4E8E\u63D2\u5165\u5143\u7D20<code>x</code>\u5E76\u7EF4\u6301\u5806\u7684\u7279\u6027\u3002</p><div class="language-Java ext-Java line-numbers-mode"><pre class="language-Java"><code>//siftUp()
private void siftUp(int k, E x) {
    while (k &gt; 0) {
        int parent = (k - 1) &gt;&gt;&gt; 1;//parentNo = (nodeNo-1)/2
        Object e = queue[parent];
        if (comparator.compare(x, (E) e) &gt;= 0)//\u8C03\u7528\u6BD4\u8F83\u5668\u7684\u6BD4\u8F83\u65B9\u6CD5
            break;
        queue[k] = e;
        k = parent;
    }
    queue[k] = x;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u65B0\u52A0\u5165\u7684\u5143\u7D20<code>x</code>\u53EF\u80FD\u4F1A\u7834\u574F\u5C0F\u9876\u5806\u7684\u6027\u8D28\uFF0C\u56E0\u6B64\u9700\u8981\u8FDB\u884C\u8C03\u6574\u3002\u8C03\u6574\u7684\u8FC7\u7A0B\u4E3A\uFF1A<strong>\u4ECE<code>k</code>\u6307\u5B9A\u7684\u4F4D\u7F6E\u5F00\u59CB\uFF0C\u5C06<code>x</code>\u9010\u5C42\u4E0E\u5F53\u524D\u70B9\u7684<code>parent</code>\u8FDB\u884C\u6BD4\u8F83\u5E76\u4EA4\u6362\uFF0C\u76F4\u5230\u6EE1\u8DB3<code>x &gt;= queue[parent]</code>\u4E3A\u6B62</strong>\u3002\u6CE8\u610F\u8FD9\u91CC\u7684\u6BD4\u8F83\u53EF\u4EE5\u662F\u5143\u7D20\u7684\u81EA\u7136\u987A\u5E8F\uFF0C\u4E5F\u53EF\u4EE5\u662F\u4F9D\u9760\u6BD4\u8F83\u5668\u7684\u987A\u5E8F\u3002</p><h3 id="element-\u548C-peek" tabindex="-1"><a class="header-anchor" href="#element-\u548C-peek" aria-hidden="true">#</a> element()\u548C peek()</h3><p><code>element()</code>\u548C<code>peek()</code>\u7684\u8BED\u4E49\u5B8C\u5168\u76F8\u540C\uFF0C\u90FD\u662F\u83B7\u53D6\u4F46\u4E0D\u5220\u9664\u961F\u9996\u5143\u7D20\uFF0C\u4E5F\u5C31\u662F\u961F\u5217\u4E2D\u6743\u503C\u6700\u5C0F\u7684\u90A3\u4E2A\u5143\u7D20\uFF0C\u4E8C\u8005\u552F\u4E00\u7684\u533A\u522B\u662F\u5F53\u65B9\u6CD5\u5931\u8D25\u65F6\u524D\u8005\u629B\u51FA\u5F02\u5E38\uFF0C\u540E\u8005\u8FD4\u56DE<code>null</code>\u3002\u6839\u636E\u5C0F\u9876\u5806\u7684\u6027\u8D28\uFF0C\u5806\u9876\u90A3\u4E2A\u5143\u7D20\u5C31\u662F\u5168\u5C40\u6700\u5C0F\u7684\u90A3\u4E2A\uFF1B\u7531\u4E8E\u5806\u7528\u6570\u7EC4\u8868\u793A\uFF0C\u6839\u636E\u4E0B\u6807\u5173\u7CFB\uFF0C<code>0</code>\u4E0B\u6807\u5904\u7684\u90A3\u4E2A\u5143\u7D20\u65E2\u662F\u5806\u9876\u5143\u7D20\u3002\u6240\u4EE5<strong>\u76F4\u63A5\u8FD4\u56DE\u6570\u7EC4<code>0</code>\u4E0B\u6807\u5904\u7684\u90A3\u4E2A\u5143\u7D20\u5373\u53EF</strong>\u3002</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/collection/PriorityQueue-5059f157-845e-4d1c-b993-5cfe539d5607.png" alt="PriorityQueue_peek.png"></p><p>\u4EE3\u7801\u4E5F\u5C31\u975E\u5E38\u7B80\u6D01\uFF1A</p><div class="language-Java ext-Java line-numbers-mode"><pre class="language-Java"><code>//peek()
public E peek() {
    if (size == 0)
        return null;
    return (E) queue[0];//0\u4E0B\u6807\u5904\u7684\u90A3\u4E2A\u5143\u7D20\u5C31\u662F\u6700\u5C0F\u7684\u90A3\u4E2A
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="remove-\u548C-poll" tabindex="-1"><a class="header-anchor" href="#remove-\u548C-poll" aria-hidden="true">#</a> remove()\u548C poll()</h3><p><code>remove()</code>\u548C<code>poll()</code>\u65B9\u6CD5\u7684\u8BED\u4E49\u4E5F\u5B8C\u5168\u76F8\u540C\uFF0C\u90FD\u662F\u83B7\u53D6\u5E76\u5220\u9664\u961F\u9996\u5143\u7D20\uFF0C\u533A\u522B\u662F\u5F53\u65B9\u6CD5\u5931\u8D25\u65F6\u524D\u8005\u629B\u51FA\u5F02\u5E38\uFF0C\u540E\u8005\u8FD4\u56DE<code>null</code>\u3002\u7531\u4E8E\u5220\u9664\u64CD\u4F5C\u4F1A\u6539\u53D8\u961F\u5217\u7684\u7ED3\u6784\uFF0C\u4E3A\u7EF4\u62A4\u5C0F\u9876\u5806\u7684\u6027\u8D28\uFF0C\u9700\u8981\u8FDB\u884C\u5FC5\u8981\u7684\u8C03\u6574\u3002</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/collection/PriorityQueue-e25ba931-2e6f-4c17-84b8-9b959733d541.png" alt="PriorityQueue_poll.png"></p><p>\u4EE3\u7801\u5982\u4E0B\uFF1A</p><div class="language-Java ext-Java line-numbers-mode"><pre class="language-Java"><code>public E poll() {
    if (size == 0)
        return null;
    int s = --size;
    modCount++;
    E result = (E) queue[0];//0\u4E0B\u6807\u5904\u7684\u90A3\u4E2A\u5143\u7D20\u5C31\u662F\u6700\u5C0F\u7684\u90A3\u4E2A
    E x = (E) queue[s];
    queue[s] = null;
    if (s != 0)
        siftDown(0, x);//\u8C03\u6574
    return result;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u8FF0\u4EE3\u7801\u9996\u5148\u8BB0\u5F55<code>0</code>\u4E0B\u6807\u5904\u7684\u5143\u7D20\uFF0C\u5E76\u7528\u6700\u540E\u4E00\u4E2A\u5143\u7D20\u66FF\u6362<code>0</code>\u4E0B\u6807\u4F4D\u7F6E\u7684\u5143\u7D20\uFF0C\u4E4B\u540E\u8C03\u7528<code>siftDown()</code>\u65B9\u6CD5\u5BF9\u5806\u8FDB\u884C\u8C03\u6574\uFF0C\u6700\u540E\u8FD4\u56DE\u539F\u6765<code>0</code>\u4E0B\u6807\u5904\u7684\u90A3\u4E2A\u5143\u7D20\uFF08\u4E5F\u5C31\u662F\u6700\u5C0F\u7684\u90A3\u4E2A\u5143\u7D20\uFF09\u3002\u91CD\u70B9\u662F<code>siftDown(int k, E x)</code>\u65B9\u6CD5\uFF0C\u8BE5\u65B9\u6CD5\u7684\u4F5C\u7528\u662F<strong>\u4ECE<code>k</code>\u6307\u5B9A\u7684\u4F4D\u7F6E\u5F00\u59CB\uFF0C\u5C06<code>x</code>\u9010\u5C42\u5411\u4E0B\u4E0E\u5F53\u524D\u70B9\u7684\u5DE6\u53F3\u5B69\u5B50\u4E2D\u8F83\u5C0F\u7684\u90A3\u4E2A\u4EA4\u6362\uFF0C\u76F4\u5230<code>x</code>\u5C0F\u4E8E\u6216\u7B49\u4E8E\u5DE6\u53F3\u5B69\u5B50\u4E2D\u7684\u4EFB\u4F55\u4E00\u4E2A\u4E3A\u6B62</strong>\u3002</p><div class="language-Java ext-Java line-numbers-mode"><pre class="language-Java"><code>//siftDown()
private void siftDown(int k, E x) {
    int half = size &gt;&gt;&gt; 1;
    while (k &lt; half) {
      //\u9996\u5148\u627E\u5230\u5DE6\u53F3\u5B69\u5B50\u4E2D\u8F83\u5C0F\u7684\u90A3\u4E2A\uFF0C\u8BB0\u5F55\u5230c\u91CC\uFF0C\u5E76\u7528child\u8BB0\u5F55\u5176\u4E0B\u6807
        int child = (k &lt;&lt; 1) + 1;//leftNo = parentNo*2+1
        Object c = queue[child];
        int right = child + 1;
        if (right &lt; size &amp;&amp;
            comparator.compare((E) c, (E) queue[right]) &gt; 0)
            c = queue[child = right];
        if (comparator.compare(x, (E) c) &lt;= 0)
            break;
        queue[k] = c;//\u7136\u540E\u7528c\u53D6\u4EE3\u539F\u6765\u7684\u503C
        k = child;
    }
    queue[k] = x;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="remove-object-o" tabindex="-1"><a class="header-anchor" href="#remove-object-o" aria-hidden="true">#</a> remove(Object o)</h3><p><code>remove(Object o)</code>\u65B9\u6CD5\u7528\u4E8E\u5220\u9664\u961F\u5217\u4E2D\u8DDF<code>o</code>\u76F8\u7B49\u7684\u67D0\u4E00\u4E2A\u5143\u7D20\uFF08\u5982\u679C\u6709\u591A\u4E2A\u76F8\u7B49\uFF0C\u53EA\u5220\u9664\u4E00\u4E2A\uFF09\uFF0C\u8BE5\u65B9\u6CD5\u4E0D\u662F<em>Queue</em>\u63A5\u53E3\u5185\u7684\u65B9\u6CD5\uFF0C\u800C\u662F<em>Collection</em>\u63A5\u53E3\u7684\u65B9\u6CD5\u3002\u7531\u4E8E\u5220\u9664\u64CD\u4F5C\u4F1A\u6539\u53D8\u961F\u5217\u7ED3\u6784\uFF0C\u6240\u4EE5\u8981\u8FDB\u884C\u8C03\u6574\uFF1B\u53C8\u7531\u4E8E\u5220\u9664\u5143\u7D20\u7684\u4F4D\u7F6E\u53EF\u80FD\u662F\u4EFB\u610F\u7684\uFF0C\u6240\u4EE5\u8C03\u6574\u8FC7\u7A0B\u6BD4\u5176\u5B83\u51FD\u6570\u7A0D\u52A0\u7E41\u7410\u3002\u5177\u4F53\u6765\u8BF4\uFF0C<code>remove(Object o)</code>\u53EF\u4EE5\u5206\u4E3A 2 \u79CD\u60C5\u51B5\uFF1A1. \u5220\u9664\u7684\u662F\u6700\u540E\u4E00\u4E2A\u5143\u7D20\u3002\u76F4\u63A5\u5220\u9664\u5373\u53EF\uFF0C\u4E0D\u9700\u8981\u8C03\u6574\u30022. \u5220\u9664\u7684\u4E0D\u662F\u6700\u540E\u4E00\u4E2A\u5143\u7D20\uFF0C\u4ECE\u5220\u9664\u70B9\u5F00\u59CB\u4EE5\u6700\u540E\u4E00\u4E2A\u5143\u7D20\u4E3A\u53C2\u7167\u8C03\u7528\u4E00\u6B21<code>siftDown()</code>\u5373\u53EF\u3002\u6B64\u5904\u4E0D\u518D\u8D58\u8FF0\u3002</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/collection/PriorityQueue-ed0d08d3-b38e-44a1-a710-ee7a01afda62.png" alt="PriorityQueue_remove2.png"></p><p>\u5177\u4F53\u4EE3\u7801\u5982\u4E0B\uFF1A</p><div class="language-Java ext-Java line-numbers-mode"><pre class="language-Java"><code>//remove(Object o)
public boolean remove(Object o) {
  //\u901A\u8FC7\u904D\u5386\u6570\u7EC4\u7684\u65B9\u5F0F\u627E\u5230\u7B2C\u4E00\u4E2A\u6EE1\u8DB3o.equals(queue[i])\u5143\u7D20\u7684\u4E0B\u6807
    int i = indexOf(o);
    if (i == -1)
        return false;
    int s = --size;
    if (s == i) //\u60C5\u51B51
        queue[i] = null;
    else {
        E moved = (E) queue[s];
        queue[s] = null;
        siftDown(i, moved);//\u60C5\u51B52
        ......
    }
    return true;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,34),y=i("\u53C2\u8003\u94FE\u63A5\uFF1A"),E={href:"https://github.com/CarpenterLee/JCFInternals",target:"_blank",rel:"noopener noreferrer"},Q=i("https://github.com/CarpenterLee/JCFInternals"),j=i("\uFF0C\u4F5C\u8005\uFF1A\u674E\u8C6A\uFF0C\u6574\u7406\uFF1A\u6C89\u9ED8\u738B\u4E8C"),q=e("hr",null,null,-1),P=i("\u6700\u8FD1\u6574\u7406\u4E86\u4E00\u4EFD\u725B\u903C\u7684\u5B66\u4E60\u8D44\u6599\uFF0C\u5305\u62EC\u4F46\u4E0D\u9650\u4E8EJava\u57FA\u7840\u90E8\u5206\uFF08JVM\u3001Java\u96C6\u5408\u6846\u67B6\u3001\u591A\u7EBF\u7A0B\uFF09\uFF0C\u8FD8\u56CA\u62EC\u4E86 "),N=e("strong",null,"\u6570\u636E\u5E93\u3001\u8BA1\u7B97\u673A\u7F51\u7EDC\u3001\u7B97\u6CD5\u4E0E\u6570\u636E\u7ED3\u6784\u3001\u8BBE\u8BA1\u6A21\u5F0F\u3001\u6846\u67B6\u7C7BSpring\u3001Netty\u3001\u5FAE\u670D\u52A1\uFF08Dubbo\uFF0C\u6D88\u606F\u961F\u5217\uFF09 \u7F51\u5173",-1),w=i(" \u7B49\u7B49\u7B49\u7B49\u2026\u2026\u8BE6\u60C5\u6233\uFF1A"),C={href:"https://tobebetterjavaer.com/pdf/programmer-111.html",target:"_blank",rel:"noopener noreferrer"},D=i("\u53EF\u4EE5\u8BF4\u662F2022\u5E74\u5168\u7F51\u6700\u5168\u7684\u5B66\u4E60\u548C\u627E\u5DE5\u4F5C\u7684PDF\u8D44\u6E90\u4E86"),z=e("p",null,[i("\u5173\u6CE8\u4E8C\u54E5\u7684\u539F\u521B\u516C\u4F17\u53F7 "),e("strong",null,"\u6C89\u9ED8\u738B\u4E8C"),i("\uFF0C\u56DE\u590D"),e("strong",null,"111"),i(" \u5373\u53EF\u514D\u8D39\u9886\u53D6\u3002")],-1),O=e("p",null,[e("img",{src:"http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/xingbiaogongzhonghao.png",alt:""})],-1);function L(V,I){const n=a("ExternalLinkIcon");return l(),s("div",null,[t,u,e("p",null,[v,e("a",m,[b,d(n)]),p,h,g,f,_,x,k]),J,e("blockquote",null,[e("p",null,[y,e("a",E,[Q,d(n)]),j])]),q,e("p",null,[P,N,w,e("a",C,[D,d(n)])]),z,O])}var F=r(c,[["render",L],["__file","PriorityQueue.html.vue"]]);export{F as default};
