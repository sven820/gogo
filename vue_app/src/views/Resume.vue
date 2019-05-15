<template>
    <div>
        <a id="lookmore" href="https://view.officeapps.live.com/op/view.aspx?src=https%3A%2F%2Fsven820.github.io%2Fgogo%2Fresume.docx">显示不了，点这里查看</a>
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
            window.addEventListener(global.cevent.kEvent_NavBarStateChangeEvent, function (et) {
                let el_look = $('#lookmore').first()
                if (et.detail.state == 'shown') {
                    $('.iframeDiv').css('top', el_look.position().top + el_look.height())
                } else if(et.detail.state == 'hidden') {
                    $('.iframeDiv').css('top', el_look.position().top + el_look.height())
                }
            })
        },

        methods: {

        }
    }
</script>

<style scoped>
    .iframeDiv{
        position: fixed;
        top: 80px;
        left: 0;
        right: 0;
        bottom: 0;
    }
    .iframeDiv iframe {
        width: 100%;
        height: 100%;
        /*overflow: hidden;*/
    }

</style>