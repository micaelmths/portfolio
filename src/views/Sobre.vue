<template>
  <div class="sobre-container">
    <div class="titulo-sessao d-flex">
      <span class="shadow p-3 rounded text-info mb-2">
        <i class="fas fa-info-circle"></i>
      </span>
      <h1>Sobre</h1>
    </div>
    <div class="resumo">
      <p>
        <strong class="text-primary">Olá pessoal, eu sou Micael Ramos</strong>,
        tenho 28 anos de idade, sou de Alagoinhas na Bahia. Possuo formação em
        Sistemas de Informação pela Faculdade Santíssimo Sacramento. Tenho
        experiência autônoma em desenvolvimento Web, atuo em uma empresa de
        tecnologia voltada para o seguimento de saúde onde sou responsável por
        entregar as demandas relacionadas ao "Frontend" do sistema, basicamente
        eu trabalho na parte visual do sistema. Estou começando na área de
        Freelancer, onde gostaria de realizar trabalhos para pessoas que desejam
        mostrar sua marca, seu produto, seu conteúdo profissional e etc.
      </p>
    </div>
    <div class="dados row col-12 mt-4">
      <div class="detalhes-pessoais col-lg-6">
        <h3>Detalhes Pessoais</h3>
        <ul>
          <li>
            <strong>Aniversário</strong>
            20/01/1993
          </li>
          <li>
            <strong>Telefone</strong>
            +55 75 99276-2860
          </li>
          <li>
            <strong>E-mail</strong>
            micael.matheus@live.com
          </li>
          <li>
            <strong>Web Site</strong>
            micaelmatheus.com
          </li>
          <li>
            <strong>Endereço</strong>
            Alagoinhas, BA
          </li>
          <li>
            <strong>Ocupação</strong>
            <OcupacaoBadge :texto="'Programador'" />
            <OcupacaoBadge :texto="'WebDesigner'" />
            <OcupacaoBadge :texto="'Freelancer'" />
          </li>
        </ul>
      </div>
      <div class="meus-interesses col-lg-6">
        <h3>Meus Interesses</h3>
        <CardGrid>
          <CardInteresses :icone="'fas fa-music'" :texto="'Música'"/>
          <CardInteresses :icone="'fas fa-suitcase-rolling'" :texto="'Viagens'"/>
          <CardInteresses :icone="'fas fa-film'" :texto="'Filmes'"/>
          <CardInteresses :icone="'fas fa-mug-hot'" :texto="'Café'"/>
          <CardInteresses :icone="'fas fa-car'" :texto="'Carros'"/>
          <CardInteresses :icone="'fas fa-gamepad'" :texto="'Jogos'"/>
        </CardGrid>
      </div>
    </div>
    <div class="download btn btn-outline-secondary my-4">
      <a
        href="https://drive.google.com/u/0/uc?id=1RYUM-eYew0XYVcxmomD-B2HnRAcFQa79&export=download"
        target="_blank"
        rel="noopener noreferrer"
        class="d-flex"
      >
        <p>Download CV</p>
        <i class="fas fa-download"></i>
      </a>
    </div>
  </div>
</template>

<script>
import OcupacaoBadge from '@/components/OcupacaoBadge.vue'
import CardGrid from '@/components/CardGrid.vue'
import CardInteresses from '@/components/CardInteresses.vue'
export default {
  components: {
    OcupacaoBadge,
    CardGrid,
    CardInteresses
  }
}
</script>

<style scoped>
.sobre-container {
  display: flex;
  flex-direction: column;
  background: var(--bg-color);
  align-items: center;
  width: 100%;
  height: auto;
  margin-top: 9rem;
  padding: 0 15rem;
}
.titulo-sessao {
  width: 100%;
  flex-direction: column;
  align-items: center;
}

.titulo-sessao > span {
  background: #252a2e;
}
ul > li > strong {
  display: inline-block;
  width: 140px;
  color: var(--primary-color);
  }
svg {
  font-size: 35px;
}
.download svg {
  color: white;
}
a {
  align-items: center;
}
a > p {
  margin: 0 5px 0 0;
}
ul {
  padding: 0;
}

@media (max-width: 1450px) {
  .sobre-container {
    padding: 0 5rem;
  }
}
@media (max-width: 1150px) {
  .sobre-container {
    padding: 0 2rem;
  }
  .dados {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .detalhes-pessoais {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 40rem;
  }
  .meus-interesses {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 40rem;
    margin-top: 3rem;
  }
  .resumo {
    width: 40rem;
  }

@media (max-width: 700px) {

  .resumo p {
    padding: 0 100px;
  }
}
@media (max-width: 450px) {
  .resumo {
    padding: 0 25px;
  }
  .resumo p {
    padding: 0 150px;
  }
}
}
</style>
