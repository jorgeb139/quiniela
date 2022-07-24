import styles from "../styles/Global.module.css";
import Image from "next/image";

import MainLayout from "../components/MainLayout";

export default function Home() {
  return (
    <>
      <MainLayout title="Quiniela Mundial" description="Encontrarás todas las opciones para disfrutar tu quiniela">
        <h1 className={styles.title}>
          Bienvenidos a <div className="titleFeatured">Quiniela Mundial</div>
        </h1>
        <Image
          src={"/img/placeholder-1920x1080.jpg"}
          height={1920}
          width={1080}
          alt="Banner hero"
        />
      </MainLayout>

      <style jsx>{`
        .titleFeatured {
          color: rgb(255, 153, 0);
          line-height: 1.15;
          font-size: 4rem;
        }
      `}</style>
    </>
  );
}
