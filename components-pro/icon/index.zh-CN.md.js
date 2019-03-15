webpackJsonp([260],{2297:function(n,a,t){n.exports={content:["section",["p","语义化的矢量图形。"],["h2","图标的命名规范"],["p","我们为每个图标赋予了语义化的命名，命名规则如下:"],["ul",["li",["p","实心和描线图标保持同名，用 ",["code","-o"]," 来区分，比如 ",["code","question-circle"],"（实心） 和 ",["code","question-circle-o"],"（描线）；"]],["li",["p","命名顺序：",["code","[图标名]-[形状?]-[描线?]-[方向?]"],"。"]]],["blockquote",["p",["code","?"]," 为可选。"]],["p","完整的图标设计规范请访问 ",["a",{title:null,href:"/docs/spec/icon"},"图标规范"],"。"],["h2","如何使用"],["p","使用 ",["code","<Icon />"]," 标签声明组件，指定图标对应的 type 属性，示例代码如下:"],["pre",{lang:"html",highlighted:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Icon</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>add_location<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>'},["code",'<Icon type="add_location" />']],["h2","图标列表"],["blockquote",["p","点击图标复制代码。"]],function(){var n=t(0),a=(t(4),t(229)),s=function(n){return n&&n.__esModule?n:{default:n}}(a);return n.createElement(s.default,{className:"icons"})}],meta:{category:"Pro Components",subtitle:"图标",type:"General",title:"Icon",cols:1,toc:!1,filename:"components-pro/icon/index.zh-CN.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#图标的命名规范",title:"图标的命名规范"},"图标的命名规范"]],["li",["a",{className:"bisheng-toc-h2",href:"#如何使用",title:"如何使用"},"如何使用"]],["li",["a",{className:"bisheng-toc-h2",href:"#图标列表",title:"图标列表"},"图标列表"]],["li",["a",{className:"bisheng-toc-h2",href:"#API",title:"API"},"API"]]],api:["section",["h2","API"],["p","由于图标字体本质上还是文字，可以使用 ",["code","style"]," 和 ",["code","className"]," 设置图标的大小和颜色。"],["pre",{lang:"jsx",highlighted:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Icon</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>add_location<span class="token punctuation">"</span></span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> fontSize<span class="token punctuation">:</span> <span class="token number">16</span><span class="token punctuation">,</span> color<span class="token punctuation">:</span> <span class="token string">\'#08c\'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>'},["code","<Icon type=\"add_location\" style={{ fontSize: 16, color: '#08c' }} />"]],["p","图标的属性说明如下："],["table",["thead",["tr",["th","属性"],["th","说明"],["th","类型"],["th","默认值"]]],["tbody",["tr",["td","type"],["td","图标类型"],["td","string"],["td","-"]]]]]}}});