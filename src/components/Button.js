
export default function Button({text,link}){
	return (
        <>
            <a className="button" href={link} target="_blank">{text}</a>
        </>
    )
}