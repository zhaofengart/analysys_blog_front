<template>
	<div class="view">
		<span class="place">当前位置：易观方舟> 知识库>{{article.title}}</span>
		<h3>{{article.title}}</h3>
		<i class="iconfont icon-yonghu"></i>
		<span class="issueTime">易观 {{article.issueTime}}</span>
		<span v-for="item in article.tagList" :key="item.articleId" class="tagList">{{item.tagName}}</span>
		<i class="iconfont icon-biaoqian1"></i>
		<div class="articleDetail" v-html="article.content"></div>
		<span class="previous" v-if="previous != null">
      <a v-on:click="getPrevious">上一篇：{{previous.title}}</a>
      </span>
		<span v-else>已经是最新文章了</span>
		<span class="next" v-if="next != null">
      <a v-on:click="getNext">下一篇：{{next.title}}</a>
      </span>
		<span class="next" v-else>已经是最后一篇文章了</span>
	</div>
</template>
<script>
import VueEvent from '@/module/VueEvent.js'
import axios from 'axios'
export default{
	name:"Articalhome",
	data(){
		return {
			preshow:true,
			nextshow:true,
			article:{},
			previous:{},
			next:{},
			inputArticleId: ''
		}
	},
	props:['articleId'],
	created(){
    this.getArticle('文章详情组件中文章id' + this.articleId)
    // 初始化
    this.getArticle(this.articleId)
	},
	methods:{
		getArticle(articleId){
			let params = new URLSearchParams();
			params.append("articleId", articleId)
			// axios封装
	  		axios({
	  			url:'/api/blog/getArticle',
	  			method:'post',
	  			data: params
	  		})
	  		  .then(this.handleArticleInfoSucc)
  		},
  		handleArticleInfoSucc(res){
	  		this.article = res.data.data.article
        this.previous = res.data.data.previous
        this.next = res.data.data.next
        console.log(res.data.data)
  		},
  		getPrevious() {
          this.getArticle(this.previous.articleId)
          console.log(this.previous.articleId)
    	},
    	getNext() {
          this.getArticle(this.next.articleId)
          console.log(this.next.articleId)
    	},
    	search(event) {
	      console.log(this.inputArticleId)
	      this.getArticle(this.inputArticleId)
	      this.inputArticleId = ''
      },
      
  },
  watch: {
    // 监听相同路由下参数变化的时候，从而实现异步刷新,此处不需要获取路由参数
    '$route' (to, from) {
      this.getArticle(this.articleId)
      console.log('文章详情组件监听路由' + '文章id：' + this.articleId)
    }
  }
	
}
</script>
<style scoped>
	*{
		margin:0;
		padding:0;
	}
	.view{
		width: 50%;
		margin-left: 10%;
		margin-bottom: 20px;
	}
	.place{
    /* word-break: keep-all; */
    white-space: nowrap;
		font-size: 13px;
	}
	h3{
		font-weight: bold;
		margin-top: 10px;
		margin-bottom: 20px;
	}
	.issueTime{
		margin-right: 50px;
		font-size: 10px;
	}
	.tagList{
		margin-right: 5px;
		font-size: 10px;
		float: right;
	}
	.iconfont{
		font-size: 10px;
	}
	.icon-biaoqian1{
		float: right;
	}
	.articleDetail{
		margin-top: 15px;
		border-top: 1px solid #696969;
		border-bottom: 1px solid #696969;
	}
	.next{
		float: right;
	}
	a{
		text-decoration: none;
		cursor: pointer;
	}
</style>