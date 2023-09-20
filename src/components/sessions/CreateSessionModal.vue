<template>
  <div class="modal-backdrop">
    <div class="modal">
      <div class="modal-content h-100">
        <div class="modal-header">
          <h5 class="modal-title">Criar nova sessão</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" @click="close"></button>
        </div>
        <div class="modal-body">
          <form @submit.prevent="submitForm">
            <div class="mb-3">
              <label for="customKey">Chave Personalizada</label>
              <input type="text" class="form-control" id="customKey" v-model="customKey" :disabled="randomKeySelected" />
            </div>
            <div class="mb-3 form-check">
              <input type="checkbox" class="form-check-input" id="randomKey" v-model="randomKeySelected" />
              <label class="form-check-label" for="randomKey">Chave Aleatória</label>
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" @click="close">Close</button>
          <button type="submit" class="btn btn-primary" @click="submitForm()">Salvar</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: "CreateSessionModal",
  data() {
    return {
      customKey: null,
      randomKeySelected: true,
    }
  },
  methods: {
    ...mapActions(["initSession", "getQrCode"]),
    close() {
      this.$emit("close");
    },
    submitForm() {
      if (this.randomKeySelected) {
        console.log("Random Key Selected")
        this.initSession();
        this.getQrCode()
      } else {
        console.log("Fixed Key")
      }
    },
    initSession() {
      
    }
  },
};
</script>

<style scoped>
.modal-backdrop {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
}

.modal {
  background: #FFFFFF;
  box-shadow: 1px 1px 30px 1px #444;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  width: 500px;
  height: 325px;
  z-index: 1000;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>