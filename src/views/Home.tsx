import {Component, Prop} from 'vue-property-decorator'
import HelloWorld from '@/components/HelloWorld'
import * as Tsx from 'vue-tsx-support'
import {VNode} from 'vue'
import * as style from './home.module.scss'
import {Button, Select} from 'element-ui'
console.log(style)
interface Props {
	type?: number
}
interface propItem {
	date: string
	name: string
	address: string
}
@Component({
	components: {
		[Button.name]: Button,
	},
})
export default class extends Tsx.Component<Props> {
	// 给予默认值
	value: string = ''
	tableData: propItem[] = [
		{
			date: '2016-05-02',
			name: '王小虎',
			address: '上海市普陀区金沙江路 1518 弄',
		},
		{
			date: '2016-05-04',
			name: '王小虎',
			address: '上海市普陀区金沙江路 1517 弄',
		},
		{
			date: '2016-05-01',
			name: '王小虎',
			address: '上海市普陀区金沙江路 1519 弄',
		},
		{
			date: '2016-05-03',
			name: '王小虎',
			address: '上海市普陀区金沙江路 1516 弄',
		},
	]
	@Prop({default: 2}) type?: number
	mounted() {
		console.log('初始化')
	}
	render() {
		return (
			<div class="home">
				<el-button>我是你爸爸啊</el-button>
				<span class={style.colors}>{this.value}xx</span>
				<span class="color">{process.env.VUE_APP_DATA_URL}</span>
				<HelloWorld msg="Welcome to Your Vue.js App" />
			</div>
		)
	}
}
