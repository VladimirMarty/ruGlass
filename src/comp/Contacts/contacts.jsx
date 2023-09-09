import styles from "../Contacts/contacts.module.css";
function Contacts() {
  return (
    <div className={styles.all}>
      <div>
        <div>
          <p>Ruglass  /  Контакты</p>
          <h1>Контакты</h1>
          <p>
            Мы выполним работы по металлообработке любой сложности, сделаем это
            быстро и с высокой точностью, в соответствии с техническим заданием.
          </p>
          <div>
            <a>info@ruglass.ru</a>

            <p>115088, г. Москва, ул. Угрешская, д.2, стр.147</p>
            <p>Производственные площадки в Конаково и Ручьях</p>

            <a>+7 495 787-89-04</a>
          </div>
        </div>

        <p>Открыть в картах</p>
      </div>
    </div>
  );
}

export default Contacts;
