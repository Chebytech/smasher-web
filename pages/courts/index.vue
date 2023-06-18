<script setup lang="ts">
import HeaderBasic from '~/components/header/HeaderBasic.vue'
import CourtSearchResultApp from '~/components/court/CourtSearchResultApp.vue'
</script>

<template>
  <div>
    <Head>
      <Title>Smasher - Search Court</Title>
      <Meta name="description" content="Smasher - Search Court" />
    </Head>
    <HeaderBasic title="Hasil Pencarian" />
    <CourtSearchResultApp />
  </div>
</template>
