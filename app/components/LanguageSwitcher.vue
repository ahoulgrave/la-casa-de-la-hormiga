<template>
  <div class="lang-switcher">
    <button
      v-for="locale in availableLocales"
      :key="locale.code"
      class="lang-btn"
      :class="{ active: locale.code === currentLocale }"
      @click="switchLocale(locale.code)"
    >
      {{ locale.code.toUpperCase() }}
    </button>
  </div>
</template>

<script setup lang="ts">
const { locale, locales, setLocale } = useI18n()
const switchLocalePath = useSwitchLocalePath()

const currentLocale = computed(() => locale.value)

const availableLocales = computed(() => {
  return locales.value.filter(l => typeof l === 'object')
})

function switchLocale(code: string) {
  setLocale(code)
  navigateTo(switchLocalePath(code))
}
</script>

<style scoped>
.lang-switcher {
  display: flex;
  gap: 0.5rem;
}

.lang-btn {
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.3);
  color: rgba(255, 255, 255, 0.7);
  padding: 0.25rem 0.5rem;
  font-size: 0.75rem;
  cursor: pointer;
  transition: all 0.3s ease;
  border-radius: 2px;
}

.lang-btn:hover {
  border-color: var(--color-primario);
  color: var(--color-primario);
}

.lang-btn.active {
  background: var(--color-violeta);
  border-color: var(--color-violeta);
  color: #fff;
}
</style>
