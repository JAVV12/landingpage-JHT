export default function Page() {
  return (
    <main className="min-h-screen bg-white">
      {/* Portada (Hero) */}
      <section className="relative bg-dark-500 py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-6">
            <span className="inline-flex items-center px-4 py-2 bg-accent-500 text-dark-600 rounded-full text-sm font-medium">
              ⭐ 4.7 de 487 reseñas
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-neutral-50 mb-6 leading-tight">
            ¿Listo para liberar tu flujo de caja en 90 días con un método probado y auténtico?
          </h1>
          <p className="text-xl md:text-2xl text-neutral-100 mb-8 max-w-4xl mx-auto leading-relaxed">
            Construye una marca que inspira confianza, ordena tus finanzas diarias y vuelve predecible tu caja sin endeudarte.
          </p>
          <div className="bg-neutral-50 rounded-xl p-6 shadow-lg mb-8 max-w-md mx-auto">
            <div className="text-2xl font-bold text-dark-600 mb-2">Mentoría 1:1 – 3 meses – USD $997</div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10 max-w-2xl mx-auto">
            <div className="bg-accent-500 text-dark-600 px-4 py-3 rounded-lg font-semibold text-sm">100% ONLINE</div>
            <div className="bg-neutral-50 text-dark-600 px-4 py-3 rounded-lg font-semibold text-sm">INICIO EN 48H</div>
            <div className="bg-accent-600 text-neutral-50 px-4 py-3 rounded-lg font-semibold text-sm">PAGO SEGURO</div>
            <div className="bg-dark-600 text-neutral-50 px-4 py-3 rounded-lg font-semibold text-sm">GARANTÍA 30 DÍAS</div>
          </div>
          <a
            href="https://wa.me/123456789?text=Quiero%20información%20sobre%20la%20mentoría%20para%20liberar%20mi%20flujo%20de%20caja"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-accent-500 hover:bg-accent-600 text-dark-600 font-bold py-4 px-10 rounded-xl text-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            Reserva tu mentoría ahora
          </a>
        </div>
      </section>

      {/* Sección Problema */}
      <section className="py-20 px-4 bg-neutral-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-dark-600 mb-6">
                ¿Tus ventas crecen, pero la caja no alcanza?
              </h2>
              <p className="text-lg text-dark-500 leading-relaxed">
                Tu pyme factura entre 30 y 500 millones/mes, pero los cobros se quedan en el camino, los gastos fijos presionan y cada quincena es un incendio. La falta de visibilidad diaria, políticas de cobro débiles y decisiones sin datos bloquean tu crecimiento. Y lo peor: esa tensión se refleja en tu marca; el cliente percibe desorden y aplaza la compra.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl border border-dark-200">
              <div className="text-dark-700 font-semibold text-lg mb-4">La realidad de muchas pymes</div>
              <ul className="text-dark-600 space-y-2">
                <li>• Cobros lentos e impredecibles</li>
                <li>• Gastos fijos que ahogan el margen</li>
                <li>• Decisiones basadas en intuición</li>
                <li>• Marca que no inspira confianza</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Sección Agitación */}
      <section className="py-20 px-4 bg-dark-500">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-50 mb-8">
            El costo de seguir sin control de caja
          </h2>
          <p className="text-lg text-neutral-100 leading-relaxed">
            Cada día sin control de caja erosiona margen, equipo y reputación. Los proveedores se impacientan, los bancos te encarecen, el inventario se mueve por intuición y el marketing pierde impacto porque el mercado no confía en una marca que no proyecta solidez. El estrés del "¿alcanza para la nómina?" te roba foco estratégico y frena las oportunidades que sí te harían crecer.
          </p>
        </div>
      </section>

      {/* Sección Solución/Programa */}
      <section className="py-20 px-4 bg-neutral-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-dark-600 mb-4">
              Programa de Mentoría 1:1 – Libera tu caja en 90 días
            </h2>
            <p className="text-xl text-dark-500">
              Trabajamos contigo, semana a semana, para instalar disciplina financiera y una narrativa de marca coherente con tu operación.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-dark-600 mb-6">Incluye (3 meses):</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="bg-accent-500 text-dark-600 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">✓</span>
                  <span className="text-dark-700">Diagnóstico 360° de caja e identidad de marca</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-accent-500 text-dark-600 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">✓</span>
                  <span className="text-dark-700">Proyección de 13 semanas + tablero en vivo de cashflow</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-accent-500 text-dark-600 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">✓</span>
                  <span className="text-dark-700">Calendario de cobros con scripts y secuencias</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-accent-500 text-dark-600 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">✓</span>
                  <span className="text-dark-700">Renegociación con proveedores y priorización de pagos</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-accent-500 text-dark-600 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">✓</span>
                  <span className="text-dark-700">Política de inventario/servicios rentable</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-accent-500 text-dark-600 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">✓</span>
                  <span className="text-dark-700">12 sesiones 1:1 + soporte por WhatsApp</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-accent-500 text-dark-600 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">✓</span>
                  <span className="text-dark-700">KPIs diarios y reporte quincenal</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-xl border border-dark-200">
              <h3 className="text-xl font-bold text-dark-700 mb-4">Resultados esperados:</h3>
              <ul className="space-y-3 text-dark-600">
                <li>• Caja positiva y predecible</li>
                <li>• Pagos a tiempo y ordenados</li>
                <li>• Menor estrés directivo</li>
                <li>• Decisiones con datos reales</li>
                <li>• Marca que transmite confianza y convierte</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Sección Cómo Funciona */}
      <section className="py-20 px-4 bg-dark-500">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-50 text-center mb-12">
            Cómo funciona la mentoría
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-accent-500 text-dark-600 w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">1</div>
              <h3 className="font-semibold text-neutral-50 mb-2">Onboarding</h3>
              <p className="text-neutral-100">48 horas de diagnóstico inicial</p>
            </div>
            <div className="text-center">
              <div className="bg-accent-500 text-dark-600 w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">2</div>
              <h3 className="font-semibold text-neutral-50 mb-2">Sesiones semanales</h3>
              <p className="text-neutral-100">60-90 min de trabajo enfocado</p>
            </div>
            <div className="text-center">
              <div className="bg-accent-500 text-dark-600 w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">3</div>
              <h3 className="font-semibold text-neutral-50 mb-2">Tareas accionables</h3>
              <p className="text-neutral-100">Implementación entre sesiones</p>
            </div>
            <div className="text-center">
              <div className="bg-accent-500 text-dark-600 w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">4</div>
              <h3 className="font-semibold text-neutral-50 mb-2">Seguimiento</h3>
              <p className="text-neutral-100">Revisión quincenal y plan de continuidad</p>
            </div>
          </div>
          <div className="text-center mt-12">
            <p className="text-lg text-neutral-100 bg-dark-600 p-6 rounded-xl shadow-sm">
              Modalidad 100% online con soporte continuo por WhatsApp
            </p>
          </div>
        </div>
      </section>

      {/* Sección Garantía */}
      <section className="py-20 px-4 bg-neutral-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-dark-600 mb-6">
            Garantía 30 días
          </h2>
          <div className="bg-white p-8 rounded-xl shadow-lg border border-dark-200">
            <p className="text-xl text-dark-700 leading-relaxed">
              Prueba 30 días. Si no percibes claridad de caja y un plan semanal accionable, te devolvemos el dinero.
            </p>
          </div>
        </div>
      </section>

      {/* Sección Inversión */}
      <section className="py-20 px-4 bg-dark-500">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-50 text-center mb-12">
            Inversión
          </h2>
          <p className="text-xl text-neutral-100 text-center mb-12">
            USD $997 (opción 2 cuotas de USD $549). 10% OFF por pago total anticipado.
          </p>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-xl border-2 border-accent-500 relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-accent-500 text-dark-600 px-4 py-1 rounded-full text-sm font-semibold">Mejor valor</span>
              </div>
              <h3 className="text-2xl font-bold text-dark-600 mb-4">Pago único</h3>
              <div className="text-3xl font-bold text-accent-600 mb-6">USD $897</div>
              <p className="text-dark-600 mb-6">Ahorra USD $100 con pago anticipado</p>
              <a
                href="https://wa.me/123456789?text=Quiero%20información%20sobre%20la%20mentoría%20para%20liberar%20mi%20flujo%20de%20caja"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-accent-500 hover:bg-accent-600 text-dark-600 font-semibold py-3 px-8 rounded-lg transition-colors duration-300 w-full text-center"
              >
                Elegir pago único
              </a>
            </div>
            <div className="bg-dark-600 p-8 rounded-xl border-2 border-dark-400">
              <h3 className="text-2xl font-bold text-neutral-50 mb-4">Pago en cuotas</h3>
              <div className="text-3xl font-bold text-accent-500 mb-6">USD $549 x 2</div>
              <p className="text-neutral-100 mb-6">Facilita tu inversión con dos pagos</p>
              <a
                href="https://wa.me/123456789?text=Quiero%20información%20sobre%20la%20mentoría%20para%20liberar%20mi%20flujo%20de%20caja"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-accent-500 hover:bg-accent-600 text-dark-600 font-semibold py-3 px-8 rounded-lg transition-colors duration-300 w-full text-center"
              >
                Elegir cuotas
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Sección Final / CTA de cierre */}
      <section className="py-20 px-4 bg-dark-500 text-neutral-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Reserva tu cupo hoy y empieza a liberar tu flujo de caja en 90 días mientras construyes una marca auténtica que el mercado prefiere.
          </h2>
          <a
            href="https://wa.me/123456789?text=Quiero%20información%20sobre%20la%20mentoría%20para%20liberar%20mi%20flujo%20de%20caja"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-accent-500 text-dark-600 font-bold py-4 px-10 rounded-xl text-xl hover:bg-accent-600 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            Quiero liberar mi flujo de caja
          </a>
        </div>
      </section>
    </main>
  );
}

