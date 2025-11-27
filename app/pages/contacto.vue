<template>
  <div class="contact-page">
    <!-- Page Title -->
    <div class="page-title dark-background" data-aos="fade">
      <div class="container position-relative">
        <h1>{{ t('title') }}</h1>
        <p>{{ t('description') }}</p>
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
              <h3>{{ t('artistsTitle') }}</h3>
              <p>{{ t('artistsText') }}</p>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 d-flex" data-aos="fade-up" data-aos-delay="200">
            <div class="info-item h-100">
              <FaIcon icon="house" />
              <h3>{{ t('spacesTitle') }}</h3>
              <p>{{ t('spacesText') }}</p>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 d-flex" data-aos="fade-up" data-aos-delay="300">
            <div class="info-item h-100">
              <FaIcon icon="wrench" />
              <h3>{{ t('teamTitle') }}</h3>
              <p>{{ t('teamText') }}</p>
            </div>
          </div>
        </div>

        <!-- Contact Form and Info -->
        <div class="row gy-4 mt-5">
          <!-- Contact Form -->
          <div class="col-lg-7" data-aos="fade-up" data-aos-delay="100">
            <div class="contact-form-card">
              <h3>{{ t('formTitle') }}</h3>

              <form @submit.prevent="submitForm" class="contact-form">
                <input type="hidden" name="access_key" :value="web3formsKey" />
                <input type="hidden" name="subject" value="Nuevo mensaje desde La Casa de la Hormiga" />

                <div class="row gy-3">
                  <div class="col-md-6">
                    <label for="name">{{ t('formName') }} *</label>
                    <input
                      type="text"
                      id="name"
                      v-model="form.name"
                      :placeholder="t('formNamePlaceholder')"
                      required
                    />
                  </div>
                  <div class="col-md-6">
                    <label for="email">{{ t('formEmail') }} *</label>
                    <input
                      type="email"
                      id="email"
                      v-model="form.email"
                      :placeholder="t('formEmailPlaceholder')"
                      required
                    />
                  </div>
                  <div class="col-12">
                    <label for="subject">{{ t('formSubject') }}</label>
                    <select id="subject" v-model="form.subject">
                      <option value="">{{ t('formSubjectPlaceholder') }}</option>
                      <option value="artista">{{ t('formSubjectArtist') }}</option>
                      <option value="espacio">{{ t('formSubjectVenue') }}</option>
                      <option value="equipo">{{ t('formSubjectTeam') }}</option>
                      <option value="otro">{{ t('formSubjectOther') }}</option>
                    </select>
                  </div>
                  <div class="col-12">
                    <label for="message">{{ t('formMessage') }} *</label>
                    <textarea
                      id="message"
                      v-model="form.message"
                      rows="5"
                      :placeholder="t('formMessagePlaceholder')"
                      required
                    ></textarea>
                  </div>
                  <div class="col-12">
                    <button type="submit" class="btn-submit" :disabled="isSubmitting">
                      <span v-if="isSubmitting">
                        <FaIcon icon="hourglass" class="me-2" />{{ t('formSending') }}
                      </span>
                      <span v-else>
                        <FaIcon icon="paper-plane" class="me-2" />{{ t('formSend') }}
                      </span>
                    </button>
                  </div>
                </div>

                <!-- Success/Error Messages -->
                <div v-if="submitStatus === 'success'" class="alert alert-success mt-3">
                  <FaIcon icon="circle-check" class="me-2" />{{ t('formSuccess') }}
                </div>
                <div v-if="submitStatus === 'error'" class="alert alert-error mt-3">
                  <FaIcon icon="circle-exclamation" class="me-2" />{{ t('formError') }}
                </div>
              </form>
            </div>
          </div>

          <!-- Contact Info -->
          <div class="col-lg-5" data-aos="fade-up" data-aos-delay="200">
            <div class="contact-info-card">
              <h3>{{ t('social') }}</h3>
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
              <h3>{{ t('locationCity') }}</h3>
              <p>{{ t('locationVenuesDescription') }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { socialLinks } from '~/data/social'

const { t } = useI18n({ useScope: 'local' })
const { t: $t } = useI18n()
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

<i18n lang="yaml">
es:
  title: Contacto
  description: "¿Quieres colaborar con nosotros?"
  artistsTitle: Artistas
  artistsText: "Estamos abiertos a propuestas de artistas que quieran grabar con nosotros. No tenemos criterios técnicos ni requisitos específicos: buscamos trabajar con personas que compartan nuestros valores."
  spacesTitle: Espacios
  spacesText: Actualmente grabamos exclusivamente en salas de conciertos y espacios reales, con público presente. Si gestionas un espacio y quieres colaborar, estamos siempre interesados en sumar nuevas locaciones.
  teamTitle: Equipo técnico
  teamText: Nos encanta compartir lo que sabemos y aprender de otras personas. Si te interesa el mundo de la grabación audiovisual y la música en vivo, puedes acercarte.
  formTitle: Envíanos un mensaje
  social: Redes sociales
  formName: Nombre
  formNamePlaceholder: Tu nombre
  formEmail: Email
  formEmailPlaceholder: "tu{'@'}email.com"
  formSubject: Motivo
  formSubjectPlaceholder: Selecciona un motivo
  formSubjectArtist: Soy artista y quiero grabar
  formSubjectVenue: Gestiono un espacio
  formSubjectTeam: Quiero unirme al equipo
  formSubjectOther: Otro
  formMessage: Mensaje
  formMessagePlaceholder: Cuéntanos sobre tu proyecto o propuesta...
  formSend: Enviar mensaje
  formSending: Enviando...
  formSuccess: "¡Mensaje enviado! Te responderemos pronto."
  formError: Error al enviar. Por favor, intenta de nuevo.
  locationCity: Barcelona
  locationVenuesDescription: "Grabamos en diversas salas de conciertos de la ciudad: Diobar, Rock n Trini, Absenta del Raval, Sala Wolf y más."

en:
  title: Contact
  description: Want to collaborate with us?
  artistsTitle: Artists
  artistsText: "We are open to proposals from artists who want to record with us. We have no technical criteria or specific requirements: we seek to work with people who share our values."
  spacesTitle: Venues
  spacesText: We currently record exclusively in concert halls and real spaces, with an audience present. If you manage a venue and want to collaborate, we are always interested in adding new locations.
  teamTitle: Technical team
  teamText: We love to share what we know and learn from others. If you are interested in the world of audiovisual recording and live music, you can approach us.
  formTitle: Send us a message
  social: Social media
  formName: Name
  formNamePlaceholder: Your name
  formEmail: Email
  formEmailPlaceholder: "your{'@'}email.com"
  formSubject: Subject
  formSubjectPlaceholder: Select a subject
  formSubjectArtist: I'm an artist and want to record
  formSubjectVenue: I manage a venue
  formSubjectTeam: I want to join the team
  formSubjectOther: Other
  formMessage: Message
  formMessagePlaceholder: Tell us about your project or proposal...
  formSend: Send message
  formSending: Sending...
  formSuccess: Message sent! We'll get back to you soon.
  formError: Error sending. Please try again.
  locationCity: Barcelona
  locationVenuesDescription: "We record in various concert venues around the city: Diobar, Rock n Trini, Absenta del Raval, Sala Wolf and more."

ca:
  title: Contacte
  description: Vols col·laborar amb nosaltres?
  artistsTitle: Artistes
  artistsText: "Estem oberts a propostes d'artistes que vulguin gravar amb nosaltres. No tenim criteris tècnics ni requisits específics: busquem treballar amb persones que comparteixin els nostres valors."
  spacesTitle: Espais
  spacesText: Actualment gravem exclusivament a sales de concerts i espais reals, amb públic present. Si gestions un espai i vols col·laborar, sempre estem interessats a sumar noves localitzacions.
  teamTitle: Equip tècnic
  teamText: Ens encanta compartir el que sabem i aprendre d'altres persones. Si t'interessa el món de la gravació audiovisual i la música en viu, pots acostar-te.
  formTitle: Envia'ns un missatge
  social: Xarxes socials
  formName: Nom
  formNamePlaceholder: El teu nom
  formEmail: Email
  formEmailPlaceholder: "el.teu{'@'}email.com"
  formSubject: Motiu
  formSubjectPlaceholder: Selecciona un motiu
  formSubjectArtist: Sóc artista i vull gravar
  formSubjectVenue: Gestiono un espai
  formSubjectTeam: Vull unir-me a l'equip
  formSubjectOther: Altre
  formMessage: Missatge
  formMessagePlaceholder: Explica'ns el teu projecte o proposta...
  formSend: Enviar missatge
  formSending: Enviant...
  formSuccess: Missatge enviat! Et respondrem aviat.
  formError: Error en enviar. Si us plau, torna-ho a provar.
  locationCity: Barcelona
  locationVenuesDescription: "Gravem a diverses sales de concerts de la ciutat: Diobar, Rock n Trini, Absenta del Raval, Sala Wolf i més."
</i18n>
