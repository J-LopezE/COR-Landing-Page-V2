import React from "react";
import {
  Mail,
  Phone,
  MessageCircle,
  Monitor,
  Clock,
  Zap,
  ArrowRight,
  CheckCircle,
  Facebook,
  Twitter,
  Instagram,
  Link,
  Image
} from "lucide-react";
import Logo from "../../src/img/logocor.svg";

export const Footer = () => {
  return (
    <footer className="bg-gray-950 text-white py-16">
      <div className="max-w-8xl mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <img className="h-10 w-10" src={Logo} alt="Logo de Cor Computadoras" />
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full animate-pulse"></div>
              </div>
              <div>
                <span className="text-2xl font-bold">COR</span>
                <span className="text-2xl font-light text-blue-400 ml-1">
                  Computadoras
                </span>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Tu socio confiable en soluciones tecnológicas. Más de 8 años
              brindando servicios de calidad en reparación, venta de equipos de
              cómputo y desarrollo de software.
            </p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center hover:bg-blue-700 cursor-pointer transition-colors">
                <Facebook className="h-5 w-5" />
              </div>
              <div className="w-10 h-10 bg-pink-600 rounded-lg flex items-center justify-center hover:bg-pink-700 cursor-pointer transition-colors">
                <Instagram className="h-5 w-5" />
              </div>
              <div className="w-10 h-10 bg-blue-400 rounded-lg flex items-center justify-center hover:bg-blue-500 cursor-pointer transition-colors">
                <Twitter className="h-5 w-5" />
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-xl mb-6 text-white">Servicios</h3>
            <ul className="space-y-3 text-gray-400">
              <li>
                <p
                  href="#servicios"
                  className="hover:text-white transition-colors flex items-center space-x-2"
                >
                  <ArrowRight className="h-4 w-4" />
                  <span>Reparación de PC</span>
                </p>
              </li>
              <li>
                <p
                  href="#servicios"
                  className="hover:text-white transition-colors flex items-center space-x-2"
                >
                  <ArrowRight className="h-4 w-4" />
                  <span>Reparación Móviles</span>
                </p>
              </li>
              <li>
                <p
                  href="#servicios"
                  className="hover:text-white transition-colors flex items-center space-x-2"
                >
                  <ArrowRight className="h-4 w-4" />
                  <span>Redes y WiFi</span>
                </p>
              </li>
              <li>
                <p
                  href="#servicios"
                  className="hover:text-white transition-colors flex items-center space-x-2"
                >
                  <ArrowRight className="h-4 w-4" />
                  <span>Recuperación de Datos</span>
                </p>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-xl mb-6 text-white">Productos</h3>
            <ul className="space-y-3 text-gray-400">
              <li>
                <p
                  href="#productos"
                  className="hover:text-white transition-colors flex items-center space-x-2"
                >
                  <ArrowRight className="h-4 w-4" />
                  <span>Laptops</span>
                </p>
              </li>
              <li>
                <p
                  href="#productos"
                  className="hover:text-white transition-colors flex items-center space-x-2"
                >
                  <ArrowRight className="h-4 w-4" />
                  <span>Computadoras</span>
                </p>
              </li>
              <li>
                <p
                  href="#productos"
                  className="hover:text-white transition-colors flex items-center space-x-2"
                >
                  <ArrowRight className="h-4 w-4" />
                  <span>Smartphones</span>
                </p>
              </li>
              <li>
                <p
                  href="#productos"
                  className="hover:text-white transition-colors flex items-center space-x-2"
                >
                  <ArrowRight className="h-4 w-4" />
                  <span>Accesorios</span>
                </p>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-xl mb-6 text-white">Horarios</h3>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-center space-x-2">
                <Clock className="h-4 w-4 text-blue-400" />
                <span>Lunes - Viernes: 9:00 AM - 7:00 PM</span>
              </li>
              <li className="flex items-center space-x-2">
                <Clock className="h-4 w-4 text-blue-400" />
                <span>Sábados: 9:00 AM - 5:00 PM</span>
              </li>
              <li className="flex items-center space-x-2">
                <Clock className="h-4 w-4 text-blue-400" />
                <span>Domingos: 10:00 AM - 3:00 PM</span>
              </li>
              <li className="flex items-center space-x-2">
                <Zap className="h-4 w-4 text-green-400" />
                <span className="text-green-400 font-medium">
                  Soporte 24/7 disponible
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400">
              &copy; {new Date().getFullYear()} COR Computadoras. Todos los
              derechos reservados.
            </p>
            <div className="flex items-center space-x-6 text-gray-400">
              <p href="#" className="hover:text-white transition-colors">
                Política de Privacidad
              </p>
              <p href="#" className="hover:text-white transition-colors">
                Términos de Servicio
              </p>
              <p href="#" className="hover:text-white transition-colors">
                Garantías
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
