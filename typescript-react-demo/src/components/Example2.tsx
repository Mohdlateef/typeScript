type ExamplePrps = {
    name: string,
    children: React.ReactNode
}


export const Example2: React.FC<ExamplePrps> = ({ children, name }) => {
    console.log(children);
    return (
        <div>
            {children}
            {name}
        </div>
    )
}
