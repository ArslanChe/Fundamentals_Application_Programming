function parseInput(id) {
    const v = parseFloat(document.getElementById(id).value.replace(',', '.'));
    return isNaN(v) ? null : v;
}

function isTriangle(a, b, c) {
    return a > 0 && b > 0 && c > 0 && a + b > c && a + c > b && b + c > a;
}

function isRightTriangle(a, b, c) {
    const sides = [a, b, c].sort(function (x, y) {
        return x - y;
    });
    const x = sides[0], y = sides[1], z = sides[2];
    const eps = 1e-6;
    return Math.abs(x * x + y * y - z * z) < eps;
}

function solveTriangle() {
    const X = parseInput('sideX');
    const Y = parseInput('sideY');
    const Z = parseInput('sideZ');
    const out = document.getElementById('result');
    if (X === null || Y === null || Z === null) {
        out.textContent = 'Введите корректные числа X, Y, Z.';
        return;
    }
    if (!isTriangle(X, Y, Z)) {
        out.textContent = 'Треугольник с такими сторонами не существует.';
        return;
    }
    const right = isRightTriangle(X, Y, Z);
    out.textContent = right
        ? 'Треугольник существует и он прямоугольный.'
        : 'Треугольник существует, но он не прямоугольный.';
}


