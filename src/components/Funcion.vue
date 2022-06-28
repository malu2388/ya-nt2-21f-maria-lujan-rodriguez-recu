<template>
  <section class="src-components-funcion">
    <h1>NT2 - Recuperatorio</h1>
    <div>
      <input type="text" v-model="texto" placeholder="Escribí algo acá" />

      <div v-if="texto.length">
        <p>Cantidad caracteres = {{ contarCaracteres }}</p>
        <p>1 - {{ texto | codificar }} (codificado)</p>
        <p>2 - {{ texto | pasarAMayuscula }} (mayuscula)</p>
        <p>3 - {{ texto | pasarAMinuscula }} (minuscula)</p>
        <p>4 - {{ texto | mayusculaIntercalada }} (mayuscula / minuscula)</p>
        <p>5 - {{ texto | minusculaIntercalada }} (minuscula / mayuscula)</p>
      </div>
    </div>
    <hr />
    <div>
      <p>Respuestas: 1:C 2:B 3:C 4:A 5:B y C</p>
    </div>
  </section>
</template>

<script>
export default {
  name: "src-components-funcion",
  props: [],
  mounted() {},
  data() {
    return {
      texto: [],
    };
  },
  methods: {},
  computed: {
    contarCaracteres() {
      let cantCaracteres = 0;
      for (let i = 0; i < this.texto.length; i++) {
        cantCaracteres++;
      }
      return cantCaracteres;
    },
  },
};
</script>

<style scoped lang="css">
</style>
