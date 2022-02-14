
export default function ComParametro(props) {
    const status = props.nota >= 7 ? 'Aprovado' : 'Recuperação'
    const notaInt = Math.ceil(props.nota)
    return (
        <div>
            <h2>{ props.jaaj }</h2>
            <p>
                <strong> {props.aluno} </strong>
                Tem nota
                <strong> {notaInt} </strong>
                e esta 
                <strong> {status} </strong>
            </p>               
        </div>
    )
}
