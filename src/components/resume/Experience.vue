<template>

    <div :class="{ 'awards': hasBorder, 'experience': !hasBorder, 'first': index === 0 }">
        <div class="row">
            <div :class="{ 'four columns timeline': true, 'first-header': index === 0 }">
                <h1 v-if="index === 0">{{ header }}</h1>
                <h4>{{ timeline }}</h4>
            </div>
            <div :class="{ 'seven columns offset-by-one': true, 'first-header': index === 0 }">
                <h2>
                    {{ company }}
                </h2>
                <h3>
                    {{ title }}<small>{{ subtitle ? ' | ' + subtitle : '' }}</small>
                </h3>
                <ul>
                    <li v-for="(item, index) in description" :key="index">{{ item }}</li>
                </ul>
            </div>
        </div>
    </div>

</template>




<script>

    export default {

        props: {
            hasBorder: {
                type: Boolean,
                required: false,
                default: false
            },
            header: {
                type: String,
                required: true
            },
            timeline: {
                type: String,
                required: true
            },
            index: {
                type: Number,
                required: true
            },
            company: {
                type: String,
                required: true
            },
            title: {
                type: String,
                required: true
            },
            subtitle: {
                type: String,
                required: false
            },
            description: {
                type: Array,
                required: true
            }
        }

    }

</script>




<style lang="scss" scoped>

    .awards {
        border-top: 1px solid #F9CE06;
    }

        .awards ~ .awards {
            border-top: none;
            padding-top: 0;
        }

    .experience ul,
    .awards ul {
        margin: 0;
    }

    .experience ul {
        padding-left: 1em;
    }

    .awards ul {
        padding-left: 0;
        list-style: none;
    }

    .experience li:last-child,
    .awards li:last-child {
        padding-bottom: 35px;
    }

    @media (min-width: 1000px) {

        .first-header {
            padding-top: 6.5em;

            &.timeline {
                padding-top: 30px;
            }
        }

    }

    @media (max-width: 1000px) {

        .first {
            padding-top: 30px;
        }

    }

</style>