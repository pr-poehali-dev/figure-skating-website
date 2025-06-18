import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Services = () => {
  const services = [
    {
      title: "Индивидуальные занятия",
      description:
        "Персональные тренировки с опытным тренером для максимального прогресса",
      icon: "UserCheck",
      features: ["Персональный подход", "Гибкий график", "Быстрый прогресс"],
      price: "от 2500 ₽/занятие",
    },
    {
      title: "Подготовка к соревнованиям",
      description:
        "Специализированная подготовка спортсменов к участию в соревнованиях",
      icon: "Trophy",
      features: [
        "Постановка программ",
        "Психологическая подготовка",
        "Техническая отработка",
      ],
      price: "по договоренности",
    },
    {
      title: "Хореография на льду",
      description: "Развитие артистичности и музыкальности в фигурном катании",
      icon: "Music",
      features: ["Постановка танцев", "Работа с музыкой", "Артистизм"],
      price: "от 1800 ₽/занятие",
    },
  ];

  const methodology = [
    {
      title: "Игровой подход",
      description:
        "Обучение через игру делает процесс увлекательным и эффективным",
      icon: "Gamepad2",
    },
    {
      title: "Индивидуальная программа",
      description: "Каждый ученик получает персональный план развития",
      icon: "Target",
    },
    {
      title: "Современные методики",
      description: "Используем передовые техники обучения фигурному катанию",
      icon: "BookOpen",
    },
    {
      title: "Безопасность прежде всего",
      description: "Особое внимание технике безопасности на льду",
      icon: "Shield",
    },
  ];

  return (
    <section
      id="services"
      className="py-20 bg-gradient-to-bl from-winter-peach via-pastel-purple to-winter-lavender relative overflow-hidden"
    >
      {/* Beautiful floating elements */}
      <div className="absolute top-16 left-16 w-20 h-20 bg-gradient-to-br from-winter-pink/30 to-winter-purple/30 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute top-1/3 right-20 w-32 h-32 bg-gradient-to-br from-winter-mint/25 to-winter-blue/25 rounded-full blur-2xl"></div>
      <div className="absolute bottom-16 left-1/4 w-24 h-24 bg-gradient-to-br from-winter-peach/35 to-pastel-pink/35 rounded-full blur-xl"></div>
      <div className="absolute bottom-1/4 right-1/3 w-16 h-16 bg-gradient-to-br from-winter-purple/40 to-winter-lavender/40 rounded-full blur-lg animate-pulse"></div>
      <div className="container mx-auto px-4">
        {/* Services */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="font-montserrat font-bold text-4xl text-ice-900 mb-4">
              Дополнительные услуги
            </h2>
            <p className="font-open-sans text-xl text-frost-600 max-w-2xl mx-auto">
              Расширенные возможности для углубленного изучения фигурного
              катания
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="hover:shadow-xl transition-all duration-300 border-ice-200 bg-white/80 backdrop-blur-sm"
              >
                <CardHeader className="text-center pb-4">
                  <div className="w-20 h-20 bg-gradient-to-br from-ice-400 to-ice-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon
                      name={service.icon as any}
                      size={36}
                      className="text-white"
                    />
                  </div>
                  <CardTitle className="font-montserrat text-ice-900 mb-2">
                    {service.title}
                  </CardTitle>
                  <p className="font-open-sans text-frost-600">
                    {service.description}
                  </p>
                </CardHeader>
                <CardContent className="text-center">
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-center justify-center font-open-sans text-sm text-frost-700"
                      >
                        <Icon
                          name="Check"
                          size={16}
                          className="text-ice-500 mr-2"
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="font-montserrat font-semiBold text-ice-700 mb-4">
                    {service.price}
                  </div>
                  <Button className="w-full bg-ice-500 hover:bg-ice-600 text-white">
                    Узнать подробнее
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Methodology */}
        <div>
          <div className="text-center mb-16">
            <h2 className="font-montserrat font-bold text-4xl text-ice-900 mb-4">
              Особенности методики
            </h2>
            <p className="font-open-sans text-xl text-frost-600 max-w-2xl mx-auto">
              Наш уникальный подход к обучению фигурному катанию
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {methodology.map((method, index) => (
              <div
                key={index}
                className="text-center group hover:scale-105 transition-transform duration-300"
              >
                <div className="w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center mx-auto mb-4 group-hover:shadow-xl transition-shadow">
                  <Icon
                    name={method.icon as any}
                    size={28}
                    className="text-ice-600"
                  />
                </div>
                <h3 className="font-montserrat font-semiBold text-ice-900 mb-2">
                  {method.title}
                </h3>
                <p className="font-open-sans text-sm text-frost-600">
                  {method.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 max-w-2xl mx-auto border border-ice-200">
            <h3 className="font-montserrat font-bold text-2xl text-ice-900 mb-4">
              Готовы начать путь на льду?
            </h3>
            <p className="font-open-sans text-frost-600 mb-6">
              Запишитесь на пробное занятие и почувствуйте магию фигурного
              катания
            </p>
            <Button
              size="lg"
              className="bg-ice-500 hover:bg-ice-600 text-white px-8"
            >
              <Icon name="Phone" size={20} className="mr-2" />
              Записаться на пробное занятие
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
