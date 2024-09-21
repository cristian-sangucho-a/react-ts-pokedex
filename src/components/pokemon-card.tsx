export function PokemonCard(props: {name: string, url: string}) {
    return <div>
        {props.name} {props.url}
    </div>
}