const FormatName = (name) => {
    let nl = name.split(" ");
    let n = nl[0];
    let l = nl[1];
    return n.charAt(0).toUpperCase() + n.slice(1) +" " + l.charAt(0).toUpperCase() + l.slice(1)

}

export default FormatName;