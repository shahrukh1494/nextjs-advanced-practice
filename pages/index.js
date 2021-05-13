import Image from "next/image";

export default function Home(props) {
  return (
    <div>
      <p>Hello World</p>
      <Image src="/Capture.jpg" width={1920} height={720} />
    </div>
  );
}
