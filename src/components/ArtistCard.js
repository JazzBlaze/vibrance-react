

export default function ArtistCard({img,name}){
	return (
        <>

                <div className="team-card" style={{
                    borderRadius: '9999px',
                    width: '200px',
                    height: '200px'
                }}>
                    <div className="imgBx">
                    <img
                        src={img}
                        alt={name}
                    />
                    </div>
                    <div className="team-content" style={{
                        borderRadius: '9999px',
                    }}>
                    <div className="contentBx">
                        <h3 style={{ color: '#FFFFFF' }}>{name}</h3>
                    </div>
                    </div>
                </div>

        </>
    	
    )
}