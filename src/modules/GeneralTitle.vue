<template>
    <div class="general-title">
        <h4 v-if="title">{{ title }}</h4>
        <p v-if="subtitle">{{ subtitle }}</p>
        <p class="mb-0" v-if="description">{{ description }}</p>
    </div>
</template>

<script>
export default {
    name: 'GeneralTitle',
    props: {
        title: String,
        classTitle: String,
        subtitle: String,
        classSubtitle: String,
        description: String,
        classDescription: String,
    }
}
</script>

<style lang="scss" scoped>
.general-title {
    text-align: center;

    h4 {
        font-weight: 600;
        font-size: 24px;
        line-height: 36px;
    }
}
</style>