<template>

	<div id="app">
		<router-view/>
		<MenuButton v-if="!showMenu" @clicked="showMenu = true" />
	</div>
	
</template>





<script>

	import MenuButton from '@/components/menu/MenuButton';

	export default {

		components: {
			MenuButton
		},
		data() {
			return {

				showMenu: false

			}
		}

	}

</script>





<style lang="scss">

	html {
		font-family: sans-serif;
		-ms-text-size-adjust: 100%;
		-webkit-text-size-adjust: 100%;

		font-size: 62.5%;
	}
	
	body {
		margin: 0;

		font-size: 1.5em;
		line-height: 1.6;
		font-weight: 400;
		font-family: "HelveticaNeue", "Helvetica Neue", Helvetica, Arial, sans-serif;
		color: #000000;
	}

	.fade-enter-active, .fade-leave-active {
		transition: opacity .5s;
	}
	.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
		opacity: 0;
	}

</style>
