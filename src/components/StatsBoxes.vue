<template>
    <div class="grid md:grid-cols-2 gap-4 mr-10 ml-10">

        <!--Box 1-->
        <div class="shadow-md bg-orange-100 p-10 text-center rounded">
            <h3 class="text-3xl text-orange-900 font-bold mb-4">
                Cases
            </h3>

            <div class="text-2xl mb-4">
                <span class="font-bold">New: </span>
                {{numberWithCommas(stats.NewConfirmed)}}
            </div>
            <div class="text-2xl mb-4">
                <span class="font-bold">Total: </span>
                {{numberWithCommas(stats.TotalConfirmed)}}
            </div>
        </div>

        <!--Box 2-->
        <div class="shadow-md bg-orange-100 p-10 text-center rounded">
            <h3 class="text-3xl text-orange-900 font-bold mb-4">
                Deaths
            </h3>

            <div class="text-2xl mb-4">
                <span class="font-bold">New: </span>
                {{numberWithCommas(stats.NewDeaths)}}
            </div>
            <div class="text-2xl mb-4">
                <span class="font-bold">Total: </span>
                {{numberWithCommas(stats.TotalDeaths)}}
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: 'StatsBoxes',
        props: ['stats'],
        methods: {
            numberWithCommas(x) {
                return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g,',')

            }
        }
    }   
</script>