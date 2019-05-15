<template>
    <nav class="navbar navbar-expand-sm navbar-dark bg-dark">
        <a class="navbar-brand" href="#">小飞</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="navbar-collapse collapse" id="navbarsExampleDefault">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                    <router-link :to="{ name: 'home'}" class="nav-link default-select-item" @click.native="didClickNavItem">首页</router-link>
                </li>
                <li class="nav-item">
                    <router-link :to="{ name: 'index'}" class="nav-link" @click.native="didClickNavItem">Team</router-link>
                </li>
                <li class="nav-item">
                    <router-link :to="{ name: 'index'}" class="nav-link" @click.native="didClickNavItem">加入&邀请</router-link>
                </li>
                <li class="nav-item">
                    <router-link :to="{ name: 'resume'}" class="nav-link" @click.native="didClickNavItem">简历</router-link>
                </li>
                <li class="nav-item">
                    <router-link :to="{ name: 'index'}" class="nav-link" @click.native="didClickNavItem">打赏</router-link>
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
        props: {
            didShowMenuHandle: Function,
            didHideMenuHandle: Function,
        },
        mounted() {
            this.selectNavItem = $('.default-select-item').first()

            $('.collapse').on('show.bs.collapse', function () {
                let et = new CustomEvent(global.cevent.kEvent_NavBarStateChangeEvent, {detail:{state: 'show'}})
                window.dispatchEvent(et)
            })
            $('.collapse').on('shown.bs.collapse', function () {
                let et = new CustomEvent(global.cevent.kEvent_NavBarStateChangeEvent, {detail:{state: 'shown'}})
                window.dispatchEvent(et)
                if (this.didShowMenuHandle) {
                    this.didShowMenuHandle()
                }
            })
            $('.collapse').on('hide.bs.collapse', function () {
                let et = new CustomEvent(global.cevent.kEvent_NavBarStateChangeEvent, {detail:{state: 'hide'}})
                window.dispatchEvent(et)
            })
            $('.collapse').on('hidden.bs.collapse', function () {
                let et = new CustomEvent(global.cevent.kEvent_NavBarStateChangeEvent, {detail:{state: 'hidden'}})
                window.dispatchEvent(et)
                if (this.didHideMenuHandle) {
                    this.didHideMenuHandle()
                }
            })
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

                if ($('.navbar-toggler').is(':visible')) {
                    $('.collapse').collapse('toggle')
                }
            }
        }
    }
</script>

<style lang="css" scoped>

</style>