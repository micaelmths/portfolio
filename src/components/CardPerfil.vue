<template>
  <span v-tilt="{scale:1.05}">

  <div  class="perfil-container shadow p-4">
    <div class="d-flex align-items-center flex-column perfil-card">
      <img src="../assets/perfil.jpg" alt="Foto Micael" />
      <h2 class="nome">Micael Ramos</h2>
      <h3 class="titulo">Web Designer</h3>
      <div class="social mt-4">
        <a href="https://www.instagram.com/micaelmatheus/" target="_blank" rel="noopener noreferrer"
          ><i class="fab fa-instagram"></i
        ></a>
        <a href="https://www.linkedin.com/in/micael-matheus-848323150/" target="_blank" rel="noopener noreferrer"
          ><i class="fab fa-linkedin"></i
        ></a>
        <a href="https://github.com/micaelmths" target="_blank" rel="noopener noreferrer"
          ><i class="fab fa-github"></i
        ></a>
        <a href="https://api.whatsapp.com/send?phone=5575992762860&text=Ol%C3%A1%20Micael,%20conheci%20seu%20trabalho%20e%20gostaria%20de%20fazer%20um%20or%C3%A7amento!" target="_blank" rel="noopener noreferrer"
          ><i class="fab fa-whatsapp"></i
        ></a>
      </div>
    </div>
  </div>
  </span>
</template>

<script>
export default {}
</script>

<style scoped>
.perfil-container {
  width: 400px;
  height: 350px;
  border-radius: 16px;
  background: #252A2E;
  position: relative;
  transform-style: preserve-3d;
}
.perfil-card {
  margin-top: 140px;
}
.nome {
  font-weight: 700;
  font-size: 48px;
}
.titulo {
  font-weight: 300;
  font-size: 24px;
}
span {
  width: 550px;
  height: 450px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 200px ;
}
svg {
  color: var(--primary-color);
  font-size: 34px;
  cursor: pointer;
}

svg:hover {
  color: var(--primary-color-hover);
}
img {
  position: absolute;
  width: 300px;
  border-radius: 50%;
  border: solid 5px var(--primary-color);
  top: -145px;
}
.social {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 180px;
}
</style>
