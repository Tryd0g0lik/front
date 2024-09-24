import React from 'react';

export function HeadFC(): React.JSX.Element {
  return (<>
    <div id="top">
      <div className="top-menu">

        <div id="top-left">
          <form id="selectItem" action="" method="post">
            <select className="selectItem" size={1}>
              <option className="selectItem-sity" id="chelyabinsk">Выберите город</option>
              <option className="selectItem-sity" id="chelyabinsk">Челябинск</option>
              <option className="selectItem-sity" id="moskva">Москва</option>
              <option className="selectItem-sity" id="piter">Санкт-Петербург</option>
              <option className="selectItem-sity" id="nnovgor">Нижний Новгород</option>
              <option className="selectItem-sity" id="novosibirsk">Новосибирск</option>
            </select>
          </form>
          <div className="wh">
            <a href="/" id="call"></a>
            <a href="/" id="wh"></a>
            <span>8 999 635-03-88</span>
          </div>
        </div>
        <div>
          <div className="mail">
            <a href="mailto:welcome.boss@yandex.ru" id="mail">welcome.boss@yandex.ru</a>

          </div>
        </div>
        <div id="top-right">
          <div id="brif">
            <a href="/">Бриф на услуги</a>
          </div>

          <div id="soc">
            <a href="/" id="vk"></a>
            <a href="/" id="f"></a>
            <a href="/" id="ins"></a>
          </div>

          <div id="lang">
            <form className="lang" action="" method="post">
              <select className="selectItem" size={1}>
                <option className="selectItem-lang" id="ru">RU</option>
                <option className="selectItem-lang" id="us">US</option>
              </select>
            </form>
            {/* <ul>
              <li><a href="/" id="ru">RU</a></li>
              <li><a href="/" id="us">US</a></li>
            </ul> */}
          </div >

        </div >
      </div >
    </div >
    <div className="topnav">
      <div className="logo"></div>
      <nav>
        <ul className="header-menu">
          {/* <li><a href="/">О компании</a></li> */}
          <li className="sub-menu">{/* < a href="/">Наши услуги</a> */}
            <ul className="submenu">
              <li><a>Экскурсионное обслуживание</a></li>
              <li><a>Визовая поддержка</a></li>
              <li><a>Транспортное обслуживание</a></li>
              <li><a>Организация деловых мероприятий</a></li>
            </ul>
          </li>

          {/* <!-- <li><a href="/">Ваши выгоды</a></li><li><a href="/">Спецпредложения</a></li><li><a href="/">Блог</a></li><li><a href="/">Контакты</a></li> --> */}
        </ul>
      </nav >
      <div className="search">
        <form id="search" action="">
          <fieldset>
            <label htmlFor="search"><input type="text" value="Поиск"></input></label>
            <input type="submit" value=""></input>

          </fieldset>
        </form>
      </div>
    </div >
    <div className="title">
      <hgroup>
        <h1>Ваш надежный MICE - партнёр</h1>
        <h2>Экскурсионное обслуживание</h2>
        <h2>Визовая поддержка для иностранных граждан</h2>
      </hgroup>
      <div>
        {/* <!-- <a href="/">Получить консультацию</a> -->  */}
      </div>
    </div>


  </>);
}
