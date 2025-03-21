---
title: 非科班读者，用一年时间社招拿下阿里 Offer✌️
shortTitle: 非科班读者社招上岸阿里
description: 他本人学历一般，三非背景（非 985 / 非 211 / 非理工科) ，但凭借自己的努力，历经 6 轮面试，最终还是拿到了阿里的 Offer
author: 茶杯
category:
  - 求职面试
tag:
  - 优质面经
head:
  - - meta
    - name: description
      content: 他本人学历一般，三非背景（非 985 / 非 211 / 非理工科) ，但凭借自己的努力，历经 6 轮面试，最终还是拿到了阿里的 Offer
  - - meta
    - name: keywords
      content: 面试经验,面经,求职,offer,春招,秋招,社招,校招
---

大家好，我是二哥呀！

去年的这个时候，有个朋友邀请我去阿里，然后，，，，，，我不假思索地就拒绝了。

![](https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/weixin-xuelybdzheloffer-2b16e830-bb77-4299-9ecf-f80b34147888.jpg)

因为说实话，阿里的修福报文化不太适合我——不小心又装逼了。其实主要是我在洛阳已经扎根生芽了，深深地爱上了脚下的这篇土地——不小心又文艺了。

如果是我刚毕业那会，我敢肯定，肯定会去试一试的，哪怕最后没面上，因为去阿里虽然不是我的梦想，但如果能拿高薪，能提升技术，还是很值得去尝试一下的。

下面分享一个读者（茶杯）的故事，他本人学历一般，三非背景（非 985 / 非 211 / 非理工科) ，但凭借自己的努力，历经 6 轮面试，最终还是拿到了阿里的 Offer。去阿里也一直是他的梦想——我想应该也是大多数学弟学妹们的梦想，所以我把他的经验分享出来，给大家一些参考。

* * *

为了能进阿里，我给自己制定了非常详细的学习计划：Java Core、JVM、网络、Spring 源码、MySQL、Redis、MQ（消息队列）、Netty，整整准备了 1 年时间。

在面了几家还算知名的大厂后，我总结了一波面试套路，就开始了阿里的面试之旅。最终，历经 6 轮面试，顺利拿到了阿里的 offer，也算是圆梦了。

### 第一轮技术面：阿里 P6 面试官

> 1、看你简历中提到处理过多次 JVM 故障，可以讲讲你遇到过哪些 OOM 的案例么？

a、我分别把之前工作中遇到的堆空间、元空间、堆外内存 OOM 场景都讲了一遍

b、按照如何分析、如何排查、如何解决、事后如何防范这个思路进行

> 2、看你简历写做了线程池调优，能讲下线程池的原理以及做了哪些优化吗？

a、业务线程池相互隔离

b、根据 CPU 核数、线程池任务的 IO 耗时/计算耗时，设置合理的核心线程数，提升性能

c、动态修改线程池参数，方便维护

d、重写拒绝策略，保证任务不丢

e、聊了一下线程池源码里的一些细节

> 3、能讲下你对 MySQL MVCC（多版本并发控制）的理解吗？

我分别讲了一下 RR（REPEATABLE READ）和 RC（READ COMMITTED）隔离级别的实现原理有哪些不同

> 4、MySQL 索引是怎么实现的？

a、分别从性能和实现上讲了数组、链表、Hash、二叉树、BTree 为什么不合适

b、详细讲了 B+ Tree 的实现，以及普通索引是如何查找数据的

c、中间提到了节点大小、IO、回表、覆盖索引等概念

> 5、讲讲 Redis 是怎么用的？

a、讲了分布式锁原理

b、讲了 Redis String 的底层实现

c、讲了 Redis ZSet 的实现，详细讲了跳表结合 Hash 是如何提升效率的

> 6、RecketMQ 的消息堆积如何解决？

a、Producer 端：上游发消息速度过快，可以减少消息的发送频率

b、Consumer 端：下游消费不过来，可以扩容来提高消费速度

c、Broker 端：内存是否够大？如果 Page Cache 够大的话，可以提高 Consumer 拉消息的性能

**一面小结**：

当我答完第一个 JVM 问题时，面试官就说这轮我过了，夸我这块研究很深入。

所以，我觉得面试技巧很重要。**面试前我就考虑到了如何展现自己的优势，在自我介绍时就会把自己擅长的部分说出来**。

另外，一般一面考察的点有：JVM、JDK 并发包/集合类、Redis、MySQL、MQ、RPC。

### 第二轮技术面：阿里 P7 面试官

阿里二面问的技术问题并不是很多，更多的是问业务场景和解决方案。

后来私底下问了一下面试官，他说因为一面已经全方面考察技术了，所以认为我技术方面是 OK 的，就不会作为主要的考察方向。

> 1、讲下项目里的限流策略怎么做的？

a、用 Redis 做的分布式限流

b、滑动窗口/漏斗/令牌桶，三种限流算法对比

c、解释了下为什么没有用其他限流组件

> 2、讲下简历中的秒杀项目怎么做的？

a、CDN：静态数据缓存

b、缓存：上层抗住流量

c、限流：防止应用挂掉

d、答题验证码：削峰

e、MQ：异步/削峰/解耦

f、风控、接口幂等：防刷

g、分库分表：减轻 DB 压力

> 3、如果 Redis 挂了一台怎么办？

> 4、如果 RocketMQ 挂了怎么办?

> 5、RocketMQ 重复消费了怎么办？

> 6、RocketMQ 为什么会重复消费？讲下 RocketMQ 造成重复消费的底层原理？

> 7、MQ 会丢消息吗？如何保证不丢？

> 8、问了很多业务方面的细节

> 9、**在阿里伯乐系统，手写算法题**

> 10、问了下面试官具体的工作内容和团队氛围

**二面小结**：

项目以及业务都会深入考察，这块一定要好好准备，一面过的人很多，二面挂的人很多。

二面一般都是入职后带你的师兄，如果你业务不精通技术好也不一定能过，因为终究还是要干活的。

### 第三轮主管面：阿里 P8 面试官

主管面考察的范围就更广了：

1、讲下在团队里的角色

2、讲下之前的经历

3、讲下近期做的比较核心的工作（二面项目有关的东西又讲了一遍）

4、讲下有哪些做得好和做得不好的地方？

5、如果流量放大 10 倍，100 倍怎么办？

6、分库分表怎么做的，讲下数据迁移方案

7、讲一下你做的 JVM 调优

8、聊一下 Redis 性能问题

9、面试官讲了一下团队的业务情况，以及进去后可能要做的具体工作

**三面小结**：

还是以项目为主，但问题会更深入。上面大部分问题，我都花了很多心思总结，汇总到了自己的笔记里，而且面试前反复看过很多次，从而保证我在面试过程中能够讲清楚细节。

### 第四轮交叉面：阿里 P8 面试官

主管级别的交叉面，也是一个 P8 面试官。

我也不知道为什么会有这一轮，问的问题跟 2 面、3 面差不多，这里就不展开了。

### 第五轮负责人面：阿里 P9 面试官

1、介绍工作经历

2、介绍项目以及项目里的角色

3、讲下项目中遇到的困难是如何解决的

4、一道实际需求的设计题：高并发场景，当用户下单（20 元）时，会提示用户花 10 元买一个会员，同时送 4 张 6 元的优惠券，本次就可以使用。该接口如何实现？需要考虑各方失败的情况

最后一道设计题，我和面试官讨论了将近 30 分钟，主要考查高并发场景下的设计能力。

面试官会关注：设计方案的合理性以及完整性，如果某个环节出问题了怎么保证高可用？会不会有丢数据的风险？数据一致性怎么保障？如果流量很大性能如何保证？

**五面小结**：

主要考察设计能力以及对项目的整体把握，不但宏观层面要做好架构设计，细节上的实现也会死抠到底。

不论是技术的深度和广度，甚至临场分析问题、解决问题的能力都有考察，这些都需要平时的技术积累。

### 第六轮 HR 面

1、介绍履历背景

2、介绍工作内容以及承担的角色

3、谈谈项目里的高并发场景怎么解决的

4、推进项目的过程中遇到了问题怎么办

5、同事怎么评价你

**六面小结**：

主要考察的是思考能力和思维方式、沟通、协作、配合团队、做事结果导向等能力。另外，阿里 HR 也是会问技术问题的。

个人感想

1、基础一定要扎实

基础不牢地动山摇，这一年的准备，基础知识通过查漏补缺提升了很多。但也发现了诸多不足，未来还需继续积累。

2、养成良好的习惯，坚持学习

开发这行内卷太严重了，年轻的时候一定要养成学习的习惯。如果在小公司做的是没挑战的事情，还忙得没时间学习，建议趁早换一份能带来成长的工作。

3、给自己定一个目标

做事情一定要定一个目标，只要你信念够强，它就会一直指引着你前进。

不然经历过一天疲惫的工作后，下班再继续学习这件事是坚持不下来的。

4、给自己制定详细的学习计划

两个月啃下一个主流技术栈，1 年下来差不多也能啃完 6 块硬骨头，这将是你未来面试的兵器库，十八般武艺不说样样精通，随便挑几个跟面试官捞一个小时应该不在话下！

5、梦想并非遥不可及

我一直把进阿里当做自己的梦想，这五年来一步一个脚印，中间不曾有过任何一次放弃。

刚毕业那会，被无数家公司拒绝过，但这并没有劝退我，感谢当时鼓励我的同学。

工作几年后，也被资深同事嘲讽我不知天高地厚，但这并没有劝退我，感谢当时劝我用最高标准要求自己、并相信自己的网友。

在不断提升自己技术深度的过程中，各种深不可测的源码、框架让我抓狂，但这也没有劝退我，感谢每个指点过我的技术大佬。

最后，感谢一路走来所有帮助过我的朋友们！祝大家前程似锦！

* * *

二哥多 BB 几句。

就像读者茶杯说的那样，任何时候都不能放弃自己的梦想，放弃心中的那份坚持，只有把一件事，一件小事做到极致，对于我们大多数普通的人来说，才是突围的最佳方式。

就像朋友之所以肯邀请我去阿里，且不说面试的结果如何，能获得这样一个邀请，肯定是因为某些方面我的努力得到了认可。

之前给大家分享的另外一个故事，关于我大学同学考研的，应该老读者还记得，他最近在准备面试，去北京，一边工作一边读研。

![](https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/weixin-xuelybdzheloffer-ed34aa11-4023-4846-b38f-96a8a80d690a.jpg)

记住一句很“粗暴”的话，伟大的牛逼之前总是傻逼式的坚持，是鸡汤也好，是鼓励也好，我们任何人都应该像读者茶杯说的那样：

*   夯实基础
*   坚持学习
*   确定目标
*   制定计划

梦想终究会照进现实，加油~

* * *


>转载链接：[https://mp.weixin.qq.com/s/vnMZY9Gsy3o1FwMi4f1GlA](https://mp.weixin.qq.com/s/vnMZY9Gsy3o1FwMi4f1GlA)，出处：大厂面试指南，整理：沉默王二



---------

最近整理了一份牛逼的学习资料，包括但不限于Java基础部分（JVM、Java集合框架、多线程），还囊括了 **数据库、计算机网络、算法与数据结构、设计模式、框架类Spring、Netty、微服务（Dubbo，消息队列） 网关** 等等等等……详情戳：[可以说是2022年全网最全的学习和找工作的PDF资源了](https://tobebetterjavaer.com/pdf/programmer-111.html)

微信搜 **沉默王二** 或扫描下方二维码关注二哥的原创公众号沉默王二，回复 **111** 即可免费领取。


![](https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/gongzhonghao.png)
