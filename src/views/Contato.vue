<template>
  <div class="contato-container py-5">
    <div class="sessao-head d-flex">
      <span class="shadow-lg p-3 rounded text-warning mb-2">
        <i class="fas fa-envelope"></i>
      </span>
      <h1>Contato</h1>
    </div>
    <div class="sessao-content mt-2 col-12">
      <div class="form-contato">
        <h5 class="text-center">Me envie um e-mail</h5>
        <v-text-field
          class="nome"
          name="nome"
          id="nome"
          placeholder="Digite seu nome"
          color="#2a9d8f"
          dark
          v-model="form.nome"
          solo
        ></v-text-field>
        <v-text-field
          name="email"
          id="email"
          placeholder="Digite seu email"
          type="email"
          color="#2a9d8f"
          dark
          v-model="form.email"
          solo
        ></v-text-field>
        <v-text-field
          name="Assunto"
          id="assunto"
          placeholder="Assunto"
          color="#2a9d8f"
          dark
          v-model="form.assunto"
          solo
        ></v-text-field>
        <v-textarea
          name="mensagem"
          id="mensagem"
          placeholder="Digite sua mensagem"
          rows="3"
          color="#2a9d8f"
          dark
          v-model="form.mensagem"
          solo
        ></v-textarea>
        <v-btn
          dark
          color="success"
          @click="enviarMensagem"
        >
          <v-icon left>
            fas fa-paper-plane
          </v-icon>
          Enviar
        </v-btn>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      form: {
        nome: null,
        email: null,
        assunto: null,
        mensagem: null
      }
    }
  },
  methods: {
    enviarMensagem () {
      alert('Enviou a mensagem')
    }
  }
}
</script>

<style scoped>
.contato-container {
  display: flex;
  flex-direction: column;
  background: var(--bg-secundary);
  align-items: center;
  padding: 0 200px;
  width: 100%;
  height: auto;
}
.sessao-head {
  width: 100%;
  flex-direction: column;
  align-items: center;
}

.sessao-head > span {
  background: #252a2e;
}
.sessao-content {
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
}
.form-contato {
  width: 50rem;
}
svg {
  font-size: 35px;
}
input {
  color: #FFF;
}
</style>
