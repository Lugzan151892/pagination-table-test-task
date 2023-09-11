<template>
    <table class="table">
        <thead>
            <tr class="table__row">
                <th class="table__item" v-for="key in headers" :style="{width: key.width}">
                    {{ key.title }}
                </th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="item in items" :key="item.id">
                <td class="table__item" v-for="{title, value}, key in headers" :key="key">
                    <img class="table__image" v-if="value === 'image'" :src="item.image" :alt="item.name" />
                    <p v-else>{{ item[value] }}</p>
                </td>
            </tr>
        </tbody>
    </table>
</template>
<script lang="ts" setup>
    defineProps({
        items: {
            type: Array<COMMON.ICharacter>,
            required: true
        },
        headers: {
            type: Object,
            required: true
        }
    });
</script>
<style scoped>
    .table {
        border: 1px solid black;
        border-spacing: 0;
        width: 100%;
    }
    .table__image {
        width: 50px;
        height: 50px;
        border-radius: 100px;
    }
    .table__item {
        font-size: 20px;
        border: 1px solid black;
        text-align: center;
        padding: 5px;
    }
    @media (max-width: 992px) {
        .table__item {
            font-size: 16px;
        }
    }
    @media (max-width: 600px) {
        .table__item {
            font-size: 12px;
            padding: 2px;
        }
    }
</style>