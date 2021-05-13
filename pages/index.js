import dynamic from "next/dynamic";

const DynamicH1 = dynamic(() => import("./DynamicH1"));

export default function Home(props) {
  return (
    <div>
      <DynamicH1 />
      <p>Hello World</p>
    </div>
  );
}
