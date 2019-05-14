<template>
    <div>
        <a href="https://view.officeapps.live.com/op/view.aspx?src=https%3A%2F%2Fsven820.github.io%2Fgogo%2Fresume.docx">显示不了，点这里查看</a>
        <div class="iframeDiv">
            <iframe scrolling="no"
                    src='https://view.officeapps.live.com/op/view.aspx?src=https%3A%2F%2Fsven820.github.io%2Fgogo%2Fresume.docx'>
            </iframe>
        </div>
    </div>
</template>

<script>
    export default {
        name: "resume.vue",
        created() {

        },
        methods: {

        }
    }
</script>

<style scoped>
    .iframeDiv{
        -webkit-overflow-scrolling: touch;
        overflow: auto;
        width: 100%;
        height: 3600px;
    }
    .iframeDiv iframe {
        width: 100%;
        height: 100%;
        overflow: hidden;
    }

</style>