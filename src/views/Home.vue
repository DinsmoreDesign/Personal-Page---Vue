<template>

	<div class="home-container">

		<div class="hero dark fullheight row middle-xs">
			<div class="container hero-body">

				<transition name="fade" mode="out-in">
					
					<h1 v-if="showIntro" style="text-align: center;">Hi.</h1>
					<div v-else>
						<p>
							I’m <span>Derek</span> and I’m passionate about working on projects that aim to solve <strong>big</strong> problems with <em>elegant</em> solutions. With a diverse background where I've excelled in both creative and technical assignments, I can help bring a unique mindset to your organization, and help better bridge the gap between your client's needs and technical requirements. I’d love the opportunity to work with your company to help tackle its biggest obstacles.
						</p>
						<router-link class="button" to="/resume">
							Learn More <i class="fa fa-chevron-circle-right" aria-hidden="true"></i>
						</router-link>
					</div>

				</transition>
				
			</div>
		</div>
		
		<vue-particles class="particles" color="#F9CE06" />

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

	.home-container {
		position: fixed;
		width: 100%;

		.hero {
			margin: 0;

			.hero-body {
				z-index: 1;
			}

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

		.particles {
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
		}

		@media (max-width: 48em) {

			.container {
				width: 90%;
			}

			.hero p {
				font-size: 20px;
			}

		}

	}

</style>