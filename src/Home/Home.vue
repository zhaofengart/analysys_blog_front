 
<template>
  <div>
	  <home-header></home-header>
	  <home-tab></home-tab>
	  <home-bottom></home-bottom>
	</div>
</template>
<script>
/* eslint-disable */ 
import HomeHeader from './components/Header'
import HomeTab from './components/Tab'
import HomeBottom from './components/Bottom'
export default{
	name:'Home',
	components:{
		HomeHeader,
		HomeTab,
    HomeBottom
	}
}
</script>

<style></style>