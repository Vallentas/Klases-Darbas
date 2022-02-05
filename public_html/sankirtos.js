let a = -5;
let b = 0;
let c = -4;
let d = 4;
x = '?';
y = '?';

if (a > b || d < c || d < a || c > b) {
    window.alert('sankirta negalima');
} else {
    if (c<= a && a <=d){
        x = a;
    }
        if (a <= c && c<=d) {
            x = c;
        }

        if (a<=d && d<=b) {
            y = d;
        }

            if ( c <= b && b <=d) {
        y = b;

            }
        let ats = x + y;
        document.write('rasta sankirta: ' + x + ' ir ' + y )
}


