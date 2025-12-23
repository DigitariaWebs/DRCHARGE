type Dictionary = {
  common: {
    loading: string;
    contact: string;
    learn_more: string;
    view_all: string;
    install_app: string;
    explore: string;
    discover: string;
  };
  nav: {
    home: string;
    services: string;
    about: string;
    faq: string;
    contact: string;
  };
  hero: {
    title: string;
    subtitle: string;
    cta_primary: string;
    cta_secondary: string;
    scroll_hint: string;
  };
  challenge: {
    badge: string;
    title: string;
    subtitle: string;
    stat_label: string;
  };
  tech_pillars: {
    badge: string;
    title: string;
    subtitle: string;
    items: {
      speed: {
        title: string;
        description: string;
        detail: string;
      };
      security: {
        title: string;
        description: string;
        detail: string;
      };
      sustainability: {
        title: string;
        description: string;
        detail: string;
      };
    };
  };
  innovation: {
    badge: string;
    title: string;
    subtitle: string;
    features: string[];
    cta: string;
  };
  services: {
    title: string;
    items: {
      station: {
        title: string;
        description: string;
      };
      powerbank: {
        title: string;
        description: string;
      };
      truck: {
        title: string;
        description: string;
      };
    };
  };
  mobile_truck: {
    badge: string;
    title: string;
    subtitle: string;
    cta: string;
  };
  impact: {
    badge: string;
    title: string;
    subtitle: string;
    stats: {
      charge_speed: {
        value: string;
        unit: string;
        label: string;
      };
      power: {
        value: string;
        unit: string;
        label: string;
      };
      connectivity: {
        value: string;
        unit: string;
        label: string;
      };
    };
  };
  stats: {
    charge_speed: string;
    power: string;
    connectivity: string;
  };
  sustainability: {
    badge: string;
    title: string;
    subtitle: string;
    metrics: {
      co2_saved: {
        value: string;
        unit: string;
        label: string;
        description: string;
      };
      renewable: {
        value: string;
        unit: string;
        label: string;
        description: string;
      };
      devices: {
        value: string;
        unit: string;
        label: string;
        description: string;
      };
    };
    calculator: {
      title: string;
      description: string;
    };
  };
  app_section: {
    title: string;
    description: string;
    features: string[];
    download: string;
  };
  about: {
    title: string;
    mission: string;
  };
  faq: {
    title: string;
  };
  contact: {
    title: string;
    form: {
      name: string;
      email: string;
      phone: string;
      subject: string;
      message: string;
      send: string;
      success: string;
    };
  };
  footer: {
    rights: string;
    credit: string;
    newsletter: {
      title: string;
      placeholder: string;
      button: string;
      success: string;
    };
    certifications: {
      carbon_neutral: string;
      green_energy: string;
    };
  };
};
