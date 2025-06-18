import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Programs = () => {
  const ageGroups = [
    {
      title: "Дети от 4 лет",
      description:
        "Игровые методики обучения, развитие координации и базовых навыков",
      icon: "Baby",
      ages: "4-12 лет",
      features: ["Игровой подход", "Групповые занятия", "Безопасность"],
    },
    {
      title: "Подростки",
      description: "Углубленная техника, подготовка к соревнованиям",
      icon: "Users",
      ages: "13-17 лет",
      features: ["Техническая база", "Соревнования", "Командный дух"],
    },
    {
      title: "Взрослые группы",
      description: "Обучение с нуля или совершенствование навыков для взрослых",
      icon: "User",
      ages: "18+ лет",
      features: ["Гибкий график", "Индивидуальный темп", "Оздоровление"],
    },
  ];

  const levels = [
    {
      title: "Начинающие",
      description: "Первые шаги на льду, основы баланса и скольжения",
      color: "bg-green-100 text-green-800",
      skills: ["Стойка на коньках", "Простое скольжение", "Торможение"],
    },
    {
      title: "Продвинутые",
      description: "Элементы средней сложности, хореография",
      color: "bg-ice-100 text-ice-800",
      skills: ["Прыжки", "Вращения", "Связки элементов"],
    },
    {
      title: "Профессиональные",
      description: "Сложные элементы, подготовка к соревнованиям",
      color: "bg-purple-100 text-purple-800",
      skills: ["Сложные прыжки", "Программы", "Соревнования"],
    },
  ];

  return (
    <section
      id="programs"
      className="py-20 bg-gradient-to-r from-pastel-lavender via-white to-pastel-mint relative"
    >
      {/* Decorative background elements */}
      <div className="absolute top-10 right-20 w-28 h-28 bg-gradient-to-br from-winter-purple/20 to-winter-pink/20 rounded-full blur-2xl"></div>
      <div className="absolute bottom-20 left-10 w-36 h-36 bg-gradient-to-br from-winter-mint/25 to-winter-blue/25 rounded-full blur-3xl"></div>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-montserrat font-bold text-4xl text-ice-900 mb-4">
            Программы обучения
          </h2>
          <p className="font-open-sans text-xl text-frost-600 max-w-2xl mx-auto">
            Индивидуальный подход к каждому ученику с учетом возраста и уровня
            подготовки
          </p>
        </div>

        {/* Age Groups */}
        <div className="mb-20">
          <h3 className="font-montserrat font-semiBold text-2xl text-ice-800 mb-8 text-center">
            Возрастные группы
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {ageGroups.map((group, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-shadow duration-300 border-ice-200"
              >
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-ice-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon
                      name={group.icon as any}
                      size={32}
                      className="text-ice-600"
                    />
                  </div>
                  <CardTitle className="font-montserrat text-ice-900">
                    {group.title}
                  </CardTitle>
                  <Badge
                    variant="secondary"
                    className="bg-ice-100 text-ice-700"
                  >
                    {group.ages}
                  </Badge>
                </CardHeader>
                <CardContent>
                  <p className="font-open-sans text-frost-600 mb-4">
                    {group.description}
                  </p>
                  <ul className="space-y-2">
                    {group.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-center font-open-sans text-sm text-frost-700"
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
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Skill Levels */}
        <div>
          <h3 className="font-montserrat font-semiBold text-2xl text-ice-800 mb-8 text-center">
            Уровни подготовки
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {levels.map((level, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-shadow duration-300 border-ice-200"
              >
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="font-montserrat text-ice-900">
                      {level.title}
                    </CardTitle>
                    <Badge className={level.color}>Уровень {index + 1}</Badge>
                  </div>
                  <p className="font-open-sans text-frost-600">
                    {level.description}
                  </p>
                </CardHeader>
                <CardContent>
                  <h4 className="font-open-sans font-semiBold text-ice-800 mb-3">
                    Навыки:
                  </h4>
                  <ul className="space-y-2">
                    {level.skills.map((skill, idx) => (
                      <li
                        key={idx}
                        className="flex items-center font-open-sans text-sm text-frost-700"
                      >
                        <Icon
                          name="Star"
                          size={16}
                          className="text-ice-500 mr-2"
                        />
                        {skill}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Programs;
