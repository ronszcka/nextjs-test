import Image from 'next/image';

import ColorButton from '../color-buttom/ColorButton.component';

import stylesCard from './Card.module.css';
 
const Card: React.FunctionComponent = () => {
    return (
        <div className={stylesCard.card}>
            <div className={stylesCard.product_header}>
            <Image className={stylesCard.image} src="https://pigbem-imagens.s3-sa-east-1.amazonaws.com/images/546/produto/1/foto1" alt="logo" width={65} height={65} />
            <div className={stylesCard.details}>
                <label className={stylesCard.name}>La pasta a carbonara</label>
                <label className={stylesCard.description}>La mejor pasta del brasil</label>
            </div>
            </div>
            <div className={stylesCard.product_footer}>
                <label className={stylesCard.promotion}>R$ 89,00</label>
                <label className={stylesCard.price}>R$ 99,00</label>
                <ColorButton variant="contained" color="primary">
                    Adicionar
                </ColorButton>
            </div>
        </div>
    );
}
 
export default Card;