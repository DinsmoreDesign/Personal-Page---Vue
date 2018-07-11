<template>

	<div class="hero dark fullheight row middle-xs">
		<div class="container hero-body">

			<transition name="fade" mode="out-in">
				
				<h1 v-if="showIntro" style="text-align: center;">Hi.</h1>
				<div v-else>
					<p>
						I’m <span>Derek</span> and I’m passionate about working on projects that aim to solve <strong>big</strong> problems with <em>elegant</em> solutions. With an uncommon background in which I've excelled in both creative and technical assignments, I can help bring a unique mindset to your organization, which can help better bridge the gap between client needs and technical requirements. I’d love the opportunity to work with your company to help tackle its biggest obstacles.
					</p>
					<router-link class="button" to="/resume">
						Learn More <i class="fa fa-chevron-circle-right" aria-hidden="true"></i>
					</router-link>
				</div>
				


			</transition>
			
		</div>
  	</div>

</template>





<script>

	export default {

		name: "home",
		data() {
			return {
				showIntro: true
			}
		},
		mounted() {

			setTimeout(() => {

				this.showIntro = false;

			}, 1500);

		}

	};

</script>





<style lang="scss" scoped>

	@import 'flexboxgrid';

	.hero {
		margin: 0;

		h1 {
			color: #F9CE06;
			font-size: 200px;
		}

		p {
			font-size: 24px;

			span {
				color: #F9CE06;
				font-weight: 700;
			}

		}

		&.fullheight {
			min-height: 100vh;
			max-height: 100vh;
			height: 100vh;
			margin: 0;
		}

		&.dark {
			background: #333;
			color: #FFF;
		}
	}

	.drop-cap {
		float: left;
		font-size: 54px;
		line-height: 54px;
		padding-top: 4px;
		padding-right: 8px;
	}

	.button {
		padding: 1rem;
		border: 1px solid #F9CE06;
		color: #F9CE06;
		text-decoration: none;
		font-weight: 700;

		&:hover,
		&:active,
		&:focus {
			background: #F9CE06;
			color: #333;
			border: 1px solid #333;
		}
	}

</style>