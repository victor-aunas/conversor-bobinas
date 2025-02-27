// Função para converter metros quadrados para metros lineares
export const convertToLinearMeters = (area, bobbinWidth) => {
    // Conversão de m² para metros lineares
    return area / (bobbinWidth / 1000); // Divide a área pela largura da bobina (convertida para metros)
  };
  
  // Função para converter metros lineares para metros quadrados
  export const convertToArea = (length, bobbinWidth) => {
    // Conversão de metros lineares para metros quadrados
    return length * (bobbinWidth / 1000); // Multiplica o comprimento pela largura da bobina (convertida para metros)
  };
  