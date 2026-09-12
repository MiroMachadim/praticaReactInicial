function Somar(){
    const num1=3;
    const num2=5;
    return (
        <div>
            <h3>operação de somar:</h3>
            <p>{num1}+{num2}={num1+num2}</p>
        </div>
    );
}
function Subtrair(){
    const num1=8;
    const num2=3;
    return (
        <div>
            <h3>operação de subtrair:</h3>
            <p>{num1}-{num2}={num1-num2}</p>
        </div>
    );
}
function Multiplica(){
    const num1=3;
    const num2=5;
    return (
        <div>
            <h3>operação de multiplicar:</h3>
            <p>{num1}*{num2}={num1*num2}</p>
        </div>
    );
}
function Dividir(){
    const num1=15;
    const num2=3;
    return (
        <div>
            <h3>operação de dividir:</h3>
            <p>{num1}/{num2}={num1/num2}</p>
        </div>
    );
}
export {Somar,Subtrair,Multiplica,Dividir};