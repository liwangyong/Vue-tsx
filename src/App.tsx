import {Component, Vue} from 'vue-property-decorator'
import HelloWorld from '@/components/HelloWorld'
import './index.scss'
@Component
export default class App extends Vue {
	getSet() {
		this.$router.go(-1)
	}
	protected render() {
		return (
			<div id="app" class="color">
                {/* <HelloWorld/>> */}
				<router-view />
			</div>
		)
	}
}
