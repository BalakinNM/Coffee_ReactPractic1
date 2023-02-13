import PromoMain from './promo-main/promo-main';
import PromoAbout from './promo-about/promo-about';
import PromoBest from './promo-best/promo-best';

import './promo.scss'

const Promo = () => {
    const data = [
        {name: 'Solimo', price: '10.73$', descr: "Solimo Coffee Beans 2 kg", src: 'best_1.png', id: 1},
        {name: 'Presto', price: '15.99$', descr: "Presto Coffee Beans 1 kg", src: 'best_2.png', id: 2},
        {name: 'AROMISTICO', price: '6.99$', descr: "AROMISTICO Coffee 1 kg", src: 'best_3.png', id: 3},
    ];
    return (
        <>
            <PromoMain/>
            <PromoAbout/>
            <PromoBest data={data}/>
        </>
        
    )
}
export default Promo;