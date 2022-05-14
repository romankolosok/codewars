//Playing with passphrases
function playPass(s, n) {
    const st = "abcdefghijklmnopqrstuvwxyz";
    s = s.replace(/\d/g,x => 9-x);
    s = s.replace(/[a-zA-Z]/g, x => st[(st.indexOf(x.toLowerCase())+n)%26]);
    s = s.replace(/[a-zA-Z]/g, (x,i) => (i%2===0)?x.toUpperCase():x);
    s = [...s].reverse();
    return s.join("");
}