import { useState } from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: "Главная", href: "#home" },
    { name: "О школе", href: "#about" },
    { name: "Программы", href: "#programs" },
    { name: "Услуги", href: "#services" },
    { name: "Контакты", href: "#contacts" },
  ];

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-ice-200">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-ice-400 to-ice-600 rounded-full flex items-center justify-center">
              <span className="text-white text-sm font-bold">❄</span>
            </div>
            <span className="font-montserrat font-bold text-xl text-ice-800">
              Снежинка
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="font-open-sans text-frost-600 hover:text-ice-600 transition-colors duration-200"
              >
                {item.name}
              </a>
            ))}
            <Button className="bg-ice-500 hover:bg-ice-600 text-white font-open-sans">
              Записаться
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            <Icon name={isOpen ? "X" : "Menu"} size={24} />
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-ice-200">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block py-2 font-open-sans text-frost-600 hover:text-ice-600"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <Button className="w-full mt-4 bg-ice-500 hover:bg-ice-600 text-white">
              Записаться
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
