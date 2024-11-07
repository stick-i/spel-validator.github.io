import{_ as s,c as n,a as e,o as t}from"./app-_VRAhHYl.js";const l={};function o(p,a){return t(),n("div",null,a[0]||(a[0]=[e(`<h1 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍"><span>介绍</span></a></h1><p>SpEL Validator 是基于 Spring Expression Language 的参数校验包，也是 jakarta.validation-api 的扩展增强包，用于简化参数校验，它几乎支持所有场景下的参数校验。</p><p>设计的初衷是为了解决一些需要判断另一个字段的值来决定当前字段是否校验的场景。</p><div class="custom-container tip"><p class="custom-container-title">提示</p><p>本组件的目的不是代替 <code>jakarta.validation-api</code> 的校验注解，而是作为一个扩展，方便某些场景下的参数校验。</p></div><h2 id="它是如何工作的" tabindex="-1"><a class="header-anchor" href="#它是如何工作的"><span>它是如何工作的？</span></a></h2><p>待补充。</p><h2 id="它解决了什么问题" tabindex="-1"><a class="header-anchor" href="#它解决了什么问题"><span>它解决了什么问题？</span></a></h2><ul><li><p>枚举值字段校验：</p><div class="language-java" data-highlighter="shiki" data-ext="java" data-title="java" style="background-color:#1E1E1E;color:#D4D4D4;"><pre class="shiki dark-plus vp-code"><code><span class="line"><span style="color:#D4D4D4;">@</span><span style="color:#4EC9B0;">SpelAssert</span><span style="color:#D4D4D4;">(assertTrue = </span><span style="color:#CE9178;">&quot; T(cn.sticki.enums.UserStatusEnum).getByCode(#this.userStatus) != null &quot;</span><span style="color:#D4D4D4;">, message = </span><span style="color:#CE9178;">&quot;用户状态不合法&quot;</span><span style="color:#D4D4D4;">)</span></span>
<span class="line"><span style="color:#569CD6;">private</span><span style="color:#4EC9B0;"> Integer</span><span style="color:#9CDCFE;"> userStatus</span><span style="color:#D4D4D4;">;</span></span></code></pre></div></li><li><p>多字段联合校验：</p><div class="language-java" data-highlighter="shiki" data-ext="java" data-title="java" style="background-color:#1E1E1E;color:#D4D4D4;"><pre class="shiki dark-plus vp-code"><code><span class="line"><span style="color:#D4D4D4;">@</span><span style="color:#4EC9B0;">NotNull</span></span>
<span class="line"><span style="color:#569CD6;">private</span><span style="color:#4EC9B0;"> Integer</span><span style="color:#9CDCFE;"> contentType</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D4D4D4;">@</span><span style="color:#4EC9B0;">SpelNotNull</span><span style="color:#D4D4D4;">(condition = </span><span style="color:#CE9178;">&quot;#this.contentType == 1&quot;</span><span style="color:#D4D4D4;">, message = </span><span style="color:#CE9178;">&quot;语音内容不能为空&quot;</span><span style="color:#D4D4D4;">)</span></span>
<span class="line"><span style="color:#569CD6;">private</span><span style="color:#4EC9B0;"> Object</span><span style="color:#9CDCFE;"> audioContent</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D4D4D4;">@</span><span style="color:#4EC9B0;">SpelNotNull</span><span style="color:#D4D4D4;">(condition = </span><span style="color:#CE9178;">&quot;#this.contentType == 2&quot;</span><span style="color:#D4D4D4;">, message = </span><span style="color:#CE9178;">&quot;视频内容不能为空&quot;</span><span style="color:#D4D4D4;">)</span></span>
<span class="line"><span style="color:#569CD6;">private</span><span style="color:#4EC9B0;"> Object</span><span style="color:#9CDCFE;"> videoContent</span><span style="color:#D4D4D4;">;</span></span></code></pre></div></li><li><p>复杂逻辑校验，调用静态方法：</p><div class="language-java" data-highlighter="shiki" data-ext="java" data-title="java" style="background-color:#1E1E1E;color:#D4D4D4;"><pre class="shiki dark-plus vp-code"><code><span class="line"><span style="color:#6A9955;">// 中文算两个字符，英文算一个字符，要求总长度不超过 10</span></span>
<span class="line"><span style="color:#6A9955;">// 调用外部静态方法进行校验</span></span>
<span class="line"><span style="color:#D4D4D4;">@</span><span style="color:#4EC9B0;">SpelAssert</span><span style="color:#D4D4D4;">(assertTrue = </span><span style="color:#CE9178;">&quot;T(cn.sticki.util.StringUtil).getLength(#this.userName) &lt;= 10&quot;</span><span style="color:#D4D4D4;">, message = </span><span style="color:#CE9178;">&quot;用户名长度不能超过10&quot;</span><span style="color:#D4D4D4;">)</span></span>
<span class="line"><span style="color:#569CD6;">private</span><span style="color:#4EC9B0;"> String</span><span style="color:#9CDCFE;"> userName</span><span style="color:#D4D4D4;">;</span></span></code></pre></div></li><li><p>调用 Spring Bean（需要使用 @EnableSpelValidatorBeanRegistrar 开启Spring Bean支持）：</p><div class="language-java" data-highlighter="shiki" data-ext="java" data-title="java" style="background-color:#1E1E1E;color:#D4D4D4;"><pre class="shiki dark-plus vp-code"><code><span class="line"><span style="color:#6A9955;">// 这里只是简单举例，实际开发中不建议这样判断用户是否存在</span></span>
<span class="line"><span style="color:#D4D4D4;">@</span><span style="color:#4EC9B0;">SpelAssert</span><span style="color:#D4D4D4;">(assertTrue = </span><span style="color:#CE9178;">&quot;@userService.getById(#this.userId) != null&quot;</span><span style="color:#D4D4D4;">, message = </span><span style="color:#CE9178;">&quot;用户不存在&quot;</span><span style="color:#D4D4D4;">)</span></span>
<span class="line"><span style="color:#569CD6;">private</span><span style="color:#4EC9B0;"> Long</span><span style="color:#9CDCFE;"> userId</span><span style="color:#D4D4D4;">;</span></span></code></pre></div></li><li><p>更多使用场景，欢迎探索和补充！</p></li></ul>`,8)]))}const i=s(l,[["render",o],["__file","introduction.html.vue"]]),c=JSON.parse('{"path":"/guide/introduction.html","title":"介绍","lang":"zh-CN","frontmatter":{"description":"介绍 SpEL Validator 是基于 Spring Expression Language 的参数校验包，也是 jakarta.validation-api 的扩展增强包，用于简化参数校验，它几乎支持所有场景下的参数校验。 设计的初衷是为了解决一些需要判断另一个字段的值来决定当前字段是否校验的场景。 提示 本组件的目的不是代替 jakarta.v...","head":[["meta",{"property":"og:url","content":"https://spel-validator.sticki.cn/guide/introduction.html"}],["meta",{"property":"og:site_name","content":"SpEL Validator"}],["meta",{"property":"og:title","content":"介绍"}],["meta",{"property":"og:description","content":"介绍 SpEL Validator 是基于 Spring Expression Language 的参数校验包，也是 jakarta.validation-api 的扩展增强包，用于简化参数校验，它几乎支持所有场景下的参数校验。 设计的初衷是为了解决一些需要判断另一个字段的值来决定当前字段是否校验的场景。 提示 本组件的目的不是代替 jakarta.v..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-11-07T11:02:38.000Z"}],["meta",{"property":"article:modified_time","content":"2024-11-07T11:02:38.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"介绍\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-11-07T11:02:38.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"它是如何工作的？","slug":"它是如何工作的","link":"#它是如何工作的","children":[]},{"level":2,"title":"它解决了什么问题？","slug":"它解决了什么问题","link":"#它解决了什么问题","children":[]}],"git":{"updatedTime":1730977358000,"contributors":[{"name":"阿杆","email":"sticki@qq.com","commits":4}]},"autoDesc":true,"filePathRelative":"guide/introduction.md"}');export{i as comp,c as data};