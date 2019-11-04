<template>
	<div>
		<div class="up">
			<div class="left">
				<a href="##"><img src="https://ark.analysys.cn/blog/images/logo.svg"></a>
				<p>数据驱动营销闭环</p>
				<ul>
					<li>Copyright ©2019易观版权所有 京ICP证041352号 京公网安备110105005360号</li>
					<li><a href="##">服务条款</a></li>
					<li><a href="##">隐私政策</a></li>
					<li><a href="##">OPT-OUT</a></li>
				</ul>
		    </div>
			<div class="right">
				<div class="new">
					<router-link to='/newlogin'>
					  登录新版
					</router-link>
				</div>
				<p class="fangzhou">登录方舟</p>
				<form>
					<label class="code">
						<p v-show="showa">邮箱/手机号</p>
						<input autocomplete="off" name="f-user" id="f-user" placeholder="邮箱/手机号" class="form-text" v-on:focus="usercli" v-on:blur="userqu">
					</label>
					<label class="code">
						<p v-show="showb">密码</p>
						<input type="password" name="f-code" autocomplete="off" id="f-code" maxlength="50" placeholder="密码" class="form-text" v-on:focus="pwdcli" v-on:blur="pwdqu">
					</label>
					<div class="remember-pwd">
						<label>
							<input type="checkbox">
							<b>记住我</b>
						</label>
						<a href="##" class="forget-pwd">忘记密码?</a>
					</div>
					<div class="submit-login">
						<button type="button" class="v-btn v-btn-primary v-btn-circle">
							<span>登录</span>
						</button>
					</div>
				</form>
				<div class="otherlogin">
					<a href="##"><i class="iconfont icon-qq"></i></a>
					<a href="##"><i class="iconfont icon-weibo"></i></a>
					<a href="##"><i class="iconfont icon-weixin"></i></a>
				</div>
				<p class="zhuce">没有账号？快速<a href="##">注册</a></p>
			</div>
		</div>
		<div class="down">
			<a href="##"><img src="https://ark.analysys.cn/blog/images/logo.svg"></a>
			<p>数据驱动营销闭环</p>
			<div class="text">
				<a>服务条款</a>
				<a>隐私政策</a>
				<a>OPT-OUT</a>
				Copyright ©2019易观版权所有京ICP备15065619号-1 京公网安备110105005360号
			</div>
		</div>
	</div>
</template>
<script>
export default{
	name:"NewLoginHome",
	data(){
		return{
			showa:false,
			showb:false
		}
	},
	methods:{
		usercli:function(){
			this.showa=true
		},
		pwdcli:function(){
			this.showb=true
		},
		userqu:function(){
			this.showa=false
		},
		pwdqu:function(){
			this.showb=false
		}
	}
}
</script>
<style scoped>
	.left
	{
		float: left;
		height: 577px;
		width: 62%;
		background: linear-gradient(to right,rgba(41,147,246,1),rgba(123,100,245,1));
	}
	.left img{
		margin-top: 95px;
		margin-left: 85px;
		width: 160px;
		height: 80px;
	}
	.left p
	{
		font-size: 35px;
		margin-left:85px;
		color: #fff;
	}
	.left ul{
		color: #fff;
		margin-left: 22px;
		padding-top: 300px;
	}
	.left li{
		float: left;
		list-style: none;
		margin-left: 20px;
		font-size:12px;
	}
	.left a{
		color: #fff;
		text-decoration: none;
	}
	form{
		margin-top: 30px;
		margin-bottom: 0;
		margin-left: 5%;
		margin-right: %;
	}
	.remember-pwd{
		width: 100%;
		font-size: 13px;
		color: #5E5ED8;
	}
	.remember-pwd a{
		float: right;
	}
	.right{
		width: 38%;
		float: left;
		margin-top: 20px;
	}
	.new{
		font-size: 13px;
		text-align: right;
		margin-right: 10%;
	}
	.right form{
		width: 80%;
		padding-left: 10%;
		padding-right: 10%;
		margin-left: 10%;
		margin-right: 10%;
	}
	.code {
		width: 100%;
		padding-top: 20px;
	}
	.code input{
		width: 100%;
		border: 2px solid #ccc;
		border-style: none  none solid none;
		outline: none;
		padding-bottom: 10px;
		margin-bottom: 10px;
		transition: all 0.5s;
	}
	.code input:focus{
		border-color: #5D73F8;
	}
	.code input:focus::placeholder {
		color: transparent;
	}
	.code p{
		height:10px;
		color: #5D73F8;
		font-size: 12px;
		transition: all 0.5s;
	}
	.right a{
		text-decoration: none;
		color: #5E5ED8;
	}
	.fangzhou{
		text-align: center;
		font-size: 20px;
		margin-top: 80px;
	}
	.zhuce{
		margin-top: 40px;
		text-align: center;
		font-size: 15px;
	}
	.submit-login button{
		width: 100%;
		font-size: 15px;
		color: #fff;
		margin-top: 20px;
		height: 35px;
		border-radius: 20px;
		background: #6787F6;
		border:none;
		outline: none;
		transition: all 0.5s;
	}
	.submit-login button:hover{
		background: #A5B1F1;
	}
	.otherlogin{
		display: flex;
		justify-content: space-between;
		width: 50%;
		height: 50px;
		margin-left: 25%;
		margin-right: 25%;
		margin-top: 30px;
	}
	.icon-qq{
		font-size: 40px;
		color: #7E8AF5;
	}
	.icon-weixin{
		font-size: 40px;
		color: #68F590;
	}
	.icon-weibo{
		font-size: 40px;
		color: #F95757;
	}
	@media screen and (max-width: 1000px){
		.left{
			display: none;
		}
		.right{
			width: 100%;
			height: 1100px;
		}
		.right .new{
			font-size: 25px;
			margin-top: 20px;
		}
		.fangzhou{
			margin:40px 0 0 0; 
			font-size: 50px;
			text-align: center;
		}
		.otherlogin{
			display: flex;
			margin-top: 100px;
			justify-content:space-between;
			width: 60%;
			margin-left: 20%;
			margin-right: 20%;
		}
		.iconfont{
			font-size: 100px;
		}
		.zhuce{
			margin-top: 140px;
		    text-align: center;
		    font-size: 30px;
		}
		.right form{
			width: 90%;
			margin-right: 5%;
			margin-left: 5%;
		}
		.code{
			margin-top: 20px;
			height: 100px;
			width: 100%;
			margin-bottom: 20px;
		}
		.code p{
			width: 100%;
			padding-left: 0;
			padding-right: 0;
			font-size: 20px;
			height: 40px;
		}
		.code input{
			padding-left: 0;
			padding-right: 0;
			width: 100%;
			height: 60px;
		}
		.code input::placeholder{
			font-size: 30px;
		}
		.remember-pwd{
			height: 90px;
			line-height: 90px;
			font-size: 25px;
		}
		.remember-pwd a{
			float: right;
		}
		.submit-login{
			padding-bottom: 0
		}
		.submit-login button{
			height: 80px;
			border-radius: 40px;
			font-size: 30px;
		}
	}
	.down{
		display: none;
		text-align: center;
		float: left;
		background: linear-gradient(to right,rgba(41,147,246,1),rgba(123,100,245,1));
		width: 100%;
		height: 400px;
	}
	.down img{
		height:120px;
		width: 230px;
		margin-top: 30px;
	}
	.down p{
		color: #fff;
		font-size: 30px;
		margin-top: 10px;
		margin-bottom: 100px;
	}
	.text{
		font-size: 20px;
		width: 80%;
		color: #fff;
		margin:0 auto;
	}
	.text a{
		text-decoration: none;
		color: #fff;
	}
	@media screen and (max-width: 1030px){
		.down{
			display: block;
		}
	}
</style>