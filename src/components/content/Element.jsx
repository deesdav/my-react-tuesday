
export default function Element(props) {


    return(
        <>
        <h2>Hello {props.elementName}</h2>
        <p>You are {props.age}</p>
        <p>Your weight: {props.weight}</p>
        </>
    )
}