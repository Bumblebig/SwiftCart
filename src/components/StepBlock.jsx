export default function StepBlock({heading, desc}) {
    return(
        <div>
            <h4 className= "mb-2">{heading}</h4>
            <p className="text-sm text-gray-800">{desc}</p>
        </div>
    )
}