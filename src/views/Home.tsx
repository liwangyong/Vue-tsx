import {Component, Vue} from 'vue-property-decorator'
import HelloWorld from '@/components/HelloWorld'

@Component
export default class Home extends Vue {
	render() {
		return (
			<div class="home">
				<img alt="Vue logo" src="../assets/logo.png" />
				<HelloWorld msg="Welcome to Your Vue.js App" />
			</div>
		)
	}
}
