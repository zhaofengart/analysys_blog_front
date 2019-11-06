<template>
	<div class="view">
		<div class="artical-header">
			<div class="location">
				当前位置：
				<a href="##">易观方舟</a>
				<i class="iconfont icon-icon-right ico"></i>
				<a href="##">知识库</a>
				<i class="iconfont icon-icon-right ico"></i>
				<!-- 加一项向后台请求数据 -->
				<router-link to="/article">{{artical.title}}</router-link>
			</div>
			<h2 class="title">{{title}}</h2>
			<div class="othermessage">
				<div class="create">
					<img src="https://ark.analysys.cn/blog/images/author.png">
					<span>{{author}}</span>
					<span>{{date}}</span>
				</div>
				<div class="table">
					<i class="iconfont icon-biaoqian"></i>
					<span>{{tab1}},</span>
					<span>{{tab2}},</span>
					<span>{{tab3}}</span>
				</div>
			</div>
		</div>
		<div class="artical-body" v-html="artical.content"></div>
		<div class="artical-tail">
			<div class="prev"><span>上一篇：</span><a href="##">{{prev}}</a></div>
			<div class="next"><span>下一篇：</span><a href="##">{{next}}</a></div>
		</div>
		<img :src=url>
	</div>
</template>
<script>
/* eslint-disable */
import VueEvent from '@/module/VueEvent.js'
import axios from 'axios'
export default{
	name:"Articalhome",
	data(){
		return {
			//数据存储尽量用对象
			articleId:0,
			title:"网站运营需要关注哪些数据?",
			author:"赵岩",
			date:"2019-04-22 10:08",
			tab1:"网站运营",
			tab2:"数据指标",
			tab3:"获客",
			artical:{},
			prev:" 电商用户生命周期价值及运营策略",
			next:"易观荣获“中国数据智能创新企业50强”",
			articlePojoList:[],
			num:1,
			url:''
		}
	},
	methods:{
		getHomeInfo(){
			//axios封装
	  		axios({
	  			url:'/api/user/index',
	  			method:'get',
	  			 // headers:{
       //  			'Content-type': 'application/x-www-form-urlencoded'
    			// },
	  			data:{
	  				articleId:"123"
	  			},
	  			// transformRequest: [function (data) {
			   //     let ret = ''
			   //     for (let it in data) {
			   //     ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
			   //   }
			   //    return ret
			   //  }]
	  		})
	  		  .then(this.handleGetCityInfoSucc)
	  		axios({
	  			url:'/api/blog/6',
	  			method:'get'
	  		})
	  		  .then(this.handleGetCityInfoSucc)

	  		  // this.$http.post('http://10.161.56.34:8080/blog/frontAndNext', {
	  		  // 	articleId: 15
	  		  // }).then((data) => {
	  		  // 	console.log('dfssfdsdf')
	  		  // })
  		},
  		handleGetCityInfoSucc(res){
  			res=res.data
	  		if(res.result&&res.data){
	  			console.log(res.data)
	  			if(res.code === 0) {
	  				this.artical = res.data
	  			}
	  			
	  		}
  		}
	},
	mounted(){
		this.getHomeInfo()
	}
	// created(){
	// 	const self=this
	// 	VueEvent.$on('Val',(val)=>{
	// 		if(val==1){
	// 			self.loc='/static/mock/index.json'
	// 		}else{
	// 			self.loc='/static/mock/main.json'
	// 		}
	// 	})
	// }
}
</script>
<style scoped>
	*{
		margin:0;
		padding:0;
	}
	.view{
		width: 70%;
	}
	.location{
		font-size: 13px;
		height: 40px;
		line-height: 40px;
		margin-left: 10%;
		margin-right: 10%;
	}
	.location a{
		text-decoration:none;
		color: #000;
	}
	.ico{
		font-size: 10px;
	}
	.title{
		font-size: 24px;
    	font-weight: bold;
    	line-height: 30px;
    	height: 30px;
    	margin-left: 10%;
		margin-right: 10%;
	}
	.othermessage{
		width: 80%;
		height: 40px;
		margin-top: 20px;
		margin-left: 10%;
		margin-right: 10%;
		border-bottom: 1px solid #CFCDCD;
	}
	.create{
		display: inline;
		color: #D2D2D2;
		font-size: 12px;
	}
	.table{
		display: inline;
		font-size: 12px;
		color: #585858;
		margin-left: 55%;
	}
	.table i{
		color: #BCBCBC;
	}
	.artical-body{
		height: 800px;
	}
	.artical-tail{
		width: 80%;
		margin-left: 10%;
		margin-right: 10%;
		padding-top: 20px;
		margin-bottom: 100px;
		border-top: 1px solid #CFCDCD;
		font-size: 12px;
	}
	.artical-tail span{
		color: #7696FA;
	}
	.artical-tail a{
		text-decoration: none;
		color: #000;
	}
	.prev{
		float: left;
	}
	
	.next{
		float:left;
		margin-left: 15%;
	}
</style>