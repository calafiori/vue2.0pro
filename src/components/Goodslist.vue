<template>
	<NutRow>
  <NutCol :span="24" v-for="(item, index) in data" :key="index">
    <NutProduct
      :data="[item, params]"
      nameRow="1"
      linePricePre="日常价"
      col="1"
      type="fold"
    >
      <template slot="priceSlot">
        <NutTag class="price-tag-pre" type="red" radius="2px"
          >秒杀</NutTag
        >
        限时优惠价
        <NutPrice price="1649" class="price" />
      </template>
    </NutProduct>
  </NutCol>
</NutRow>
</template>
<script>
	export default{
		name:'Goodslist',
		data() {
			return {
				data: [
				{
					name: 'CAMILA&KORALI限定斜挎包包',
					nameRow: '1',
					linePrice: '2999',
					image:
					'https://img13.360buyimg.com/imagetools/jfs/t1/190855/7/12881/42147/60eb0cabE0c3b7234/d523d551413dc853.png'
				}
				],
				params: {
				cDesc: false
				}
			};
			}
	}
</script>
