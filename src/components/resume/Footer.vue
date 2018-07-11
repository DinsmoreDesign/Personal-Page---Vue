<template>

    <footer>
        <div class="container">
            <div class="row">

                <div class="columns four mobile">
                    <a :href=" 'https://medium.com/@' + mediumProfile " target="_blank" title="View my articles on Medium">
                        <i class="fa fa-medium" aria-hidden="true"></i>
                    </a>
                </div>

                <div class="columns four mobile">
                    <a :href=" 'https://github.com/' + githubProfile " target="_blank" title="View my projects on Github">
                        <i class="fa fa-github" aria-hidden="true"></i>
                    </a>
                </div>

                <div class="columns four mobile">
                    <a :href="personalSite" target="_blank" title="View my freelance work">
                        <i class="fa fa-globe" aria-hidden="true"></i>
                    </a>
                </div>

            </div>
        </div>
    </footer>

</template>




<script>

    export default {

        props: {
            mediumProfile: {
                type: String,
                required: true
            },
            githubProfile: {
                type: String,
                required: true
            },
            personalSite: {
                type: String,
                required: true
            }
        }

    }

</script>




<style lang="scss" scoped>

    footer {
        background: #333;
        padding: 35px 0;
        color: #FFF;
        text-align: center;
    }
    footer a,
    footer i {
        color: #FFF;
        font-size: 4.5rem;
    }
    footer a:hover {
        opacity: 0.7;
    }

</style>