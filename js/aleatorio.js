const nomes = ["Maria Alice", "Ana Julia", "Matheus", "Karen", "Valentina", "Guilherme", "Ayla"];

export function aleatorio (lista){
    const posicao = Math.floor(Math.random()* lista.length);
    return lista[posicao];
}

export const nome = aleatorio(nomes)