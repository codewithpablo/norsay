import Link from "next/link";
import AmbientTrapAudio from "@/components/AmbientTrapAudio";
import ArtistCarousel from "@/components/ArtistCarousel";

const featuredProducts = [
  {
    name: "Remera Oversize Signature",
    category: "Drop 01",
    image:
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=85",
    price: "$19.990",
  },
  {
    name: "Buzo Crewneck Nocturno",
    category: "Heavy cotton",
    image:
      "https://images.unsplash.com/photo-1523398002811-999ca8dec234?auto=format&fit=crop&w=900&q=85",
    price: "$29.990",
  },
  {
    name: "Gorra Urban Mark",
    category: "Accesorios",
    image:
      "https://images.unsplash.com/photo-1521369909029-2afed882baee?auto=format&fit=crop&w=900&q=85",
    price: "$9.990",
  },
];

const drops = ["Oversize fit", "Algodon pesado", "Edicion limitada"];

const testimonials = [
  {
    name: "@trapqueen",
    text: "La ropa se siente de crew: comoda, pesada y con presencia.",
  },
  {
    name: "@elbeatmaker",
    text: "El buzo tiene la caida justa. Lo uso para estudio y para salir.",
  },
  {
    name: "@urbanvibes",
    text: "NORSAY tiene ese detalle simple que hace que todo combine.",
  },
];

const faqs = [
  {
    question: "Hacen envios a todo el pais?",
    answer: "Si, enviamos con seguimiento online y embalaje protegido.",
  },
  {
    question: "Como elijo mi talle?",
    answer: "Cada prenda incluye medidas reales. El fit es amplio por diseno.",
  },
  {
    question: "Aceptan cambios?",
    answer: "Si, tenes 15 dias desde que recibis el pedido para gestionar cambios.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#080808] text-white selection:bg-[#d7ff4f] selection:text-black">
      <AmbientTrapAudio />

      <nav className="absolute inset-x-0 top-0 z-20 bg-transparent">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-5 py-4">
          <Link href="/" className="text-xl font-black tracking-[0.22em]">
            NORSAY
          </Link>
          <div className="hidden items-center gap-7 text-sm font-medium text-zinc-300 md:flex">
            <Link className="transition hover:text-white" href="#drop">
              Drop
            </Link>
            <Link className="transition hover:text-white" href="#crew">
              Crew
            </Link>
            <Link className="transition hover:text-white" href="#faq">
              FAQ
            </Link>
          </div>
          <Link
            href="#drop"
            className="rounded-full border border-white/70 bg-white/10 px-5 py-2 text-sm font-bold uppercase tracking-wide text-white shadow-lg shadow-black/20 backdrop-blur-md transition hover:bg-white hover:text-black"
          >
            Comprar
          </Link>
        </div>
      </nav>

      <section className="relative h-screen min-h-[620px] overflow-hidden border-b border-white/10">
        <div className="absolute inset-0">
          <img
            src="/crew-hero.png"
            alt="Crew usando ropa NORSAY"
            className="h-full w-full animate-slow-zoom object-cover object-center opacity-85"
          />
          <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          <div className="film-grain absolute inset-0 mix-blend-screen opacity-30" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_18%,rgba(215,255,79,0.18),transparent_28%)]" />
        </div>

        <div className="relative mx-auto grid h-full w-full max-w-7xl items-end gap-8 px-5 pb-8 pt-24 md:grid-cols-[1.1fr_0.9fr] md:pb-10 md:pt-28">
          <div className="max-w-3xl animate-fade-up pb-6 drop-shadow-[0_4px_24px_rgba(0,0,0,0.95)]">
            <p className="mb-5 inline-flex rounded-full border border-[#d7ff4f]/70 bg-[#d7ff4f] px-4 py-1.5 text-xs font-black uppercase tracking-[0.26em] text-black shadow-lg shadow-black/25">
              Drop activo
            </p>
            <h1 className="animate-cinematic-in text-5xl font-black uppercase leading-[0.86] tracking-normal text-white sm:text-6xl md:text-7xl lg:text-8xl">
              #NORSAY
            </h1>
            <p className="mt-5 max-w-xl text-base leading-7 text-zinc-200 sm:text-lg">
              Ropa urbana de la crew: prendas amplias, tonos duros y detalles
              limpios para moverte entre estudio, noche y calle.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link
                href="#drop"
                className="rounded-full bg-white px-7 py-3 text-center text-sm font-black uppercase tracking-wide text-black shadow-xl shadow-black/25 transition hover:-translate-y-0.5 hover:bg-[#d7ff4f]"
              >
                Ver coleccion
              </Link>
              <Link
                href="#crew"
                className="rounded-full border border-white/50 bg-white/10 px-7 py-3 text-center text-sm font-black uppercase tracking-wide text-white shadow-lg shadow-black/20 backdrop-blur-md transition hover:-translate-y-0.5 hover:border-white hover:bg-white/15"
              >
                Conocer la crew
              </Link>
            </div>
          </div>

          <div className="mb-2 grid gap-3 drop-shadow-[0_4px_18px_rgba(0,0,0,0.9)] sm:grid-cols-3 md:mb-6 md:block">
            {drops.map((item, index) => (
              <div
                key={item}
                className={`animate-fade-up rounded-2xl border border-white/20 bg-black/20 px-4 py-3 text-xs font-black uppercase tracking-[0.2em] text-zinc-100 backdrop-blur-sm md:mb-3 ${
                  index === 1
                    ? "animate-delay-100"
                    : index === 2
                      ? "animate-delay-200"
                      : ""
                }`}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="drop" className="trap-section">
        <div className="film-grain absolute inset-0 opacity-20" />
        <div className="relative mx-auto w-full max-w-7xl px-5 py-10">
          <div className="mb-7 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div className="animate-cinematic-in">
              <p className="trap-kicker">
                Nueva coleccion
              </p>
              <h2 className="trap-title">
                Piezas del drop
              </h2>
            </div>
            <p className="max-w-md animate-cinematic-in text-sm leading-6 text-zinc-300 md:text-right">
              Siluetas simples, peso real y una paleta hecha para combinar sin
              pensar demasiado.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {featuredProducts.map((product) => (
              <article
                key={product.name}
                className="group animate-cinematic-in overflow-hidden rounded-3xl border border-white/10 bg-white/[0.055] shadow-2xl shadow-black/30 backdrop-blur-xl transition duration-500 hover:-translate-y-1 hover:border-[#d7ff4f]/40"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-zinc-950 md:aspect-[5/4]">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-cover opacity-85 grayscale-[15%] transition duration-700 group-hover:scale-105 group-hover:opacity-100 group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute left-4 top-4 rounded-full border border-white/15 bg-black/25 px-3 py-1 text-[10px] font-black uppercase tracking-[0.22em] text-[#d7ff4f] backdrop-blur-md">
                    {product.category}
                  </div>
                </div>
                <div className="flex min-h-32 flex-col justify-between p-4">
                  <div>
                    <h3 className="text-xl font-black uppercase leading-tight text-white">
                      {product.name}
                    </h3>
                  </div>
                  <div className="mt-4 flex items-center justify-between gap-4">
                    <span className="text-lg font-black text-white">{product.price}</span>
                    <button className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-black uppercase text-white backdrop-blur-md transition hover:bg-[#d7ff4f] hover:text-black">
                      Comprar
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="crew" className="trap-section">
        <div className="film-grain absolute inset-0 opacity-20" />
        <div className="relative mx-auto grid w-full max-w-7xl gap-8 px-5 py-10 md:grid-cols-[0.8fr_1.2fr]">
          <div className="animate-cinematic-in">
            <p className="trap-kicker">
              La crew
            </p>
            <h2 className="trap-title">
              Hecho para sonar fuerte
            </h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            <p className="trap-panel p-6 text-base leading-7 text-zinc-300">
              NORSAY nace entre artistas, productores y gente que vive la
              cultura urbana desde adentro. Cada prenda busca sentirse directa,
              pesada y facil de usar.
            </p>
            <div className="trap-panel p-6">
              <p className="text-4xl font-black text-[#d7ff4f]">24/7</p>
              <p className="mt-3 text-sm font-bold uppercase tracking-[0.18em] text-zinc-300">
                Uniforme de estudio, calle y noche
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="trap-section">
        <div className="absolute inset-0 bg-[linear-gradient(115deg,rgba(215,255,79,0.08)_0%,transparent_28%,rgba(184,59,47,0.12)_100%)]" />
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white/10 to-transparent opacity-40" />
        <div className="relative mx-auto w-full max-w-7xl px-5 py-10">
          <div className="mb-7 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div className="animate-cinematic-in">
              <p className="text-sm font-black uppercase tracking-[0.24em] text-[#d7ff4f]">
                Artistas
              </p>
              <h2 className="mt-2 text-3xl font-black uppercase sm:text-4xl">
                Suena la crew
              </h2>
            </div>
            <p className="max-w-md animate-cinematic-in text-sm leading-6 text-zinc-300 md:text-right">
              Big M, Dikleo, Alon y Goder en formato preview. Dale play a una
              card y la pagina corta el resto automaticamente.
            </p>
          </div>

          <ArtistCarousel />
        </div>
      </section>

      <section className="trap-section">
        <div className="film-grain absolute inset-0 opacity-20" />
        <div className="relative mx-auto w-full max-w-7xl px-5 py-10">
          <div className="mb-7 flex items-end justify-between gap-4">
            <div className="animate-cinematic-in">
              <p className="trap-kicker">Comunidad</p>
              <h2 className="trap-title">La calle opina</h2>
            </div>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <figure
                key={testimonial.name}
                className="trap-panel animate-cinematic-in p-5 transition duration-500 hover:-translate-y-1 hover:border-[#d7ff4f]/40"
              >
                <blockquote className="text-lg font-bold leading-7 text-zinc-100">
                  {testimonial.text}
                </blockquote>
                <figcaption className="mt-5 text-sm font-black uppercase tracking-[0.2em] text-[#d7ff4f]">
                  {testimonial.name}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="trap-section">
        <div className="film-grain absolute inset-0 opacity-20" />
        <div className="relative mx-auto grid w-full max-w-7xl gap-8 px-5 py-10 md:grid-cols-[0.7fr_1.3fr]">
          <div className="animate-cinematic-in">
            <p className="trap-kicker">
              FAQ
            </p>
            <h2 className="trap-title">
              Antes del pedido
            </h2>
          </div>
          <div className="trap-panel overflow-hidden">
            {faqs.map((faq) => (
              <div key={faq.question} className="border-b border-white/15 p-5 last:border-b-0">
                <h3 className="text-lg font-black uppercase">{faq.question}</h3>
                <p className="mt-2 max-w-2xl text-sm leading-6 text-zinc-300">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-black px-5 py-8 text-center text-sm font-bold uppercase tracking-[0.18em] text-zinc-500">
        © {new Date().getFullYear()} #NORSAY. La crew viste diferente.
      </footer>
    </main>
  );
}
