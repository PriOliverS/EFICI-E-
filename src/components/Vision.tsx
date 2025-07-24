import React from 'react';
import { Eye, Target, Compass, Globe } from 'lucide-react';

export const Vision: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-emerald-50 via-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Nossa <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-600">Visão</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Construindo o futuro da gestão secretarial com propósito, direção e impacto global.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Vision Content */}
          <div className="space-y-8">
            <div className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
              <Eye className="h-8 w-8 text-indigo-500 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Visão de Futuro</h3>
                <p className="text-gray-600 leading-relaxed">
                 " Inovação Adaptável: Não oferecemos soluções de prateleira. Ouvimos, entendemos e adaptamos nosso conhecimento para criar a solução perfeita para cada desafio. "
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
              <Target className="h-8 w-8 text-purple-600 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Objetivos Estratégicos</h3>
                <p className="text-gray-600 leading-relaxed">
                  Expandir nossa atuação para 500 cidades até 2030.
        
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
              <Compass className="h-8 w-8 text-blue-600 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Direcionamento</h3>
                <p className="text-gray-600 leading-relaxed">
                  Guiados pela inovação tecnológica, consultoria, acessoria e excelência operacional, 
                  criamos valor para clientes, colaboradores e sociedade.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
              <Globe className="h-8 w-8 text-emerald-600 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Impacto Global</h3>
                <p className="text-gray-600 leading-relaxed">
                  Contribuir ativamente para a melhoria e gestão acessorial das empresas que preciam de secretários capacitados,
                  promovendo mudança constante e eficaz para o seu negócio.
                </p>
              </div>
            </div>
               <div className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
              <Globe className="h-8 w-8 text-green-600 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Missão</h3>
                <p className="text-gray-600 leading-relaxed">
                  Potencializar o crescimento de negócios ao fornecer inteligência executiva, otimizando processos e liberando os gestores para focar no que é verdadeiramente estratégico.
                </p>
              </div>
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/414837/pexels-photo-414837.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Visão sustentável"
              className="rounded-2xl shadow-2xl w-full h-96 object-cover"
            />
            <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-emerald-600 to-blue-600 p-6 rounded-2xl text-white shadow-lg">
            <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-indigo-500 to-purple-600 p-6 rounded-2xl text-white shadow-lg">
              <div className="text-center">
                <div className="text-3xl font-bold mb-1">2030</div>
                <div className="text-sm opacity-90">Meta acessorial</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

  )
}