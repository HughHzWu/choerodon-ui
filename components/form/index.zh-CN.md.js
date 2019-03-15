webpackJsonp([166],{2158:function(t,e){t.exports={content:["section",["p","具有数据收集、校验和提交功能的表单，包含复选框、单选框、输入框、下拉选择框等元素。"],["h2","表单"],["p","我们为 ",["code","form"]," 提供了以下三种排列方式："],["ul",["li",["p","水平排列：标签和表单控件水平排列；（默认）"]],["li",["p","垂直排列：标签和表单控件上下垂直排列；"]],["li",["p","行内排列：表单项水平行内排列。"]]],["h2","表单域"],["p","表单一定会包含表单域，表单域可以是输入控件，标准表单域，标签，下拉菜单，文本域等。"],["p","这里我们封装了表单域 ",["code","<Form.Item />"]," 。"],["pre",{lang:"jsx",highlighted:'<span class="token operator">&lt;</span>Form<span class="token punctuation">.</span>Item <span class="token punctuation">{</span><span class="token operator">...</span>props<span class="token punctuation">}</span><span class="token operator">></span>\n  <span class="token punctuation">{</span>children<span class="token punctuation">}</span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Form.Item</span><span class="token punctuation">></span></span>'},["code","<Form.Item {...props}>\n  {children}\n</Form.Item>"]]],meta:{category:"Components",subtitle:"表单",type:"Data Entry",cols:1,title:"Form",filename:"components/form/index.zh-CN.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#表单",title:"表单"},"表单"]],["li",["a",{className:"bisheng-toc-h2",href:"#表单域",title:"表单域"},"表单域"]],["li",["a",{className:"bisheng-toc-h2",href:"#API",title:"API"},"API"]],["li",["a",{className:"bisheng-toc-h2",href:"#在-TypeScript-中使用",title:"在 TypeScript 中使用"},"在 TypeScript 中使用"]]],api:["section",["h2","API"],["h3","Form"],["p",["strong","更多示例参考 ",["a",{title:null,href:"http://react-component.github.io/form/"},"rc-form"]],"。"],["table",["thead",["tr",["th","参数"],["th","说明"],["th","类型"],["th","默认值"]]],["tbody",["tr",["td","form"],["td","经 ",["code","Form.create()"]," 包装过的组件会自带 ",["code","this.props.form"]," 属性，直接传给 Form 即可。1.7.0 之后无需设置"],["td","object"],["td","无"]],["tr",["td","hideRequiredMark"],["td","隐藏所有表单项的必选标记"],["td","Boolean"],["td","false"]],["tr",["td","layout"],["td","表单布局(2.8 之后支持)"],["td","'horizontal'","|","'vertical'","|","'inline'"],["td","'horizontal'"]],["tr",["td","onSubmit"],["td","数据验证成功后回调事件"],["td","Function(e:Event)"],["td"]]]],["h3","Form.create(options)"],["p","使用方式如下："],["pre",{lang:"jsx",highlighted:'<span class="token keyword">class</span> <span class="token class-name">CustomizedForm</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>\n\nCustomizedForm <span class="token operator">=</span> Form<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span>CustomizedForm<span class="token punctuation">)</span><span class="token punctuation">;</span>'},["code","class CustomizedForm extends React.Component {}\n\nCustomizedForm = Form.create({})(CustomizedForm);"]],["p",["code","options"]," 的配置项如下。"],["table",["thead",["tr",["th","参数"],["th","说明"],["th","类型"]]],["tbody",["tr",["td","mapPropsToFields"],["td","把父组件的属性映射到表单项上（如：把 Redux store 中的值读出），需要对返回值中的表单域数据用 ",["a",{title:null,href:"#Form.createFormField"},["code","Form.createFormField"]]," 标记"],["td","(props) => Object{ fieldName: FormField { value } }"]],["tr",["td","validateMessages"],["td","默认校验信息，可用于把默认错误信息改为中文等，格式与 ",["a",{title:null,href:"https://github.com/yiminghe/async-validator/blob/master/src/messages.js"},"newMessages"]," 返回值一致"],["td","Object { ",["span","nested.path"],":"," String }"]],["tr",["td","onFieldsChange"],["td","当 ",["code","Form.Item"]," 子节点的值发生改变时触发，可以把对应的值转存到 Redux store"],["td","Function(props, fields)"]],["tr",["td","onValuesChange"],["td","任一表单域的值发生改变时的回调"],["td","(props, values) => void"]]]],["p","经过 ",["code","Form.create"]," 包装的组件将会自带 ",["code","this.props.form"]," 属性，",["code","this.props.form"]," 提供的 API 如下："],["blockquote",["p","注意：使用 ",["code","getFieldsValue"]," ",["code","getFieldValue"]," ",["code","setFieldsValue"]," 等时，应确保对应的 field 已经用 ",["code","getFieldDecorator"]," 注册过了。"]],["table",["thead",["tr",["th","方法     "],["th","说明                                    "],["th","类型      "]]],["tbody",["tr",["td","getFieldDecorator"],["td","用于和表单进行双向绑定，详见下方描述"],["td"]],["tr",["td","getFieldError"],["td","获取某个输入控件的 Error"],["td","Function(name)"]],["tr",["td","getFieldsError"],["td","获取一组输入控件的 Error ，如不传入参数，则获取全部组件的 Error"],["td","Function(","[","names: string","[","]])"]],["tr",["td","getFieldsValue"],["td","获取一组输入控件的值，如不传入参数，则获取全部组件的值"],["td","Function(","[","fieldNames: string","[","]])"]],["tr",["td","getFieldValue"],["td","获取一个输入控件的值"],["td","Function(fieldName: string)"]],["tr",["td","isFieldsTouched"],["td","判断是否任一输入控件经历过 ",["code","getFieldDecorator"]," 的值收集时机 ",["code","options.trigger"]],["td","(names?: string","[","]) => boolean"]],["tr",["td","isFieldTouched"],["td","判断一个输入控件是否经历过 ",["code","getFieldDecorator"]," 的值收集时机 ",["code","options.trigger"]],["td","(name: string) => boolean"]],["tr",["td","isFieldValidating"],["td","判断一个输入控件是否在校验状态"],["td","Function(name)"]],["tr",["td","resetFields"],["td","重置一组输入控件的值（为 ",["code","initialValue"],"）与状态，如不传入参数，则重置所有组件"],["td","Function(","[","names: string","[","]])"]],["tr",["td","setFields"],["td","设置一组输入控件的值与 Error。 ",["a",{title:null,href:"https://github.com/react-component/form/blob/3b9959b57ab30b41d8890ff30c79a7e7c383cad3/examples/server-validate.js#L74-L79"},"代码"]],["td","Function({ ",["span","fieldName"],":"," { value: any, errors: ",["span","Error"]," } })"]],["tr",["td","setFieldsValue"],["td","设置一组输入控件的值（注意：不要在 ",["code","componentWillReceiveProps"]," 内使用，否则会导致死循环，",["a",{title:null,href:"https://github.com/ant-design/ant-design/issues/2985"},"更多"],"）"],["td","Function({ ",["span","fieldName"],":"," value }"]],["tr",["td","validateFields"],["td","校验并获取一组输入域的值与 Error，若 fieldNames 参数为空，则校验全部组件"],["td","Function(","[","fieldNames: string","[","]], ",["span","options: object"],", callback: Function(errors, values, modify))"]],["tr",["td","validateFieldsAndScroll"],["td","与 ",["code","validateFields"]," 相似，但校验完后，如果校验不通过的菜单域不在可见范围内，则自动滚动进可见范围"],["td","参考 ",["code","validateFields"]]],["tr",["td","isModifiedFields"],["td","判断一组输入控件的值是否有修改"],["td","(names?: string","[","]) => boolean"]],["tr",["td","isModifiedField"],["td","判断一个输入控件的值是否有修改"],["td","(name: string) => boolean"]]]],["h3","this.props.form.validateFields/validateFieldsAndScroll(","[","fieldNames: string","[","]], ",["span","options: object"],", callback: Function(errors, values))"],["table",["thead",["tr",["th","参数"],["th","说明"],["th","类型"],["th","默认值"]]],["tbody",["tr",["td","options.first"],["td","若为 true，则每一表单域的都会在碰到第一个失败了的校验规则后停止校验"],["td","boolean"],["td","false"]],["tr",["td","options.firstFields"],["td","指定表单域会在碰到第一个失败了的校验规则后停止校验"],["td","String","[","]"],["td","[","]"]],["tr",["td","options.force"],["td","对已经校验过的表单域，在 validateTrigger 再次被触发时是否再次校验"],["td","boolean"],["td","false"]],["tr",["td","options.scroll"],["td","定义 validateFieldsAndScroll 的滚动行为，详细配置见 ",["a",{title:null,href:"https://github.com/yiminghe/dom-scroll-into-view#function-parameter"},"dom-scroll-into-view config"]],["td","Object"],["td","{}"]]]],["h3","Form.createFormField"],["p","用于标记 ",["code","mapPropsToFields"]," 返回的表单域数据，",["a",{title:null,href:"#components-form-demo-global-state"},"例子"],"。"],["h3","this.props.form.getFieldDecorator(id, options)"],["p","经过 ",["code","getFieldDecorator"]," 包装的控件，表单控件会自动添加 ",["code","value"],"（或 ",["code","valuePropName"]," 指定的其他属性） ",["code","onChange"],"（或 ",["code","trigger"]," 指定的其他属性），数据同步将被 Form 接管，这会导致以下结果："],["ol",["li",["p","你",["strong","不再需要也不应该"],"用 ",["code","onChange"]," 来做同步，但还是可以继续监听 ",["code","onChange"]," 等事件。"]],["li",["p","你不能用控件的 ",["code","value"]," ",["code","defaultValue"]," 等属性来设置表单域的值，默认值可以用 ",["code","getFieldDecorator"]," 里的 ",["code","initialValue"],"。"]],["li",["p","你不应该用 ",["code","setState"],"，可以使用 ",["code","this.props.form.setFieldsValue"]," 来动态改变表单值。"]]],["h4","特别注意"],["ol",["li",["p",["code","getFieldDecorator"]," 不能用于装饰纯函数组件。"]],["li",["p","如果使用的是 ",["code","react@<15.3.0"],"，则 ",["code","getFieldDecorator"]," 调用不能位于纯函数组件中: ",["a",{title:null,href:"https://github.com/facebook/react/pull/6534"},"https://github.com/facebook/react/pull/6534"]]]],["h4","getFieldDecorator(id, options) 参数"],["table",["thead",["tr",["th","参数"],["th","说明"],["th","类型"],["th","默认值"]]],["tbody",["tr",["td","id"],["td","必填输入控件唯一标志。支持嵌套式的",["a",{title:null,href:"https://github.com/react-component/form/pull/48"},"写法"],"。"],["td","string"],["td"]],["tr",["td","options.getValueFromEvent"],["td","可以把 onChange 的参数（如 event）转化为控件的值"],["td","function(..args)"],["td",["a",{title:null,href:"https://github.com/react-component/form#option-object"},"reference"]]],["tr",["td","options.initialValue"],["td","子节点的初始值，类型、可选值均由子节点决定(注意：由于内部校验时使用 ",["code","==="]," 判断是否变化，建议使用变量缓存所需设置的值而非直接使用字面量))"],["td"],["td"]],["tr",["td","options.normalize"],["td","转换默认的 value 给控件，",["a",{title:null,href:"https://codepen.io/afc163/pen/JJVXzG?editors=001"},"一个选择全部的例子"]],["td","function(value, prevValue, allValues): any"],["td","-"]],["tr",["td","options.rules"],["td","校验规则，参考下方文档"],["td","object","[","]"],["td"]],["tr",["td","options.trigger"],["td","收集子节点的值的时机"],["td","string"],["td","'onChange'"]],["tr",["td","options.validateFirst"],["td","当某一规则校验不通过时，是否停止剩下的规则的校验"],["td","boolean"],["td","false"]],["tr",["td","options.validateTrigger"],["td","校验子节点值的时机"],["td","string","|","string","[","]"],["td","'onChange'"]],["tr",["td","options.valuePropName"],["td","子节点的值的属性，如 Switch 的是 'checked'"],["td","string"],["td","'value'"]]]],["p","更多参数请查看 ",["a",{title:null,href:"https://github.com/react-component/form#option-object"},"rc-form option"],"。"],["h3","Form.Item"],["p","注意："],["ul",["li",["p","一个 Form.Item 建议只放一个被 getFieldDecorator 装饰过的 child，当有多个被装饰过的 child 时，",["code","help"]," ",["code","required"]," ",["code","validateStatus"]," 无法自动生成。"]],["li",["p",["code","2.2.0"]," 之前，只有当表单域为 Form.Item 的子元素时，才会自动生成 ",["code","help"]," ",["code","required"]," ",["code","validateStatus"],"，嵌套情况需要自行设置。"]]],["table",["thead",["tr",["th","参数"],["th","说明"],["th","类型"],["th","默认值"]]],["tbody",["tr",["td","colon"],["td","配合 label 属性使用，表示是否显示 label 后面的冒号"],["td","boolean"],["td","true"]],["tr",["td","extra"],["td","额外的提示信息，和 help 类似，当需要错误信息和提示文案同时出现时，可以使用这个。"],["td","string","|","ReactNode"],["td"]],["tr",["td","hasFeedback"],["td","配合 validateStatus 属性使用，展示校验状态图标，建议只配合 Input 组件使用"],["td","boolean"],["td","false"]],["tr",["td","help"],["td","提示信息，如不设置，则会根据校验规则自动生成"],["td","string","|","ReactNode"],["td"]],["tr",["td","label"],["td","label 标签的文本"],["td","string","|","ReactNode"],["td"]],["tr",["td","labelCol"],["td","label 标签布局，同 ",["code","<Col>"]," 组件，设置 ",["code","span"]," ",["code","offset"]," 值，如 ",["code","{span: 3, offset: 12}"]," 或 ",["code","sm: {span: 3, offset: 12}"]],["td",["a",{title:null,href:"https://ant.design/components/grid/#Col"},"object"]],["td"]],["tr",["td","required"],["td","是否必填，如不设置，则会根据校验规则自动生成"],["td","boolean"],["td","false"]],["tr",["td","validateStatus"],["td","校验状态，如不设置，则会根据校验规则自动生成，可选：'success' 'warning' 'error' 'validating'"],["td","string"],["td"]],["tr",["td","wrapperCol"],["td","需要为输入控件设置布局样式时，使用该属性，用法同 labelCol"],["td",["a",{title:null,href:"https://ant.design/components/grid/#Col"},"object"]],["td"]]]],["h3","校验规则"],["table",["thead",["tr",["th","参数"],["th","说明"],["th","类型"],["th","默认值"]]],["tbody",["tr",["td","enum"],["td","枚举类型"],["td","string"],["td","-"]],["tr",["td","len"],["td","字段长度"],["td","number"],["td","-"]],["tr",["td","max"],["td","最大长度"],["td","number"],["td","-"]],["tr",["td","message"],["td","校验文案"],["td","string"],["td","-"]],["tr",["td","min"],["td","最小长度"],["td","number"],["td","-"]],["tr",["td","pattern"],["td","正则表达式校验"],["td","RegExp"],["td","-"]],["tr",["td","required"],["td","是否必选"],["td","boolean"],["td",["code","false"]]],["tr",["td","transform"],["td","校验前转换字段值"],["td","function(value) => transformedValue:any"],["td","-"]],["tr",["td","type"],["td","内建校验类型，",["a",{title:null,href:"https://github.com/yiminghe/async-validator#type"},"可选项"]],["td","string"],["td","'string'"]],["tr",["td","validator"],["td","自定义校验（注意，",["a",{title:null,href:"https://github.com/ant-design/ant-design/issues/5155"},"callback 必须被调用"],"）"],["td","function(rule, value, callback)"],["td","-"]],["tr",["td","whitespace"],["td","必选时，空格是否会被视为错误"],["td","boolean"],["td",["code","false"]]]]],["p","更多高级用法可研究 ",["a",{title:null,href:"https://github.com/yiminghe/async-validator"},"async-validator"],"。"],["style","\n.code-box-demo .ant-form:not(.ant-form-inline):not(.ant-form-vertical) {\n  max-width: 600px;\n}\n"],["h2","在 TypeScript 中使用"],["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Form <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'choerodon-ui\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> FormComponentProps <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'choerodon-ui/lib/form\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">interface</span> <span class="token class-name">UserFormProps</span> <span class="token keyword">extends</span> <span class="token class-name">FormComponentProps</span> <span class="token punctuation">{</span>\n  age<span class="token punctuation">:</span> number<span class="token punctuation">;</span>\n  name<span class="token punctuation">:</span> string<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">class</span> <span class="token class-name">UserForm</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span><span class="token operator">&lt;</span>UserFormProps<span class="token punctuation">,</span> any<span class="token operator">></span> <span class="token punctuation">{</span>\n\n<span class="token punctuation">}</span>'},["code","import { Form } from 'choerodon-ui';\nimport { FormComponentProps } from 'choerodon-ui/lib/form';\n\ninterface UserFormProps extends FormComponentProps {\n  age: number;\n  name: string;\n}\n\nclass UserForm extends React.Component<UserFormProps, any> {\n\n}"]]]}}});