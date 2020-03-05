import { Component, Prop } from 'vue-property-decorator'
import HelloWorld from '@/components/HelloWorld'
import * as Tsx from "vue-tsx-support";
export interface Props {
	type?: number;
}
@Component
export default class extends Tsx.Component<Props> {
	@Prop() type?: number;
	// 给予默认值
	value: string = ""
	getDom(e: number, x: Event) {
		console.log(111, e, x)
	}
	render() {
		return (
			<div class="home">
				{this.type}
				<div onClick={this.getDom.bind(this, 555)}>点击我</div>
				<input v-model={this.value} />
				{this.value}
				<img alt="Vue logo" src="../assets/logo.png" />
				<HelloWorld msg="Welcome to Your Vue.js App" />
			</div>
		)
	}
}
