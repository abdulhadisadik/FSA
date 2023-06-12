<template>
  <div>
    <div class="d-flex flex-wrap justify-content-center">
      <div class="me-2">
        <h5>Indonesian</h5>
        <textarea
          v-model="indonesian"
          resize="none"
          class="form-control"
          type="text"
          cols="30"
          rows="5"
          @input="indonesian = $event.target.value"
        >
        </textarea>
      </div>
      <div class="me-2">
        <h5>Javanese</h5>
        <textarea
          class="form-control"
          name=""
          id=""
          cols="30"
          rows="5"
          :value="javanese"
        ></textarea>
      </div>
      <div>
        <h5>FSA</h5>
        <textarea
          class="form-control"
          name=""
          id=""
          cols="30"
          rows="5"
          :value="fsa"
          disabled
        ></textarea>
      </div>
    </div>
    <div class="d-flex justify-content-center mt-3">
      <button class="btn btn-primary me-2" @click="translateToJavanese">
        Translate
      </button>
      <button class="btn btn-danger" @click="removeInput">Reset</button>
    </div>
  </div>
</template>

<script>
import FSA from "@/Helper/FSA";
import { toJavanese } from "carakanjs";
export default {
  data() {
    return {
      indonesian: "",
      javanese: "",
      fsa: "",
    };
  },
  name: "TranslaterJawa",
  methods: {
    translateToJavanese() {
      this.javanese = toJavanese(this.indonesian);
      this.fsa = FSA(this.indonesian);
    },
    removeInput() {
      this.indonesian = "";
      this.javanese = "";
      this.fsa = "";
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
textarea {
  resize: none;
}
</style>
