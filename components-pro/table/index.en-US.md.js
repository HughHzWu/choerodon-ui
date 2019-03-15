webpackJsonp([221],{2357:function(t,d){t.exports={content:["section",["p","展示行列数据。"],["h2","何时使用"],["ul",["li",["p","当有大量结构化的数据需要展现时；"]],["li",["p","当需要对数据进行排序、搜索、分页、自定义操作等复杂行为时。"]]]],meta:{category:"Pro Components",cols:1,type:"Data Display",title:"Table",subtitle:"表格",filename:"components-pro/table/index.en-US.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#何时使用",title:"何时使用"},"何时使用"]],["li",["a",{className:"bisheng-toc-h2",href:"#API",title:"API"},"API"]]],api:["section",["h2","API"],["h3","Table"],["table",["thead",["tr",["th","参数"],["th","说明"],["th","类型"],["th","默认值"]]],["tbody",["tr",["td","header"],["td","表头"],["td","ReactNode ","|"," (records) => ReactNode"],["td"]],["tr",["td","footer"],["td","表脚"],["td","ReactNode ","|"," (records) => ReactNode"],["td"]],["tr",["td","border"],["td","是否显示边框"],["td","boolean"],["td","true"]],["tr",["td","selectionMode"],["td","选择记录的模式, 可选值: ",["code","rowbox"]," ",["code","click"]," ",["code","dblclick"]],["td","string"],["td","rowbox"]],["tr",["td","rowRenderer"],["td","设置航属性"],["td","(record, index) => object"],["td"]],["tr",["td","buttons"],["td","功能按钮，可选值：",["code","add"]," ",["code","delete"]," ",["code","remove"]," ",["code","save"]," ",["code","query"]," ",["code","reset"]," ",["code","expandAll"]," ",["code","collapseAll"]," ",["code","export"]," 或 数组 或 自定义按钮，数组为可选值字符串+按钮配置属性对象"],["td","string ","|"," ","[","string, object","]"," ","|","ReactNode"],["td"]],["tr",["td","queryFields"],["td","自定义查询字段组件，默认会根据queryDataSet中定义的field类型自动匹配组件"],["td","ReactNode[]"],["td"]],["tr",["td","queryFieldsLimit"],["td","头部显示的查询字段的数量，超出限制的查询字段放入弹出窗口"],["td","number"],["td","1"]],["tr",["td","showQueryBar"],["td","显示查询条"],["td","boolean"],["td","true"]],["tr",["td","rowHeight"],["td","行高"],["td","number ","|"," auto"],["td","30"]],["tr",["td","defaultRowExpanded"],["td","默认行是否展开，当dataSet没有设置expandField时才有效"],["td","boolean"],["td","false"]],["tr",["td","expandRowByClick"],["td","通过点击行来展开子行"],["td","boolean"],["td","false"]],["tr",["td","indentSize"],["td","展示树形数据时，每层缩进的宽度"],["td","number"],["td","15"]],["tr",["td","filter"],["td","数据过滤， 返回值 true - 显示 false - 不显示"],["td","(record) => boolean"],["td"]],["tr",["td","mode"],["td","表格展示的模式, tree需要配合dataSet的",["code","idField"],"和",["code","parentField"],"来展示，可选值: ",["code","list"]," ",["code","tree"]],["td","string"],["td","list"]]]],["p","更多属性请参考 ",["a",{title:null,href:"/components/core/#DataSetComponent"},"DataSetComponent"],"。"],["h3","Table.Column"],["table",["thead",["tr",["th","参数"],["th","说明"],["th","类型"],["th","默认值"]]],["tbody",["tr",["td","name"],["td","列对照的字段名"],["td","string"],["td"]],["tr",["td","width"],["td","列宽，不推荐给所有列设置宽度，而是给某一列不设置宽度达到自动宽度的效果"],["td","number"],["td"]],["tr",["td","minWidth"],["td","最小列宽"],["td","number"],["td","100"]],["tr",["td","header"],["td","列头"],["td","ReactNode ","|"," (dataSet, name) => ReactNode"],["td"]],["tr",["td","footer"],["td","列脚"],["td","ReactNode ","|"," (dataSet, name) => ReactNode"],["td"]],["tr",["td","renderer"],["td","单元格渲染回调"],["td","({ value, text, name, record, dataSet }) => ReactNode"],["td"]],["tr",["td","editor"],["td","编辑器, 设为",["code","true"],"时会根据field的type自动匹配编辑器"],["td","FormField ","|"," (record, name) => FormField ","|"," ",["code","true"]],["td"]],["tr",["td","lock"],["td","是否锁定， 可选值 ",["code","false"]," ",["code","true"]," ",["code","left"]," ",["code","right"]],["td","boolean","|"," string"],["td","false"]],["tr",["td","align"],["td","文字对齐方式，可选值： ",["code","left"]," ",["code","center"]," ",["code","right"]],["td","string"],["td"]],["tr",["td","resizable"],["td","是否可调整宽度"],["td","boolean"],["td","true"]],["tr",["td","sortable"],["td","是否可排序"],["td","boolean"],["td","false"]],["tr",["td","style"],["td","列单元格内链样式"],["td","object"],["td"]],["tr",["td","className"],["td","列单元格样式名"],["td","string"],["td"]],["tr",["td","headerStyle"],["td","列头内链样式"],["td","string"],["td"]],["tr",["td","headerClassName"],["td","列头样式名"],["td","string"],["td"]],["tr",["td","footerStyle"],["td","列脚内链样式"],["td","string"],["td"]],["tr",["td","footerClassName"],["td","列脚样式名"],["td","string"],["td"]],["tr",["td","help"],["td","额外信息，常用于提示"],["td",["code","string"]],["td",["code","undefined"]]],["tr",["td","showHelp"],["td","展示提示信息的方式"],["td",["code","'tooltip' \\| 'newLine' \\| 'none'"]],["td",["code","'tooltip'"]]]]]]}}});