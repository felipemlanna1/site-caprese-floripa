import { useState, useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  WhatsappLogo, Phone, MapPin, Clock, Wine, FireSimple,
  CookingPot, Leaf, Star, InstagramLogo, ArrowRight,
  CalendarBlank, Users, Certificate
} from '@phosphor-icons/react'
import './index.css'

const WHATSAPP = 'https://wa.me/554832232321?text=Olá! Gostaria de fazer uma reserva no Caprese.'
const PHONE = '(48) 3223-2321'
const ADDRESS = 'Praça Olívio Amorim, 10 — Centro, Florianópolis/SC'
const INSTAGRAM = 'https://instagram.com/capresefloripa'
const HOURS = 'Todos os dias, 18h às 23h30'

function Reveal({ children, delay = 0, className = '' }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const links = [
    { label: 'História', href: '#historia' },
    { label: 'Cardápio', href: '#cardapio' },
    { label: 'Experiência', href: '#experiencia' },
    { label: 'Galeria', href: '#galeria' },
    { label: 'Avaliações', href: '#avaliacoes' },
    { label: 'Contato', href: '#contato' },
  ]

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <a href="#" className="navbar-brand">
          <img src="./images/logo.png" alt="Caprese Floripa" />
          <span className="navbar-brand-text">Caprese</span>
        </a>

        <div className="navbar-links">
          {links.map(l => (
            <a key={l.href} href={l.href} className="navbar-link">{l.label}</a>
          ))}
          <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="navbar-cta">
            <WhatsappLogo size={14} weight="fill" />
            Reservar
          </a>
        </div>

        <button
          className={`menu-toggle ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <span /><span /><span />
        </button>
      </nav>

      <div className={`mobile-nav ${menuOpen ? 'open' : ''}`}>
        {links.map(l => (
          <a key={l.href} href={l.href} className="mobile-nav-link" onClick={() => setMenuOpen(false)}>
            {l.label}
          </a>
        ))}
        <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ marginTop: 20 }}>
          <WhatsappLogo size={18} weight="fill" />
          Reservar Mesa
        </a>
      </div>
    </>
  )
}

function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg">
        <img src="./images/hero-pizza.jpg" alt="Pizza artesanal Caprese" />
      </div>
      <div className="hero-content">
        <Reveal>
          <div className="hero-badge">
            <span className="hero-badge-dot" />
            Desde 1990 — Tradição Italiana em Floripa
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <h1>
            A arte da pizza<br />
            no <em>forno a lenha</em>
          </h1>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="hero-subtitle">
            Fermentação natural, farinha italiana tipo 00, molho de tomates frescos descascados à mão.
            Cada pizza é uma celebração da gastronomia italiana no coração de Florianópolis.
          </p>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="hero-actions">
            <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="btn-primary">
              <WhatsappLogo size={18} weight="fill" />
              Reservar Mesa
            </a>
            <a href="#cardapio" className="btn-outline">
              Ver Cardápio
              <ArrowRight size={16} />
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.4}>
          <div className="hero-info">
            <div className="hero-info-item">
              <MapPin size={16} weight="duotone" />
              <span>Centro — Florianópolis</span>
            </div>
            <div className="hero-info-item">
              <Clock size={16} weight="duotone" />
              <span>18h às 23h30</span>
            </div>
            <div className="hero-info-item">
              <Star size={16} weight="fill" />
              <span>4.7 — 2.500+ avaliações</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function History() {
  return (
    <section className="history" id="historia">
      <div className="container">
        <div className="history-grid">
          <Reveal>
            <div className="history-image">
              <img src="./images/forno-lenha.jpg" alt="Forno a lenha Caprese" />
            </div>
          </Reveal>

          <div>
            <Reveal>
              <div className="section-label">Nossa História</div>
              <div className="history-year">1990</div>
              <h2 className="section-title">
                Uma paixão italiana que nasceu em <em>Florianópolis</em>
              </h2>
            </Reveal>

            <Reveal delay={0.15}>
              <p className="history-text">
                Tudo começou com Dona Solange, uma das primeiras pizzaiolos de Florianópolis,
                que ensinou a Alexandre Di Bernardi o segredo da massa perfeita. Em 1990,
                Alexandre abriu uma das primeiras mini-pizzas da cidade. Em 2004, nasceu a
                Cantina Di Bernardi, que em 2019 foi modernizada e renomeada Caprese Pizza & Pasta.
              </p>
            </Reveal>

            <Reveal delay={0.25}>
              <p className="history-text" style={{ marginTop: 16 }}>
                Em novembro de 2024, o Caprese iniciou uma nova fase sob a direção de
                Fernando Bitencourt Espindola, com mais de 35 anos de experiência
                no setor gastronômico, trazendo novos sabores sem perder a alma italiana.
              </p>
            </Reveal>

            <Reveal delay={0.35}>
              <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ marginTop: 32 }}>
                <CalendarBlank size={18} weight="duotone" />
                Agendar Visita
              </a>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}

function Cardapio() {
  const pratos = [
    {
      category: 'Especialidade',
      title: 'Cordeiro Inesquecível',
      desc: 'Marinado por 24 horas, assado no forno a lenha por 16 horas. Servido com espaguete artesanal ao molho de manteiga e sálvia.',
      image: './images/cordeiro.jpg',
    },
    {
      category: 'Pizzas',
      title: 'Pizza Filetto',
      desc: 'Massa de fermentação natural com farinha tipo 00 italiana, muçarela de búfala, tomate fresco e manjericão do nosso jardim.',
      image: './images/hero-pizza.jpg',
    },
    {
      category: 'Massas',
      title: 'Massas Artesanais',
      desc: 'Preparadas diariamente com ingredientes frescos. Opções sem glúten disponíveis. Do fettuccine ao nhoque, cada receita conta uma história.',
      image: './images/massa-artesanal.jpg',
    },
    {
      category: 'Sobremesas',
      title: 'Tiramisù della Casa',
      desc: 'Receita tradicional com mascarpone importado, café espresso e cacau em pó. O final perfeito para uma experiência italiana.',
      image: './images/tiramisu.jpg',
    },
    {
      category: 'Vinhos',
      title: 'Carta de Vinhos',
      desc: 'Seleção curada de rótulos italianos e nacionais. Vinhos de safras especiais harmonizados com cada prato do cardápio.',
      image: './images/vinho.jpg',
    },
    {
      category: 'Aperitivos',
      title: 'Schiaccina & Antipasti',
      desc: 'Entradas que abrem o apetite com sabores mediterrâneos. Focaccia artesanal, bruschetta e tábua de frios selecionados.',
      image: './images/ambiente.jpg',
    },
  ]

  return (
    <section className="cardapio" id="cardapio">
      <div className="container">
        <Reveal>
          <div className="section-label">Cardápio</div>
          <h2 className="section-title">
            Sabores que contam<br /><em>histórias</em>
          </h2>
        </Reveal>

        <div className="cardapio-grid">
          {pratos.map((prato, i) => (
            <Reveal key={prato.title} delay={i * 0.1}>
              <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="cardapio-card">
                <div className="cardapio-card-image">
                  <img src={prato.image} alt={prato.title} />
                </div>
                <div className="cardapio-card-content">
                  <div className="cardapio-card-category">{prato.category}</div>
                  <h3 className="cardapio-card-title">{prato.title}</h3>
                  <p className="cardapio-card-desc">{prato.desc}</p>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function Experience() {
  const features = [
    { icon: FireSimple, title: 'Forno a Lenha', desc: 'Cada pizza assada no forno a lenha tradicional, atingindo 450°C para a crocância perfeita.' },
    { icon: Leaf, title: 'Fermentação Natural', desc: 'Massa com fermentação lenta de 48h, sem aditivos. Farinha tipo 00 importada da Itália.' },
    { icon: Wine, title: 'Carta de Vinhos', desc: 'Rótulos selecionados de vinícolas italianas e catarinenses, harmonizados com cada prato.' },
    { icon: CookingPot, title: 'Tudo Artesanal', desc: 'Molho de tomates frescos descascados à mão, massas feitas diariamente, receitas centenárias.' },
  ]

  return (
    <section className="experience" id="experiencia">
      <div className="container">
        <div className="experience-grid">
          <div>
            <Reveal>
              <div className="section-label">A Experiência</div>
              <h2 className="section-title">
                Não é apenas uma refeição,<br />é uma <em>viagem à Itália</em>
              </h2>
            </Reveal>

            <div className="experience-features">
              {features.map((f, i) => (
                <Reveal key={f.title} delay={i * 0.1}>
                  <div className="experience-feature">
                    <div className="experience-feature-icon">
                      <f.icon size={22} weight="duotone" />
                    </div>
                    <div>
                      <h4>{f.title}</h4>
                      <p>{f.desc}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal delay={0.2}>
            <div className="experience-image">
              <img src="./images/ambiente.jpg" alt="Ambiente Caprese Floripa" />
              <div className="experience-image-badge">
                <span className="number">35+</span>
                <span className="label">Anos de tradição</span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

function Gallery() {
  const images = [
    { src: './images/ambiente.jpg', alt: 'Ambiente do restaurante' },
    { src: './images/hero-pizza.jpg', alt: 'Pizza artesanal' },
    { src: './images/cordeiro.jpg', alt: 'Cordeiro inesquecível' },
    { src: './images/massa-artesanal.jpg', alt: 'Massa artesanal' },
    { src: './images/vinho.jpg', alt: 'Carta de vinhos' },
    { src: './images/tiramisu.jpg', alt: 'Tiramisù' },
    { src: './images/forno-lenha.jpg', alt: 'Forno a lenha' },
  ]

  return (
    <section className="gallery" id="galeria">
      <div className="container">
        <Reveal>
          <div className="section-label">Galeria</div>
          <h2 className="section-title">Momentos que ficam na <em>memória</em></h2>
        </Reveal>

        <div className="gallery-grid">
          {images.slice(0, 5).map((img, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <div className="gallery-item">
                <img src={img.src} alt={img.alt} />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function Reviews() {
  const reviews = [
    {
      text: 'Uma das melhores pizzas que já comi na vida. Pedi a Caprese e a de Filé com Catupiry. O ambiente é encantador, no centro de Florianópolis, com mesas ao ar livre e salão climatizado. Decoração de bom gosto. Nota 10 no atendimento.',
      author: 'Carolina M.',
      rating: 5,
    },
    {
      text: 'Experiência incrível. Tudo impecável — atendimento, comida e ambiente. É um espaço que conquistou meu coração e vou voltar inúmeras vezes. O cordeiro assado por 16 horas é divino.',
      author: 'Ricardo S.',
      rating: 5,
    },
    {
      text: 'Restaurante aconchegante com gastronomia refinada e reconfortante. Ótimo atendimento. As massas são maravilhosas e as porções generosas. Carta de vinhos bem selecionada.',
      author: 'Fernanda L.',
      rating: 5,
    },
  ]

  return (
    <section className="reviews" id="avaliacoes">
      <div className="container">
        <div className="reviews-header">
          <div>
            <Reveal>
              <div className="section-label">Avaliações</div>
              <h2 className="section-title">O que dizem nossos <em>clientes</em></h2>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <div className="reviews-score">
              <div className="reviews-score-number">4.7</div>
              <div className="reviews-score-meta">
                <div className="reviews-stars">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={18} weight={i < 4 ? 'fill' : 'duotone'} />
                  ))}
                </div>
                <div className="reviews-count">2.567 avaliações no Google</div>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="reviews-grid">
          {reviews.map((review, i) => (
            <Reveal key={i} delay={i * 0.12}>
              <div className="review-card">
                <div className="review-card-quote">"</div>
                <div className="review-card-stars">
                  {[...Array(review.rating)].map((_, j) => (
                    <Star key={j} size={14} weight="fill" />
                  ))}
                </div>
                <p className="review-card-text">{review.text}</p>
                <div className="review-card-author">{review.author}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function CtaSection() {
  return (
    <section className="cta-section">
      <div className="container">
        <Reveal>
          <h2>Pronto para uma experiência<br /><em>inesquecível</em>?</h2>
          <p>
            Reserve sua mesa e venha conhecer o sabor autêntico da Itália
            no coração de Florianópolis.
          </p>
          <div className="cta-actions">
            <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="btn-primary">
              <WhatsappLogo size={18} weight="fill" />
              Reservar pelo WhatsApp
            </a>
            <a href={`tel:${PHONE.replace(/\D/g, '')}`} className="btn-outline">
              <Phone size={18} weight="duotone" />
              Ligar: {PHONE}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function Contact() {
  const items = [
    { icon: MapPin, title: 'Endereço', text: ADDRESS },
    { icon: Clock, title: 'Horário', text: HOURS },
    { icon: Phone, title: 'Telefone', text: PHONE },
    { icon: Users, title: 'Reservas', text: 'WhatsApp: (48) 3223-2321' },
  ]

  return (
    <section className="contact" id="contato">
      <div className="container">
        <Reveal>
          <div className="section-label">Localização</div>
          <h2 className="section-title">Venha nos <em>visitar</em></h2>
        </Reveal>

        <div className="contact-grid">
          <div className="contact-info">
            {items.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.1}>
                <div className="contact-item">
                  <div className="contact-item-icon">
                    <item.icon size={20} weight="duotone" />
                  </div>
                  <div>
                    <h4>{item.title}</h4>
                    <p>{item.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}

            <Reveal delay={0.4}>
              <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ marginTop: 16 }}>
                <WhatsappLogo size={18} weight="fill" />
                Reservar Mesa
              </a>
            </Reveal>
          </div>

          <Reveal delay={0.2}>
            <div className="contact-map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3535.9!2d-48.5505!3d-27.5969!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjfCsDM1JzQ4LjkiUyA0OMKwMzMnMDEuOCJX!5e0!3m2!1spt-BR!2sbr!4v1"
                title="Localização Caprese Floripa"
                loading="lazy"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <div className="footer-brand-text">Caprese Floripa</div>
            <p className="footer-brand-desc">
              Pizza & pasta artesanal no forno a lenha. Gastronomia italiana com alma
              catarinense desde 1990. Centro de Florianópolis.
            </p>
          </div>

          <div>
            <div className="footer-title">Navegação</div>
            <ul className="footer-links">
              <li><a href="#historia">Nossa História</a></li>
              <li><a href="#cardapio">Cardápio</a></li>
              <li><a href="#experiencia">Experiência</a></li>
              <li><a href="#galeria">Galeria</a></li>
              <li><a href="#avaliacoes">Avaliações</a></li>
              <li><a href="#contato">Contato</a></li>
            </ul>
          </div>

          <div>
            <div className="footer-title">Contato</div>
            <ul className="footer-links">
              <li><a href={`tel:${PHONE.replace(/\D/g, '')}`}>{PHONE}</a></li>
              <li><a href={WHATSAPP} target="_blank" rel="noopener noreferrer">WhatsApp</a></li>
              <li><a href={INSTAGRAM} target="_blank" rel="noopener noreferrer">@capresefloripa</a></li>
              <li><a>{ADDRESS}</a></li>
              <li><a>{HOURS}</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2026 Caprese Floripa — Todos os direitos reservados</span>
          <div className="footer-social">
            <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer">
              <InstagramLogo size={20} weight="regular" />
            </a>
            <a href={WHATSAPP} target="_blank" rel="noopener noreferrer">
              <WhatsappLogo size={20} weight="regular" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

function WhatsAppFloat() {
  return (
    <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="whatsapp-float">
      <WhatsappLogo size={28} weight="fill" />
    </a>
  )
}

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <History />
        <Cardapio />
        <Experience />
        <Gallery />
        <Reviews />
        <CtaSection />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  )
}
