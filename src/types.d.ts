type Dictionary = {
    common: {
        loading: string;
        contact: string;
        learn_more: string;
        view_all: string;
        install_app: string;
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
    stats: {
        charge_speed: string;
        power: string;
        connectivity: string;
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
    app_section: {
        title: string;
        description: string;
        features: string[];
    };
    footer: {
        rights: string;
        credit: string;
    };
};
