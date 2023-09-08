export default function Singer({singer}){
    return(
        <>
            <div className="singer-card">
                <p>Singer Name: {singer.name}</p>
                <p>Singer Age: {singer.age}</p>
                <p>Song Name: {singer.song}</p>
            </div>
        </>
    )
}