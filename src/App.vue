<template>
  <Header />
  <div class="conatiner">
    <router-view/>
  </div>
</template>

<script>
import Header from '@/components/Header'


export default{
  components: {
    Header,
}
}
</script>

