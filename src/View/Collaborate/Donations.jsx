import React from "react";
import "./Donations.css";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../assets/Components/Footer/Footer";
import BannerViews from "../../Components/BannerViews/BannerViews";
import ButtonDonate from "../../Components/ButtonDonate/ButtonDonate";
import ScrollArrow from "../../Components/ScrollArrow/ScrollArrow";

const Donations = () => {
  return (
    <>
      <div>
        <Navbar />
        <BannerViews
          image="https://res.cloudinary.com/da7ffijqs/image/upload/t_Gradient fade/v1699346654/Captura_de_pantalla_2023-11-07_094246_dvxa7d.png"
          title="¿Quieres donar?"
        />
      </div>
      <div class="flip12">
        <div class="content12">
          <div class="front-12">
            <h2 className="texts40">
              La generosidad es el arte de dar con el corazón.
            </h2>
          </div>
          <div class="back12">
            <p className="texts41">
              "El Parkinson no define a quienes lo padecen, pero juntos podemos
              redefinir su impacto. Cada gesto de apoyo, cada muestra de
              comprensión, es un paso hacia la mejora de la calidad de vida de
              quienes conviven con esta condición. La fuerza, el coraje y la
              resiliencia de quienes enfrentan el Parkinson a diario son
              ejemplos de inspiración. Su lucha es un recordatorio de que, a
              pesar de los desafíos, la esperanza y la determinación siempre
              prevalecen. Con conciencia, apoyo y avances médicos, podemos
              construir un mundo más amable y compasivo para quienes viven con
              Parkinson. La comprensión y el respaldo son fundamentales en esta
              lucha. ¡Seamos la voz, el apoyo y la esperanza que aquellos con
              Parkinson necesitan! Juntos, podemos impulsar la investigación,
              brindar ayuda y cambiar vidas. #UnidosContraElParkinson"
            </p>
          </div>
        </div>
      </div>
      <div className="BOXES">
        <div class="card13">
          <h1 className="Pago">Transferencia</h1>
          <p className="datos">
            Puede ser realizada a través de la banca en línea, aplicación móvil
            o visitando una sucursal bancaria.
            <br />
            <br />
            Numero para la Transferencia: ES79 2100 8985 4702 0001
            <br />
            <br />
            Entidad bancaria: La Caixa
          </p>
          <div class="flip-cards1">
            <div class="flip-card-inner01">
              <div class="flip-card-front01">
                <p class="heading_8264">MASTERCARD</p>
                <svg
                  class="logo"
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="36"
                  height="36"
                  viewBox="0 0 48 48"
                >
                  <path
                    fill="#ff9800"
                    d="M32 10A14 14 0 1 0 32 38A14 14 0 1 0 32 10Z"
                  ></path>
                  <path
                    fill="#d50000"
                    d="M16 10A14 14 0 1 0 16 38A14 14 0 1 0 16 10Z"
                  ></path>
                  <path
                    fill="#ff3d00"
                    d="M18,24c0,4.755,2.376,8.95,6,11.48c3.624-2.53,6-6.725,6-11.48s-2.376-8.95-6-11.48 C20.376,15.05,18,19.245,18,24z"
                  ></path>
                </svg>
                <svg
                  version="1.1"
                  class="chip"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  x="0px"
                  y="0px"
                  width="30px"
                  height="30px"
                  viewBox="0 0 50 50"
                  xml:space="preserve"
                >
                  {" "}
                  <image
                    id="image0"
                    width="50"
                    height="50"
                    x="0"
                    y="0"
                    href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAMAAAAp4XiDAAAABGdBTUEAALGPC/xhBQAAACBjSFJN
                  AAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAB6VBMVEUAAACNcTiVeUKVeUOY
                  fEaafEeUeUSYfEWZfEaykleyklaXe0SWekSZZjOYfEWYe0WXfUWXe0WcgEicfkiXe0SVekSXekSW
                  ekKYe0a9nF67m12ZfUWUeEaXfESVekOdgEmVeUWWekSniU+VeUKVeUOrjFKYfEWliE6WeESZe0GS
                  e0WYfES7ml2Xe0WXeESUeEOWfEWcf0eWfESXe0SXfEWYekSVeUKXfEWxklawkVaZfEWWekOUekOW
                  ekSYfESZe0eXekWYfEWZe0WZe0eVeUSWeETAnmDCoWLJpmbxy4P1zoXwyoLIpWbjvXjivnjgu3bf
                  u3beunWvkFWxkle/nmDivXiWekTnwXvkwHrCoWOuj1SXe0TEo2TDo2PlwHratnKZfEbQrWvPrWua
                  fUfbt3PJp2agg0v0zYX0zYSfgkvKp2frxX7mwHrlv3rsxn/yzIPgvHfduXWXe0XuyIDzzISsjVO1
                  lVm0lFitjVPzzIPqxX7duna0lVncuHTLqGjvyIHeuXXxyYGZfUayk1iyk1e2lln1zYTEomO2llrb
                  tnOafkjFpGSbfkfZtXLhvHfkv3nqxH3mwXujhU3KqWizlFilh06khk2fgkqsjlPHpWXJp2erjVOh
                  g0yWe0SliE+XekShhEvAn2D///+gx8TWAAAARnRSTlMACVCTtsRl7Pv7+vxkBab7pZv5+ZlL/UnU
                  /f3SJCVe+Fx39naA9/75XSMh0/3SSkia+pil/KRj7Pr662JPkrbP7OLQ0JFOijI1MwAAAAFiS0dE
                  orDd34wAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAHdElNRQfnAg0IDx2lsiuJAAACLElEQVRIx2Ng
                  GAXkAUYmZhZWPICFmYkRVQcbOwenmzse4MbFzc6DpIGXj8PD04sA8PbhF+CFaxEU8iWkAQT8hEVg
                  OkTF/InR4eUVICYO1SIhCRMLDAoKDvFDVhUaEhwUFAjjSUlDdMiEhcOEItzdI6OiYxA6YqODIt3d
                  I2DcuDBZsBY5eVTr4xMSYcyk5BRUOXkFsBZFJTQnp6alQxgZmVloUkrKYC0qqmji2WE5EEZuWB6a
                  lKoKdi35YQUQRkFYPpFaCouKIYzi6EDitJSUlsGY5RWVRGjJLyxNy4ZxqtIqqvOxaVELQwZFZdkI
                  JVU1RSiSalAt6rUwUBdWG1CP6pT6gNqwOrgCdQyHNYR5YQFhDXj8MiK1IAeyN6aORiyBjByVTc0F
                  qBoKWpqwRCVSgilOaY2OaUPw29qjOzqLvTAchpos47u6EZyYnngUSRwpuTe6D+6qaFQdOPNLRzOM
                  1dzhRZyW+CZouHk3dWLXglFcFIflQhj9YWjJGlZcaKAVSvjyPrRQ0oQVKDAQHlYFYUwIm4gqExGm
                  BSkutaVQJeomwViTJqPK6OhCy2Q9sQBk8cY0DxjTJw0lAQWK6cOKfgNhpKK7ZMpUeF3jPa28BCET
                  amiEqJKM+X1gxvWXpoUjVIVPnwErw71nmpgiqiQGBjNzbgs3j1nus+fMndc+Cwm0T52/oNR9lsdC
                  S24ra7Tq1cbWjpXV3sHRCb1idXZ0sGdltXNxRateRwHRAACYHutzk/2I5QAAACV0RVh0ZGF0ZTpj
                  cmVhdGUAMjAyMy0wMi0xM1QwODoxNToyOSswMDowMEUnN7UAAAAldEVYdGRhdGU6bW9kaWZ5ADIw
                  MjMtMDItMTNUMDg6MTU6MjkrMDA6MDA0eo8JAAAAKHRFWHRkYXRlOnRpbWVzdGFtcAAyMDIzLTAy
                  LTEzVDA4OjE1OjI5KzAwOjAwY2+u1gAAAABJRU5ErkJggg=="
                  ></image>
                </svg>
                <svg
                  version="1.1"
                  class="contactless"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  x="0px"
                  y="0px"
                  width="20px"
                  height="20px"
                  viewBox="0 0 50 50"
                  xml:space="preserve"
                >
                  {" "}
                  <image
                    id="image0"
                    width="50"
                    height="50"
                    x="0"
                    y="0"
                    href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAQAAAC0NkA6AAAABGdBTUEAALGPC/xhBQAAACBjSFJN
                  AAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAJcEhZ
                  cwAACxMAAAsTAQCanBgAAAAHdElNRQfnAg0IEzgIwaKTAAADDklEQVRYw+1XS0iUURQ+f5qPyjQf
                  lGRFEEFK76koKGxRbWyVVLSOgsCgwjZBJJYuKogSIoOonUK4q3U0WVBWFPZYiIE6kuArG3VGzK/F
                  fPeMM/MLt99/NuHdfPd888/57jn3nvsQWWj/VcMlvMMd5KRTogqx9iCdIjUUmcGR9ImUYowyP3xN
                  GQJoRLVaZ2DaZf8kyjEJALhI28ELioyiwC+Rc3QZwRYyO/DH51hQgWm6DMIh10KmD4u9O16K49it
                  VoPOAmcGAWWOepXIRScAoJZ2Frro8oN+EyTT6lWkkg6msZfMSR35QTJmjU0g15tIGSJ08ZZMJkJk
                  HpNZgSkyXosS13TkJpZ62mPIJvOSzC1bp8vRhhCakEk7G9/o4gmZdbpsTcKu0m63FbnBP9Qrc15z
                  bkbemfgNDtEOI8NO5L5O9VYyRYgmJayZ9nPaxZrSjW4+F6Uw9yQqIiIZwhp2huQTf6OIvCZyGM6g
                  DJBZbyXifJXr7FZjGXsdxADxI7HUJFB6iWvsIhFpkoiIiGTJfjJfiCuJg2ZEspq9EHGVpYgzKqwJ
                  qSAOEwuJQ/pxPvE3cYltJCLdxBLiSKKIE5HxJKcTRNeadxfhDiuYw44zVs1dxKwRk/uCxIiQkxKB
                  sSctRVAge9g1E15EHE6yRUaJecRxcWlukdRIbGFOSZCMWQA/iWauIP3slREHXPyliqBcrrD71Amz
                  Z+rD1Mt2Yr8TZc/UR4/YtFnbijnHi3UrN9vKQ9rPaJf867ZiaqDB+czeKYmd3pNa6fuI75MiC0uX
                  XSR5aEMf7s7a6r/PudVXkjFb/SsrCRfROk0Fx6+H1i9kkTGn/E1vEmt1m089fh+RKdQ5O+xNJPUi
                  cUIjO0Dm7HwvErEr0YxeibL1StSh37STafE4I7zcBdRq1DiOkdmlTJVnkQTBTS7X1FYyvfO4piaI
                  nKbDCDaT2anLudYXCRFsQBgAcIF2/Okwgvz5+Z4tsw118dzruvIvjhTB+HOuWy8UvovEH6beitBK
                  xDyxm9MmISKCWrzB7bSlaqGlsf0FC0gMjzTg6GgAAAAldEVYdGRhdGU6Y3JlYXRlADIwMjMtMDIt
                  MTNUMDg6MTk6NTYrMDA6MDCjlq7LAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIzLTAyLTEzVDA4OjE5
                  OjU2KzAwOjAw0ssWdwAAACh0RVh0ZGF0ZTp0aW1lc3RhbXAAMjAyMy0wMi0xM1QwODoxOTo1Nisw
                  MDowMIXeN6gAAAAASUVORK5CYII="
                  ></image>
                </svg>
                <p class="number">9759 2484 5269 6576</p>
                <p class="valid_thru">VALID THRU</p>
                <p class="date_8264">1 2 / 2 4</p>
                <p class="name">CODERS MERIDA</p>
              </div>
            </div>
          </div>
        </div>
        <div class="card14">
          <h1 className="Pago1">Bizum</h1>
          <p className="datos1">
            Se lleva a cabo a través de aplicaciones móviles de los bancos
            asociados a Bizum que permiten realizar pagos instantáneos con tan
            solo el número de teléfono móvil del destinatario.
            <br />
            <br />
            Numero para realizar Bizum: 674 09 45 01
          </p>
          <div class="cardS12">
            <div class="card__date12">
              <span class="time12">BIZUM</span>
              <div className="Dinero50">
                <div className="Dar">
                  <img className="imagendar" src="https://res.cloudinary.com/da7ffijqs/image/upload/v1699569831/_67196110-95c8-423b-9512-9d65a74337ef-modified_v7r5ok.png" alt="" />
                  <p>Enviar</p>
                </div>
                <div className="Recibir">
                  <img className="imagenrecibir" src="https://res.cloudinary.com/da7ffijqs/image/upload/v1699570477/_32c949e8-2ccf-4db2-8c35-b58d4afbaba6-modified_qxark5.png" alt="" />
                  <p>Recibir</p>
                </div>
              </div>
              <div className="destinatario">
                <div><img className="LogoBizum" src="https://res.cloudinary.com/da7ffijqs/image/upload/v1699571240/Captura_de_pantalla_2023-11-10_000621-modified_d9dbyj.png" alt="" /></div>
                <div className="datostext">
                  <p>¿A quién envías dinero?</p>
                  <p>674 09 45 01</p>
                  <p> Asociación</p>
                </div>
              </div>
              <div className="destinatario">
                <p className="datostext">Dedicatoria</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <ButtonDonate />
      <ScrollArrow/>
    </>
  );
};

export default Donations;
