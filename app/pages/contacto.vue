<template>
  <div class="contact-page">
    <!-- Page Title -->
    <div class="page-title dark-background" data-aos="fade">
      <div class="container position-relative">
        <h1>{{ $t('contact.title') }}</h1>
        <p>{{ $t('contact.description') }}</p>
        <nav class="breadcrumbs">
          <ol>
            <li><NuxtLink :to="localePath('/')">{{ $t('nav.home') }}</NuxtLink></li>
            <li class="current">{{ $t('nav.contact') }}</li>
          </ol>
        </nav>
      </div>
    </div>

    <!-- Contact Section -->
    <section id="contact" class="contact section">
      <div class="container">
        <div class="row gy-4 contact-cards-row">
          <!-- Contact Cards -->
          <div class="col-lg-4 col-md-6 d-flex" data-aos="fade-up" data-aos-delay="100">
            <div class="info-item h-100">
              <FaIcon icon="music" />
              <h3>{{ $t('contact.artistsTitle') }}</h3>
              <p>{{ $t('contact.artistsText') }}</p>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 d-flex" data-aos="fade-up" data-aos-delay="200">
            <div class="info-item h-100">
              <FaIcon icon="house" />
              <h3>{{ $t('contact.spacesTitle') }}</h3>
              <p>{{ $t('contact.spacesText') }}</p>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 d-flex" data-aos="fade-up" data-aos-delay="300">
            <div class="info-item h-100">
              <FaIcon icon="wrench" />
              <h3>{{ $t('contact.teamTitle') }}</h3>
              <p>{{ $t('contact.teamText') }}</p>
            </div>
          </div>
        </div>

        <!-- Contact Form and Info -->
        <div class="row gy-4 mt-5">
          <!-- Contact Form -->
          <div class="col-lg-7" data-aos="fade-up" data-aos-delay="100">
            <div class="contact-form-card">
              <h3>{{ $t('contact.formTitle') }}</h3>

              <form @submit.prevent="submitForm" class="contact-form">
                <input type="hidden" name="access_key" :value="web3formsKey" />
                <input type="hidden" name="subject" value="Nuevo mensaje desde La Casa de la Hormiga" />

                <div class="row gy-3">
                  <div class="col-md-6">
                    <label for="name">{{ $t('contact.form.name') }} *</label>
                    <input
                      type="text"
                      id="name"
                      v-model="form.name"
                      :placeholder="$t('contact.form.namePlaceholder')"
                      required
                    />
                  </div>
                  <div class="col-md-6">
                    <label for="email">{{ $t('contact.form.email') }} *</label>
                    <input
                      type="email"
                      id="email"
                      v-model="form.email"
                      :placeholder="$t('contact.form.emailPlaceholder')"
                      required
                    />
                  </div>
                  <div class="col-12">
                    <label for="subject">{{ $t('contact.form.subject') }}</label>
                    <select id="subject" v-model="form.subject">
                      <option value="">{{ $t('contact.form.subjectPlaceholder') }}</option>
                      <option value="artista">{{ $t('contact.form.subjectArtist') }}</option>
                      <option value="espacio">{{ $t('contact.form.subjectVenue') }}</option>
                      <option value="equipo">{{ $t('contact.form.subjectTeam') }}</option>
                      <option value="otro">{{ $t('contact.form.subjectOther') }}</option>
                    </select>
                  </div>
                  <div class="col-12">
                    <label for="message">{{ $t('contact.form.message') }} *</label>
                    <textarea
                      id="message"
                      v-model="form.message"
                      rows="5"
                      :placeholder="$t('contact.form.messagePlaceholder')"
                      required
                    ></textarea>
                  </div>
                  <div class="col-12">
                    <button type="submit" class="btn-submit" :disabled="isSubmitting">
                      <span v-if="isSubmitting">
                        <FaIcon icon="hourglass" class="me-2" />{{ $t('contact.form.sending') }}
                      </span>
                      <span v-else>
                        <FaIcon icon="paper-plane" class="me-2" />{{ $t('contact.form.send') }}
                      </span>
                    </button>
                  </div>
                </div>

                <!-- Success/Error Messages -->
                <div v-if="submitStatus === 'success'" class="alert alert-success mt-3">
                  <FaIcon icon="circle-check" class="me-2" />{{ $t('contact.form.success') }}
                </div>
                <div v-if="submitStatus === 'error'" class="alert alert-error mt-3">
                  <FaIcon icon="circle-exclamation" class="me-2" />{{ $t('contact.form.error') }}
                </div>
              </form>
            </div>
          </div>

          <!-- Contact Info -->
          <div class="col-lg-5" data-aos="fade-up" data-aos-delay="200">
            <div class="contact-info-card">
              <h3>{{ $t('footer.social') }}</h3>
              <div class="social-links-large">
                <a :href="socialLinks.youtube" target="_blank" rel="noopener" class="youtube">
                  <FaIcon :icon="['fab', 'youtube']" />
                  <span>YouTube</span>
                </a>
                <a :href="socialLinks.instagram" target="_blank" rel="noopener" class="instagram">
                  <FaIcon :icon="['fab', 'instagram']" />
                  <span>Instagram</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Map/Location Section (optional visual) -->
    <section class="location section">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-8 text-center" data-aos="fade-up">
            <div class="location-card">
              <FaIcon icon="location-dot" />
              <h3>{{ $t('location.city') }}</h3>
              <p>{{ $t('location.venuesDescription') }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { socialLinks } from '~/data/social'

const localePath = useLocalePath()

useHead({
  title: 'Contacto - La Casa de la Hormiga'
})

// Web3Forms API Key - loaded from environment variable
const config = useRuntimeConfig()
const web3formsKey = config.public.web3formsKey

const form = reactive({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const isSubmitting = ref(false)
const submitStatus = ref<'idle' | 'success' | 'error'>('idle')

async function submitForm() {
  isSubmitting.value = true
  submitStatus.value = 'idle'

  try {
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        access_key: web3formsKey,
        name: form.name,
        email: form.email,
        subject: form.subject || 'Consulta general',
        message: form.message,
        from_name: 'La Casa de la Hormiga Website'
      })
    })

    const result = await response.json()

    if (result.success) {
      submitStatus.value = 'success'
      form.name = ''
      form.email = ''
      form.subject = ''
      form.message = ''
    } else {
      submitStatus.value = 'error'
    }
  } catch (error) {
    submitStatus.value = 'error'
  } finally {
    isSubmitting.value = false
  }
}

onMounted(() => {
  if (typeof window !== 'undefined' && (window as any).AOS) {
    (window as any).AOS.init({
      duration: 600,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    })
  }
})
</script>

<style scoped>
/* Contact Cards equal height */
.contact-cards-row {
  display: flex;
  flex-wrap: wrap;
}

.info-item {
  display: flex;
  flex-direction: column;
  width: 100%;
  text-align: center;
  align-items: center;
}

.info-item p:last-child {
  flex-grow: 1;
}

.info-item.h-100 {
  height: 100%;
}

/* Contact Form Card */
.contact-form-card {
  background: var(--surface-color);
  padding: 30px;
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.contact-form-card h3 {
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 25px;
  color: var(--color-violeta);
}

.contact-form label {
  display: block;
  margin-bottom: 8px;
  font-size: 14px;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.9);
}

.contact-form input,
.contact-form select,
.contact-form textarea {
  width: 100%;
  padding: 12px 15px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 6px;
  color: #fff;
  font-size: 15px;
  transition: all 0.3s ease;
}

.contact-form input::placeholder,
.contact-form textarea::placeholder {
  color: rgba(255, 255, 255, 0.4);
}

.contact-form input:focus,
.contact-form select:focus,
.contact-form textarea:focus {
  outline: none;
  border-color: var(--color-violeta);
  background: rgba(189, 120, 255, 0.05);
}

.contact-form select {
  cursor: pointer;
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='%23ffffff80' viewBox='0 0 16 16'%3E%3Cpath d='M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 15px center;
  padding-right: 40px;
}

.contact-form select option {
  background: #1a1a1a;
  color: #fff;
}

.contact-form textarea {
  resize: vertical;
  min-height: 120px;
}

.btn-submit {
  background: var(--color-violeta);
  color: #000;
  border: none;
  padding: 14px 30px;
  border-radius: 6px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.btn-submit:hover:not(:disabled) {
  background: var(--color-verde);
  transform: translateY(-2px);
}

.btn-submit:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.alert {
  padding: 15px 20px;
  border-radius: 6px;
  display: flex;
  align-items: center;
}

.alert-success {
  background: rgba(59, 255, 158, 0.1);
  border: 1px solid var(--color-verde);
  color: var(--color-verde);
}

.alert-error {
  background: rgba(255, 59, 59, 0.1);
  border: 1px solid #ff3b3b;
  color: #ff6b6b;
}

.contact-info-card {
  background: var(--surface-color);
  padding: 30px;
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  height: 100%;
}

.contact-info-card h3 {
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 25px;
  color: var(--color-violeta);
}

.contact-method {
  display: flex;
  align-items: flex-start;
  margin-bottom: 20px;
}

.contact-method i {
  font-size: 24px;
  color: var(--color-violeta);
  margin-right: 15px;
  background: rgba(189, 120, 255, 0.1);
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  flex-shrink: 0;
}

.contact-method h4 {
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 5px;
}

.contact-method a,
.contact-method p {
  color: rgba(255, 255, 255, 0.7);
  margin: 0;
}

.contact-method a:hover {
  color: var(--color-violeta);
}

.social-links-large {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.social-links-large a {
  display: flex;
  align-items: center;
  padding: 15px 20px;
  border-radius: 8px;
  transition: all 0.3s;
  text-decoration: none;
}

.social-links-large a i,
.social-links-large a svg {
  font-size: 32px;
  width: 32px;
  height: 32px;
  margin-right: 15px;
}

.social-links-large a span {
  font-size: 16px;
  font-weight: 600;
}

.social-links-large a.youtube {
  background: rgba(255, 0, 0, 0.1);
  color: #FF0000;
}

.social-links-large a.youtube:hover {
  background: #FF0000;
  color: #fff;
}

.social-links-large a.instagram {
  background: rgba(225, 48, 108, 0.1);
  color: #E1306C;
}

.social-links-large a.instagram:hover {
  background: linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888);
  color: #fff;
}

.location-card {
  background: linear-gradient(135deg, rgba(189, 120, 255, 0.1) 0%, rgba(59, 255, 158, 0.05) 100%);
  padding: 40px;
  border-radius: 12px;
  border: 1px solid rgba(189, 120, 255, 0.3);
}

.location-card i,
.location-card svg {
  font-size: 48px;
  width: 48px;
  height: 48px;
  color: var(--color-verde);
  margin-bottom: 20px;
}

.location-card h3 {
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 15px;
}

.location-card p {
  color: rgba(255, 255, 255, 0.7);
  margin: 0;
  font-size: 16px;
}
</style>
