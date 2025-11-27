<template>
  <div class="about-page">
    <!-- Page Title -->
    <div class="page-title dark-background" data-aos="fade">
      <div class="container position-relative">
        <h1>{{ t('title') }}</h1>
        <p>{{ t('intro') }}</p>
        <nav class="breadcrumbs">
          <ol>
            <li><NuxtLink :to="localePath('/')">{{ $t('nav.home') }}</NuxtLink></li>
            <li class="current">{{ $t('nav.about') }}</li>
          </ol>
        </nav>
      </div>
    </div>

    <!-- About Section -->
    <section id="about" class="about section">
      <div class="container">
        <div class="row gy-4">
          <div class="col-lg-6 position-relative align-self-start order-lg-last order-first" data-aos="fade-up" data-aos-delay="200">
            <img src="/img/videos/pangaro.jpg" class="img-fluid" alt="La Casa de la Hormiga" />
          </div>

          <div class="col-lg-6 content order-last order-lg-first" data-aos="fade-up" data-aos-delay="100">
            <h3>{{ t('title') }}</h3>
            <p>{{ t('intro') }}</p>
            <p>{{ t('team') }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- History Section -->
    <section id="history" class="features section">
      <div class="container section-title" data-aos="fade-up">
        <span>2022 - 2025</span>
        <h2>{{ t('historyTitle') }}</h2>
      </div>

      <div class="container">
        <div class="row gy-4 align-items-center features-item">
          <div class="col-md-5 d-flex align-items-center" data-aos="zoom-out" data-aos-delay="100">
            <img src="/img/videos/manza_1.jpg" class="img-fluid" alt="Historia" />
          </div>
          <div class="col-md-7" data-aos="fade-up" data-aos-delay="100">
            <h3>{{ t('beginnings') }}</h3>
            <p>{{ t('history') }}</p>
          </div>
        </div>

        <div class="row gy-4 align-items-center features-item">
          <div class="col-md-5 order-1 order-md-2 d-flex align-items-center" data-aos="zoom-out" data-aos-delay="200">
            <img src="/img/videos/pyramides_1.jpg" class="img-fluid" alt="Crecimiento" />
          </div>
          <div class="col-md-7 order-2 order-md-1" data-aos="fade-up" data-aos-delay="200">
            <h3>{{ t('growth') }}</h3>
            <p>{{ t('historyGrowth') }}</p>
          </div>
        </div>

        <div class="row gy-4 align-items-center features-item">
          <div class="col-md-5 d-flex align-items-center" data-aos="zoom-out">
            <img src="/img/videos/nadie_lo_quiere_1.jpg" class="img-fluid" alt="Hoy" />
          </div>
          <div class="col-md-7" data-aos="fade-up">
            <h3>{{ t('todayTitle') }}</h3>
            <p>{{ t('today') }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Values Section -->
    <section id="values" class="about section">
      <div class="container section-title" data-aos="fade-up">
        <span>{{ t('principles') }}</span>
        <h2>{{ t('valuesTitle') }}</h2>
      </div>

      <div class="container">
        <div class="row gy-4">
          <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
            <div class="value-card">
              <FaIcon icon="heart" />
              <h3>{{ $t('values.authenticity') }}</h3>
              <p>{{ $t('values.authenticityText') }}</p>
            </div>
          </div>
          <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
            <div class="value-card">
              <FaIcon icon="briefcase" />
              <h3>{{ $t('values.professionalism') }}</h3>
              <p>{{ $t('values.professionalismText') }}</p>
            </div>
          </div>
          <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
            <div class="value-card">
              <FaIcon icon="globe" />
              <h3>{{ $t('values.diversity') }}</h3>
              <p>{{ $t('values.diversityText') }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Team Section - Only shown when there are team members -->
    <section v-if="teamMembers.length > 0" id="team" class="team section">
      <div class="container section-title" data-aos="fade-up">
        <span>{{ t('teamSectionTitle') }}</span>
        <h2>{{ t('teamSectionTitle') }}</h2>
        <p>{{ t('teamSectionSubtitle') }}</p>
      </div>

      <div class="container">
        <div class="row gy-4">
          <div v-for="(member, index) in teamMembers" :key="member.id" class="col-lg-4 col-md-6" data-aos="fade-up" :data-aos-delay="100 * ((index % 3) + 1)">
            <div class="team-card">
              <div class="team-img">
                <img :src="member.photo" :alt="member.name" />
              </div>
              <div class="team-info">
                <h3>{{ member.name }}</h3>
                <span class="role">{{ member.role }}</span>
                <p>{{ member.bio }}</p>
                <div v-if="member.instagram" class="team-social">
                  <a :href="`https://instagram.com/${member.instagram}`" target="_blank" rel="noopener">
                    <FaIcon :icon="['fab', 'instagram']" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section id="cta" class="call-to-action section">
      <div class="container">
        <div class="row justify-content-center" data-aos="zoom-in" data-aos-delay="100">
          <div class="col-xl-10">
            <div class="text-center">
              <h3>{{ $t('cta.collaborate') }}</h3>
              <p>{{ $t('cta.teamText') }}</p>
              <NuxtLink :to="localePath('/contacto')" class="cta-btn">
                {{ $t('nav.contact') }}
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n({ useScope: 'local' })
const { t: $t } = useI18n()
const localePath = useLocalePath()

useHead({
  title: 'El Proyecto - La Casa de la Hormiga'
})

interface TeamMember {
  id: string
  name: string
  role: string
  bio: string
  photo: string
  instagram?: string
}

// Team data - add real team members here
// See SECCION_EQUIPO.md for instructions
const teamMembers: TeamMember[] = [
  // Example:
  // {
  //   id: '1',
  //   name: 'Juan Pérez',
  //   role: 'Sonido',
  //   bio: 'Ingeniero de sonido desde 2015.',
  //   photo: '/img/team/juan.jpg',
  //   instagram: 'juanperez_sound'
  // },
]

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
.value-card {
  background: var(--surface-color);
  padding: 30px;
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  text-align: center;
  transition: all 0.3s;
  height: 100%;
}

.value-card:hover {
  border-color: var(--color-violeta);
  transform: translateY(-5px);
}

.value-card i,
.value-card svg {
  font-size: 48px;
  width: 48px;
  height: 48px;
  color: var(--color-violeta);
  margin-bottom: 20px;
}

.value-card h3 {
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 15px;
}

.value-card p {
  color: rgba(255, 255, 255, 0.7);
  margin: 0;
}

/* Team Cards */
.team-card {
  background: var(--surface-color);
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s;
  height: 100%;
}

.team-card:hover {
  border-color: var(--color-violeta);
  transform: translateY(-5px);
}

.team-img {
  position: relative;
  overflow: hidden;
  aspect-ratio: 1;
}

.team-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s;
}

.team-card:hover .team-img img {
  transform: scale(1.05);
}

.team-info {
  padding: 20px;
  text-align: center;
}

.team-info h3 {
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 5px;
  color: #fff;
}

.team-info .role {
  display: block;
  font-size: 14px;
  color: var(--color-violeta);
  font-weight: 500;
  margin-bottom: 12px;
}

.team-info p {
  color: rgba(255, 255, 255, 0.7);
  font-size: 14px;
  line-height: 1.6;
  margin-bottom: 15px;
}

.team-social {
  display: flex;
  justify-content: center;
  gap: 10px;
}

.team-social a {
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  color: rgba(255, 255, 255, 0.7);
  transition: all 0.3s;
}

.team-social a:hover {
  background: var(--color-violeta);
  color: #000;
}

.team-social svg {
  width: 16px;
  height: 16px;
}
</style>

<i18n lang="yaml">
es:
  title: El Proyecto
  intro: "La Casa de la Hormiga es un proyecto que nace de la pasión por capturar la experiencia auténtica de la música en vivo en Barcelona. A través de grabaciones audiovisuales, documentamos artistas de diversos estilos y orígenes en espacios reales de la ciudad."
  team: "Somos un grupo de amigos y amigas que compartimos el amor por la música, lo visual y lo técnico. Lo especial de nuestro proyecto es la colaboración orgánica y el intercambio de conocimientos: cada persona aporta desde su lugar, y juntos crecemos y creamos."
  historyTitle: Historia del proyecto
  beginnings: Los inicios
  history: "La Casa de la Hormiga nació en 2022, de manera muy orgánica, cuando un amigo de la infancia —ingeniero de sonido— se mudó desde Buenos Aires a Barcelona. En ese momento, no sabíamos nada sobre audiovisuales, pero teníamos muchas ganas de aprender. Un amigo nos prestó una cámara, compramos un micrófono y grabamos una primera demo en un piso, con una versión acústica de Bobby de Alex G. Esa grabación sigue disponible en nuestro canal y marca el comienzo de todo. En enero de 2023 grabamos al primer artista invitado, también en casa, en un evento íntimo con público."
  growth: El crecimiento
  historyGrowth: "Así empezamos, grabando un artista por mes, mejorando de a poco, sumando equipo y personas al proyecto. Gente con buena energía, con ganas de compartir conocimientos y pasión por la música y lo visual. En 2024 dimos un salto hacia afuera y comenzamos a grabar en salas de conciertos de Barcelona como Diobar, Rock n Trini, Absenta del Raval y Sala Wolf. También tuvimos el honor de grabar a artistas reconocidos como Mi Amigo Invencible, Pyramides, Leo García y Manza, entre muchos otros."
  todayTitle: Hoy
  today: "Hoy, en 2025, seguimos creciendo. Ya publicamos más de 20 videos y tenemos una gran cantidad de material en proceso. El proyecto se ha convertido en una verdadera escuela colectiva, donde aprendimos de todo: montaje, color, operación de sonido en vivo, gestión cultural… y donde seguimos apostando por documentar la escena musical de esta ciudad con pasión y autenticidad."
  principles: Principios
  valuesTitle: Nuestros valores
  teamSectionTitle: El Equipo
  teamSectionSubtitle: Las personas detrás de La Casa de la Hormiga

en:
  title: The Project
  intro: "La Casa de la Hormiga is a project born from the passion for capturing the authentic experience of live music in Barcelona. Through audiovisual recordings, we document artists of diverse styles and origins in real spaces of the city."
  team: "We are a group of friends who share the love for music, visuals and technology. What makes our project special is the organic collaboration and exchange of knowledge: each person contributes from their place, and together we grow and create."
  historyTitle: Project history
  beginnings: The beginnings
  history: "La Casa de la Hormiga was born in 2022, in a very organic way, when a childhood friend —sound engineer— moved from Buenos Aires to Barcelona. At that time, we knew nothing about audiovisuals, but we were eager to learn. A friend lent us a camera, we bought a microphone and recorded a first demo in an apartment, with an acoustic version of Bobby by Alex G. That recording is still available on our channel and marks the beginning of everything. In January 2023 we recorded the first guest artist, also at home, in an intimate event with an audience."
  growth: The growth
  historyGrowth: "That's how we started, recording one artist per month, improving little by little, adding equipment and people to the project. People with good energy, eager to share knowledge and passion for music and visuals. In 2024 we took a leap forward and started recording in Barcelona concert halls like Diobar, Rock n Trini, Absenta del Raval and Sala Wolf. We also had the honor of recording renowned artists like Mi Amigo Invencible, Pyramides, Leo García and Manza, among many others."
  todayTitle: Today
  today: "Today, in 2025, we continue to grow. We have already published more than 20 videos and have a large amount of material in process. The project has become a true collective school, where we learned everything: editing, color grading, live sound operation, cultural management... and where we continue to bet on documenting the music scene of this city with passion and authenticity."
  principles: Principles
  valuesTitle: Our values
  teamSectionTitle: The Team
  teamSectionSubtitle: The people behind La Casa de la Hormiga

ca:
  title: El Projecte
  intro: "La Casa de la Hormiga és un projecte que neix de la passió per capturar l'experiència autèntica de la música en viu a Barcelona. A través de gravacions audiovisuals, documentem artistes de diversos estils i orígens en espais reals de la ciutat."
  team: "Som un grup d'amics i amigues que compartim l'amor per la música, el visual i el tècnic. L'especial del nostre projecte és la col·laboració orgànica i l'intercanvi de coneixements: cada persona aporta des del seu lloc, i junts creixem i creem."
  historyTitle: Història del projecte
  beginnings: Els inicis
  history: "La Casa de la Hormiga va néixer el 2022, de manera molt orgànica, quan un amic de la infància —enginyer de so— es va mudar des de Buenos Aires a Barcelona. En aquell moment, no sabíem res sobre audiovisuals, però teníem moltes ganes d'aprendre. Un amic ens va prestar una càmera, vam comprar un micròfon i vam gravar una primera demo en un pis, amb una versió acústica de Bobby d'Alex G. Aquella gravació encara està disponible al nostre canal i marca el començament de tot. Al gener de 2023 vam gravar el primer artista convidat, també a casa, en un event íntim amb públic."
  growth: El creixement
  historyGrowth: "Així vam començar, gravant un artista per mes, millorant a poc a poc, sumant equip i persones al projecte. Gent amb bona energia, amb ganes de compartir coneixements i passió per la música i el visual. El 2024 vam fer un salt cap enfora i vam començar a gravar a sales de concerts de Barcelona com Diobar, Rock n Trini, Absenta del Raval i Sala Wolf. També vam tenir l'honor de gravar artistes reconeguts com Mi Amigo Invencible, Pyramides, Leo García i Manza, entre molts altres."
  todayTitle: Avui
  today: "Avui, el 2025, continuem creixent. Ja hem publicat més de 20 vídeos i tenim una gran quantitat de material en procés. El projecte s'ha convertit en una veritable escola col·lectiva, on hem après de tot: muntatge, color, operació de so en viu, gestió cultural… i on seguim apostant per documentar l'escena musical d'aquesta ciutat amb passió i autenticitat."
  principles: Principis
  valuesTitle: Els nostres valors
  teamSectionTitle: L'Equip
  teamSectionSubtitle: Les persones darrere de La Casa de la Hormiga
</i18n>
