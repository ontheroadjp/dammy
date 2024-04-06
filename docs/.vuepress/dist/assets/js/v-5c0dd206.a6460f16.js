"use strict";(self.webpackChunkdammy=self.webpackChunkdammy||[]).push([[534],{5296:(e,n,s)=>{s.r(n),s.d(n,{data:()=>a});const a={key:"v-5c0dd206",path:"/overview/",title:"Overview",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"What's dammy ?",slug:"what-s-dammy",children:[]},{level:2,title:"Main Features",slug:"main-features",children:[]},{level:2,title:"Example",slug:"example",children:[]}],filePathRelative:"overview/README.md",git:{updatedTime:1637731809e3,contributors:[{name:"ontheroadjp",email:"dev@ontheroad.jp",commits:1}]}}},6683:(e,n,s)=>{s.r(n),s.d(n,{default:()=>r});const a=(0,s(6252).uE)('<h1 id="overview" tabindex="-1"><a class="header-anchor" href="#overview" aria-hidden="true">#</a> Overview</h1><h2 id="what-s-dammy" tabindex="-1"><a class="header-anchor" href="#what-s-dammy" aria-hidden="true">#</a> What&#39;s dammy ?</h2><p>This shell script builds a directory tree. With this script, there is no need to build a directory tree by using commands such as mkdir or touch.</p><p>In system development where files and directories are read from directories, this can greatly reduce the time and effort required to build a directory tree for testing.</p><h2 id="main-features" tabindex="-1"><a class="header-anchor" href="#main-features" aria-hidden="true">#</a> Main Features</h2><ul><li>Create multi-level directories</li><li>Create files in the created directory.</li><li>The files created can contain symbols and spaces.</li></ul><h2 id="example" tabindex="-1"><a class="header-anchor" href="#example" aria-hidden="true">#</a> Example</h2><p>Just run this command...</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>dammy hoge/<span class="token punctuation">{</span>foo,bar<span class="token punctuation">}</span>/piyo -n <span class="token number">3</span> --each --with-whitespace\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>A directory tree will be constructed as shown below.</p><p>Inside the <code>hoge</code> directory, we create the <code>foo</code> directory, and under the <code>foo</code> directory, we create the <code>piyo</code> directory.</p><p>In each of these directories, three files with blank/symbolic filenames are created.</p><p>At the same time, using bash&#39;s brace expansion, it creates a <code>bar</code> directory inside the <code>hoge</code> directory and a <code>piyo</code> directory under it, and creates three files with blank/symbolic filenames in each of these directories.</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>hoge\n├── <span class="token punctuation">)</span> R a Y A .txt\n├── H t <span class="token number">8</span> <span class="token number">9</span> h .txt\n├── <span class="token punctuation">\\</span> U X , <span class="token operator">!</span> .txt\n├── bar\n│   ├── <span class="token operator">!</span> + w <span class="token number">2</span> q .txt\n│   ├── , <span class="token punctuation">)</span> R <span class="token punctuation">;</span> c .txt\n│   ├── d P <span class="token number">9</span> <span class="token number">6</span> i .txt\n│   └── piyo\n│       ├── % U <span class="token number">2</span> P L .txt\n│       ├── <span class="token number">5</span> R J j c .txt\n│       └── O S <span class="token builtin class-name">:</span> <span class="token number">3</span> E .txt\n├── d M <span class="token number">6</span> <span class="token number">2</span> x .txt\n├── foo\n│   ├── $ A P H _ .txt\n│   ├── J Z d &#39; a .txt\n│   ├── i W S _ <span class="token number">1</span> .txt\n│   └── piyo\n│       ├── <span class="token builtin class-name">:</span> L w <span class="token operator">&amp;</span> I .txt\n│       ├── A e @ j <span class="token operator">&amp;</span> .txt\n│       └── r W <span class="token number">2</span> * <span class="token punctuation">(</span> .txt\n├── <span class="token function">v</span> @ R q j .txt\n└── y g R , <span class="token number">9</span> .txt\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div>',14),t={},r=(0,s(3744).Z)(t,[["render",function(e,n){return a}]])},3744:(e,n)=>{n.Z=(e,n)=>{const s=e.__vccOpts||e;for(const[e,a]of n)s[e]=a;return s}}}]);