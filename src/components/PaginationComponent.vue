<template>
    <div class="pagination">
        <button @click="$emit('change', 1)" :disabled="value === 1" style="cursor: pointer;">
            &#60
        </button>
        <div v-for="page in getPaginationItems">
            <p class="pagination__page-text" v-if="(typeof page === 'string')">
                {{ page }}
            </p>
            <button 
                v-else 
                class="pagination__page-button" 
                :class="{'pagination__page-active': page === value}"
                :disabled="page === value"
                @click.stop="$emit('change', page)"
            >
                {{ page }}
            </button>
        </div>
        <button @click="$emit('change', length)" :disabled="value === length" style="cursor: pointer;">
            &#62
        </button>
    </div>
</template>
<script lang="ts" setup>
    import { paginationItems } from '@/const/index';
    import { computed } from 'vue';
    const props = defineProps({
        value: {
            type: Number,
            required: true
        },
        length: {
            type: Number,
            required: true
        },
        total: {
            type: Number,
            default: 7
        }
    });

    const getPaginationItems = computed(() =>{
        return paginationItems(props.value, props.length, props.total);
    });
</script>
<style scoped>
    .pagination {
        display: flex;
        justify-content: space-between;
        max-width: 300px;
        width: 100%;
    }
    .pagination__page-text, .pagination__page-button {
        height: 30px;
        width: 30px;
        text-align: center;
    }
    .pagination__page-button {
        cursor: pointer;
        border: 1px solid black;
        border-radius: 100px;
        background: none;
    }
    .pagination__page-active {
        background-color: aquamarine;
        color: blue;
        cursor: default;
    }
</style>