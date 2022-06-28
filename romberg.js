function romberg(n, a, b) {
    arguments.length > 3 ? fx = arguments[3] : fx = f;
    let R = new Array();
    let i;
    for (i = 0; i < n; i++)
        R[i] = new Array();
    R[0][0] = (b - a) / 2 * (fx(a) + fx(b));
    let eps = 1e-15, eps1;
    i = 1;
    while (i < n) {
        let nx = Math.pow(2, i);
        let h = (b - a) / nx;
        let s = 0;
        for (let k = 0; k < Math.pow(2, i - 1); k++) {
            let xx = a + (2 * k + 1) * h;
            s += fx(xx);
        }
        R[i][0] = 0.5 * R[i - 1][0] + h * s;
        for (let j = 1; j < i + 1; j++)
            R[i][j] = R[i][j - 1] + (R[i][j - 1] - R[i - 1][j - 1]) / (Math.pow(4, j) - 1);
        eps1 = Math.abs(R[i][i - 1] - R[i][i]);
        if (eps1 < eps || i == n - 1)
            break;
        i++;
    }
    return R[i][i];
}
let f = x => ... /* Inserisci la funzione 'f' della quale vuoi calcolare l'integrale definito nell'intervallo specificato con gli argomenti 'a' e 'b' della funzione 'romberg' */
/* Il programma funziona anche inserendo un quarto argomento nel seguente modo:
/* console.log(romberg(n, a, b, new Function("x", *//* Inserisci di seguito, nelle virgolette, dopo 'return', una funzione alternativa, se vuoi che il programma ne calcoli l'integrale definito invece di calcolare quello della funzione 'f' pocanzi definita *//* "return ..."))) */
