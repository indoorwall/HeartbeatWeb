import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, ArrowLeft, Bed, Calendar } from 'lucide-react';
import { HOMES, getHomesByRentalType, type RentalType } from '../../data/alojamiento_data';

export default function ProtoAlojamientoHome() {
  const [selectedRentalType, setSelectedRentalType] = React.useState<RentalType | 'Todos'>('Todos');

  const filteredHomes = React.useMemo(() => {
    if (selectedRentalType === 'Todos') return HOMES;
    return getHomesByRentalType(selectedRentalType);
  }, [selectedRentalType]);

  const getRentalTypeBadge = (rentalType: RentalType) => {
    switch (rentalType) {
      case 'Recurrente':
        return 'bg-blue-100 text-blue-800';
      case 'Vacacional':
        return 'bg-green-100 text-green-800';
      case 'Ambos':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-neutral-100 text-neutral-600';
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* HERO */}
      <section className="bg-neutral-900 text-white py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <Link
            to="/prototype/alojamiento"
            className="inline-flex items-center gap-2 text-neutral-300 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft size={20} />
            Volver a Alojamiento
          </Link>

          <h1 className="text-5xl md:text-6xl font-black mb-6">Heartbeat Home</h1>
          <p className="text-xl text-neutral-300 max-w-3xl">
            Casas tecnológicas dentro de proyectos Heartbeat. Vive integrado en
            ecosistemas con gimnasio, comunidad y servicios conectados.
          </p>
        </div>
      </section>

      {/* QUÉ ES */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Qué es Heartbeat Home</h2>
          <p className="text-lg text-neutral-700 mb-6 leading-relaxed">
            No son casas aisladas. Heartbeat Home son unidades de alojamiento
            integradas en proyectos completos donde tienes acceso directo a centros
            deportivos, espacios de coworking, restauración y comunidad.
          </p>
          <p className="text-lg text-neutral-700 leading-relaxed">
            Diseñadas con tecnología integrada, eficiencia energética y estética
            contemporánea. Perfectas tanto para estancias largas como escapadas
            vacacionales.
          </p>
        </div>
      </section>

      {/* TIPO DE ALQUILER - SELECTOR */}
      <section className="py-16 px-4 bg-neutral-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-center">Tipo de alquiler</h2>
          <p className="text-center text-neutral-600 mb-8">
            Elige cómo quieres disfrutar de Heartbeat Home.
          </p>

          {/* TABS */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button
              onClick={() => setSelectedRentalType('Todos')}
              className={`px-6 py-3 rounded-full font-bold transition-all ${
                selectedRentalType === 'Todos'
                  ? 'bg-black text-white'
                  : 'bg-white text-neutral-700 hover:bg-neutral-100'
              }`}
            >
              Todos
            </button>
            <button
              onClick={() => setSelectedRentalType('Recurrente')}
              className={`px-6 py-3 rounded-full font-bold transition-all ${
                selectedRentalType === 'Recurrente'
                  ? 'bg-black text-white'
                  : 'bg-white text-neutral-700 hover:bg-neutral-100'
              }`}
            >
              Alquiler recurrente
            </button>
            <button
              onClick={() => setSelectedRentalType('Vacacional')}
              className={`px-6 py-3 rounded-full font-bold transition-all ${
                selectedRentalType === 'Vacacional'
                  ? 'bg-black text-white'
                  : 'bg-white text-neutral-700 hover:bg-neutral-100'
              }`}
            >
              Alquiler vacacional
            </button>
          </div>

          {/* EXPLICACIÓN DE TIPOS */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-xl p-6 shadow-md border-2 border-transparent hover:border-blue-500 transition-all">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-blue-100 text-blue-900 rounded-full flex items-center justify-center">
                  <Calendar size={24} />
                </div>
                <h3 className="text-xl font-bold">Alquiler recurrente</h3>
              </div>
              <p className="text-neutral-700 mb-4">
                Estancias largas con integración completa en el ecosistema Heartbeat.
                Ideal para nómadas digitales y profesionales.
              </p>
              <ul className="space-y-2 text-sm text-neutral-600">
                <li>• Acceso ilimitado al centro deportivo</li>
                <li>• Espacios de coworking incluidos</li>
                <li>• Comunidad activa</li>
                <li>• Descuentos en restauración</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md border-2 border-transparent hover:border-green-500 transition-all">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-green-100 text-green-900 rounded-full flex items-center justify-center">
                  <Bed size={24} />
                </div>
                <h3 className="text-xl font-bold">Alquiler vacacional</h3>
              </div>
              <p className="text-neutral-700 mb-4">
                Estancias cortas tipo Airbnb. Vive la experiencia Heartbeat durante
                tus vacaciones.
              </p>
              <ul className="space-y-2 text-sm text-neutral-600">
                <li>• Reservas flexibles</li>
                <li>• Acceso temporal al centro</li>
                <li>• Servicios y restauración disponibles</li>
                <li>• Experiencias y eventos incluidos</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CASAS DISPONIBLES */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">
            Casas disponibles
            {selectedRentalType !== 'Todos' && ` - ${selectedRentalType}`}
          </h2>
          <p className="text-neutral-600 mb-8">
            {filteredHomes.length} casa{filteredHomes.length !== 1 ? 's' : ''}{' '}
            encontrada{filteredHomes.length !== 1 ? 's' : ''}
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredHomes.map((home) => (
              <div
                key={home.id}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all border border-neutral-100"
              >
                <div
                  className="h-64 bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${home.image})`,
                  }}
                />
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-bold">{home.name}</h3>
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-xs font-bold ${getRentalTypeBadge(
                        home.rentalType
                      )}`}
                    >
                      {home.rentalType}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 text-neutral-600 text-sm mb-3">
                    <MapPin size={14} />
                    <span>{home.destinationName}</span>
                  </div>

                  <div className="flex items-center gap-2 text-neutral-600 text-sm mb-4">
                    <Bed size={14} />
                    <span>{home.bedrooms} habitaciones</span>
                  </div>

                  <p className="text-neutral-700 mb-4">{home.description}</p>

                  <div className="bg-blue-50 rounded-lg p-3 mb-6">
                    <p className="text-xs font-medium text-blue-900">
                      {home.integration}
                    </p>
                  </div>

                  <div className="flex flex-col gap-2">
                    <button className="w-full bg-black text-white py-3 rounded-full font-bold hover:bg-neutral-800 transition-all">
                      Ver casa
                    </button>
                    <Link to="/prototype/reservar" className="w-full bg-neutral-100 text-black py-3 rounded-full font-bold hover:bg-neutral-200 transition-all block text-center">
                      {home.rentalType === 'Recurrente' ? 'Ver disponibilidad' : 'Reservar'}
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredHomes.length === 0 && (
            <div className="text-center py-12">
              <p className="text-neutral-600 text-lg">
                No hay casas disponibles con este tipo de alquiler.
              </p>
              <button
                onClick={() => setSelectedRentalType('Todos')}
                className="mt-4 text-black underline hover:no-underline"
              >
                Ver todas las casas
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-16 px-4 bg-black text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-black mb-6">
            ¿Quieres vivir en Heartbeat Home?
          </h2>
          <p className="text-lg text-neutral-300 mb-8">
            Te ayudamos a encontrar la casa perfecta dentro del ecosistema que mejor
            se adapte a ti.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-black px-8 py-3 rounded-full font-bold hover:bg-neutral-100 transition-all">
              Contactar
            </button>
            <Link
              to="/prototype/alojamiento"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-bold hover:bg-white/10 transition-all text-center"
            >
              Ver otros tipos de alojamiento
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
