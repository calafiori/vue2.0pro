<template>
	<div class="cardlist">
		<Userheader />	
		<br/><br/><br/><br/><br/>
		<div style="width: 90%;height: 60px;overflow: hidden;"></div>
		<br/>
		<Carditem :items="items" :reload="reload"/>	
		<br/><br/>
		<Userfooter/>
	</div>
</template>
<script>
import Carditem from './Carditem.vue';
import Userfooter from './Userfooter.vue';
import Userheader from './Userheader.vue';
export default {
	name:'Cardlist',
	components:{Carditem,Userfooter,Userheader},
	data() {
		return {
			items:[
				{
					id:1,
					iframeloadUrl:'https://player.youku.com/embed/XMzg0MDkyNTQ5Mg==?rel=0&amp;autoplay=1',
					imgUrl:'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg',
					author:'佚名',
					ctime:'2022.11.23',
					starts:2,
					title:'红尘中，，我为明公叹。放翁徒撩情，却是无情男。',
				},
				{
					id:1,
					iframeloadUrl:'https://player.youku.com/embed/XMzg0MDkyNTQ5Mg==?rel=0&amp;autoplay=1',
					imgUrl:'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg',
					author:'佚名',
					ctime:'2022.11.23',
					starts:2,
					title:'红尘中，，我为明公叹。放翁徒撩情，却是无情男。',
				},
				{
					id:1,
					iframeloadUrl:'https://player.youku.com/embed/XMzg0MDkyNTQ5Mg==?rel=0&amp;autoplay=1',
					imgUrl:'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg',
					author:'佚名',
					ctime:'2022.11.23',
					starts:2,
					title:'红尘中，，我为明公叹。放翁徒撩情，却是无情男。',
				},
				{
					id:1,
					iframeloadUrl:'https://player.youku.com/embed/XMzg0MDkyNTQ5Mg==?rel=0&amp;autoplay=1',
					imgUrl:'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg',
					author:'陆游',
					ctime:'2022.11.23',
					starts:4.5,
					title:'红酥手。黄縢酒。满城春色宫墙柳。东风恶。欢情薄。一怀愁绪，几年离索。错错错。',
				},
				{
					id:1,
					iframeloadUrl:'https://player.youku.com/embed/XMzg0MDkyNTQ5Mg==?rel=0&amp;autoplay=1',
					imgUrl:'./static/img/3.jpg',
					author:'唐婉',
					ctime:'2022.11.23',
					starts:4.5,
					title:'春如旧。人空瘦。泪痕红浥鲛绡透。桃花落。闲池阁。山盟虽在，锦书难托。莫莫莫。',
				},
				{
					id:1,
					iframeloadUrl:'https://player.youku.com/embed/XMzg0MDkyNTQ5Mg==?rel=0&amp;autoplay=1',
					imgUrl:'./static/img/1.jpg',
					author:'宋·佚名',
					ctime:'2022.11.23',
					starts:4.5,
					title:'十八新娘八十郎，苍苍白发对红妆。鸳鸯被里成双夜，一树梨花压海棠。',
				},
				{
					id:1,
					iframeloadUrl:'https://player.youku.com/embed/XMzg0MDkyNTQ5Mg==?rel=0&amp;autoplay=1',
					imgUrl:'./static/img/4.jpg',
					author:'你爹',
					ctime:'2022.11.23',
					starts:4.5,
					title:'的柵欄外有幾個賣東西的等著顧客。',
				},
			],
			// contentinfo:[
			//     {id:6,title:'寒蝉凄切，对长亭晚，骤雨初歇.寒蝉凄切，骤雨初歇',author:'柳三变',ctime:'2022.11.23',imgUrl:'./static/img/4.jpg',playerurl:''},
			// 	{id:1,title:'寒蝉凄切，对长亭晚，骤雨初歇.寒蝉凄切，',author:'柳三变',ctime:'2022.11.23',imgUrl:'./static/img/4.jpg',playerurl:''},
			// 	{id:2,title:'寒塘渡鹤影，冷月葬花魂！',author:'林妹妹',ctime:'2022.11.23',imgUrl:'./static/img/1.jpg',playerurl:''},
			// 	{id:3,title:'恰同学少年，风华正茂，挥斥方裘，粪土当年万户侯！',author:'伟人',ctime:'2022.11.23',imgUrl:'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg',playerurl:''},
			// 	{id:4,title:'感时花溅泪，恨别鸟惊心！',author:'杜甫',ctime:'2022.11.23',imgUrl:'./static/img/3.jpg',playerurl:''},
			// 	{id:5,title:'寒蝉凄切，对长亭晚，骤雨初歇',author:'柳三变',ctime:'2022.11.23',imgUrl:'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg',playerurl:''},
			// ],
			imgsrc:'./static/img/4.jpg',
			currentDate: '2017-11-23'
		};
	},
	methods:{
		reload(){
			console.log('do nothing')
		},
		toplay(){
			console.log(22)
		}
	}
}
</script>
<style scoped>
@media screen and (min-width: 1024px){
	.cardlist{
		width: 60%;
		margin: auto;
	}
}
@media screen and (max-width: 768px){
	.cardtext{
		margin:10px auto;
		width: 80%;
		font-size: 10px;
		text-align: left;
		line-height:1em;
		color:#4e4e4e;
		letter-spacing: 1px;
	}
	.image {
		width: 80%;
		height: 70px;
		display: block;
		border-radius: 10px;
		margin: auto;
	}
}


  
  
  /* .clearfix:after {
      clear: both
  } */
</style>
