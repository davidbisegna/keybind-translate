Vue.component('shortcut-input-component', {
	data: () => {
		return {
			message: "coucou"
		}
	},
  	template: 	`<label class="mdc-text-field mdc-text-field--outlined" data-mdc-auto-init="MDCTextField" id="shortcut-input">
				  <input type="text" class="mdc-text-field__input" aria-labelledby="shortcut-input-label-id">
				  <span class="mdc-notched-outline">
				    <span class="mdc-notched-outline__leading"></span>
				    <span class="mdc-notched-outline__notch">
				      <span class="mdc-floating-label" id="shortcut-input-label-id">Shortcut to translate</span>
				    </span>
				    <span class="mdc-notched-outline__trailing"></span>
				  </span>
				</label>`
})