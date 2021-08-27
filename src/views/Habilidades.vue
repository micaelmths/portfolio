<template>
  <div class="habilidades-container">
    <div class="sessao-head d-flex">
      <span class="shadow-lg p-3 rounded text-warning mb-2">
        <i class="fas fa-sliders-h"></i>
      </span>
      <h1>Habilidades</h1>
    </div>
    <div class="sessao-content row col-12 mt-4">
      <div class="habilidades-tecnicas col-6">
        <h3>Habilidades Técnincas</h3>
        <ul>
          <li>
            <b>JavaScript</b>
            <div class="progress col-11">
              <div class="progress-bar" role="progressbar" style="width: 75%;" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">75%</div>
            </div>
          </li>
          <li>
            <b>HTML & CSS</b>
            <div class="progress col-11">
              <div class="progress-bar" role="progressbar" style="width: 90%;" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">90%</div>
            </div>
          </li>
          <li>
            <b>VueJS</b>
            <div class="progress col-11">
              <div class="progress-bar" role="progressbar" style="width: 50%;" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">50%</div>
            </div>
          </li>
          <li>
            <b>Bootstrap</b>
            <div class="progress col-11">
              <div class="progress-bar" role="progressbar" style="width: 60%;" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">60%</div>
            </div>
          </li>
        </ul>
      </div>
      <div class="habilidades-profissionais col-6">
        <h3>Habilidades Profissionais</h3>
        <ul>
          <li>
            <b>Comunicação</b>
            <div class="progress col-11">
              <div class="progress-bar" role="progressbar" style="width: 90%;" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">90%</div>
            </div>
          </li>
          <li>
            <b>Trabalho em Equipe</b>
            <div class="progress col-11">
              <div class="progress-bar" role="progressbar" style="width: 95%;" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100">95%</div>
            </div>
          </li>
          <li>
            <b>Dedicação</b>
            <div class="progress col-11">
              <div class="progress-bar" role="progressbar" style="width: 70%;" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100">70%</div>
            </div>
          </li>
          <li>
            <b>Gerenciamento de Projeto</b>
            <div class="progress col-11">
              <div class="progress-bar" role="progressbar" style="width: 95%;" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100">95%</div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.habilidades-container {
  display: flex;
  flex-direction: column;
  background: var(--bg-secundary);
  align-items: center;
  padding: 0 200px;
  width: 100vw;
  height: 600px;
  padding-top: 75px;
}
.sessao-head {
  width: 100vw;
  flex-direction: column;
  align-items: center;
}

.sessao-head > span {
  background: #252a2e;
}
.progress {
  height: 20px;
}
.progress-bar {
  background: var(--primary-color);
  font-size: 16px;
}
li {
  margin-top: 10px;
}
svg {
  font-size: 35px;
}
ul {
  padding: 0;
}
</style>
