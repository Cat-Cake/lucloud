import Header from "../Coponents/Header";

const Page404 = () => {
  return (
      <main>
          <Header />
          <section className={'error'}>
              <p className={'error-code'}><span>Oups ! Page404</span></p>
          </section>
      </main>
  )
}

export default Page404