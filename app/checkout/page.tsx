export default function CheckoutPage({ searchParams }: { searchParams: { sku?: string }}) {
    return (
      <div className="container py-10 md:py-14">
        <h1 className="text-2xl md:text-3xl font-bold">Checkout (placeholder)</h1>
        <p className="mt-2 text-neutral-700">SKU selecionado: <b>{searchParams.sku ?? '—'}</b></p>
        <form className="mt-6 grid md:grid-cols-2 gap-6">
          <div className="card p-6 space-y-3">
            <h2 className="font-semibold">Dados do comprador</h2>
            <input className="w-full rounded-xl border p-2" placeholder="Nome completo" />
            <input className="w-full rounded-xl border p-2" placeholder="E-mail" />
            <input className="w-full rounded-xl border p-2" placeholder="Telefone" />
          </div>
          <div className="card p-6 space-y-3">
            <h2 className="font-semibold">Pagamento (mock)</h2>
            <input className="w-full rounded-xl border p-2" placeholder="Número do cartão" />
            <div className="grid grid-cols-2 gap-3">
              <input className="rounded-xl border p-2" placeholder="Validade" />
              <input className="rounded-xl border p-2" placeholder="CVV" />
            </div>
            <button className="mt-2 rounded-xl bg-[hsl(var(--brand))] text-white px-4 py-3 font-semibold">Pagar</button>
          </div>
        </form>
      </div>
    )
  }