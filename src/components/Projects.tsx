import React from 'react';
import { ExternalLink, TrendingUp, Award, Users, Calendar } from 'lucide-react';

export const Projects: React.FC = () => {
  const projects = [
    {
      title: "Reestruturação Financeira - Empresa de Tecnologia",
      category: "Financeiro",
      professional: "Alana Alves",
      image: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800",
      improvement: "40%",
      description: "Reorganização completa dos processos financeiros e implementação de controles de gestão.",
      services: ["Controle de Fluxo de Caixa", "Relatórios Gerenciais", "Gestão de Contas"],
      results: ["40% redução no tempo de fechamento", "R$ 120k economia anual", "100% conformidade fiscal"]
    },
    {
      title: "Campanha de Marketing Digital - E-commerce",
      category: "Marketing",
      professional: "Priscila Soares",
      image: "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800",
      improvement: "65%",
      description: "Desenvolvimento e execução de estratégia completa de marketing digital e branding.",
      services: ["Gestão de Redes Sociais", "Campanhas Publicitárias", "Análise de Métricas"],
      results: ["65% aumento no engajamento", "R$ 300k em vendas geradas", "ROI de 450%"]
    },
    {
      title: "Otimização Logística - Indústria Alimentícia",
      category: "Logística",
      professional: "Vitória Pitre",
      image: "https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=800",
      improvement: "50%",
      description: "Reorganização da cadeia de suprimentos e otimização de processos logísticos.",
      services: ["Gestão de Estoque", "Controle de Fornecedores", "Logística de Distribuição"],
      results: ["50% redução no tempo de entrega", "R$ 200k economia em custos", "98% satisfação do cliente"]
    },
    {
      title: "Programa de Desenvolvimento - Multinacional",
      category: "Recursos Humanos",
      professional: "Luiz Felipe",
      image: "https://images.pexels.com/photos/1181534/pexels-photo-1181534.jpeg?auto=compress&cs=tinysrgb&w=800",
      improvement: "80%",
      description: "Implementação de programa completo de gestão de talentos e desenvolvimento profissional.",
      services: ["Recrutamento Especializado", "Treinamentos", "Avaliação de Performance"],
      results: ["80% melhoria na retenção", "R$ 150k economia em turnover", "95% satisfação dos funcionários"]
    }
  ];

  const getCategoryColor = (category: string) => {
    const colors = {
      'Financeiro': 'bg-emerald-500',
      'Marketing': 'bg-purple-500',
      'Logística': 'bg-blue-500',
      'Recursos Humanos': 'bg-amber-500'
    };
    return colors[category as keyof typeof colors] || 'bg-gray-500';
  };

  return (
    <section id="projetos" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Projetos de <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-600">Secretariado</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Conheça alguns dos projetos mais impactantes realizados por nossos secretários executivos 
            e os resultados extraordinários alcançados para nossos clientes.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:transform hover:-translate-y-2 group"
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className={`absolute top-4 left-4 ${getCategoryColor(project.category)} text-white px-3 py-1 rounded-full text-sm font-semibold`}>
                  {project.category}
                </div>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-indigo-500 px-3 py-1 rounded-full text-sm font-bold">
                  +{project.improvement}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <Users className="h-4 w-4 text-gray-500 mr-2" />
                  <span className="text-sm text-gray-600">Por: {project.professional}</span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>

                {/* Services */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.services.map((service, serviceIndex) => (
                      <span
                        key={serviceIndex}
                        className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium"
                      >
                        {service}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Results */}
                <div className="space-y-2 mb-6">
                  {project.results.map((result, resultIndex) => (
                    <div key={resultIndex} className="flex items-center text-sm text-gray-600">
                      <TrendingUp className="h-4 w-4 text-indigo-500 mr-2 flex-shrink-0" />
                      {result}
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <button className="flex items-center text-indigo-500 font-semibold hover:text-indigo-600 transition-colors duration-200 group-hover:translate-x-2 transform transition-transform">
                  Ver detalhes
                  <ExternalLink className="h-4 w-4 ml-2" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-3xl p-8 md:p-12 text-white">
          <div className="text-center mb-8">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">Resultados que Transformam Negócios</h3>
            <p className="text-xl opacity-90">Números que demonstram a excelência do nosso secretariado executivo</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="group">
              <Award className="h-12 w-12 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
              <div className="text-4xl font-bold mb-2">200+</div>
              <div className="text-lg opacity-90">Projetos Executados</div>
            </div>
            <div className="group">
              <Users className="h-12 w-12 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
              <div className="text-4xl font-bold mb-2">150+</div>
              <div className="text-lg opacity-90">Empresas Atendidas</div>
            </div>
            <div className="group">
              <TrendingUp className="h-12 w-12 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
              <div className="text-4xl font-bold mb-2">R$ 5M</div>
              <div className="text-lg opacity-90">Economia Gerada</div>
            </div>
            <div className="group">
              <Calendar className="h-12 w-12 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
              <div className="text-4xl font-bold mb-2">98%</div>
              <div className="text-lg opacity-90">Satisfação dos Clientes</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};