<template>

	<div class="resume">

		<Header
			:name="state.header.name"
			:title="state.header.title"
			:description="state.header.description"
		/>

		<div class="container">
			<div class="maincontent">

				<Experience v-for="(item, index) in state.experience"
					:index="index"
					header="Experience"
					:timeline="item.timeline"
					:company="item.company"
					:title="item.title"
					:subtitle="item.subtitle"
					:description="item.description"
					:key="index"
				/>
				<Education
					:university="state.education.university"
					:school="state.education.school"
					:degree="state.education.degree"
					:distinction="state.education.distinction"
				/>
				<Skills
					title="Languages & Skills"
					:skills="state.skills"
				/>
				<Skills
					title="Frameworks & Technologies"
					:skills="state.technologies"
				/>
				
			</div>

			<Experience v-for="(item, index) in state.awards"
				:hasBorder="true"
				:index="index"
				header="Awards"
				:timeline="item.timeline"
				:company="item.company"
				:title="item.title"
				:description="item.description"
				:key="index"
			/>

		</div>

		<Contact
			email="derek@dinsmoredesign.com"
			phone="480.246.1596"
		/>
		<Footer
			githubProfile="DinsmoreDesign"
			mediumProfile="paintballthunder2000"
			personalSite="https://dinsmoredesign.com/"
		/>

	</div>

</template>





<script>

	import Header from '@/components/resume/Header';
	import Experience from '@/components/resume/Experience';
	import Education from '@/components/resume/Education';
	import Skills from '@/components/resume/Skills';
	import Contact from '@/components/resume/Contact';
	import Footer from '@/components/resume/Footer';

	export default {
		name: "home",
		components: {
			Header,
			Experience,
			Education,
			Skills,
			Contact,
			Footer
		},
		computed: {

			state() {

				return this.$store.state.resume;

			}

		}
	};

</script>





<style lang="scss" scoped>

	.resume,
	.resume /deep/ * {
		@import '@/assets/css/resume.scss';
	}

</style>