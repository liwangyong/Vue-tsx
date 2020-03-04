import { Component, Vue } from 'vue-property-decorator'
import { State, Getter, Action, Mutation, namespace } from 'vuex-class';

const User = namespace('user');
import './index.scss'
@Component
export default class App extends Vue {
	@User.State('version') version!: string;
	getSet() {
		this.$router.go(-1)
	}
	protected render() {
		return (
			<div id="app" class="color">
				{this.version}
				<router-view />
			</div>
		)
	}
}
