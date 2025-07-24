import React from 'react';
import { Target, Users, Lightbulb, Award } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Sobre o <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-600">Efici-E</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Somos pioneiros em soluções de eficiência energética, comprometidos em transformar 
            o modo como as empresas consomem e gerenciam energia.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Nossa Missão</h3>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Promover a sustentabilidade através de tecnologias inovadoras que otimizam o 
              consumo energético, reduzem custos operacionais e minimizam o impacto ambiental.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Através de análises detalhadas, monitoramento inteligente e soluções personalizadas, 
              ajudamos organizações a alcançarem seus objetivos de sustentabilidade.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-6 bg-emerald-50 rounded-2xl">
              <div className="text-center p-6 bg-indigo-50 rounded-2xl">
                <div className="text-3xl font-bold text-indigo-500 mb-2">100+</div>
                <div className="text-sm text-gray-600">Clientes Atendidos</div>
              </div>
              <div className="text-center p-6 bg-purple-50 rounded-2xl">
                <div className="text-3xl font-bold text-purple-600 mb-2">40%</div>
                <div className="text-sm text-gray-600">Redução Média</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <img
              src="https://images.pexels.com/photos/433308/pexels-photo-433308.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Painéis solares"
              className="rounded-2xl shadow-2xl w-full h-96 object-cover"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-lg">
              <div className="flex items-center space-x-3">
                <Award className="h-8 w-8 text-amber-500" />
                <div>
                  <div className="font-bold text-gray-900">Certificação ISO</div>
                  <div className="text-sm text-gray-600">Qualidade garantida</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-8 bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-2xl hover:shadow-lg transition-shadow duration-300">
            <Target className="h-16 w-16 text-indigo-500 mx-auto mb-4" />
            <h4 className="text-xl font-bold text-gray-900 mb-3">Precisão</h4>
            <p className="text-gray-600 leading-relaxed">
              Análises detalhadas e métricas precisas para identificar oportunidades 
              de otimização energética.
            </p>
          </div>

          <div className="text-center p-8 bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl hover:shadow-lg transition-shadow duration-300">
            <Users className="h-16 w-16 text-purple-600 mx-auto mb-4" />
            <h4 className="text-xl font-bold text-gray-900 mb-3">Parceria</h4>
            <p className="text-gray-600 leading-relaxed">
              Trabalhamos lado a lado com nossos clientes para garantir 
              resultados sustentáveis e duradouros.
            </p>
          </div>

          <div className="text-center p-8 bg-gradient-to-br from-amber-50 to-amber-100 rounded-2xl hover:shadow-lg transition-shadow duration-300">
            <Lightbulb className="h-16 w-16 text-amber-600 mx-auto mb-4" />
            <h4 className="text-xl font-bold text-gray-900 mb-3">Inovação</h4>
            <p className="text-gray-600 leading-relaxed">
              Tecnologias de ponta e soluções criativas para os desafios 
              energéticos do futuro.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
  )
}