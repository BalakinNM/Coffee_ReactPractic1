import PromoBestItem from './promo-best-item/promo-best-item';

import './promo-best.scss'

const PromoBest = ({data}) => {

    const elements = data.map(item => {
        const {id, ...itemProps} = item
        return (
            <PromoBestItem key={id} {...itemProps}/>
        )
    })
    return (
        <>
            <div className="promo__best">
				<h2 className="promo__subtitle promo__subtitle_black">Our best</h2>
				<div className="promo__coffee-items">
                    {elements}
				</div>
			</div>
        </>
    )
}
export default PromoBest;