<template>
  <div class="m-5 p-3">
    <div class="d-flex justify-content-between mb-3 align-items-center text-center">
      <h3 class="p-1 m-0">Sessões</h3>
      <button class="btn btn-md btn-primary" @click="showModal()">Nova Sessão</button>
    </div>
    <div class="row col-12 m-0" v-if="getSessions[0] != null || getSessions[0] != undefined">
      <div class="col-3" v-for="session in getSessions" :key="session['instance_key']">
        <col-3 class="card p-3 mb-2 shadow-sm bg-white rounded">
          <div class="d-flex justify-content-between">
            <div class="d-flex flex-row align-items-center">
              <div style="width: 30px; height: 30px; border-radius: 50%; border: 2px solid;"
                class="d-flex justify-content-center align-items-center">
                <i class="fa-solid fa-phone text-center"></i>
              </div>
              <div class="ms-2 c-details">
                <h6 class="mb-0" :style="{ 'color': session['phone_connected'] ? 'green' : 'red' }"><strong>{{
                  session['user']['name'] ? session['user']['name'] : "Desconhecida" }}</strong></h6>
                <span>{{ session['user']['id'] ? session['user']['id'].split(':')[0] : "Desconectado" }}</span>
              </div>
            </div>
          </div>
          <div class="card-body d-flex justify-content-between p-0 mt-4">
            <button class="btn btn-sm btn-outline-danger">Delete</button>
            <button class="btn btn-sm btn-outline-primary">Ver Mais</button>
          </div>
        </col-3>
      </div>
    </div>
    <div class="border p-3" v-else>
      <div class="text-center align-items-center">
        <span class="text-secondary">Nenhuma sessão encontrada.</span>
      </div>
    </div>

    <CreateSessionModal
      v-show="isModalVisible"
      @close="closeModal"
    />

  </div>
</template>

<script>
import CreateSessionModal from './sessions/CreateSessionModal.vue';
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'SessionsHome',
  props: ["sessions"],
  data() {
    return {
      isModalVisible: false,
    }
  },
  components:{
    CreateSessionModal,
  },
  computed: {
    ...mapGetters(["getSessions"]),
  },
  methods: {
    ...mapActions(["getAllSessions"]),
    showModal() {
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    }
  },
  mounted() {
    this.getAllSessions();
  }
}
</script>


<style scoped>
.order-status {
  margin: 0;
}

.order {
  font-size: 13px;
}

.order-link {
  color: #456b52;
}
</style>