Vue.component('shortcut-input-component', {
	data: () => {
		return {
			message: "coucou"
		}
	},
  	template: 	`<label class="mdc-text-field mdc-text-field--outlined" data-mdc-auto-init="MDCTextField" id="shortcut-input">
				  <input type="text" v-on:keydown.alt="checkAltShortcut" v-on:keydown.ctrl="checkCtrlShortcut" class="mdc-text-field__input" aria-labelledby="shortcut-input-label-id">
				  <span class="mdc-notched-outline">
				    <span class="mdc-notched-outline__leading"></span>
				    <span class="mdc-notched-outline__notch">
				      <span class="mdc-floating-label" id="shortcut-input-label-id">Shortcut to translate</span>
				    </span>
				    <span class="mdc-notched-outline__trailing"></span>
				  </span>
				</label>`,
	methods: {
		checkCtrlAltShortcut(event) {
			if(event.key != "Control" && event.key != "Alt")
			console.log("Got : CTRL+ALT+" + event.key.toUpperCase())
		},
		checkCtrlShortcut(event) {
			event.preventDefault();
      		event.stopPropagation();
			if(event.ctrlKey && event.key != "Control"){
				if(event.altKey){
					this.checkCtrlAltShortcut(event)
				} else {
					console.log("Got : CTRL+" + event.key.toUpperCase())
				}
			}
		},
		checkAltShortcut(event) {
			event.preventDefault();
      		event.stopPropagation();
			if(event.altKey && event.key != "Alt"){
				if(event.ctrlKey){
				} else {
					console.log("Got : ALT+" + event.key.toUpperCase())
				}
			}
		}
	}
})