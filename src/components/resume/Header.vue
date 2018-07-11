<template>

    <header>
        <div class="container">
            <div class="row">
                <div class="twelve columns">
                    <h1>{{ name }}</h1>
                    <h3>{{ title }}</h3>
                </div>
            </div>
        </div>
    </header>

</template>




<script>

    export default {

        props: {
            name: {
                type: String,
                required: true
            },
            title: {
                type: String,
                required: true
            }
        }

    }

</script>




<style lang="scss" scoped>

    header {
        background-color: #333;
        padding: 2em 0;
        color: #fff;
        
        h1 {
            font-size: 50px !important;
            line-height: initial;
        }

    }

    @media (min-width: 1000px) {

        header h1 {
            font-size: 100px !important;
            line-height: 100px !important;
        }
        header h3 {
            font-size: 59px !important;
            line-height: 59px !important;
        }

    }

</style>