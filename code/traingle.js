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