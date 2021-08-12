import { useRouter } from 'next/dist/client/router';
import Link from 'next/link';
import { useEffect } from 'react';

 
const NotFoundPage: React.FunctionComponent = () => {
    
    const router = useRouter();
    
    useEffect(() => {
        
        setTimeout(() => {
            router.push("/");
        }, 3000);

    }, [router]);

    return (
        <div className="not-found">
            <h1>Ooopss...</h1>
            <h2>That page cannot be found...</h2>
            <p>Go back to the <Link href="/"><a>Homepage</a></Link></p>
        </div>
    );
}
 
export default NotFoundPage;