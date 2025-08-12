export function Footer() {
    return (
      <footer className="bg-neutral-900 text-white mt-10">
        <div className="container py-10 grid md:grid-cols-4 gap-8">
          <div>
            <div className="h-9 w-9 rounded-2xl bg-white text-neutral-900 grid place-items-center font-bold">OL</div>
            <p className="mt-3 text-white/80 text-sm">Plataforma de turismo de Olímpia — protótipo.</p>
          </div>
          <div>
            <div className="font-semibold">Explorar</div>
            <ul className="mt-3 space-y-2 text-white/80 text-sm">
              <li>Atrações</li>
              <li>Hospedagens</li>
              <li>Restaurantes</li>
              <li>Eventos</li>
            </ul>
          </div>
          <div>
            <div className="font-semibold">Legal</div>
            <ul className="mt-3 space-y-2 text-white/80 text-sm">
              <li>Privacidade</li>
              <li>Termos</li>
            </ul>
          </div>
          <div>
            <div className="font-semibold">Contato</div>
            <ul className="mt-3 space-y-2 text-white/80 text-sm">
              <li>Email: contato@exemplo.com</li>
              <li>Atendimento: seg–sex, 9h–18h</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10">
          <div className="container py-6 text-center text-white/60 text-xs">
            © {new Date().getFullYear()} Olímpia Turismo. Todos os direitos reservados.
          </div>
        </div>
      </footer>
    )
  }
  