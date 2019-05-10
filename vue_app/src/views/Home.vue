<template>
  <div class="home">
    <navgation></navgation>
    <main role="main">

      <!-- Main jumbotron for a primary marketing message or call to action -->
      <div class="jumbotron">
        <div class="container">
          <h1 class="alert-heading">{{advertise.title}}</h1>
          <p class="mb-0">坐标：{{advertise.locate}}</p>
          <p class="mb-0">职业：{{advertise.work}}</p>
          <p>目标：{{advertise.desc}}</p>
          <p><a class="btn btn-primary btn-lg" href="#" role="button">更多 »</a></p>
        </div>
      </div>

      <div class="container">
        <!-- Example row of columns -->
        <div class="row">
          <div class="col-md d-flex flex-column align-items-start">
            <h2>iOS/Android</h2>
            <p>精通iOS/Android开发</p>
            <p><a class="btn btn-secondary" href="#" role="button">View details »</a></p>
          </div>
          <div class="col-md d-flex flex-column align-items-start">
            <h2>H5/Web</h2>
            <p></p>
            <p class="mt-auto"><a class="btn btn-secondary" href="#" role="button">View details »</a></p>
          </div>
          <div class="col-md d-flex flex-column align-items-start">
            <h2>小程序</h2>
            <p></p>
            <p class="mt-auto"><a class="btn btn-secondary" href="#" role="button">View details »</a></p>
          </div>
        </div>

        <hr>

      </div> <!-- /container -->
    </main>

    <foot></foot>
  </div>
</template>

<script>
// @ is an alias to /src
import navgation from '../components/Navgation'
import foot from '../components/Footer'

export default {
    name: 'home',
    components: {
        navgation,
        foot
    },
    data() {
        return {
            advertise: {
                title: '老板,有活吗!',
                locate: '合肥',
                work: '移动全栈开发',
                desc: '在独立开发的路上走的更远'
            },
            apps: {

            }
        }
    },
    methods: {

    }
}
</script>

<style lang="css" scoped>
  .container {

  }
</style>