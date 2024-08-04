// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import plugins from './plugins'
// import { Dialog,Picker } from '@nutui/nutui';
import {Dialog,InfiniteScroll,CollapseItem,Collapse,TableColumn,Table,Link,Result,Menu,MenuItem,Submenu,RadioButton,Backtop,PageHeader,Rate,Image,Card,SkeletonItem,skeleton,avatar,Radio,RadioGroup,Checkbox,CheckboxGroup,Switch,Form,TimePicker,DatePicker,Option,Input,FormItem,main,aside,Col,Avatar,Header,Container, Button, Select ,Row,Carousel,CarouselItem} from 'element-ui';
//import ElementUI from 'element-ui';
//import 'element-ui/lib/theme-chalk/index.css';
import NutUI from '@nutui/nutui';
import '@nutui/nutui/dist/nutui.css';
// import NutCat from "@nutui/nutui-cat";
// import "@nutui/nutui-cat/dist/nutui-cat.css";
Vue.config.productionTip = false
Vue.use(plugins)
//Vue.use(ElementUI)
Vue.use(InfiniteScroll)
Vue.use(Button)
Vue.use(Select)
Vue.use(Dialog)
Vue.use(Menu)
Vue.use(TableColumn)
Vue.use(avatar)
Vue.use(CollapseItem)
Vue.use(Collapse)
Vue.use(Link)
Vue.use(RadioButton)
Vue.use(Result)
Vue.use(Row)
Vue.use(Table)
Vue.use(Backtop)
Vue.use(skeleton)
Vue.use(MenuItem)
Vue.use(Submenu)
Vue.use(SkeletonItem)
Vue.use(Carousel)
Vue.use(Card)
Vue.use(PageHeader)
Vue.use(Image)
Vue.use(Rate)
Vue.use(CarouselItem)
Vue.use(Container)
Vue.use(TimePicker)
Vue.use(Header)
Vue.use(RadioGroup)
Vue.use(Radio)
Vue.use(CheckboxGroup)
Vue.use(Checkbox)
Vue.use(Col)
Vue.use(main)
Vue.use(Switch)
Vue.use(Form)
Vue.use(DatePicker)
Vue.use(Option)
Vue.use(Input)
Vue.use(FormItem)
Vue.use(aside)
Vue.use(NutUI)
// Vue.use(NutCat)
//vue3.0版本使用
//Vue.use(NutBig)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render:h=>h(App),
  router,
  components: { App },
  template: '<App/>' 
})
