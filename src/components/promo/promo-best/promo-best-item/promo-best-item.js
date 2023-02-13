import './promo-best-item.scss'
const PromoBestItem = ({name, price, descr, src}) => {
    const img = require(`../../../../assets/img/${src}`)
    return (
        <>
            <div className="promo__coffee-item">
                <img src={img} alt={`${name}`} className="promo__coffee-item-img"/>
                <div className="promo__coffee-item-descr">{descr}</div>
                <div className="promo__coffee-item-price">{price}</div>
            </div>
        </>
    )
}
export default PromoBestItem