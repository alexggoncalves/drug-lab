const DetailPanel = () =>{
    return (
        <div className="drawer-detail-panel">
            <div className="detail-header">
                <div className="detail-header-color-identifier"/>
                <span>NAME</span>
                <div className="detail-header-icons">
                    <img src={null} alt="" />
                    <img src={null} alt="" />
                </div>
               
            </div>
            <div className="drawer-panel-details">
                <div className="drawer-panel-details-item">
                    <span>EFFECT</span>
                    <p>Happiness</p>
                </div>
                <div className="drawer-panel-details-item">
                    <span>FORM</span>
                    <p>Pills</p>
                </div>
                <div className="drawer-panel-details-item">
                    <span>SIDE EFFECTS</span>
                    <p>Uncontrollable giggling</p>
                </div>
                <div className="drawer-panel-details-item">
                    <span>DESCRIPTION</span>
                    <p>A sparkling potion that amplifies happiness and lightness of heart.</p>
                </div>

                <button>TAKE</button>
                
            </div>
        </div>
    )
}

export default DetailPanel