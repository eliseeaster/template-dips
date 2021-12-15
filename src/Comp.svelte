<script>
	export let name
  
	let buttonText = 'Button'
  
	function handleClick() {
	  buttonText = 'Button Clicked'
	}

	export const testString = "Hei"
	export const testString2 = "Heii"

	
  </script>
  
  <h1>Hello {name}!</h1>
  
  <button on:click="{handleClick}">{buttonText}</button>