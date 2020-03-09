import {Component, Prop} from 'vue-property-decorator'
import HelloWorld from '@/components/HelloWorld'
import * as Tsx from 'vue-tsx-support'
import * as style from './home.module.scss'
import {Button, Input, Message, Dialog} from 'element-ui'
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
		[Input.name]: Input,
		[Dialog.name]: Dialog,
	},
})
export default class extends Tsx.Component<Props> {
	// 给予默认值
	value: string = ''
	dialogTableVisible: boolean = false
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
				<el-button onClick={() => Message.error('测试')}>我是你爸爸啊</el-button>
				<el-button onClick={() => (this.dialogTableVisible = true)}>打开Dialog</el-button>
				<el-Input v-model={this.value} />
				<span class={style.colors}>{this.value}</span>
				<p class={style.text}>{process.env.VUE_APP_DATA_URL}</p>
				<HelloWorld msg="Welcome to Your Vue.js App" />
				<el-dialog
					title="收货地址"
					visible={this.dialogTableVisible}
					{...{on: {'update:visible': (e: boolean) => (this.dialogTableVisible = e)}}}
				>
					<p></p>
				</el-dialog>
			</div>
		)
	}
}
