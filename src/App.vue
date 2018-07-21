<template>

	<div id="app">
		
		<transition-group name="fade">
			<router-view key="view" />
			<MenuButton key="button" v-if="!showMenu" @clicked="showMenu = true" />
			<MenuContainer key="menu" v-else @close="showMenu = false" />
		</transition-group>

	</div>
	
</template>





<script>

	import MenuButton from '@/components/menu/MenuButton';
	import MenuContainer from '@/components/menu/MenuContainer';

	export default {

		components: {
			MenuButton,
			MenuContainer
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
