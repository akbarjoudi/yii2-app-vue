<template>
  <div>
    <div class="jumbotron">
      <img src="img/vue.png" width="15%" /> +
      <img src="img/yii.png" width="15%" />
      <p class="lead">
        You have successfully created your Yii-powered application.
      </p>
      <p>
        <a class="btn btn-lg btn-success" href="http://www.yiiframework.com"
          >Get started with Yii</a
        >
      </p>
    </div>
    <vue-particles
      color="#dedede"
      :particleOpacity="0.7"
      :particlesNumber="80"
      shapeType="circle"
      :particleSize="4"
      linesColor="#dedede"
      :linesWidth="1"
      :lineLinked="true"
      :lineOpacity="0.4"
      :linesDistance="150"
      :moveSpeed="3"
      :hoverEffect="true"
      hoverMode="grab"
      :clickEffect="true"
      clickMode="push"
    >
    </vue-particles>
  </div>
</template>
<script>
export default {};
</script>
<style>
.jumbotron {
  position: absolute;
  left: 0;
}
</style>
