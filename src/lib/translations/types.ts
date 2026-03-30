export interface ProductTranslation {
  tagline: string;
  description: string;
  features: string[];
  detailFeatures: {
    title: string;
    description: string;
  }[];
  stats?: { label: string }[];
  badge?: string;
}

export interface Translations {
  locale: "cs" | "pl";

  header: {
    products: string;
    contact: string;
    terms: string;
  };

  footer: {
    tagline: string;
    productsHeading: string;
    infoHeading: string;
    contact: string;
    terms: string;
    copyright: string;
    operator: string;
  };

  hero: {
    badge: string;
    title1: string;
    title2: string;
    subtitle: string;
    ctaProducts: string;
    ctaContact: string;
    stats: { value: string; label: string }[];
  };

  productsSection: {
    title: string;
    subtitle: string;
  };

  testimonials: {
    title: string;
    subtitle: string;
    items: {
      name: string;
      role: string;
      text: string;
      product: string;
    }[];
  };

  faq: {
    title: string;
    subtitle: string;
    items: { q: string; a: string }[];
  };

  cta: {
    title: string;
    subtitle: string;
    button: string;
  };

  kontakt: {
    breadcrumb: string;
    title: string;
    subtitle: string;
    nameLabel: string;
    namePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    subjectLabel: string;
    subjectPlaceholder: string;
    messageLabel: string;
    messagePlaceholder: string;
    submit: string;
    emailHeading: string;
    emailNote: string;
    addressHeading: string;
    addressLines: string[];
    responseHeading: string;
    responseItems: { label: string; value: string }[];
  };

  pokladna: {
    breadcrumb: string;
    title: string;
    subtitle: string;
    selectProduct: string;
    billingDetails: string;
    companyLabel: string;
    companyPlaceholder: string;
    icoLabel: string;
    icoPlaceholder: string;
    dicLabel: string;
    dicPlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    addressLabel: string;
    addressPlaceholder: string;
    submitButton: string;
    submitNote: string;
    submitNoteLink: string;
    summaryTitle: string;
    licenseType: string;
    licenseValue: string;
    total: string;
    totalValue: string;
    totalNote: string;
  };

  terms: {
    breadcrumb: string;
    title: string;
    effectiveDate: string;
    sections: {
      title: string;
      content: string;
      isList?: boolean;
      isCard?: boolean;
    }[];
  };

  produktDetail: {
    breadcrumbProducts: string;
    buyFor: string;
    trialBadge: string;
    featuresTitle: (name: string) => string;
    allFeaturesTitle: string;
    integrationsTitle: string;
    ctaTitle: (name: string) => string;
    ctaSubtitle: string;
    ctaButton: string;
  };

  productCard: {
    detail: string;
    badgeBestseller: string;
    badgeNew: string;
  };

  productData: Record<string, ProductTranslation>;
}
