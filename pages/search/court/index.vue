<script setup lang="ts">
import HeaderBasic from '~/components/header/HeaderBasic.vue'
import SearchCourtApp from '~/components/search/SearchCourtApp.vue'

const router = useRouter()
</script>
<template>
  <div>
    <Head>
      <Title>Smasher - Search Court</Title>
      <Meta name="description" content="Smasher - Search Court" />
    </Head>
    <HeaderBasic title="Cari Lapangan" :on-back="() => router.push('/')" />
    <SearchCourtApp />
  </div>
</template>
