import React from 'react';

export function ContentFC(): React.JSX.Element {
  return (<>
    <section>
      <div id="menu">
        <div id="content-menu">
          <ul className="menu">
            <li><a href="/" className="time">Скорость</a></li>
            <li><a href="/" className="p">Экономия</a></li>
            <li><a href="/" className="star">Качество</a></li>
            <li><a href="/" className="shield">Надежность</a></li>
            <li><a href="/" className="skidka">Скидки</a></li>
          </ul>
        </div>
      </div>
    </section>
    <section >
      <div className="work">
        <hgroup>
          <h2>Чем мы занимаемся </h2>
          <ul>
            <li className="n01"><h3>Экскурсионное обслуживание</h3>
              <a href="/" id="bottom1">Подробнее</a>
            </li>
            <li className="n02"><h3>Транспортное обслуживание</h3><a href="/" id="bottom2">Подробнее</a></li>
            <li className="n03"><h3>Визовая поддержка</h3><a href="/" id="bottom3">Подробнее</a></li>
            <li className="n04"><h3>Организация деловых мероприятий</h3><a href="/" id="bottom4">Подробнее</a></li>
          </ul>
        </hgroup>
      </div>
    </section>
    <div id="kompaniya">
      <figure className="kompaniya">
        <img src="./content/content.png" title="О компании" alt="О компании" />
        <figcaption>
          <div className="figcaption">
            <h3>О компании</h3>
            <div>
              <p>Welcome Boss – это успешная современная DMC-компания, основанная
                в 2015 году. Сегодня компания активно осуществляет свою деятельность в двух городах – Сочи и Екатеринбург.</p>

              <p>Welcome Boss работает в сфере MICE и оказывает комплексные услуги по направлениям:</p>

              <p>- Экскурсионное обслуживание на 7 языках (русский, английский, немецкий, французский, испанский, португальский, китайский).</p>

              <p>- Транспортное обслуживание на всех видах автомобилей и автобусах.</p>
              <p>- Визовая поддержка для иностранных граждан.</p>

              <p>- Организация деловых мероприятий: конференц-сервис, питание, гала-ужины.
                Основными принципами работы являются индивидуальный подход к каждому клиенту, ориентация на его задачи и достижение лучшего результата.</p></div>
            <a href="/">Подробнее</a>
          </div>
        </figcaption>
      </figure>
    </div>
    <section >

      <div className="other">
        <h2>Наши принципы</h2>
        <ol>
          <li className="n01">Индивидуальный подход для каждого клиента. Наш главный приоритет - интересы и пожелания гостей</li>
          <li className="n02">Оперативность при выполнении работы по заказу</li>
          <li className="n03">Поддержка гостей 24/7 при подготовке и реализации заказа.  Мобильная круглосуточная связь с нашими сотрудниками</li>
          <li className="n04">Единый договор на все виды услуг: размещение в отеле, экскурсионное и транспортное обслуживание, питание, круглосуточная поддержка менеджера во время выполнения заказа.</li>

        </ol>
      </div>
      <div id="utp">
        <h2>Наши преимущества</h2>
        <ul>
          <li className="n01"><span>Организовано</span><span>450</span><span>Организовано</span></li>
          <li className="n02"><span>Опыт работы с</span><span>2011</span><span>года в сфере mice</span></li>
          <li className="n03"><span>Для</span><span>250</span><span>клиентов</span></li>
          <li className="n04"><span>Работают</span><span>15</span><span>сотрудников </span></li>

        </ul>
      </div>
    </section>
  </>);
}
