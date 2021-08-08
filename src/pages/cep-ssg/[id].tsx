import axios from 'axios';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { useRouter } from 'next/dist/client/router';
import * as React from 'react';
import { Cep } from '../../models/cep';

interface CepPageProps {
    cep: Cep;
}

const CepPage: NextPage<CepPageProps> = (props) => {

    const { cep } = props;

    const router = useRouter();

    if (router.isFallback) {
        return <div>carregando...</div>
    }

    return (
        <div>
            <span>static ssg</span>
            <br/>
            <span>{cep.cep}</span>
            <br/>
            <span>{cep.localidade}</span>
            <br/>
            <span>{cep.logradouro}</span>
        </div>
    );
};

export const getStaticProps : GetStaticProps = async (context) => {

    const {
        params: { id }
    } = context;

    const { data } = await axios.get(`https://viacep.com.br/ws/${id}/json/`);

    console.log(data);

    return {
        props: {
            cep: data
        },
        revalidate: 20
    }

}

export const getStaticPaths : GetStaticPaths = async () => {

    return {
        paths: [
            { params: { id: "89300-068"} },
            { params: { id: "89300-070"} },
        ],
        fallback: true,
    }

}

export default CepPage;