import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section
      id="home"
      className="pt-16 min-h-screen bg-gradient-to-br from-ice-50 via-white to-ice-100 flex items-center"
    >
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="animate-fade-in">
            <h1 className="font-montserrat font-bold text-5xl lg:text-6xl text-ice-900 mb-6 leading-tight">
              Школа фигурного катания
              <span className="block text-ice-600">«Снежинка»</span>
            </h1>

            <p className="font-open-sans text-xl text-frost-600 mb-8 leading-relaxed">
              Откройте мир грации и красоты на льду. Профессиональные тренеры,
              индивидуальный подход и современные методики обучения для всех
              возрастов.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button
                size="lg"
                className="bg-ice-500 hover:bg-ice-600 text-white font-open-sans px-8"
              >
                <Icon name="Snowflake" size={20} className="mr-2" />
                Записаться на занятие
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-ice-300 text-ice-700 hover:bg-ice-50"
              >
                <Icon name="Play" size={20} className="mr-2" />
                Узнать больше
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8">
              <div className="text-center">
                <div className="font-montserrat font-bold text-3xl text-ice-600 mb-1">
                  8+
                </div>
                <div className="font-open-sans text-sm text-frost-600">
                  лет опыта
                </div>
              </div>
              <div className="text-center">
                <div className="font-montserrat font-bold text-3xl text-ice-600 mb-1">
                  200+
                </div>
                <div className="font-open-sans text-sm text-frost-600">
                  учеников
                </div>
              </div>
              <div className="text-center">
                <div className="font-montserrat font-bold text-3xl text-ice-600 mb-1">
                  15+
                </div>
                <div className="font-open-sans text-sm text-frost-600">
                  наград
                </div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative animate-scale-in">
            <div className="absolute inset-0 bg-gradient-to-br from-ice-400/20 to-ice-600/20 rounded-3xl transform rotate-3"></div>
            <img
              src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=700&fit=crop&crop=center"
              alt="Фигурное катание"
              className="relative w-full h-[500px] object-cover rounded-3xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-white rounded-full shadow-lg flex items-center justify-center">
              <span className="text-3xl">⛸️</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
