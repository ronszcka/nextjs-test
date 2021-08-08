import axios from 'axios';
import { GetStaticProps, NextPage } from 'next';
import * as React from 'react';
import { Cep } from '../../models/cep';

interface CepPageProps {
    cep: Cep;
}

const CepPage: NextPage<CepPageProps> = (props) => {

    const { cep } = props;

    return (
        <div>
            <span>static</span>
            <span>{cep.cep}</span>
            <span>{cep.localidade}</span>
            <span>{cep.logradouro}</span>
        </div>
    );
};

export const getStaticProps : GetStaticProps = async (context) => {

    const { data } = await axios.get(`https://viacep.com.br/ws/82560435/json/`);

    console.log(data);

    return {
        props: {
            cep: data
        }
    }

}

export default CepPage;