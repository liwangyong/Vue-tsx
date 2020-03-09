import {Component, Prop, Vue} from 'vue-property-decorator'

@Component
export default class HelloWorld extends Vue {
	@Prop(String) public msg!: string
	protected render() {
		return <div class="colors">{this.msg}</div>
	}
}
