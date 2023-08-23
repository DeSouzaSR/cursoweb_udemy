// Resolver a fórmula de bascara e retornar os valores das raízes

function bhaskara(a, b, c) {
    const delta = b*b - 4 * a * c;
    if (delta >= 0) {
        const raiz1 = (-b + Math.sqrt(delta)) / (2 * a);
        const raiz2 = (-b - Math.sqrt(delta)) / (2 * a);
        return [raiz1, raiz2];
    } else {
        return 'As raízes não são reais';
    };
};

result = bhaskara(-3, 5, 12);
console.log(result)

