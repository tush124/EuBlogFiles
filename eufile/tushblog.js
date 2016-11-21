/* http://prismjs.com/download.html?themes=prism-okaidia&languages=markup+css+clike+javascript+c+cpp+java+python&plugins=line-highlight+line-numbers */
var _self="undefined"!=typeof window?window:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{},Prism=function(){var e=/\blang(?:uage)?-(\w+)\b/i,t=0,n=_self.Prism={util:{encode:function(e){return e instanceof a?new a(e.type,n.util.encode(e.content),e.alias):"Array"===n.util.type(e)?e.map(n.util.encode):e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(e){return Object.prototype.toString.call(e).match(/\[object (\w+)\]/)[1]},objId:function(e){return e.__id||Object.defineProperty(e,"__id",{value:++t}),e.__id},clone:function(e){var t=n.util.type(e);switch(t){case"Object":var a={};for(var r in e)e.hasOwnProperty(r)&&(a[r]=n.util.clone(e[r]));return a;case"Array":return e.map&&e.map(function(e){return n.util.clone(e)})}return e}},languages:{extend:function(e,t){var a=n.util.clone(n.languages[e]);for(var r in t)a[r]=t[r];return a},insertBefore:function(e,t,a,r){r=r||n.languages;var i=r[e];if(2==arguments.length){a=arguments[1];for(var l in a)a.hasOwnProperty(l)&&(i[l]=a[l]);return i}var o={};for(var s in i)if(i.hasOwnProperty(s)){if(s==t)for(var l in a)a.hasOwnProperty(l)&&(o[l]=a[l]);o[s]=i[s]}return n.languages.DFS(n.languages,function(t,n){n===r[e]&&t!=e&&(this[t]=o)}),r[e]=o},DFS:function(e,t,a,r){r=r||{};for(var i in e)e.hasOwnProperty(i)&&(t.call(e,i,e[i],a||i),"Object"!==n.util.type(e[i])||r[n.util.objId(e[i])]?"Array"!==n.util.type(e[i])||r[n.util.objId(e[i])]||(r[n.util.objId(e[i])]=!0,n.languages.DFS(e[i],t,i,r)):(r[n.util.objId(e[i])]=!0,n.languages.DFS(e[i],t,null,r)))}},plugins:{},highlightAll:function(e,t){var a={callback:t,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};n.hooks.run("before-highlightall",a);for(var r,i=a.elements||document.querySelectorAll(a.selector),l=0;r=i[l++];)n.highlightElement(r,e===!0,a.callback)},highlightElement:function(t,a,r){for(var i,l,o=t;o&&!e.test(o.className);)o=o.parentNode;o&&(i=(o.className.match(e)||[,""])[1].toLowerCase(),l=n.languages[i]),t.className=t.className.replace(e,"").replace(/\s+/g," ")+" language-"+i,o=t.parentNode,/pre/i.test(o.nodeName)&&(o.className=o.className.replace(e,"").replace(/\s+/g," ")+" language-"+i);var s=t.textContent,u={element:t,language:i,grammar:l,code:s};if(n.hooks.run("before-sanity-check",u),!u.code||!u.grammar)return n.hooks.run("complete",u),void 0;if(n.hooks.run("before-highlight",u),a&&_self.Worker){var g=new Worker(n.filename);g.onmessage=function(e){u.highlightedCode=e.data,n.hooks.run("before-insert",u),u.element.innerHTML=u.highlightedCode,r&&r.call(u.element),n.hooks.run("after-highlight",u),n.hooks.run("complete",u)},g.postMessage(JSON.stringify({language:u.language,code:u.code,immediateClose:!0}))}else u.highlightedCode=n.highlight(u.code,u.grammar,u.language),n.hooks.run("before-insert",u),u.element.innerHTML=u.highlightedCode,r&&r.call(t),n.hooks.run("after-highlight",u),n.hooks.run("complete",u)},highlight:function(e,t,r){var i=n.tokenize(e,t);return a.stringify(n.util.encode(i),r)},tokenize:function(e,t){var a=n.Token,r=[e],i=t.rest;if(i){for(var l in i)t[l]=i[l];delete t.rest}e:for(var l in t)if(t.hasOwnProperty(l)&&t[l]){var o=t[l];o="Array"===n.util.type(o)?o:[o];for(var s=0;s<o.length;++s){var u=o[s],g=u.inside,c=!!u.lookbehind,h=!!u.greedy,f=0,d=u.alias;if(h&&!u.pattern.global){var p=u.pattern.toString().match(/[imuy]*$/)[0];u.pattern=RegExp(u.pattern.source,p+"g")}u=u.pattern||u;for(var m=0,y=0;m<r.length;y+=r[m].length,++m){var v=r[m];if(r.length>e.length)break e;if(!(v instanceof a)){u.lastIndex=0;var b=u.exec(v),k=1;if(!b&&h&&m!=r.length-1){if(u.lastIndex=y,b=u.exec(e),!b)break;for(var w=b.index+(c?b[1].length:0),_=b.index+b[0].length,A=m,P=y,j=r.length;j>A&&_>P;++A)P+=r[A].length,w>=P&&(++m,y=P);if(r[m]instanceof a||r[A-1].greedy)continue;k=A-m,v=e.slice(y,P),b.index-=y}if(b){c&&(f=b[1].length);var w=b.index+f,b=b[0].slice(f),_=w+b.length,O=v.slice(0,w),x=v.slice(_),S=[m,k];O&&S.push(O);var N=new a(l,g?n.tokenize(b,g):b,d,b,h);S.push(N),x&&S.push(x),Array.prototype.splice.apply(r,S)}}}}}return r},hooks:{all:{},add:function(e,t){var a=n.hooks.all;a[e]=a[e]||[],a[e].push(t)},run:function(e,t){var a=n.hooks.all[e];if(a&&a.length)for(var r,i=0;r=a[i++];)r(t)}}},a=n.Token=function(e,t,n,a,r){this.type=e,this.content=t,this.alias=n,this.length=0|(a||"").length,this.greedy=!!r};if(a.stringify=function(e,t,r){if("string"==typeof e)return e;if("Array"===n.util.type(e))return e.map(function(n){return a.stringify(n,t,e)}).join("");var i={type:e.type,content:a.stringify(e.content,t,r),tag:"span",classes:["token",e.type],attributes:{},language:t,parent:r};if("comment"==i.type&&(i.attributes.spellcheck="true"),e.alias){var l="Array"===n.util.type(e.alias)?e.alias:[e.alias];Array.prototype.push.apply(i.classes,l)}n.hooks.run("wrap",i);var o=Object.keys(i.attributes).map(function(e){return e+'="'+(i.attributes[e]||"").replace(/"/g,"&quot;")+'"'}).join(" ");return"<"+i.tag+' class="'+i.classes.join(" ")+'"'+(o?" "+o:"")+">"+i.content+"</"+i.tag+">"},!_self.document)return _self.addEventListener?(_self.addEventListener("message",function(e){var t=JSON.parse(e.data),a=t.language,r=t.code,i=t.immediateClose;_self.postMessage(n.highlight(r,n.languages[a],a)),i&&_self.close()},!1),_self.Prism):_self.Prism;var r=document.currentScript||[].slice.call(document.getElementsByTagName("script")).pop();return r&&(n.filename=r.src,document.addEventListener&&!r.hasAttribute("data-manual")&&("loading"!==document.readyState?window.requestAnimationFrame?window.requestAnimationFrame(n.highlightAll):window.setTimeout(n.highlightAll,16):document.addEventListener("DOMContentLoaded",n.highlightAll))),_self.Prism}();"undefined"!=typeof module&&module.exports&&(module.exports=Prism),"undefined"!=typeof global&&(global.Prism=Prism);
Prism.languages.markup={comment:/<!--[\w\W]*?-->/,prolog:/<\?[\w\W]+?\?>/,doctype:/<!DOCTYPE[\w\W]+?>/i,cdata:/<!\[CDATA\[[\w\W]*?]]>/i,tag:{pattern:/<\/?(?!\d)[^\s>\/=$<]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\\1|\\?(?!\1)[\w\W])*\1|[^\s'">=]+))?)*\s*\/?>/i,inside:{tag:{pattern:/^<\/?[^\s>\/]+/i,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"attr-value":{pattern:/=(?:('|")[\w\W]*?(\1)|[^\s>]+)/i,inside:{punctuation:/[=>"']/}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:/&#?[\da-z]{1,8};/i},Prism.hooks.add("wrap",function(a){"entity"===a.type&&(a.attributes.title=a.content.replace(/&amp;/,"&"))}),Prism.languages.xml=Prism.languages.markup,Prism.languages.html=Prism.languages.markup,Prism.languages.mathml=Prism.languages.markup,Prism.languages.svg=Prism.languages.markup;
Prism.languages.css={comment:/\/\*[\w\W]*?\*\//,atrule:{pattern:/@[\w-]+?.*?(;|(?=\s*\{))/i,inside:{rule:/@[\w-]+/}},url:/url\((?:(["'])(\\(?:\r\n|[\w\W])|(?!\1)[^\\\r\n])*\1|.*?)\)/i,selector:/[^\{\}\s][^\{\};]*?(?=\s*\{)/,string:{pattern:/("|')(\\(?:\r\n|[\w\W])|(?!\1)[^\\\r\n])*\1/,greedy:!0},property:/(\b|\B)[\w-]+(?=\s*:)/i,important:/\B!important\b/i,"function":/[-a-z0-9]+(?=\()/i,punctuation:/[(){};:]/},Prism.languages.css.atrule.inside.rest=Prism.util.clone(Prism.languages.css),Prism.languages.markup&&(Prism.languages.insertBefore("markup","tag",{style:{pattern:/(<style[\w\W]*?>)[\w\W]*?(?=<\/style>)/i,lookbehind:!0,inside:Prism.languages.css,alias:"language-css"}}),Prism.languages.insertBefore("inside","attr-value",{"style-attr":{pattern:/\s*style=("|').*?\1/i,inside:{"attr-name":{pattern:/^\s*style/i,inside:Prism.languages.markup.tag.inside},punctuation:/^\s*=\s*['"]|['"]\s*$/,"attr-value":{pattern:/.+/i,inside:Prism.languages.css}},alias:"language-css"}},Prism.languages.markup.tag));
Prism.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\w\W]*?\*\//,lookbehind:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0}],string:{pattern:/(["'])(\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[a-z0-9_\.\\]+/i,lookbehind:!0,inside:{punctuation:/(\.|\\)/}},keyword:/\b(if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,"boolean":/\b(true|false)\b/,"function":/[a-z0-9_]+(?=\()/i,number:/\b-?(?:0x[\da-f]+|\d*\.?\d+(?:e[+-]?\d+)?)\b/i,operator:/--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,punctuation:/[{}[\];(),.:]/};
Prism.languages.javascript=Prism.languages.extend("clike",{keyword:/\b(as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|var|void|while|with|yield)\b/,number:/\b-?(0x[\dA-Fa-f]+|0b[01]+|0o[0-7]+|\d*\.?\d+([Ee][+-]?\d+)?|NaN|Infinity)\b/,"function":/[_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*(?=\()/i,operator:/--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*\*?|\/|~|\^|%|\.{3}/}),Prism.languages.insertBefore("javascript","keyword",{regex:{pattern:/(^|[^\/])\/(?!\/)(\[.+?]|\\.|[^\/\\\r\n])+\/[gimyu]{0,5}(?=\s*($|[\r\n,.;})]))/,lookbehind:!0,greedy:!0}}),Prism.languages.insertBefore("javascript","string",{"template-string":{pattern:/`(?:\\\\|\\?[^\\])*?`/,greedy:!0,inside:{interpolation:{pattern:/\$\{[^}]+\}/,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:Prism.languages.javascript}},string:/[\s\S]+/}}}),Prism.languages.markup&&Prism.languages.insertBefore("markup","tag",{script:{pattern:/(<script[\w\W]*?>)[\w\W]*?(?=<\/script>)/i,lookbehind:!0,inside:Prism.languages.javascript,alias:"language-javascript"}}),Prism.languages.js=Prism.languages.javascript;
Prism.languages.c=Prism.languages.extend("clike",{keyword:/\b(asm|typeof|inline|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|int|long|register|return|short|signed|sizeof|static|struct|switch|typedef|union|unsigned|void|volatile|while)\b/,operator:/\-[>-]?|\+\+?|!=?|<<?=?|>>?=?|==?|&&?|\|?\||[~^%?*\/]/,number:/\b-?(?:0x[\da-f]+|\d*\.?\d+(?:e[+-]?\d+)?)[ful]*\b/i}),Prism.languages.insertBefore("c","string",{macro:{pattern:/(^\s*)#\s*[a-z]+([^\r\n\\]|\\.|\\(?:\r\n?|\n))*/im,lookbehind:!0,alias:"property",inside:{string:{pattern:/(#\s*include\s*)(<.+?>|("|')(\\?.)+?\3)/,lookbehind:!0},directive:{pattern:/(#\s*)\b(define|elif|else|endif|error|ifdef|ifndef|if|import|include|line|pragma|undef|using)\b/,lookbehind:!0,alias:"keyword"}}},constant:/\b(__FILE__|__LINE__|__DATE__|__TIME__|__TIMESTAMP__|__func__|EOF|NULL|stdin|stdout|stderr)\b/}),delete Prism.languages.c["class-name"],delete Prism.languages.c["boolean"];
Prism.languages.cpp=Prism.languages.extend("c",{keyword:/\b(alignas|alignof|asm|auto|bool|break|case|catch|char|char16_t|char32_t|class|compl|const|constexpr|const_cast|continue|decltype|default|delete|do|double|dynamic_cast|else|enum|explicit|export|extern|float|for|friend|goto|if|inline|int|long|mutable|namespace|new|noexcept|nullptr|operator|private|protected|public|register|reinterpret_cast|return|short|signed|sizeof|static|static_assert|static_cast|struct|switch|template|this|thread_local|throw|try|typedef|typeid|typename|union|unsigned|using|virtual|void|volatile|wchar_t|while)\b/,"boolean":/\b(true|false)\b/,operator:/[-+]{1,2}|!=?|<{1,2}=?|>{1,2}=?|\->|:{1,2}|={1,2}|\^|~|%|&{1,2}|\|?\||\?|\*|\/|\b(and|and_eq|bitand|bitor|not|not_eq|or|or_eq|xor|xor_eq)\b/}),Prism.languages.insertBefore("cpp","keyword",{"class-name":{pattern:/(class\s+)[a-z0-9_]+/i,lookbehind:!0}});
Prism.languages.java=Prism.languages.extend("clike",{keyword:/\b(abstract|continue|for|new|switch|assert|default|goto|package|synchronized|boolean|do|if|private|this|break|double|implements|protected|throw|byte|else|import|public|throws|case|enum|instanceof|return|transient|catch|extends|int|short|try|char|final|interface|static|void|class|finally|long|strictfp|volatile|const|float|native|super|while)\b/,number:/\b0b[01]+\b|\b0x[\da-f]*\.?[\da-fp\-]+\b|\b\d*\.?\d+(?:e[+-]?\d+)?[df]?\b/i,operator:{pattern:/(^|[^.])(?:\+[+=]?|-[-=]?|!=?|<<?=?|>>?>?=?|==?|&[&=]?|\|[|=]?|\*=?|\/=?|%=?|\^=?|[?:~])/m,lookbehind:!0}}),Prism.languages.insertBefore("java","function",{annotation:{alias:"punctuation",pattern:/(^|[^.])@\w+/,lookbehind:!0}});
Prism.languages.python={"triple-quoted-string":{pattern:/"""[\s\S]+?"""|'''[\s\S]+?'''/,alias:"string"},comment:{pattern:/(^|[^\\])#.*/,lookbehind:!0},string:{pattern:/("|')(?:\\\\|\\?[^\\\r\n])*?\1/,greedy:!0},"function":{pattern:/((?:^|\s)def[ \t]+)[a-zA-Z_][a-zA-Z0-9_]*(?=\()/g,lookbehind:!0},"class-name":{pattern:/(\bclass\s+)[a-z0-9_]+/i,lookbehind:!0},keyword:/\b(?:as|assert|async|await|break|class|continue|def|del|elif|else|except|exec|finally|for|from|global|if|import|in|is|lambda|pass|print|raise|return|try|while|with|yield)\b/,"boolean":/\b(?:True|False)\b/,number:/\b-?(?:0[bo])?(?:(?:\d|0x[\da-f])[\da-f]*\.?\d*|\.\d+)(?:e[+-]?\d+)?j?\b/i,operator:/[-+%=]=?|!=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]|\b(?:or|and|not)\b/,punctuation:/[{}[\];(),.:]/};
!function(){function e(e,t){return Array.prototype.slice.call((t||document).querySelectorAll(e))}function t(e,t){return t=" "+t+" ",(" "+e.className+" ").replace(/[\n\t]/g," ").indexOf(t)>-1}function n(e,n,i){for(var o,a=n.replace(/\s+/g,"").split(","),l=+e.getAttribute("data-line-offset")||0,d=r()?parseInt:parseFloat,c=d(getComputedStyle(e).lineHeight),s=0;o=a[s++];){o=o.split("-");var u=+o[0],m=+o[1]||u,h=document.createElement("div");h.textContent=Array(m-u+2).join(" \n"),h.setAttribute("aria-hidden","true"),h.className=(i||"")+" line-highlight",t(e,"line-numbers")||(h.setAttribute("data-start",u),m>u&&h.setAttribute("data-end",m)),h.style.top=(u-l-1)*c+"px",t(e,"line-numbers")?e.appendChild(h):(e.querySelector("code")||e).appendChild(h)}}function i(){var t=location.hash.slice(1);e(".temporary.line-highlight").forEach(function(e){e.parentNode.removeChild(e)});var i=(t.match(/\.([\d,-]+)$/)||[,""])[1];if(i&&!document.getElementById(t)){var r=t.slice(0,t.lastIndexOf(".")),o=document.getElementById(r);o&&(o.hasAttribute("data-line")||o.setAttribute("data-line",""),n(o,i,"temporary "),document.querySelector(".temporary.line-highlight").scrollIntoView())}}if("undefined"!=typeof self&&self.Prism&&self.document&&document.querySelector){var r=function(){var e;return function(){if("undefined"==typeof e){var t=document.createElement("div");t.style.fontSize="13px",t.style.lineHeight="1.5",t.style.padding=0,t.style.border=0,t.innerHTML="&nbsp;<br />&nbsp;",document.body.appendChild(t),e=38===t.offsetHeight,document.body.removeChild(t)}return e}}(),o=0;Prism.hooks.add("complete",function(t){var r=t.element.parentNode,a=r&&r.getAttribute("data-line");r&&a&&/pre/i.test(r.nodeName)&&(clearTimeout(o),e(".line-highlight",r).forEach(function(e){e.parentNode.removeChild(e)}),n(r,a),o=setTimeout(i,1))}),window.addEventListener&&window.addEventListener("hashchange",i)}}();
!function(){"undefined"!=typeof self&&self.Prism&&self.document&&Prism.hooks.add("complete",function(e){if(e.code){var t=e.element.parentNode,s=/\s*\bline-numbers\b\s*/;if(t&&/pre/i.test(t.nodeName)&&(s.test(t.className)||s.test(e.element.className))&&!e.element.querySelector(".line-numbers-rows")){s.test(e.element.className)&&(e.element.className=e.element.className.replace(s,"")),s.test(t.className)||(t.className+=" line-numbers");var n,a=e.code.match(/\n(?!$)/g),l=a?a.length+1:1,r=new Array(l+1);r=r.join("<span></span>"),n=document.createElement("span"),n.setAttribute("aria-hidden","true"),n.className="line-numbers-rows",n.innerHTML=r,t.hasAttribute("data-start")&&(t.style.counterReset="linenumber "+(parseInt(t.getAttribute("data-start"),10)-1)),e.element.appendChild(n)}}})}();


var er = "#comments p, div#emoWrap, #predata";
(function(a) {
    a(document).ready(function() {
        a("iframe#comment-editor").before("<div class='conemo'><div class='tabs'><ul class='tab-links'><li><a href='#tab1'>Convert my Code</a></li><li><a href='#tab2'>Emoticons</a></li><li class='active'><a href='#tab3'>Compose Comments</a></li><a title='Add this Widget' style='float:right;font-style:italic;' href='http://eutectics.blogspot.com/2015/03/comment-composer-widget-for-blogger.html'>?</a></ul><div class='tab-content'><div id='tab1' class='tab'><textarea id='codes' placeholder='Write/paste the RAW code here then click Convert' spellcheck='false'/><span class='align-right'><button id='cvrt' onclick='cdConvert();this.disabled = true;'>Convert</button><button onclick='cdClear();'>Reset</button></span><ul><li><span class='checkbox'>Select to parse the code : <input checked='' id='opt1' type='checkbox'/></span></li><li><form>Select code language :<select id='mySelect'><option value=''>None</option><option value='code'>Inline Code</option><option value='css'>CSS</option><option value='html'>HTML/XML</option><option value='javascript'>JavaScript</option><option value='c'>C</option><option value='cpp'>C++</option><option value='java'>Java</option><option value='python'>Python</option></select></form></li></ul></div><div id='tab2' class='tab'><p style='text-align:center'>Add a space before & after smileys</p><div id='emoWrap'> :mrgreen: :arrow: :twisted: :evil: &gt;:D :idea: :oops: :roll: :lol: :cool: :( :) :?  :D :P :o :x :| ;) :!: :?: &lt;3 &gt;-I |_| :burrito: O_o o_O (w) :star: :developer: :bear: ^^&#39; :&#39;( :/ :facepalm: =^-^= :alien: :cat: :dog: :gun: poop :santa: (Y) (N) :victory: </div></div><div id='tab3' class='tab active'><div class='tabs'><div class='tab-content'><div id='tab4' class='tab active'><p>Compose your comments here.</p><textarea id='comwr' spellcheck='true'/></div><div id='tab5' class='tab'><div id='predata' class='comment-content'></div></div></div><ul class='tab-links'><li class='active'><a href='#tab4'>Write</a></li><li><a onclick='compre();' href='#tab5'>Preview</a></li></ul></div></div></div></div><div style='display:block;margin-bottom:10px;text-align: center;color: #000;margin-top: 10px;font-size: 12px;'>You may use these HTML attributes: &lt;i rel='quote'&gt;blockquote Text&lt;/i&gt; &lt;em&gt; &lt;strong&gt; &lt;b&gt; &lt;i&gt; </div></div>")
    })
})(jQuery);

function modecom() {
    $('i[rel="quote"]').replaceWith(function() {
        return $('<blockquote class="comquot">' + $(this).html() + "</blockquote>")
    });
	
	
    $(document).ready(function() {
        $('i[rel="pre"]').replaceWith(function() {
            return $("<pre>" + $(this).html() + "</pre>")
        })
    });
    $(document).ready(function() {
        $('i[rel="code"]').replaceWith(function() {
            return $("<code class='codtxt'>" + $(this).html() + "</code>")
        })
    });
	
	
    $(document).ready(function() {
		
		function replaceIrel(a){
			$('i[rel="'+ a +'"]').replaceWith(function() {
            return $('<pre><code class="language-'+a+'">' +
                $(this).html() + "</code></pre>")
        })
		}
		
		replaceIrel("markup");
		replaceIrel("css");
		replaceIrel("javascript");
		replaceIrel("c");
		replaceIrel("cpp");
		replaceIrel("java");
		replaceIrel("python");
        
    });
    
	
	
	
    $(document).ready(function() {
        function a(a, d, c) {
            $(er).html(function() {
                return $(this).html().replace(/<br ?\/?>(:|;|=|\^)/ig, "<br> $1").replace(a, " <img src='https://raw.githubusercontent.com/tush124/EuBlogFiles/master/emo/emo9/" +
                    d + ".png' class='emo' title='" + c + "' alt='" + c + "' />")
            })
        }
        a(/\s:mrgreen:/ig, "1", ":mrgreen:");
        a(/\s:arrow:/ig, "2", ":arrow:");
        a(/\s:twisted:/ig, "3", ":twisted:");
        a(/\s:evil:/ig, "4", ":evil:");
        a(/\s&gt;:D/g, "5", "&amp;gt;:D");
        a(/\s:idea:/ig, "6", ":idea:");
        a(/\s:oops:/ig, "7", ":oops:");
        a(/\s:roll:/ig, "8", ":roll:");
        a(/\s:lol:/ig, "9", ":lol:");
        a(/\sxD/ig, "9", "xD");
        a(/\s:cool:/ig, "10", ":cool:");
        a(/\s8-\)/ig, "10", "8-)");
        a(/\s8\)/ig, "10", "8)");
        a(/\s8-\|/ig, "10", "8-|");
        a(/\s:sad:/ig, "11", ":sad:");
        a(/\s:\(/ig, "11", ":(");
        a(/\s:-\(/ig, "11", ":-(");
        a(/\s:smile:/ig, "12", ":smile:");
        a(/\s:\)/ig, "12", ":)");
        a(/\s:-\)/ig, "12", ":-)");
        a(/\s:\?\?\?:/ig, "13", ":&amp;#63;&amp;#63;&amp;#63;:");
        a(/\s:\?\s/ig, "13", ":&amp;#63;");
        a(/\s:-\?/ig, "13", ":-&amp;#63;");
        a(/\s:grin:/ig, "14", ":grin:");
        a(/\s:D/g, "14", ":D");
        a(/\s:-D/g, "14", ":-D");
        a(/\s:razz:/ig, "15", ":razz:");
        a(/\s:p/ig, "15", ":p");
        a(/\s:-p/ig, "15", ":-p");
        a(/\s:eek:/ig, "16", ":eek:");
        a(/\s:shock:/ig, "16", ":shock:");
        a(/\s:o/ig, "16", ":o");
        a(/\s:-o/ig, "16", ":-o");
        a(/\s8o/ig, "16", "8o");
        a(/\s8-o/ig, "16", "8-o");
        a(/\s:mad:/ig, "17", ":mad:");
        a(/\s:x/ig, "17", ":x");
        a(/\s:-x/ig, "17", ":-x");
        a(/\s&gt;:\(/ig, "17", "&amp;gt;:(");
        a(/\s:neutral:/ig, "18", ":neutral:");
        a(/\s:\|/ig, "18", ":|");
        a(/\s:-\|/ig, "18", ":-|");
        a(/\s:wink:/ig, "19", ":wink:");
        a(/\s;\)/ig, "19", ";)");
        a(/\s;-\)/ig, "19", ";-)");
        a(/\s:\!:/ig, "20", ":!:");
        a(/\s:\?:/ig, "21", ":&amp;#63;:");
        a(/\s:heart:/ig, "22", ":heart:");
        a(/\s&lt;3/ig, "22", "&amp;lt;3");
        a(/\s:martini:/ig, "23", ":martini:");
        a(/\s&gt;-I/g, "23", "&gt;-I");
        a(/\s:whiterussian:/ig,
            "24", ":whiterussian:");
        a(/\s\|\_\|/ig, "24", "|_|");
        a(/\s:burrito:/ig, "25", ":burrito:");
        a(/\sO\_o/g, "26", "O_o");
        a(/\so\_O/g, "27", "o_O");
        a(/\s\(W\)/ig, "28", "(W)");
        a(/\s:star:/ig, "29", ":star:");
        a(/\s:developer:/ig, "30", ":developer:");
        a(/\s:bear:/ig, "31", ":bear:");
        a(/\s\^\^\'/ig, "32", "^^&amp;#39;");
        a(/\s:cry:/ig, "33", ":cry:");
        a(/\s:\'\(/ig, "33", ":&amp;#39;(");
        a(/\s:-\//ig, "34", ":-/");
        a(/\s:\//ig, "34", ":/");
        a(/\s:\\/ig, "34", ":\\");
        a(/\s:-\\/ig, "34", ":-\\");
        a(/\s:facepalm:/ig, "35", ":facepalm:");
        a(/\s\=\^-\^\=/ig,
            "36", "=^-^=");
        a(/\s:alien:/ig, "37", ":alien:");
        a(/\s:cat:/ig, "38", ":cat:");
        a(/\s:dog:/ig, "39", ":dog:");
        a(/\s:gun:/ig, "40", ":gun:");
        a(/\spoop/ig, "41", "poop");
        a(/\s:santa:/ig, "42", ":santa:");
        a(/\s:thumbsdown:/ig, "43", ":thumbsdown:");
        a(/\s\(n\)/ig, "43", "(N)");
        a(/\s:thumbsup:/ig, "44", ":thumbsup:");
        a(/\s\(y\)/ig, "44", "(Y)");
        a(/\s:victory:/ig, "45", ":victory:");
        $(document.body).on("click", function() {
            $(".emoKey").remove()
        });
        $("#emoWrap img.emo").css("cursor", "pointer").on("click", function(a) {
            $(".emoKey").remove();
            $(this).after('<input class="emoKey" type="text" size="6" value=" ' + this.alt + '" />');
            $(".emoKey").trigger("select");
            a.stopPropagation()
        })
    })
}
modecom();

function cdClear() {
    var a = document.getElementById("codes");
    a.value = "";
    a.focus();
    document.getElementById("cvrt").disabled = !1
}

function cdConvert() {
    var a = document.getElementById("codes"),
        b = a.value,
        d = document.getElementById("opt1"),
        
    c = document.getElementById("mySelect").value;
    b = b.replace(/\t/g, " ");
    d.checked && (b = b.replace(/&/g, "&amp;"), b = b.replace(/'/g, "&#039;"), b = b.replace(/"/g, "&quot;"), b = b.replace(/</g, "&lt;"), b = b.replace(/>/g, "&gt;"));
    b = b.replace(/^/, '<i rel="' + c + '">');
    b =
        b.replace(/$/, "</i>");
    a.value = b;
    a.focus();
    a.select()
}

function compre() {
    var a = document.getElementById("comwr").value;
    document.getElementById("predata").innerHTML = a;
    modecom()
}
jQuery(document).ready(function() {
    jQuery(".tabs .tab-links a").on("click", function(a) {
        var b = jQuery(this).attr("href");
        jQuery(".tabs " + b).show().siblings().hide();
        jQuery(this).parent("li").addClass("active").siblings().removeClass("active");
        a.preventDefault()
    })
});