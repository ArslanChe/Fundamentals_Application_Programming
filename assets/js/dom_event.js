(function () {
    const RU_LAT = [
        ['щ','shch'], ['ш','sh'], ['ч','ch'], ['ю','yu'], ['я','ya'], ['ё','yo'],
        ['ж','zh'], ['х','kh'], ['ц','ts'], ['э','e'], ['й','y'],
        ['а','a'], ['б','b'], ['в','v'], ['г','g'], ['д','d'],
        ['е','e'], ['з','z'], ['и','i'], ['к','k'], ['л','l'],
        ['м','m'], ['н','n'], ['о','o'], ['п','p'], ['р','r'],
        ['с','s'], ['т','t'], ['у','u'], ['ф','f'], ['ъ',''], ['ь','']
    ];

    const LAT_RU = [
        ['shch','щ'], ['sh','ш'], ['ch','ч'], ['yu','ю'], ['ya','я'], ['yo','ё'],
        ['zh','ж'], ['kh','х'], ['ts','ц'],
        ['a','а'], ['b','б'], ['v','в'], ['g','г'], ['d','д'], ['e','е'],
        ['z','з'], ['i','и'], ['k','к'], ['l','л'], ['m','м'], ['n','н'],
        ['o','о'], ['p','п'], ['r','р'], ['s','с'], ['t','т'], ['u','у'], ['f','ф'], ['y','й']
    ];

    const isUpper = s => s === s.toUpperCase() && s !== s.toLowerCase();

    function ruToLat(str) {
        let out = '';
        for (let i = 0; i < str.length; i++) {
            const ch = str[i], low = ch.toLowerCase();
            let repl = null;
            for (const [ru, lat] of RU_LAT) {
                if (low === ru) { repl = lat; break; }
            }
            out += repl == null ? ch : (isUpper(ch) ? repl.toUpperCase() : repl);
        }
        return out;
    }

    function latToRu(str) {
        let out = '', i = 0, s = String(str), low = s.toLowerCase();
        while (i < s.length) {
            let matched = false;
            for (const [lat, ru] of LAT_RU) {
                if (low.substr(i, lat.length) === lat) {
                    const orig = s.substr(i, lat.length);
                    out += isUpper(orig) ? ru.toUpperCase() : ru;
                    i += lat.length;
                    matched = true;
                    break;
                }
            }
            if (!matched) { out += s[i]; i++; }
        }
        return out;
    }

    const scope = document.querySelector('#passport');
    if (!scope) return;
    const nodes = scope.querySelectorAll('.ru');

    const initial = Array.from(nodes, el => el.textContent);

    document.getElementById('toLatin').addEventListener('click', () => {
        nodes.forEach(el => { el.textContent = ruToLat(el.textContent); });
    });

    document.getElementById('toCyr').addEventListener('click', () => {
        nodes.forEach(el => { el.textContent = latToRu(el.textContent); });
    });

    document.getElementById('reset').addEventListener('click', () => {
        nodes.forEach((el, i) => { el.textContent = initial[i]; });
    });
})();