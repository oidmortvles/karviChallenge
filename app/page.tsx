import FilterAside from "@/components/FilterAside";
import styles from "./Home.module.css";
import CardContainer from "@/components/CardContainer";
import FilterHeader from "@/components/FilterHeader";
import SearchDetails from "@/components/SearchDetails";

export default function Home() {
  return (
    <main className={styles.home}>
      <FilterAside/>
      
      <section className={styles.list}>
        <FilterHeader/>
        <SearchDetails/>
        <CardContainer/>
      </section>
    </main>
    
  );
}
