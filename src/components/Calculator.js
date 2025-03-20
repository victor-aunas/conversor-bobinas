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

// Função para calcular o comprimento da bobina com base no peso, largura e gramatura do papel
export const calculateLengthByWeight = (weight, bobbinWidth, grammage) => {
    // Fórmula: comprimento (m) = (peso (kg) * 1000) / (largura (m) * gramatura (g/m²))
    return (weight * 1000) / ((bobbinWidth / 1000) * grammage);
};
