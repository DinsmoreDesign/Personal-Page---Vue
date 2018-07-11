<template>

    <div class="row education">
        <div class="four columns">
            <h1>{{ title }}</h1>
        </div>
        <div class="seven columns offset-by-one">
            <h2>
                {{ university }}
            </h2>
            <h3>
                {{ degree }} <small>| {{ distinction }}</small>
            </h3>
            <p>
                {{ school }}
            </p>
        </div>
    </div>

</template>




<script>

    export default {

        props: {
            title: {
                type: String,
                default: 'Education',
                required: false
            },
            university: {
                type: String,
                required: true
            },
            degree: {
                type: String,
                required: true
            },
            distinction: {
                type: String,
                required: true
            },
            school: {
                type: String,
                required: true
            }
        }

    }

</script>




<style lang="scss" scoped>

    .education {
        border-top: 1px solid #F9CE06;
        padding: 35px 0;
    }

</style>