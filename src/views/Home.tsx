import {Component, Prop} from 'vue-property-decorator'
import HelloWorld from '@/components/HelloWorld'
import * as Tsx from 'vue-tsx-support'
import {VNode} from 'vue'
interface Props {
	type?: number
}
interface propItem {
	date: string
	name: string
	address: string
}
interface ScopedSlots {
	default: {row: propItem}
}
@Component
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
				<el-input v-model={this.value} placeholder="请输入内容"></el-input>
				<HelloWorld msg="Welcome to Your Vue.js App" />
				<el-table data={this.tableData} style="width: 100%">
					<el-table-column
						scopedSlots={{
							default: (p: {row: propItem}): VNode => <span>{p.row?.date}</span>,
						}}
						label="日期"
						width="180"
					></el-table-column>
					<el-table-column prop="name" label="姓名" width="180"></el-table-column>
					<el-table-column prop="address" label="地址"></el-table-column>
				</el-table>
			</div>
		)
	}
}
