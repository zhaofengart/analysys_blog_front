<template>
	<div>
		<div class="aoo">
			<a href="#"><img src="https://ark.analysys.cn/blog/images/logo.svg"></a>
			<div id="navbar" role="navigation">
			<a href="##" class="zhedie" v-on:click="open">
				<i class="iconfont icon-zhedie"></i>
			</a>
			<a href="##" class="guanbi" v-on:click="close" v-show="showif">
				<i class="iconfont icon-guanbi"></i>
			</a>
			<ul class="nav nav-pills">
				<li>
					<a href="www.runoob.com" class="item">
						产品
						<div>
							<i class="iconfont icon-aui-icon-down ico"></i>
						</div>
					</a>
					<div class="two">
						<div class="up"></div>
						<h4>营销闭环</h4>
						<ul>
							<li>
								<div><a href="#">自定义看板</a></div>
								<span>灵活自定义日常关注数据，一键导出数据表</span>
							</li>
							<li>
								<div><a href="#">数据分析</a></div>
								<span>十大分析模型，提高获客能力</span>
							</li>
							<li>
								<div><a href="#">用户分群</a></div>
								<span>将有共性的用户分群</span>
							</li>
							<li>
								<div><a href="#">精准触达</a></div>
								<span>方舟内直接发送EDM，短信，APP应用消息跟踪效果</span>
							</li>
						</ul>
					</div>
				</li>
				<li><a href="www.runoob.com"  class="item">易观方舟Argo</a></li>
				<li><a href="www.runoob.com"  class="item">解决方案<div><i class="iconfont icon-aui-icon-down ico"></i></div></a></li>
				<li><a href="www.runoob.com" class="item">行业Demo</a></li>
				<li><a href="www.runoob.com" class="item">帮助文档<div><i class="iconfont icon-aui-icon-down ico"></i></div></a></li>
				<li><a href="www.runoob.com" class="item">知识库<div><i class="iconfont icon-aui-icon-down ico"></i></div></a></li>
				<li><a href="www.runoob.com" class="item">关于我们</a></li>
				<div class="your">
					<router-link to='/newlogin'>
						<div class="login"><a href="www.runoob.com">登录</a></div>
					</router-link>
					<div class="enjoy"><a href="www.runoob.com">体验Demo</a></div>
				</div>
			</ul>
			<div class="xiala" v-show="showif">
				<ul class="contain">			
					<li v-on:click="view">产品<i class="iconfont icon-aui-icon-down" ></i></li>
					<ul class="second" v-show="showtwo">
							<li>自定义看板</li>
							<li>数据分析</li>
							<li>用户分群</li>
							<li>精准触达</li>
							<li>多埋点方案选择</li>
							<li>多平台对接</li>
							<li>分析方法学习</li>
							<li>用户画像</li>
							<li>多版本可选</li>
							<li>易观方舟Argo</li>
					</ul>
					<li>易观方舟Argo</li>
					<li>解决方案<i class="iconfont icon-aui-icon-down" ></i></li>
					<li>行业Demo</li>
					<li>帮助文档<i class="iconfont icon-aui-icon-down" ></i></li>
					<li>知识库<i class="iconfont icon-aui-icon-down" ></i></li>
					<li>关于我们</li>
				</ul>
			</div>
		</div>
	</div>
	<div class="knowledge">
		<div class="title">
			<h1>方舟知识库</h1>
		</div>
		<p class="content">方舟知识库是易观方舟对外的知识共享社区，包含了易观方舟在过去的多年间的产品理念、产品应用、核心方法、解决方案、最佳实践等。整合了全渠道的内容资源，助力市场、运营、产品、数据分析师等，以数据分析驱动业务增长</p>
	</div>
</div>
</template>

<script>
import axios from 'axios'
import VueEvent from '@/module/VueEvent.js'
export default {
  name: 'HomeHeader',
  data(){
  	return{
  		showif:false,
  		showtwo:false,
  		val:1
  	}
  },
  methods:{
  	open(){
  		this.showif=true
  	},
  	close(event){
  		if(event.target.className!="xiala"){
  			this.showif=false
  		}
  	},
  	view(){
  		this.showtwo=!this.showtwo
  	}
  }
}	
</script>

<style scoped lang="stylus">
	.aoo
	  z-index:10
	  position:fixed
	  height:100px
	  width:100%
	  height:70px
	  line-height:70px
	  background:linear-gradient(to right,rgba(41,147,246,1),rgba(123,100,245,1))
	  @media screen and (max-width: 1000px)
	    height: 60px
	    line-height: 60px
	  img
	    height:100px
	    width:130px
	    float:left
	    margin-right:30px
	    margin-left:4%
	    margin-top:-10px
	    @media screen and (max-width: 1000px)
	    	height:70px
	    	width:104px
	    	padding-top: 10p
	    	margin-left:20px
	  #navbar
	    height:70px
	    line-height: 70px
	    .zhedie
	      float:right
	      color:#fff
	      height:30px
	      margin-right:10px
	      text-decoration: none
	      @media screen and (min-width: 1000px)
	      	 display:none
	      i
	        font-size: 25px
	    .guanbi
	      float:right
	      color:#fff
	      height:30px
	      margin-right:10px
	      text-decoration: none
	      @media screen and (min-width: 1000px)
	      	 display:none
	      i
	        font-size: 25px
	    .nav
	      @media screen and (max-width: 1000px)
	        li
	          display: none
	        div
	          display: none
	    li:hover
	      .two
	        display:block
		  a
		    opacity:0.8
		    transition:opacity 0.3s
		    font-size:16px
		    color:rgba(255,255,255,0.8)
		    div
		      display:inline-block
		      margin-left:12px
		      transition:transform 0.3s
		   	.iconfont
		   	  font-size:13px
		  .two
		    display:none
		    height: auto
		    position:absolute
		    background:#F6F6F6
		    margin-top:-20px
		    border-radius:4px
		    .up
		      width:0
		      height:0
		      border-left:6px solid transparent
		      border-right:6px solid transparent
		      border-bottom:10px solid #F6F6F6
		      margin-left:25px
		      margin-top:-10px
		    h4
		      color:#9aa4af
		      padding-top:20px
		      padding-bottom: 10px
		      padding-left:30px
		      height:20px
		    ul
		      width:400px
		      height: auto
		      list-style:none
		      li
		        height: 80px
		        line-height: 80px
		        margin: 0
		        div
		          height:20px
				  a,a:hover,a:active
				    text-decoration:none
				    color:#000000
				    font-size:14px
				span
				  height:20px
				  color:#9aa4af
				  font-size:14px
			.item:hover
			  opacity:1
			  color:rgba(255,255,255,1)
			  background:rgba(0,0,0,0)
			  div
			   	transform:rotate(180deg)
		.your
		  width:250px
		  float:right
		  margin-top:10px
		  padding-left:20px
		.login
		  font-size:16px
		  width:50px
		  float:left
		  a
		    text-decoration:none
		    color:rgba(255,255,255,0.8)
		  a:hover
		    color:rgba(255,255,255,1)
		.enjoy
		  margin-top:10px
		  font-size:16px
		  width:115px
		  background:linear-gradient(to right,#F3BB72,#F0891F)
		  border-radius:30px
		  height:45px
		  line-height:45px
		  text-align:center
		  float:left
		  a
		    text-decoration:none
		    color:rgba(255,255,255,0.8)
		  a:hover
		    color:rgba(255,255,255,1)
		.xiala
		  height: 400px
		  width: 100%
		  background: #fff
		  .contain
		    padding: 0
		    margin: 0
		    list-style: none
		    li
		      margin-left: 20px
		      height: 40px
		      line-height: 40px
		      font-size: 15px
		      i
		        font-size: 12px
		        margin-right: 20px
		        float: right
		        transform: rotate(-90deg)
		  .second
		    background: #F0F0F0
		    padding-top: 15px
		    width: 100%
		    height: 200px
		    color: #7D7D7D
		    li
		      margin:0
		      float: left
		      height: 35px
		      line-height: 35px
		      width: 50%
		      list-style: none
		      font-size: 13px
	.knowledge
	   padding-top:130px
	   background:linear-gradient(to right,rgba(41,147,246,1),rgba(123,100,245,1))
	   height:340px
	   color:#fff
	   .title
	     text-align:center
	   .content
	     width:75%
	     padding-top:30px
	     text-align:center
	     margin:0 auto
</style>