<script setup>
import { ref } from "vue";
import { convertToLinearMeters, convertToArea } from "./Calculator"; // Funções de conversão

// Definição de variáveis reativas
const width = ref(""); // Largura da bobina (mm)
const length = ref(""); // Comprimento da bobina (m)
const area = ref(null); // Área da bobina (m²)
const linearMeters = ref(null); // Metros lineares
const isConverted = ref(false); // Flag para controlar se a conversão foi realizada

// Função para calcular as conversões
const handleConvert = () => {
  if (!width.value || (!length.value && !area.value)) {
    alert("Por favor, preencha todos os campos necessários.");
    return;
  }

  // Verifica se a conversão é de metros quadrados para metros lineares ou vice-versa
  if (area.value) {
    // Conversão de metros quadrados para metros lineares
    linearMeters.value = convertToLinearMeters(area.value, width.value);
    isConverted.value = true;
  } else if (length.value) {
    // Conversão de metros lineares para metros quadrados
    area.value = convertToArea(length.value, width.value);
    isConverted.value = true;
  }
};

// Função para pressionar Enter
const handleKeyPress = (event) => {
  if (event.key === "Enter") {
    handleConvert();
  }
};

// Função para limpar todos os campos e voltar à tela inicial
const resetFields = () => {
  width.value = "";
  length.value = "";
  area.value = null;
  linearMeters.value = null;
  isConverted.value = false;
};
</script>

<template>
  <div class="full-screen">
    <div class="container">
      <h1>Conversor de Bobinas</h1>

      <!-- Exibe os campos apenas se a conversão não foi realizada ou se os campos estão vazios -->
      <label v-if="!isConverted">
        Largura da Bobina (mm):
        <input type="number" v-model="width" @keydown="handleKeyPress" />
      </label>

      <label v-if="!isConverted">
        Área da Bobina (m²):
        <input type="number" v-model="area" @keydown="handleKeyPress" />
      </label>

      <label v-if="!isConverted && !area">
        Comprimento da Bobina (m):
        <input type="number" v-model="length" @keydown="handleKeyPress" />
      </label>

      <button @click="handleConvert">Converter</button>
      
      <button v-if="isConverted" @click="resetFields">Limpar</button>

      <!-- Resultados -->
      <h2 v-if="linearMeters !== null">Metros Lineares: {{ linearMeters.toFixed(2) }} m</h2>
      <h2 v-if="area !== null">Área: {{ area.toFixed(2) }} m²</h2>
    </div>
  </div>
</template>

<style scoped>
.full-screen {
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  box-sizing: border-box;
  background-color: #221e4d;
  color: white;
}

.container {
  width: 80%;
  max-width: 600px;
  padding: 20px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  text-align: center;
}

input,
select {
  width: 100%;
  padding: 8px;
  margin: 5px 0;
  border: 1px solid #ccc;
  border-radius: 4px;
}

label,
h1,
h2,
h3 {
  color: black;
}

button {
  background-color: #007bff;
  color: white;
  padding: 10px;
  border: none;
  cursor: pointer;
  width: 100%;
  margin-top: 10px;
  border-radius: 4px;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #0056b3;
}
</style>
