<template>
    
    <select @change="onChange()" v-model="selected" class="form-select mt-10 block border p-3 rounded mr-10 ml-10">
        <option value="0">Select Country</option>
        <option v-for="country in countries" :value="country.ID">
            {{ country.Country }}
        </option>
    </select>
</template>

<script>
export default {
    name: 'CountrySelection',
    props: ['countries'],
    data(){
        return {
            selected: 0,
        }
    },
    methods: {
        onChange(){
            const country = this.countries.find((item) => item.ID === this.selected) 
            
            this.$emit('get-country', country)
        }

    },
}

</script>