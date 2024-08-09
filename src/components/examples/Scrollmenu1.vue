<template>
	<div class="editBox">
		<div class="edit-cards">
			<div  class="edit-card">	
				<div v-for="(tab,index) in tabs" :key="index" class="userTop">
					<div style="width: 40px;float: left;margin-left: 10px;">
						<div style="border: 1px solid yellow;" class="dimg" :style="{backgroundImage:'url('+userImgsrc+')'}" ></div>
						<div style="width: 100%;height: 20px;text-align: left;">{{tab.label}}</div>
					</div>	
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	export default{
		data(){
			return {
				userImgsrc:'https://himg.bdimg.com/sys/portrait/item/wise.1.810ffcdf.SNLRJQZ6hafs58IAJH8wzA.jpg?time=12305&tieba_portrait_time=12305',
				activeName:'first',
				tabs:[
					{name:'first',label:'test11',color:'edit-red'},
					{name:'second',label:'test22',color:'edit-orange'},
					{name:'third',label:'test33',color:'edit-yellow'},
					{name:'fourth',label:'test44',color:'edit-green'},
					{name:'second',label:'test22',color:'edit-orange'},
					{name:'third',label:'test33',color:'edit-yellow'},
					{name:'fourth',label:'test44',color:'edit-green'},
					{name:'second',label:'test22',color:'edit-orange'},
					{name:'third',label:'test33',color:'edit-yellow'},
					{name:'fourth',label:'test44',color:'edit-green'},
					{name:'second',label:'test22',color:'edit-orange'},
					{name:'third',label:'test33',color:'edit-yellow'},
					{name:'fourth',label:'test44',color:'edit-green'},
				]
			}
		},
		mounted(){
			//this.bindScrollEvent();
		},
		methods:{
			bindScrollEvent(){
				console.log(34334)
				const editCards = document.querySelector('.edit-cards');
				const tabHeights = this.tabs.map(tab=>{
					const card = document.getElementById(tab.name);
					return {
						tabName: tab.name,
						offsetTop: card.offsetTop
					}
				})
				editCards.addEventListener('scroll',()=>{
					const scrollPosition = editCards.scrollTop;
					tabHeights.forEach((item,index)=>{
						if(index === tabHeights.length -1){
							if(scrollPosition + 200 >= item.offsetTop){
								this.activeName = item.tabName;
							}
							return
						}
						if (scrollPosition >= item.offsetTop && scrollPosition < tabHeights[index+1].offsetTop-200){
							this.activeName = item.tabName
						}
					})
				})
			},
			scrollToTabContent(tabName){
				const contentElement = document.getElementById(tabName);
				if(contentElement){
					contentElement.scrollIntoView({behavior:'smooth',block:'start'});
				}
			},
			handleTabClick(tab){
				this.activeName = tab.name;
				this.scrollToTabContent(tab.name);
			}
		}
	}
</script>
<style scoped>

::-webkit-scrollbar{
	width:0px;
}
.editBox{
	width: 100%;
	display:flex;
}
.edit-cards{
	height: 100px;
	overflow-y: scroll;
	width: 100%;
	height: 100px;
}
.dimg{
		
		position: relative;
		width: 30px;
		height: 30px;
		margin-top: 20px;
		background-position: 50% 50%;
		background-repeat: no-repeat;
		background-size: cover;
		border-radius: 50%;
		cursor: pointer;
	}
.edit-card{
	width: 600px;
	font-size: 12px;
}
</style>