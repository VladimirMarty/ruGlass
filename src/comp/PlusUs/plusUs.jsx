import styles from "../PlusUs/plusUs.module.css";
const PlusUs = () => {
  return (
    <div className={styles.all}>
      <div className={styles.div}>
        <iframe
          width="50%"
          height="50%"
          src="https://www.youtube.com/embed/Xggyr_6-7Ic"
          title="Skiffy Ruglass - COME ON LITTLE GIRL"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
        <p className={styles.p}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Reprehenderit deleniti id maxime expedita quod iusto ullam fugit?
          Nostrum mollitia voluptatibus, aut dolorem repudiandae sint reiciendis
          magni voluptate, facere, fugiat quas.
        </p>
      </div>
      <div className={styles.div}>
        <iframe
          width="50%"
          height="50%"
          src="https://www.youtube.com/embed/0NLADLVGNTA"
          title="Skiffy Ruglass-  BLOW YOUR NOSE"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
        <p className={styles.p}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam, quos?
          Consequatur laborum hic neque tempora reprehenderit, odio totam quos
          quas voluptate dolore impedit minus amet maxime mollitia blanditiis,
          perferendis similique?
        </p>
      </div>
    </div>
  );
};

export default PlusUs;
