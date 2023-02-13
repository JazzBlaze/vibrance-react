

export default function TeamCard({img,name,sub}){
	return (
        <>

                <div class="team-card">
                    <div class="imgBx">
                    <img
                        src={img}
                        alt=""
                    />
                    </div>
                    <div class="team-content">
                    <div class="contentBx">
                        <h3>{name}<br /><span>{sub}</span></h3>
                    </div>
                    </div>
                </div>

        </>
    	
    )
}