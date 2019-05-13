<template>
    <nav class="navbar navbar-expand-sm navbar-dark bg-dark">
        <a class="navbar-brand" href="#">小飞</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="navbar-collapse collapse" id="navbarsExampleDefault">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                    <a class="nav-link default-select-item" href="#" @click="didClickNavItem">首页</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#" @click="didClickNavItem">Team</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#" @click="didClickNavItem">加入&邀请</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#" @click="didClickNavItem">简历</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#" @click="didClickNavItem">打赏</a>
                </li>
            </ul>
            <ul class="navbar-nav">
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" id="dropdown01" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">敬请期待</a>
                    <div class="dropdown-menu" aria-labelledby="dropdown01">
                        <a class="dropdown-item disabled" href="#">生活</a>
                        <a class="dropdown-item disabled" href="#">博客</a>
                        <a class="dropdown-item disabled" href="#">直播聊天</a>
                    </div>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>
    export default {
        name: 'navgation',
        data() {
            return {
                selectNavItem: {},
            }
        },
        mounted() {
            this.selectNavItem = $('.default-select-item').first()
        },
        methods: {
            didClickNavItem(event) {
                let el = event.currentTarget
                if ($(el).parent().hasClass('active')) {
                    return
                }
                $(el).parent().addClass('active')
                $(this.selectNavItem).parent().removeClass('active')
                this.selectNavItem = el
            }
        }

    }
</script>

<style lang="css" scoped>

</style>