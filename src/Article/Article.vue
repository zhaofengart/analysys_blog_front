<template>
	<div>
		<article-header></article-header>
		<article-detail :article-id="articleId"></article-detail>
		<article-tag :article-id="articleId"></article-tag>
		<article-bottom></article-bottom>
	</div>
</template>
<script>
	import ArticleDetail from './components/ArticleDetail'
	import ArticleHeader from './components/ArticleHeader'
	import ArticleBottom from './components/ArticleBottom'
	import ArticleTag from './components/ArticleTag'
	export default{
		name:'Article',
		components:{
			ArticleDetail,
			ArticleHeader,
			ArticleBottom,
			ArticleTag
    },
    data () {
      return {
        articleId: ''
      }
    },
    created () {
      this.articleId = this.$route.query.articleId
      console.log('文章详情页' + this.articleId)
    },
    mounted() {
      this.articleId = this.$route.query.articleId
      console.log('文章详情页mouted' + this.articleId)
    },
    watch: {
      // 监听相同路由下参数变化的时候，从而实现异步刷新
      '$route' (to, from) {
        this.articleId = this.$route.query.articleId
        console.log('文章详情页路由监控' +this.articleId)
      }
    }
  
  }
</script>