import {Component, Vue} from 'vue-property-decorator'

@Component
export default class HelloWorld extends Vue {
	protected render() {
		return <div class="hello">this About compontent</div>
	}
}
