import * as React from 'react'
import Page from '../components/layout/Page'
import Container from '../components/layout/Container'
import styled from '../utils/styled'

/*
const countDownDate = new Date("Jan 5, 2022 15:37:25").getTime();

const x = setInterval(function () {
  const now = new Date().getTime();
  const distance = countDownDate - now;
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  document.getElementById("demo").innerHTML = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ";
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "BU DEĞİL MİYMİŞ?";
  }
}, 1000);
 */

function IndexPage() {
  return (
    <Page>
      <Container>
        <PageContent>
          <h1>Slap Bet for Toprak</h1>
          <p>
            Bir gün bilkentin kampüsünde yürüyorum karşımda bir çocuk dünya başına yıkılmmış gibi üzgün. "Çocuk" dedim, "neyin var?". Dayı, dedi. Dayı beni öldürdüler. Dedim bilkentte herkes ya ölmüştür ya da mühendislik okumuyordur. Öyle değil dedi mesele ölmek değil. Neymiş mesele biliyor musun? Mesele ölmek değilmiş,
          </p>
          <h3>
            MESELE DOST BİLDİĞİN EN GÜVENDİĞİN İNSANIN ELİNDEN ÖLMEKMİŞ.
          </h3>
          <p>
            Şimdiii sana bu siteyi bi anlatayım. Bu sayfa hoşgeldin sayfası.
          </p>
          <p>
            Havalı sözler dışında bu sayfada bir kaç tane geri sayım saati bulabilirsin. Hangisinin gerçek olduğunu asla bilemeyeceksin böylece korku her an yanında olacak.
          </p>
          <p id="demo"></p>
          <p>
            Ayrıca bir sayfada beraber fotoğraaflarımı bulabilirsin, öbür sayfada ise bu önemli ana nasıl hazırlandığımı inceleyebilirsin.
          </p>
          <p>Bu sitede gezinmenin keyfini çıkar, artık ne kadar çıkarabilirsen</p>
        </PageContent>
      </Container>
    </Page>
  )
}

export default IndexPage

const PageContent = styled('article')`
  max-width: ${props => props.theme.widths.md};
  margin: 0 auto;
  line-height: 1.6;

  a {
    color: ${props => props.theme.colors.brand};
  }

  h1,
  h2,
  h3,
  h4 {
    margin-bottom: 0.5rem;
    font-family: ${props => props.theme.fonts.headings};
    line-height: 1.25;
  }
`
