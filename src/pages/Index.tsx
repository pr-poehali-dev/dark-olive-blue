import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import SpaceBackground from "@/components/SpaceBackground";
import { useState } from "react";

const Index = () => {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  const features = [
    {
      icon: "Sparkles",
      title: "Генерация контента",
      description: "Создавайте уникальный контент за секунды с помощью передовых нейросетей"
    },
    {
      icon: "Zap",
      title: "Молниеносная скорость",
      description: "Обработка запросов в реальном времени без задержек"
    },
    {
      icon: "Brain",
      title: "Глубокое обучение",
      description: "ИИ адаптируется под ваши задачи и становится умнее с каждым использованием"
    },
    {
      icon: "Shield",
      title: "Безопасность данных",
      description: "Максимальная защита ваших данных и конфиденциальности"
    }
  ];

  const examples = [
    {
      title: "Анализ текста",
      description: "Извлечение ключевых данных и смысловых связей",
      icon: "FileText",
      color: "from-primary/20 to-primary/5"
    },
    {
      title: "Генерация изображений",
      description: "Создание уникальных визуалов по текстовому описанию",
      icon: "Image",
      color: "from-secondary/20 to-secondary/5"
    },
    {
      title: "Обработка кода",
      description: "Анализ, рефакторинг и генерация программного кода",
      icon: "Code",
      color: "from-accent/20 to-accent/5"
    }
  ];

  const plans = [
    {
      name: "Starter",
      price: "990",
      period: "мес",
      description: "Идеально для начинающих",
      features: [
        "100,000 токенов/мес",
        "Базовые модели ИИ",
        "Email поддержка",
        "Базовая аналитика"
      ],
      popular: false
    },
    {
      name: "Pro",
      price: "2,990",
      period: "мес",
      description: "Для профессионалов",
      features: [
        "1,000,000 токенов/мес",
        "Все модели ИИ",
        "Приоритетная поддержка 24/7",
        "Расширенная аналитика",
        "API доступ",
        "Кастомные интеграции"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "Индивидуально",
      period: "",
      description: "Для крупного бизнеса",
      features: [
        "Безлимитные токены",
        "Все возможности Pro",
        "Выделенная инфраструктура",
        "Персональный менеджер",
        "SLA 99.9%",
        "Кастомные модели"
      ],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-background relative">
      <SpaceBackground />
      <header className="border-b border-border/40 backdrop-blur-md sticky top-0 z-50 bg-background/60">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
              <Icon name="Sparkles" className="text-primary-foreground" size={24} />
            </div>
            <span className="text-2xl font-heading font-bold">AI Platform</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">Возможности</a>
            <a href="#examples" className="text-muted-foreground hover:text-foreground transition-colors">Примеры</a>
            <a href="#pricing" className="text-muted-foreground hover:text-foreground transition-colors">Тарифы</a>
            <Button variant="outline" size="sm">Войти</Button>
            <Button size="sm" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90">
              Начать бесплатно
            </Button>
          </nav>
        </div>
      </header>

      <section className="py-20 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
            <Badge className="bg-primary/10 text-primary hover:bg-primary/20 border-primary/20">
              <Icon name="Rocket" size={14} className="mr-1" />
              Революция в работе с ИИ
            </Badge>
            <h1 className="text-5xl md:text-7xl font-heading font-bold leading-tight">
              Искусственный интеллект{" "}
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                нового поколения
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Мощная платформа для работы с передовыми нейросетями. 
              Автоматизируйте задачи, создавайте контент и анализируйте данные с невероятной скоростью.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-lg px-8 animate-glow">
                Попробовать бесплатно
                <Icon name="ArrowRight" size={20} className="ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8">
                <Icon name="Play" size={20} className="mr-2" />
                Смотреть демо
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="py-20 bg-muted/10 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-heading font-bold">Возможности платформы</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Все инструменты для эффективной работы с искусственным интеллектом
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className="border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 animate-scale-in group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon name={feature.icon} className="text-primary" size={24} />
                  </div>
                  <CardTitle className="font-heading">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="examples" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-heading font-bold">Примеры использования</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              От анализа текста до генерации изображений
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {examples.map((example, index) => (
              <div 
                key={index}
                className="group cursor-pointer animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className={`h-48 rounded-2xl bg-gradient-to-br ${example.color} flex items-center justify-center mb-4 group-hover:scale-105 transition-transform duration-300`}>
                  <Icon name={example.icon} size={64} className="text-foreground/80" />
                </div>
                <h3 className="text-xl font-heading font-semibold mb-2">{example.title}</h3>
                <p className="text-muted-foreground">{example.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="py-20 bg-muted/10 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-heading font-bold">Тарифные планы</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Выберите оптимальный план для ваших задач
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <Card 
                key={index}
                className={`relative transition-all duration-300 hover:shadow-xl cursor-pointer animate-scale-in ${
                  plan.popular 
                    ? 'border-primary shadow-lg shadow-primary/20 scale-105' 
                    : 'border-border/50 hover:border-primary/50'
                } ${selectedPlan === plan.name ? 'ring-2 ring-primary' : ''}`}
                style={{ animationDelay: `${index * 100}ms` }}
                onClick={() => setSelectedPlan(plan.name)}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <Badge className="bg-gradient-to-r from-primary to-secondary text-primary-foreground px-4 py-1">
                      Популярный
                    </Badge>
                  </div>
                )}
                <CardHeader className="space-y-4">
                  <CardTitle className="font-heading text-2xl">{plan.name}</CardTitle>
                  <CardDescription className="text-base">{plan.description}</CardDescription>
                  <div className="pt-4">
                    {plan.price === "Индивидуально" ? (
                      <div className="text-3xl font-heading font-bold">{plan.price}</div>
                    ) : (
                      <div className="flex items-baseline gap-1">
                        <span className="text-5xl font-heading font-bold">{plan.price}</span>
                        <span className="text-muted-foreground">₽/{plan.period}</span>
                      </div>
                    )}
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <ul className="space-y-3">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <Icon name="Check" size={20} className="text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className={`w-full ${
                      plan.popular 
                        ? 'bg-gradient-to-r from-primary to-secondary hover:opacity-90' 
                        : ''
                    }`}
                    variant={plan.popular ? 'default' : 'outline'}
                  >
                    {plan.price === "Индивидуально" ? "Связаться с нами" : "Выбрать план"}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-border/40 py-12 bg-card/20 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                  <Icon name="Sparkles" className="text-primary-foreground" size={18} />
                </div>
                <span className="text-xl font-heading font-bold">AI Platform</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Передовая платформа для работы с искусственным интеллектом
              </p>
            </div>
            <div>
              <h4 className="font-heading font-semibold mb-4">Продукт</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">Возможности</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Примеры</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Документация</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">API</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-heading font-semibold mb-4">Компания</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">О нас</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Блог</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Карьера</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Контакты</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-heading font-semibold mb-4">Поддержка</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">Справка</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Статус</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Безопасность</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Правила</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border/40 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © 2024 AI Platform. Все права защищены.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Icon name="Github" size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Icon name="Twitter" size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Icon name="Linkedin" size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;