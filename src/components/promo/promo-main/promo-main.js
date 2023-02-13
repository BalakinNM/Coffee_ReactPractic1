import './promo-main.scss'

import Icon from "../../../assets/icons/Beans_separator_white.svg"

const PromoMain = () => {
    return (
        <div className="promo__main">
            <h1 className="promo__title">Everything You Love About Coffee</h1>
            <img src={Icon} alt="beans-separator" className="promo__separator"/>
            <h2 className="promo__subtitle">We makes every day full of energy and taste</h2>
            <h2 className="promo__subtitle">Want to try our beans?</h2>
            <button className="promo__btn">More</button>
        </div>
    )
}
export default PromoMain;