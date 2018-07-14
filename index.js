
var result = `
// 大家好，我是宇宙无敌美少女，哈哈哈，下面我要介绍下我自己咯
// 文字会不会太单调？
// 那就用代码吧
// 首先，先加一点样式
* {
    transition: all 0.3s;
}
.content {
    background-color: #eee;
    border: 1px solid #aaa;
    padding: 16px;
}

/*代码看着不够清晰？来一点高亮吧*/


.token.selector {
    color: #690;
}
.token.property {
    color: #905;
}
.token.punctuation {
    color: #999;
}

/*好了，下面还是介绍下自己吧，我需要一张白纸*/

`
var n = 0;
var timer = setInterval(function(){
    n++;
    var resultHtml = result.slice(0,n);
        // resultHtml = Prism.Highlight(resultHtml,Prism.languages.css);
    var $code = $('#code');
        $code.html(resultHtml);
        $code.html(Prism.highlight($code.html(),Prism.languages.css))
    $('#codeStyle').html(result.slice(0,n))
    if (n > result.length) {
        clearInterval(timer);
        createPaper();
        drawPaper(result);
    }
},10)

function createPaper() {
    $('body').append('<div class="paper"><pre class="paperContent"></pre></div>')
}
function drawPaper(preResult) {
var paperCss = `
.paper {
    width:400px;
    height: 500px;
    float: left;
    border: 1px solid blue;
};
/*下面开始写markdown介绍*/
`
    var s = 0
    var timer2 = setInterval(() => {
        s++;
        if (s >= paperCss.length) {
            clearInterval(timer2);
            drawPaperContent()
        }
        var innerCss = paperCss.slice(0,s);
        $('#code').html(preResult+innerCss);
        $('#code').html(Prism.highlight($('#code').html(),Prism.languages.css))
    },10)
}

function drawPaperContent() {
var paperContent = `
## 自我介绍
    我叫哈哈哈，来自浙江的娃
    90后，前端开发工程师
    在饥人谷学习已经四个月啦
    饥人谷的老师既专业又负责
    我是方方的粉丝

## 联系方式
    qq: 1234567
    tel: 1809999999

## 项目介绍
    1. 会动的简历
    2. 网址导航
    3. 轮播
`
    var m = 0;
    var timer3 = setInterval(()=> {
        m++;
        if (m >= paperContent.length) {
            clearInterval(timer3);
            markDownToHtml();
            
        } else {
            var contentResult = paperContent.slice(m-1,m);
            $('.paperContent').append(contentResult);
        } 
    },10)
}
function markDownToHtml() {
    console.log('和人们来说股份合计')
    var mark = `/*下面我们把markdown文本的转成html*/`;
    var h = 0;
    var timer4 = setInterval(function(){
        h++;
        if (h >= mark.length) {
            clearInterval(timer4);
            $('.paperContent').html(marked( $('.paperContent').html()));
        } 
        var newContent = mark.slice(h-1,h);
        console.log(newContent)
        $('#code').append(newContent) 
    },50) 
}

