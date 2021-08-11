import { GetStaticPaths, GetStaticProps, NextPage } from "next";

interface Ninja {
    id: number,
    name: string,
    email: string,
    website: string
}

interface NinjaProps {
    ninja: Ninja
}

export const getStaticPaths : GetStaticPaths = async () => {

    const res = await fetch("https://jsonplaceholder.typicode.com/users")

    const ninjas = await res.json();

    const paths = ninjas.map((ninja) => {
        return {
            params: {
                id: String(ninja.id)
            }
        }
    });

    return {
        paths,
        fallback: true,
    };

};

export const getStaticProps : GetStaticProps = async (context) => {

    const id = context.params.id;

    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);

    const ninja = await res.json();

    return {
        props: { ninja: ninja },
    };
    
};

const NinjaPage: NextPage<NinjaProps> = ( { ninja } ) => {

    if (!ninja) {
        return (
            <div>
                Loading...
            </div>
        )
    }

    return (
        <main>
            <h1>{ ninja.name }</h1>
            <p>{ ninja.email }</p>
            <p>{ ninja.website }</p>
        </main>
    );

};

export default NinjaPage;
