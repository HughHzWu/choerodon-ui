webpackJsonp([179],{2139:function(t,e){t.exports={content:["section",["p","Cascade selection box."],["h2","When To Use"],["ul",["li",["p","When you need to select from a set of associated data set. Such as province/city/district, company level, things classification."]],["li",["p","When selecting from a large data set, with multi-stage classification separated for easy selection."]],["li",["p","Chooses cascade items in one float layer for better user experience."]]]],meta:{category:"Components",type:"Data Entry",title:"Cascader",filename:"components/cascader/index.en-US.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#When-To-Use",title:"When To Use"},"When To Use"]],["li",["a",{className:"bisheng-toc-h2",href:"#API",title:"API"},"API"]],["li",["a",{className:"bisheng-toc-h2",href:"#Methods",title:"Methods"},"Methods"]]],api:["section",["h2","API"],["pre",{lang:"html",highlighted:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Cascader</span> <span class="token attr-name">options</span><span class="token attr-value"><span class="token punctuation">=</span>{options}</span> <span class="token attr-name">onChange</span><span class="token attr-value"><span class="token punctuation">=</span>{onChange}</span> <span class="token punctuation">/></span></span>'},["code","<Cascader options={options} onChange={onChange} />"]],["table",["thead",["tr",["th","Property"],["th","Description"],["th","Type"],["th","Default"]]],["tbody",["tr",["td","allowClear"],["td","whether allow clear"],["td","boolean"],["td","true"]],["tr",["td","autoFocus"],["td","get focus when component mounted"],["td","boolean"],["td","false"]],["tr",["td","changeOnSelect"],["td","change value on each selection if set to true, see above demo for details"],["td","boolean"],["td","false"]],["tr",["td","className"],["td","additional css class"],["td","string"],["td","-"]],["tr",["td","defaultValue"],["td","initial selected value"],["td","string","[","]"],["td","[","]"]],["tr",["td","disabled"],["td","whether disabled select"],["td","boolean"],["td","false"]],["tr",["td","displayRender"],["td","render function of displaying selected options"],["td",["code","(label, selectedOptions) => ReactNode"]],["td",["code","label => label.join(' / ')"]]],["tr",["td","expandTrigger"],["td","expand current item when click or hover, one of 'click' 'hover'"],["td","string"],["td","'click'"]],["tr",["td","getPopupContainer"],["td","Parent Node which the selector should be rendered to. Default to ",["code","body"],". When position issues happen, try to modify it into scrollable content and position it relative.",["a",{title:null,href:"https://codepen.io/afc163/pen/zEjNOy?editors=0010"},"example"]],["td","Function(triggerNode)"],["td","() => document.body"]],["tr",["td","loadData"],["td","To load option lazily, and it cannot work with ",["code","showSearch"]],["td",["code","(selectedOptions) => void"]],["td","-"]],["tr",["td","notFoundContent"],["td","Specify content to show when no result matches."],["td","string"],["td","'Not Found'"]],["tr",["td","options"],["td","data options of cascade"],["td","object"],["td","-"]],["tr",["td","placeholder"],["td","input placeholder"],["td","string"],["td","'Please select'"]],["tr",["td","popupClassName"],["td","additional className of popup overlay"],["td","string"],["td","-"]],["tr",["td","popupPlacement"],["td","use preset popup align config from builtinPlacements：",["code","bottomLeft"]," ",["code","bottomRight"]," ",["code","topLeft"]," ",["code","topRight"]],["td","string"],["td",["code","bottomLeft"]]],["tr",["td","popupVisible"],["td","set visible of cascader popup"],["td","boolean"],["td","-"]],["tr",["td","showSearch"],["td","Whether show search input in single mode."],["td","boolean","|","object"],["td","false"]],["tr",["td","size"],["td","input size, one of ",["code","large"]," ",["code","default"]," ",["code","small"]],["td","string"],["td",["code","default"]]],["tr",["td","style"],["td","additional style"],["td","string"],["td","-"]],["tr",["td","value"],["td","selected value"],["td","string","[","]"],["td","-"]],["tr",["td","onChange"],["td","callback when finishing cascader select"],["td",["code","(value, selectedOptions) => void"]],["td","-"]],["tr",["td","onPopupVisibleChange"],["td","callback when popup shown or hidden"],["td",["code","(value) => void"]],["td","-"]]]],["p","Fields in ",["code","showSearch"],":"],["table",["thead",["tr",["th","Property"],["th","Description"],["th","Type"],["th","Default"]]],["tbody",["tr",["td","filter"],["td","The function will receive two arguments, inputValue and option, if the function returns true, the option will be included in the filtered set; Otherwise, it will be excluded."],["td",["code","function(inputValue, path): boolean"]],["td"]],["tr",["td","matchInputWidth"],["td","Whether the width of result list equals to input's"],["td","boolean"],["td"]],["tr",["td","render"],["td","Used to render filtered options."],["td",["code","function(inputValue, path): ReactNode"]],["td"]],["tr",["td","sort"],["td","Used to sort filtered options."],["td",["code","function(a, b, inputValue)"]],["td"]]]],["h2","Methods"],["table",["thead",["tr",["th","Name"],["th","Description"]]],["tbody",["tr",["td","blur()"],["td","remove focus"]],["tr",["td","focus()"],["td","get focus"]]]],["style","\n.ant-cascader-picker {\n  width: 300px;\n}\n"]]}}});