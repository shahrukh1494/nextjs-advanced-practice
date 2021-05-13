import { useRouter } from "next/router";

export function getStaticProps(context) {
  const { params } = context;

  return {
    props: { userCount: Math.random() },
    revalidate: 5,
  };
}

export function getStaticPaths() {
  return {
    fallback: "blocking",
    paths: [
      { params: { id: "product-1" } },
      { params: { id: "product-2" } },
      { params: { id: "product-3" } },
      { params: { id: "product-4" } },
    ],
  };
}

export default function Home(props) {
  const router = useRouter();

  if (router.isFallback) {
    return <h1>Loading...</h1>;
  }

  return <h1>LOADED</h1>;
}
