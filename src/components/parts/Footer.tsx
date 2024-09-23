import React from 'react';

export function FooterFC(): React.JSX.Element {
  return (<>
    <div className="maps">
      <div className="text-maps">

        <h2>мы находимся</h2>
        <p>Филиалы компании Welcome Boss находятся в Сочи
          и Екатеринбурге и организуют обзорные экскурсии
          на территории «Большого Сочи» и «Большого Урала».
          В Сочи и Екатеринбурге расположены не только одни
          из самых живописных уголков нашей страны, но
          и удобные транспортные развязки, развитые ЖД сети
          и международные аэропорты, что позволяет нашим
          гостям добираться быстро и с комфортом.</p>

        <p>Регулярная правительственная поддержка в этих городах дает все необходимое для проведения деловых мероприятий на самом высоком уровне. Развитая ресурсная туристическая база, которую составляют отели, транспортная сеть, достопримечательности и заботливо сохраненное историческое наследие создают прекрасную почву для работы и отдыха одновременно. Компания
          Welcome Boss создаст все условия для комфортного пребывания Вас и Ваших гостей.</p>
      </div>
      <div id="maps">

      </div>

    </div>
    <div className="ques">
      <div className="question">
        <p>Остались вопросы? </p><p>Закажите обратный звонок и получите подробную консультацию
        </p>
      </div>
      <a href="/">Заказать обратный звонок</a>
    </div>

    <div className="bottom">
      <div className="bottom-left">
        <div className="logo"></div>
        <div className="wh">
          <a href="/" id="call"></a>
          <a href="/" id="wh"></a>
          <span>8 999 635-03-88</span>
        </div>
        <div className="mail">
          <a href="mailto:welcome.boss@yandex.ru" id="mail">welcome.boss@yandex.ru</a>

        </div>
        <div id="brif">
          <a href="/">Бриф на услуги</a>
        </div>
        <div id="bottom-soc">
          <h5>Социальные сети</h5>

          <a href="/" id="bottom-vk" className="soc"></a>
          <a href="/" id="bottom-f" className="soc"></a>
          <a href="/" id="bottom-youtube" className="soc"></a>
          <a href="/" id="bottom-ins" className="soc"></a>
        </div>
      </div>
      <div className="bottom-center">
        <div className="menu-footer">
          <ul>
            <li><a href="/">О компании</a></li>
            <li><a href="/">Ваши выгоды</a></li>
            <li><a href="/">Спецпредложения</a></li>
            <li><a href="/">Блог</a></li>
            <li><a href="/">Контакты</a></li>

          </ul>
        </div>
        <div className="menu-footer">
          <ul>
            <li><a href="/">Экскурсионное обслуживание</a></li>
            <li><a href="/">Визовая поддержка</a></li>
            <li><a href="/">Транспортное обслуживание</a></li>
            <li><a href="/">Организация деловых мероприятий</a></li>
          </ul>
        </div>
      </div>
      <div className="bottom-right">
        <h5>Способы оплаты</h5>
        <ul>
          <li><a href="/" className="many"><img src="img/visa.jpg" /></a></li>
          <li><a href="/" className="many"><img src="/pic/sber-bottom.jpg" /></a></li>
          <li><a href="/" className="many"><img src="./pic/master-c.jpg" /></a></li>
          <li><a href="/" className="many"><img src="./pic/YAndex.jpg" /></a></li>
          <li><a href="/" className="many"><img src="./pic/webmani.jpg" /></a></li>
          <li><a href="/" className="many"><img src="./pic/qiwi.jpg" /></a></li>
        </ul>
        <img src="../pic/komp.jpg" />
      </div>

    </div>

  </>);
}
