
import HomePageLayout from "@/layout/HomePageLayout"
import { shuffleArray } from "@/utils/shuffleArray"
import { Row } from "antd"
import Head from "next/head"
import ProductCard from "@/components/ProductCard";
import HeroSection from "@/components/HeroSection";
import auth from "@/firebase/firebase.auth.js";
import { useAuthState } from "react-firebase-hooks/auth";
import FeaturedCategory from "@/components/FeaturedCategory";

export default function HomePage({ products }) {
  const [user] = useAuthState(auth);
  return (
    <>
      <Head>
        <title>PC-Builder</title>
        <meta
          name="description"
          content="PC builder"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <HomePageLayout>
        <HeroSection />
        <div className='my-10'>
          <div className='flex text-gray-700 p-2 justify-center text-center'>
            <h1 className="w-full md:w-1/4 text-2xl font-bold border-b-2 border-primary pb-3">Featured Products</h1>

          </div>
          <div className='flex justify-center items-center mx-10'>
            <Row justify="center" className='grid lg:grid-cols-5 md:grid-cols-3 grid-cols-1 gap-5 items-center mt-8' gutter={10}>
              {
                products?.map((data, id) => <ProductCard product={data} key={id + 10} />)
              }
            </Row>
          </div>
          <div className='flex justify-center items-center md:mx-10'>
            <FeaturedCategory />
          </div>
        </div>
      </HomePageLayout>
    </>
  )
}

HomePage.getLayout = function getLayout(page) {
  return (
    <HomePageLayout>
      {page}
    </HomePageLayout>
  )
}

export const getServerSideProps = async () => {
  const res = await fetch(process.env.BASE_URL + '/products');
  const data = await res.json();
  const shuffleProducts = shuffleArray(data.data);
  const randomProducts = shuffleProducts.slice(0, 10);
  return {
    props: {
      products: randomProducts
    }
  }
}