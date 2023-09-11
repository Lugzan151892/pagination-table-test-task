<template>
    <section class="main">
        <TableComponent :items="newArray" :headers="tableHeaders" />
        <PaginationComponent :value="page" :length="getPaginationLength" @change="handleChangePagination" />
    </section>
</template>
<script lang="ts" setup>
    import TableComponent from '@/components/TableComponent.vue';
    import PaginationComponent from '@/components/PaginationComponent.vue';
    import { characters, tableHeaders, filterArray } from '@/const/index';
    import { ref, computed } from 'vue';

    const page = ref(1);
    
    const offset = computed(() => {
        return (page.value - 1) * 10;
    });

    const getPaginationLength = computed(() => {
        return Math.ceil(characters.length / 10);
    });

    const handleChangePagination = (newPage: number) => {
        page.value = newPage;
    }

    const newArray = computed(() => {
        return filterArray(characters, offset.value);
    });
</script>
<style>
    .main {
        margin: 20px;
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: min-content min-content;
        row-gap: 10px;
        justify-items: center;
    }
</style>