import { Button } from "antd";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import style from './index.module.css';


const NotFoundPage = () => {

    const router = useRouter();

    setTimeout(() => {
        router.push("/")
    }, 3000)

    return (
        <div style={{ textAlign: "center" }}>
            <Head>
                <title>PC-Builder-404 Not Found</title>
                <meta
                    name="description"
                    content="PC builder"
                />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="https://i.ibb.co/dK1PfqF/pcbuilder-Header.png" />
            </Head>
            <div className={style.error}>404</div>
            <br /><br />
            <span className={style.info}>File not found</span>
            <img src="http://images2.layoutsparks.com/1/160030/too-much-tv-static.gif" className={style.static} alt="404" />
            <Link href="/">
                <Button>Back To Home</Button>
            </Link>
        </div>
    );
};

export default NotFoundPage;