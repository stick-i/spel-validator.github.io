import{_ as a,c as p,a as e,b as i,e as o,w as t,d as n,r,o as c}from"./app-BwJKnqoo.js";const d={};function u(D,s){const l=r("RouteLink");return c(),p("div",null,[s[2]||(s[2]=e(`<h1 id="spel-表达式" tabindex="-1"><a class="header-anchor" href="#spel-表达式"><span>SpEL 表达式</span></a></h1><p>本章只介绍一些重要的 SpEL 表达式用法，更详细的使用说明请参考官方文档。</p><p>官方文档：<a href="https://docs.spring.io/spring-framework/reference/core/expressions/language-ref.html" target="_blank" rel="noopener noreferrer">Spring Expression Language (SpEL)</a></p><div class="custom-container tip"><p class="custom-container-title">提示</p><p>如果你的 IDEA 版本比较新，理论上来说，IDEA 应该能够识别到表达式，并且会给出提示，也具备引用的功能。</p></div><h2 id="基本操作符" tabindex="-1"><a class="header-anchor" href="#基本操作符"><span>基本操作符</span></a></h2><blockquote><p>此部分由GPT生成，进行了部分删减。</p></blockquote><ol><li><p><strong>算术操作符</strong></p><ul><li><code>+</code> 加法</li><li><code>-</code> 减法</li><li><code>*</code> 乘法</li><li><code>/</code> 除法</li><li><code>%</code> 取模</li></ul></li><li><p><strong>关系操作符</strong></p><ul><li><code>==</code> 等于</li><li><code>!=</code> 不等于</li><li><code>&lt;</code> 小于</li><li><code>&lt;=</code> 小于等于</li><li><code>&gt;</code> 大于</li><li><code>&gt;=</code> 大于等于</li></ul></li><li><p><strong>逻辑操作符</strong></p><ul><li><code>&amp;&amp;</code> 逻辑与</li><li><code>||</code> 逻辑或</li><li><code>!</code> 逻辑非</li></ul></li><li><p><strong>条件操作符（三元操作符）</strong></p><ul><li><code>? :</code> 条件表达式，类似于 Java 中的 <code>? :</code></li></ul></li><li><p><strong>成员访问</strong></p><ul><li><code>.</code> 属性访问</li><li><code>[]</code> 属性访问（使用字符串键）</li></ul></li><li><p><strong>集合操作符</strong></p><ul><li><code>in</code> 判断元素是否在集合中</li><li><code>!in</code> 判断元素是否不在集合中</li></ul></li><li><p><strong>空安全操作符</strong></p><ul><li><code>?.</code> 空安全属性访问</li><li><code>:?</code> 空安全方法调用</li></ul></li><li><p><strong>空合并操作符</strong></p><ul><li><code>?:</code> 当左侧表达式为 null 时，返回右侧表达式的值</li></ul></li></ol><h2 id="调用静态方法" tabindex="-1"><a class="header-anchor" href="#调用静态方法"><span>调用静态方法</span></a></h2><p>调用静态方法的语法为：<code>T(全类名).方法名(参数)</code>。</p><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="background-color:#1E1E1E;color:#D4D4D4;"><pre class="shiki dark-plus vp-code"><code><span class="line"><span style="color:#D4D4D4;">@</span><span style="color:#4EC9B0;">Data</span></span>
<span class="line"><span style="color:#D4D4D4;">@</span><span style="color:#4EC9B0;">SpelValid</span></span>
<span class="line"><span style="color:#569CD6;">public</span><span style="color:#569CD6;"> class</span><span style="color:#4EC9B0;"> SimpleExampleParamVo</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">  /**</span></span>
<span class="line"><span style="color:#6A9955;">   * 枚举值字段校验</span></span>
<span class="line"><span style="color:#6A9955;">   */</span></span>
<span class="line"><span style="color:#D4D4D4;">  @</span><span style="color:#4EC9B0;">SpelAssert</span><span style="color:#D4D4D4;">(assertTrue = </span><span style="color:#CE9178;">&quot; T(cn.sticki.enums.UserStatusEnum).getByCode(#this.userStatus) != null &quot;</span><span style="color:#D4D4D4;">, message = </span><span style="color:#CE9178;">&quot;用户状态不合法&quot;</span><span style="color:#D4D4D4;">)</span></span>
<span class="line"><span style="color:#569CD6;">  private</span><span style="color:#4EC9B0;"> Integer</span><span style="color:#9CDCFE;"> userStatus</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">  // 中文算两个字符，英文算一个字符，要求总长度不超过 10</span></span>
<span class="line"><span style="color:#6A9955;">  // 调用外部静态方法进行校验</span></span>
<span class="line"><span style="color:#D4D4D4;">  @</span><span style="color:#4EC9B0;">SpelAssert</span><span style="color:#D4D4D4;">(assertTrue = </span><span style="color:#CE9178;">&quot;T(cn.sticki.util.StringUtil).getLength(#this.userName) &lt;= 10&quot;</span><span style="color:#D4D4D4;">, message = </span><span style="color:#CE9178;">&quot;用户名长度不能超过10&quot;</span><span style="color:#D4D4D4;">)</span></span>
<span class="line"><span style="color:#569CD6;">  private</span><span style="color:#4EC9B0;"> String</span><span style="color:#9CDCFE;"> userName</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="调用-spring-bean" tabindex="-1"><a class="header-anchor" href="#调用-spring-bean"><span>调用 Spring Bean</span></a></h2>`,11)),i("p",null,[o(l,{to:"/guide/user-guide.html#%E5%BC%80%E5%90%AF%E5%AF%B9-spring-bean-%E7%9A%84%E6%94%AF%E6%8C%81"},{default:t(()=>s[0]||(s[0]=[n("开启 Spring Bean 支持")])),_:1}),s[1]||(s[1]=n("后，即可在 SpEL 表达式中调用 Spring Bean。"))]),s[3]||(s[3]=e(`<p>调用 Bean 的语法为：<code>@beanName.methodName(参数)</code>。</p><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="background-color:#1E1E1E;color:#D4D4D4;"><pre class="shiki dark-plus vp-code"><code><span class="line"><span style="color:#D4D4D4;">@</span><span style="color:#4EC9B0;">Data</span></span>
<span class="line"><span style="color:#D4D4D4;">@</span><span style="color:#4EC9B0;">SpelValid</span></span>
<span class="line"><span style="color:#569CD6;">public</span><span style="color:#569CD6;"> class</span><span style="color:#4EC9B0;"> SimpleExampleParamVo</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">  /**</span></span>
<span class="line"><span style="color:#6A9955;">   * 调用 userService 的 getById 方法，判断用户是否存在</span></span>
<span class="line"><span style="color:#6A9955;">   * 校验失败时，提示信息为：用户不存在</span></span>
<span class="line"><span style="color:#6A9955;">   * 这里只是简单举例，实际开发中不建议这样判断用户是否存在</span></span>
<span class="line"><span style="color:#6A9955;">   */</span></span>
<span class="line"><span style="color:#D4D4D4;">  @</span><span style="color:#4EC9B0;">SpelAssert</span><span style="color:#D4D4D4;">(assertTrue = </span><span style="color:#CE9178;">&quot;@userService.getById(#this.userId) != null&quot;</span><span style="color:#D4D4D4;">, message = </span><span style="color:#CE9178;">&quot;用户不存在&quot;</span><span style="color:#D4D4D4;">)</span></span>
<span class="line"><span style="color:#569CD6;">  private</span><span style="color:#4EC9B0;"> Long</span><span style="color:#9CDCFE;"> userId</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2))])}const v=a(d,[["render",u],["__file","spel.html.vue"]]),g=JSON.parse('{"path":"/guide/spel.html","title":"SpEL 表达式","lang":"zh-CN","frontmatter":{"description":"SpEL 表达式 本章只介绍一些重要的 SpEL 表达式用法，更详细的使用说明请参考官方文档。 官方文档：Spring Expression Language (SpEL) 提示 如果你的 IDEA 版本比较新，理论上来说，IDEA 应该能够识别到表达式，并且会给出提示，也具备引用的功能。 基本操作符 此部分由GPT生成，进行了部分删减。 算术操作符 ...","head":[["meta",{"property":"og:url","content":"https://spel-validator.sticki.cn/guide/spel.html"}],["meta",{"property":"og:site_name","content":"SpEL Validator"}],["meta",{"property":"og:title","content":"SpEL 表达式"}],["meta",{"property":"og:description","content":"SpEL 表达式 本章只介绍一些重要的 SpEL 表达式用法，更详细的使用说明请参考官方文档。 官方文档：Spring Expression Language (SpEL) 提示 如果你的 IDEA 版本比较新，理论上来说，IDEA 应该能够识别到表达式，并且会给出提示，也具备引用的功能。 基本操作符 此部分由GPT生成，进行了部分删减。 算术操作符 ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-09-05T08:59:11.000Z"}],["meta",{"property":"article:modified_time","content":"2024-09-05T08:59:11.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"SpEL 表达式\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-09-05T08:59:11.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"基本操作符","slug":"基本操作符","link":"#基本操作符","children":[]},{"level":2,"title":"调用静态方法","slug":"调用静态方法","link":"#调用静态方法","children":[]},{"level":2,"title":"调用 Spring Bean","slug":"调用-spring-bean","link":"#调用-spring-bean","children":[]}],"git":{"updatedTime":1725526751000,"contributors":[{"name":"阿杆","email":"sticki@qq.com","commits":4}]},"autoDesc":true,"filePathRelative":"guide/spel.md"}');export{v as comp,g as data};