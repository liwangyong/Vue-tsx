import {Component, Vue} from 'vue-property-decorator'
import {namespace} from 'vuex-class'

const User = namespace('user')
@Component
export default class App extends Vue {
	@User.State('version') version!: string
	@User.Action('fetchData') actionFoo!: () => Promise<any>
	getSet() {
		this.$router.go(-1)
	}
	async mounted() {
		// const data = await this.actionFoo()
		// console.log(data)
	}
	render() {
		return (
			<div id="app">
				{this.version}
				<router-view />
			</div>
		)
	}
}
