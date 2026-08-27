"use client";

import { useEffect, useMemo, useState } from "react";
import {
  ArrowDown,
  ArrowUpRight,
  Camera,
  ChevronLeft,
  ChevronRight,
  Menu,
  MessageCircle,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

type ArtworkStatus = "Disponible" | "Vendida" | "Consultar";

type Artwork = {
  id: number;
  titulo: string;
  artista: string;
  año: string;
  tecnica: string;
  dimensiones: string;
  descripcion: string;
  imagen: string;
  estado: ArtworkStatus;
  precio?: string;
  formato: "portrait" | "landscape" | "square" | "tall" | "wide";
  layout: string;
};

/*
 * EDITAR LAS OBRAS
 * Reemplazá los textos y la ruta de `imagen` en cada objeto.
 * Las imágenes finales pueden guardarse en /public/artworks/.
 */
const artworks: Artwork[] = [
  {
    id: 1,
    titulo: "Transición",
    artista: "Natalia Barbiera",
    año: "2026",
    tecnica: "Mixta · Acrílico",
    dimensiones: "100 × 100 cm",
    descripcion: "Obra abstracta original de Natalia Barbiera, perteneciente a esta colección privada.",
    imagen: "/artworks/transicion-2026.webp",
    estado: "Consultar",
    formato: "square",
    layout: "work-a",
  },
  {
    id: 2,
    titulo: "Ciudades",
    artista: "Natalia Barbiera",
    año: "2022",
    tecnica: "Mixta · Acrílico",
    dimensiones: "100 × 100 cm",
    descripcion: "Obra abstracta original de Natalia Barbiera, perteneciente a esta colección privada.",
    imagen: "/artworks/ciudades-2022.webp",
    estado: "Consultar",
    formato: "square",
    layout: "work-b",
  },
  {
    id: 3,
    titulo: "Diagonal efímera",
    artista: "Natalia Barbiera",
    año: "2025",
    tecnica: "Mixta · Acrílico",
    dimensiones: "50 × 100 cm",
    descripcion: "Obra abstracta original de Natalia Barbiera, perteneciente a esta colección privada.",
    imagen: "/artworks/diagonal-efimera-2025.webp",
    estado: "Consultar",
    formato: "tall",
    layout: "work-c",
  },
  {
    id: 4,
    titulo: "Dualidades",
    artista: "Natalia Barbiera",
    año: "2024",
    tecnica: "Mixta · Acrílico",
    dimensiones: "100 × 100 cm",
    descripcion: "Obra abstracta original de Natalia Barbiera, perteneciente a esta colección privada.",
    imagen: "/artworks/dualidades-2024.webp",
    estado: "Consultar",
    formato: "square",
    layout: "work-d",
  },
  {
    id: 5,
    titulo: "Encre Noire",
    artista: "Natalia Barbiera",
    año: "2024",
    tecnica: "Mixta · Acrílico",
    dimensiones: "100 × 100 cm",
    descripcion: "Obra abstracta original de Natalia Barbiera, perteneciente a esta colección privada.",
    imagen: "/artworks/encre-noire-2024.webp",
    estado: "Consultar",
    formato: "square",
    layout: "work-e",
  },
  {
    id: 6,
    titulo: "Conectivo",
    artista: "Natalia Barbiera",
    año: "2020",
    tecnica: "Mixta · Acrílico",
    dimensiones: "60 × 80 cm",
    descripcion: "Obra abstracta original de Natalia Barbiera, perteneciente a esta colección privada.",
    imagen: "/artworks/conectivo-2020.webp",
    estado: "Consultar",
    formato: "portrait",
    layout: "work-f",
  },
  {
    id: 7,
    titulo: "Terre",
    artista: "Natalia Barbiera",
    año: "2023",
    tecnica: "Mixta · Acrílico",
    dimensiones: "120 × 60 cm",
    descripcion: "Obra abstracta original de Natalia Barbiera, perteneciente a esta colección privada.",
    imagen: "/artworks/terre-2023.webp",
    estado: "Consultar",
    formato: "wide",
    layout: "work-g",
  },
  {
    id: 8,
    titulo: "Salvatori",
    artista: "Natalia Barbiera",
    año: "2024",
    tecnica: "Mixta · Acrílico",
    dimensiones: "80 × 120 cm",
    descripcion: "Obra abstracta original de Natalia Barbiera, perteneciente a esta colección privada.",
    imagen: "/artworks/salvatori-2024.webp",
    estado: "Consultar",
    formato: "portrait",
    layout: "work-h",
  },
  {
    id: 9,
    titulo: "Reflexión",
    artista: "Natalia Barbiera",
    año: "2022",
    tecnica: "Mixta · Acrílico",
    dimensiones: "60 × 80 cm",
    descripcion: "Obra abstracta original de Natalia Barbiera, perteneciente a esta colección privada.",
    imagen: "/artworks/reflexion-2022.webp",
    estado: "Consultar",
    formato: "landscape",
    layout: "work-i",
  },
  {
    id: 10,
    titulo: "Sísmico",
    artista: "Natalia Barbiera",
    año: "2022",
    tecnica: "Mixta · Acrílico",
    dimensiones: "100 × 100 cm",
    descripcion: "Obra abstracta original de Natalia Barbiera, perteneciente a esta colección privada.",
    imagen: "/artworks/sismico-2022.webp",
    estado: "Consultar",
    formato: "square",
    layout: "work-j",
  },
  {
    id: 11,
    titulo: "Íntegro",
    artista: "Natalia Barbiera",
    año: "2021",
    tecnica: "Mixta · Acrílico",
    dimensiones: "90 × 110 cm",
    descripcion: "Obra abstracta original de Natalia Barbiera, perteneciente a esta colección privada.",
    imagen: "/artworks/integro-2021.webp",
    estado: "Consultar",
    formato: "portrait",
    layout: "work-k",
  },
  {
    id: 12,
    titulo: "Kasbah",
    artista: "Natalia Barbiera",
    año: "2019",
    tecnica: "Mixta · Acrílico",
    dimensiones: "90 × 60 cm",
    descripcion: "Obra abstracta original de Natalia Barbiera, perteneciente a esta colección privada.",
    imagen: "/artworks/kasbah-2019.webp",
    estado: "Consultar",
    formato: "landscape",
    layout: "work-l",
  },
  {
    id: 13,
    titulo: "Laberinto",
    artista: "Natalia Barbiera",
    año: "2023",
    tecnica: "Mixta · Acrílico",
    dimensiones: "80 × 100 cm",
    descripcion: "Obra abstracta original de Natalia Barbiera, perteneciente a esta colección privada.",
    imagen: "/artworks/laberinto-2023.webp",
    estado: "Consultar",
    formato: "portrait",
    layout: "work-m",
  },
  {
    id: 14,
    titulo: "Múltiplos",
    artista: "Natalia Barbiera",
    año: "2021",
    tecnica: "Mixta · Acrílico",
    dimensiones: "100 × 100 cm",
    descripcion: "Obra abstracta original de Natalia Barbiera, perteneciente a esta colección privada.",
    imagen: "/artworks/multiplos-2021.webp",
    estado: "Consultar",
    formato: "square",
    layout: "work-n",
  },
];

const WHATSAPP_NUMBER = "5492215343249";
const INSTAGRAM_URL =
  "https://www.instagram.com/nataliabarbiera?igsi=OGhneG55aXlrejNh";
// Dejá este valor vacío para ocultar la fotografía del artista.
const ARTIST_IMAGE = "";

const navItems = [
  { label: "Obras", href: "#obras" },
  { label: "Sobre la colección", href: "#coleccion" },
  { label: "Contacto", href: "#contacto" },
];

function whatsappUrl(title?: string) {
  const message = title
    ? `Hola, quisiera consultar por la obra “${title}”.`
    : "Hola, quisiera recibir más información sobre la colección.";
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

function ArtworkImage({
  artwork,
  eager = false,
}: {
  artwork: Artwork;
  eager?: boolean;
}) {
  return (
    <img
      src={artwork.imagen}
      alt={`${artwork.titulo}, ${artwork.artista}`}
      loading={eager ? "eager" : "lazy"}
      decoding="async"
    />
  );
}

export default function Home() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const selected = useMemo(
    () => (selectedIndex === null ? null : artworks[selectedIndex]),
    [selectedIndex],
  );

  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>("[data-reveal]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 },
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (selectedIndex === null) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") {
        setSelectedIndex((selectedIndex - 1 + artworks.length) % artworks.length);
      }
      if (event.key === "ArrowRight") {
        setSelectedIndex((selectedIndex + 1) % artworks.length);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [selectedIndex]);

  const showPrevious = () => {
    if (selectedIndex === null) return;
    setSelectedIndex((selectedIndex - 1 + artworks.length) % artworks.length);
  };

  const showNext = () => {
    if (selectedIndex === null) return;
    setSelectedIndex((selectedIndex + 1) % artworks.length);
  };

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="Ir al inicio">
          <span>Natalia</span>
          <span>Barbiera</span>
        </a>

        <nav className="desktop-nav" aria-label="Navegación principal">
          {navItems.map((item) => (
            <a href={item.href} key={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
          <SheetTrigger asChild>
            <button className="menu-button" type="button" aria-label="Abrir menú">
              <Menu aria-hidden="true" />
            </button>
          </SheetTrigger>
          <SheetContent className="mobile-sheet" side="right">
            <SheetTitle className="mobile-sheet-title">Natalia Barbiera</SheetTitle>
            <SheetDescription className="sr-only">
              Navegación principal del sitio
            </SheetDescription>
            <nav className="mobile-nav" aria-label="Navegación móvil">
              {navItems.map((item, index) => (
                <SheetClose asChild key={item.href}>
                  <a href={item.href}>
                    <span>0{index + 1}</span>
                    {item.label}
                  </a>
                </SheetClose>
              ))}
            </nav>
            <div className="mobile-sheet-foot">Colección privada · 14 obras</div>
          </SheetContent>
        </Sheet>
      </header>

      <section className="hero" id="inicio" aria-labelledby="hero-title">
        <div className="hero-copy" data-reveal>
          <p className="eyebrow">Colección privada · Argentina</p>
          <h1 id="hero-title">
            Natalia
            <br />
            <em>Barbiera</em>
          </h1>
          <p className="hero-intro">Catorce obras originales en una exposición privada.</p>
          <a className="discover-link" href="#obras">
            Descubrir la colección
            <ArrowDown aria-hidden="true" />
          </a>
        </div>

        <button
          className="hero-artwork"
          type="button"
          onClick={() => setSelectedIndex(0)}
          aria-label={`Ver ${artworks[0].titulo}`}
          data-reveal
        >
          <ArtworkImage artwork={artworks[0]} eager />
          <span className="hero-artwork-caption">
            <span>{artworks[0].titulo}</span>
            <span>{artworks[0].artista}</span>
          </span>
        </button>

        <div className="hero-index" aria-hidden="true">
          01 <span /> 14
        </div>
      </section>

      <section className="collection-section" id="obras" aria-labelledby="works-title">
        <div className="section-heading" data-reveal>
          <p className="eyebrow">Obras seleccionadas</p>
          <h2 id="works-title">La colección</h2>
          <p>
            Catorce obras abstractas reunidas en un recorrido de color, materia y
            contraste.
          </p>
        </div>

        <div className="artworks-grid">
          {artworks.map((artwork, index) => (
            <article
              className={`artwork-card ${artwork.layout}`}
              key={artwork.id}
              data-reveal
              style={{ "--delay": `${(index % 3) * 80}ms` } as React.CSSProperties}
            >
              <button
                className="artwork-open"
                type="button"
                onClick={() => setSelectedIndex(index)}
                aria-label={`Abrir ${artwork.titulo}`}
              >
                <span className={`artwork-image ${artwork.formato}`}>
                  <ArtworkImage artwork={artwork} />
                  <span className="artwork-hover">
                    <span>Ver obra</span>
                    <ArrowUpRight aria-hidden="true" />
                  </span>
                </span>
                <span className="artwork-meta">
                  <span>
                    <strong>{artwork.titulo}</strong>
                    <small>{artwork.año}</small>
                  </span>
                  <small>{String(index + 1).padStart(2, "0")}</small>
                </span>
              </button>
            </article>
          ))}
        </div>
      </section>

      <section className="about-section" id="coleccion" aria-labelledby="about-title">
        <aside className="about-aside" data-reveal>
          <div className="about-number" aria-hidden="true">
            14
            <span>obras</span>
          </div>
          {ARTIST_IMAGE && (
            <img
              className="artist-photo"
              src={ARTIST_IMAGE}
              alt="Retrato del artista"
              loading="lazy"
              decoding="async"
            />
          )}
        </aside>
        <div className="about-copy" data-reveal>
          <p className="eyebrow">Sobre la colección</p>
          <h2 id="about-title">Una pausa para mirar.</h2>
          <p className="about-lead">
            Observar un cuadro abstracto abre múltiples maneras de interpretación:
            un recorrido visual que, como en un túnel nublado, va despejando
            distintas formas de descubrir la luz y el sentido de la obra.
          </p>
          <div className="about-columns">
            <p>
              La expresividad a través de la pintura es una forma pausada de
              interpretar momentos de la vida. Una obra de arte se ejecuta en
              tiempos variables y puede cambiar desde su proyección hasta su
              finalización, de acuerdo con diferentes estados de ánimo.
            </p>
            <p>
              Un cuadro reúne una variedad de sentimientos en un todo que proyecta
              lo que cada persona comprende al observarlo. La pintura no solo
              significa para mí una forma abstracta de expresión: es la manera más
              compleja y, a la vez, más simple de transmitir y representar una historia.
            </p>
          </div>
          <div className="artist-signature">
            <span>Natalia Barbiera</span>
            <small>Artista visual · Argentina</small>
          </div>
        </div>
      </section>

      <section className="contact-section" id="contacto" aria-labelledby="contact-title">
        <p className="eyebrow" data-reveal>Contacto privado</p>
        <div className="contact-main" data-reveal>
          <h2 id="contact-title">¿Te interesa alguna obra?</h2>
          <p>
            Consultá disponibilidad, precio o información adicional. Respondemos
            cada consulta de manera personal.
          </p>
          <a
            className="primary-contact"
            href={whatsappUrl()}
            target="_blank"
            rel="noreferrer"
          >
            <MessageCircle aria-hidden="true" />
            Escribir por WhatsApp
            <ArrowUpRight aria-hidden="true" />
          </a>
        </div>
        <div className="contact-links" data-reveal>
          <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer">
            <Camera aria-hidden="true" /> @nataliabarbiera
          </a>
        </div>
      </section>

      <footer className="site-footer">
        <div className="footer-brand">Natalia Barbiera</div>
        <div className="footer-links">
          <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer">
            Instagram
          </a>
          <a href={whatsappUrl()} target="_blank" rel="noreferrer">
            WhatsApp
          </a>
        </div>
        <p>© 2026 · Todos los derechos reservados</p>
      </footer>

      <Dialog
        open={selectedIndex !== null}
        onOpenChange={(open) => !open && setSelectedIndex(null)}
      >
        {selected && (
          <DialogContent
            className="artwork-dialog"
            showCloseButton
            aria-describedby="artwork-description"
          >
            <div className="dialog-visual">
              <div className={`dialog-image ${selected.formato}`}>
                <ArtworkImage artwork={selected} eager />
              </div>
              <div className="dialog-navigation">
                <button type="button" onClick={showPrevious} aria-label="Obra anterior">
                  <ChevronLeft aria-hidden="true" />
                  <span>Anterior</span>
                </button>
                <span>
                  {String(selectedIndex! + 1).padStart(2, "0")} / {artworks.length}
                </span>
                <button type="button" onClick={showNext} aria-label="Obra siguiente">
                  <span>Siguiente</span>
                  <ChevronRight aria-hidden="true" />
                </button>
              </div>
            </div>

            <div className="dialog-details">
              <div>
                <p className="eyebrow">Obra {String(selected.id).padStart(2, "0")}</p>
                <DialogTitle>{selected.titulo}</DialogTitle>
                <DialogDescription id="artwork-description">
                  {selected.descripcion}
                </DialogDescription>
              </div>

              <dl className="artwork-specs">
                <div>
                  <dt>Artista</dt>
                  <dd>{selected.artista}</dd>
                </div>
                <div>
                  <dt>Año</dt>
                  <dd>{selected.año}</dd>
                </div>
                <div>
                  <dt>Técnica</dt>
                  <dd>{selected.tecnica}</dd>
                </div>
                <div>
                  <dt>Dimensiones</dt>
                  <dd>{selected.dimensiones}</dd>
                </div>
                <div>
                  <dt>Estado</dt>
                  <dd className={`status status-${selected.estado.toLowerCase()}`}>
                    {selected.estado}
                  </dd>
                </div>
                {selected.precio && (
                  <div>
                    <dt>Precio</dt>
                    <dd>{selected.precio}</dd>
                  </div>
                )}
              </dl>

              <a
                className="dialog-contact"
                href={whatsappUrl(selected.titulo)}
                target="_blank"
                rel="noreferrer"
              >
                Consultar por esta obra
                <ArrowUpRight aria-hidden="true" />
              </a>
            </div>
          </DialogContent>
        )}
      </Dialog>
    </main>
  );
}
