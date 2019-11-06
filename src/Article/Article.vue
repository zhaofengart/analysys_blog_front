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
				<router-link to="/article">{{article.title}}</router-link>
			</div>
			<h2 class="title">{{article.title}}</h2>
			<div class="othermessage">
				<div class="create">
					<img src="https://ark.analysys.cn/blog/images/author.png">
					<span>{{article.realname}}</span>
					<span>{{article.issueTime}}</span>
				</div>
				<div class="table">
					<i class="iconfont icon-biaoqian"></i>
					<!-- <span>{{tab1}},</span>
					<span>{{tab2}},</span>
					<span>{{tab3}}</span> -->
				</div>
			</div>
		</div>
		<div class="artical-body" v-html="article.content"></div>
		<div class="artical-tail">
			<div class="prev"><span>上一篇：</span><a href="##">{{previous.articleId}}</a></div>
			<div class="next"><span>下一篇：</span><a href="##">{{next.articleId}}</a></div>
		</div>
		<!-- <img :src=url> -->
	</div>
</template>
<script>
/* eslint-disable */
import VueEvent from '@/module/VueEvent.js'
import axios from 'axios'
export default{
	name:"Articalhome",
	data () {
    return {
      article: '',
      previous: {},
      next: {},
      inputArticleId: '',
      articleId: 17
    }
  },
  created () {
    this.getArticle(17)
  },
  methods: {
    getArticle: function (articleId) {
      let params = new URLSearchParams()
      params.append('articleId', 17)

      this.$ajax({
        method: 'post',
        url: '/api/blog/getArticle',
        data: params
      }).then((response) => {
        this.article = response.data.data.article
        this.previous = response.data.data.previous
        this.next = response.data.data.next
      }).catch(function (error) {
        console.log(error)
      })
    },
    getPrevious: function () {
      this.getArticle(this.previous.articleId)
    },
    getNext: function () {
      this.getArticle(this.next.articleId)
    },
    search: function (event) {
      console.log(this.inputArticleId)
      this.getArticle(this.inputArticleId)
      this.inputArticleId = ''
    }
  },
  watch: {
    // 监听相同路由下参数变化的时候，从而实现异步刷新
    '$route' (to, from) {
      this.getArticle(this.articleId)
      console.log('监听路由')
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