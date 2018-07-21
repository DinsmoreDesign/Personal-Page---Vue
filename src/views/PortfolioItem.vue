<template>

    <div>

        <div class="hero" :style=" 'background-image: url(' + heroImage.src + ');' ">
            <h1>{{ title }}</h1>
        </div>

        <div class="row thumbnails">
            <div class="col-xs-4 col-md-2 thumbnail" v-for="(image, index) in imageArray" :key="index">
                <a href="javascript:;" :class="{ 'is-selected': heroImage.index === index }" @click="setHero(index)">
                    <img :src="image" class="image" :alt=" 'Image ' + index + 1 + ' ' + title ">
                </a>
                <i class="fa fa-check-circle-o fa-3x icon" aria-hidden="true" v-if="heroImage.index === index"></i>
            </div>
        </div>

        <div class="portfolio-container">

            Some text goes here.

        </div>

    </div>
    

</template>





<script>

	export default {

		name: "home",
		data() {
			return {
                title: 'Title goes here.',
                heroImage: {
                    index: null,
                    src: null
                },
                images: [
                    'https://dinsmoredesign.com/images/projects/color-room-films/colorroom.jpg',
                    'https://dinsmoredesign.com/images/projects/sanctity-studios/sanctity.jpg',
                    'https://dinsmoredesign.com/images/projects/jam-connect/jamconnect.jpg',
                    'https://dinsmoredesign.com/images/projects/altitude-productions/altitude-realistic.jpg',
                    'https://dinsmoredesign.com/images/projects/tequa-builders/tequa.jpg',
                    'https://dinsmoredesign.com/images/projects/verde-vintage/verde.jpg'
                ]
			}
        },
        computed: {

            imageArray() {

                return this.images.slice().reverse();

            }

        },
		mounted() {

            const lastIndex = this.imageArray.length - 1;
            
            this.heroImage = {
                index: lastIndex,
                src: this.imageArray[lastIndex]
            }

        },
        methods: {

            setHero(index) {

                this.heroImage = {
                    index: index,
                    src: this.imageArray[index]
                }

            }

        }

	};

</script>





<style lang="scss" scoped>

	@import 'flexboxgrid';

    .hero {
        height: 100vh;
        width: 100%;
        background-size: cover;

        h1 {
            position: absolute;
            padding: 3rem;
            margin: 0;
            background: rgba(255,255,255,0.7);
            bottom: 0;
        }
    }

    .thumbnails {
        margin: 0;
        padding: 1rem 0.5rem;

        .thumbnail {
            position: relative;

            a.is-selected {
                opacity: 0.7;

                &:hover {
                    opacity: 1;
                }

            }

            img {
                width: 100%;
            }

            a:hover {
                opacity: 0.7;
            }

            .icon {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                color: #F9CE06;
            }

        }
    }

    .portfolio-container {
        width: 89%;
        margin: auto;
    }

</style>