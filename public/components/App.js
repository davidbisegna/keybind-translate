Vue.component('test-button-component', {
	data: () => {
		return {
			message: "coucou"
		}
	},
  	template: `<button class="mdc-button foo-button" @click="message += 'u'">
			  	<div class="mdc-button__ripple"></div>
			  	<span class="mdc-button__label">{{ message }}</span>
			</button>`
})