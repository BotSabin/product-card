

function App() {


  return (
    <main className="w-full min-h-screen justify-center items-center flex px-4">
      <section className="flex flex-col md:flex-row w-full max-w-[360px] md:max-w-[550px] bg-white rounded-2xl">

        <div className="md:flex-[1.5]">
          <picture>
          <source srcSet="image-product-mobile.jpg" media="(max-width: 767px)" />
          <img src="image-product-desktop.jpg" alt="product-image" className="rounded-t-2xl md:rounded-l-2xl md:rounded-tr-none w-full h-full" />
          </picture>
        
        </div>
        <div className="flex flex-col md:flex-1 px-5 py-5 md:py-6 gap-y-3 md:gap-y-5">
          <p className="uppercase font-montserrat tracking-[5px] text-darkgrayish text-sm">perfume</p>
          <h1 className="font-fraunces text-3xl font-bold text-verydarkblue">Gabrielle Essence Eau De Parfum</h1>
          <p className="text-darkgrayish font-montserrat text-sm font-medium
          leading-[22px]">A floral, solar and voluptuos interpretation composed by Olivier Polge,
            Perfumer-Creator for the House of CHANEL.
          </p>
          <div className="flex items-center gap-x-5">
            <p className="text-3xl font-bold text-darkcyan font-fraunces">$149.99</p>
            <del className="text-darkgrayish text-sm font-montserrat">$169.99</del>
          </div>
          <button className="bg-darkcyan flex items-center justify-center py-3 rounded-lg text-sm
          text-white font-medium font-montserrat gap-x-3 hover:bg-darkcyangreen transform-colors duration-300">
            <img src="icon-cart.svg" alt="cart" />
            Add to Cart
          </button>
        </div>

      </section>
    </main>
  )
}

export default App
