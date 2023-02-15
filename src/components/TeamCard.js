

export default function TeamCard({img,name,sub}){
	return (
        <>

                <div className="team-card">
                    <div className="imgBx">
                    <img
                        src={img}
                        alt=""
                    />
                    </div>
                    <div className="team-content">
                    <div className="contentBx">
                        <h3>{name}<br /><span>{sub}</span></h3>
                    </div>
                    </div>
                </div>

        </>
    	
    )
}