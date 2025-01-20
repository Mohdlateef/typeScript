
type fruitProps = {
    name: string,
    color: string,
    count: number
}

export default function ExampleType(props: fruitProps) {
    return (
        <div>
            <h1>we have {props.name} fruits</h1>
            <h2>it has {props.color}</h2>
            <h3>we have {props.count} availabe</h3>
        </div>
    )
}
