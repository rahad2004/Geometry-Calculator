function calculationTraingle(){
    const inputbase= document.getElementById('traingal-base');
    const innertextB = inputbase.value;
    const base= parseFloat(innertextB);
    console.log(base);

    const inputhight = document.getElementById('triangle-hight')
    const innertextH = inputhight.value;
    const hight = parseFloat(innertextH);
    console.log(hight);

    const area = 0.5 * base * hight ;
    console.log(area)

    const output = document.getElementById('t-output');
    output.innerText=area;

}
// revtangle
function calculationRectangle(){
    const width= inputData('rectangle-w');
    const length=inputData('rectangle-l')
    const area = width*length
    output ('r-output' ,area);
}
// end

// peralogram
function calculationParallelogram(){
    const base = inputData('parallelogram-b');
    const hight = inputData('parallelogram-h');
    const area = base*hight;
    output('p-output' , area);
}
// end
// rhombus
function calculationRhombus(){
    const b1=inputData('rhombus-b1');
    const b2 = inputData('rhombus-b2');
    const area = 0.5*b1*b1;
    output('rh-output' , area);
}
// end

// pentagon
function calculationPentagon(){
    const p = inputData('pentagon-p');
    const b = inputData ('pentagon-b');
    const area = 0.5*p*b ;
    console.log(area)
    output ('pen-output' , area);
}
// end
// ellipse
function calculationEllipse(){
    const a = inputData('ellipse-a');
    const b = inputData ('ellipse-b');
    const area = (3.1416*a*b);
    output ('ellipse-output' , area)
}