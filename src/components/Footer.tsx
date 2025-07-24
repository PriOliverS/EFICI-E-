import React from 'react';
import { Zap, Mail, Phone, MapPin, Linkedin, Instagram, Twitter } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <Zap className="h-8 w-8 text-indigo-400" />
              <span className="text-2xl font-bold">Efici-E</span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              A gente organiza, você cresce.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors duration-200">
              <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors duration-200">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors duration-200">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors duration-200">
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Serviços</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Suporte</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Acessoria</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">planos</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Monitoramento 24/7</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Consultoria</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Empresa</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Sobre Nós</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Nossa Equipe</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Carreiras</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Parceiros</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Blog</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contato</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-indigo-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-400">(11) 9999-8888</p>
                  <p className="text-gray-400">(11) 3333-4444</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-indigo-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-400">contato@efici-e.com.br</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-indigo-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-400">Av. Paulista, 1000 - Sala 500</p>
                  <p className="text-gray-400">São Paulo, SP - 01310-100</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 Efici-E. Todos os direitos reservados.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                Política de Privacidade
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                Termos de Uso
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

  )
}