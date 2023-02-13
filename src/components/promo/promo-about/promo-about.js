import './promo-about.scss';
const PromoAbout = () => {
    const promoSeparator = require("../../../assets/icons/Beans_separator_white.svg").default
    return (
        <div className="promo__about">
            <h2 className="promo__subtitle promo__subtitle_black">About Us</h2>
            <img src={promoSeparator} alt="promo__separator" className="promo__separator"/>
            <div className="promo__descr">Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
                Afraid at highly months do things on at. Situation recommend objection do intention
                so questions. As greatly removed calling pleased improve an. Last ask him cold feel
                met spot shy want. Children me laughing we prospect answered followed. At it went
                is song that held help face. <br/><br/>
                
                Now residence dashwoods she excellent you. Shade being under his bed her, Much
                read on as draw. Blessing for ignorant exercise any yourself unpacked. Pleasant
                horrible but confined day end marriage. Eagerness furniture set preserved far
                recommend. Did even but nor are most gave hope. Secure active living depend son
                repair day ladies now.</div>
        </div>
    )
}
export default PromoAbout;