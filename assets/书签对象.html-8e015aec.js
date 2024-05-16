import{_ as n,V as s,W as a,$ as t}from"./framework-e82ec112.js";const p={},e=t(`<h2 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍" aria-hidden="true">#</a> 介绍</h2><div class="hint-container info"><p class="hint-container-title">说明</p><p>本章节将介绍书签对象的基本用法。</p></div><div class="hint-container warning"><p class="hint-container-title">特别注意</p><p>书签对象需指定内部地址，即其他组件的 id 值，否则将抛出异常信息。</p></div><h2 id="创建对象" tabindex="-1"><a class="header-anchor" href="#创建对象" aria-hidden="true">#</a> 创建对象</h2><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">XEasyPdfTemplateBookmark</span> bookmark <span class="token operator">=</span> <span class="token class-name">XEasyPdfTemplateHandler<span class="token punctuation">.</span>Bookmark</span><span class="token punctuation">.</span><span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="基本用法" tabindex="-1"><a class="header-anchor" href="#基本用法" aria-hidden="true">#</a> 基本用法</h2><div class="hint-container info"><p class="hint-container-title">说明</p><p>创建一个带有书签的文档</p></div><h3 id="对象模式-java-代码" tabindex="-1"><a class="header-anchor" href="#对象模式-java-代码" aria-hidden="true">#</a> 对象模式 java 代码</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// 定义输出路径</span>
<span class="token class-name">String</span> outputPath <span class="token operator">=</span> <span class="token string">&quot;E:\\\\pdf\\\\test\\\\fo\\\\test.pdf&quot;</span><span class="token punctuation">;</span>
<span class="token comment">// 创建文档</span>
<span class="token class-name">XEasyPdfTemplateDocument</span> document <span class="token operator">=</span> <span class="token class-name">XEasyPdfTemplateHandler<span class="token punctuation">.</span>Document</span><span class="token punctuation">.</span><span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 创建页面</span>
<span class="token class-name">XEasyPdfTemplatePage</span> page <span class="token operator">=</span> <span class="token class-name">XEasyPdfTemplateHandler<span class="token punctuation">.</span>Page</span><span class="token punctuation">.</span><span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 创建书签</span>
<span class="token class-name">XEasyPdfTemplateBookmark</span> bookmark <span class="token operator">=</span> <span class="token class-name">XEasyPdfTemplateHandler<span class="token punctuation">.</span>Bookmark</span><span class="token punctuation">.</span><span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token comment">// 设置标题</span>
        <span class="token punctuation">.</span><span class="token function">setTitle</span><span class="token punctuation">(</span><span class="token string">&quot;目录&quot;</span><span class="token punctuation">)</span>
        <span class="token comment">// 设置内部地址（对应组件id）</span>
        <span class="token punctuation">.</span><span class="token function">setInternalDestination</span><span class="token punctuation">(</span><span class="token string">&quot;title&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 创建文本</span>
<span class="token class-name">XEasyPdfTemplateText</span> title <span class="token operator">=</span> <span class="token class-name">XEasyPdfTemplateHandler<span class="token punctuation">.</span>Text</span><span class="token punctuation">.</span><span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token comment">// 设置id</span>
        <span class="token punctuation">.</span><span class="token function">setId</span><span class="token punctuation">(</span><span class="token string">&quot;title&quot;</span><span class="token punctuation">)</span>
        <span class="token comment">// 设置文本</span>
        <span class="token punctuation">.</span><span class="token function">setText</span><span class="token punctuation">(</span><span class="token string">&quot;贵阳市简介&quot;</span><span class="token punctuation">)</span>
        <span class="token comment">// 设置字体</span>
        <span class="token punctuation">.</span><span class="token function">setFontFamily</span><span class="token punctuation">(</span><span class="token string">&quot;微软雅黑&quot;</span><span class="token punctuation">)</span>
        <span class="token comment">// 设置字体大小</span>
        <span class="token punctuation">.</span><span class="token function">setFontSize</span><span class="token punctuation">(</span><span class="token string">&quot;20pt&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 创建子书签</span>
<span class="token class-name">XEasyPdfTemplateBookmark</span> childBookmark <span class="token operator">=</span> <span class="token class-name">XEasyPdfTemplateHandler<span class="token punctuation">.</span>Bookmark</span><span class="token punctuation">.</span><span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token comment">// 设置标题</span>
        <span class="token punctuation">.</span><span class="token function">setTitle</span><span class="token punctuation">(</span><span class="token string">&quot;贵阳市行政区划&quot;</span><span class="token punctuation">)</span>
        <span class="token comment">// 设置内部地址（对应组件id）</span>
        <span class="token punctuation">.</span><span class="token function">setInternalDestination</span><span class="token punctuation">(</span><span class="token string">&quot;text&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 添加子书签</span>
bookmark<span class="token punctuation">.</span><span class="token function">addChild</span><span class="token punctuation">(</span>childBookmark<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 创建文本</span>
<span class="token class-name">XEasyPdfTemplateText</span> text <span class="token operator">=</span> <span class="token class-name">XEasyPdfTemplateHandler<span class="token punctuation">.</span>Text</span><span class="token punctuation">.</span><span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token comment">// 设置id</span>
        <span class="token punctuation">.</span><span class="token function">setId</span><span class="token punctuation">(</span><span class="token string">&quot;text&quot;</span><span class="token punctuation">)</span>
        <span class="token comment">// 设置文本</span>
        <span class="token punctuation">.</span><span class="token function">setText</span><span class="token punctuation">(</span><span class="token string">&quot;贵阳市行政区划&quot;</span><span class="token punctuation">)</span>
        <span class="token comment">// 设置字体</span>
        <span class="token punctuation">.</span><span class="token function">setFontFamily</span><span class="token punctuation">(</span><span class="token string">&quot;微软雅黑&quot;</span><span class="token punctuation">)</span>
        <span class="token comment">// 设置字体大小</span>
        <span class="token punctuation">.</span><span class="token function">setFontSize</span><span class="token punctuation">(</span><span class="token string">&quot;16pt&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 添加文本</span>
page<span class="token punctuation">.</span><span class="token function">addBodyComponent</span><span class="token punctuation">(</span>title<span class="token punctuation">,</span> text<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 添加页面</span>
document<span class="token punctuation">.</span><span class="token function">addPage</span><span class="token punctuation">(</span>page<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 添加书签</span>
document<span class="token punctuation">.</span><span class="token function">addBookmark</span><span class="token punctuation">(</span>bookmark<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 转换pdf</span>
document<span class="token punctuation">.</span><span class="token function">transform</span><span class="token punctuation">(</span>outputPath<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="xsl-fo-模板" tabindex="-1"><a class="header-anchor" href="#xsl-fo-模板" aria-hidden="true">#</a> xsl-fo 模板</h3><div class="hint-container info"><p class="hint-container-title">说明</p><p>对象模式生成的对应 xsl-fo 模板</p></div><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token prolog">&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;</span><span class="token comment">&lt;!--根标签--&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">fo:</span>root</span> <span class="token attr-name"><span class="token namespace">xmlns:</span>fo</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://www.w3.org/1999/XSL/Format<span class="token punctuation">&quot;</span></span>
         <span class="token attr-name"><span class="token namespace">xmlns:</span>fox</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://xmlgraphics.apache.org/fop/extensions<span class="token punctuation">&quot;</span></span>
         <span class="token attr-name"><span class="token namespace">xmlns:</span>xe</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://www.x-easypdf.cn/ns<span class="token punctuation">&quot;</span></span>
         <span class="token attr-name"><span class="token namespace">xmlns:</span>svg</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://www.w3.org/2000/svg<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!--页面模板--&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">fo:</span>layout-master-set</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">fo:</span>simple-page-master</span> <span class="token attr-name">master-name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>page1<span class="token punctuation">&quot;</span></span> <span class="token attr-name">page-height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>29.7cm<span class="token punctuation">&quot;</span></span> <span class="token attr-name">page-width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>21cm<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">fo:</span>region-body</span><span class="token punctuation">/&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">fo:</span>region-before</span><span class="token punctuation">/&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">fo:</span>region-after</span><span class="token punctuation">/&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">fo:</span>region-start</span><span class="token punctuation">/&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">fo:</span>region-end</span><span class="token punctuation">/&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">fo:</span>simple-page-master</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">fo:</span>layout-master-set</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">fo:</span>bookmark-tree</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">fo:</span>bookmark</span> <span class="token attr-name">internal-destination</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>title<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">fo:</span>bookmark-title</span><span class="token punctuation">&gt;</span></span>目录<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">fo:</span>bookmark-title</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">fo:</span>bookmark</span> <span class="token attr-name">internal-destination</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">fo:</span>bookmark-title</span><span class="token punctuation">&gt;</span></span>贵阳市行政区划<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">fo:</span>bookmark-title</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">fo:</span>bookmark</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">fo:</span>bookmark</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">fo:</span>bookmark-tree</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">fo:</span>page-sequence</span> <span class="token attr-name">master-reference</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>page1<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">fo:</span>flow</span> <span class="token attr-name">flow-name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>xsl-region-body<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">fo:</span>block</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>title<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">fo:</span>inline</span> <span class="token attr-name">font-family</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>微软雅黑<span class="token punctuation">&quot;</span></span> <span class="token attr-name">font-size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>20pt<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>贵阳市简介<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">fo:</span>inline</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">fo:</span>block</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">fo:</span>block</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">fo:</span>inline</span> <span class="token attr-name">font-family</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>微软雅黑<span class="token punctuation">&quot;</span></span> <span class="token attr-name">font-size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>16pt<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>贵阳市行政区划<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">fo:</span>inline</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">fo:</span>block</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">fo:</span>flow</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">fo:</span>page-sequence</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">fo:</span>root</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="pdf-文档效果" tabindex="-1"><a class="header-anchor" href="#pdf-文档效果" aria-hidden="true">#</a> pdf 文档效果</h3><figure><img src="https://oscimg.oschina.net/oscnet/up-5d8919f2a0cd9807bad780296fd34bcfae6.png" alt="生成的pdf文档" tabindex="0" loading="lazy"><figcaption>生成的pdf文档</figcaption></figure><h2 id="可配置项" tabindex="-1"><a class="header-anchor" href="#可配置项" aria-hidden="true">#</a> 可配置项</h2><div class="hint-container tip"><p class="hint-container-title">配置项</p><ul><li>setInitialCapacity：设置子书签初始化容量</li><li>setInternalDestination：设置内部地址</li><li>setTitle：设置标题</li><li>setFontFamily：设置字体名称</li><li>setFontStyle：设置字体样式</li><li>setFontWeight：设置字体重量</li><li>setFontSize：设置字体大小</li><li>setFontSizeAdjust：设置字体大小调整</li><li>setFontColor：设置字体颜色</li><li>addChild：添加子书签</li></ul></div>`,16),o=[e];function c(l,i){return s(),a("div",null,o)}const k=n(p,[["render",c],["__file","书签对象.html.vue"]]);export{k as default};
