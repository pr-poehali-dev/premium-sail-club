import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const services = [
    {
      icon: 'Anchor',
      title: 'Парковочные места',
      description: 'Безопасные места для лодок и яхт на воде с круглосуточной охраной',
    },
    {
      icon: 'Warehouse',
      title: 'Хранение',
      description: 'Отапливаемые помещения для зимнего и летнего хранения вашего судна',
    },
    {
      icon: 'Ship',
      title: 'Погрузка баржей',
      description: 'Услуга баржи с краном для безопасной погрузки судна на сушу',
    },
    {
      icon: 'Fuel',
      title: 'Топливо',
      description: 'Качественное топливо для всех типов судов по выгодным ценам',
    },
    {
      icon: 'Paintbrush',
      title: 'Покраска',
      description: 'Профессиональная покраска судна современными материалами',
    },
    {
      icon: 'Wrench',
      title: 'Ремонт',
      description: 'Полный спектр ремонтных работ любой сложности',
    },
    {
      icon: 'UtensilsCrossed',
      title: 'Банкеты',
      description: 'Ресторан на берегу с панорамным видом на реку',
    },
    {
      icon: 'ShieldCheck',
      title: 'Безопасность',
      description: 'Охраняемая территория с видеонаблюдением 24/7',
    },
  ];

  const gallery = [
    {
      url: 'https://cdn.poehali.dev/projects/b35afa84-7882-4db5-a4e0-13866ffce62c/files/9b0ad46c-e016-48ca-82d6-26308309858f.jpg',
      title: 'Марина яхт-клуба',
    },
    {
      url: 'https://cdn.poehali.dev/projects/b35afa84-7882-4db5-a4e0-13866ffce62c/files/aed59fca-29f9-41d7-9c49-f52b092c0947.jpg',
      title: 'Ресторан на берегу',
    },
    {
      url: 'https://cdn.poehali.dev/projects/b35afa84-7882-4db5-a4e0-13866ffce62c/files/715285c8-ddf6-4a59-b041-a33cff5a1ef9.jpg',
      title: 'Крытое хранилище',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm shadow-sm z-50 border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon name="Anchor" className="text-primary" size={32} />
              <h1 className="text-2xl font-bold text-primary">Премиум-Парус</h1>
            </div>
            <div className="hidden md:flex gap-6">
              <a href="#home" className="text-foreground hover:text-accent transition-colors font-medium">
                Главная
              </a>
              <a href="#services" className="text-foreground hover:text-accent transition-colors font-medium">
                Услуги
              </a>
              <a href="#gallery" className="text-foreground hover:text-accent transition-colors font-medium">
                Фотогалерея
              </a>
              <a href="#contact" className="text-foreground hover:text-accent transition-colors font-medium">
                Контакты
              </a>
            </div>
            <Button className="bg-accent text-accent-foreground hover:bg-accent/90">
              Забронировать
            </Button>
          </div>
        </div>
      </nav>

      <section
        id="home"
        className="relative h-screen flex items-center justify-center text-white overflow-hidden"
        style={{
          backgroundImage:
            'url(https://cdn.poehali.dev/projects/b35afa84-7882-4db5-a4e0-13866ffce62c/files/9b0ad46c-e016-48ca-82d6-26308309858f.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="relative z-10 text-center px-4 animate-fade-in">
          <h2 className="text-5xl md:text-7xl font-bold mb-6">Премиум-Парус</h2>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto font-light">
            Элитный яхт-клуб на берегу широкой реки
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
              Узнать больше
            </Button>
            <Button size="lg" variant="outline" className="bg-white/10 text-white border-white hover:bg-white/20 hover:text-white">
              Связаться с нами
            </Button>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <Icon name="ChevronDown" className="text-white" size={40} />
        </div>
      </section>

      <section id="services" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-primary mb-4">Наши услуги</h3>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Полный спектр услуг для владельцев яхт и лодок
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card
                key={index}
                className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 border-border animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon name={service.icon as any} className="text-primary" size={24} />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="animate-fade-in">
              <Icon name="Anchor" className="mx-auto mb-4 text-accent" size={48} />
              <div className="text-5xl font-bold mb-2">200+</div>
              <div className="text-lg opacity-90">Парковочных мест</div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <Icon name="Users" className="mx-auto mb-4 text-accent" size={48} />
              <div className="text-5xl font-bold mb-2">500+</div>
              <div className="text-lg opacity-90">Довольных клиентов</div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <Icon name="Award" className="mx-auto mb-4 text-accent" size={48} />
              <div className="text-5xl font-bold mb-2">15</div>
              <div className="text-lg opacity-90">Лет на рынке</div>
            </div>
          </div>
        </div>
      </section>

      <section id="gallery" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-primary mb-4">Фотогалерея</h3>
            <p className="text-muted-foreground text-lg">Наш клуб и услуги</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {gallery.map((image, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-xl group cursor-pointer animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <p className="text-white text-xl font-semibold p-6">{image.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        className="py-20 relative"
        style={{
          backgroundImage:
            'url(https://cdn.poehali.dev/projects/b35afa84-7882-4db5-a4e0-13866ffce62c/files/aed59fca-29f9-41d7-9c49-f52b092c0947.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >
        <div className="absolute inset-0 bg-black/85"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center text-white">
            <Icon name="UtensilsCrossed" className="mx-auto mb-6 text-accent" size={64} />
            <h3 className="text-4xl font-bold mb-6">Ресторан на берегу</h3>
            <p className="text-xl mb-8 leading-relaxed">
              Проведите незабываемый банкет или праздник в нашем ресторане с панорамным видом на реку и закат.
              Изысканная кухня, профессиональное обслуживание и атмосфера премиум-класса.
            </p>
            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
              Забронировать стол
            </Button>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div>
              <h3 className="text-4xl font-bold text-primary mb-6">Свяжитесь с нами</h3>
              <p className="text-muted-foreground mb-8 text-lg">
                Оставьте заявку, и мы свяжемся с вами в ближайшее время
              </p>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Icon name="MapPin" className="text-accent mt-1" size={24} />
                  <div>
                    <div className="font-semibold text-lg">Адрес</div>
                    <div className="text-muted-foreground">Набережная Яхтсменов, 15</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Icon name="Phone" className="text-accent mt-1" size={24} />
                  <div>
                    <div className="font-semibold text-lg">Телефон</div>
                    <div className="text-muted-foreground">+7 (495) 123-45-67</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Icon name="Mail" className="text-accent mt-1" size={24} />
                  <div>
                    <div className="font-semibold text-lg">Email</div>
                    <div className="text-muted-foreground">info@premium-parus.ru</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Icon name="Clock" className="text-accent mt-1" size={24} />
                  <div>
                    <div className="font-semibold text-lg">Режим работы</div>
                    <div className="text-muted-foreground">Ежедневно, 8:00 — 22:00</div>
                  </div>
                </div>
              </div>
            </div>
            <Card className="border-2">
              <CardHeader>
                <CardTitle className="text-2xl">Оставить заявку</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div>
                    <Input placeholder="Ваше имя" className="border-2" />
                  </div>
                  <div>
                    <Input type="tel" placeholder="Телефон" className="border-2" />
                  </div>
                  <div>
                    <Input type="email" placeholder="Email" className="border-2" />
                  </div>
                  <div>
                    <Textarea placeholder="Сообщение" rows={4} className="border-2" />
                  </div>
                  <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90" size="lg">
                    Отправить заявку
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Anchor" size={28} />
                <h4 className="text-xl font-bold">Премиум-Парус</h4>
              </div>
              <p className="opacity-80 text-sm">Элитный яхт-клуб для истинных ценителей морской жизни</p>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Услуги</h5>
              <ul className="space-y-2 text-sm opacity-80">
                <li>Парковка и хранение</li>
                <li>Ремонт и покраска</li>
                <li>Топливо</li>
                <li>Банкеты</li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Контакты</h5>
              <ul className="space-y-2 text-sm opacity-80">
                <li>+7 (495) 123-45-67</li>
                <li>info@premium-parus.ru</li>
                <li>Набережная Яхтсменов, 15</li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Соцсети</h5>
              <div className="flex gap-4">
                <Icon name="Instagram" className="cursor-pointer hover:text-accent transition-colors" size={24} />
                <Icon name="Facebook" className="cursor-pointer hover:text-accent transition-colors" size={24} />
                <Icon name="Youtube" className="cursor-pointer hover:text-accent transition-colors" size={24} />
              </div>
            </div>
          </div>
          <div className="border-t border-white/20 pt-8 text-center text-sm opacity-80">
            <p>© 2024 Премиум-Парус. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;