<template>
    <div class="card">
        <Message :severity="severity" :closable="false">{{ msg }}</Message>
    </div>
</template>

<script>
import Message from 'primevue/message';

export default {
    name: 'AdviseMessage',
    components: { Message },
    props: {
        msg: String,
        adviseSuccess: Boolean,
        adviseEdit: String
    },
    data() {
        const severity = this.adviseSuccess ? 'info' : 'warn';
        return {
            severity: severity
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.card {
    border: unset !important;
    padding: 10px 56px 10px 50px;
}

.p-message {
    margin: 0px;
}

.advise {
    display: flex;
    padding: 10px 56px 10px 50px;
    min-height: 34px;
    align-items: center;

    img {
        height: 16px;
        padding-right: 8px;
    }

    p {
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 17px;
        letter-spacing: -0.02em;
        margin: unset;
        text-align: initial;
        color: #606060;
    }
}

.adviseEdit {
    width: 100%;
}
</style>